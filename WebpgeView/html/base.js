// ========== DeepSeek API 配置 ==========
const DEEPSEEK_API_KEY = "sk-0745adefa4484d49bc14aea1c71b338b";
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";

// 全局变量
let map;
let markers = [];
let markerClusters;
let currentFilter = {
    types: ['all'],
    minRecommend: 5
};
let currentZoomLevel = 5;

// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const typeFilters = document.getElementById('typeFilters');
const recommendSlider = document.getElementById('recommendSlider');
const sliderValue = document.getElementById('sliderValue');
const recommendValue = document.getElementById('recommendValue');
const scenicListContainer = document.getElementById('scenicListContainer');
const resultCount = document.getElementById('resultCount');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const resetViewBtn = document.getElementById('resetViewBtn');
const locateChinaBtn = document.getElementById('locateChinaBtn');
const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const sidebar = document.getElementById('sidebar');

// ========== AI 助手功能 ==========
async function getAiReply(question) {
    const chatHistory = document.getElementById("aiChatHistory");
    const thinkingDiv = document.createElement('div');
    thinkingDiv.className = 'ai-thinking';
    thinkingDiv.innerHTML = '🤔 AI正在思考...';
    chatHistory.appendChild(thinkingDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    
    try {
        const res = await fetch(DEEPSEEK_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{role: "user", content: question}],
                temperature: 0.7
            })
        });
        
        const data = await res.json();
        const reply = data.choices[0]?.message?.content || "抱歉，暂时无法回答这个问题。";
        
        // 替换加载提示
        thinkingDiv.remove();
        const replyDiv = document.createElement('div');
        replyDiv.className = 'ai-reply-msg';
        replyDiv.innerHTML = `<strong>🤖 智能导游：</strong>${reply}`;
        chatHistory.appendChild(replyDiv);
    } catch (err) {
        thinkingDiv.remove();
        const errorDiv = document.createElement('div');
        errorDiv.className = 'ai-reply-msg';
        errorDiv.innerHTML = `<strong>🤖 智能导游：</strong>网络错误，请稍后重试。`;
        chatHistory.appendChild(errorDiv);
    }
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function initAiAssistant() {
    const sendBtn = document.getElementById("sendAiBtn");
    const aiInput = document.getElementById("aiInput");
    const chatHistory = document.getElementById("aiChatHistory");
    
 
        
        // 显示用户问题
        const userDiv = document.createElement('div');
        userDiv.className = 'user-msg';
        userDiv.innerHTML = `<strong>👤 你：</strong>${question}`;
        chatHistory.appendChild(userDiv);
        
        aiInput.value = "";
        chatHistory.scrollTop = chatHistory.scrollHeight;
        getAiReply(question);
    };
    
    aiInput.onkeypress = function(e) {
        if (e.key === "Enter") sendBtn.onclick();
    };


// ========== 地图初始化 ==========
// ========== 地图初始化 ==========
function initMap() {
    map = L.map('map').setView([35.86166, 104.195397], 5);
    
    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        subdomains: ['1', '2', '3', '4'],
        attribution: '&copy; <a href="https://ditu.amap.com/">高德地图</a>'
    }).addTo(map);
    
    L.control.scale({imperial: false, position: 'bottomleft'}).addTo(map);
    
    markerClusters = L.markerClusterGroup({
        maxClusterRadius: 50,
        iconCreateFunction: function(cluster) {
            const count = cluster.getChildCount();
            return L.divIcon({
                html: `<div style="background:#1a6dcc; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold;">${count}</div>`,
                className: 'marker-cluster',
                iconSize: L.point(40, 40)
            });
        }
    });
    
    map.addLayer(markerClusters);
    
    map.on('zoomend', function() {
        currentZoomLevel = map.getZoom();
    });
    
    zoomInBtn.addEventListener('click', () => map.zoomIn());
    zoomOutBtn.addEventListener('click', () => map.zoomOut());
    resetViewBtn.addEventListener('click', () => map.setView([35.86166, 104.195397], 5));
    locateChinaBtn.addEventListener('click', () => map.setView([35.86166, 104.195397], 5));
    
    // 删除 Leaflet 右下角版权信息
    removeAttribution();
}

// 删除版权信息的函数
function removeAttribution() {
    // 查找并删除 leaflet-control-attribution 元素
    const attribution = document.querySelector('.leaflet-control-attribution');
    if (attribution && attribution.parentNode) {
        attribution.parentNode.removeChild(attribution);
    }
    
    // 备用：通过类名查找所有可能的版权元素
    const allAttributions = document.querySelectorAll('.leaflet-control-attribution');
    allAttributions.forEach(el => {
        if (el && el.parentNode) {
            el.remove();
        }
    });
}

// 监听地图加载完成事件
map.whenReady(function() {
    setTimeout(removeAttribution, 50);
});
// ========== 天气获取 ==========
function fetchWeatherForPopup(lng, lat, index) {
    const weatherUrl = `https://restapi.amap.com/v3/weather/weatherInfo?key=013b634e19b63448bb98e068840f3091&output=JSON&extensions=base&location=${lng},${lat}`;
    
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === '1' && data.lives && data.lives.length > 0) {
                updateWeatherPopup(index, data.lives[0]);
            } else {
                updateWeatherPopup(index, null, '天气信息获取失败');
            }
        })
        .catch(error => {
            console.error('获取天气信息失败:', error);
            updateWeatherPopup(index, null, '网络错误');
        });
}

function updateWeatherPopup(index, weather, errorMsg = null) {
    const weatherElement = document.getElementById(`weather-${index}`);
    if (!weatherElement) return;
    
    if (errorMsg) {
        weatherElement.innerHTML = `<div style="margin:10px 0; text-align:center;"><div style="font-size:12px; color:#e74c3c;">${errorMsg}</div></div>`;
        return;
    }
    
    const weatherIcons = { '晴': '☀️', '多云': '⛅', '阴': '☁️', '雨': '🌧️', '雪': '❄️', '雾': '🌫️' };
    const weatherIcon = weatherIcons[weather.weather] || '❓';
    
    weatherElement.innerHTML = `
        <div style="margin:10px 0; text-align:center;">
            <div style="font-size:24px;">${weatherIcon}</div>
            <div style="font-size:14px; margin-top:5px;">${weather.province} ${weather.city}</div>
            <div style="font-size:12px; color:#666; margin-top:3px;">
                ${weather.weather} ${weather.temperature}℃ | 湿度${weather.humidity}%
            </div>
        </div>
    `;
}


function createListItem(item, index) {
    const itemElement = document.createElement('div');
    itemElement.className = 'scenic-item';
    itemElement.setAttribute('data-index', index);
    
    let typeClass = '';
    if (item.type === '5A级景区') typeClass = 'type-5a';
    else if (item.type === '4A级景区') typeClass = 'type-4a';
    else typeClass = 'type-ancient';
    
    itemElement.innerHTML = `
        <h4>${item.name}</h4>
        <span class="scenic-type ${typeClass}">${item.type}</span>
        <div class="scenic-address">${item.address}</div>
        <div class="scenic-description">${item.description}</div>
        <div style="margin-top:8px; font-size:12px; color:#888;">推荐度: ${item.recommend}/10</div>
    `;
    
    itemElement.addEventListener('click', function() {
        map.setView([item.lat, item.lng], 12);
        markers[index].openPopup();
    });
    
    scenicListContainer.appendChild(itemElement);
}

// ========== 加载景区数据 ==========
function loadScenicData() {
    markerClusters.clearLayers();
    markers = [];
    scenicListContainer.innerHTML = '';
    
    const filteredData = allScenicData.filter(item => {
        let typeMatch = false;
        
        if (currentFilter.types.includes('all')) {
            typeMatch = true;
        } else if (currentFilter.types.includes('5A')) {
            typeMatch = item.type === '5A级景区';
        } else if (currentFilter.types.includes('4A')) {
            typeMatch = item.type === '4A级景区';
        } else if (currentFilter.types.includes('古建')) {
            typeMatch = item.type === '古遗址' || item.type === '古建筑';
        }
        
        const itemRecommend = Number(item.recommend);
        const recommendMatch = itemRecommend >= currentFilter.minRecommend;
        
        return typeMatch && recommendMatch;
    });
    
    resultCount.textContent = filteredData.length;
    
    filteredData.forEach((item, index) => {
        const marker = createMarker(item, index);
        markers.push(marker);
        markerClusters.addLayer(marker);
        createListItem(item, index);
    });
}

// ========== 搜索功能 ==========
function initSearchFunction() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && e.target !== searchBtn) {
            searchResults.style.display = 'none';
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchResults.style.display = 'block';
        
        if (!searchTerm) {
            searchResults.innerHTML = '<div class="no-results">请输入搜索关键词</div>';
            return;
        }
        
        const matchedResults = allScenicData.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            item.address.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
        
        if (matchedResults.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">未找到"${searchTerm}"相关结果</div>
                <div class="web-search-recommend" onclick="window.open('https://www.baidu.com/s?wd=${encodeURIComponent(searchTerm + ' 景区')}', '_blank')">
                    <div class="recommend-title"><span>🔍</span> 全网搜索"${searchTerm}"相关景区</div>
                </div>
            `;
            return;
        }
        
        searchResults.innerHTML = '';
        matchedResults.forEach((item) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.address} | ${item.type} | 推荐度: ${item.recommend}/10</p>
            `;
            
            resultItem.addEventListener('click', function() {
                map.setView([item.lat, item.lng], 12);
                const markerIndex = allScenicData.findIndex(d => d.name === item.name && d.address === item.address);
                if (markerIndex !== -1 && markers[markerIndex]) {
                    markers[markerIndex].openPopup();
                }
                searchResults.style.display = 'none';
                searchInput.value = '';
            });
            
            searchResults.appendChild(resultItem);
        });
    }
}

// ========== 筛选功能 ==========
function initFilterFunction() {
    const filterButtons = typeFilters.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter.types = [this.getAttribute('data-type')];
            loadScenicData();
        });
    });
    
    recommendSlider.addEventListener('input', function() {
        const value = this.value;
        sliderValue.textContent = value;
        recommendValue.textContent = value;
        currentFilter.minRecommend = Number(value);
        loadScenicData();
    });
}

// ========== 侧边栏切换 ==========
function initSidebarToggle() {
    sidebarToggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
        if (map) {
            setTimeout(() => map.invalidateSize(), 300);
        }
        this.innerHTML = sidebar.classList.contains('hidden') ? '☰' : '✕';
    });
}

// ========== 页面初始化 ==========
window.onload = function() {
    initMap();
    loadScenicData();
    initSearchFunction();
    initFilterFunction();
    initSidebarToggle();
    initAiAssistant();
};

// ========== 删除版权信息 ==========
function removeAttribution() {
    // CSS方式隐藏
    const style = document.createElement('style');
    style.id = 'hide-attribution-style';
    style.textContent = `
        .leaflet-control-attribution {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
        }
    `;

    if (!document.getElementById('hide-attribution-style')) {
        document.head.appendChild(style);
    }

    // JS方式删除
    const attributions = document.querySelectorAll('.leaflet-control-attribution');
    attributions.forEach(el => el && el.remove());
}

// 页面加载后执行
window.addEventListener('load', () => {
    setTimeout(removeAttribution, 100);
    setTimeout(removeAttribution, 500);
    setTimeout(removeAttribution, 1000);
});

// 在 initMap 中调用
function initMap() {
    // ... 原有代码 ...

    map.on('load', () => setTimeout(removeAttribution, 50));
    setTimeout(removeAttribution, 200);
}