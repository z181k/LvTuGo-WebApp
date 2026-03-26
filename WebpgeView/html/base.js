// ========== DeepSeek API 配置 ==========
const DEEPSEEK_API_KEY = "sk-0745adefa4484d49bc14aea1c71b338b";
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";

// 对话历史（用于上下文）
let chatHistory = [];

// ========== AI 助手功能 ==========
async function getAiReply(question) {
    const chatHistoryDiv = document.getElementById("aiChatHistory");

    // 添加用户消息
    const userDiv = document.createElement('div');
    userDiv.className = 'user-msg';
    userDiv.innerHTML = `<strong>👤 你：</strong>${escapeHtml(question)}`;
    chatHistoryDiv.appendChild(userDiv);

    // 添加加载动画
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'ai-thinking';
    loadingDiv.innerHTML = '🤔 AI正在思考...';
    chatHistoryDiv.appendChild(loadingDiv);
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;

    try {
        // 调用 DeepSeek API
        const response = await fetch(DEEPSEEK_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: `你是旅图Go的智能导游助手，名叫"小图"。你熟悉全国各地的旅游景区，可以为用户提供：
1. 景区历史文化和背景介绍
2. 游玩路线和攻略建议
3. 最佳游览时间和季节
4. 门票信息和开放时间
5. 交通方式和周边美食

请用亲切、专业的语气回答，回答简洁明了，控制在200字以内。如果用户询问的内容不在你的知识范围内，请礼貌地建议用户查看景区官方信息。`
                    },
                    {
                        role: "user",
                        content: question
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        const data = await response.json();

        // 移除加载动画
        loadingDiv.remove();

        // 获取回复内容
        let reply = "抱歉，暂时无法回答这个问题。";
        if (data.choices && data.choices[0] && data.choices[0].message) {
            reply = data.choices[0].message.content;
        } else if (data.error) {
            console.error('API错误:', data.error);
            reply = `AI服务暂时不可用，请稍后再试。错误：${data.error.message || '未知错误'}`;
        }

        // 添加AI回复
        const aiDiv = document.createElement('div');
        aiDiv.className = 'ai-reply-msg';
        aiDiv.innerHTML = `<strong>🤖 小图：</strong>${formatReply(reply)}`;
        chatHistoryDiv.appendChild(aiDiv);

        // 保存到对话历史
        chatHistory.push({ role: "user", content: question });
        chatHistory.push({ role: "assistant", content: reply });

        // 限制历史记录长度
        if (chatHistory.length > 20) {
            chatHistory = chatHistory.slice(-20);
        }

    } catch (error) {
        console.error('AI请求失败:', error);
        loadingDiv.remove();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'ai-reply-msg';
        errorDiv.innerHTML = `<strong>🤖 小图：</strong>网络连接失败，请检查网络后重试。`;
        chatHistoryDiv.appendChild(errorDiv);
    }

    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
}

// HTML转义函数（防止XSS攻击）
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 格式化回复内容（支持换行、链接等）
function formatReply(text) {
    if (!text) return '';
    // 转换换行符为<br>
    let formatted = text.replace(/\n/g, '<br>');
    // 转换链接（可选）
    formatted = formatted.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color:#1a6dcc;">$1</a>');
    return formatted;
}

// ========== 初始化 AI 助手 ==========
function initAiAssistant() {
    const sendBtn = document.getElementById("sendAiBtn");
    const aiInput = document.getElementById("aiInput");
    const chatHistoryDiv = document.getElementById("aiChatHistory");

    if (!sendBtn || !aiInput) {
        console.error('AI助手元素未找到');
        return;
    }

    // 清空并添加欢迎消息
    chatHistoryDiv.innerHTML = '';
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-msg';
    welcomeDiv.innerHTML = '👋 您好！我是您的智能导游<strong>小图</strong>，可以问我关于景区的历史、攻略、路线建议等问题。';
    chatHistoryDiv.appendChild(welcomeDiv);

    // 发送按钮点击事件
    sendBtn.onclick = function () {
        const question = aiInput.value.trim();
        if (!question) {
            // 提示用户输入
            const tipDiv = document.createElement('div');
            tipDiv.className = 'ai-reply-msg';
            tipDiv.style.color = '#ff9800';
            tipDiv.innerHTML = '💡 请输入您想问的问题～';
            chatHistoryDiv.appendChild(tipDiv);
            chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
            setTimeout(() => {
                tipDiv.remove();
            }, 2000);
            return;
        }

        getAiReply(question);
        aiInput.value = "";
    };

    // 回车发送
    aiInput.onkeypress = function (e) {
        if (e.key === "Enter") {
            sendBtn.onclick();
        }
    };

    // 清空对话按钮（可选）
    const clearBtn = document.createElement('button');
    clearBtn.innerHTML = '🗑️';
    clearBtn.title = '清空对话';
    clearBtn.style.cssText = `
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        margin-left: 8px;
        opacity: 0.7;
    `;
    clearBtn.onclick = function () {
        chatHistoryDiv.innerHTML = '';
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-msg';
        welcomeDiv.innerHTML = '👋 您好！我是您的智能导游<strong>小图</strong>，可以问我关于景区的历史、攻略、路线建议等问题。';
        chatHistoryDiv.appendChild(welcomeDiv);
        chatHistory = [];
    };

    // 添加清空按钮到标题栏
    const aiHeader = document.querySelector('.ai-header');
    if (aiHeader) {
        const statusSpan = aiHeader.querySelector('.ai-status');
        if (statusSpan) {
            statusSpan.parentNode.insertBefore(clearBtn, statusSpan);
        } else {
            aiHeader.appendChild(clearBtn);
        }
    }

    console.log('AI助手已初始化');
}

// ========== 更新 AI 状态（带小圆点）==========
function updateAiStatus(status, message) {
    const statusSpan = document.getElementById('aiStatus');
    if (!statusSpan) return;

    // 清空原有内容
    statusSpan.innerHTML = '';

    // 创建圆点元素
    const dot = document.createElement('span');
    dot.className = 'status-dot';

    // 创建文字元素
    const text = document.createElement('span');
    text.textContent = status;

    // 根据状态设置圆点样式
    if (status === '在线') {
        dot.classList.add('online');
        statusSpan.style.color = '#fff';
    } else if (status === '离线') {
        dot.classList.add('offline');
        statusSpan.style.color = '#fff';
    } else if (status === '检测中') {
        dot.classList.add('checking');
        statusSpan.style.color = '#fff';
    } else {
        dot.classList.add('offline');
    }

    statusSpan.appendChild(dot);
    statusSpan.appendChild(text);

    if (message) {
        statusSpan.title = message;
    }
}

// ========== 测试 API 连接（带状态更新）==========
async function testAiConnection() {
    try {
        updateAiStatus('检测中', '正在检测AI服务连接...');

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(DEEPSEEK_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{ role: "user", content: "你好" }],
                max_tokens: 5
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
            updateAiStatus('在线', 'DeepSeek AI 服务正常');
        } else {
            const errorData = await response.json();
            console.error('API错误:', errorData);
            updateAiStatus('离线', `API服务异常: ${errorData.error?.message || '未知错误'}`);
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            updateAiStatus('离线', '连接超时，请检查网络');
        } else {
            updateAiStatus('离线', '无法连接到AI服务，请检查网络');
        }
        console.error('AI连接测试失败:', error);
    }
}

// ========== 初始化 AI 助手（修改版）==========
function initAiAssistant() {
    const sendBtn = document.getElementById("sendAiBtn");
    const aiInput = document.getElementById("aiInput");
    const chatHistoryDiv = document.getElementById("aiChatHistory");

    if (!sendBtn || !aiInput) {
        console.error('AI助手元素未找到');
        return;
    }

    // 清空并添加欢迎消息
    chatHistoryDiv.innerHTML = '';
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-msg';
    welcomeDiv.innerHTML = '👋 您好！我是您的智能导游<strong>小图</strong>，可以问我关于景区的历史、攻略、路线建议等问题。';
    chatHistoryDiv.appendChild(welcomeDiv);

    // 发送按钮点击事件
    sendBtn.onclick = function () {
        const question = aiInput.value.trim();
        if (!question) {
            // 提示用户输入
            const tipDiv = document.createElement('div');
            tipDiv.className = 'ai-reply-msg';
            tipDiv.style.color = '#ff9800';
            tipDiv.style.background = '#fff3e0';
            tipDiv.innerHTML = '💡 请输入您想问的问题～';
            chatHistoryDiv.appendChild(tipDiv);
            chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
            setTimeout(() => {
                tipDiv.remove();
            }, 2000);
            return;
        }

        getAiReply(question);
        aiInput.value = "";
    };

    // 回车发送
    aiInput.onkeypress = function (e) {
        if (e.key === "Enter") {
            sendBtn.onclick();
        }
    };

    // 清空对话按钮
    const clearBtn = document.createElement('button');
    clearBtn.innerHTML = '🗑️';
    clearBtn.title = '清空对话';
    clearBtn.style.cssText = `
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        margin-left: 8px;
        opacity: 0.7;
        transition: opacity 0.2s;
        padding: 0 4px;
    `;
    clearBtn.onmouseenter = () => clearBtn.style.opacity = '1';
    clearBtn.onmouseleave = () => clearBtn.style.opacity = '0.7';
    clearBtn.onclick = function () {
        chatHistoryDiv.innerHTML = '';
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-msg';
        welcomeDiv.innerHTML = '👋 您好！我是您的智能导游<strong>小图</strong>，可以问我关于景区的历史、攻略、路线建议等问题。';
        chatHistoryDiv.appendChild(welcomeDiv);
        chatHistory = [];
    };

    // 添加清空按钮到标题栏
    const aiHeader = document.querySelector('.ai-header');
    if (aiHeader) {
        const statusSpan = document.getElementById('aiStatus');
        if (statusSpan && statusSpan.parentNode) {
            statusSpan.parentNode.insertBefore(clearBtn, statusSpan);
        } else {
            aiHeader.appendChild(clearBtn);
        }
    }

    console.log('AI助手已初始化');
}

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
    
    sendBtn.onclick = function() {
        const question = aiInput.value.trim();
        if (!question) {
            alert("请输入问题");
            return;
        }
        
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
}

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

// ========== 创建标记和列表 ==========
function createMarker(item, index) {
    let iconColor = '#1a6dcc';
    if (item.type === '5A级景区') iconColor = '#ff6b6b';
    else if (item.type === '4A级景区') iconColor = '#4ecdc4';
    else iconColor = '#ffd166';
    
    const customIcon = L.divIcon({
        html: `<div class="scenic-marker" style="background:${iconColor}"><span class="marker-text">${item.name}</span></div>`,
        className: 'custom-marker',
        iconSize: [100, 30],
        iconAnchor: [50, 15]
    });
    
    const marker = L.marker([item.lat, item.lng], {
        icon: customIcon,
        title: `${item.name} - ${item.type} (推荐度: ${item.recommend}/10)`
    });
    
    let popupContent = `
        <div class="custom-popup">
            <div class="popup-title">${item.name}</div>
            <div class="popup-type ${item.type === '5A级景区' ? 'type-5a' : item.type === '4A级景区' ? 'type-4a' : 'type-ancient'}">${item.type}</div>
            <div class="popup-address"><strong>地址:</strong> ${item.address}</div>
    `;
    
    if (item.year) {
        popupContent += `<div class="popup-year"><strong>年代:</strong> ${item.year}</div>`;
    }
    
    popupContent += `
            <div class="weather-info" id="weather-${index}">
                <div style="margin:10px 0; text-align:center;"><div style="font-size:12px; color:#888;">正在获取天气信息...</div></div>
            </div>
            <div class="popup-description">${item.description}</div>
            <div style="margin-top:10px; font-size:12px; color:#888;">推荐度: ${item.recommend}/10</div>
            <div class="web-search-recommend" style="margin-top:10px;" onclick="window.open('https://www.baidu.com/s?wd=${encodeURIComponent(item.name + ' ' + item.type)}', '_blank')">
                <div class="recommend-title"><span>🔍</span> 推荐全网搜索相关信息</div>
            </div>
        </div>
    `;
    
    marker.bindPopup(popupContent);
    
    marker.on('click', function() {
        this.openPopup();
        setTimeout(() => fetchWeatherForPopup(item.lng, item.lat, index), 300);
    });
    
    return marker;
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