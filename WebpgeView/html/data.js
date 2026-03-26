
        // 景区数据
        const scenicData5A = [
            { name: "故宫博物院", type: "5A级景区", address: "北京市，东城区", lng: 116.397026, lat: 39.918058, description: "明清两代皇家宫殿，世界文化遗产。", recommend: 10 },
  { name: "天坛公园", type: "5A级景区", address: "北京市，东城区", lng: 116.410829, lat: 39.88194, description: "明清皇帝祭天场所，中国古建筑瑰宝。", recommend: 9 },
  { name: "颐和园", type: "5A级景区", address: "北京市，海淀区", lng: 116.273946, lat: 39.992806, description: "保存最完整的皇家园林，皇家园林博物馆。", recommend: 10 },
  { name: "八达岭 — 慕田峪长城旅游区", type: "5A级景区", address: "北京市，延庆区", lng: 116.020067, lat: 40.355298, description: "万里长城的杰出代表，气势磅礴。", recommend: 10 },
  { name: "明十三陵景区", type: "5A级景区", address: "北京市，昌平区", lng: 116.222414, lat: 40.253091, description: "明朝皇帝陵寝群，规模宏大。", recommend: 8 },
  { name: "恭王府景区", type: "5A级景区", address: "北京市，西城区", lng: 116.38515, lat: 39.93725, description: "清代规模最大的王府，承载半部清朝史。", recommend: 8 },
  { name: "奥林匹克公园", type: "5A级景区", address: "北京市，朝阳区", lng: 116.3922, lat: 40.0123, description: "2008年奥运会主场馆区，现代地标。", recommend: 9 },
  { name: "圆明园遗址公园景区", type: "5A级景区", address: "北京市，海淀区", lng: 116.29912, lat: 40.00735, description: "万园之园遗址，爱国主义教育基地。", recommend: 9 },
  { name: "大运河文化旅游景区", type: "5A级景区", address: "北京市，通州区", lng: 116.6843, lat: 39.9012, description: "千年运河文化，城市副中心绿肺。", recommend: 8 },
  { name: "古文化街旅游区", type: "5A级景区", address: "天津市，南开区", lng: 117.196359, lat: 39.141354, description: "津门民俗文化集散地。", recommend: 8 },
  { name: "盘山风景名胜区", type: "5A级景区", address: "天津市，蓟州区", lng: 117.256, lat: 40.089, description: "京东第一山，乾隆皇帝曾多次巡游。", recommend: 8 },
  { name: "承德避暑山庄", type: "5A级景区", address: "河北省，承德市，双桥区", lng: 117.94154, lat: 40.99195, description: "清代皇家避暑胜地。", recommend: 9 },
  { name: "白洋淀景区", type: "5A级景区", address: "河北省，保定市，安新县", lng: 115.987, lat: 38.912, description: "华北明珠，著名的湿地自然保护区。", recommend: 8 },
  { name: "野三坡景区", type: "5A级景区", address: "河北省，保定市，涞水县", lng: 115.394, lat: 39.682, description: "世外桃源，雄险奇秀的自然景观。", recommend: 8 },
  { name: "西柏坡景区", type: "5A级景区", address: "河北省，石家庄市，平山县", lng: 114.056, lat: 38.345, description: "革命圣地，新中国从这里走来。", recommend: 8 },
  { name: "清东陵景区", type: "5A级景区", address: "河北省，唐山市，遵化市", lng: 117.645, lat: 40.182, description: "清朝皇家陵寝，规模宏大。", recommend: 8 },
  { name: "娲皇宫景区", type: "5A级景区", address: "河北省，邯郸市，涉县", lng: 113.678, lat: 36.589, description: "祭祀女娲的古建筑群。", recommend: 7 },
  { name: "广府古城景区", type: "5A级景区", address: "河北省，邯郸市，永年区", lng: 114.712, lat: 36.701, description: "太极之乡，北方水城。", recommend: 8 },
  { name: "白石山景区", type: "5A级景区", address: "河北省，保定市，涞源县", lng: 114.689, lat: 39.201, description: "奇峰林立，拥有壮观的云海。", recommend: 8 },
  { name: "山海关景区", type: "5A级景区", address: "河北省，秦皇岛市，山海关区", lng: 119.754, lat: 40.001, description: "天下第一关，长城起点。", recommend: 9 },
  { name: "清西陵景区", type: "5A级景区", address: "河北省，保定市，易县", lng: 115.212, lat: 39.367, description: "清朝皇家陵寝，环境幽雅。", recommend: 8 },
  { name: "金山岭长城景区", type: "5A级景区", address: "河北省，承德市，滦平县", lng: 117.245, lat: 40.678, description: "万里长城的精华地段。", recommend: 9 },
  { name: "开滦旅游景区", type: "5A级景区", address: "河北省，唐山市，路南区", lng: 118.178, lat: 39.601, description: "工业遗迹与生态公园的结合。", recommend: 7 },
  { name: "衡水湖旅游景区", type: "5A级景区", address: "河北省，衡水市，桃城区", lng: 115.612, lat: 37.601, description: "华北平原单体最大的淡水湖。", recommend: 7 },
  { name: "云冈石窟景区", type: "5A级景区", address: "山西省，大同市，云冈区", lng: 113.1442, lat: 40.1091, description: "中国四大石窟之一，佛教艺术巅峰。", recommend: 10 },
  { name: "五台山风景名胜区", type: "5A级景区", address: "山西省，忻州市，五台县", lng: 113.5794, lat: 39.0276, description: "四大佛教名山之首。", recommend: 10 },
  { name: "皇城相府生态文化旅游区", type: "5A级景区", address: "山西省，晋城市，阳城县", lng: 112.578, lat: 35.501, description: "清代名相陈廷敬的故居。", recommend: 8 },
  { name: "绵山风景区", type: "5A级景区", address: "山西省，晋中市，介休市", lng: 112.012, lat: 36.878, description: "寒食节发源地，山势险峻。", recommend: 8 },
  { name: "平遥古城景区", type: "5A级景区", address: "山西省，晋中市，平遥县", lng: 112.1812, lat: 37.2017, description: "保存最完整的明清古城。", recommend: 10 },
  { name: "雁门关景区", type: "5A级景区", address: "山西省，忻州市，代县", lng: 112.967, lat: 39.189, description: "中华第一关，军事重地。", recommend: 9 },
  { name: "洪洞大槐树寻根祭祖园旅游景区", type: "5A级景区", address: "山西省，临汾市，洪洞县", lng: 111.689, lat: 36.256, description: "全球华人寻根祭祖圣地。", recommend: 8 },
  { name: "太行山大峡谷八泉峡景区", type: "5A级景区", address: "山西省，长治市，壶关县", lng: 113.456, lat: 35.901, description: "太行山最美峡谷。", recommend: 9 },
  { name: "云丘山景区", type: "5A级景区", address: "山西省，临汾市，乡宁县", lng: 110.712, lat: 35.701, description: "河东第一名山，冰洞群奇观。", recommend: 8 },
  { name: "黄河壶口瀑布旅游区", type: "5A级景区", address: "山西省，临汾市，吉县", lng: 110.456, lat: 36.145, description: "黄河奇观，气势磅礴。", recommend: 10 },
  { name: "晋祠天龙山景区", type: "5A级景区", address: "山西省，太原市，晋源区", lng: 112.445, lat: 37.701, description: "中国现存最早的皇家园林。", recommend: 9 },
  { name: "乔家大院景区", type: "5A级景区", address: "山西省，晋中市，祁县", lng: 112.434, lat: 37.401, description: "晋商大院的代表作。", recommend: 8 },
  { name: "响沙湾旅游景区", type: "5A级景区", address: "内蒙古自治区，鄂尔多斯市，达拉特旗", lng: 109.967, lat: 40.445, description: "沙漠度假胜地。", recommend: 9 },
  { name: "成吉思汗陵旅游区", type: "5A级景区", address: "内蒙古自治区，鄂尔多斯市，伊金霍洛旗", lng: 109.767, lat: 39.367, description: "一代天骄成吉思汗的祭祀地。", recommend: 8 },
  { name: "中俄边境旅游区", type: "5A级景区", address: "内蒙古自治区，呼伦贝尔市，满洲里市", lng: 117.445, lat: 49.589, description: "异域风情，国门景区。", recommend: 8 },
  { name: "兴安盟阿尔山・柴河旅游景区", type: "5A级景区", address: "内蒙古自治区，兴安盟，阿尔山市", lng: 120.456, lat: 47.345, description: "火山天池，森林氧吧。", recommend: 9 },
  { name: "阿斯哈图石林景区", type: "5A级景区", address: "内蒙古自治区，赤峰市，克什克腾旗", lng: 117.456, lat: 43.801, description: "第四纪冰川遗迹。", recommend: 8 },
  { name: "阿拉善盟胡杨林旅游区", type: "5A级景区", address: "内蒙古自治区，阿拉善盟，额济纳旗", lng: 101.067, lat: 41.956, description: "千年不倒的胡杨奇观。", recommend: 10 },
  { name: "呼伦贝尔大草原・莫尔格勒河", type: "5A级景区", address: "内蒙古自治区，呼伦贝尔市，陈巴尔虎旗", lng: 119.678, lat: 49.345, description: "天下第一曲水。", recommend: 10 },
  { name: "老牛湾黄河大峡谷旅游区", type: "5A级景区", address: "内蒙古自治区，呼和浩特市，清水河县", lng: 111.456, lat: 39.601, description: "黄河与长城握手的地方。", recommend: 8 },
  { name: "沈阳植物园", type: "5A级景区", address: "辽宁省，沈阳市，浑南区", lng: 123.612, lat: 41.856, description: "沈阳世博园，森林景观丰富。", recommend: 7 },
  { name: "老虎滩海洋公园 — 老虎滩极地馆", type: "5A级景区", address: "辽宁省，大连市，中山区", lng: 121.689, lat: 38.878, description: "海洋生物展示与表演。", recommend: 9 },
  { name: "金石滩景区", type: "5A级景区", address: "辽宁省，大连市，金州区", lng: 122.012, lat: 39.089, description: "地质奇观，海滨度假。", recommend: 8 },
  { name: "本溪水洞景区", type: "5A级景区", address: "辽宁省，本溪市，本溪满族自治县", lng: 124.067, lat: 41.289, description: "世界最长充水溶洞。", recommend: 9 },
  { name: "千山景区", type: "5A级景区", address: "辽宁省，鞍山市，铁东区", lng: 123.123, lat: 41.012, description: "东北明珠，佛教道教圣地。", recommend: 8 },
  { name: "红海滩风景廊道景区", type: "5A级景区", address: "辽宁省，盘锦市，大洼区", lng: 121.878, lat: 40.856, description: "红色碱蓬草形成的奇特景观。", recommend: 9 },
  { name: "五女山景区", type: "5A级景区", address: "辽宁省，本溪市，桓仁满族自治县", lng: 125.345, lat: 41.301, description: "高句丽发祥地。", recommend: 7 },
  { name: "延边朝鲜族自治州长白山景区", type: "5A级景区", address: "吉林省，延边州，安图县", lng: 128.067, lat: 42.012, description: "关东第一山，天池奇观。", recommend: 10 },
  { name: "伪满皇宫博物馆", type: "5A级景区", address: "吉林省，长春市，宽城区", lng: 125.345, lat: 43.901, description: "末代皇帝溥仪的宫殿。", recommend: 8 },
  { name: "净月潭景区", type: "5A级景区", address: "吉林省，长春市，南关区", lng: 125.456, lat: 43.789, description: "亚洲最大人工林海。", recommend: 8 },
  { name: "长影世纪城景区", type: "5A级景区", address: "吉林省，长春市，南关区", lng: 125.445, lat: 43.767, description: "东方好莱坞。", recommend: 7 },
  { name: "六鼎山文化旅游区", type: "5A级景区", address: "吉林省，延边州，敦化市", lng: 128.212, lat: 43.345, description: "金鼎大佛，渤海文化。", recommend: 8 },
  { name: "世界雕塑公园景区", type: "5A级景区", address: "吉林省，长春市，南关区", lng: 125.323, lat: 43.823, description: "雕塑艺术大观园。", recommend: 7 },
  { name: "高句丽文物古迹旅游景区", type: "5A级景区", address: "吉林省，通化市，集安市", lng: 126.189, lat: 41.123, description: "世界文化遗产。", recommend: 8 },
  { name: "前郭查干湖景区", type: "5A级景区", address: "吉林省，松原市，前郭县", lng: 124.301, lat: 45.256, description: "冬捕文化闻名遐迩。", recommend: 9 },
  { name: "大安嫩江湾旅游区", type: "5A级景区", address: "吉林省，白城市，大安市", lng: 124.289, lat: 45.501, description: "湿地风光，嫩江明珠。", recommend: 7 },
  { name: "哈尔滨市太阳岛景区", type: "5A级景区", address: "黑龙江省，哈尔滨市，松北区", lng: 126.589, lat: 45.789, description: "避暑胜地，雪博会举办地。", recommend: 9 },
  { name: "黑河市五大连池景区", type: "5A级景区", address: "黑龙江省，黑河市，五大连池市", lng: 126.123, lat: 48.501, description: "天然火山博物馆。", recommend: 9 },
  { name: "牡丹江市镜泊湖景区", type: "5A级景区", address: "黑龙江省，牡丹江市，宁安市", lng: 128.956, lat: 43.845, description: "世界最大熔岩堰塞湖。", recommend: 9 },
  { name: "伊春市林海奇石景区", type: "5A级景区", address: "黑龙江省，伊春市，汤旺县", lng: 129.501, lat: 48.456, description: "红松原始森林与奇石。", recommend: 8 },
  { name: "北极村旅游景区", type: "5A级景区", address: "黑龙江省，大兴安岭地区，漠河市", lng: 122.345, lat: 53.478, description: "中国最北端，找北之旅。", recommend: 10 },
  { name: "鸡西市虎头旅游景区", type: "5A级景区", address: "黑龙江省，鸡西市，虎林市", lng: 133.656, lat: 45.967, description: "第二次世界大战终结地。", recommend: 7 },
  { name: "扎龙生态旅游区", type: "5A级景区", address: "黑龙江省，齐齐哈尔市，铁锋区", lng: 124.212, lat: 47.201, description: "丹顶鹤的故乡。", recommend: 9 },
  { name: "东方明珠广播电视塔", type: "5A级景区", address: "上海市，浦东新区", lng: 121.506, lat: 31.245, description: "上海城市地标。", recommend: 10 },
  { name: "上海野生动物园", type: "5A级景区", address: "上海市，浦东新区", lng: 121.712, lat: 31.056, description: "大型野生动物主题公园。", recommend: 9 },
  { name: "上海科技馆", type: "5A级景区", address: "上海市，浦东新区", lng: 121.545, lat: 31.223, description: "科普教育基地。", recommend: 8 },
  { name: "中国共产党一大・二大・四大纪念馆景区", type: "5A级景区", address: "上海市，黄浦区", lng: 121.478, lat: 31.221, description: "红色文化发祥地。", recommend: 10 },
  { name: "西沙明珠湖景区", type: "5A级景区", address: "上海市，崇明区", lng: 121.189, lat: 31.701, description: "崇明岛生态旅游胜地。", recommend: 7 },
  { name: "苏州市苏州园林", type: "5A级景区", address: "江苏省，苏州市，姑苏区", lng: 120.624, lat: 31.323, description: "江南园林之冠。", recommend: 10 },
  { name: "苏州市周庄古镇景区", type: "5A级景区", address: "江苏省，苏州市，昆山市", lng: 120.845, lat: 31.112, description: "中国第一水乡。", recommend: 9 },
  { name: "钟山风景名胜区 - 中山陵园风景区", type: "5A级景区", address: "江苏省，南京市，玄武区", lng: 118.845, lat: 32.061, description: "人文底蕴深厚。", recommend: 10 },
  { name: "三国水浒城景区", type: "5A级景区", address: "江苏省，无锡市，滨湖区", lng: 120.256, lat: 31.489, description: "影视拍摄基地。", recommend: 8 },
  { name: "无锡市灵山大佛景区", type: "5A级景区", address: "江苏省，无锡市，滨湖区", lng: 120.091, lat: 31.432, description: "世界著名露天青铜立像。", recommend: 9 },
  { name: "苏州市同里古镇景区", type: "5A级景区", address: "江苏省，苏州市，吴江区", lng: 120.712, lat: 31.156, description: "东方小威尼斯。", recommend: 8 },
  { name: "南京市夫子庙 - 秦淮河风光带", type: "5A级景区", address: "江苏省，南京市，秦淮区", lng: 118.789, lat: 32.023, description: "十里秦淮，金陵胜景。", recommend: 9 },
  { name: "环球恐龙城休闲旅游区", type: "5A级景区", address: "江苏省，常州市，新北区", lng: 119.989, lat: 31.823, description: "东方侏罗纪。", recommend: 9 },
  { name: "扬州市瘦西湖风景区", type: "5A级景区", address: "江苏省，扬州市，邗江区", lng: 119.421, lat: 32.412, description: "园林之盛，甲于天下。", recommend: 9 },
  { name: "南通市濠河景区", type: "5A级景区", address: "江苏省，南通市，崇川区", lng: 120.856, lat: 32.012, description: "护城河风光。", recommend: 7 },
  { name: "泰州市溱湖旅游景区", type: "5A级景区", address: "江苏省，泰州市，姜堰区", lng: 120.123, lat: 32.545, description: "湿地生态景观。", recommend: 7 },
  { name: "苏州市金鸡湖旅游区", type: "5A级景区", address: "江苏省，苏州市，苏州工业园区", lng: 120.701, lat: 31.312, description: "现代城市繁华景观。", recommend: 8 },
  { name: "北固山风景区", type: "5A级景区", address: "江苏省，镇江市，京口区", lng: 119.412, lat: 32.223, description: "三山鼎立，文化深厚。", recommend: 8 },
  { name: "无锡市鼋头渚旅游风景区", type: "5A级景区", address: "江苏省，无锡市，滨湖区", lng: 120.212, lat: 31.523, description: "太湖第一名胜。", recommend: 9 },
  { name: "苏州市太湖旅游区", type: "5A级景区", address: "江苏省，苏州市，吴中区", lng: 120.456, lat: 31.201, description: "太湖山水精华。", recommend: 8 },
  { name: "虞山尚湖旅游区", type: "5A级景区", address: "江苏省，苏州市，常熟市", lng: 120.745, lat: 31.689, description: "红色文化与自然风光。", recommend: 8 },
  { name: "常州市天目湖景区", type: "5A级景区", address: "江苏省，常州市，溧阳市", lng: 119.445, lat: 31.301, description: "江南明珠，水质清澈。", recommend: 8 },
  { name: "镇江市茅山景区", type: "5A级景区", address: "江苏省，镇江市，句容市", lng: 119.312, lat: 31.789, description: "道教圣地，第一福地。", recommend: 8 },
  { name: "淮安市周恩来故里景区", type: "5A级景区", address: "江苏省，淮安市，淮安区", lng: 119.156, lat: 33.501, description: "伟人故里，红色教育。", recommend: 8 },
  { name: "盐城市中华麋鹿园景区", type: "5A级景区", address: "江苏省，盐城市，大丰区", lng: 120.845, lat: 33.012, description: "麋鹿故乡，湿地奇观。", recommend: 8 },
  { name: "徐州市云龙湖景区", type: "5A级景区", address: "江苏省，徐州市，泉山区", lng: 117.156, lat: 34.245, description: "徐州明珠，山水相依。", recommend: 7 },
  { name: "连云港市花果山景区", type: "5A级景区", address: "江苏省，连云港市，海州区", lng: 119.289, lat: 34.656, description: "大圣故里，西游文化。", recommend: 9 },
  { name: "常州市春秋淹城旅游区", type: "5A级景区", address: "江苏省，常州市，武进区", lng: 119.945, lat: 31.701, description: "春秋遗址，文化体验。", recommend: 8 },
  { name: "无锡市惠山古镇景区", type: "5A级景区", address: "江苏省，无锡市，梁溪区", lng: 120.267, lat: 31.589, description: "祠堂文化，江南名镇。", recommend: 8 },
  { name: "宿迁市洪泽湖湿地景区", type: "5A级景区", address: "江苏省，宿迁市，泗洪县", lng: 118.256, lat: 33.345, description: "湿地氧吧，候鸟天堂。", recommend: 7 },
  { name: "连云港市连岛景区", type: "5A级景区", address: "江苏省，连云港市，连云区", lng: 119.456, lat: 34.767, description: "海滨度假，沙滩风光。", recommend: 8 },
   // --- 浙江省 ---
  { name: "杭州市杭州西湖风景区", type: "5A级景区", address: "浙江省，杭州市，西湖区", lng: 120.1447, lat: 30.2428, description: "中国最著名的湖泊景区，世界文化遗产。", recommend: 10 },
  { name: "温州市雁荡山风景区", type: "5A级景区", address: "浙江省，温州市，乐清市", lng: 121.045, lat: 28.367, description: "寰中绝胜，海上名山。", recommend: 9 },
  { name: "舟山市普陀山风景区", type: "5A级景区", address: "浙江省，舟山市，普陀区", lng: 122.389, lat: 29.989, description: "海天佛国，观音菩萨道场。", recommend: 10 },
  { name: "杭州市千岛湖风景区", type: "5A级景区", address: "浙江省，杭州市，淳安县", lng: 119.045, lat: 29.601, description: "天下第一秀水，千岛竞秀。", recommend: 9 },
  { name: "嘉兴市乌镇古镇旅游区", type: "5A级景区", address: "浙江省，嘉兴市，桐乡市", lng: 120.489, lat: 30.756, description: "中国最后的枕水人家。", recommend: 10 },
  { name: "滕头旅游景区", type: "5A级景区", address: "浙江省，宁波市，奉化区", lng: 121.278, lat: 29.689, description: "蒋氏故里，山水人文荟萃。", recommend: 8 },
  { name: "金华市横店影视城景区", type: "5A级景区", address: "浙江省，金华市，东阳市", lng: 120.312, lat: 29.145, description: "中国好莱坞，全球最大影视基地。", recommend: 10 },
  { name: "嘉兴市南湖旅游区", type: "5A级景区", address: "浙江省，嘉兴市，南湖区", lng: 120.756, lat: 30.751, description: "红船精神发祥地。", recommend: 9 },
  { name: "杭州市西溪湿地旅游区", type: "5A级景区", address: "浙江省，杭州市，西湖区", lng: 120.067, lat: 30.278, description: "城市之肾，湿地文化。", recommend: 8 },
  { name: "鲁迅故里・沈园景区", type: "5A级景区", address: "浙江省，绍兴市，越城区", lng: 120.589, lat: 29.998, description: "文学巨匠故里，千年爱情名园。", recommend: 9 },
  { name: "根宫佛国文化旅游区", type: "5A级景区", address: "浙江省，衢州市，开化县", lng: 118.412, lat: 29.145, description: "世界根雕艺术之都。", recommend: 8 },
  { name: "湖州市南浔古镇景区", type: "5A级景区", address: "浙江省，湖州市，南浔区", lng: 120.423, lat: 30.878, description: "中西合璧的江南豪门古镇。", recommend: 8 },
  { name: "台州市天台山景区", type: "5A级景区", address: "浙江省，台州市，天台县", lng: 121.023, lat: 29.156, description: "佛宗道源，山水神秀。", recommend: 8 },
  { name: "台州市神仙居景区", type: "5A级景区", address: "浙江省，台州市，仙居县", lng: 120.612, lat: 28.678, description: "地质奇观，神仙居住的地方。", recommend: 9 },
  { name: "嘉兴市西塘古镇旅游景区", type: "5A级景区", address: "浙江省，嘉兴市，嘉善县", lng: 120.889, lat: 30.945, description: "生活着的千年古镇。", recommend: 9 },
  { name: "江郎山・廿八都旅游区", type: "5A级景区", address: "浙江省，衢州市，江山市", lng: 118.567, lat: 28.534, description: "丹霞奇峰，百姓古镇。", recommend: 8 },
  { name: "天一阁・月湖景区", type: "5A级景区", address: "浙江省，宁波市，海曙区", lng: 121.545, lat: 29.878, description: "中国现存最古老的私家藏书楼。", recommend: 8 },
  { name: "丽水市缙云仙都景区", type: "5A级景区", address: "浙江省，丽水市，缙云县", lng: 120.123, lat: 28.678, description: "天然影视棚，黄帝祭祀地。", recommend: 8 },
  { name: "温州市刘伯温故里景区", type: "5A级景区", address: "浙江省，温州市，文成县", lng: 120.089, lat: 27.845, description: "帝师故里，奇瀑飞泉。", recommend: 7 },
  { name: "台州府城文化旅游区", type: "5A级景区", address: "浙江省，台州市，临海市", lng: 121.123, lat: 28.845, description: "江南长城，千年府城。", recommend: 8 },
  { name: "丽水市云和梯田景区", type: "5A级景区", address: "浙江省，丽水市，云和县", lng: 119.456, lat: 28.123, description: "中国最美梯田之一。", recommend: 8 },
  { name: "金华市双龙风景旅游区", type: "5A级景区", address: "浙江省，金华市，婺城区", lng: 119.623, lat: 29.201, description: "溶洞奇观，叶圣陶笔下的双龙洞。", recommend: 7 },

  // --- 安徽省 ---
  { name: "黄山市黄山风景区", type: "5A级景区", address: "安徽省，黄山市，黄山区", lng: 118.146, lat: 30.134, description: "天下第一奇山，五岳归来不看山。", recommend: 10 },
  { name: "池州市九华山风景区", type: "5A级景区", address: "安徽省，池州市，青阳县", lng: 117.812, lat: 30.489, description: "四大佛教名山，地藏菩萨道场。", recommend: 10 },
  { name: "安庆市天柱山风景区", type: "5A级景区", address: "安徽省，安庆市，潜山市", lng: 116.456, lat: 30.701, description: "江淮第一山，奇峰怪石。", recommend: 8 },
  { name: "西递宏村", type: "5A级景区", address: "安徽省，黄山市，黟县", lng: 117.989, lat: 29.998, description: "画里的乡村，世界文化遗产。", recommend: 10 },
  { name: "六安市天堂寨旅游景区", type: "5A级景区", address: "安徽省，六安市，金寨县", lng: 115.767, lat: 31.123, description: "大别山主峰，华东最后一片原始森林。", recommend: 8 },
  { name: "宣城市龙川景区", type: "5A级景区", address: "安徽省，宣城市，绩溪县", lng: 118.612, lat: 30.156, description: "木雕艺术殿堂，人文荟萃。", recommend: 7 },
  { name: "阜阳市八里河风景区", type: "5A级景区", address: "安徽省，阜阳市，颍上县", lng: 116.212, lat: 32.545, description: "天下第一农民公园。", recommend: 7 },
  { name: "黄山市古徽州文化旅游区", type: "5A级景区", address: "安徽省，黄山市，徽州区", lng: 118.345, lat: 29.878, description: "徽州文化的核心展示区。", recommend: 8 },
  { name: "合肥市三河古镇景区", type: "5A级景区", address: "安徽省，合肥市，肥西县", lng: 117.256, lat: 31.501, description: "江淮水乡，古战场遗址。", recommend: 8 },
  { name: "芜湖市方特旅游区", type: "5A级景区", address: "安徽省，芜湖市，鸠江区", lng: 118.445, lat: 31.367, description: "大型现代高科技主题乐园。", recommend: 9 },
  { name: "六安市万佛湖风景区", type: "5A级景区", address: "安徽省，六安市，舒城县", lng: 116.845, lat: 31.345, description: "湖光山色，百岛奇观。", recommend: 7 },
  { name: "长江采石矶文化生态旅游区", type: "5A级景区", address: "安徽省，马鞍山市，雨山区", lng: 118.456, lat: 31.656, description: "长江三矶之首，诗仙李白终老地。", recommend: 8 },
  { name: "滁州市琅琊山景区", type: "5A级景区", address: "安徽省，滁州市，琅琊区", lng: 118.289, lat: 32.289, description: "醉翁亭记发源地。", recommend: 8 },

  // --- 福建省 ---
  { name: "鼓浪屿风景名胜区", type: "5A级景区", address: "福建省，厦门市，思明区", lng: 118.067, lat: 24.444, description: "海上花园，万国建筑博览。", recommend: 10 },
  { name: "武夷山风景名胜区", type: "5A级景区", address: "福建省，南平市，武夷山市", lng: 117.989, lat: 27.645, description: "双世遗，碧水丹山。", recommend: 10 },
  { name: "泰宁风景旅游区", type: "5A级景区", address: "福建省，三明市，泰宁县", lng: 117.156, lat: 26.901, description: "世界地质公园，水上丹霞。", recommend: 8 },
  { name: "福建土楼旅游景区", type: "5A级景区", address: "福建省，龙岩市/漳州市", lng: 117.012, lat: 24.656, description: "奇特的民居建筑，世界文化遗产。", recommend: 10 },
  { name: "宁德市旅游景区", type: "5A级景区", address: "福建省，宁德市，屏南县", lng: 119.056, lat: 27.012, description: "奇特的水上广场。", recommend: 8 },
  { name: "清源山风景名胜区", type: "5A级景区", address: "福建省，泉州市，丰泽区", lng: 118.601, lat: 24.945, description: "闽南第一山，老君造像。", recommend: 8 },
  { name: "宁德市太姥山旅游区", type: "5A级景区", address: "福建省，宁德市，福鼎市", lng: 120.212, lat: 27.101, description: "海上仙都，奇石溶洞。", recommend: 8 },
  { name: "福州市三坊七巷景区", type: "5A级景区", address: "福建省，福州市，鼓楼区", lng: 119.298, lat: 26.085, description: "里坊制度活化石，明清建筑博物馆。", recommend: 9 },
  { name: "龙岩市古田旅游区", type: "5A级景区", address: "福建省，龙岩市，上杭县", lng: 116.823, lat: 25.223, description: "红色圣地，古田会议会址。", recommend: 8 },
  { name: "妈祖文化旅游区", type: "5A级景区", address: "福建省，莆田市，秀屿区", lng: 119.145, lat: 25.089, description: "妈祖祖庙，海神故乡。", recommend: 9 },
  { name: "厦门园林植物园景区", type: "5A级景区", address: "福建省，厦门市，思明区", lng: 118.101, lat: 24.456, description: "网红雨林世界与多肉植物区。", recommend: 8 },
  { name: "龙岩市冠豸山景区", type: "5A级景区", address: "福建省，龙岩市，连城县", lng: 116.756, lat: 25.712, description: "客家神山，生命之根。", recommend: 7 },

  // --- 江西省 ---
  { name: "九江市庐山风景名胜区", type: "5A级景区", address: "江西省，九江市，庐山市", lng: 115.989, lat: 29.556, description: "匡庐奇秀甲天下。", recommend: 10 },
  { name: "吉安市井冈山风景旅游区", type: "5A级景区", address: "江西省，吉安市，井冈山市", lng: 114.167, lat: 26.567, description: "中国革命的摇篮。", recommend: 10 },
  { name: "上饶市三清山风景区", type: "5A级景区", address: "江西省，上饶市，玉山县", lng: 118.089, lat: 28.901, description: "道教名山，花岗岩峰林奇观。", recommend: 9 },
  { name: "鹰潭市龙虎山风景名胜区", type: "5A级景区", address: "江西省，鹰潭市，贵溪市", lng: 116.989, lat: 28.101, description: "道教祖庭，丹霞地貌。", recommend: 9 },
  { name: "上饶市婺源县江湾景区", type: "5A级景区", address: "江西省，上饶市，婺源县", lng: 117.956, lat: 29.367, description: "中国最美乡村的核心景区。", recommend: 9 },
  { name: "景德镇市古窑民俗博览区", type: "5A级景区", address: "江西省，景德镇市，昌江区", lng: 117.189, lat: 29.289, description: "陶瓷文化活态传承。", recommend: 8 },
  { name: "瑞金市共和国摇篮景区", type: "5A级景区", address: "江西省，赣州市，瑞金市", lng: 116.023, lat: 25.889, description: "红色故都，瑞金旧址。", recommend: 8 },
  { name: "宜春市明月山旅游区", type: "5A级景区", address: "江西省，宜春市，袁州区", lng: 114.289, lat: 27.601, description: "月亮文化，富硒温泉。", recommend: 8 },
  { name: "抚州市大觉山景区", type: "5A级景区", address: "江西省，抚州市，资溪县", lng: 117.156, lat: 27.656, description: "生态氧吧，漂流胜地。", recommend: 7 },
  { name: "上饶市龟峰景区", type: "5A级景区", address: "江西省，上饶市，弋阳县", lng: 117.512, lat: 28.345, description: "江上龟峰，丹霞绝景。", recommend: 8 },
  { name: "南昌市滕王阁旅游区", type: "5A级景区", address: "江西省，南昌市，东湖区", lng: 115.878, lat: 28.689, description: "江南三大名楼之首。", recommend: 9 },
  { name: "萍乡市武功山景区", type: "5A级景区", address: "江西省，萍乡市，芦溪县", lng: 114.189, lat: 27.456, description: "高山草甸，户外天堂。", recommend: 10 },
  { name: "九江市庐山西海景区", type: "5A级景区", address: "江西省，九江市，永修县", lng: 115.456, lat: 29.212, description: "千岛落珠，绝美湖光。", recommend: 8 },
  { name: "赣州市三百山景区", type: "5A级景区", address: "江西省，赣州市，安远县", lng: 115.412, lat: 24.945, description: "东江源头，粤港水源。", recommend: 7 },
  { name: "上饶市篁岭景区", type: "5A级景区", address: "江西省，上饶市，婺源县", lng: 118.123, lat: 29.323, description: "晒秋人家，绝美古村。", recommend: 10 },

  // --- 山东省 ---
  { name: "泰安市泰山景区", type: "5A级景区", address: "山东省，泰安市，泰山区", lng: 117.102, lat: 36.201, description: "五岳之首，中华民族精神象征。", recommend: 10 },
  { name: "八仙过海旅游区", type: "5A级景区", address: "山东省，烟台市，蓬莱区", lng: 120.751, lat: 37.823, description: "人间仙境，八仙过海传说。", recommend: 9 },
  { name: "阜明故城三孔旅游区", type: "5A级景区", address: "山东省，济宁市，曲阜市", lng: 116.989, lat: 35.589, description: "孔子故里，东方圣城。", recommend: 10 },
  { name: "青岛市崂山景区", type: "5A级景区", address: "山东省，青岛市，崂山区", lng: 120.612, lat: 36.156, description: "海上第一名山。", recommend: 9 },
  { name: "威海市刘公岛景区", type: "5A级景区", address: "山东省，威海市，环翠区", lng: 122.189, lat: 37.501, description: "甲午战争纪念地。", recommend: 8 },
  { name: "烟台市南山景区", type: "5A级景区", address: "山东省，烟台市，龙口市", lng: 120.456, lat: 37.545, description: "世界最大锡青铜坐佛。", recommend: 8 },
  { name: "枣庄市台儿庄古城景区", type: "5A级景区", address: "山东省，枣庄市，台儿庄区", lng: 117.734, lat: 34.567, description: "中华民族扬威地，运河古城。", recommend: 9 },
  { name: "济南市天下第一泉景区", type: "5A级景区", address: "山东省，济南市，历下区", lng: 117.012, lat: 36.667, description: "趵突泉、大明湖，泉城精华。", recommend: 9 },
  { name: "临沂市沂蒙山旅游区", type: "5A级景区", address: "山东省，临沂市，蒙阴县", lng: 117.912, lat: 35.545, description: "革命老区，天然氧吧。", recommend: 8 },
  { name: "潍坊市青州古城景区", type: "5A级景区", address: "山东省，潍坊市，青州市", lng: 118.489, lat: 36.689, description: "古九州之一，历史悠久。", recommend: 8 },
  { name: "威海市华夏城景区", type: "5A级景区", address: "山东省，威海市，环翠区", lng: 122.156, lat: 37.456, description: "生态修复典范，大型实景演艺。", recommend: 8 },
  { name: "东营市黄河口生态旅游区", type: "5A级景区", address: "山东省，东营市，肯利县", lng: 119.123, lat: 37.789, description: "黄河入海口，湿地奇观。", recommend: 8 },
  { name: "萤火虫水洞・地下大峡谷", type: "5A级景区", address: "山东省，临沂市，沂水县", lng: 118.612, lat: 35.789, description: "地下溶洞漂流，萤火虫奇观。", recommend: 8 },
  { name: "济宁市微山湖旅游区", type: "5A级景区", address: "山东省，济宁市，微山县", lng: 117.123, lat: 34.789, description: "铁道游击队故乡，荷花之都。", recommend: 8 },
  { name: "奥帆海洋文化旅游区", type: "5A级景区", address: "山东省，青岛市，市南区", lng: 120.389, lat: 36.061, description: "奥运遗产，现代海洋文化。", recommend: 8 },
  { name: "淄博市周村古商城景区", type: "5A级景区", address: "山东省，淄博市，周村区", lng: 117.856, lat: 36.801, description: "天下第一村，丝绸之路起点。", recommend: 7 },

  // --- 河南省 ---
  { name: "郑州市嵩山少林景区", type: "5A级景区", address: "河南省，郑州市，登封市", lng: 112.945, lat: 34.501, description: "禅宗祖庭，少林功夫发源地。", recommend: 10 },
  { name: "洛阳市龙门石窟景区", type: "5A级景区", address: "河南省，洛阳市，洛龙区", lng: 112.478, lat: 34.556, description: "中国石窟艺术巅峰，世界文化遗产。", recommend: 10 },
  { name: "青天河风景区", type: "5A级景区", address: "河南省，焦作市，修武县", lng: 113.367, lat: 35.423, description: "红石峡谷，山水极品。", recommend: 10 },
  { name: "安阳市殷墟景区", type: "5A级景区", address: "河南省，安阳市，殷都区", lng: 114.312, lat: 36.123, description: "商代都城遗址，甲骨文发源地。", recommend: 9 },
  { name: "洛阳市白云山景区", type: "5A级景区", address: "河南省，洛阳市，嵩县", lng: 111.845, lat: 33.678, description: "人间仙境，中原极顶。", recommend: 8 },
  { name: "清明上河园景区", type: "5A级景区", address: "河南省，开封市，龙亭区", lng: 114.345, lat: 34.812, description: "活着的清明上河图。", recommend: 10 },
  { name: "中原大佛景区", type: "5A级景区", address: "河南省，平顶山市，鲁山县", lng: 112.456, lat: 33.745, description: "世界第一高金铜立佛。", recommend: 8 },
  { name: "鸡冠洞旅游区", type: "5A级景区", address: "河南省，洛阳市，栾川县", lng: 111.656, lat: 33.756, description: "道教名山，远赴人间惊鸿宴。", recommend: 10 },
  { name: "洛阳市龙潭大峡谷景区", type: "5A级景区", address: "河南省，洛阳市，新安县", lng: 112.056, lat: 34.901, description: "古海洋天然博物馆。", recommend: 8 },
  { name: "南阳市西峡恐龙遗迹园 - 伏牛山 - 老界岭", type: "5A级景区", address: "河南省，南阳市，西峡县", lng: 111.456, lat: 33.301, description: "恐龙蛋化石群，避暑胜地。", recommend: 8 },
 // --- 河南省 (续) ---
  { name: "嵖岈山旅游景区", type: "5A级景区", address: "河南省，驻马店市，遂平县", lng: 113.712, lat: 33.156, description: "西游记全书创作背景地，奇石盆景。", recommend: 8 },
  { name: "太行大峡谷旅游景区", type: "5A级景区", address: "河南省，安阳市，林州市", lng: 113.789, lat: 36.156, description: "人工天河，北雄风光。", recommend: 9 },
  { name: "芒砀山汉文化旅游景区", type: "5A级景区", address: "河南省，商丘市，永城市", lng: 116.456, lat: 34.212, description: "汉兴之地，梁王陵墓群。", recommend: 7 },
  { name: "新乡市八里沟景区", type: "5A级景区", address: "河南省，新乡市，辉县市", lng: 113.589, lat: 35.567, description: "太行之魂，天河瀑布。", recommend: 8 },
  { name: "信阳市鸡公山景区", type: "5A级景区", address: "河南省，信阳市，浉河区", lng: 114.089, lat: 31.812, description: "中国四大避暑胜地之一。", recommend: 8 },
  { name: "太昊伏羲陵文化旅游区", type: "5A级景区", address: "河南省，周口市，淮阳区", lng: 114.889, lat: 33.745, description: "天下第一陵，中华祖地。", recommend: 8 },
  { name: "新乡市宝泉旅游区", type: "5A级景区", address: "河南省，新乡市，辉县市", lng: 113.456, lat: 35.456, description: "中原小九寨，高峡平湖。", recommend: 8 },

  // --- 湖北省 ---
  { name: "武汉市黄鹤楼公园", type: "5A级景区", address: "湖北省，武汉市，武昌区", lng: 114.301, lat: 30.545, description: "天下江山第一楼，荆楚文化地标。", recommend: 10 },
  { name: "屈原故里文化旅游区", type: "5A级景区", address: "湖北省，宜昌市，夷陵区", lng: 111.001, lat: 30.823, description: "大国重器，世界最大水利枢纽。", recommend: 10 },
  { name: "宜昌市三峡人家风景区", type: "5A级景区", address: "湖北省，宜昌市，夷陵区", lng: 111.112, lat: 30.689, description: "三峡画廊，土家风情。", recommend: 9 },
  { name: "十堰市武当山风景区", type: "5A级景区", address: "湖北省，十堰市，丹江口市", lng: 111.012, lat: 32.412, description: "道教第一名山，太极拳发源地。", recommend: 10 },
  { name: "神农溪纤夫文化旅游区", type: "5A级景区", address: "湖北省，恩施州，巴东县", lng: 110.345, lat: 31.056, description: "原始纤夫文化，峡谷漂流。", recommend: 8 },
  { name: "神农架生态旅游区", type: "5A级景区", address: "湖北省，神农架林区", lng: 110.678, lat: 31.745, description: "北纬31度的绿色奇迹，野人传说。", recommend: 10 },
  { name: "宜昌市清江画廊景区", type: "5A级景区", address: "湖北省，宜昌市，长阳县", lng: 111.189, lat: 30.456, description: "八百里清江美如画。", recommend: 9 },
  { name: "武汉市东湖景区", type: "5A级景区", address: "湖北省，武汉市，武昌区", lng: 114.367, lat: 30.556, description: "中国最大的城中湖之一。", recommend: 9 },
  { name: "木兰文化生态旅游区", type: "5A级景区", address: "湖北省，武汉市，黄陂区", lng: 114.345, lat: 30.901, description: "花木兰故里，山水田园。", recommend: 8 },
  { name: "恩施州恩施大峡谷景区", type: "5A级景区", address: "湖北省，恩施州，恩施市", lng: 109.212, lat: 30.345, description: "世界地质奇观，一炷香绝景。", recommend: 10 },
  { name: "三国赤壁古战场景区", type: "5A级景区", address: "湖北省，咸宁市，赤壁市", lng: 113.612, lat: 29.878, description: "赤壁之战发生地。", recommend: 8 },
  { name: "襄阳市古隆中景区", type: "5A级景区", address: "湖北省，襄阳市，襄城区", lng: 112.012, lat: 32.012, description: "刘备三顾茅庐处，诸葛亮躬耕地。", recommend: 8 },
  { name: "恩施州腾龙洞景区", type: "5A级景区", address: "湖北省，恩施州，利川市", lng: 108.956, lat: 30.301, description: "世界特级溶洞，卧龙吞江。", recommend: 9 },
  { name: "三峡大瀑布景区", type: "5A级景区", address: "湖北省，宜昌市，夷陵区", lng: 111.345, lat: 30.812, description: "中国十大名瀑，穿越水帘洞。", recommend: 8 },
  { name: "荆门市明显陵文化旅游景区", type: "5A级景区", address: "湖北省，荆门市，钟祥市", lng: 112.612, lat: 31.189, description: "明代单体最大的皇陵。", recommend: 8 },
  { name: "黄冈市麻城龟峰山景区", type: "5A级景区", address: "湖北省，黄冈市，麻城市", lng: 115.012, lat: 31.156, description: "天下第一龟，杜鹃花海。", recommend: 7 },

  // --- 湖南省 ---
  { name: "天门山旅游区", type: "5A级景区", address: "湖南省，张家界市，武陵源区", lng: 110.479, lat: 29.345, description: "奇峰三千，秀水八百，阿凡达取景地。", recommend: 10 },
  { name: "衡阳市衡山旅游区", type: "5A级景区", address: "湖南省，衡阳市，南岳区", lng: 112.712, lat: 27.245, description: "五岳独秀，南岳衡山。", recommend: 9 },
  { name: "湘潭市韶山旅游区", type: "5A级景区", address: "湖南省，湘潭市，韶山市", lng: 112.512, lat: 27.912, description: "毛泽东同志故居，红色圣地。", recommend: 10 },
  { name: "君山岛景区", type: "5A级景区", address: "湖南省，岳阳市，岳阳楼区", lng: 113.089, lat: 29.389, description: "洞庭天下水，岳阳天下楼。", recommend: 9 },
  { name: "橘子洲旅游区", type: "5A级景区", address: "湖南省，长沙市，岳麓区", lng: 112.945, lat: 28.189, description: "独立寒秋，湘江北去。", recommend: 10 },
  { name: "长沙市花明楼景区", type: "5A级景区", address: "湖南省，长沙市，宁乡市", lng: 112.612, lat: 28.012, description: "刘少奇同志故居。", recommend: 8 },
  { name: "郴州市东江湖旅游区", type: "5A级景区", address: "湖南省，郴州市，资兴市", lng: 113.312, lat: 25.878, description: "雾漫小东江，人间仙境。", recommend: 9 },
  { name: "邵阳市崀山景区", type: "5A级景区", address: "湖南省，邵阳市，新宁县", lng: 110.812, lat: 26.389, description: "丹霞之魂，国之瑰宝。", recommend: 8 },
  { name: "株洲市炎帝陵景区", type: "5A级景区", address: "湖南省，株洲市，炎陵县", lng: 113.889, lat: 26.489, description: "神农福地，中华始祖。", recommend: 8 },
  { name: "常德市桃花源旅游区", type: "5A级景区", address: "湖南省，常德市，桃源县", lng: 111.456, lat: 28.812, description: "陶渊明笔下的世外桃源。", recommend: 8 },
  { name: "德夯大峡谷", type: "5A级景区", address: "湖南省，湘西州，吉首市", lng: 109.567, lat: 28.345, description: "云端天桥，精准扶贫首倡地。", recommend: 9 },
  { name: "湘西州凤凰古城旅游区", type: "5A级景区", address: "湖南省，湘西州，凤凰县", lng: 109.601, lat: 27.945, description: "中国最美的小城。", recommend: 10 },

  // --- 广东省 ---
  { name: "长隆旅游度假区", type: "5A级景区", address: "广东省，广州市，番禺区", lng: 113.323, lat: 22.998, description: "世界级主题乐园，野生动物世界。", recommend: 10 },
  { name: "华侨城旅游度假区", type: "5A级景区", address: "广东省，深圳市，南山区", lng: 113.989, lat: 22.534, description: "世界之窗，锦绣中华。", recommend: 9 },
  { name: "白云山景区", type: "5A级景区", address: "广东省，广州市，白云区", lng: 113.289, lat: 23.178, description: "羊城第一秀。", recommend: 8 },
  { name: "雁南飞茶田景区", type: "5A级景区", address: "广东省，梅州市，梅县区", lng: 116.312, lat: 24.345, description: "茶文化主题景区。", recommend: 7 },
  { name: "观澜湖休闲旅游区", type: "5A级景区", address: "广东省，深圳市，龙华区", lng: 114.012, lat: 22.712, description: "世界最大高尔夫球场。", recommend: 8 },
  { name: "地下河旅游景区", type: "5A级景区", address: "广东省，清远市，连州市", lng: 112.345, lat: 24.901, description: "神秘瑰丽的地下溶洞。", recommend: 8 },
  { name: "丹霞山景区", type: "5A级景区", address: "广东省，韶关市，仁化县", lng: 113.745, lat: 25.012, description: "中国红石公园，丹霞地貌命名地。", recommend: 10 },
  { name: "西樵山景区", type: "5A级景区", address: "广东省，佛山市，南海区", lng: 112.956, lat: 22.923, description: "珠江文明的灯塔。", recommend: 8 },
  { name: "博罗县罗浮山景区", type: "5A级景区", address: "广东省，惠州市，博罗县", lng: 114.056, lat: 23.289, description: "岭南第一山，道教名山。", recommend: 8 },
  { name: "长鹿旅游休博园", type: "5A级景区", address: "广东省，佛山市，顺德区", lng: 113.256, lat: 22.845, description: "岭南水乡风情主题乐园。", recommend: 8 },
  { name: "海陵岛大角湾海上丝路旅游区", type: "5A级景区", address: "广东省，阳江市，江城区", lng: 111.845, lat: 21.567, description: "南海一号，海滨浴场。", recommend: 8 },
  { name: "孙中山故里旅游区", type: "5A级景区", address: "广东省，中山市，南朗街道", lng: 113.512, lat: 22.445, description: "一代伟人故里。", recommend: 8 },
  { name: "惠州西湖旅游景区", type: "5A级景区", address: "广东省，惠州市，惠城区", lng: 114.389, lat: 23.089, description: "苎萝西子，苏轼足迹。", recommend: 8 },
  { name: "星湖旅游景区", type: "5A级景区", address: "广东省，肇庆市，端州区", lng: 112.467, lat: 23.067, description: "人间仙境，卧佛含丹。", recommend: 8 },
  { name: "开平碉楼文化旅游区", type: "5A级景区", address: "广东省，江门市，开平市", lng: 112.589, lat: 22.345, description: "华侨文化瑰宝，世界文化遗产。", recommend: 9 },
  { name: "河源市万绿湖风景区", type: "5A级景区", address: "广东省，河源市，东源县", lng: 114.545, lat: 23.712, description: "华南第一大湖。", recommend: 8 },

  // --- 广西壮族自治区 ---
  { name: "桂林市漓江景区", type: "5A级景区", address: "广西壮族自治区，桂林市，灵川县", lng: 110.412, lat: 25.012, description: "桂林山水甲天下。", recommend: 10 },
  { name: "靖江王城景区", type: "5A级景区", address: "广西壮族自治区，桂林市，秀峰区", lng: 110.289, lat: 25.289, description: "阅尽王城知桂林。", recommend: 9 },
  { name: "青秀山风景名胜旅游区", type: "5A级景区", address: "广西壮族自治区，南宁市，青秀区", lng: 108.389, lat: 22.789, description: "南宁绿肺，城市名片。", recommend: 8 },
  { name: "象山景区", type: "5A级景区", address: "广西壮族自治区，桂林市，象山区", lng: 110.289, lat: 25.267, description: "桂林城徽，水上游桂林。", recommend: 9 },
  { name: "德天跨国瀑布景区", type: "5A级景区", address: "广西壮族自治区，崇左市，大新县", lng: 106.712, lat: 22.856, description: "亚洲第一大跨国瀑布。", recommend: 10 },
  { name: "百色起义纪念园景区", type: "5A级景区", address: "广西壮族自治区，百色市，右江区", lng: 106.612, lat: 23.889, description: "红色圣地，百色起义。", recommend: 8 },
  { name: "涠洲岛南湾鳄鱼山景区", type: "5A级景区", address: "广西壮族自治区，北海市，海城区", lng: 109.101, lat: 21.012, description: "中国最美火山岛。", recommend: 9 },
  { name: "贺州市黄姚古镇景区", type: "5A级景区", address: "广西壮族自治区，贺州市，昭平县", lng: 111.156, lat: 24.512, description: "梦境家园，千年古镇。", recommend: 8 },
  { name: "柳州市程阳八寨景区", type: "5A级景区", address: "广西壮族自治区，柳州市，三江县", lng: 109.489, lat: 25.901, description: "侗族风情，风雨桥奇观。", recommend: 8 },
  { name: "崇左市花山岩画景区", type: "5A级景区", address: "广西壮族自治区，崇左市，宁明县", lng: 107.012, lat: 22.256, description: "世界文化遗产，壮族先民遗迹。", recommend: 8 },

  // --- 海南省 ---
  { name: "南山文化旅游区", type: "5A级景区", address: "海南省，三亚市，崖州区", lng: 109.201, lat: 18.301, description: "108米海上观音，佛教圣地。", recommend: 10 },
  { name: "南山大小洞天旅游区", type: "5A级景区", address: "海南省，三亚市，崖州区", lng: 109.156, lat: 18.312, description: "琼崖第一名胜。", recommend: 8 },
  { name: "呀诺达雨林文化旅游区", type: "5A级景区", address: "海南省，保亭县", lng: 109.656, lat: 18.456, description: "中国钻石级雨林。", recommend: 9 },
  { name: "分界洲岛旅游区", type: "5A级景区", address: "海南省，陵水县", lng: 110.189, lat: 18.589, description: "心灵的分界岛，潜水天堂。", recommend: 9 },
  { name: "海南槟榔谷黎苗文化旅游区", type: "5A级景区", address: "海南省，保亭县", lng: 109.612, lat: 18.367, description: "黎苗文化活化石。", recommend: 8 },
  { name: "三亚市蜈支洲岛旅游区", type: "5A级景区", address: "海南省，三亚市，海棠区", lng: 109.756, lat: 18.312, description: "中国马尔代夫。", recommend: 10 },
  { name: "三亚市天涯海角游览区", type: "5A级景区", address: "海南省，三亚市，天涯区", lng: 109.345, lat: 18.289, description: "陪你到天涯海角。", recommend: 9 },

  // --- 重庆市 ---
  { name: "大足石刻景区", type: "5A级景区", address: "重庆市，大足区", lng: 105.789, lat: 29.745, description: "世界文化遗产，石窟艺术瑰宝。", recommend: 10 },
  { name: "小小三峡旅游区", type: "5A级景区", address: "重庆市，巫山县", lng: 109.878, lat: 31.089, description: "中华奇观，天下绝景。", recommend: 9 },
  { name: "武隆喀斯特旅游区", type: "5A级景区", address: "重庆市，武隆区", lng: 107.756, lat: 29.412, description: "天生三桥，地缝奇观。", recommend: 10 },
  { name: "酉阳桃花源旅游景区", type: "5A级景区", address: "重庆市，酉阳县", lng: 108.767, lat: 28.845, description: "世界上有两个桃花源，一个在您心中。", recommend: 8 },
  { name: "龙鳞石海风景区", type: "5A级景区", address: "重庆市，綦江区", lng: 107.012, lat: 28.889, description: "渝黔生物基因库。", recommend: 8 },
  { name: "金佛山景区", type: "5A级景区", address: "重庆市，南川区", lng: 107.189, lat: 29.012, description: "天下第一桌山。", recommend: 8 },
  { name: "四面山景区", type: "5A级景区", address: "重庆市，江津区", lng: 106.412, lat: 28.589, description: "千瀑之乡，爱情天梯。", recommend: 8 },
  { name: "龙缸景区", type: "5A级景区", address: "重庆市，云阳县", lng: 108.912, lat: 30.656, description: "天下第一缸，云端廊桥。", recommend: 9 },
  { name: "阿依河景区", type: "5A级景区", address: "重庆市，彭水县", lng: 108.156, lat: 29.301, description: "苗家风情，峡谷漂流。", recommend: 7 },
  { name: "濯水景区", type: "5A级景区", address: "重庆市，黔江区", lng: 108.812, lat: 29.312, description: "世界第一风雨廊桥。", recommend: 8 },
  { name: "白帝城・瞿塘峡景区", type: "5A级景区", address: "重庆市，奉节县", lng: 109.512, lat: 31.045, description: "10元人民币背景图，诗城奉节。", recommend: 10 },
  { name: "武陵山大裂谷景区", type: "5A级景区", address: "重庆市，涪陵区", lng: 107.512, lat: 29.701, description: "地球最古老的伤痕。", recommend: 8 },

  // --- 四川省 ---
  { name: "都江堰旅游景区", type: "5A级景区", address: "四川省，成都市，都江堰市", lng: 103.612, lat: 31.001, description: "拜水都江堰，问道青城山。", recommend: 10 },
  { name: "乐山市峨眉山景区", type: "5A级景区", address: "四川省，乐山市，峨眉山市", lng: 103.333, lat: 29.589, description: "秀甲天下，普贤道场。", recommend: 10 },
  { name: "阿坝州九寨沟景区", type: "5A级景区", address: "四川省，阿坝州，九寨沟县", lng: 103.918, lat: 33.263, description: "九寨归来不看水。", recommend: 10 },
  { name: "乐山大佛景区", type: "5A级景区", address: "四川省，乐山市，市中区", lng: 103.767, lat: 29.545, description: "山是一尊佛，佛是一座山。", recommend: 10 },
  { name: "黄龙风景名胜区", type: "5A级景区", address: "四川省，阿坝州，松潘县", lng: 103.812, lat: 32.745, description: "人间瑶池，五彩池。", recommend: 9 },
 { name: "绵阳市羌城旅游区", type: "5A级景区", address: "四川省，绵阳市，北川县", lng: 104.456, lat: 31.834, description: "大禹故里，中国唯一的羌族自治县。", recommend: 7 },
  { name: "汶川特别旅游区", type: "5A级景区", address: "四川省，阿坝州，汶川县", lng: 103.612, lat: 31.478, description: "大爱无疆，震后重生奇迹。", recommend: 8 },
  { name: "阆中古城旅游景区", type: "5A级景区", address: "四川省，南充市，阆中市", lng: 105.967, lat: 31.578, description: "中国四大古城之一，春节发源地。", recommend: 9 },
  { name: "邓小平故里旅游区", type: "5A级景区", address: "四川省，广安市，广安区", lng: 106.645, lat: 30.489, description: "伟人故里，红色旅游经典。", recommend: 8 },
  { name: "剑门蜀道剑门关旅游景区", type: "5A级景区", address: "四川省，广元市，剑阁县", lng: 105.567, lat: 32.212, description: "剑门峥嵘而崔嵬，一夫当关万夫莫开。", recommend: 9 },
  { name: "南充市朱德故里景区", type: "5A级景区", address: "四川省，南充市，仪陇县", lng: 106.412, lat: 31.456, description: "元帅故里，德耀中华。", recommend: 7 },
  { name: "甘孜州海螺沟景区", type: "5A级景区", address: "四川省，甘孜州，泸定县", lng: 102.012, lat: 29.589, description: "贡嘎山下的冰川奇观。", recommend: 9 },
  { name: "碧峰峡旅游景区", type: "5A级景区", address: "四川省，雅安市，雨城区", lng: 103.012, lat: 30.067, description: "熊猫故乡，峡谷飞瀑。", recommend: 8 },
  { name: "光雾山旅游景区", type: "5A级景区", address: "四川省，巴中市，南江县", lng: 106.812, lat: 32.745, description: "亚洲最大的红叶观赏区。", recommend: 9 },
  { name: "甘孜州稻城亚丁旅游景区", type: "5A级景区", address: "四川省，甘孜州，稻城县", lng: 100.345, lat: 28.456, description: "香格里拉之魂，蓝色星球最后一片净土。", recommend: 10 },
  { name: "成都市安仁古镇景区", type: "5A级景区", address: "四川省，成都市，大邑县", lng: 103.623, lat: 30.501, description: "中国博物馆小镇。", recommend: 8 },
  { name: "阿坝州四姑娘山景区", type: "5A级景区", address: "四川省，阿坝州，小金县", lng: 102.889, lat: 31.112, description: "东方阿尔卑斯山。", recommend: 10 },
  { name: "成都市天台山景区", type: "5A级景区", address: "四川省，成都市，邛崃市", lng: 103.156, lat: 30.256, description: "山奇、石怪、水美、林幽。", recommend: 7 },

  // --- 贵州省 ---
  { name: "黄果树瀑布景区", type: "5A级景区", address: "贵州省，安顺市，镇宁县", lng: 105.667, lat: 25.989, description: "中国最大瀑布，亚洲第一大瀑布。", recommend: 10 },
  { name: "龙宫景区", type: "5A级景区", address: "贵州省，安顺市，西秀区", lng: 105.856, lat: 26.145, description: "天下之冠的地下水溶洞。", recommend: 8 },
  { name: "百里杜鹃景区", type: "5A级景区", address: "贵州省，毕节市，黔西县", lng: 105.889, lat: 27.212, description: "地球彩带，世界天然花园。", recommend: 9 },
  { name: "樟江景区", type: "5A级景区", address: "贵州省，黔南州，荔波县", lng: 107.756, lat: 25.245, description: "地球腰带上的绿宝石。", recommend: 10 },
  { name: "青岩古镇景区", type: "5A级景区", address: "贵州省，贵阳市，花溪区", lng: 106.689, lat: 26.345, description: "明清风格的军事重镇。", recommend: 8 },
  { name: "梵净山旅游区", type: "5A级景区", address: "贵州省，铜仁市，江口县", lng: 108.712, lat: 27.901, description: "弥勒道场，天空之城。", recommend: 10 },
  { name: "远古城旅游景区", type: "5A级景区", address: "贵州省，黔东南州，镇远县", lng: 108.423, lat: 27.056, description: "东方威尼斯，太极古城。", recommend: 8 },
  { name: "赤水丹霞旅游区", type: "5A级景区", address: "贵州省，遵义市，赤水市", lng: 105.712, lat: 28.489, description: "世界自然遗产，丹霞奇观。", recommend: 9 },
  { name: "织金洞景区", type: "5A级景区", address: "贵州省，毕节市，织金县", lng: 105.878, lat: 26.756, description: "黄山归来不看岳，织金洞外无洞天。", recommend: 9 },
  { name: "黔西南州万峰林景区", type: "5A级景区", address: "贵州省，黔西南州，兴义市", lng: 104.912, lat: 25.012, description: "天下奇观，中国最美峰林。", recommend: 9 },

  // --- 云南省 ---
  { name: "石林风景区", type: "5A级景区", address: "云南省，昆明市，石林县", lng: 103.323, lat: 24.812, description: "天下第一奇观，阿诗玛的故乡。", recommend: 10 },
  { name: "玉龙雪山景区", type: "5A级景区", address: "云南省，丽江市，玉龙县", lng: 100.212, lat: 27.101, description: "纳西族的神山，现代冰川博物馆。", recommend: 10 },
  { name: "丽江古城景区", type: "5A级景区", address: "云南省，丽江市，古城区", lng: 100.234, lat: 26.878, description: "世界文化遗产，慢生活天堂。", recommend: 10 },
  { name: "崇圣寺三塔文化旅游区", type: "5A级景区", address: "云南省，大理州，大理市", lng: 100.145, lat: 25.701, description: "大理地标，南诏大理国皇家寺院。", recommend: 9 },
  { name: "中科院热带植物园", type: "5A级景区", address: "云南省，西双版纳州，猛腊县", lng: 101.256, lat: 21.912, description: "热带植物百科全书。", recommend: 9 },
  { name: "普达措国家公园", type: "5A级景区", address: "云南省，迪庆州，香格里拉市", lng: 99.945, lat: 27.823, description: "香格里拉的明珠。", recommend: 9 },
  { name: "昆明世博园景区", type: "5A级景区", address: "云南省，昆明市，盘龙区", lng: 102.767, lat: 25.067, description: "1999年世界园艺博览会会址。", recommend: 7 },
  { name: "火山热海旅游区", type: "5A级景区", address: "云南省，保山市，腾冲市", lng: 98.456, lat: 24.956, description: "地热奇观，大滚锅。", recommend: 9 },
  { name: "普者黑旅游景区", type: "5A级景区", address: "云南省，文山州，丘北县", lng: 104.123, lat: 24.123, description: "水上田园，荷花世界。", recommend: 8 },
  { name: "和顺古镇景区", type: "5A级景区", address: "云南省，保山市，腾冲市", lng: 98.456, lat: 25.012, description: "中国第一魅力名镇。", recommend: 9 },

  // --- 西藏自治区 ---
  { name: "布达拉宫景区", type: "5A级景区", address: "西藏自治区，拉萨市，城关区", lng: 91.117, lat: 29.657, description: "世界屋脊上的明珠，藏传佛教圣地。", recommend: 10 },
  { name: "大昭寺景区", type: "5A级景区", address: "西藏自治区，拉萨市，城关区", lng: 91.131, lat: 29.653, description: "西藏最神圣的寺庙。", recommend: 10 },
  { name: "巴松措景区", type: "5A级景区", address: "西藏自治区，林芝市，工布江达县", lng: 93.901, lat: 29.989, description: "藏传佛教宁玛派红教圣湖。", recommend: 9 },
  { name: "日喀则市扎什伦布寺景区", type: "5A级景区", address: "西藏自治区，日喀则市，桑珠孜区", lng: 88.878, lat: 29.267, description: "历代班禅驻锡地。", recommend: 9 },
  { name: "雅鲁藏布大峡谷景区", type: "5A级景区", address: "西藏自治区，林芝市，米林县", lng: 94.812, lat: 29.612, description: "世界第一大峡谷。", recommend: 10 },

  // --- 陕西省 ---
  { name: "秦始皇陵博物院景区", type: "5A级景区", address: "陕西省，西安市，临潼区", lng: 109.273, lat: 34.385, description: "世界第八大奇迹，兵马俑。", recommend: 10 },
  { name: "华清宫景区", type: "5A级景区", address: "陕西省，西安市，临潼区", lng: 109.212, lat: 34.367, description: "唐明皇与杨贵妃的爱情故事发生地。", recommend: 9 },
  { name: "黄帝陵景区", type: "5A级景区", address: "陕西省，延安市，黄陵县", lng: 109.267, lat: 35.589, description: "中华第一陵。", recommend: 9 },
  { name: "大雁塔-大唐芙蓉园景区", type: "5A级景区", address: "陕西省，西安市，雁塔区", lng: 108.967, lat: 34.212, description: "盛唐文化展示中心。", recommend: 10 },
  { name: "渭南市华山风景区", type: "5A级景区", address: "陕西省，渭南市，华阴市", lng: 110.089, lat: 34.489, description: "奇险天下第一山。", recommend: 10 },
  { name: "法门寺文化景区", type: "5A级景区", address: "陕西省，宝鸡市，扶风县", lng: 107.901, lat: 34.389, description: "关中塔庙之祖，佛骨舍利。", recommend: 9 },
  { name: "金丝峡景区", type: "5A级景区", address: "陕西省，商洛市，商南县", lng: 110.556, lat: 33.456, description: "中国最美大峡谷之一。", recommend: 8 },
  { name: "太白山旅游景区", type: "5A级景区", address: "陕西省，宝鸡市，眉县", lng: 107.767, lat: 34.123, description: "秦岭主峰，太白积雪。", recommend: 8 },
  { name: "碑林历史文化景区", type: "5A级景区", address: "陕西省，西安市，碑林区", lng: 108.945, lat: 34.256, description: "保存最完整的古代城垣。", recommend: 9 },
  { name: "延安革命纪念地景区", type: "5A级景区", address: "陕西省，延安市，宝塔区", lng: 109.489, lat: 36.601, description: "中国革命圣地。", recommend: 9 },
  { name: "大明宫旅游景区", type: "5A级景区", address: "陕西省，西安市，新城区", lng: 108.967, lat: 34.289, description: "大唐帝国的权力中心遗址。", recommend: 8 },
  { name: "延川黄河乾坤湾景区", type: "5A级景区", address: "陕西省，延安市，延川县", lng: 110.456, lat: 36.456, description: "天下黄河第一湾。", recommend: 8 },
  { name: "乾陵景区", type: "5A级景区", address: "陕西省，咸阳市，乾县", lng: 108.212, lat: 34.545, description: "唐高宗与武则天合葬墓。", recommend: 9 },

  // --- 甘肃省 ---
  { name: "嘉峪关文物景区", type: "5A级景区", address: "甘肃省，嘉峪关市", lng: 98.212, lat: 39.812, description: "天下第一雄关。", recommend: 10 },
  { name: "崆峒山风景名胜区", type: "5A级景区", address: "甘肃省，平凉市，崆峒区", lng: 106.512, lat: 35.545, description: "中华道教第一山。", recommend: 8 },
  { name: "麦积山景区", type: "5A级景区", address: "甘肃省，天水市，麦积区", lng: 106.012, lat: 34.389, description: "东方雕塑陈列馆。", recommend: 10 },
  { name: "鸣沙山月牙泉景区", type: "5A级景区", address: "甘肃省，酒泉市，敦煌市", lng: 94.667, lat: 40.089, description: "沙漠奇观，山泉共生。", recommend: 10 },
  { name: "七彩丹霞景区", type: "5A级景区", address: "甘肃省，张掖市，临泽县", lng: 100.012, lat: 38.967, description: "上帝打翻的调色盘。", recommend: 10 },
  { name: "炳灵寺世界文化遗产旅游区", type: "5A级景区", address: "甘肃省，临夏州，永靖县", lng: 103.123, lat: 35.812, description: "石窟艺术瑰宝。", recommend: 8 },
  { name: "官鹅沟景区", type: "5A级景区", address: "甘肃省，陇南市，宕昌县", lng: 104.389, lat: 34.012, description: "小九寨沟之称。", recommend: 8 },
  { name: "冶力关旅游区", type: "5A级景区", address: "甘肃省，甘南州，临潭县", lng: 103.678, lat: 34.945, description: "山水画廊，藏乡风情。", recommend: 7 },

  // --- 青海省 ---
  { name: "青海湖风景区", type: "5A级景区", address: "青海省，海南州，共和县", lng: 100.501, lat: 36.612, description: "中国最大的内陆咸水湖。", recommend: 10 },
  { name: "西宁市塔尔寺景区", type: "5A级景区", address: "青海省，西宁市，湟中区", lng: 101.567, lat: 36.489, description: "藏传佛教格鲁派六大寺院之一。", recommend: 10 },
  { name: "互助土族故土园旅游区", type: "5A级景区", address: "青海省，海东市，互助县", lng: 101.956, lat: 36.845, description: "彩虹故乡，土族风情。", recommend: 7 },
  { name: "海北州阿咪东索景区", type: "5A级景区", address: "青海省，海北州，祁连县", lng: 100.245, lat: 38.178, description: "祁连山下的神山。", recommend: 8 },

  // --- 宁夏回族自治区 ---
  { name: "市沙湖旅游景区", type: "5A级景区", address: "宁夏回族自治区，石嘴山市，平罗县", lng: 106.367, lat: 38.789, description: "塞上明珠，金沙、碧水、翠苇。", recommend: 9 },
  { name: "沙坡头旅游景区", type: "5A级景区", address: "宁夏回族自治区，中卫市，沙坡头区", lng: 105.012, lat: 37.501, description: "大漠孤烟直，长河落日圆。", recommend: 10 },
  { name: "宁夏镇北堡西部影视城", type: "5A级景区", address: "宁夏回族自治区，银川市，西夏区", lng: 106.012, lat: 38.545, description: "中国电影从这里走向世界。", recommend: 9 },
  { name: "水洞沟旅游区", type: "5A级景区", address: "宁夏回族自治区，银川市，灵武市", lng: 106.512, lat: 38.289, description: "中国史前考古的发祥地。", recommend: 8 },
  { name: "青铜峡黄河大峡谷旅游区", type: "5A级景区", address: "宁夏回族自治区，吴忠市，青铜峡市", lng: 106.012, lat: 37.889, description: "黄河大峡谷，长渠流润。", recommend: 8 },
  { name: "六盘山红军长征旅游区", type: "5A级景区", address: "宁夏回族自治区，固原市，隆德县", lng: 106.212, lat: 35.656, description: "长征最后一道屏障。", recommend: 8 },

  // --- 新疆维吾尔自治区 ---
  { name: "天山天池风景名胜区", type: "5A级景区", address: "新疆维吾尔自治区，昌吉州，阜康市", lng: 88.123, lat: 43.901, description: "瑶池仙境，天山明珠。", recommend: 10 },
  { name: "葡萄沟风景区", type: "5A级景区", address: "新疆维吾尔自治区，吐鲁番市，高昌区", lng: 89.189, lat: 42.989, description: "火洲里的清凉世界。", recommend: 8 },
  { name: "喀纳斯景区", type: "5A级景区", address: "新疆维吾尔自治区，阿勒泰地区，布尔津县", lng: 87.012, lat: 48.501, description: "人间净土，神的花园。", recommend: 10 },
  { name: "那拉提旅游风景区", type: "5A级景区", address: "新疆维吾尔自治区，伊犁州，新源县", lng: 84.123, lat: 43.345, description: "空中草原，世界四大草原之一。", recommend: 10 },
  { name: "可可托海景区", type: "5A级景区", address: "新疆维吾尔自治区，阿勒泰地区，富蕴县", lng: 89.812, lat: 47.212, description: "绿色的丛林，蓝色的河湾。", recommend: 9 },
  { name: "金湖杨景区", type: "5A级景区", address: "新疆维吾尔自治区，喀什地区，泽普县", lng: 77.256, lat: 38.189, description: "胡杨、水、绿洲、戈壁。", recommend: 8 },
  { name: "天山大峡谷", type: "5A级景区", address: "新疆维吾尔自治区，乌鲁木齐市，县", lng: 87.456, lat: 43.456, description: "天山地理黄金辅助线。", recommend: 8 },
  { name: "博斯腾湖景区", type: "5A级景区", address: "新疆维吾尔自治区，巴州，博湖县", lng: 86.812, lat: 41.901, description: "中国最大的内陆淡水吞吐湖。", recommend: 8 },
  { name: "喀什古城景区", type: "5A级景区", address: "新疆维吾尔自治区，喀什地区，喀什市", lng: 75.989, lat: 39.478, description: "不到喀什，不算到新疆。", recommend: 10 },
  { name: "喀拉峻景区", type: "5A级景区", address: "新疆维吾尔自治区，伊犁州，特克斯县", lng: 82.123, lat: 43.212, description: "立体草原，人体草原。", recommend: 9 },
  { name: "巴音布鲁克景区", type: "5A级景区", address: "新疆维吾尔自治区，巴州，和静县", lng: 84.156, lat: 42.812, description: "九曲十八弯，天鹅湖。", recommend: 10 },
  { name: "帕米尔旅游区", type: "5A级景区", address: "新疆维吾尔自治区，喀什地区，塔县", lng: 75.234, lat: 37.767, description: "高原明珠，塔吉克风情。", recommend: 9 },
  { name: "世界魔鬼城景区", type: "5A级景区", address: "新疆维吾尔自治区，克拉玛依市，乌尔禾区", lng: 85.312, lat: 46.123, description: "雅丹地貌奇观。", recommend: 9 },
  { name: "赛里木湖景区", type: "5A级景区", address: "新疆维吾尔自治区，博州，博乐市", lng: 81.156, lat: 44.612, description: "大西洋最后一滴眼泪。", recommend: 10 },
  { name: "江布拉克景区", type: "5A级景区", address: "新疆维吾尔自治区，昌吉州，奇台县", lng: 89.567, lat: 43.545, description: "圣水之源，麦浪滚滚。", recommend: 8 },
  { name: "天山托木尔景区", type: "5A级景区", address: "新疆维吾尔自治区，阿克苏地区，温宿县", lng: 80.212, lat: 41.789, description: "天山最高峰，红层峡谷。", recommend: 8 },

  // --- 新疆生产建设兵团 ---
  { name: "兵团十师 185 团白沙湖景区", type: "5A级景区", address: "新疆生产建设兵团，第十师，北屯市", lng: 86.512, lat: 48.345, description: "沙漠奇湖，塞外江南。", recommend: 8 },
  { name: "塔克拉玛干・三五九旅文化旅游区", type: "5A级景区", address: "新疆生产建设兵团，第一师，阿拉尔市", lng: 81.289, lat: 40.545, description: "生在井冈山，长在南泥湾，转战数万里，屯垦在天山。", recommend: 8 }
        ];
        
        const scenicData4A = [
    {
        name: "汾河景区",
        type: "4A级景区",
        address: "山西省太原市万柏林区",
        lng: 112.521793,
        lat: 37.856679,
        description: "以汾河生态治理为核心的城市滨水休闲景观带。",
        recommend: 9
    },
    {
        name: "太原植物园景区",
        type: "4A级景区",
        address: "山西省太原市晋源区",
        lng: 112.407214,
        lat: 37.705868,
        description: "集植物保育、科普教育、生态休闲于一体的综合性植物园。",
        recommend: 8
    },
    {
        name: "太原动物园景区",
        type: "4A级景区",
        address: "山西省太原市杏花岭区",
        lng: 112.583882,
        lat: 37.890132,
        description: "山西省规模较大的城市动物园，适合亲子游。",
        recommend: 8
    },
    {
        name: "六味斋云梦坞景区",
        type: "4A级景区",
        address: "山西省太原市清徐县",
        lng: 112.333921,
        lat: 37.602114,
        description: "融合晋商饮食文化与传统酱卤工艺的工业旅游景区。",
        recommend: 7
    },
    {
        name: "青龙古镇景区",
        type: "4A级景区",
        address: "山西省太原市阳曲县",
        lng: 112.655742,
        lat: 38.107965,
        description: "保存较完整的北方传统古镇风貌。",
        recommend: 7
    },
    {
        name: "蒙山景区",
        type: "4A级景区",
        address: "山西省太原市晋源区",
        lng: 112.454811,
        lat: 37.741512,
        description: "以蒙山大佛为核心的佛教文化旅游景区。",
        recommend: 8
    },
    {
        name: "森林公园景区",
        type: "4A级景区",
        address: "山西省太原市尖草坪区",
        lng: 112.556734,
        lat: 37.942621,
        description: "城市北部大型生态森林休闲公园。",
        recommend: 7
    },
    {
        name: "清徐县宝源老醋坊景区",
        type: "4A级景区",
        address: "山西省太原市清徐县",
        lng: 112.354991,
        lat: 37.607283,
        description: "展示山西老陈醋传统酿造工艺的文化景区。",
        recommend: 8
    },
    {
        name: "中国煤炭博物馆煤海探秘景区",
        type: "4A级景区",
        address: "山西省太原市万柏林区",
        lng: 112.513264,
        lat: 37.843987,
        description: "中国煤炭工业主题博物馆与沉浸式井下体验。",
        recommend: 9
    },
    {
        name: "大同火山群景区",
        type: "4A级景区",
        address: "山西省大同市云州区",
        lng: 113.400381,
        lat: 40.061247,
        description: "我国罕见的大规模第四纪火山群地貌。",
        recommend: 8
    },
    {
        name: "应县木塔景区",
        type: "4A级景区",
        address: "山西省朔州市应县",
        lng: 113.191236,
        lat: 39.554241,
        description: "世界最高最古老的纯木结构佛塔。",
        recommend: 10
    },
    {
        name: "北岳恒山景区",
        type: "5A级景区",
        address: "山西省大同市浑源县",
        lng: 113.747612,
        lat: 39.663874,
        description: "五岳之一北岳，集险峻山势与道教文化于一体。",
        recommend: 10
    },
    {
        name: "忻州古城",
        type: "4A级景区",
        address: "山西省忻州市忻府区",
        lng: 112.733941,
        lat: 38.417269,
        description: "展现晋北历史风貌的复原型古城文化街区。",
        recommend: 8
    },
    {
        name: "万年冰洞景区",
        type: "4A级景区",
        address: "山西省忻州市宁武县",
        lng: 112.058421,
        lat: 38.940211,
        description: "罕见的地下冰洞自然奇观。",
        recommend: 9
    },
    {
        name: "芦芽山景区",
        type: "4A级景区",
        address: "山西省忻州市宁武县",
        lng: 111.980447,
        lat: 38.859921,
        description: "高原草甸、峡谷、森林复合型生态景区。",
        recommend: 9
    },
    {
        name: "老牛湾景区",
        type: "4A级景区",
        address: "山西省忻州市偏关县",
        lng: 111.246832,
        lat: 39.398154,
        description: "黄河与长城在此交汇的壮美峡谷景观。",
        recommend: 9
    },
    {
        name: "红门口地下长城景区",
        type: "4A级景区",
        address: "山西省忻州市偏关县",
        lng: 111.351296,
        lat: 39.427591,
        description: "保存完整的明代地下军事防御工程。",
        recommend: 8
    },
    {
        name: "李二口长城景区",
        type: "4A级景区",
        address: "山西省大同市天镇县",
        lng: 114.149872,
        lat: 40.415963,
        description: "保存较完整的明代长城关隘遗址。",
        recommend: 7
    },
    {
        name: "平型关大捷景区",
        type: "4A级景区",
        address: "山西省大同市灵丘县",
        lng: 113.694231,
        lat: 39.736482,
        description: "著名抗战历史遗址，平型关大捷发生地。",
        recommend: 9
    },
    {
        name: "魏都水世界景区",
        type: "4A级景区",
        address: "山西省大同市平城区",
        lng: 113.321847,
        lat: 40.083294,
        description: "大型室内外综合水上娱乐休闲景区。",
        recommend: 7
    },
    {
        name: "大同古城墙景区",
        type: "4A级景区",
        address: "山西省大同市平城区",
        lng: 113.300912,
        lat: 40.082661,
        description: "明代古城防御体系代表，夜游体验突出。",
        recommend: 9
    },
    {
        name: "善化寺景区",
        type: "4A级景区",
        address: "山西省大同市平城区",
        lng: 113.299684,
        lat: 40.084993,
        description: "辽金时期皇家寺院，建筑保存完好。",
        recommend: 8
    },
    {
        name: "华严寺景区",
        type: "4A级景区",
        address: "山西省大同市平城区",
        lng: 113.300215,
        lat: 40.085742,
        description: "辽金佛教寺院代表，彩塑壁画精美。",
        recommend: 9
    },
    {
        name: "大泉山生态旅游区",
        type: "4A级景区",
        address: "山西省大同市阳高县",
        lng: 113.742618,
        lat: 40.382741,
        description: "集山地景观与生态休闲于一体的自然景区。",
        recommend: 7
    },
    {
        name: "车河有机社区",
        type: "4A级景区",
        address: "山西省大同市灵丘县",
        lng: 114.067329,
        lat: 39.566428,
        description: "以有机农业和乡村振兴为主题的生态社区。",
        recommend: 8
    },
    {
        name: "右玉生态旅游景区",
        type: "4A级景区",
        address: "山西省朔州市右玉县",
        lng: 112.470384,
        lat: 39.992641,
        description: "沙地变绿洲的生态治理典范景区。",
        recommend: 9
    },
    {
        name: "朔城区崇福寺景区",
        type: "4A级景区",
        address: "山西省朔州市朔城区",
        lng: 112.433582,
        lat: 39.332917,
        description: "辽金时期佛教寺院建筑群。",
        recommend: 8
    },
    {
        name: "金沙滩生态旅游景区",
        type: "4A级景区",
        address: "山西省朔州市怀仁市",
        lng: 113.108451,
        lat: 39.868721,
        description: "以湿地、沙滩和休闲度假为特色的生态景区。",
        recommend: 7
    },
    {
        name: "憨山文化旅游景区",
        type: "4A级景区",
        address: "山西省忻州市繁峙县",
        lng: 113.294671,
        lat: 39.193847,
        description: "融合佛教文化与山地景观的文化旅游区。",
        recommend: 7
    },
    {
        name: "汾河源头景区",
        type: "4A级景区",
        address: "山西省忻州市宁武县",
        lng: 112.050961,
        lat: 38.846173,
        description: "汾河发源地，生态环境原始。",
        recommend: 8
    },
    {
        name: "天涯山景区",
        type: "4A级景区",
        address: "山西省忻州市原平市",
        lng: 112.858124,
        lat: 38.789246,
        description: "以奇峰怪石和历史文化遗迹著称。",
        recommend: 7
    },
    {
        name: "河边民俗博物馆景区",
        type: "4A级景区",
        address: "山西省忻州市定襄县",
        lng: 112.961382,
        lat: 38.485672,
        description: "集中展示晋北民俗文化与生活方式。",
        recommend: 7
    },
    {
        name: "宋家沟景区",
        type: "4A级景区",
        address: "山西省忻州市岢岚县",
        lng: 111.589274,
        lat: 38.733619,
        description: "红色文化与乡村振兴示范景区。",
        recommend: 8
    },
    {
        name: "禹王洞风景区",
        type: "4A级景区",
        address: "山西省忻州市忻府区",
        lng: 112.797641,
        lat: 38.461382,
        description: "以溶洞景观和传说文化闻名。",
        recommend: 7
    },
    {
        name: "源景区",
        type: "4A级景区",
        address: "山西省忻州市繁峙县",
        lng: 113.106284,
        lat: 39.130492,
        description: "以山泉生态与自然休闲为特色。",
        recommend: 6
    },
    {
        name: "云中河景区",
        type: "4A级景区",
        address: "山西省忻州市忻府区",
        lng: 112.785931,
        lat: 38.520174,
        description: "城市近郊生态休闲与水景景观带。",
        recommend: 7
    },
    {
        name: "天柱山景区",
        type: "4A级景区",
        address: "山西省忻州市静乐县",
        lng: 111.992864,
        lat: 38.435971,
        description: "以奇峰林立和森林景观著称。",
        recommend: 7
    },
    {
        name: "红门口地下长城景区",
        type: "4A级景区",
        address: "山西省忻州市偏关县",
        lng: 111.351296,
        lat: 39.427591,
        description: "保存完整的明代地下长城防御工程，军事文化价值突出。",
        recommend: 8
    },
    {
        name: "代州古城景区",
        type: "4A级景区",
        address: "山西省忻州市代县",
        lng: 112.956412,
        lat: 39.066874,
        description: "明清时期县城格局保存完好，雁门关文化核心组成。",
        recommend: 8
    },
    {
        name: "临县碛口景区",
        type: "4A级景区",
        address: "山西省吕梁市临县",
        lng: 110.997842,
        lat: 37.444913,
        description: "黄河古渡口与晋商古镇文化的重要代表。",
        recommend: 9
    },
    {
        name: "蔡家崖晋绥文化景区",
        type: "4A级景区",
        address: "山西省吕梁市兴县",
        lng: 111.093274,
        lat: 38.392615,
        description: "晋绥革命根据地首府旧址，红色文化核心景区。",
        recommend: 9
    },
    {
        name: "义居寺景区",
        type: "4A级景区",
        address: "山西省吕梁市临县",
        lng: 110.965418,
        lat: 37.563284,
        description: "黄河岸畔古寺，融合佛教文化与自然景观。",
        recommend: 7
    },
    {
        name: "玄中寺景区",
        type: "4A级景区",
        address: "山西省吕梁市交城县",
        lng: 111.919437,
        lat: 37.699821,
        description: "净土宗祖庭之一，中国佛教重要圣地。",
        recommend: 8
    },
    {
        name: "孝河湿地公园",
        type: "4A级景区",
        address: "山西省吕梁市孝义市",
        lng: 111.785613,
        lat: 37.146298,
        description: "以湿地保护和生态修复为主题的城市公园。",
        recommend: 7
    },
    {
        name: "孝义市胜溪湖森林公园",
        type: "4A级景区",
        address: "山西省吕梁市孝义市",
        lng: 111.764918,
        lat: 37.122847,
        description: "湖泊与森林景观结合的城市休闲绿地。",
        recommend: 7
    },
    {
        name: "汾阳市汾酒文化景区",
        type: "4A级景区",
        address: "山西省吕梁市汾阳市",
        lng: 111.772941,
        lat: 37.263584,
        description: "展示中国白酒鼻祖汾酒历史与酿造工艺。",
        recommend: 9
    },
    {
        name: "北武当山风景名胜区",
        type: "4A级景区",
        address: "山西省吕梁市方山县",
        lng: 111.180643,
        lat: 37.901274,
        description: "道教名山，山势险峻、古建筑群密集。",
        recommend: 8
    },
    {
        name: "贾家庄文化生态旅游区",
        type: "4A级景区",
        address: "山西省吕梁市汾阳市",
        lng: 111.785941,
        lat: 37.255861,
        description: "全国乡村文化振兴示范村，艺术氛围浓厚。",
        recommend: 8
    },
    {
        name: "孝义市三皇庙景区",
        type: "4A级景区",
        address: "山西省吕梁市孝义市",
        lng: 111.770942,
        lat: 37.148726,
        description: "祭祀三皇的重要历史庙宇，地方信仰中心。",
        recommend: 7
    },
    {
        name: "交城县卦山景区",
        type: "4A级景区",
        address: "山西省吕梁市交城县",
        lng: 111.937428,
        lat: 37.683517,
        description: "相传伏羲画八卦之地，文化底蕴深厚。",
        recommend: 8
    },
    {
        name: "金龙山文化旅游景区",
        type: "4A级景区",
        address: "山西省吕梁市孝义市",
        lng: 111.732846,
        lat: 37.111492,
        description: "集宗教文化、山地景观于一体的旅游区。",
        recommend: 7
    },
    {
        name: "兴县黑茶山四八烈士纪念地景区",
        type: "4A级景区",
        address: "山西省吕梁市兴县",
        lng: 111.216835,
        lat: 38.285417,
        description: "纪念晋绥革命烈士的重要红色教育基地。",
        recommend: 8
    },
    {
        name: "离石区白马仙洞景区",
        type: "4A级景区",
        address: "山西省吕梁市离石区",
        lng: 111.153427,
        lat: 37.548926,
        description: "以溶洞奇观和民间传说著称。",
        recommend: 7
    },
    {
        name: "离石区大东沟景区",
        type: "4A级景区",
        address: "山西省吕梁市离石区",
        lng: 111.175284,
        lat: 37.579614,
        description: "峡谷地貌明显的近郊生态休闲区。",
        recommend: 6
    },
    {
        name: "武乡县八路军总部王家峪旧址景区",
        type: "4A级景区",
        address: "山西省长治市武乡县",
        lng: 112.841739,
        lat: 36.917482,
        description: "八路军总部重要驻地之一，红色文化核心景区。",
        recommend: 9
    },
    {
        name: "小西沟文旅康养小镇",
        type: "4A级景区",
        address: "山西省晋中市榆次区",
        lng: 112.757421,
        lat: 37.731842,
        description: "集康养、休闲、乡村旅游于一体的小镇。",
        recommend: 7
    },
    {
        name: "榆次区后沟古村景区",
        type: "4A级景区",
        address: "山西省晋中市榆次区",
        lng: 112.698534,
        lat: 37.728416,
        description: "明清时期古村落保存完整，晋商文化浓厚。",
        recommend: 8
    },
    {
        name: "榆次区乌金山景区",
        type: "4A级景区",
        address: "山西省晋中市榆次区",
        lng: 112.802471,
        lat: 37.764821,
        description: "城市周边的森林休闲与登山景区。",
        recommend: 7
    },
    {
        name: "灵石县石膏山风景区",
        type: "4A级景区",
        address: "山西省晋中市灵石县",
        lng: 111.739482,
        lat: 36.945618,
        description: "以石膏岩地貌和森林生态著称的自然景区。",
        recommend: 7
    },
    {
        name: "介休市张壁古堡景区",
        type: "4A级景区",
        address: "山西省晋中市介休市",
        lng: 111.916384,
        lat: 36.983217,
        description: "集地上古堡与地下军事地道体系于一体的独特古堡。",
        recommend: 9
    },
    {
        name: "榆次区九龙国际文化生态旅游区",
        type: "4A级景区",
        address: "山西省晋中市榆次区",
        lng: 112.731845,
        lat: 37.682914,
        description: "融合生态休闲、文化展示和度假体验的综合旅游区。",
        recommend: 7
    },
    {
        name: "榆次区榆次老城景区",
        type: "4A级景区",
        address: "山西省晋中市榆次区",
        lng: 112.707348,
        lat: 37.697254,
        description: "保存明清格局的晋中传统城市老城。",
        recommend: 8
    },
    {
        name: "灵石县王家大院民居艺术馆",
        type: "4A级景区",
        address: "山西省晋中市灵石县",
        lng: 111.790214,
        lat: 36.903427,
        description: "清代晋商民居建筑艺术的巅峰之作。",
        recommend: 10
    },
    {
        name: "平遥县镇国寺景区",
        type: "4A级景区",
        address: "山西省晋中市平遥县",
        lng: 112.178364,
        lat: 37.238741,
        description: "五代时期木构建筑代表，中国古建瑰宝。",
        recommend: 9
    },
    {
        name: "榆次区常家庄园",
        type: "4A级景区",
        address: "山西省晋中市榆次区",
        lng: 112.626917,
        lat: 37.707418,
        description: "晋商常氏家族大型宅院群，儒商文化典范。",
        recommend: 9
    },
    {
        name: "平遥县双林寺景区",
        type: "4A级景区",
        address: "山西省晋中市平遥县",
        lng: 112.164821,
        lat: 37.207486,
        description: "以彩塑艺术闻名的佛教寺院，被誉为东方彩塑艺术宝库。",
        recommend: 9
    },
    {
        name: "灵石县红崖峡谷景区",
        type: "4A级景区",
        address: "山西省晋中市灵石县",
        lng: 111.835412,
        lat: 36.884916,
        description: "峡谷、瀑布、丹霞地貌结合的自然景区。",
        recommend: 8
    },
    {
        name: "昔阳县大寨景区",
        type: "4A级景区",
        address: "山西省晋中市昔阳县",
        lng: 113.636842,
        lat: 37.645271,
        description: "中国农业学大寨精神发源地，红色旅游景区。",
        recommend: 8
    },
    {
        name: "左权县麻田八路军总部纪念馆景区",
        type: "4A级景区",
        address: "山西省晋中市左权县",
        lng: 113.398471,
        lat: 37.048617,
        description: "八路军总部长期驻扎地之一，重要红色教育基地。",
        recommend: 9
    },
    {
        name: "左权县太行龙泉旅游区",
        type: "4A级景区",
        address: "山西省晋中市左权县",
        lng: 113.512948,
        lat: 37.011482,
        description: "以泉水峡谷和太行山自然风光著称。",
        recommend: 7
    },
    {
        name: "祁县昭馀古城茶商文化旅游区",
        type: "4A级景区",
        address: "山西省晋中市祁县",
        lng: 112.331847,
        lat: 37.358924,
        description: "晋商茶贸文化集中展示区，古城风貌完整。",
        recommend: 8
    },
    {
        name: "阳泉市小河古村评梅景区",
        type: "4A级景区",
        address: "山西省阳泉市郊区",
        lng: 113.563918,
        lat: 37.918624,
        description: "传统古村落与戏曲文化相结合的特色景区。",
        recommend: 7
    },
    {
        name: "阳泉市城区阳泉记忆·1947文化园",
        type: "4A级景区",
        address: "山西省阳泉市城区",
        lng: 113.575214,
        lat: 37.861472,
        description: "展示阳泉解放历史与城市工业记忆的文化园区。",
        recommend: 8
    },
    {
        name: "阳泉市盂县华北奕丰生态园",
        type: "4A级景区",
        address: "山西省阳泉市盂县",
        lng: 113.382714,
        lat: 38.086429,
        description: "集农业观光、生态休闲、研学体验于一体。",
        recommend: 7
    },
    {
        name: "盂县藏山景区",
        type: "4A级景区",
        address: "山西省阳泉市盂县",
        lng: 113.497842,
        lat: 38.093741,
        description: "赵氏孤儿故事发源地，历史文化与山水融合。",
        recommend: 9
    },
    {
        name: "黎城县丹泉小镇景区",
        type: "4A级景区",
        address: "山西省长治市黎城县",
        lng: 113.384271,
        lat: 36.524918,
        description: "以红色文化与康养休闲为主题的小镇。",
        recommend: 7
    },
    {
        name: "长治潞州区漳泽湖国家城市湿地公园",
        type: "4A级景区",
        address: "山西省长治市潞州区",
        lng: 113.093842,
        lat: 36.207418,
        description: "城市核心湿地生态系统与休闲景观带。",
        recommend: 8
    },
    {
        name: "长治天脊山风景区",
        type: "4A级景区",
        address: "山西省长治市壶关县",
        lng: 113.298714,
        lat: 36.458271,
        description: "太行山典型峰林地貌，自然风光壮美。",
        recommend: 8
    },
    {
        name: "壶关太行山大峡谷",
        type: "5A级景区",
        address: "山西省长治市壶关县",
        lng: 113.384271,
        lat: 36.432918,
        description: "以峡谷、瀑布、绝壁景观闻名的国家级峡谷景区。",
        recommend: 10
    },
    {
        name: "黎城县黄崖洞景区",
        type: "4A级景区",
        address: "山西省长治市黎城县",
        lng: 113.433274,
        lat: 36.538417,
        description: "八路军重要兵工基地旧址，太行山红色旅游代表。",
        recommend: 9
    },
    {
        name: "八路军太行纪念馆",
        type: "4A级景区",
        address: "山西省长治市武乡县",
        lng: 112.873421,
        lat: 36.834271,
        description: "全面展示八路军在太行山区抗战历史的国家级纪念馆。",
        recommend: 10
    },
    {
        name: "高平市釜山景区",
        type: "4A级景区",
        address: "山西省晋城市高平市",
        lng: 112.914728,
        lat: 35.861492,
        description: "集山地景观、历史文化与休闲游憩于一体。",
        recommend: 7
    },
    {
        name: "司徒小镇",
        type: "4A级景区",
        address: "山西省晋城市城区",
        lng: 112.884271,
        lat: 35.520418,
        description: "以晋东南民俗文化和夜游体验著称的特色小镇。",
        recommend: 8
    },
    {
        name: "王莽岭景区",
        type: "5A级景区",
        address: "山西省晋城市陵川县",
        lng: 113.312947,
        lat: 35.739482,
        description: "太行山巅峰级景观，被誉为“太行至尊”。",
        recommend: 10
    },
    {
        name: "大阳古镇",
        type: "4A级景区",
        address: "山西省晋城市泽州县",
        lng: 112.974618,
        lat: 35.565214,
        description: "保存完好的明清古镇，被称为“九州针都”。",
        recommend: 8
    },
    {
        name: "浮山县寨圪塔康养景区",
        type: "4A级景区",
        address: "山西省临汾市浮山县",
        lng: 111.878416,
        lat: 35.997842,
        description: "以森林康养和山地生态休闲为特色。",
        recommend: 7
    },
    {
        name: "洪洞县中镇霍山兴唐寺景区",
        type: "4A级景区",
        address: "山西省临汾市洪洞县",
        lng: 111.605284,
        lat: 36.255617,
        description: "中镇霍山核心寺院，佛教文化历史悠久。",
        recommend: 8
    },
    {
        name: "隰县小西天",
        type: "4A级景区",
        address: "山西省临汾市隰县",
        lng: 110.935214,
        lat: 36.698741,
        description: "以明代悬塑艺术闻名，被誉为“悬塑绝唱”。",
        recommend: 9
    },
    {
        name: "乡宁县戎子酒庄景区",
        type: "4A级景区",
        address: "山西省临汾市乡宁县",
        lng: 110.844271,
        lat: 36.280418,
        description: "集葡萄酒文化、观光体验于一体的酒庄景区。",
        recommend: 8
    },
    {
        name: "霍州中镇霍山七里峪景区",
        type: "4A级景区",
        address: "山西省临汾市霍州市",
        lng: 111.697418,
        lat: 36.517284,
        description: "森林峡谷景观突出，是霍山重要生态游览区。",
        recommend: 8
    },
    {
        name: "霍州署景区",
        type: "4A级景区",
        address: "山西省临汾市霍州市",
        lng: 111.723842,
        lat: 36.569214,
        description: "保存完整的明清州署衙门建筑群。",
        recommend: 8
    },
    {
        name: "万荣县飞云楼景区",
        type: "4A级景区",
        address: "山西省运城市万荣县",
        lng: 110.843472,
        lat: 35.417286,
        description: "元代木构楼阁建筑代表作，结构精妙。",
        recommend: 9
    },
    {
        name: "芮城永乐宫",
        type: "5A级景区",
        address: "山西省运城市芮城县",
        lng: 110.704917,
        lat: 34.694281,
        description: "元代道教宫观，壁画艺术世界闻名。",
        recommend: 10
    },
    {
        name: "解州关帝庙旅游景区",
        type: "5A级景区",
        address: "山西省运城市盐湖区",
        lng: 111.028417,
        lat: 35.040281,
        description: "全球规模最大、等级最高的关帝庙。",
        recommend: 10
    },
    {
        name: "永济普救寺旅游区",
        type: "4A级景区",
        address: "山西省运城市永济市",
        lng: 110.447284,
        lat: 34.858417,
        description: "《西厢记》故事发生地，佛教文化深厚。",
        recommend: 9
    },
    {
        name: "永济五老峰景区",
        type: "4A级景区",
        address: "山西省运城市永济市",
        lng: 110.498741,
        lat: 34.819417,
        description: "中条山主峰景区，山势险峻、云海壮观。",
        recommend: 8
    },
    {
        name: "大同火山群景区",
        type: "4A级景区",
        address: "山西省大同市云州区",
        lng: 113.400381,
        lat: 40.061247,
        description: "我国分布最集中、保存最完整的火山群地貌。",
        recommend: 8
    },
    {
        name: "岢岚县宋家沟景区",
        type: "4A级景区",
        address: "山西省忻州市岢岚县",
        lng: 111.589274,
        lat: 38.733619,
        description: "红色文化与乡村振兴融合发展的示范景区。",
        recommend: 8
    },
    {
        name: "阳泉记忆·1947文化园",
        type: "4A级景区",
        address: "山西省阳泉市城区",
        lng: 113.575214,
        lat: 37.861472,
        description: "以阳泉解放历史和工业记忆为主题的城市文化园区。",
        recommend: 8
    },
    {
        name: "盂县华北奕丰生态园",
        type: "4A级景区",
        address: "山西省阳泉市盂县",
        lng: 113.382714,
        lat: 38.086429,
        description: "集生态农业、休闲观光、研学体验于一体的生态园区。",
        recommend: 7
    },
    {
        name: "阳城县析城山景区",
        type: "4A级景区",
        address: "山西省晋城市阳城县",
        lng: 112.475918,
        lat: 35.598427,
        description: "以险峻山势和道教文化遗存著称的山岳景区。",
        recommend: 8
    },
    {
        name: "高平市羊头山景区",
        type: "4A级景区",
        address: "山西省晋城市高平市",
        lng: 112.903742,
        lat: 35.912684,
        description: "兼具红色文化与自然山地景观的综合景区。",
        recommend: 8
    },
    {
        name: "乡宁县戎子酒庄景区",
        type: "4A级景区",
        address: "山西省临汾市乡宁县",
        lng: 110.844271,
        lat: 36.280418,
        description: "集葡萄酒文化展示、观光体验于一体的特色酒庄。",
        recommend: 8
    },
    {
        name: "霍州中镇霍山七里峪景区",
        type: "4A级景区",
        address: "山西省临汾市霍州市",
        lng: 111.697418,
        lat: 36.517284,
        description: "森林覆盖率高，峡谷幽深的霍山核心生态游览区。",
        recommend: 8
    },
    {
        name: "霍州署景区",
        type: "4A级景区",
        address: "山西省临汾市霍州市",
        lng: 111.723842,
        lat: 36.569214,
        description: "保存完整的明清州署衙门建筑群，被誉为民间故宫。",
        recommend: 8
    },
    {
        name: "盐湖区凤凰谷景区",
        type: "4A级景区",
        address: "山西省运城市盐湖区",
        lng: 110.978421,
        lat: 35.103742,
        description: "以峡谷、溪流、森林景观为特色的生态休闲区。",
        recommend: 7
    },
    {
        name: "新绛县绛州署景区",
        type: "4A级景区",
        address: "山西省运城市新绛县",
        lng: 111.225842,
        lat: 35.618274,
        description: "保存完好的元明清官署建筑群，历史价值极高。",
        recommend: 9
    },
    {
        name: "永济市尧王台景区",
        type: "4A级景区",
        address: "山西省运城市永济市",
        lng: 110.430917,
        lat: 34.872614,
        description: "相传尧王巡狩之地，历史文化内涵深厚。",
        recommend: 7
    },
    {
        name: "阳高县大泉山生态旅游区",
        type: "4A级景区",
        address: "山西省大同市阳高县",
        lng: 113.742618,
        lat: 40.382741,
        description: "以山地生态与休闲度假为特色的自然景区。",
        recommend: 7
    },
    {
        name: "离石区白马仙洞景区",
        type: "4A级景区",
        address: "山西省吕梁市离石区",
        lng: 111.153427,
        lat: 37.548926,
        description: "喀斯特溶洞景观与民间神话传说相结合的景区。",
        recommend: 7
    },
    {
        name: "兴县黑茶山·四八纪念地景区",
        type: "4A级景区",
        address: "山西省吕梁市兴县",
        lng: 111.216835,
        lat: 38.285417,
        description: "纪念晋绥革命烈士的重要红色教育基地。",
        recommend: 8
    },
    {
        name: "榆次区潇河莲花湾景区",
        type: "4A级景区",
        address: "山西省晋中市榆次区",
        lng: 112.788417,
        lat: 37.746821,
        description: "以水景、花海和城市休闲为特色的滨河景区。",
        recommend: 7
    },
    {
        name: "平定县红岩岭风景区",
        type: "4A级景区",
        address: "山西省阳泉市平定县",
        lng: 113.612947,
        lat: 37.785418,
        description: "以丹霞岩壁和红色文化遗迹著称的山岳景区。",
        recommend: 8
    },
    {
        name: "武乡县鲁艺下北漳旧址景区",
        type: "4A级景区",
        address: "山西省长治市武乡县",
        lng: 112.793614,
        lat: 36.845271,
        description: "鲁迅艺术学院在太行山区的重要旧址，红色文化教育基地。",
        recommend: 8
    },
    {
        name: "沁源县宝灵山风景区",
        type: "4A级景区",
        address: "山西省长治市沁源县",
        lng: 112.337418,
        lat: 36.548274,
        description: "以森林、峡谷和道教文化遗存著称的生态景区。",
        recommend: 7
    },
    {
        name: "高平市良户景区",
        type: "4A级景区",
        address: "山西省晋城市高平市",
        lng: 112.990418,
        lat: 35.768214,
        description: "保存完整的明清古村落，传统民居与古建集中。",
        recommend: 8
    },
    {
        name: "安泽县小李村太岳行署旧址景区",
        type: "4A级景区",
        address: "山西省临汾市安泽县",
        lng: 112.215842,
        lat: 36.143274,
        description: "太岳革命根据地行政机构旧址，红色旅游重要节点。",
        recommend: 8
    },
    {
        name: "盐湖区河东池盐文化博览园",
        type: "4A级景区",
        address: "山西省运城市盐湖区",
        lng: 110.987418,
        lat: 35.027842,
        description: "集中展示河东盐业历史与池盐文化的主题园区。",
        recommend: 8
    },
    {
        name: "稷山县板枣公园",
        type: "4A级景区",
        address: "山西省运城市稷山县",
        lng: 110.974271,
        lat: 35.600418,
        description: "以稷山板枣文化和休闲游憩为主题的城市公园。",
        recommend: 7
    },
    {
        name: "绛县绛北大峡谷景区",
        type: "4A级景区",
        address: "山西省运城市绛县",
        lng: 111.575842,
        lat: 35.493274,
        description: "峡谷、瀑布、丹霞地貌交融的自然风景区。",
        recommend: 8
    },
    {
  name: "飞鹤智能产业园",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市香坊区",
  lng: 126.69921,
  lat: 45.73145,
  description: "集乳业文化展示、智能制造和工业旅游于一体的现代化产业园区。",
  recommend: 7
},
{
  name: "哈尔滨啤酒博物馆",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市南岗区",
  lng: 126.66887,
  lat: 45.75812,
  description: "展示哈尔滨啤酒百年发展历史的工业文化博物馆。",
  recommend: 8
},
{
  name: "黑龙江东北虎林园",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市松北区",
  lng: 126.56612,
  lat: 45.85234,
  description: "世界最大的东北虎人工繁育和野化训练基地。",
  recommend: 9
},
{
  name: "哈尔滨极地公园",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市松北区",
  lng: 126.50561,
  lat: 45.78219,
  description: "以极地动物展示和科普体验为主题的综合性公园。",
  recommend: 9
},
{
  name: "龙塔景区",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市南岗区",
  lng: 126.69532,
  lat: 45.73598,
  description: "哈尔滨地标性建筑，可俯瞰城市全景。",
  recommend: 8
},
{
  name: "鸳鸯峰景区",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市尚志市",
  lng: 127.94462,
  lat: 45.21548,
  description: "以奇峰怪石和森林景观著称的自然生态景区。",
  recommend: 7
},
{
  name: "伏尔加庄园",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市香坊区",
  lng: 127.01821,
  lat: 45.63724,
  description: "以俄罗斯建筑与文化为主题的欧式风情旅游庄园。",
  recommend: 9
},
{
  name: "黑龙江省科技馆",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市松北区",
  lng: 126.53541,
  lat: 45.81072,
  description: "集科技展示、互动体验和科普教育于一体的现代科技馆。",
  recommend: 8
},
{
  name: "大顶子山温泉度假村",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市呼兰区",
  lng: 126.75834,
  lat: 45.96521,
  description: "集温泉养生、休闲度假于一体的综合型度假区。",
  recommend: 8
},
{
  name: "哈尔滨中央大街",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市道里区",
  lng: 126.61789,
  lat: 45.77643,
  description: "中国最具代表性的欧式建筑风情步行街。",
  recommend: 10
},
{
  name: "亚布力滑雪旅游度假区",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市尚志市",
  lng: 128.45126,
  lat: 44.79321,
  description: "中国著名的滑雪和冰雪运动度假胜地。",
  recommend: 10
},
{
  name: "波塞冬旅游度假区",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市呼兰区",
  lng: 126.74218,
  lat: 45.98547,
  description: "以海洋文化为主题的大型水上娱乐度假区。",
  recommend: 9
},
{
  name: "哈尔滨融创乐园",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市松北区",
  lng: 126.48732,
  lat: 45.79621,
  description: "集大型游乐设施和主题娱乐于一体的综合乐园。",
  recommend: 8
},
{
  name: "哈尔滨北方森林动物园",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市阿城区",
  lng: 126.91842,
  lat: 45.39472,
  description: "以森林生态放养方式展示野生动物的动物园。",
  recommend: 8
},
{
  name: "金龙山国际旅游度假区",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市阿城区",
  lng: 126.93321,
  lat: 45.42761,
  description: "集森林休闲、户外运动和度假体验于一体。",
  recommend: 8
},
{
  name: "香炉山国家森林公园",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市宾县",
  lng: 127.24891,
  lat: 45.69218,
  description: "融合奇峰林海与佛教文化的国家森林公园。",
  recommend: 8
},
{
  name: "凤凰山国家森林公园",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市五常市",
  lng: 127.85632,
  lat: 44.07125,
  description: "以峡谷、瀑布和高山森林景观著称。",
  recommend: 9
},
{
  name: "侵华日军第七三一部队旧址景区",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市平房区",
  lng: 126.64537,
  lat: 45.59421,
  description: "重要的爱国主义教育和历史警示基地。",
  recommend: 10
},
{
  name: "松峰山旅游度假区",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市阿城区",
  lng: 126.99972,
  lat: 45.19831,
  description: "以道教文化和山岳风光闻名的旅游度假区。",
  recommend: 8
},
{
  name: "枫叶小镇温泉度假村",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市松北区",
  lng: 126.52218,
  lat: 45.83572,
  description: "以温泉养生和休闲度假为核心的旅游小镇。",
  recommend: 8
},
{
  name: "鸡冠山景区",
  type: "4A级景区",
  address: "黑龙江省哈尔滨市延寿县",
  lng: 128.20341,
  lat: 45.42218,
  description: "以奇峰怪石和森林生态为特色的自然风景区。",
  recommend: 7
},



/* ================= 齐齐哈尔市 ================= */
{
  name: "明月岛风景区",
  type: "4A级景区",
  address: "黑龙江省齐齐哈尔市建华区",
  lng: 123.91721,
  lat: 47.35312,
  description: "集湿地生态、休闲娱乐和自然观光于一体的城市景区。",
  recommend: 7
},
{
  name: "鹤城欢乐世界景区",
  type: "4A级景区",
  address: "黑龙江省齐齐哈尔市建华区",
  lng: 123.94382,
  lat: 47.36041,
  description: "以游乐设施和亲子娱乐为主题的综合性乐园。",
  recommend: 7
},
{
  name: "龙沙公园",
  type: "4A级景区",
  address: "黑龙江省齐齐哈尔市龙沙区",
  lng: 123.95734,
  lat: 47.34256,
  description: "齐齐哈尔市历史悠久的综合性城市公园。",
  recommend: 7
},
{
  name: "中国一重工业旅游区",
  type: "4A级景区",
  address: "黑龙江省齐齐哈尔市富拉尔基区",
  lng: 123.61847,
  lat: 47.20834,
  description: "展示中国重型装备制造发展历程的工业旅游景区。",
  recommend: 7
},
{
  name: "梅里斯达斡尔族区雅尔塞镇哈拉新村景区",
  type: "4A级景区",
  address: "黑龙江省齐齐哈尔市梅里斯达斡尔族区",
  lng: 123.75341,
  lat: 47.30782,
  description: "展示达斡尔族民俗文化与乡村风貌的民族特色景区。",
  recommend: 7
},
{
  name: "昂昂溪遗址博物馆",
  type: "4A级景区",
  address: "黑龙江省齐齐哈尔市昂昂溪区",
  lng: 123.82291,
  lat: 47.15462,
  description: "反映史前人类文化的重要考古遗址博物馆。",
  recommend: 7
},
{
  name: "龙腾生态温泉度假庄园",
  type: "4A级景区",
  address: "黑龙江省齐齐哈尔市梅里斯达斡尔族区",
  lng: 123.68921,
  lat: 47.28214,
  description: "以生态温泉养生和休闲度假为特色。",
  recommend: 8
},
{
  name: "水师森林温泉度假区",
  type: "4A级景区",
  address: "黑龙江省齐齐哈尔市富裕县",
  lng: 124.01983,
  lat: 47.81452,
  description: "融合森林景观与温泉养生的度假型景区。",
  recommend: 8
},

/* ================= 牡丹江市 ================= */
{
  name: "太平沟原始林风景区",
  type: "4A级景区",
  address: "黑龙江省牡丹江市东宁市",
  lng: 131.15672,
  lat: 44.16238,
  description: "以原始森林和峡谷溪流景观著称。",
  recommend: 8
},
{
  name: "横道河子东北虎林园",
  type: "4A级景区",
  address: "黑龙江省牡丹江市海林市",
  lng: 127.23148,
  lat: 44.59872,
  description: "集东北虎保护、观赏和科普于一体。",
  recommend: 8
},
{
  name: "火山口国家森林公园",
  type: "4A级景区",
  address: "黑龙江省牡丹江市宁安市",
  lng: 127.99843,
  lat: 44.15238,
  description: "以火山地貌和森林生态景观为特色。",
  recommend: 8
},
{
  name: "柴河小九寨",
  type: "4A级景区",
  address: "黑龙江省牡丹江市海林市",
  lng: 127.40752,
  lat: 44.70983,
  description: "以湖泊、瀑布和彩林景观闻名。",
  recommend: 8
},
{
  name: "三道关国家森林公园",
  type: "4A级景区",
  address: "黑龙江省牡丹江市宁安市",
  lng: 127.77342,
  lat: 44.06251,
  description: "集森林峡谷、瀑布群于一体的国家森林公园。",
  recommend: 8
},
{
  name: "东宁要塞遗址景区",
  type: "4A级景区",
  address: "黑龙江省牡丹江市东宁市",
  lng: 131.12491,
  lat: 44.08632,
  description: "重要的抗战历史遗址和红色旅游景区。",
  recommend: 9
},
{
  name: "威虎山影视城",
  type: "4A级景区",
  address: "黑龙江省牡丹江市海林市",
  lng: 127.39982,
  lat: 44.58943,
  description: "以《林海雪原》为主题的影视文化景区。",
  recommend: 8
},
{
  name: "雪乡旅游区",
  type: "4A级景区",
  address: "黑龙江省牡丹江市海林市",
  lng: 127.48452,
  lat: 44.73921,
  description: "以梦幻雪景和东北民俗文化闻名全国。",
  recommend: 10
},
{
  name: "横道河子俄罗斯风情小镇",
  type: "4A级景区",
  address: "黑龙江省牡丹江市海林市",
  lng: 127.21056,
  lat: 44.58973,
  description: "保存完好的俄式建筑群和铁路文化小镇。",
  recommend: 8
},
{
  name: "牡丹集团智慧科技馆",
  type: "4A级景区",
  address: "黑龙江省牡丹江市东安区",
  lng: 129.61123,
  lat: 44.58241,
  description: "展示现代工业科技与智能制造成果。",
  recommend: 7
},
{
  name: "中兴朝鲜民族文化风情园景区",
  type: "4A级景区",
  address: "黑龙江省牡丹江市宁安市",
  lng: 127.81234,
  lat: 44.11982,
  description: "集中展示朝鲜族民俗文化和生活风貌。",
  recommend: 7
},

/* ================= 佳木斯市 ================= */
{
  name: "桦川县星火稻乡旅游景区",
  type: "4A级景区",
  address: "黑龙江省佳木斯市桦川县",
  lng: 130.74782,
  lat: 47.02341,
  description: "以稻作文化和乡村旅游体验为特色。",
  recommend: 7
},
{
  name: "富锦国家湿地公园",
  type: "4A级景区",
  address: "黑龙江省佳木斯市富锦市",
  lng: 132.02461,
  lat: 47.25542,
  description: "重要的湿地生态系统和候鸟栖息地。",
  recommend: 8
},
{
  name: "黑瞎子岛旅游区",
  type: "4A级景区",
  address: "黑龙江省佳木斯市抚远市",
  lng: 134.29563,
  lat: 48.36542,
  description: "中国最早迎接日出的边境生态旅游区。",
  recommend: 9
},
{
  name: "敖其湾赫哲族旅游区",
  type: "4A级景区",
  address: "黑龙江省佳木斯市郊区",
  lng: 130.40982,
  lat: 46.82273,
  description: "展示赫哲族渔猎文化和民族风情。",
  recommend: 7
},
{
  name: "七星旅游名镇",
  type: "4A级景区",
  address: "黑龙江省佳木斯市桦南县",
  lng: 130.58641,
  lat: 46.37218,
  description: "融合生态休闲与特色小镇文化的旅游名镇。",
  recommend: 7
},
{
  name: "万亩水稻公园",
  type: "4A级景区",
  address: "黑龙江省佳木斯市富锦市",
  lng: 131.99821,
  lat: 47.18963,
  description: "以现代农业观光和稻田景观为特色。",
  recommend: 7
},
{
  name: "三江国家湿地公园",
  type: "4A级景区",
  address: "黑龙江省佳木斯市同江市",
  lng: 132.51021,
  lat: 47.64873,
  description: "中国重要的湿地生态和自然保护区。",
  recommend: 8
},

/* ================= 大庆市 ================= */
{
  name: "连环湖温泉景区",
  type: "4A级景区",
  address: "黑龙江省大庆市杜尔伯特蒙古族自治县",
  lng: 124.38972,
  lat: 46.96531,
  description: "集湖泊景观与温泉养生于一体。",
  recommend: 8
},
{
  name: "铁人王进喜纪念馆",
  type: "4A级景区",
  address: "黑龙江省大庆市让胡路区",
  lng: 124.87821,
  lat: 46.59134,
  description: "弘扬大庆精神和铁人精神的重要基地。",
  recommend: 9
},
{
  name: "鹤鸣湖湿地温泉景区",
  type: "4A级景区",
  address: "黑龙江省大庆市林甸县",
  lng: 124.91283,
  lat: 47.16942,
  description: "融合湿地生态与温泉度假的景区。",
  recommend: 8
},
{
  name: "林甸北方温泉欢乐谷",
  type: "4A级景区",
  address: "黑龙江省大庆市林甸县",
  lng: 124.88721,
  lat: 47.15862,
  description: "以温泉娱乐和休闲体验为核心。",
  recommend: 8
},
{
  name: "阿木塔蒙古风情岛旅游景区",
  type: "4A级景区",
  address: "黑龙江省大庆市杜尔伯特蒙古族自治县",
  lng: 124.51234,
  lat: 46.87341,
  description: "展示蒙古族民俗文化和草原风情。",
  recommend: 7
},
{
  name: "嘎日迪景区",
  type: "4A级景区",
  address: "黑龙江省大庆市杜尔伯特蒙古族自治县",
  lng: 124.46328,
  lat: 46.84219,
  description: "以草原湿地和民族文化为特色。",
  recommend: 7
},
{
  name: "大庆赛车小镇",
  type: "4A级景区",
  address: "黑龙江省大庆市萨尔图区",
  lng: 125.06241,
  lat: 46.63782,
  description: "以赛车运动和汽车文化为主题的小镇。",
  recommend: 7
},
{
  name: "北国温泉养生休闲广场",
  type: "4A级景区",
  address: "黑龙江省大庆市让胡路区",
  lng: 124.90341,
  lat: 46.63214,
  description: "集温泉养生、休闲娱乐于一体。",
  recommend: 8
},
{
  name: "大庆石油馆",
  type: "4A级景区",
  address: "黑龙江省大庆市萨尔图区",
  lng: 125.02154,
  lat: 46.59321,
  description: "系统展示中国石油工业发展史。",
  recommend: 8
},
{
  name: "大庆市博物馆",
  type: "4A级景区",
  address: "黑龙江省大庆市萨尔图区",
  lng: 125.01872,
  lat: 46.59983,
  description: "综合展示大庆历史、文化与自然资源。",
  recommend: 7
},

/* ================= 鸡西市 ================= */
{
  name: "密山铁西森林公园景区",
  type: "4A级景区",
  address: "黑龙江省鸡西市密山市",
  lng: 131.87521,
  lat: 45.56234,
  description: "以森林生态和休闲观光为主题。",
  recommend: 7
},
{
  name: "麒麟山风景区",
  type: "4A级景区",
  address: "黑龙江省鸡西市鸡东县",
  lng: 131.09734,
  lat: 45.26741,
  description: "融合山岳景观与宗教文化的风景区。",
  recommend: 7
},
{
  name: "兴凯湖新开流景区",
  type: "4A级景区",
  address: "黑龙江省鸡西市密山市",
  lng: 132.18127,
  lat: 45.25738,
  description: "兴凯湖重要湖湾湿地旅游区。",
  recommend: 8
},
{
  name: "农垦当壁镇兴凯湖旅游度假区",
  type: "4A级景区",
  address: "黑龙江省鸡西市密山市",
  lng: 132.23641,
  lat: 45.30218,
  description: "集湖泊度假、湿地观光于一体。",
  recommend: 8
},
{
  name: "北大荒书法长廊文化中心",
  type: "4A级景区",
  address: "黑龙江省鸡西市鸡冠区",
  lng: 130.97482,
  lat: 45.29614,
  description: "展示北大荒文化与书法艺术的文化景区。",
  recommend: 7
},



/* ================= 双鸭山市 ================= */
{
  name: "东方红南岔湖景区",
  type: "4A级景区",
  address: "黑龙江省双鸭山市宝清县",
  lng: 132.18342,
  lat: 46.32971,
  description: "以湖泊湿地景观和生态休闲为特色的旅游景区。",
  recommend: 7
},
{
  name: "安邦河国家湿地公园",
  type: "4A级景区",
  address: "黑龙江省双鸭山市宝清县",
  lng: 132.18972,
  lat: 46.42156,
  description: "以河流湿地生态保护和自然观光为主题。",
  recommend: 7
},
{
  name: "七星河国家级自然保护区",
  type: "4A级景区",
  address: "黑龙江省双鸭山市宝清县",
  lng: 132.34128,
  lat: 46.51294,
  description: "我国重要的湿地自然保护区和候鸟栖息地。",
  recommend: 8
},
{
  name: "青山国家森林公园",
  type: "4A级景区",
  address: "黑龙江省双鸭山市集贤县",
  lng: 131.19263,
  lat: 46.71248,
  description: "森林覆盖率极高的生态型国家森林公园。",
  recommend: 7
},
{
  name: "圣洁摇篮山旅游度假区",
  type: "4A级景区",
  address: "黑龙江省双鸭山市友谊县",
  lng: 131.90142,
  lat: 46.77583,
  description: "集自然山水、宗教文化与休闲度假于一体。",
  recommend: 7
},
{
  name: "四排赫哲风情旅游景区",
  type: "4A级景区",
  address: "黑龙江省双鸭山市饶河县",
  lng: 133.50621,
  lat: 46.79934,
  description: "集中展示赫哲族渔猎文化和民族风情。",
  recommend: 8
},

/* ================= 伊春市 ================= */
{
  name: "上甘岭溪水森林旅游区",
  type: "4A级景区",
  address: "黑龙江省伊春市上甘岭区",
  lng: 129.02241,
  lat: 47.97382,
  description: "以原始森林和溪水景观为特色的生态旅游区。",
  recommend: 8
},
{
  name: "伊春市锦绣山水公园",
  type: "4A级景区",
  address: "黑龙江省伊春市伊美区",
  lng: 128.90673,
  lat: 47.72741,
  description: "集城市休闲、山水景观于一体的综合公园。",
  recommend: 7
},
{
  name: "西岭森林生态旅游度假区",
  type: "4A级景区",
  address: "黑龙江省伊春市乌翠区",
  lng: 128.64382,
  lat: 47.40521,
  description: "以森林康养、休闲度假为主题。",
  recommend: 8
},
{
  name: "五营红松林海景区",
  type: "4A级景区",
  address: "黑龙江省伊春市五营区",
  lng: 129.24361,
  lat: 48.11123,
  description: "世界最大的原始红松林保护区。",
  recommend: 9
},
{
  name: "嘉荫恐龙国家地质公园",
  type: "4A级景区",
  address: "黑龙江省伊春市嘉荫县",
  lng: 130.39872,
  lat: 48.88654,
  description: "以恐龙化石遗址闻名的国家级地质公园。",
  recommend: 8
},
{
  name: "茅兰沟森林旅游景区",
  type: "4A级景区",
  address: "黑龙江省伊春市南岔县",
  lng: 129.23451,
  lat: 47.13842,
  description: "以峡谷、瀑布和森林景观著称。",
  recommend: 8
},
{
  name: "九峰山养心谷景区",
  type: "4A级景区",
  address: "黑龙江省伊春市金林区",
  lng: 128.75421,
  lat: 47.56234,
  description: "以森林康养和养心度假为核心特色。",
  recommend: 7
},
{
  name: "新青国家湿地公园",
  type: "4A级景区",
  address: "黑龙江省伊春市新青区",
  lng: 129.51483,
  lat: 48.28751,
  description: "寒温带湿地生态系统和自然观光景区。",
  recommend: 8
},
{
  name: "透龙山景区",
  type: "4A级景区",
  address: "黑龙江省伊春市汤旺县",
  lng: 129.43872,
  lat: 48.35421,
  description: "以山岳森林和奇石景观为特色。",
  recommend: 7
},

/* ================= 七台河市 ================= */
{
  name: "石龙山国家森林公园",
  type: "4A级景区",
  address: "黑龙江省七台河市新兴区",
  lng: 130.91345,
  lat: 45.79236,
  description: "以奇石景观和森林生态为特色。",
  recommend: 7
},
{
  name: "西大圈森林公园",
  type: "4A级景区",
  address: "黑龙江省七台河市桃山区",
  lng: 130.99721,
  lat: 45.76734,
  description: "城市周边重要的森林休闲公园。",
  recommend: 7
},
{
  name: "乌斯浑河国家森林公园",
  type: "4A级景区",
  address: "黑龙江省七台河市勃利县",
  lng: 130.52184,
  lat: 45.70952,
  description: "以河谷森林和自然生态景观为特色。",
  recommend: 7
},

/* ================= 鹤岗市 ================= */
{
  name: "松鹤西湖旅游景区",
  type: "4A级景区",
  address: "黑龙江省鹤岗市兴安区",
  lng: 130.24621,
  lat: 47.36642,
  description: "集湖泊景观、休闲娱乐于一体。",
  recommend: 7
},
{
  name: "宝泉岭现代农业生态园景区",
  type: "4A级景区",
  address: "黑龙江省鹤岗市萝北县",
  lng: 130.83842,
  lat: 47.49821,
  description: "展示现代农业科技和生态农业成果。",
  recommend: 7
},
{
  name: "萝北名山景区",
  type: "4A级景区",
  address: "黑龙江省鹤岗市萝北县",
  lng: 130.83127,
  lat: 47.57841,
  description: "集森林景观和宗教文化于一体。",
  recommend: 7
},
{
  name: "月牙湖中国北方民族园",
  type: "4A级景区",
  address: "黑龙江省鹤岗市向阳区",
  lng: 130.27483,
  lat: 47.33251,
  description: "集中展示北方少数民族文化风情。",
  recommend: 7
},
{
  name: "黑龙江鹤岗国家森林公园",
  type: "4A级景区",
  address: "黑龙江省鹤岗市东山区",
  lng: 130.31274,
  lat: 47.33792,
  description: "以森林生态和自然休闲为核心。",
  recommend: 7
},
{
  name: "萝北太平沟景区",
  type: "4A级景区",
  address: "黑龙江省鹤岗市萝北县",
  lng: 130.90421,
  lat: 47.64238,
  description: "以峡谷森林和溪流景观著称。",
  recommend: 7
},

/* ================= 黑河市 ================= */
{
  name: "中俄民族风情园",
  type: "4A级景区",
  address: "黑龙江省黑河市爱辉区",
  lng: 127.45182,
  lat: 50.23921,
  description: "展示中俄民族文化交流与风情特色。",
  recommend: 8
},
{
  name: "瑷珲历史陈列馆",
  type: "4A级景区",
  address: "黑龙江省黑河市爱辉区",
  lng: 127.47382,
  lat: 50.25143,
  description: "展示中俄历史和边疆文化的重要展馆。",
  recommend: 9
},
{
  name: "新生鄂伦春民俗旅游景区",
  type: "4A级景区",
  address: "黑龙江省黑河市逊克县",
  lng: 128.41983,
  lat: 49.57421,
  description: "集中展示鄂伦春族传统文化和生活方式。",
  recommend: 7
},
{
  name: "孙吴胜山要塞旅游景区",
  type: "4A级景区",
  address: "黑龙江省黑河市孙吴县",
  lng: 127.35124,
  lat: 49.42782,
  description: "重要的军事历史遗址旅游区。",
  recommend: 8
},
{
  name: "庆华军工遗址旅游区",
  type: "4A级景区",
  address: "黑龙江省黑河市嫩江市",
  lng: 125.28741,
  lat: 49.18263,
  description: "展示我国军工发展历史的遗址景区。",
  recommend: 7
},
{
  name: "五大连池市朝阳山抗联红色景区",
  type: "4A级景区",
  address: "黑龙江省黑河市五大连池市",
  lng: 126.19783,
  lat: 48.52421,
  description: "以抗联红色文化和革命历史为主题。",
  recommend: 8
},

/* ================= 绥化市 ================= */
{
  name: "林枫故居纪念馆",
  type: "4A级景区",
  address: "黑龙江省绥化市望奎县",
  lng: 126.50341,
  lat: 46.83472,
  description: "重要红色文化教育基地。",
  recommend: 8
},
{
  name: "绥棱林业局生态文化旅游景区",
  type: "4A级景区",
  address: "黑龙江省绥化市绥棱县",
  lng: 127.10842,
  lat: 47.24583,
  description: "融合森林生态和林业文化展示。",
  recommend: 7
},
{
  name: "肇东市伊利乳业工业旅游景区",
  type: "4A级景区",
  address: "黑龙江省绥化市肇东市",
  lng: 125.96421,
  lat: 46.06183,
  description: "展示现代乳业生产流程的工业旅游景区。",
  recommend: 7
},

/* ================= 大兴安岭地区 ================= */
{
  name: "呼玛县博物馆",
  type: "4A级景区",
  address: "黑龙江省大兴安岭地区呼玛县",
  lng: 126.65214,
  lat: 51.72548,
  description: "集中展示大兴安岭历史文化和民族风情。",
  recommend: 7
},
{
  name: "百泉谷生态旅游景区",
  type: "4A级景区",
  address: "黑龙江省大兴安岭地区呼中区",
  lng: 123.89124,
  lat: 52.05483,
  description: "以寒温带森林和泉群景观为特色。",
  recommend: 8
},
{
  name: "大兴安岭寒温带植物园",
  type: "4A级景区",
  address: "黑龙江省大兴安岭地区加格达奇区",
  lng: 124.11782,
  lat: 50.42531,
  description: "集中展示寒温带植物资源和科研成果。",
  recommend: 7
},
{
  name: "鹿鼎山景区",
  type: "4A级景区",
  address: "黑龙江省大兴安岭地区塔河县",
  lng: 124.73842,
  lat: 52.33321,
  description: "以森林山岳和自然景观为特色。",
  recommend: 7
},
{
  name: "龙江第一湾景区",
  type: "4A级景区",
  address: "黑龙江省大兴安岭地区漠河市",
  lng: 122.35678,
  lat: 53.52341,
  description: "黑龙江源头第一大回湾，风光壮丽。",
  recommend: 9
},
{
  name: "二十二驿站旅游风景区",
  type: "4A级景区",
  address: "黑龙江省大兴安岭地区漠河市",
  lng: 122.58941,
  lat: 52.98172,
  description: "展示驿站文化和边疆历史的旅游景区。",
  recommend: 7
},



{
  name: "上海博物馆",
  type: "5A级景区",
  address: "上海市黄浦区",
  lng: 121.49021,
  lat: 31.23043,
  description: "以中国古代艺术为主的综合性博物馆。",
  recommend: 10
},
{
  name: "上海佘山国家森林公园",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.18342,
  lat: 31.09421,
  description: "集森林生态、宗教文化和天文科普于一体。",
  recommend: 8
},
{
  name: "上海豫园",
  type: "4A级景区",
  address: "上海市黄浦区",
  lng: 121.49283,
  lat: 31.22712,
  description: "江南古典园林代表，始建于明代。",
  recommend: 9
},
{
  name: "金茂大厦88层观光厅",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.50542,
  lat: 31.23581,
  description: "可俯瞰上海城市天际线的高空观光厅。",
  recommend: 9
},
{
  name: "上海城市规划展示馆",
  type: "4A级景区",
  address: "上海市黄浦区",
  lng: 121.49083,
  lat: 31.23261,
  description: "系统展示上海城市发展与规划蓝图。",
  recommend: 8
},
{
  name: "东平国家森林公园",
  type: "4A级景区",
  address: "上海市崇明区",
  lng: 121.60341,
  lat: 31.70521,
  description: "华东地区大型平原人工森林公园。",
  recommend: 8
},
{
  name: "上海动物园",
  type: "4A级景区",
  address: "上海市长宁区",
  lng: 121.36382,
  lat: 31.19472,
  description: "以野生动物保护和科普教育为主题。",
  recommend: 8
},
{
  name: "上海世纪公园",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.55321,
  lat: 31.22183,
  description: "上海市区最大的生态型城市公园。",
  recommend: 9
},
{
  name: "上海大观园",
  type: "4A级景区",
  address: "上海市青浦区",
  lng: 120.99421,
  lat: 31.15283,
  description: "以《红楼梦》文化为主题的园林景区。",
  recommend: 8
},
{
  name: "上海共青森林公园",
  type: "4A级景区",
  address: "上海市杨浦区",
  lng: 121.54782,
  lat: 31.33241,
  description: "以森林休闲和户外活动为特色。",
  recommend: 8
},
{
  name: "朱家角古镇",
  type: "4A级景区",
  address: "上海市青浦区",
  lng: 121.05421,
  lat: 31.11483,
  description: "上海保存最完整的江南水乡古镇之一。",
  recommend: 9
},
{
  name: "上海古猗园",
  type: "4A级景区",
  address: "上海市嘉定区",
  lng: 121.24583,
  lat: 31.38142,
  description: "以古典园林艺术著称的历史名园。",
  recommend: 8
},
{
  name: "上海方塔园",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.22421,
  lat: 31.00482,
  description: "以古塔为核心的历史文化园林。",
  recommend: 7
},
{
  name: "东方绿舟",
  type: "4A级景区",
  address: "上海市青浦区",
  lng: 120.99382,
  lat: 31.09341,
  description: "集国防教育、拓展训练与休闲旅游于一体。",
  recommend: 8
},
{
  name: "枫泾古镇",
  type: "4A级景区",
  address: "上海市金山区",
  lng: 121.01142,
  lat: 30.89573,
  description: "典型江南水乡古镇，历史文化底蕴深厚。",
  recommend: 8
},
{
  name: "锦江乐园",
  type: "4A级景区",
  address: "上海市闵行区",
  lng: 121.41482,
  lat: 31.14241,
  description: "上海老牌大型游乐园。",
  recommend: 7
},
{
  name: "金山城市沙滩景区",
  type: "4A级景区",
  address: "上海市金山区",
  lng: 121.36641,
  lat: 30.72582,
  description: "集滨海休闲、沙滩娱乐于一体。",
  recommend: 8
},
{
  name: "碧海金沙景区",
  type: "4A级景区",
  address: "上海市奉贤区",
  lng: 121.76142,
  lat: 30.83721,
  description: "上海著名人工海滨浴场。",
  recommend: 8
},
{
  name: "上海海洋水族馆",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.50241,
  lat: 31.23983,
  description: "世界知名的水生生物展示馆。",
  recommend: 9
},
{
  name: "中国航海博物馆",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.90641,
  lat: 30.87483,
  description: "我国首座国家级航海主题博物馆。",
  recommend: 8
},
{
  name: "上海欢乐谷",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.21483,
  lat: 31.09841,
  description: "大型主题游乐园，适合家庭和年轻游客。",
  recommend: 9
},
{
  name: "上海植物园",
  type: "4A级景区",
  address: "上海市徐汇区",
  lng: 121.44982,
  lat: 31.14521,
  description: "集植物科研、科普和休闲游览于一体。",
  recommend: 8
},
{
  name: "上海宋庆龄故居纪念馆",
  type: "4A级景区",
  address: "上海市徐汇区",
  lng: 121.44321,
  lat: 31.20842,
  description: "展示宋庆龄生平与历史贡献。",
  recommend: 8
},
{
  name: "上海顾村公园景区",
  type: "4A级景区",
  address: "上海市宝山区",
  lng: 121.40241,
  lat: 31.35021,
  description: "以樱花和生态休闲闻名。",
  recommend: 8
},
{
  name: "上海辰山植物园",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.18521,
  lat: 31.06641,
  description: "集植物展示、科研与景观游览于一体。",
  recommend: 9
},
{
  name: "上海炮台湾景区",
  type: "4A级景区",
  address: "上海市宝山区",
  lng: 121.51482,
  lat: 31.40021,
  description: "融合滨江景观与历史遗迹的城市公园。",
  recommend: 8
},
{
  name: "上海国际时尚中心",
  type: "4A级景区",
  address: "上海市杨浦区",
  lng: 121.53641,
  lat: 31.27483,
  description: "集工业遗产、时尚展示与休闲消费于一体。",
  recommend: 7
},
{
  name: "上海召稼楼景区",
  type: "4A级景区",
  address: "上海市闵行区",
  lng: 121.51521,
  lat: 31.01583,
  description: "保存完好的江南水乡古镇风貌。",
  recommend: 8
},


{
  name: "上海鲜花港",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.88642,
  lat: 30.93321,
  description: "以花卉展示、园艺景观和休闲游览为主题的大型花卉公园。",
  recommend: 8
},
{
  name: "上海月湖雕塑公园",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.21583,
  lat: 31.07342,
  description: "融合自然湖景与现代雕塑艺术的主题公园。",
  recommend: 8
},
{
  name: "上海嘉定州桥",
  type: "4A级景区",
  address: "上海市嘉定区",
  lng: 121.26041,
  lat: 31.37483,
  description: "以千年古桥和江南水乡历史文化为特色。",
  recommend: 7
},
{
  name: "上海都市菜园景区",
  type: "4A级景区",
  address: "上海市奉贤区",
  lng: 121.60783,
  lat: 30.92421,
  description: "集现代农业展示、科普教育与休闲体验于一体。",
  recommend: 7
},
{
  name: "上海长风公园·长风海洋世界景区",
  type: "4A级景区",
  address: "上海市普陀区",
  lng: 121.39121,
  lat: 31.23041,
  description: "集城市公园与海洋生物展示于一体的综合景区。",
  recommend: 8
},
{
  name: "上海海上花岛前卫村景区",
  type: "4A级景区",
  address: "上海市崇明区",
  lng: 121.53821,
  lat: 31.62183,
  description: "以乡村振兴示范、生态农业和田园风光为特色。",
  recommend: 7
},
{
  name: "上海海湾国家森林公园",
  type: "4A级景区",
  address: "上海市奉贤区",
  lng: 121.72041,
  lat: 30.82983,
  description: "上海南部大型滨海森林生态旅游区。",
  recommend: 8
},
{
  name: "上海南翔景区",
  type: "4A级景区",
  address: "上海市嘉定区",
  lng: 121.31742,
  lat: 31.29621,
  description: "以南翔古镇、古猗园和小笼文化闻名。",
  recommend: 8
},
{
  name: "上海徐家汇源景区",
  type: "4A级景区",
  address: "上海市徐汇区",
  lng: 121.43721,
  lat: 31.19483,
  description: "集中展示上海近代教育、宗教和城市起源文化。",
  recommend: 8
},
{
  name: "宝山国际民间艺术博览馆景区",
  type: "4A级景区",
  address: "上海市宝山区",
  lng: 121.40483,
  lat: 31.36642,
  description: "展示世界各国民间艺术与非遗文化。",
  recommend: 7
},
{
  name: "上海汽车博览公园",
  type: "4A级景区",
  address: "上海市嘉定区",
  lng: 121.18142,
  lat: 31.28983,
  description: "以汽车文化展示和生态景观为主题的城市公园。",
  recommend: 7
},
{
  name: "上海闻道园",
  type: "4A级景区",
  address: "上海市嘉定区",
  lng: 121.32783,
  lat: 31.40241,
  description: "融合儒释道文化与园林艺术的文化景区。",
  recommend: 7
},
{
  name: "上海江南三民文化村景区",
  type: "4A级景区",
  address: "上海市崇明区",
  lng: 121.41321,
  lat: 31.68483,
  description: "展示民俗、民居、民艺的江南乡村文化景区。",
  recommend: 7
},

{
  name: "上海国际时尚中心",
  type: "4A级景区",
  address: "上海市杨浦区",
  lng: 121.53641,
  lat: 31.27483,
  description: "由工业遗存改造而成的时尚文化与休闲消费综合体。",
  recommend: 7
},
{
  name: "上海召稼楼景区",
  type: "4A级景区",
  address: "上海市闵行区",
  lng: 121.51521,
  lat: 31.01583,
  description: "保存完好的江南水乡古镇，历史文化底蕴深厚。",
  recommend: 8
},
{
  name: "上海玻璃博物馆",
  type: "4A级景区",
  address: "上海市宝山区",
  lng: 121.43982,
  lat: 31.33121,
  description: "以玻璃艺术与工业文化展示为主题的特色博物馆。",
  recommend: 8
},
{
  name: "上海国际赛车场旅游景区",
  type: "4A级景区",
  address: "上海市嘉定区",
  lng: 121.22341,
  lat: 31.33872,
  description: "中国首条F1标准赛道，融合赛车文化与旅游体验。",
  recommend: 9
},
{
  name: "上海杜莎夫人蜡像馆",
  type: "4A级景区",
  address: "上海市黄浦区",
  lng: 121.49042,
  lat: 31.23921,
  description: "展示中外名人蜡像的互动式主题博物馆。",
  recommend: 8
},
{
  name: "陈云故里·练塘古镇景区",
  type: "4A级景区",
  address: "上海市青浦区",
  lng: 121.01542,
  lat: 31.02183,
  description: "集红色文化纪念与江南水乡古镇风貌于一体。",
  recommend: 8
},
{
  name: "上海市龙华烈士陵园",
  type: "4A级景区",
  address: "上海市徐汇区",
  lng: 121.44921,
  lat: 31.17483,
  description: "重要的爱国主义教育基地和红色文化纪念地。",
  recommend: 9
},
{
  name: "上海影视乐园",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.21342,
  lat: 31.04621,
  description: "以影视拍摄场景为特色的主题旅游景区。",
  recommend: 8
},
{
  name: "上海薰衣草公园",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.88983,
  lat: 30.92341,
  description: "以薰衣草花海和田园景观为主题的休闲公园。",
  recommend: 7
},
{
  name: "上海联怡枇杷乐园",
  type: "4A级景区",
  address: "上海市青浦区",
  lng: 121.12683,
  lat: 31.18921,
  description: "以枇杷采摘和生态农业体验为特色。",
  recommend: 7
},
{
  name: "上海金山嘴渔村",
  type: "4A级景区",
  address: "上海市金山区",
  lng: 121.56541,
  lat: 30.70483,
  description: "上海最后一个保留原生态风貌的渔村。",
  recommend: 8
},
{
  name: "上海北外滩国客中心景区",
  type: "4A级景区",
  address: "上海市虹口区",
  lng: 121.50382,
  lat: 31.24621,
  description: "集滨江观光、邮轮文化和城市景观于一体。",
  recommend: 8
},
{
  name: "上海东滩湿地公园",
  type: "4A级景区",
  address: "上海市崇明区",
  lng: 121.88921,
  lat: 31.52083,
  description: "国际重要湿地，候鸟迁徙的重要栖息地。",
  recommend: 9
},
{
  name: "上海之巅观光厅",
  type: "5A级景区",
  address: "上海市浦东新区",
  lng: 121.50583,
  lat: 31.23341,
  description: "位于上海中心大厦顶部，可俯瞰全城景观。",
  recommend: 10
},
{
  name: "上海长兴岛郊野公园",
  type: "4A级景区",
  address: "上海市崇明区",
  lng: 121.69142,
  lat: 31.38421,
  description: "以生态湿地、郊野休闲和户外活动为特色。",
  recommend: 8
},
{
  name: "比斯特上海购物村景区",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.80241,
  lat: 31.17183,
  description: "集国际品牌购物与休闲体验于一体的开放式购物村。",
  recommend: 8
},
{
  name: "上海浦江郊野公园景区",
  type: "4A级景区",
  address: "上海市闵行区",
  lng: 121.49983,
  lat: 31.05921,
  description: "上海市区大型郊野公园，适合亲子与户外休闲。",
  recommend: 8
},

{
  name: "上海张马景区",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.65742,
  lat: 31.21483,
  description: "融合历史文化与生态休闲的城市近郊旅游景区。",
  recommend: 7
},
{
  name: "上海海昌海洋公园",
  type: "5A级景区",
  address: "上海市浦东新区",
  lng: 121.95041,
  lat: 30.90783,
  description: "以海洋文化为主题的大型国际级海洋主题公园。",
  recommend: 10
},
{
  name: "上海闵行文化公园",
  type: "4A级景区",
  address: "上海市闵行区",
  lng: 121.38642,
  lat: 31.10921,
  description: "集文化展示、生态休闲和市民活动于一体的城市公园。",
  recommend: 7
},
{
  name: "上海七宝古镇",
  type: "4A级景区",
  address: "上海市闵行区",
  lng: 121.35483,
  lat: 31.15521,
  description: "历史悠久的江南水乡古镇，美食文化丰富。",
  recommend: 9
},
{
  name: "上海广富林文化公园",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.24083,
  lat: 31.04521,
  description: "以上海之根文化为主题的历史文化公园。",
  recommend: 8
},
{
  name: "上海醉白池公园",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.23342,
  lat: 31.00683,
  description: "著名江南古典园林，历史文化底蕴深厚。",
  recommend: 8
},
{
  name: "上海高家庄生态园",
  type: "4A级景区",
  address: "上海市青浦区",
  lng: 121.03921,
  lat: 31.13842,
  description: "集生态农业、休闲观光和亲子体验于一体。",
  recommend: 7
},
{
  name: "上海廊下郊野公园景区",
  type: "4A级景区",
  address: "上海市金山区",
  lng: 121.14783,
  lat: 30.87321,
  description: "以上海乡村田园风光和农耕文化为特色。",
  recommend: 8
},
{
  name: "上海蓝精灵乐园",
  type: "4A级景区",
  address: "上海市浦东新区",
  lng: 121.82841,
  lat: 31.12683,
  description: "以蓝精灵IP为主题的亲子互动乐园。",
  recommend: 8
},
{
  name: "上海犹太难民纪念馆",
  type: "4A级景区",
  address: "上海市虹口区",
  lng: 121.50321,
  lat: 31.26183,
  description: "纪念二战期间犹太难民在上海的历史。",
  recommend: 9
},
{
  name: "上海笔墨宫坊景区",
  type: "4A级景区",
  address: "上海市嘉定区",
  lng: 121.25683,
  lat: 31.38621,
  description: "以书画艺术和传统文化体验为主题。",
  recommend: 7
},
{
  name: "上海花开海上生态园",
  type: "4A级景区",
  address: "上海市奉贤区",
  lng: 121.69241,
  lat: 30.89321,
  description: "以花海景观和生态农业为特色的旅游园区。",
  recommend: 8
},
{
  name: "上海云堡未来市艺术文创景区",
  type: "4A级景区",
  address: "上海市松江区",
  lng: 121.26741,
  lat: 31.03821,
  description: "融合未来科技、艺术文创与沉浸式体验。",
  recommend: 7
},
{
  name: "上海金泽古镇景区",
  type: "4A级景区",
  address: "上海市青浦区",
  lng: 121.06383,
  lat: 31.04421,
  description: "以古桥群和水乡风貌著称的历史古镇。",
  recommend: 8
},
{
  name: "上海市金山区漕泾水窠景区",
  type: "4A级景区",
  address: "上海市金山区",
  lng: 121.42083,
  lat: 30.80821,
  description: "以湿地水系和乡村生态景观为特色。",
  recommend: 7
},

{
  name: "南京博物院",
  type: "5A级景区",
  address: "江苏省南京市玄武区",
  lng: 118.84283,
  lat: 32.04721,
  description: "中国三大博物馆之一，系统展示中华文明发展历程。",
  recommend: 10
},
{
  name: "南京欢乐谷景区",
  type: "4A级景区",
  address: "江苏省南京市栖霞区",
  lng: 118.97841,
  lat: 32.15983,
  description: "大型主题游乐园，集刺激游乐与亲子娱乐于一体。",
  recommend: 9
},
{
  name: "南京市朝天宫景区",
  type: "4A级景区",
  address: "江苏省南京市秦淮区",
  lng: 118.78121,
  lat: 32.03583,
  description: "江南地区保存最完整的明清古建筑群之一。",
  recommend: 8
},
{
  name: "南京市大报恩寺遗址公园景区",
  type: "4A级景区",
  address: "江苏省南京市秦淮区",
  lng: 118.79241,
  lat: 32.01783,
  description: "以大报恩寺塔遗址为核心的佛教文化遗址公园。",
  recommend: 9
},
{
  name: "南京市渡江胜利纪念馆",
  type: "4A级景区",
  address: "江苏省南京市建邺区",
  lng: 118.73183,
  lat: 32.06241,
  description: "纪念渡江战役胜利的重要红色教育基地。",
  recommend: 8
},
{
  name: "南京市高淳国际慢城",
  type: "4A级景区",
  address: "江苏省南京市高淳区",
  lng: 118.98241,
  lat: 31.32921,
  description: "以生态休闲、慢生活理念著称的国际慢城。",
  recommend: 8
},
{
  name: "南京市高淳老街历史文化景区",
  type: "4A级景区",
  address: "江苏省南京市高淳区",
  lng: 118.87583,
  lat: 31.32741,
  description: "保存完好的明清古街，地方民俗文化浓厚。",
  recommend: 8
},
{
  name: "南京市河西南京眼旅游区",
  type: "4A级景区",
  address: "江苏省南京市建邺区",
  lng: 118.73121,
  lat: 32.02483,
  description: "以南京眼步行桥为核心的滨江城市景观区。",
  recommend: 8
},
{
  name: "南京市红山森林动物园",
  type: "4A级景区",
  address: "江苏省南京市玄武区",
  lng: 118.81642,
  lat: 32.08983,
  description: "集野生动物保护、展示和科普教育于一体。",
  recommend: 9
},
{
  name: "南京市金牛湖景区",
  type: "4A级景区",
  address: "江苏省南京市六合区",
  lng: 118.91321,
  lat: 32.41283,
  description: "以湖泊湿地和自然风光为特色的生态景区。",
  recommend: 8
},
{
  name: "南京市金牛湖野生动物王国景区",
  type: "4A级景区",
  address: "江苏省南京市六合区",
  lng: 118.92741,
  lat: 32.40421,
  description: "大型野生动物主题乐园，适合亲子游览。",
  recommend: 8
},
{
  name: "南京市科技馆",
  type: "4A级景区",
  address: "江苏省南京市雨花台区",
  lng: 118.75721,
  lat: 32.01241,
  description: "集科技展示、互动体验与科普教育于一体。",
  recommend: 8
},
{
  name: "南京市溧水白马如意文化艺术中心",
  type: "4A级景区",
  address: "江苏省南京市溧水区",
  lng: 119.02841,
  lat: 31.69283,
  description: "以文化艺术展示和乡村休闲为主题。",
  recommend: 7
},
{
  name: "南京市溧水天生桥景区",
  type: "4A级景区",
  address: "江苏省南京市溧水区",
  lng: 119.02421,
  lat: 31.64483,
  description: "以自然峡谷和瀑布景观著称的生态景区。",
  recommend: 8
},
{
  name: "南京市梅钢工业文化旅游区",
  type: "4A级景区",
  address: "江苏省南京市雨花台区",
  lng: 118.70483,
  lat: 31.97321,
  description: "展示钢铁工业发展史的工业文化旅游区。",
  recommend: 7
},
{
  name: "南京市梅园新村纪念馆",
  type: "4A级景区",
  address: "江苏省南京市玄武区",
  lng: 118.84621,
  lat: 32.06183,
  description: "重要的近现代革命历史纪念地。",
  recommend: 9
},
{
  name: "南京市明文化村景区",
  type: "4A级景区",
  address: "江苏省南京市江宁区",
  lng: 118.86342,
  lat: 32.02821,
  description: "以明代文化和民俗体验为主题的旅游景区。",
  recommend: 7
},
{
  name: "南京市莫愁湖景区",
  type: "4A级景区",
  address: "江苏省南京市建邺区",
  lng: 118.74121,
  lat: 32.04183,
  description: "南京著名古典园林湖泊景区。",
  recommend: 8
},
{
  name: "南京市牛首山文化旅游区",
  type: "5A级景区",
  address: "江苏省南京市江宁区",
  lng: 118.86121,
  lat: 31.96483,
  description: "以佛教文化、自然山水和建筑艺术闻名。",
  recommend: 10
},
{
  name: "南京市平山森林公园",
  type: "4A级景区",
  address: "江苏省南京市浦口区",
  lng: 118.59421,
  lat: 32.15683,
  description: "以森林休闲、登山健身为特色的城市森林公园。",
  recommend: 7
},
{
  name: "南京市栖霞山风景区",
  type: "4A级景区",
  address: "江苏省南京市栖霞区",
  lng: 118.96321,
  lat: 32.15921,
  description: "以秋季红叶和佛教文化著称。",
  recommend: 9
},
{
  name: "南京市汤山紫清湖旅游区",
  type: "4A级景区",
  address: "江苏省南京市江宁区",
  lng: 119.01542,
  lat: 32.06121,
  description: "集温泉度假、野生动物和休闲娱乐于一体。",
  recommend: 8
},
{
  name: "南京市玄武湖景区",
  type: "5A级景区",
  address: "江苏省南京市玄武区",
  lng: 118.80621,
  lat: 32.07883,
  description: "中国最大的皇家园林湖泊城市公园之一。",
  recommend: 10
},
{
  name: "南京市游子山休闲旅游区",
  type: "4A级景区",
  address: "江苏省南京市高淳区",
  lng: 118.95241,
  lat: 31.27821,
  description: "以自然山林和休闲度假为主题。",
  recommend: 7
},
{
  name: "南京市雨花台风景区",
  type: "4A级景区",
  address: "江苏省南京市雨花台区",
  lng: 118.77683,
  lat: 31.99741,
  description: "重要的革命纪念地和城市山林景区。",
  recommend: 9
},
{
  name: "南京市阅江楼景区",
  type: "4A级景区",
  address: "江苏省南京市鼓楼区",
  lng: 118.73983,
  lat: 32.09321,
  description: "登楼可远眺长江风光的历史文化景区。",
  recommend: 8
}
,
/* ================= 南京市 ================= */
{
  name: "南京市云幽谷旅游区",
  type: "4A级景区",
  address: "江苏省南京市江宁区",
  lng: 118.99841,
  lat: 31.91283,
  description: "以山谷森林和生态休闲为特色的旅游区。",
  recommend: 7
},
{
  name: "南京市珍珠泉风景区",
  type: "4A级景区",
  address: "江苏省南京市浦口区",
  lng: 118.59483,
  lat: 32.15621,
  description: "以泉水景观和山林风光闻名的风景名胜区。",
  recommend: 8
},
{
  name: "南京中国近代史遗址博物馆",
  type: "4A级景区",
  address: "江苏省南京市玄武区",
  lng: 118.84683,
  lat: 32.05841,
  description: "系统展示中国近代历史的重要博物馆。",
  recommend: 9
},
{
  name: "侵华日军南京大屠杀遇难同胞纪念馆",
  type: "5A级景区",
  address: "江苏省南京市建邺区",
  lng: 118.73821,
  lat: 32.03183,
  description: "国家级爱国主义教育基地，铭记历史、警示未来。",
  recommend: 10
},
{
  name: "南京市水墨大埝旅游区",
  type: "4A级景区",
  address: "江苏省南京市六合区",
  lng: 118.87541,
  lat: 32.35121,
  description: "以乡村水墨景观和田园休闲为特色。",
  recommend: 7
},
{
  name: "南京幕燕滨江旅游区",
  type: "4A级景区",
  address: "江苏省南京市鼓楼区",
  lng: 118.76921,
  lat: 32.10583,
  description: "集滨江景观、山体公园和历史文化于一体。",
  recommend: 8
},

/* ================= 苏州市 ================= */
{
  name: "苏州寒山寺",
  type: "4A级景区",
  address: "江苏省苏州市姑苏区",
  lng: 120.58321,
  lat: 31.31383,
  description: "因《枫桥夜泊》而闻名的千年古刹。",
  recommend: 9
},
{
  name: "苏州木渎古镇",
  type: "4A级景区",
  address: "江苏省苏州市吴中区",
  lng: 120.51583,
  lat: 31.25721,
  description: "历史悠久的江南水乡古镇。",
  recommend: 8
},
{
  name: "苏州甪直古镇",
  type: "4A级景区",
  address: "江苏省苏州市吴中区",
  lng: 120.71621,
  lat: 31.27683,
  description: "以水巷、古桥和民居著称的古镇。",
  recommend: 8
},
{
  name: "苏州昆山市锦溪古镇",
  type: "4A级景区",
  address: "江苏省苏州市昆山市",
  lng: 120.94241,
  lat: 31.07283,
  description: "保存完好的江南水乡古镇，文化底蕴深厚。",
  recommend: 8
},
{
  name: "狮子林",
  type: "5A级景区",
  address: "江苏省苏州市姑苏区",
  lng: 120.63121,
  lat: 31.32383,
  description: "中国四大名园之一，以假山迷宫著称。",
  recommend: 10
},
{
  name: "苏州天平山景区",
  type: "4A级景区",
  address: "江苏省苏州市吴中区",
  lng: 120.52841,
  lat: 31.25183,
  description: "以红枫、奇石和名泉闻名。",
  recommend: 9
},
{
  name: "苏州市吴江震泽古镇景区",
  type: "4A级景区",
  address: "江苏省苏州市吴江区",
  lng: 120.53483,
  lat: 30.91921,
  description: "江南丝绸文化与水乡风貌并存的古镇。",
  recommend: 8
},
{
  name: "苏州西山景区",
  type: "4A级景区",
  address: "江苏省苏州市吴中区",
  lng: 120.25241,
  lat: 31.08183,
  description: "太湖岛屿风光与自然人文景观结合。",
  recommend: 9
},
{
  name: "苏州市平江历史街区",
  type: "4A级景区",
  address: "江苏省苏州市姑苏区",
  lng: 120.64041,
  lat: 31.32321,
  description: "保存最完整的苏州古城街区。",
  recommend: 9
},
{
  name: "苏州市七里山塘景区",
  type: "4A级景区",
  address: "江苏省苏州市姑苏区",
  lng: 120.59521,
  lat: 31.31841,
  description: "千年古街，被誉为“姑苏第一名街”。",
  recommend: 9
},
{
  name: "苏州市吴中光福景区",
  type: "4A级景区",
  address: "江苏省苏州市吴中区",
  lng: 120.41841,
  lat: 31.24383,
  description: "集太湖风光、古刹与渔村文化于一体。",
  recommend: 8
},
{
  name: "网师园",
  type: "5A级景区",
  address: "江苏省苏州市姑苏区",
  lng: 120.63821,
  lat: 31.30583,
  description: "中国古典园林代表之一，小巧精致。",
  recommend: 10
},
{
  name: "静思园",
  type: "4A级景区",
  address: "江苏省苏州市吴江区",
  lng: 120.63883,
  lat: 31.00321,
  description: "融合江南园林艺术与现代设计。",
  recommend: 7
},
{
  name: "苏州市苏州乐园森林世界景区",
  type: "4A级景区",
  address: "江苏省苏州市虎丘区",
  lng: 120.55341,
  lat: 31.29483,
  description: "大型主题乐园，适合家庭游玩。",
  recommend: 8
},
{
  name: "苏州市吴江运河文化旅游景区",
  type: "4A级景区",
  address: "江苏省苏州市吴江区",
  lng: 120.65121,
  lat: 31.16083,
  description: "以运河文化和江南水乡为特色。",
  recommend: 7
},
{
  name: "苏州沙洲优黄文化园",
  type: "4A级景区",
  address: "江苏省苏州市张家港市",
  lng: 120.54883,
  lat: 31.87241,
  description: "展示黄酒文化与江南酿造工艺。",
  recommend: 7
},
{
  name: "苏州古里红豆山庄景区",
  type: "4A级景区",
  address: "江苏省苏州市常熟市",
  lng: 120.81142,
  lat: 31.59821,
  description: "以红豆文化和园林景观为特色。",
  recommend: 7
},

/* ================= 无锡市 ================= */
{
  name: "无锡荡口古镇",
  type: "4A级景区",
  address: "江苏省无锡市锡山区",
  lng: 120.47241,
  lat: 31.57183,
  description: "保存完好的江南水乡古镇。",
  recommend: 8
},
{
  name: "无锡动物园·太湖欢乐园",
  type: "4A级景区",
  address: "江苏省无锡市滨湖区",
  lng: 120.23241,
  lat: 31.50383,
  description: "集动物观赏与游乐项目于一体。",
  recommend: 8
},
{
  name: "无锡市蠡园公园",
  type: "4A级景区",
  address: "江苏省无锡市滨湖区",
  lng: 120.25241,
  lat: 31.52283,
  description: "以太湖风光和古典园林著称。",
  recommend: 9
},
{
  name: "无锡梅园横山风景区",
  type: "4A级景区",
  address: "江苏省无锡市滨湖区",
  lng: 120.21983,
  lat: 31.52121,
  description: "以梅花景观和山林风光闻名。",
  recommend: 9
},
{
  name: "宜兴市龙背山森林公园",
  type: "4A级景区",
  address: "江苏省无锡市宜兴市",
  lng: 119.82321,
  lat: 31.36483,
  description: "城市森林氧吧，适合登山休闲。",
  recommend: 8
},
{
  name: "无锡南禅寺",
  type: "4A级景区",
  address: "江苏省无锡市梁溪区",
  lng: 120.30783,
  lat: 31.55841,
  description: "融合佛教文化与古街商业的历史街区。",
  recommend: 8
},
{
  name: "无锡市阳山桃花源景区",
  type: "4A级景区",
  address: "江苏省无锡市惠山区",
  lng: 120.12341,
  lat: 31.67183,
  description: "以桃花景观和生态农业闻名。",
  recommend: 8
},

/* ================= 无锡市 · 宜兴 ================= */
{
  name: "宜兴市团氿风景区",
  type: "4A级景区",
  address: "江苏省无锡市宜兴市",
  lng: 119.82121,
  lat: 31.36383,
  description: "宜兴城市核心湖泊景区，集休闲游览与市民活动于一体。",
  recommend: 8
},

/* ================= 徐州市 ================= */
{
  name: "徐州市沛县汉城景区",
  type: "4A级景区",
  address: "江苏省徐州市沛县",
  lng: 116.93342,
  lat: 34.72783,
  description: "再现汉代都城风貌，展示汉文化与历史遗迹。",
  recommend: 8
},
{
  name: "邳州博物馆",
  type: "4A级景区",
  address: "江苏省徐州市邳州市",
  lng: 117.95241,
  lat: 34.31183,
  description: "集中展示邳州历史文化与地方文物。",
  recommend: 7
},
{
  name: "徐州乐园",
  type: "4A级景区",
  address: "江苏省徐州市云龙区",
  lng: 117.23683,
  lat: 34.20421,
  description: "大型综合主题游乐园，适合家庭与年轻游客。",
  recommend: 8
},
{
  name: "艾山风景名胜区",
  type: "4A级景区",
  address: "江苏省徐州市睢宁县",
  lng: 117.88541,
  lat: 33.96821,
  description: "以奇石地貌和山林景观为特色的风景名胜区。",
  recommend: 7
},
{
  name: "徐州窑湾古镇景区",
  type: "4A级景区",
  address: "江苏省徐州市新沂市",
  lng: 118.36421,
  lat: 34.24683,
  description: "京杭大运河沿线重要的历史商贸古镇。",
  recommend: 8
},
{
  name: "徐州市大洞山景区",
  type: "4A级景区",
  address: "江苏省徐州市贾汪区",
  lng: 117.47421,
  lat: 34.40983,
  description: "汉代楚王陵墓群所在地，历史文化价值突出。",
  recommend: 8
},
{
  name: "徐州市丰县刘邦故里文化景区",
  type: "4A级景区",
  address: "江苏省徐州市丰县",
  lng: 116.59841,
  lat: 34.70283,
  description: "纪念汉高祖刘邦的出生地和汉文化景区。",
  recommend: 8
},
{
  name: "徐州欧乐堡海洋极地世界",
  type: "4A级景区",
  address: "江苏省徐州市铜山区",
  lng: 117.09241,
  lat: 34.20921,
  description: "以海洋与极地动物展示为主题的大型乐园。",
  recommend: 9
},
{
  name: "徐州九顶山动物园",
  type: "4A级景区",
  address: "江苏省徐州市泉山区",
  lng: 117.12383,
  lat: 34.25241,
  description: "集动物观赏、科普教育和休闲游览于一体。",
  recommend: 8
},

/* ================= 南通市 ================= */
{
  name: "南通市如皋水绘园景区",
  type: "4A级景区",
  address: "江苏省南通市如皋市",
  lng: 120.57321,
  lat: 32.37983,
  description: "中国著名私家园林，江南园林代表之一。",
  recommend: 9
},
{
  name: "江苏海门叠石桥国际家纺馆·家纺产业旅游区",
  type: "4A级景区",
  address: "江苏省南通市海门区",
  lng: 121.20241,
  lat: 31.89083,
  description: "展示中国家纺产业发展与商贸文化。",
  recommend: 7
},
{
  name: "南通狼山风景名胜区",
  type: "4A级景区",
  address: "江苏省南通市崇川区",
  lng: 120.88921,
  lat: 31.95583,
  description: "江海第一山，融合佛教文化与自然景观。",
  recommend: 9
},
{
  name: "南通市奇妙农场景区",
  type: "4A级景区",
  address: "江苏省南通市通州区",
  lng: 121.07641,
  lat: 32.05421,
  description: "以现代农业体验和亲子互动为主题。",
  recommend: 7
},
{
  name: "南通市如东县苏中四分区反“清乡”斗争纪念馆景区",
  type: "4A级景区",
  address: "江苏省南通市如东县",
  lng: 121.18883,
  lat: 32.31241,
  description: "重要红色教育基地，展示抗日斗争历史。",
  recommend: 8
},
{
  name: "南通启唐城沉浸乐园",
  type: "4A级景区",
  address: "江苏省南通市启东市",
  lng: 121.67321,
  lat: 31.81483,
  description: "以唐风文化和沉浸式体验为特色的主题乐园。",
  recommend: 8
},
{
  name: "南通李昌珏刑侦科学博物馆",
  type: "4A级景区",
  address: "江苏省南通市海门区",
  lng: 121.15821,
  lat: 31.89383,
  description: "展示刑侦科学与法医学知识的特色博物馆。",
  recommend: 7
},

/* ================= 连云港市 ================= */
{
  name: "连云港渔湾风景区",
  type: "4A级景区",
  address: "江苏省连云港市海州区",
  lng: 119.27841,
  lat: 34.63583,
  description: "以山水瀑布和峡谷景观著称。",
  recommend: 8
},
{
  name: "连云港孔望山风景区",
  type: "4A级景区",
  address: "江苏省连云港市海州区",
  lng: 119.22321,
  lat: 34.62283,
  description: "以摩崖造像和佛教文化闻名。",
  recommend: 8
},
{
  name: "连云港市大伊山风景区",
  type: "4A级景区",
  address: "江苏省连云港市灌云县",
  lng: 119.40421,
  lat: 34.32983,
  description: "融合山岳风光与道教文化的景区。",
  recommend: 7
},
{
  name: "连云港市秦山岛景区",
  type: "4A级景区",
  address: "江苏省连云港市赣榆区",
  lng: 119.24683,
  lat: 35.00741,
  description: "黄海海岛景观与海洋生态旅游区。",
  recommend: 8
},
{
  name: "连云港市灌南县汤沟酒生态文化旅游区",
  type: "4A级景区",
  address: "江苏省连云港市灌南县",
  lng: 119.32841,
  lat: 34.09021,
  description: "展示中国白酒文化与生态酿造工艺。",
  recommend: 7
},

/* ================= 淮安市 ================= */
{
  name: "淮安府署景区",
  type: "4A级景区",
  address: "江苏省淮安市淮安区",
  lng: 119.14283,
  lat: 33.50421,
  description: "中国保存最完整的古代府署建筑群之一。",
  recommend: 9
},
{
  name: "江苏淮安古淮河国家湿地公园",
  type: "4A级景区",
  address: "江苏省淮安市清江浦区",
  lng: 119.03121,
  lat: 33.57483,
  description: "以河流湿地生态保护与自然观光为特色。",
  recommend: 8
},
{
  name: "淮安市金湖县尧想国文化旅游区",
  type: "4A级景区",
  address: "江苏省淮安市金湖县",
  lng: 119.02041,
  lat: 33.02583,
  description: "以上古尧文化为主题的综合旅游区。",
  recommend: 7
},

/* ================= 盐城市 ================= */
{
  name: "盐城丹顶鹤自然保护区",
  type: "5A级景区",
  address: "江苏省盐城市亭湖区",
  lng: 120.21641,
  lat: 33.38683,
  description: "世界重要湿地，丹顶鹤越冬栖息地。",
  recommend: 10
},
{
  name: "盐城大纵湖旅游景区",
  type: "4A级景区",
  address: "江苏省盐城市盐都区",
  lng: 120.16983,
  lat: 33.32541,
  description: "以湖泊湿地和生态休闲为特色。",
  recommend: 8
},
{
  name: "阜宁金沙湖旅游区",
  type: "4A级景区",
  address: "江苏省盐城市阜宁县",
  lng: 119.80142,
  lat: 33.78121,
  description: "集湖泊风光、休闲娱乐于一体。",
  recommend: 7
},
{
  name: "盐城市建湖县淮剧小镇景区",
  type: "4A级景区",
  address: "江苏省盐城市建湖县",
  lng: 119.80621,
  lat: 33.47283,
  description: "以国家级非遗淮剧文化为主题。",
  recommend: 7
},
{
  name: "盐城泊心黄沙港景区",
  type: "4A级景区",
  address: "江苏省盐城市大丰区",
  lng: 120.85183,
  lat: 33.19741,
  description: "集海洋文化、渔港风情于一体。",
  recommend: 8
},

/* ================= 扬州市 ================= */
{
  name: "扬州市个园",
  type: "5A级景区",
  address: "江苏省扬州市广陵区",
  lng: 119.44121,
  lat: 32.39983,
  description: "中国四大名园之一，以假山艺术著称。",
  recommend: 10
},
{
  name: "扬州市东关街历史文化旅游区",
  type: "4A级景区",
  address: "江苏省扬州市广陵区",
  lng: 119.44841,
  lat: 32.39483,
  description: "扬州保存最完整的历史街区。",
  recommend: 9
},
{
  name: "扬州市大明寺",
  type: "4A级景区",
  address: "江苏省扬州市邗江区",
  lng: 119.40783,
  lat: 32.42421,
  description: "千年古刹，鉴真东渡起点。",
  recommend: 9
},
{
  name: "扬州市茱萸湾风景区",
  type: "4A级景区",
  address: "江苏省扬州市广陵区",
  lng: 119.47421,
  lat: 32.37283,
  description: "集动物园、湿地生态于一体。",
  recommend: 8
},
{
  name: "高邮市文游台景区",
  type: "4A级景区",
  address: "江苏省扬州市高邮市",
  lng: 119.45383,
  lat: 32.78921,
  description: "纪念秦少游等历史名人的文化景区。",
  recommend: 7
},
{
  name: "扬州市凤凰岛生态旅游区",
  type: "4A级景区",
  address: "江苏省扬州市邗江区",
  lng: 119.36041,
  lat: 32.38683,
  description: "生态湿地与休闲旅游相结合。",
  recommend: 7
},

/* ================= 镇江市 ================= */
{
  name: "镇江市西津渡历史文化街区",
  type: "4A级景区",
  address: "江苏省镇江市京口区",
  lng: 119.44421,
  lat: 32.21083,
  description: "千年渡口文化与历史街区。",
  recommend: 9
},
{
  name: "镇江南山风景区",
  type: "4A级景区",
  address: "江苏省镇江市润州区",
  lng: 119.40383,
  lat: 32.18841,
  description: "山林景观与宗教文化并存。",
  recommend: 8
},
{
  name: "镇江开心休博园景区",
  type: "4A级景区",
  address: "江苏省镇江市丹徒区",
  lng: 119.45483,
  lat: 32.12321,
  description: "以亲子休闲和娱乐体验为主题。",
  recommend: 7
},

/* ================= 泰州 / 兴化 ================= */
{
  name: "泰州姜堰溱潼古镇",
  type: "4A级景区",
  address: "江苏省泰州市姜堰区",
  lng: 120.13241,
  lat: 32.61083,
  description: "里下河水乡代表古镇。",
  recommend: 8
},
{
  name: "兴化市沙沟古镇景区",
  type: "4A级景区",
  address: "江苏省泰州市兴化市",
  lng: 119.99683,
  lat: 32.81241,
  description: "运河古镇，渔乡水韵浓厚。",
  recommend: 7
},

/* ================= 宿迁市 ================= */
{
  name: "宿迁市项王故里景区",
  type: "4A级景区",
  address: "江苏省宿迁市宿城区",
  lng: 118.27541,
  lat: 33.96183,
  description: "纪念西楚霸王项羽的历史文化景区。",
  recommend: 8
},
{
  name: "宿迁皂河龙运城景区",
  type: "4A级景区",
  address: "江苏省宿迁市宿城区",
  lng: 118.22241,
  lat: 33.92821,
  description: "以运河文化和水利历史为主题。",
  recommend: 7
},

/* ================= 常州市 ================= */
{
  name: "常州环球动漫嬉戏谷",
  type: "5A级景区",
  address: "江苏省常州市武进区",
  lng: 119.86241,
  lat: 31.70183,
  description: "以动漫与科技体验为主题的乐园。",
  recommend: 10
},
{
  name: "常州天宁禅寺",
  type: "4A级景区",
  address: "江苏省常州市天宁区",
  lng: 119.96421,
  lat: 31.78383,
  description: "江南佛教名刹，天宁宝塔所在地。",
  recommend: 8
},

/* ================= 张家港 ================= */
{
  name: "张家港市凤凰山景区",
  type: "4A级景区",
  address: "江苏省苏州市张家港市",
  lng: 120.51521,
  lat: 31.88983,
  description: "城市森林公园与登高休闲景区。",
  recommend: 7
},

/* ================= 无锡市 ================= */
{
  name: "无锡薛福成故居",
  type: "4A级景区",
  address: "江苏省无锡市梁溪区",
  lng: 120.30383,
  lat: 31.56641,
  description: "晚清重臣薛福成故居。",
  recommend: 7
},
{
  name: "无锡崇安寺景区",
  type: "4A级景区",
  address: "江苏省无锡市梁溪区",
  lng: 120.30521,
  lat: 31.57083,
  description: "市中心佛教文化与商业街区。",
  recommend: 8
},
{
  name: "无锡东林书院",
  type: "4A级景区",
  address: "江苏省无锡市梁溪区",
  lng: 120.30421,
  lat: 31.56883,
  description: "中国著名古代书院之一。",
  recommend: 8
},
{
  name: "无锡博物院",
  type: "4A级景区",
  address: "江苏省无锡市滨湖区",
  lng: 120.26241,
  lat: 31.52883,
  description: "展示无锡历史与近现代文化。",
  recommend: 8
},
{
  name: "中国吴文化博物馆·鸿山遗址博物馆",
  type: "4A级景区",
  address: "江苏省无锡市新吴区",
  lng: 120.41983,
  lat: 31.51021,
  description: "吴文化发源地考古展示中心。",
  recommend: 8
},
{
  name: "无锡鸿山泰伯景区",
  type: "4A级景区",
  address: "江苏省无锡市新吴区",
  lng: 120.42541,
  lat: 31.50783,
  description: "纪念吴文化始祖泰伯。",
  recommend: 8
},
{
  name: "无锡中华赏石园景区",
  type: "4A级景区",
  address: "江苏省无锡市滨湖区",
  lng: 120.20841,
  lat: 31.51283,
  description: "以奇石文化和园林景观为主题。",
  recommend: 7
},
{
  name: "无锡清名桥古运河景区",
  type: "4A级景区",
  address: "江苏省无锡市梁溪区",
  lng: 120.31483,
  lat: 31.55321,
  description: "江南古运河代表性历史街区。",
  recommend: 9
},
{
  name: "无锡影都文化旅游区",
  type: "4A级景区",
  address: "江苏省无锡市滨湖区",
  lng: 120.19921,
  lat: 31.49883,
  description: "集影视拍摄与旅游体验于一体。",
  recommend: 7
},
{
  name: "无锡阖闾城遗址博物馆",
  type: "4A级景区",
  address: "江苏省无锡市滨湖区",
  lng: 120.21183,
  lat: 31.48241,
  description: "春秋吴国都城遗址博物馆。",
  recommend: 8
},

/* ================= 宜兴市 ================= */
{
  name: "宜兴善卷风景区",
  type: "4A级景区",
  address: "江苏省无锡市宜兴市",
  lng: 119.67983,
  lat: 31.23641,
  description: "以溶洞奇观和人文传说著称。",
  recommend: 8
},
{
  name: "宜兴竹海风景区",
  type: "4A级景区",
  address: "江苏省无锡市宜兴市",
  lng: 119.60421,
  lat: 31.18683,
  description: "华东地区著名竹林景区。",
  recommend: 9
},
{
  name: "宜兴陶祖圣境景区",
  type: "4A级景区",
  address: "江苏省无锡市宜兴市",
  lng: 119.75641,
  lat: 31.32183,
  description: "纪念陶文化始祖的文化景区。",
  recommend: 7
},
{
  name: "宜兴张公洞旅游景区",
  type: "4A级景区",
  address: "江苏省无锡市宜兴市",
  lng: 119.73683,
  lat: 31.26641,
  description: "以地下溶洞景观闻名。",
  recommend: 8
},
{
  name: "宜兴陶瓷博物馆",
  type: "4A级景区",
  address: "江苏省无锡市宜兴市",
  lng: 119.81241,
  lat: 31.36183,
  description: "系统展示宜兴陶瓷发展史。",
  recommend: 7
},
{
  name: "宜兴云湖旅游景区",
  type: "4A级景区",
  address: "江苏省无锡市宜兴市",
  lng: 119.74241,
  lat: 31.17883,
  description: "集湖泊风光、休闲度假于一体。",
  recommend: 7
},

/* ================= 江阴市 ================= */
{
  name: "江阴市滨江要塞旅游区",
  type: "4A级景区",
  address: "江苏省无锡市江阴市",
  lng: 120.30021,
  lat: 31.92483,
  description: "集近代军事遗址与滨江景观于一体的旅游区。",
  recommend: 8
},

/* ================= 徐州市 ================= */
{
  name: "徐州淮海战役纪念塔",
  type: "5A级景区",
  address: "江苏省徐州市泉山区",
  lng: 117.19321,
  lat: 34.24383,
  description: "纪念淮海战役胜利的重要红色地标。",
  recommend: 10
},
{
  name: "徐州汉文化景区",
  type: "5A级景区",
  address: "江苏省徐州市云龙区",
  lng: 117.26641,
  lat: 34.25221,
  description: "集中展示汉代历史、陵墓与文化遗存。",
  recommend: 10
},
{
  name: "徐州户部山",
  type: "4A级景区",
  address: "江苏省徐州市云龙区",
  lng: 117.19483,
  lat: 34.25921,
  description: "以明清民居和历史街区著称。",
  recommend: 8
},
{
  name: "徐州彭祖园",
  type: "4A级景区",
  address: "江苏省徐州市泉山区",
  lng: 117.14583,
  lat: 34.23921,
  description: "以彭祖文化和园林景观为主题。",
  recommend: 8
},
{
  name: "徐州汉画像石艺术馆",
  type: "4A级景区",
  address: "江苏省徐州市云龙区",
  lng: 117.25621,
  lat: 34.24783,
  description: "展示汉代画像石艺术精品。",
  recommend: 8
},
{
  name: "徐州龟山景区",
  type: "4A级景区",
  address: "江苏省徐州市鼓楼区",
  lng: 117.18421,
  lat: 34.28783,
  description: "西汉楚王陵墓所在地。",
  recommend: 8
},
{
  name: "徐州博物馆",
  type: "4A级景区",
  address: "江苏省徐州市云龙区",
  lng: 117.25583,
  lat: 34.25183,
  description: "系统展示徐州历史文化。",
  recommend: 8
},
{
  name: "徐州潘安湖",
  type: "4A级景区",
  address: "江苏省徐州市贾汪区",
  lng: 117.43521,
  lat: 34.37983,
  description: "矿坑修复而成的生态湿地公园。",
  recommend: 8
},
{
  name: "徐州蟠桃佛教文化景区",
  type: "4A级景区",
  address: "江苏省徐州市铜山区",
  lng: 117.14183,
  lat: 34.14121,
  description: "以佛教文化与山林景观为特色。",
  recommend: 7
},
{
  name: "徐州微山湖千岛湿地",
  type: "4A级景区",
  address: "江苏省徐州市沛县",
  lng: 116.89321,
  lat: 34.58683,
  description: "湖泊湿地与生态观光旅游区。",
  recommend: 8
},
{
  name: "徐州督公湖",
  type: "4A级景区",
  address: "江苏省徐州市贾汪区",
  lng: 117.40241,
  lat: 34.36183,
  description: "以湖泊休闲与生态景观为主。",
  recommend: 7
},
{
  name: "徐州水月禅寺",
  type: "4A级景区",
  address: "江苏省徐州市铜山区",
  lng: 117.08841,
  lat: 34.11821,
  description: "佛教文化与静修体验相结合。",
  recommend: 7
},
{
  name: "徐州悬水湖",
  type: "4A级景区",
  address: "江苏省徐州市铜山区",
  lng: 117.04821,
  lat: 34.09283,
  description: "山水结合的生态湖泊景区。",
  recommend: 7
},
{
  name: "徐州凤鸣海景区",
  type: "4A级景区",
  address: "江苏省徐州市泉山区",
  lng: 117.11883,
  lat: 34.22621,
  description: "以亲水娱乐和休闲体验为主。",
  recommend: 7
},
{
  name: "新沂马陵山",
  type: "4A级景区",
  address: "江苏省徐州市新沂市",
  lng: 118.35421,
  lat: 34.36283,
  description: "历史名山与自然风景相结合。",
  recommend: 8
},

/* ================= 淮安市 ================= */
{
  name: "淮安中国漕运博物馆",
  type: "4A级景区",
  address: "江苏省淮安市清江浦区",
  lng: 119.02183,
  lat: 33.59741,
  description: "中国首座漕运主题博物馆。",
  recommend: 9
},
{
  name: "淮安博物馆",
  type: "4A级景区",
  address: "江苏省淮安市清江浦区",
  lng: 119.02621,
  lat: 33.59383,
  description: "展示淮安历史文化与文物。",
  recommend: 8
},
{
  name: "淮安吴承恩故居",
  type: "4A级景区",
  address: "江苏省淮安市淮安区",
  lng: 119.14683,
  lat: 33.50521,
  description: "《西游记》作者吴承恩纪念地。",
  recommend: 9
},
{
  name: "淮安里运河文化长廊",
  type: "4A级景区",
  address: "江苏省淮安市清江浦区",
  lng: 119.01541,
  lat: 33.58583,
  description: "大运河文化与城市景观融合区。",
  recommend: 8
},
{
  name: "淮安新四军刘老庄连纪念园",
  type: "4A级景区",
  address: "江苏省淮安市淮阴区",
  lng: 119.02121,
  lat: 33.65883,
  description: "重要红色革命纪念地。",
  recommend: 9
},
{
  name: "淮安洪泽湖古堰",
  type: "5A级景区",
  address: "江苏省淮安市洪泽区",
  lng: 118.87321,
  lat: 33.27983,
  description: "世界文化遗产，中国古代水利工程奇迹。",
  recommend: 10
},
{
  name: "盱眙第一山",
  type: "4A级景区",
  address: "江苏省淮安市盱眙县",
  lng: 118.54683,
  lat: 33.01321,
  description: "以摩崖石刻和山水景观闻名。",
  recommend: 8
},
{
  name: "盱眙黄花塘新四军军部纪念馆",
  type: "4A级景区",
  address: "江苏省淮安市盱眙县",
  lng: 118.62541,
  lat: 33.08683,
  description: "新四军重要历史旧址。",
  recommend: 8
},
{
  name: "涟水五岛湖",
  type: "4A级景区",
  address: "江苏省淮安市涟水县",
  lng: 119.25983,
  lat: 33.77821,
  description: "城市湖泊型生态公园。",
  recommend: 7
},
{
  name: "金湖荷花荡",
  type: "4A级景区",
  address: "江苏省淮安市金湖县",
  lng: 119.02421,
  lat: 33.03483,
  description: "以万亩荷花湿地著称。",
  recommend: 8
},
{
  name: "今世缘旅游景区",
  type: "4A级景区",
  address: "江苏省淮安市涟水县",
  lng: 119.23683,
  lat: 33.78921,
  description: "展示白酒文化与现代酿造工艺。",
  recommend: 7
},
{
  name: "西游记文化体验园·龙宫大白鲸世界",
  type: "4A级景区",
  address: "江苏省淮安市淮安区",
  lng: 119.10421,
  lat: 33.46883,
  description: "以西游文化和海洋主题娱乐为特色。",
  recommend: 8
},
{
  name: "金湖水上森林",
  type: "4A级景区",
  address: "江苏省淮安市金湖县",
  lng: 119.00841,
  lat: 33.04183,
  description: "独特的水上森林湿地景观。",
  recommend: 8
},
{
  name: "白马湖向日葵的故事景区",
  type: "4A级景区",
  address: "江苏省淮安市洪泽区",
  lng: 118.90241,
  lat: 33.34483,
  description: "以向日葵花海为主题的乡村旅游区。",
  recommend: 7
},

/* ================= 盐城市 ================= */
{
  name: "盐城海盐历史文化风景区",
  type: "4A级景区",
  address: "江苏省盐城市亭湖区",
  lng: 120.15783,
  lat: 33.39241,
  description: "展示盐文化与城市历史。",
  recommend: 7
},
{
  name: "盐城新四军纪念馆",
  type: "5A级景区",
  address: "江苏省盐城市亭湖区",
  lng: 120.17021,
  lat: 33.38583,
  description: "全国重要抗战纪念地。",
  recommend: 10
},
{
  name: "东台西溪旅游文化景区",
  type: "4A级景区",
  address: "江苏省盐城市东台市",
  lng: 120.33241,
  lat: 32.85383,
  description: "以海盐文化和古镇遗址为核心。",
  recommend: 8
},
{
  name: "大丰上海知青纪念馆",
  type: "4A级景区",
  address: "江苏省盐城市大丰区",
  lng: 120.46521,
  lat: 33.20183,
  description: "记录知青上山下乡历史。",
  recommend: 8
},
{
  name: "射阳息心寺",
  type: "4A级景区",
  address: "江苏省盐城市射阳县",
  lng: 120.23841,
  lat: 33.74583,
  description: "佛教文化与静修胜地。",
  recommend: 7
},
{
  name: "大丰港海洋世界",
  type: "4A级景区",
  address: "江苏省盐城市大丰区",
  lng: 120.86583,
  lat: 33.20321,
  description: "集海洋生物展示与科普教育于一体。",
  recommend: 8
},
{
  name: "大丰荷兰花海",
  type: "5A级景区",
  address: "江苏省盐城市大丰区",
  lng: 120.47183,
  lat: 33.20021,
  description: "中国最大的郁金香主题花海。",
  recommend: 10
},
{
  name: "东台黄海森林公园",
  type: "4A级景区",
  address: "江苏省盐城市东台市",
  lng: 120.88741,
  lat: 32.89883,
  description: "沿海防护林与森林休闲旅游区。",
  recommend: 8
},
{
  name: "大丰梅花湾",
  type: "4A级景区",
  address: "江苏省盐城市大丰区",
  lng: 120.42421,
  lat: 33.24683,
  description: "以梅花景观和湿地生态为特色。",
  recommend: 7
},
{
  name: "建湖九龙口",
  type: "4A级景区",
  address: "江苏省盐城市建湖县",
  lng: 119.83183,
  lat: 33.51521,
  description: "河网密布的里下河水乡湿地。",
  recommend: 8
},
{
  name: "东台安丰古镇",
  type: "4A级景区",
  address: "江苏省盐城市东台市",
  lng: 120.16741,
  lat: 32.75783,
  description: "千年盐镇，历史文化深厚。",
  recommend: 8
},
{
  name: "大丰中华水浒园",
  type: "4A级景区",
  address: "江苏省盐城市大丰区",
  lng: 120.49683,
  lat: 33.23321,
  description: "以《水浒传》文化为主题。",
  recommend: 7
},
{
  name: "大丰梦幻迷宫",
  type: "4A级景区",
  address: "江苏省盐城市大丰区",
  lng: 120.48721,
  lat: 33.22783,
  description: "大型植物迷宫与亲子体验区。",
  recommend: 7
},
{
  name: "草房子乐园",
  type: "4A级景区",
  address: "江苏省盐城市建湖县",
  lng: 119.79841,
  lat: 33.46821,
  description: "以文学作品《草房子》为主题。",
  recommend: 8
},
{
  name: "东台条子泥",
  type: "5A级景区",
  address: "江苏省盐城市东台市",
  lng: 120.93121,
  lat: 32.99883,
  description: "世界自然遗产，候鸟重要栖息地。",
  recommend: 10
},
{
  name: "射阳安徒生童话乐园",
  type: "4A级景区",
  address: "江苏省盐城市射阳县",
  lng: 120.28041,
  lat: 33.73683,
  description: "以安徒生童话为主题的亲子乐园。",
  recommend: 8
},

/* ================= 连云港市 ================= */
{
  name: "连云港海上云台山",
  type: "4A级景区",
  address: "江苏省连云港市连云区",
  lng: 119.47421,
  lat: 34.74583,
  description: "山海相连的自然风景名胜区。",
  recommend: 9
},

/* ================= 连云港市 ================= */
{
  name: "连云港桃花涧",
  type: "4A级景区",
  address: "江苏省连云港市海州区",
  lng: 119.24321,
  lat: 34.62083,
  description: "以山谷桃林和瀑布溪流为特色的自然景区。",
  recommend: 8
},
{
  name: "连云港市革命纪念馆",
  type: "4A级景区",
  address: "江苏省连云港市海州区",
  lng: 119.18183,
  lat: 34.60421,
  description: "展示连云港革命历史的重要纪念场所。",
  recommend: 8
},
{
  name: "连云港市博物馆",
  type: "4A级景区",
  address: "江苏省连云港市海州区",
  lng: 119.21041,
  lat: 34.59683,
  description: "系统展示连云港历史文化与文物。",
  recommend: 8
},
{
  name: "东海西双湖",
  type: "4A级景区",
  address: "江苏省连云港市东海县",
  lng: 118.77383,
  lat: 34.53721,
  description: "城市湖泊生态休闲景区。",
  recommend: 7
},
{
  name: "东海水晶文化旅游区",
  type: "4A级景区",
  address: "江苏省连云港市东海县",
  lng: 118.76421,
  lat: 34.54183,
  description: "以水晶产业和文化展示为主题。",
  recommend: 8
},
{
  name: "灌云大伊山",
  type: "4A级景区",
  address: "江苏省连云港市灌云县",
  lng: 119.40421,
  lat: 34.32983,
  description: "融合自然山景与道教文化。",
  recommend: 7
},
{
  name: "灌云伊甸园",
  type: "4A级景区",
  address: "江苏省连云港市灌云县",
  lng: 119.43121,
  lat: 34.30183,
  description: "以花卉景观和休闲娱乐为主题。",
  recommend: 7
},
{
  name: "灌云潮河湾",
  type: "4A级景区",
  address: "江苏省连云港市灌云县",
  lng: 119.45683,
  lat: 34.28521,
  description: "滨河生态休闲旅游区。",
  recommend: 7
},
{
  name: "灌南二郎神文化遗迹公园",
  type: "4A级景区",
  address: "江苏省连云港市灌南县",
  lng: 119.35421,
  lat: 34.08683,
  description: "以二郎神文化传说为主题。",
  recommend: 7
},

/* ================= 宿迁市 ================= */
{
  name: "宿迁三台山",
  type: "4A级景区",
  address: "江苏省宿迁市宿豫区",
  lng: 118.36241,
  lat: 33.91983,
  description: "以花海景观和森林休闲著称。",
  recommend: 9
},
{
  name: "宿迁龙王庙行宫",
  type: "4A级景区",
  address: "江苏省宿迁市宿城区",
  lng: 118.30241,
  lat: 33.95821,
  description: "大运河沿线重要古建筑群。",
  recommend: 7
},
{
  name: "宿迁湖滨公园",
  type: "4A级景区",
  address: "江苏省宿迁市宿城区",
  lng: 118.29483,
  lat: 33.96483,
  description: "城市湖泊型休闲公园。",
  recommend: 7
},
{
  name: "宿迁雪枫公园",
  type: "4A级景区",
  address: "江苏省宿迁市宿城区",
  lng: 118.30783,
  lat: 33.95521,
  description: "纪念彭雪枫将军的城市公园。",
  recommend: 7
},
{
  name: "泗阳中国杨树博物馆",
  type: "4A级景区",
  address: "江苏省宿迁市泗阳县",
  lng: 118.70521,
  lat: 33.72583,
  description: "全国唯一以杨树为主题的博物馆。",
  recommend: 7
},
{
  name: "洋河酒厂文化旅游区",
  type: "4A级景区",
  address: "江苏省宿迁市宿城区",
  lng: 118.37183,
  lat: 33.96641,
  description: "展示中国名酒酿造工艺与文化。",
  recommend: 8
},
{
  name: "泗洪双沟酒文化旅游区",
  type: "4A级景区",
  address: "江苏省宿迁市泗洪县",
  lng: 118.21121,
  lat: 33.47083,
  description: "以白酒文化与历史传承为特色。",
  recommend: 7
},
{
  name: "神农时代文化旅游区",
  type: "4A级景区",
  address: "江苏省宿迁市泗洪县",
  lng: 118.24841,
  lat: 33.45521,
  description: "以农耕文明和神农文化为主题。",
  recommend: 7
},

/* ================= 苏州市 ================= */
{
  name: "苏州盘门景区",
  type: "4A级景区",
  address: "江苏省苏州市姑苏区",
  lng: 120.61583,
  lat: 31.28921,
  description: "现存最完整的水陆城门遗址。",
  recommend: 9
},
{
  name: "苏州上方山国家森林公园",
  type: "4A级景区",
  address: "江苏省苏州市虎丘区",
  lng: 120.54841,
  lat: 31.25283,
  description: "山林景观与佛教文化结合。",
  recommend: 8
},
{
  name: "苏州白马涧生态园",
  type: "4A级景区",
  address: "江苏省苏州市虎丘区",
  lng: 120.50621,
  lat: 31.29083,
  description: "以生态湖泊和休闲游览为主。",
  recommend: 7
},
{
  name: "苏州御窑金砖博物馆",
  type: "4A级景区",
  address: "江苏省苏州市相城区",
  lng: 120.63683,
  lat: 31.38641,
  description: "展示明清皇家御用金砖文化。",
  recommend: 8
},
{
  name: "苏州太湖国家湿地公园",
  type: "4A级景区",
  address: "江苏省苏州市吴中区",
  lng: 120.40241,
  lat: 31.21883,
  description: "太湖湿地生态保护与观光区。",
  recommend: 8
},
{
  name: "苏州大阳山国家森林公园",
  type: "4A级景区",
  address: "江苏省苏州市虎丘区",
  lng: 120.51483,
  lat: 31.31821,
  description: "以火山地貌和森林休闲著称。",
  recommend: 8
},
{
  name: "吴江黎里古镇",
  type: "4A级景区",
  address: "江苏省苏州市吴江区",
  lng: 120.70841,
  lat: 30.99983,
  description: "保存完好的江南水乡古镇。",
  recommend: 8
},
{
  name: "苏州湾黄金湖岸旅游区",
  type: "4A级景区",
  address: "江苏省苏州市吴江区",
  lng: 120.64983,
  lat: 31.12241,
  description: "太湖湖岸休闲度假旅游区。",
  recommend: 8
},
{
  name: "太仓沙溪古镇景区",
  type: "4A级景区",
  address: "江苏省苏州市太仓市",
  lng: 120.74841,
  lat: 31.57383,
  description: "太仓保存最完整的历史古镇。",
  recommend: 8
},
{
  name: "太仓现代农业园",
  type: "4A级景区",
  address: "江苏省苏州市太仓市",
  lng: 121.09321,
  lat: 31.49983,
  description: "现代农业展示与休闲体验园。",
  recommend: 7
},
{
  name: "昆山千灯古镇游览区",
  type: "4A级景区",
  address: "江苏省苏州市昆山市",
  lng: 120.97621,
  lat: 31.29283,
  description: "历史悠久的江南水乡古镇。",
  recommend: 9
},
{
  name: "昆山亭林园",
  type: "4A级景区",
  address: "江苏省苏州市昆山市",
  lng: 120.97983,
  lat: 31.38321,
  description: "以名人文化和园林景观著称。",
  recommend: 8
},
{
  name: "常熟方塔古迹名胜区",
  type: "4A级景区",
  address: "江苏省苏州市常熟市",
  lng: 120.75321,
  lat: 31.65483,
  description: "以方塔和古城遗迹为核心。",
  recommend: 8
},
{
  name: "常熟蒋巷乡村旅游景区",
  type: "4A级景区",
  address: "江苏省苏州市常熟市",
  lng: 120.71241,
  lat: 31.71521,
  description: "全国文明村乡村旅游示范区。",
  recommend: 7
},
{
  name: "常熟梅李聚沙园景区",
  type: "4A级景区",
  address: "江苏省苏州市常熟市",
  lng: 120.69383,
  lat: 31.61241,
  description: "以沙石文化和园林景观为特色。",
  recommend: 7
},

/* ================= 常州市 ================= */
{
  name: "常州红梅公园",
  type: "4A级景区",
  address: "江苏省常州市天宁区",
  lng: 119.97383,
  lat: 31.78641,
  description: "市中心历史悠久的城市公园。",
  recommend: 8
},
{
  name: "常州博物馆",
  type: "4A级景区",
  address: "江苏省常州市新北区",
  lng: 119.97921,
  lat: 31.83083,
  description: "展示常州历史文化与自然遗产。",
  recommend: 8
},
{
  name: "常州青枫公园",
  type: "4A级景区",
  address: "江苏省常州市钟楼区",
  lng: 119.91121,
  lat: 31.77783,
  description: "生态型城市湿地公园。",
  recommend: 7
},
{
  name: "常州古运河南大街文化旅游区",
  type: "4A级景区",
  address: "江苏省常州市钟楼区",
  lng: 119.94741,
  lat: 31.77421,
  description: "运河文化与历史街区结合。",
  recommend: 8
},
{
  name: "常州中华孝道园",
  type: "4A级景区",
  address: "江苏省常州市武进区",
  lng: 119.80683,
  lat: 31.72021,
  description: "以中华孝文化为主题。",
  recommend: 8
},
{
  name: "溧阳新四军江南指挥部纪念馆",
  type: "4A级景区",
  address: "江苏省常州市溧阳市",
  lng: 119.48521,
  lat: 31.40783,
  description: "新四军重要革命旧址。",
  recommend: 8
},
{
  name: "东方盐湖城·道天下景区",
  type: "5A级景区",
  address: "江苏省常州市金坛区",
  lng: 119.50841,
  lat: 31.64683,
  description: "以道教文化和盐文化为主题的度假区。",
  recommend: 10
},
{
  name: "花谷奇缘",
  type: "4A级景区",
  address: "江苏省常州市金坛区",
  lng: 119.52241,
  lat: 31.60483,
  description: "以花卉景观和亲子游乐为特色。",
  recommend: 8
},
{
  name: "茅山森林世界",
  type: "4A级景区",
  address: "江苏省常州市金坛区",
  lng: 119.57821,
  lat: 31.65521,
  description: "森林探险与户外休闲主题乐园。",
  recommend: 9
},

/* ================= 杭州市 ================= */
{
  name: "杭州宋城景区",
  type: "5A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.10283,
  lat: 30.17521,
  description: "以宋代文化为主题的大型文化演艺景区。",
  recommend: 10
},
{
  name: "良渚博物院景区",
  type: "4A级景区",
  address: "浙江省杭州市余杭区",
  lng: 120.01983,
  lat: 30.39421,
  description: "展示良渚文明的重要国家级博物馆。",
  recommend: 9
},
{
  name: "杭州塘栖古镇景区",
  type: "4A级景区",
  address: "浙江省杭州市临平区",
  lng: 120.18721,
  lat: 30.36683,
  description: "京杭大运河畔的千年水乡古镇。",
  recommend: 8
},
{
  name: "杭州乐园景区",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.27341,
  lat: 30.16883,
  description: "集游乐设施与主题演艺于一体的综合乐园。",
  recommend: 8
},
{
  name: "杭州中国丝绸博物馆景区",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.13421,
  lat: 30.21483,
  description: "中国唯一的国家级丝绸专题博物馆。",
  recommend: 9
},
{
  name: "杭州天目山景区",
  type: "4A级景区",
  address: "浙江省杭州市临安区",
  lng: 119.44183,
  lat: 30.35321,
  description: "以原始森林和生物多样性著称。",
  recommend: 9
},
{
  name: "杭州龙门古镇景区",
  type: "4A级景区",
  address: "浙江省杭州市富阳区",
  lng: 119.95621,
  lat: 29.90883,
  description: "孙权后裔聚居的千年古镇。",
  recommend: 8
},
{
  name: "杭州大明山风景区",
  type: "4A级景区",
  address: "浙江省杭州市临安区",
  lng: 119.08241,
  lat: 30.18883,
  description: "以高山峡谷和滑雪项目闻名。",
  recommend: 8
},
{
  name: "建德市严州古城景区",
  type: "4A级景区",
  address: "浙江省杭州市建德市",
  lng: 119.27783,
  lat: 29.48241,
  description: "保存完好的古城墙与府城格局。",
  recommend: 8
},
{
  name: "桐庐县瑶琳仙境景区",
  type: "4A级景区",
  address: "浙江省杭州市桐庐县",
  lng: 119.74241,
  lat: 29.92483,
  description: "大型石灰岩溶洞景观，被誉为地下艺术宫殿。",
  recommend: 9
},
{
  name: "淳安县下姜村景区",
  type: "4A级景区",
  address: "浙江省杭州市淳安县",
  lng: 119.04683,
  lat: 29.59821,
  description: "乡村振兴示范村，山水田园风光优美。",
  recommend: 8
},
{
  name: "杭州临安区青山湖景区",
  type: "4A级景区",
  address: "浙江省杭州市临安区",
  lng: 119.74083,
  lat: 30.23841,
  description: "湖泊湿地与城市休闲结合的景区。",
  recommend: 8
},
{
  name: "杭州富阳黄公望隐居地",
  type: "4A级景区",
  address: "浙江省杭州市富阳区",
  lng: 119.93983,
  lat: 30.01121,
  description: "元代画家黄公望晚年隐居地。",
  recommend: 7
},
{
  name: "杭州余杭梦想小镇",
  type: "4A级景区",
  address: "浙江省杭州市余杭区",
  lng: 120.03721,
  lat: 30.27883,
  description: "互联网创业与文化旅游融合小镇。",
  recommend: 7
},
{
  name: "杭州建德航空小镇",
  type: "4A级景区",
  address: "浙江省杭州市建德市",
  lng: 119.32041,
  lat: 29.52083,
  description: "以通航体验和航空文化为主题。",
  recommend: 7
},
{
  name: "杭州西湖龙坞茶镇",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.06241,
  lat: 30.14521,
  description: "西湖龙井茶核心产区，茶文化体验地。",
  recommend: 8
},
{
  name: "杭州富阳区富春桃源景区",
  type: "4A级景区",
  address: "浙江省杭州市富阳区",
  lng: 119.87283,
  lat: 29.99241,
  description: "溶洞、峡谷与田园风光结合的景区。",
  recommend: 8
},
{
  name: "杭州萧山区湘湖旅游度假区",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.23041,
  lat: 30.13883,
  description: "集湖泊景观、遗址公园与休闲度假于一体。",
  recommend: 9
},
{
  name: "杭州长乔极地海洋公园景区",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.27183,
  lat: 30.16041,
  description: "以极地和海洋动物展示为主题。",
  recommend: 8
},
{
  name: "杭州东方文化园",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.28741,
  lat: 30.17621,
  description: "弘扬中华传统文化的主题园区。",
  recommend: 7
},
{
  name: "杭州西湖区雷峰塔景区",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.14621,
  lat: 30.23183,
  description: "西湖十景之一，白蛇传文化地标。",
  recommend: 9
},
{
  name: "杭州西湖区浙江美术馆",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.15683,
  lat: 30.24341,
  description: "浙江省最高级别的公共美术馆。",
  recommend: 8
},
{
  name: "清河坊历史文化特色街区",
  type: "4A级景区",
  address: "浙江省杭州市上城区",
  lng: 120.17121,
  lat: 30.23783,
  description: "南宋御街核心历史文化街区。",
  recommend: 9
},
{
  name: "杭州拱墅区京杭大运河杭州景区",
  type: "5A级景区",
  address: "浙江省杭州市拱墅区",
  lng: 120.15421,
  lat: 30.29241,
  description: "世界文化遗产，大运河核心展示区。",
  recommend: 10
},
{
  name: "杭州野生动物世界景区",
  type: "4A级景区",
  address: "浙江省杭州市富阳区",
  lng: 119.99183,
  lat: 30.00121,
  description: "大型野生动物主题公园。",
  recommend: 9
},

/* ================= 淳安 / 千岛湖 ================= */
{
  name: "千岛湖石林景区",
  type: "4A级景区",
  address: "浙江省杭州市淳安县",
  lng: 118.97983,
  lat: 29.61583,
  description: "典型喀斯特地貌石林景观。",
  recommend: 8
},
{
  name: "千岛湖乐水小镇·文渊狮城景区",
  type: "4A级景区",
  address: "浙江省杭州市淳安县",
  lng: 119.09541,
  lat: 29.58321,
  description: "复建水下古城的文化旅游景区。",
  recommend: 8
},

/* ================= 宁波市 ================= */
{
  name: "宁波科学探索中心",
  type: "4A级景区",
  address: "浙江省宁波市鄞州区",
  lng: 121.55383,
  lat: 29.81741,
  description: "大型互动式科普体验馆。",
  recommend: 8
},
{
  name: "宁波余姚浙东抗日根据地旧址",
  type: "4A级景区",
  address: "浙江省宁波市余姚市",
  lng: 121.14921,
  lat: 29.98983,
  description: "重要的抗日战争革命遗址群。",
  recommend: 8
},

/* ================= 杭州市 ================= */
{
  name: "杭州宋城景区",
  type: "5A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.10283,
  lat: 30.17521,
  description: "以宋代文化为主题的大型文化演艺景区。",
  recommend: 10
},
{
  name: "良渚博物院景区",
  type: "4A级景区",
  address: "浙江省杭州市余杭区",
  lng: 120.01983,
  lat: 30.39421,
  description: "展示良渚文明的重要国家级博物馆。",
  recommend: 9
},
{
  name: "杭州塘栖古镇景区",
  type: "4A级景区",
  address: "浙江省杭州市临平区",
  lng: 120.18721,
  lat: 30.36683,
  description: "京杭大运河畔的千年水乡古镇。",
  recommend: 8
},
{
  name: "杭州乐园景区",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.27341,
  lat: 30.16883,
  description: "集游乐设施与主题演艺于一体的综合乐园。",
  recommend: 8
},
{
  name: "杭州中国丝绸博物馆景区",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.13421,
  lat: 30.21483,
  description: "中国唯一的国家级丝绸专题博物馆。",
  recommend: 9
},
{
  name: "杭州天目山景区",
  type: "4A级景区",
  address: "浙江省杭州市临安区",
  lng: 119.44183,
  lat: 30.35321,
  description: "以原始森林和生物多样性著称。",
  recommend: 9
},
{
  name: "杭州龙门古镇景区",
  type: "4A级景区",
  address: "浙江省杭州市富阳区",
  lng: 119.95621,
  lat: 29.90883,
  description: "孙权后裔聚居的千年古镇。",
  recommend: 8
},
{
  name: "杭州大明山风景区",
  type: "4A级景区",
  address: "浙江省杭州市临安区",
  lng: 119.08241,
  lat: 30.18883,
  description: "以高山峡谷和滑雪项目闻名。",
  recommend: 8
},
{
  name: "建德市严州古城景区",
  type: "4A级景区",
  address: "浙江省杭州市建德市",
  lng: 119.27783,
  lat: 29.48241,
  description: "保存完好的古城墙与府城格局。",
  recommend: 8
},
{
  name: "桐庐县瑶琳仙境景区",
  type: "4A级景区",
  address: "浙江省杭州市桐庐县",
  lng: 119.74241,
  lat: 29.92483,
  description: "大型石灰岩溶洞景观，被誉为地下艺术宫殿。",
  recommend: 9
},
{
  name: "淳安县下姜村景区",
  type: "4A级景区",
  address: "浙江省杭州市淳安县",
  lng: 119.04683,
  lat: 29.59821,
  description: "乡村振兴示范村，山水田园风光优美。",
  recommend: 8
},
{
  name: "杭州临安区青山湖景区",
  type: "4A级景区",
  address: "浙江省杭州市临安区",
  lng: 119.74083,
  lat: 30.23841,
  description: "湖泊湿地与城市休闲结合的景区。",
  recommend: 8
},
{
  name: "杭州富阳黄公望隐居地",
  type: "4A级景区",
  address: "浙江省杭州市富阳区",
  lng: 119.93983,
  lat: 30.01121,
  description: "元代画家黄公望晚年隐居地。",
  recommend: 7
},
{
  name: "杭州余杭梦想小镇",
  type: "4A级景区",
  address: "浙江省杭州市余杭区",
  lng: 120.03721,
  lat: 30.27883,
  description: "互联网创业与文化旅游融合小镇。",
  recommend: 7
},
{
  name: "杭州建德航空小镇",
  type: "4A级景区",
  address: "浙江省杭州市建德市",
  lng: 119.32041,
  lat: 29.52083,
  description: "以通航体验和航空文化为主题。",
  recommend: 7
},
{
  name: "杭州西湖龙坞茶镇",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.06241,
  lat: 30.14521,
  description: "西湖龙井茶核心产区，茶文化体验地。",
  recommend: 8
},
{
  name: "杭州富阳区富春桃源景区",
  type: "4A级景区",
  address: "浙江省杭州市富阳区",
  lng: 119.87283,
  lat: 29.99241,
  description: "溶洞、峡谷与田园风光结合的景区。",
  recommend: 8
},
{
  name: "杭州萧山区湘湖旅游度假区",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.23041,
  lat: 30.13883,
  description: "集湖泊景观、遗址公园与休闲度假于一体。",
  recommend: 9
},
{
  name: "杭州长乔极地海洋公园景区",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.27183,
  lat: 30.16041,
  description: "以极地和海洋动物展示为主题。",
  recommend: 8
},
{
  name: "杭州东方文化园",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.28741,
  lat: 30.17621,
  description: "弘扬中华传统文化的主题园区。",
  recommend: 7
},
{
  name: "浙旅院国际教育旅游体验区",
  type: "4A级景区",
  address: "浙江省杭州市萧山区",
  lng: 120.25621,
  lat: 30.18583,
  description: "以国际教育和旅游体验为特色。",
  recommend: 7
},
{
  name: "杭州西湖区雷峰塔景区",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.14621,
  lat: 30.23183,
  description: "西湖十景之一，白蛇传文化地标。",
  recommend: 9
},
{
  name: "杭州西湖区兰里景区",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.09241,
  lat: 30.19883,
  description: "以兰文化和田园风光为特色。",
  recommend: 7
},
{
  name: "杭州西湖区浙江美术馆",
  type: "4A级景区",
  address: "浙江省杭州市西湖区",
  lng: 120.15683,
  lat: 30.24341,
  description: "浙江省最高级别的公共美术馆。",
  recommend: 8
},
{
  name: "清河坊历史文化特色街区",
  type: "4A级景区",
  address: "浙江省杭州市上城区",
  lng: 120.17121,
  lat: 30.23783,
  description: "南宋御街核心历史文化街区。",
  recommend: 9
},
{
  name: "杭州皋亭山景区",
  type: "4A级景区",
  address: "浙江省杭州市上城区",
  lng: 120.20183,
  lat: 30.31241,
  description: "杭州城北的生态休闲景区。",
  recommend: 7
},
{
  name: "玉皇山南基金小镇景区",
  type: "4A级景区",
  address: "浙江省杭州市上城区",
  lng: 120.15841,
  lat: 30.22183,
  description: "金融产业与历史文化融合的特色小镇。",
  recommend: 7
},
{
  name: "杭州市超山景区",
  type: "4A级景区",
  address: "浙江省杭州市临平区",
  lng: 120.23421,
  lat: 30.41283,
  description: "以梅花景观闻名的风景名胜区。",
  recommend: 8
},
{
  name: "浙西大峡谷景区",
  type: "4A级景区",
  address: "浙江省杭州市临安区",
  lng: 119.10241,
  lat: 30.15683,
  description: "以峡谷地貌和漂流项目著称。",
  recommend: 8
},
{
  name: "太湖源景区",
  type: "4A级景区",
  address: "浙江省杭州市临安区",
  lng: 119.51241,
  lat: 30.31283,
  description: "太湖源头生态保护区。",
  recommend: 8
},
{
  name: "建德市灵栖洞景区",
  type: "4A级景区",
  address: "浙江省杭州市建德市",
  lng: 119.30241,
  lat: 29.51283,
  description: "以溶洞景观和地下河为特色。",
  recommend: 8
},
{
  name: "建德市大慈岩风景区",
  type: "4A级景区",
  address: "浙江省杭州市建德市",
  lng: 119.31283,
  lat: 29.49821,
  description: "以悬空寺和佛教文化闻名。",
  recommend: 8
},
{
  name: "建德市七里扬帆景区",
  type: "4A级景区",
  address: "浙江省杭州市建德市",
  lng: 119.32841,
  lat: 29.48583,
  description: "富春江上的山水画廊景区。",
  recommend: 8
},
{
  name: "京杭大运河杭州景区",
  type: "5A级景区",
  address: "浙江省杭州市拱墅区",
  lng: 120.15421,
  lat: 30.29241,
  description: "世界文化遗产，大运河核心展示区。",
  recommend: 10
},
{
  name: "杭州野生动物世界景区",
  type: "4A级景区",
  address: "浙江省杭州市富阳区",
  lng: 119.99183,
  lat: 30.00121,
  description: "大型野生动物主题公园。",
  recommend: 9
},
{
  name: "双溪漂流景区",
  type: "4A级景区",
  address: "浙江省杭州市余杭区",
  lng: 119.91241,
  lat: 30.41283,
  description: "以竹筏漂流和亲水体验为特色。",
  recommend: 8
},
{
  name: "山沟沟旅游景区",
  type: "4A级景区",
  address: "浙江省杭州市余杭区",
  lng: 119.87241,
  lat: 30.45683,
  description: "以乡村生态和瀑布群为特色。",
  recommend: 8
},
{
  name: "径山景区",
  type: "4A级景区",
  address: "浙江省杭州市余杭区",
  lng: 119.80241,
  lat: 30.39883,
  description: "以径山寺和茶文化闻名。",
  recommend: 8
},
{
  name: "垂云通天河景区",
  type: "4A级景区",
  address: "浙江省杭州市桐庐县",
  lng: 119.71241,
  lat: 29.85683,
  description: "以地下河和溶洞景观为特色。",
  recommend: 8
},
{
  name: "江南古村落风景区",
  type: "4A级景区",
  address: "浙江省杭州市桐庐县",
  lng: 119.68241,
  lat: 29.81283,
  description: "保存完好的明清古村落群。",
  recommend: 8
},
{
  name: "天子地生态风景旅游区",
  type: "4A级景区",
  address: "浙江省杭州市桐庐县",
  lng: 119.65241,
  lat: 29.76883,
  description: "以生态保护和自然风光为特色。",
  recommend: 8
},
{
  name: "严子陵钓台景区",
  type: "4A级景区",
  address: "浙江省杭州市桐庐县",
  lng: 119.70241,
  lat: 29.81283,
  description: "东汉隐士严子陵垂钓处。",
  recommend: 8
},
{
  name: "浪石金滩景区",
  type: "4A级景区",
  address: "浙江省杭州市桐庐县",
  lng: 119.63241,
  lat: 29.82883,
  description: "以沙滩和亲水娱乐为特色。",
  recommend: 7
},
{
  name: "千岛湖石林景区",
  type: "4A级景区",
  address: "浙江省杭州市淳安县",
  lng: 118.97983,
  lat: 29.61583,
  description: "典型喀斯特地貌石林景观。",
  recommend: 8
},
{
  name: "千岛湖乐水小镇·文渊狮城景区",
  type: "4A级景区",
  address: "浙江省杭州市淳安县",
  lng: 119.09541,
  lat: 29.58321,
  description: "复建水下古城的文化旅游景区。",
  recommend: 8
},

/* ================= 宁波市 ================= */
{
  name: "宁波科学探索中心",
  type: "4A级景区",
  address: "浙江省宁波市鄞州区",
  lng: 121.55383,
  lat: 29.81741,
  description: "大型互动式科普体验馆。",
  recommend: 8
},
{
  name: "宁波余姚浙东抗日根据地旧址",
  type: "4A级景区",
  address: "浙江省宁波市余姚市",
  lng: 121.14921,
  lat: 29.98983,
  description: "重要的抗日战争革命遗址群。",
  recommend: 8
},

/* ================= 宁波市 · 慈溪 ================= */
{
  name: "宁波慈溪鸣鹤古镇景区",
  type: "4A级景区",
  address: "浙江省宁波市慈溪市",
  lng: 121.23841,
  lat: 30.17683,
  description: "保存完好的江南水乡古镇，历史文化底蕴深厚。",
  recommend: 8
},

/* ================= 宁波市 · 奉化 ================= */
{
  name: "宁波奉化博物馆",
  type: "4A级景区",
  address: "浙江省宁波市奉化区",
  lng: 121.40783,
  lat: 29.66241,
  description: "系统展示奉化历史文化与文物。",
  recommend: 7
},
{
  name: "宁波奉化黄贤森林公园",
  type: "4A级景区",
  address: "浙江省宁波市奉化区",
  lng: 121.45841,
  lat: 29.73483,
  description: "山林生态与休闲度假相结合的森林公园。",
  recommend: 8
},

/* ================= 宁波市 · 宁海 ================= */
{
  name: "宁海县前童古镇旅游区",
  type: "4A级景区",
  address: "浙江省宁波市宁海县",
  lng: 121.35841,
  lat: 29.39783,
  description: "以明清古民居群闻名的历史古镇。",
  recommend: 9
},
{
  name: "宁海县伍山石窟旅游区",
  type: "4A级景区",
  address: "浙江省宁波市宁海县",
  lng: 121.46983,
  lat: 29.30921,
  description: "规模宏大的人工石窟群景观。",
  recommend: 8
},
{
  name: "宁海县森林温泉景区",
  type: "4A级景区",
  address: "浙江省宁波市宁海县",
  lng: 121.25521,
  lat: 29.43283,
  description: "以森林温泉养生为特色的度假景区。",
  recommend: 8
},

/* ================= 宁波市 · 象山 ================= */
{
  name: "松兰山海滨旅游度假区",
  type: "4A级景区",
  address: "浙江省宁波市象山县",
  lng: 121.90321,
  lat: 29.47883,
  description: "以沙滩海滨和休闲度假著称。",
  recommend: 9
},
{
  name: "中国渔村",
  type: "4A级景区",
  address: "浙江省宁波市象山县",
  lng: 121.87041,
  lat: 29.46621,
  description: "以渔文化和海滨娱乐为主题。",
  recommend: 8
},
{
  name: "象山影视城景区",
  type: "4A级景区",
  address: "浙江省宁波市象山县",
  lng: 121.84783,
  lat: 29.35321,
  description: "大型影视拍摄基地和旅游景区。",
  recommend: 9
},
{
  name: "石浦渔港古城",
  type: "4A级景区",
  address: "浙江省宁波市象山县",
  lng: 121.92421,
  lat: 29.21083,
  description: "中国保存最完整的渔港古城之一。",
  recommend: 9
},
{
  name: "阿拉的海水上乐园景区",
  type: "4A级景区",
  address: "浙江省宁波市象山县",
  lng: 121.85641,
  lat: 29.45421,
  description: "大型滨海水上主题乐园。",
  recommend: 8
},

/* ================= 宁波市 · 鄞州 ================= */
{
  name: "宁波海洋世界",
  type: "4A级景区",
  address: "浙江省宁波市鄞州区",
  lng: 121.56041,
  lat: 29.84383,
  description: "集海洋生物展示与科普教育于一体。",
  recommend: 8
},
{
  name: "天宫庄园休闲旅游区",
  type: "4A级景区",
  address: "浙江省宁波市鄞州区",
  lng: 121.48983,
  lat: 29.82321,
  description: "农业观光与休闲体验结合。",
  recommend: 7
},
{
  name: "宁波博物馆",
  type: "5A级景区",
  address: "浙江省宁波市鄞州区",
  lng: 121.55783,
  lat: 29.81521,
  description: "展示宁波城市发展与历史文化的地标性建筑。",
  recommend: 10
},
{
  name: "东钱湖雅戈尔动物园",
  type: "4A级景区",
  address: "浙江省宁波市鄞州区",
  lng: 121.64841,
  lat: 29.75883,
  description: "集动物观赏与亲子体验于一体。",
  recommend: 8
},
{
  name: "东钱湖马山休闲旅游区",
  type: "4A级景区",
  address: "浙江省宁波市鄞州区",
  lng: 121.62241,
  lat: 29.76683,
  description: "湖泊、山地与度假休闲结合。",
  recommend: 8
},

/* ================= 宁波市 · 海曙 ================= */
{
  name: "梁祝文化园",
  type: "4A级景区",
  address: "浙江省宁波市海曙区",
  lng: 121.46921,
  lat: 29.89783,
  description: "以梁祝爱情文化为主题。",
  recommend: 8
},
{
  name: "五龙潭风景名胜区",
  type: "4A级景区",
  address: "浙江省宁波市海曙区",
  lng: 121.35083,
  lat: 29.90421,
  description: "以山水瀑潭和自然景观为特色。",
  recommend: 8
},

/* ================= 宁波市 · 江北 ================= */
{
  name: "宁波保国寺",
  type: "4A级景区",
  address: "浙江省宁波市江北区",
  lng: 121.50641,
  lat: 29.95283,
  description: "中国现存最古老的木结构建筑之一。",
  recommend: 9
},
{
  name: "慈城古县城景区",
  type: "4A级景区",
  address: "浙江省宁波市江北区",
  lng: 121.45483,
  lat: 29.97921,
  description: "保存完整的古县城格局。",
  recommend: 9
},
{
  name: "宁波老外滩景区",
  type: "4A级景区",
  address: "浙江省宁波市江北区",
  lng: 121.55321,
  lat: 29.88583,
  description: "融合历史建筑与现代休闲的滨江街区。",
  recommend: 9
},
{
  name: "绿野山居景区",
  type: "4A级景区",
  address: "浙江省宁波市江北区",
  lng: 121.43241,
  lat: 29.93883,
  description: "生态乡村与休闲度假区。",
  recommend: 7
},

/* ================= 宁波市 · 镇海 ================= */
{
  name: "招宝山旅游风景区",
  type: "4A级景区",
  address: "浙江省宁波市镇海区",
  lng: 121.71683,
  lat: 29.94921,
  description: "海防文化与山海景观相结合。",
  recommend: 8
},
{
  name: "九龙湖旅游区",
  type: "4A级景区",
  address: "浙江省宁波市镇海区",
  lng: 121.62121,
  lat: 29.99683,
  description: "湖泊湿地与度假休闲区。",
  recommend: 8
},
{
  name: "宁波帮博物馆",
  type: "4A级景区",
  address: "浙江省宁波市镇海区",
  lng: 121.70783,
  lat: 29.94741,
  description: "展示宁波帮发展史的专题博物馆。",
  recommend: 8
},

/* ================= 宁波市 · 北仑 ================= */
{
  name: "九峰山旅游区",
  type: "4A级景区",
  address: "浙江省宁波市北仑区",
  lng: 121.87841,
  lat: 29.89283,
  description: "山岳森林与宗教文化结合的景区。",
  recommend: 8
},
{
  name: "中国港口博物馆",
  type: "4A级景区",
  address: "浙江省宁波市北仑区",
  lng: 121.88583,
  lat: 29.90521,
  description: "全国首座港口主题博物馆。",
  recommend: 8
},

/* ================= 宁波杭州湾 ================= */
{
  name: "杭州湾海天一洲景区",
  type: "4A级景区",
  address: "浙江省宁波市慈溪市",
  lng: 121.20421,
  lat: 30.25583,
  description: "跨海大桥观景与海洋文化体验区。",
  recommend: 8
},
{
  name: "杭州湾海皮岛景区",
  type: "4A级景区",
  address: "浙江省宁波市慈溪市",
  lng: 121.24841,
  lat: 30.29283,
  description: "以海洋主题娱乐为特色。",
  recommend: 7
},
{
  name: "杭州湾方特东方神画",
  type: "5A级景区",
  address: "浙江省宁波市慈溪市",
  lng: 121.26883,
  lat: 30.30841,
  description: "以中华传统文化为主题的大型主题乐园。",
  recommend: 10
},

/* ================= 温州市 ================= */
{
  name: "苍南碗窑景区",
  type: "4A级景区",
  address: "浙江省温州市苍南县",
  lng: 120.49841,
  lat: 27.39183,
  description: "以古瓷窑遗址和山村风貌著称。",
  recommend: 8
},
{
  name: "文成森林氧吧小镇",
  type: "4A级景区",
  address: "浙江省温州市文成县",
  lng: 120.12241,
  lat: 27.80883,
  description: "以森林康养和生态旅游为主题。",
  recommend: 8
},
{
  name: "三垟湿地景区",
  type: "4A级景区",
  address: "浙江省温州市瓯海区",
  lng: 120.70841,
  lat: 27.96483,
  description: "城市湿地生态公园。",
  recommend: 8
},
{
  name: "铁定溜溜景区",
  type: "4A级景区",
  address: "浙江省温州市乐清市",
  lng: 121.04841,
  lat: 28.17083,
  description: "以户外探险和亲子体验为特色。",
  recommend: 7
},
{
  name: "浙南平阳抗日根据地",
  type: "4A级景区",
  address: "浙江省温州市平阳县",
  lng: 120.56683,
  lat: 27.63741,
  description: "重要红色革命教育基地。",
  recommend: 8
},
{
  name: "苏步青故里文化旅游区",
  type: "4A级景区",
  address: "浙江省温州市平阳县",
  lng: 120.54841,
  lat: 27.62383,
  description: "纪念著名数学家苏步青。",
  recommend: 7
},
{
  name: "中雁荡山旅游区",
  type: "4A级景区",
  address: "浙江省温州市乐清市",
  lng: 121.05841,
  lat: 28.23883,
  description: "雁荡山重要组成部分，山水奇秀。",
  recommend: 9
},
{
  name: "温州乐园",
  type: "4A级景区",
  address: "浙江省温州市瓯海区",
  lng: 120.68241,
  lat: 27.98983,
  description: "综合性主题游乐园。",
  recommend: 8
},
{
  name: "泽雅景区",
  type: "4A级景区",
  address: "浙江省温州市瓯海区",
  lng: 120.57183,
  lat: 27.93521,
  description: "以瀑布群和纸山文化著称。",
  recommend: 8
},
{
  name: "洞头景区",
  type: "4A级景区",
  address: "浙江省温州市洞头区",
  lng: 121.15683,
  lat: 27.83683,
  description: "海岛风光与渔家文化结合。",
  recommend: 9
},
{
  name: "江心屿景区",
  type: "4A级景区",
  address: "浙江省温州市鹿城区",
  lng: 120.64841,
  lat: 28.01883,
  description: "瓯江中的历史文化名岛。",
  recommend: 9
},
{
  name: "温州南塘文化旅游区",
  type: "4A级景区",
  address: "浙江省温州市鹿城区",
  lng: 120.66321,
  lat: 28.00321,
  description: "集历史街区与夜游经济于一体。",
  recommend: 8
},

/* ================= 温州市 ================= */
{
  name: "温州文成县铜铃山森林公园",
  type: "4A级景区",
  address: "浙江省温州市文成县",
  lng: 120.08321,
  lat: 27.78983,
  description: "以峡谷飞瀑和原始森林生态著称。",
  recommend: 8
},
{
  name: "南麂列岛景区",
  type: "5A级景区",
  address: "浙江省温州市平阳县",
  lng: 121.08383,
  lat: 27.46521,
  description: "中国最美海岛之一，贝藻王国。",
  recommend: 10
},
{
  name: "南雁荡山景区",
  type: "4A级景区",
  address: "浙江省温州市平阳县",
  lng: 120.53421,
  lat: 27.53183,
  description: "以峰林、瀑布和山水风光闻名。",
  recommend: 9
},
{
  name: "乌岩岭景区",
  type: "4A级景区",
  address: "浙江省温州市泰顺县",
  lng: 119.99241,
  lat: 27.51583,
  description: "国家级自然保护区，生物多样性丰富。",
  recommend: 9
},
{
  name: "廊桥文化园景区",
  type: "4A级景区",
  address: "浙江省温州市泰顺县",
  lng: 119.71883,
  lat: 27.55841,
  description: "集中展示中国木拱廊桥文化。",
  recommend: 8
},

/* ================= 湖州市 ================= */
{
  name: "德清庾村景区",
  type: "4A级景区",
  address: "浙江省湖州市德清县",
  lng: 119.88021,
  lat: 30.57983,
  description: "莫干山脚下的文创休闲村落。",
  recommend: 8
},
{
  name: "云上草原景区",
  type: "4A级景区",
  address: "浙江省湖州市安吉县",
  lng: 119.55321,
  lat: 30.44583,
  description: "高山草甸与户外运动主题景区。",
  recommend: 9
},
{
  name: "太湖溇港景区",
  type: "4A级景区",
  address: "浙江省湖州市吴兴区",
  lng: 120.11683,
  lat: 30.89921,
  description: "太湖水乡传统溇港文化景观。",
  recommend: 8
},
{
  name: "莫干山风景区",
  type: "5A级景区",
  address: "浙江省湖州市德清县",
  lng: 119.87841,
  lat: 30.58983,
  description: "中国四大避暑胜地之一。",
  recommend: 10
},
{
  name: "下渚湖湿地风景区",
  type: "4A级景区",
  address: "浙江省湖州市德清县",
  lng: 120.03783,
  lat: 30.54421,
  description: "江南湿地水网生态系统。",
  recommend: 8
},
{
  name: "中国竹子博览园",
  type: "4A级景区",
  address: "浙江省湖州市安吉县",
  lng: 119.68521,
  lat: 30.63783,
  description: "以竹文化和竹景观为主题。",
  recommend: 8
},
{
  name: "浙北大峡谷景区",
  type: "4A级景区",
  address: "浙江省湖州市安吉县",
  lng: 119.47383,
  lat: 30.51121,
  description: "以峡谷地貌和溪流瀑布为特色。",
  recommend: 8
},
{
  name: "江南天池景区",
  type: "4A级景区",
  address: "浙江省湖州市安吉县",
  lng: 119.51021,
  lat: 30.47083,
  description: "高山水库与度假休闲区。",
  recommend: 8
},
{
  name: "浪漫山川景区",
  type: "4A级景区",
  address: "浙江省湖州市安吉县",
  lng: 119.62683,
  lat: 30.60641,
  description: "以乡村风情和慢生活著称。",
  recommend: 7
},
{
  name: "移沿山生态景区",
  type: "4A级景区",
  address: "浙江省湖州市吴兴区",
  lng: 120.08841,
  lat: 30.74683,
  description: "生态修复与山林休闲结合。",
  recommend: 7
},
{
  name: "湖州丝绸小镇景区",
  type: "4A级景区",
  address: "浙江省湖州市吴兴区",
  lng: 120.06683,
  lat: 30.87183,
  description: "展示湖州丝绸文化与产业。",
  recommend: 7
},
{
  name: "金钉子远古世界景区",
  type: "4A级景区",
  address: "浙江省湖州市长兴县",
  lng: 119.88841,
  lat: 31.04883,
  description: "全球地质年代标准点所在地。",
  recommend: 8
},
{
  name: "中国扬子鳄村景区",
  type: "4A级景区",
  address: "浙江省湖州市长兴县",
  lng: 119.88121,
  lat: 31.02083,
  description: "扬子鳄保护与科普基地。",
  recommend: 7
},
{
  name: "太湖图影生态湿地文化园景区",
  type: "4A级景区",
  address: "浙江省湖州市长兴县",
  lng: 120.08683,
  lat: 31.03721,
  description: "太湖湿地生态与渔文化展示区。",
  recommend: 7
},
{
  name: "荻港景区",
  type: "4A级景区",
  address: "浙江省湖州市南浔区",
  lng: 120.33041,
  lat: 30.89283,
  description: "典型江南水乡古港口。",
  recommend: 8
},
{
  name: "新市古镇景区",
  type: "4A级景区",
  address: "浙江省湖州市德清县",
  lng: 120.01121,
  lat: 30.50183,
  description: "保存完好的运河古镇。",
  recommend: 8
},

/* ================= 嘉兴市 ================= */
{
  name: "银杏天鹅湖景区",
  type: "4A级景区",
  address: "浙江省嘉兴市秀洲区",
  lng: 120.72041,
  lat: 30.81883,
  description: "以银杏林和湖泊生态为特色。",
  recommend: 7
},
{
  name: "盐官观潮景区",
  type: "5A级景区",
  address: "浙江省嘉兴市海宁市",
  lng: 120.68421,
  lat: 30.40383,
  description: "世界闻名的钱塘江观潮胜地。",
  recommend: 10
},
{
  name: "中国海宁皮革城景区",
  type: "4A级景区",
  address: "浙江省嘉兴市海宁市",
  lng: 120.70583,
  lat: 30.52641,
  description: "集购物与旅游于一体的商业景区。",
  recommend: 8
},
{
  name: "南北湖风景区",
  type: "4A级景区",
  address: "浙江省嘉兴市海盐县",
  lng: 120.93783,
  lat: 30.48921,
  description: "山海湖相连的独特自然景观。",
  recommend: 8
},
{
  name: "东湖景区",
  type: "4A级景区",
  address: "浙江省嘉兴市平湖市",
  lng: 121.01521,
  lat: 30.69883,
  description: "城市湖泊型园林景区。",
  recommend: 7
},
{
  name: "图博中心",
  type: "4A级景区",
  address: "浙江省嘉兴市嘉善县",
  lng: 120.93241,
  lat: 30.82921,
  description: "图书馆与博物馆综合文化中心。",
  recommend: 7
},
{
  name: "梅花洲景区",
  type: "4A级景区",
  address: "浙江省嘉兴市南湖区",
  lng: 120.79883,
  lat: 30.74321,
  description: "运河古镇与江南民居结合。",
  recommend: 8
},
{
  name: "绮园景区",
  type: "4A级景区",
  address: "浙江省嘉兴市海盐县",
  lng: 120.94241,
  lat: 30.53083,
  description: "江南私家园林代表。",
  recommend: 8
},

/* ================= 绍兴市 ================= */
{
  name: "安昌古镇",
  type: "4A级景区",
  address: "浙江省绍兴市柯桥区",
  lng: 120.43021,
  lat: 30.10783,
  description: "以腊味和水乡风情闻名。",
  recommend: 9
},
{
  name: "柯岩风景区",
  type: "4A级景区",
  address: "浙江省绍兴市柯桥区",
  lng: 120.39841,
  lat: 30.05883,
  description: "古采石遗址与水乡结合。",
  recommend: 8
},
{
  name: "华东国际珠宝城",
  type: "4A级景区",
  address: "浙江省绍兴市诸暨市",
  lng: 120.23521,
  lat: 29.71383,
  description: "以珍珠交易与展示为核心。",
  recommend: 7
},
{
  name: "中华孝德园",
  type: "4A级景区",
  address: "浙江省绍兴市上虞区",
  lng: 120.90421,
  lat: 30.04683,
  description: "弘扬中华孝文化主题园区。",
  recommend: 7
},
{
  name: "十九峰景区",
  type: "4A级景区",
  address: "浙江省绍兴市新昌县",
  lng: 120.91383,
  lat: 29.50121,
  description: "以丹霞地貌和奇峰著称。",
  recommend: 9
},
{
  name: "丝绸世界旅游区",
  type: "4A级景区",
  address: "浙江省绍兴市新昌县",
  lng: 120.89241,
  lat: 29.51683,
  description: "展示传统丝绸工艺。",
  recommend: 7
},
{
  name: "大佛寺文化旅游区",
  type: "4A级景区",
  address: "浙江省绍兴市新昌县",
  lng: 120.90421,
  lat: 29.50783,
  description: "以石窟大佛和佛教文化闻名。",
  recommend: 9
},
{
  name: "兰亭景区",
  type: "4A级景区",
  address: "浙江省绍兴市柯桥区",
  lng: 120.48921,
  lat: 29.99583,
  description: "书法圣地，王羲之兰亭序诞生地。",
  recommend: 10
},
{
  name: "东湖景区",
  type: "4A级景区",
  address: "浙江省绍兴市越城区",
  lng: 120.60241,
  lat: 29.99521,
  description: "以采石遗湖和石桥景观著称。",
  recommend: 8
},
{
  name: "覆卮山景区",
  type: "4A级景区",
  address: "浙江省绍兴市上虞区",
  lng: 120.88783,
  lat: 29.88921,
  description: "以梯田花海和高山景观闻名。",
  recommend: 8
},
{
  name: "五泄风景区",
  type: "4A级景区",
  address: "浙江省绍兴市诸暨市",
  lng: 120.15021,
  lat: 29.70383,
  description: "五级瀑布群组成的山水景区。",
  recommend: 9
},

/* ================= 金华市 ================= */
{
  name: "武义温泉小镇",
  type: "4A级景区",
  address: "浙江省金华市武义县",
  lng: 119.81683,
  lat: 28.88921,
  description: "以温泉康养为核心的度假小镇。",
  recommend: 9
},
{
  name: "金华之光景区",
  type: "4A级景区",
  address: "浙江省金华市婺城区",
  lng: 119.65183,
  lat: 29.09821,
  description: "城市文化与夜游地标。",
  recommend: 7
},
{
  name: "卢宅景区",
  type: "4A级景区",
  address: "浙江省金华市东阳市",
  lng: 120.22541,
  lat: 29.27283,
  description: "明清古建筑群代表。",
  recommend: 8
},
{
  name: "义乌国际商贸城购物旅游区",
  type: "4A级景区",
  address: "浙江省金华市义乌市",
  lng: 120.09841,
  lat: 29.31583,
  description: "全球最大的小商品集散中心。",
  recommend: 9
},
{
  name: "大红岩风景区",
  type: "4A级景区",
  address: "浙江省金华市武义县",
  lng: 119.76383,
  lat: 28.82241,
  description: "以丹霞地貌和峡谷瀑布著称。",
  recommend: 8
},
{
  name: "舞龙峡景区",
  type: "4A级景区",
  address: "浙江省金华市磐安县",
  lng: 120.42021,
  lat: 29.08283,
  description: "峡谷探险与生态旅游结合。",
  recommend: 8
},
{
  name: "诸葛八卦村景区",
  type: "4A级景区",
  address: "浙江省金华市兰溪市",
  lng: 119.57183,
  lat: 29.29241,
  description: "以八卦布局闻名的古村落。",
  recommend: 9
},

/* ================= 金华市 ================= */
{
  name: "六洞山风景区",
  type: "4A级景区",
  address: "浙江省金华市兰溪市",
  lng: 119.50183,
  lat: 29.24521,
  description: "以溶洞群和山水景观著称。",
  recommend: 8
},
{
  name: "璟园古民居旅游区",
  type: "4A级景区",
  address: "浙江省金华市武义县",
  lng: 119.78421,
  lat: 28.88683,
  description: "集中展示明清古民居建筑艺术。",
  recommend: 8
},
{
  name: "仙华山风景名胜区",
  type: "4A级景区",
  address: "浙江省金华市浦江县",
  lng: 119.91041,
  lat: 29.50321,
  description: "以奇峰怪石和道教文化闻名。",
  recommend: 9
},
{
  name: "神丽峡景区",
  type: "4A级景区",
  address: "浙江省金华市浦江县",
  lng: 119.94883,
  lat: 29.48621,
  description: "峡谷、瀑布与溪流景观丰富。",
  recommend: 8
},
{
  name: "百杖潭景区",
  type: "4A级景区",
  address: "浙江省金华市磐安县",
  lng: 120.46521,
  lat: 29.04583,
  description: "以深潭瀑布和峡谷景观为特色。",
  recommend: 8
},
{
  name: "方岩风景区",
  type: "4A级景区",
  address: "浙江省金华市永康市",
  lng: 120.01883,
  lat: 28.99641,
  description: "丹霞地貌与佛教文化相结合。",
  recommend: 9
},
{
  name: "灵江源森林公园景区",
  type: "4A级景区",
  address: "浙江省金华市磐安县",
  lng: 120.50741,
  lat: 29.08321,
  description: "灵江发源地，原始森林生态优良。",
  recommend: 8
},

/* ================= 衢州市 ================= */
{
  name: "梅树底景区",
  type: "4A级景区",
  address: "浙江省衢州市常山县",
  lng: 118.50621,
  lat: 28.93783,
  description: "高山草甸与峡谷瀑布景观。",
  recommend: 8
},
{
  name: "大陈古村景区",
  type: "4A级景区",
  address: "浙江省衢州市江山市",
  lng: 118.66841,
  lat: 28.52241,
  description: "保存完好的传统古村落。",
  recommend: 8
},
{
  name: "龙游石窟旅游区",
  type: "4A级景区",
  address: "浙江省衢州市龙游县",
  lng: 119.17241,
  lat: 28.99483,
  description: "世界罕见的大型地下人工石窟群。",
  recommend: 9
},
{
  name: "衢州民居苑景区",
  type: "4A级景区",
  address: "浙江省衢州市柯城区",
  lng: 118.85921,
  lat: 28.97183,
  description: "集中展示浙西传统民居建筑。",
  recommend: 7
},
{
  name: "桃源七里景区",
  type: "4A级景区",
  address: "浙江省衢州市柯城区",
  lng: 118.82841,
  lat: 28.95521,
  description: "城市近郊休闲生态景区。",
  recommend: 7
},
{
  name: "仙霞关景区",
  type: "4A级景区",
  address: "浙江省衢州市江山市",
  lng: 118.58683,
  lat: 28.47421,
  description: "古代军事要塞与山水景观结合。",
  recommend: 8
},
{
  name: "药王山景区",
  type: "4A级景区",
  address: "浙江省衢州市衢江区",
  lng: 118.96321,
  lat: 28.90383,
  description: "中医药文化与山林景观融合。",
  recommend: 7
},
{
  name: "天脊龙门景区",
  type: "4A级景区",
  address: "浙江省衢州市衢江区",
  lng: 118.90341,
  lat: 28.86783,
  description: "峡谷险峰与奇石景观著称。",
  recommend: 8
},
{
  name: "三衢石林风景区",
  type: "4A级景区",
  address: "浙江省衢州市衢江区",
  lng: 118.94883,
  lat: 28.83121,
  description: "典型喀斯特石林地貌。",
  recommend: 8
},

/* ================= 舟山市 ================= */
{
  name: "嵊泗东海五渔村",
  type: "4A级景区",
  address: "浙江省舟山市嵊泗县",
  lng: 122.44021,
  lat: 30.73321,
  description: "海岛渔村风貌与休闲度假结合。",
  recommend: 8
},
{
  name: "朱家尖南沙景区",
  type: "4A级景区",
  address: "浙江省舟山市普陀区",
  lng: 122.39321,
  lat: 29.91583,
  description: "舟山国际沙雕节举办地。",
  recommend: 9
},
{
  name: "嵊泗花鸟岛景区",
  type: "4A级景区",
  address: "浙江省舟山市嵊泗县",
  lng: 122.68183,
  lat: 30.84521,
  description: "以灯塔、花海和文艺氛围著称。",
  recommend: 9
},
{
  name: "椒江大陈岛景区",
  type: "4A级景区",
  address: "浙江省台州市椒江区",
  lng: 121.99841,
  lat: 28.50321,
  description: "海岛风光与红色文化结合。",
  recommend: 8
},
{
  name: "朱家尖旅游景区",
  type: "5A级景区",
  address: "浙江省舟山市普陀区",
  lng: 122.38421,
  lat: 29.92241,
  description: "集沙滩、佛教文化和海岛风光于一体。",
  recommend: 10
},
{
  name: "桃花岛风景旅游区",
  type: "4A级景区",
  address: "浙江省舟山市普陀区",
  lng: 122.28021,
  lat: 29.79583,
  description: "金庸武侠文化主题海岛。",
  recommend: 9
},

/* ================= 台州市 ================= */
{
  name: "仙居氧吧小镇",
  type: "4A级景区",
  address: "浙江省台州市仙居县",
  lng: 120.66741,
  lat: 28.75383,
  description: "森林康养与慢生活体验小镇。",
  recommend: 8
},
{
  name: "天台山大瀑布",
  type: "4A级景区",
  address: "浙江省台州市天台县",
  lng: 121.02241,
  lat: 29.14183,
  description: "落差巨大的阶梯式瀑布群。",
  recommend: 9
},
{
  name: "黄岩博物馆",
  type: "4A级景区",
  address: "浙江省台州市黄岩区",
  lng: 121.26383,
  lat: 28.65121,
  description: "展示黄岩历史文化与民俗。",
  recommend: 7
},
{
  name: "大鹿岛景区",
  type: "4A级景区",
  address: "浙江省台州市玉环市",
  lng: 121.31683,
  lat: 28.10921,
  description: "海岛生态与休闲度假胜地。",
  recommend: 9
},
{
  name: "漩门湾观光农业园景区",
  type: "4A级景区",
  address: "浙江省台州市玉环市",
  lng: 121.28521,
  lat: 28.16183,
  description: "现代农业与休闲观光结合。",
  recommend: 7
},
{
  name: "漩门湾国家湿地公园",
  type: "4A级景区",
  address: "浙江省台州市玉环市",
  lng: 121.27383,
  lat: 28.17641,
  description: "滨海湿地生态保护区。",
  recommend: 8
},
{
  name: "永安溪休闲绿道景区",
  type: "4A级景区",
  address: "浙江省台州市仙居县",
  lng: 120.73921,
  lat: 28.84683,
  description: "滨水休闲骑行与慢游线路。",
  recommend: 7
},
{
  name: "长屿硐天景区",
  type: "4A级景区",
  address: "浙江省台州市温岭市",
  lng: 121.41521,
  lat: 28.41083,
  description: "规模宏大的人工石硐群。",
  recommend: 9
},
{
  name: "方山景区",
  type: "4A级景区",
  address: "浙江省台州市温岭市",
  lng: 121.32741,
  lat: 28.44783,
  description: "火山岩地貌与宗教文化结合。",
  recommend: 8
},
{
  name: "南屏旅游景区",
  type: "4A级景区",
  address: "浙江省台州市天台县",
  lng: 121.06983,
  lat: 29.09241,
  description: "佛教文化与山水景观并重。",
  recommend: 8
},
{
  name: "台州海洋世界",
  type: "4A级景区",
  address: "浙江省台州市椒江区",
  lng: 121.45183,
  lat: 28.67321,
  description: "海洋生物展示与科普体验馆。",
  recommend: 8
},
{
  name: "九峰景区",
  type: "4A级景区",
  address: "浙江省台州市黄岩区",
  lng: 121.28321,
  lat: 28.67883,
  description: "城市山林与登高休闲景区。",
  recommend: 7
},
{
  name: "柔川景区",
  type: "4A级景区",
  address: "浙江省台州市黄岩区",
  lng: 121.21521,
  lat: 28.70583,
  description: "古村落与山水田园景观。",
  recommend: 7
},
{
  name: "后岸乡居旅游景区",
  type: "4A级景区",
  address: "浙江省台州市天台县",
  lng: 121.03841,
  lat: 29.08321,
  description: "乡村民宿与田园体验结合。",
  recommend: 7
},

/* ================= 丽水市 ================= */
{
  name: "松阴溪景区",
  type: "4A级景区",
  address: "浙江省丽水市松阳县",
  lng: 119.51521,
  lat: 28.45583,
  description: "清澈溪流与古村落风光。",
  recommend: 8
},
{
  name: "住龙景区",
  type: "4A级景区",
  address: "浙江省丽水市龙泉市",
  lng: 119.24183,
  lat: 28.11521,
  description: "传统古村与龙泉青瓷文化。",
  recommend: 7
},
{
  name: "古堰画乡景区",
  type: "4A级景区",
  address: "浙江省丽水市莲都区",
  lng: 119.94741,
  lat: 28.50883,
  description: "世界灌溉工程遗产与艺术小镇。",
  recommend: 9
},
{
  name: "宝溪景区",
  type: "4A级景区",
  address: "浙江省丽水市龙泉市",
  lng: 119.28321,
  lat: 28.06483,
  description: "以青瓷艺术村落著称。",
  recommend: 8
},
{
  name: "箬寮原始林景区",
  type: "4A级景区",
  address: "浙江省丽水市松阳县",
  lng: 119.42841,
  lat: 28.36621,
  description: "保存完好的原始森林生态区。",
  recommend: 8
},
{
  name: "南尖岩景区",
  type: "4A级景区",
  address: "浙江省丽水市遂昌县",
  lng: 119.17521,
  lat: 28.55383,
  description: "云海梯田与摄影胜地。",
  recommend: 9
},
{
  name: "东西岩景区",
  type: "4A级景区",
  address: "浙江省丽水市莲都区",
  lng: 119.88583,
  lat: 28.39241,
  description: "奇峰怪石与峡谷地貌。",
  recommend: 8
},
{
  name: "云中大漈景区",
  type: "4A级景区",
  address: "浙江省丽水市景宁畲族自治县",
  lng: 119.54683,
  lat: 27.98321,
  description: "高山草甸与畲族风情结合。",
  recommend: 8
},
{
  name: "中国青瓷小镇·披云青瓷文化园",
  type: "4A级景区",
  address: "浙江省丽水市龙泉市",
  lng: 119.15183,
  lat: 28.07241,
  description: "龙泉青瓷文化展示与体验区。",
  recommend: 9
},
{
  name: "神龙飞瀑景区",
  type: "4A级景区",
  address: "浙江省丽水市遂昌县",
  lng: 119.23641,
  lat: 28.59021,
  description: "以高落差瀑布群闻名。",
  recommend: 8
},
{
  name: "百山祖景区",
  type: "4A级景区",
  address: "浙江省丽水市庆元县",
  lng: 119.17921,
  lat: 27.74241,
  description: "国家级自然保护区，生物多样性丰富。",
  recommend: 9
},
{
  name: "中国石雕文化旅游区",
  type: "4A级景区",
  address: "浙江省丽水市青田县",
  lng: 120.28983,
  lat: 28.14521,
  description: "展示青田石雕艺术与文化。",
  recommend: 8
},
{
  name: "遂昌金矿国家矿山公园",
  type: "4A级景区",
  address: "浙江省丽水市遂昌县",
  lng: 119.25421,
  lat: 28.59483,
  description: "中国首座金矿主题国家矿山公园。",
  recommend: 9
},
{
  name: "千佛山景区",
  type: "4A级景区",
  address: "浙江省丽水市遂昌县",
  lng: 119.20683,
  lat: 28.61321,
  description: "佛教文化与丹霞地貌结合。",
  recommend: 8
},
{
  name: "河阳古民居景区",
  type: "4A级景区",
  address: "浙江省丽水市缙云县",
  lng: 120.12921,
  lat: 28.67783,
  description: "保存完好的宗族型古村落。",
  recommend: 9
},
{
  name: "黄龙景区",
  type: "4A级景区",
  address: "浙江省丽水市缙云县",
  lng: 120.08421,
  lat: 28.68921,
  description: "丹霞地貌与自然景观并存。",
  recommend: 8
},
{
  name: "畲乡之窗景区",
  type: "4A级景区",
  address: "浙江省丽水市景宁畲族自治县",
  lng: 119.63583,
  lat: 27.97321,
  description: "集中展示畲族民俗文化。",
  recommend: 8
},

/* ================= 合肥市 ================= */
{
  name: "合柴1972景区",
  type: "4A级景区",
  address: "安徽省合肥市包河区",
  lng: 117.30321,
  lat: 31.82583,
  description: "由老工业厂区改造而成的文化创意园区。",
  recommend: 8
},
{
  name: "小井庄景区",
  type: "4A级景区",
  address: "安徽省合肥市肥西县",
  lng: 117.14083,
  lat: 31.70321,
  description: "中国农村改革的重要发源地之一。",
  recommend: 8
},
{
  name: "包公故里景区",
  type: "4A级景区",
  address: "安徽省合肥市肥东县",
  lng: 117.48041,
  lat: 31.88283,
  description: "北宋名臣包拯出生地和纪念景区。",
  recommend: 8
},
{
  name: "安徽省美术馆",
  type: "4A级景区",
  address: "安徽省合肥市滨湖新区",
  lng: 117.29383,
  lat: 31.73821,
  description: "展示安徽美术发展与当代艺术。",
  recommend: 7
},
{
  name: "安徽省科技馆",
  type: "4A级景区",
  address: "安徽省合肥市蜀山区",
  lng: 117.20983,
  lat: 31.83821,
  description: "集科普教育与互动体验于一体。",
  recommend: 8
},
{
  name: "浮槎山景区",
  type: "4A级景区",
  address: "安徽省合肥市肥东县",
  lng: 117.60321,
  lat: 31.98683,
  description: "以佛教文化和自然山林景观著称。",
  recommend: 7
},

/* ================= 阜阳市 ================= */
{
  name: "颍州西湖景区",
  type: "4A级景区",
  address: "安徽省阜阳市颍州区",
  lng: 115.81241,
  lat: 32.89883,
  description: "历史名湖，融合园林与文化景观。",
  recommend: 8
},

/* ================= 马鞍山市 ================= */
{
  name: "凌家滩遗址景区",
  type: "4A级景区",
  address: "安徽省马鞍山市含山县",
  lng: 118.06241,
  lat: 31.55383,
  description: "新石器时代重要考古遗址。",
  recommend: 9
},

/* ================= 铜陵市 ================= */
{
  name: "犁桥水镇景区",
  type: "4A级景区",
  address: "安徽省铜陵市义安区",
  lng: 117.83041,
  lat: 30.99321,
  description: "徽派水镇风格的文化旅游区。",
  recommend: 8
},

/* ================= 安庆市 ================= */
{
  name: "天柱大峡谷景区",
  type: "4A级景区",
  address: "安徽省安庆市潜山市",
  lng: 116.49583,
  lat: 30.70021,
  description: "以峡谷、瀑布和原生态景观著称。",
  recommend: 8
},
{
  name: "独秀山景区",
  type: "4A级景区",
  address: "安徽省安庆市怀宁县",
  lng: 116.79241,
  lat: 30.74383,
  description: "陈独秀故里所在地。",
  recommend: 8
},
{
  name: "飞旗寨景区",
  type: "4A级景区",
  address: "安徽省安庆市岳西县",
  lng: 116.30841,
  lat: 30.85821,
  description: "集峡谷、溶洞与山寨文化于一体。",
  recommend: 7
},
{
  name: "司空大峡谷景区",
  type: "4A级景区",
  address: "安徽省安庆市岳西县",
  lng: 116.28421,
  lat: 30.84683,
  description: "原生态峡谷风光和户外探险区。",
  recommend: 8
},
{
  name: "六尺巷景区",
  type: "4A级景区",
  address: "安徽省安庆市桐城市",
  lng: 116.95241,
  lat: 31.04983,
  description: "体现中华礼让文化的历史街巷。",
  recommend: 9
},

/* ================= 淮北市 ================= */
{
  name: "濉溪古城景区",
  type: "4A级景区",
  address: "安徽省淮北市濉溪县",
  lng: 116.76421,
  lat: 33.91483,
  description: "展示运河文化与地方历史的古城景区。",
  recommend: 7
},

/* ================= 滁州市 ================= */
{
  name: "龙岗古镇景区",
  type: "4A级景区",
  address: "安徽省滁州市天长市",
  lng: 119.00683,
  lat: 32.69183,
  description: "保存完好的明清古镇。",
  recommend: 7
},

/* ================= 宣城市 ================= */
{
  name: "上庄景区",
  type: "4A级景区",
  address: "安徽省宣城市绩溪县",
  lng: 118.64841,
  lat: 30.07483,
  description: "胡适故里，徽文化代表村落。",
  recommend: 8
},

/* ================= 六安市 ================= */
{
  name: "六万情峡景区",
  type: "4A级景区",
  address: "安徽省六安市霍山县",
  lng: 116.24683,
  lat: 31.39721,
  description: "以爱情主题和峡谷景观为特色。",
  recommend: 7
},
{
  name: "临淮岗景区",
  type: "4A级景区",
  address: "安徽省六安市霍邱县",
  lng: 116.29641,
  lat: 32.21783,
  description: "大型水利枢纽工程景观区。",
  recommend: 7
},
{
  name: "大别山主峰景区",
  type: "4A级景区",
  address: "安徽省六安市霍山县",
  lng: 116.29921,
  lat: 31.33883,
  description: "大别山核心自然景观区。",
  recommend: 9
},
{
  name: "佛子岭景区",
  type: "4A级景区",
  address: "安徽省六安市霍山县",
  lng: 116.20183,
  lat: 31.43121,
  description: "新中国第一坝所在地。",
  recommend: 9
},
{
  name: "霍山大峡谷",
  type: "4A级景区",
  address: "安徽省六安市霍山县",
  lng: 116.18583,
  lat: 31.40241,
  description: "峡谷漂流与山水景观结合。",
  recommend: 8
},
{
  name: "南岳山景区",
  type: "4A级景区",
  address: "安徽省六安市霍山县",
  lng: 116.26321,
  lat: 31.36583,
  description: "佛道文化与自然山景融合。",
  recommend: 7
},
{
  name: "铜锣寨景区",
  type: "4A级景区",
  address: "安徽省六安市霍山县",
  lng: 116.17841,
  lat: 31.35283,
  description: "以奇峰怪石和原始森林著称。",
  recommend: 8
},
{
  name: "大别山风情谷景区",
  type: "4A级景区",
  address: "安徽省六安市金安区",
  lng: 116.39241,
  lat: 31.75583,
  description: "展示大别山民俗文化。",
  recommend: 7
},
{
  name: "大别山石窟风景区",
  type: "4A级景区",
  address: "安徽省六安市金安区",
  lng: 116.42821,
  lat: 31.72883,
  description: "石窟艺术与自然景观结合。",
  recommend: 7
},
{
  name: "东石笋风景区",
  type: "4A级景区",
  address: "安徽省六安市金安区",
  lng: 116.45583,
  lat: 31.74241,
  description: "以奇特石柱地貌著称。",
  recommend: 7
},
{
  name: "梦幻海洋大世界",
  type: "4A级景区",
  address: "安徽省六安市金安区",
  lng: 116.49241,
  lat: 31.76483,
  description: "集海洋生物展示与科普体验于一体。",
  recommend: 7
},
{
  name: "皖西博物馆",
  type: "4A级景区",
  address: "安徽省六安市金安区",
  lng: 116.51883,
  lat: 31.74821,
  description: "展示皖西地区历史文化。",
  recommend: 7
},
{
  name: "皖西大裂谷景区",
  type: "4A级景区",
  address: "安徽省六安市金安区",
  lng: 116.48241,
  lat: 31.79321,
  description: "典型地质奇观裂谷景区。",
  recommend: 8
},
{
  name: "悠然蓝溪文化旅游度假景区",
  type: "4A级景区",
  address: "安徽省六安市金安区",
  lng: 116.54421,
  lat: 31.78283,
  description: "休闲度假与乡村旅游结合。",
  recommend: 7
},
{
  name: "悠然南山度假区",
  type: "4A级景区",
  address: "安徽省六安市金安区",
  lng: 116.56241,
  lat: 31.79983,
  description: "山地度假与生态康养区。",
  recommend: 7
},
{
  name: "大别山玉博园景区",
  type: "4A级景区",
  address: "安徽省六安市金寨县",
  lng: 115.89241,
  lat: 31.68183,
  description: "以玉石文化和展示为主题。",
  recommend: 7
},
{
  name: "红军广场景区",
  type: "4A级景区",
  address: "安徽省六安市金寨县",
  lng: 115.93821,
  lat: 31.72883,
  description: "重要红色革命纪念地。",
  recommend: 9
},
{
  name: "龙津溪地景区",
  type: "4A级景区",
  address: "安徽省六安市金寨县",
  lng: 115.91241,
  lat: 31.70321,
  description: "溪流湿地与生态景观区。",
  recommend: 7
},
{
  name: "梅山水库景区",
  type: "4A级景区",
  address: "安徽省六安市金寨县",
  lng: 115.94583,
  lat: 31.75383,
  description: "大型水库与山水风光结合。",
  recommend: 8
},
{
  name: "响洪甸水库景区",
  type: "4A级景区",
  address: "安徽省六安市金寨县",
  lng: 116.03583,
  lat: 31.74241,
  description: "水利工程与生态旅游区。",
  recommend: 8
},
{
  name: "小南京乡村旅游扶贫示范区",
  type: "4A级景区",
  address: "安徽省六安市金寨县",
  lng: 115.88421,
  lat: 31.65483,
  description: "红色文化与乡村振兴示范区。",
  recommend: 7
},
{
  name: "燕子河大峡谷景区",
  type: "4A级景区",
  address: "安徽省六安市金寨县",
  lng: 115.85683,
  lat: 31.61241,
  description: "以峡谷地貌和奇石景观闻名。",
  recommend: 9
},
{
  name: "万佛山景区",
  type: "4A级景区",
  address: "安徽省六安市舒城县",
  lng: 116.99383,
  lat: 31.28821,
  description: "佛教文化与自然山景结合。",
  recommend: 8
},
{
  name: "独山革命旧址群",
  type: "4A级景区",
  address: "安徽省六安市裕安区",
  lng: 116.89041,
  lat: 31.61783,
  description: "重要的革命历史旧址群。",
  recommend: 9
},
{
  name: "横排头景区",
  type: "4A级景区",
  address: "安徽省六安市裕安区",
  lng: 116.94241,
  lat: 31.58983,
  description: "大型水利工程与红色文化景区。",
  recommend: 8
},
{
  name: "九公寨景区",
  type: "4A级景区",
  address: "安徽省六安市裕安区",
  lng: 116.91421,
  lat: 31.64241,
  description: "以奇峰险寨和登山体验著称。",
  recommend: 8
},

/* ================= 六安市 ================= */
{
  name: "龙井沟景区",
  type: "4A级景区",
  address: "安徽省六安市裕安区",
  lng: 116.49241,
  lat: 31.68321,
  description: "以峡谷溪流、瀑布群和生态休闲著称。",
  recommend: 8
},
{
  name: "舒茶人民公社景区",
  type: "4A级景区",
  address: "安徽省六安市舒城县",
  lng: 116.88183,
  lat: 31.30241,
  description: "红色文化与茶园风光结合的旅游区。",
  recommend: 8
},

/* ================= 合肥市 ================= */
{
  name: "中国半汤郁金香高地景区",
  type: "4A级景区",
  address: "安徽省合肥市安巢经开区",
  lng: 117.91421,
  lat: 31.57983,
  description: "以郁金香花海和温泉度假为特色。",
  recommend: 8
},
{
  name: "滨湖国家森林公园",
  type: "4A级景区",
  address: "安徽省合肥市包河区",
  lng: 117.31983,
  lat: 31.72041,
  description: "环巢湖生态森林休闲公园。",
  recommend: 9
},
{
  name: "大圩生态旅游景区",
  type: "4A级景区",
  address: "安徽省合肥市包河区",
  lng: 117.34321,
  lat: 31.68883,
  description: "以葡萄采摘和田园体验闻名。",
  recommend: 7
},
{
  name: "渡江战役纪念馆(安徽名人馆)",
  type: "4A级景区",
  address: "安徽省合肥市包河区",
  lng: 117.31741,
  lat: 31.72783,
  description: "重要红色革命历史纪念地。",
  recommend: 9
},
{
  name: "合肥包公园",
  type: "4A级景区",
  address: "安徽省合肥市包河区",
  lng: 117.30021,
  lat: 31.84883,
  description: "纪念北宋名臣包拯的历史文化园区。",
  recommend: 8
},
{
  name: "合肥融创乐园",
  type: "4A级景区",
  address: "安徽省合肥市包河区",
  lng: 117.33683,
  lat: 31.71621,
  description: "大型综合主题游乐园。",
  recommend: 8
},
{
  name: "巢湖姥山岛景区",
  type: "4A级景区",
  address: "安徽省合肥市巢湖市",
  lng: 117.86421,
  lat: 31.56583,
  description: "巢湖湖心岛屿，自然与人文并存。",
  recommend: 9
},
{
  name: "紫微洞景区",
  type: "4A级景区",
  address: "安徽省合肥市巢湖市",
  lng: 117.93683,
  lat: 31.51241,
  description: "典型喀斯特溶洞景观。",
  recommend: 8
},
{
  name: "岱山湖旅游度假区",
  type: "4A级景区",
  address: "安徽省合肥市肥东县",
  lng: 117.63921,
  lat: 31.99383,
  description: "湖泊度假与生态休闲旅游区。",
  recommend: 8
},
{
  name: "渡江战役总前委旧址",
  type: "4A级景区",
  address: "安徽省合肥市肥东县",
  lng: 117.49383,
  lat: 31.86641,
  description: "渡江战役重要指挥旧址。",
  recommend: 8
},
{
  name: "长临古街景区",
  type: "4A级景区",
  address: "安徽省合肥市肥东县",
  lng: 117.59241,
  lat: 31.78783,
  description: "明清风格水乡古街。",
  recommend: 7
},
{
  name: "肥西老母鸡家园",
  type: "4A级景区",
  address: "安徽省合肥市肥西县",
  lng: 117.14183,
  lat: 31.64683,
  description: "农业文化与美食体验相结合。",
  recommend: 7
},
{
  name: "官亭林海",
  type: "4A级景区",
  address: "安徽省合肥市肥西县",
  lng: 117.00321,
  lat: 31.61321,
  description: "大面积人工林海景观。",
  recommend: 8
},
{
  name: "紫蓬山国家森林公园",
  type: "4A级景区",
  address: "安徽省合肥市肥西县",
  lng: 117.09183,
  lat: 31.74421,
  description: "合肥近郊著名森林公园。",
  recommend: 9
},
{
  name: "铭传故里",
  type: "4A级景区",
  address: "安徽省合肥市肥西县",
  lng: 117.05841,
  lat: 31.67883,
  description: "晚清名将刘铭传故居。",
  recommend: 8
},
{
  name: "祥源花世界",
  type: "4A级景区",
  address: "安徽省合肥市肥西县",
  lng: 117.10921,
  lat: 31.60483,
  description: "大型花卉主题旅游景区。",
  recommend: 8
},
{
  name: "合肥野生动物园",
  type: "4A级景区",
  address: "安徽省合肥市高新区",
  lng: 117.09883,
  lat: 31.81621,
  description: "集动物保护、科普与游览于一体。",
  recommend: 9
},
{
  name: "徽园",
  type: "4A级景区",
  address: "安徽省合肥市经开区",
  lng: 117.27921,
  lat: 31.78183,
  description: "集中展示安徽各地风貌。",
  recommend: 8
},
{
  name: "金孔雀温泉度假村",
  type: "4A级景区",
  address: "安徽省合肥市庐江县",
  lng: 117.32183,
  lat: 31.21321,
  description: "以温泉康养为特色。",
  recommend: 8
},
{
  name: "冶父山森林公园",
  type: "4A级景区",
  address: "安徽省合肥市庐江县",
  lng: 117.21983,
  lat: 31.29841,
  description: "佛教文化与森林景观结合。",
  recommend: 8
},
{
  name: "安徽省博物馆",
  type: "4A级景区",
  address: "安徽省合肥市庐阳区",
  lng: 117.28241,
  lat: 31.87483,
  description: "安徽历史文化重要展示窗口。",
  recommend: 9
},
{
  name: "李鸿章故居陈列馆",
  type: "4A级景区",
  address: "安徽省合肥市庐阳区",
  lng: 117.28821,
  lat: 31.87041,
  description: "晚清重臣李鸿章故居。",
  recommend: 8
},
{
  name: "三国遗址公园",
  type: "4A级景区",
  address: "安徽省合肥市庐阳区",
  lng: 117.24683,
  lat: 31.90321,
  description: "以三国文化遗址为主题。",
  recommend: 8
},
{
  name: "三十岗乡生态农业旅游区",
  type: "4A级景区",
  address: "安徽省合肥市庐阳区",
  lng: 117.20183,
  lat: 31.95521,
  description: "都市近郊生态农业体验区。",
  recommend: 7
},
{
  name: "合肥植物园",
  type: "4A级景区",
  address: "安徽省合肥市蜀山区",
  lng: 117.18183,
  lat: 31.83883,
  description: "植物科普与休闲观光公园。",
  recommend: 8
},
{
  name: "元一双凤湖国际旅游度假区",
  type: "4A级景区",
  address: "安徽省合肥市长丰县",
  lng: 117.15321,
  lat: 32.03483,
  description: "湖泊度假与休闲娱乐区。",
  recommend: 7
},
{
  name: "中国非物质文化遗产园",
  type: "4A级景区",
  address: "安徽省合肥市长丰县",
  lng: 117.18983,
  lat: 32.01721,
  description: "非遗展示与体验园区。",
  recommend: 7
},

/* ================= 其他地市 ================= */
{
  name: "大佛山养心谷景区",
  type: "4A级景区",
  address: "安徽省宣城市郎溪县",
  lng: 119.17841,
  lat: 31.12383,
  description: "以养生度假和森林生态著称。",
  recommend: 8
},
{
  name: "涂山风景区",
  type: "4A级景区",
  address: "安徽省蚌埠市禹会区",
  lng: 117.31241,
  lat: 32.88683,
  description: "大禹文化重要发源地。",
  recommend: 8
},
{
  name: "六衖石头部落",
  type: "4A级景区",
  address: "安徽省马鞍山市含山县",
  lng: 118.04983,
  lat: 31.73921,
  description: "石头建筑与乡村文化融合。",
  recommend: 7
},
{
  name: "钟馗文化园",
  type: "4A级景区",
  address: "安徽省宿州市灵璧县",
  lng: 117.54983,
  lat: 33.55621,
  description: "展示钟馗文化与民俗艺术。",
  recommend: 7
},

/* ================= 黄山市 ================= */
{
  name: "齐云山风景名胜区",
  type: "4A级景区",
  address: "安徽省黄山市休宁县",
  lng: 118.02021,
  lat: 29.83321,
  description: "中国四大道教名山之一。",
  recommend: 9
},
{
  name: "新安江山水画廊",
  type: "4A级景区",
  address: "安徽省黄山市歙县",
  lng: 118.42783,
  lat: 29.87421,
  description: "徽派山水与江河风光结合。",
  recommend: 9
},
{
  name: "赛金花故居·归园景区",
  type: "4A级景区",
  address: "安徽省黄山市歙县",
  lng: 118.44121,
  lat: 29.86583,
  description: "近代历史人物故居景区。",
  recommend: 7
},
{
  name: "南屏风景区",
  type: "4A级景区",
  address: "安徽省黄山市黟县",
  lng: 117.93841,
  lat: 29.90783,
  description: "徽州古村落代表。",
  recommend: 9
},
{
  name: "东黄山旅游度假区",
  type: "4A级景区",
  address: "安徽省黄山市黄山区",
  lng: 118.10783,
  lat: 30.04121,
  description: "温泉度假与休闲旅游区。",
  recommend: 8
},
{
  name: "雄村景区",
  type: "4A级景区",
  address: "安徽省黄山市徽州区",
  lng: 118.33683,
  lat: 29.85683,
  description: "以古祠堂群和徽派建筑闻名。",
  recommend: 8
},
{
  name: "徽州古城",
  type: "4A级景区",
  address: "安徽省黄山市歙县",
  lng: 118.43583,
  lat: 29.86821,
  description: "保存完整的徽州府城。",
  recommend: 10
},
{
  name: "唐模景区",
  type: "4A级景区",
  address: "安徽省黄山市徽州区",
  lng: 118.30321,
  lat: 29.84783,
  description: "中国历史文化名村。",
  recommend: 9
},
{
  name: "太平湖风景区",
  type: "4A级景区",
  address: "安徽省黄山市黄山区",
  lng: 118.13783,
  lat: 30.22521,
  description: "湖泊山水型旅游胜地。",
  recommend: 9
},
{
  name: "翡翠谷(情人谷)风景区",
  type: "4A级景区",
  address: "安徽省黄山市黄山区",
  lng: 118.15241,
  lat: 30.10283,
  description: "以清潭幽谷和爱情文化闻名。",
  recommend: 8
},
{
  name: "牯牛降景区",
  type: "4A级景区",
  address: "安徽省黄山市祁门县",
  lng: 117.49421,
  lat: 29.93383,
  description: "原始森林生态保护区。",
  recommend: 9
},
{
  name: "棠樾牌坊群·鲍家花园景区",
  type: "4A级景区",
  address: "安徽省黄山市歙县",
  lng: 118.45621,
  lat: 29.89383,
  description: "规模宏大的徽派牌坊群。",
  recommend: 9
},
{
  name: "九龙瀑景区",
  type: "4A级景区",
  address: "安徽省黄山市黄山区",
  lng: 118.12521,
  lat: 30.08983,
  description: "多级瀑布群山水景观。",
  recommend: 8
},
{
  name: "呈坎景区",
  type: "5A级景区",
  address: "安徽省黄山市徽州区",
  lng: 118.29883,
  lat: 29.85621,
  description: "八卦布局的徽州古村落。",
  recommend: 10
},
{
  name: "潜口民宅",
  type: "4A级景区",
  address: "安徽省黄山市徽州区",
  lng: 118.31021,
  lat: 29.84283,
  description: "明清徽派民居建筑群。",
  recommend: 8
},

/* ================= 南昌市 ================= */
{
  name: "进贤县佐家寨生态乐园",
  type: "4A级景区",
  address: "江西省南昌市进贤县",
  lng: 116.24621,
  lat: 28.39683,
  description: "集生态观光、休闲体验于一体的乡村乐园。",
  recommend: 7
},
{
  name: "绳金塔景区",
  type: "4A级景区",
  address: "江西省南昌市西湖区",
  lng: 115.89983,
  lat: 28.66241,
  description: "南昌地标性古塔，历史文化底蕴深厚。",
  recommend: 9
},
{
  name: "铜源峡景区",
  type: "4A级景区",
  address: "江西省南昌市湾里管理局",
  lng: 115.73241,
  lat: 28.71483,
  description: "峡谷瀑布与山林生态景观结合。",
  recommend: 8
},
{
  name: "南昌华侨城欢乐象湖景区",
  type: "4A级景区",
  address: "江西省南昌市西湖区",
  lng: 115.86841,
  lat: 28.61021,
  description: "城市湖泊休闲与主题娱乐综合区。",
  recommend: 8
},
{
  name: "方大特钢工业旅游景区",
  type: "4A级景区",
  address: "江西省南昌市青山湖区",
  lng: 115.95521,
  lat: 28.68983,
  description: "展示现代钢铁工业与企业文化。",
  recommend: 7
},

/* ================= 九江市 ================= */
{
  name: "永修县龙源峡景区",
  type: "4A级景区",
  address: "江西省九江市永修县",
  lng: 115.83383,
  lat: 29.01721,
  description: "峡谷、溪流与瀑布景观突出。",
  recommend: 8
},
{
  name: "彭泽县蔓谷景区",
  type: "4A级景区",
  address: "江西省九江市彭泽县",
  lng: 116.62121,
  lat: 29.90383,
  description: "以花海和休闲度假为主题。",
  recommend: 7
},
{
  name: "赛城湖景区",
  type: "4A级景区",
  address: "江西省九江市濂溪区",
  lng: 115.96483,
  lat: 29.69121,
  description: "城市湖泊生态休闲景区。",
  recommend: 8
},
{
  name: "鲁溪洞景区",
  type: "4A级景区",
  address: "江西省九江市武宁县",
  lng: 115.14841,
  lat: 29.26683,
  description: "典型喀斯特溶洞景观。",
  recommend: 7
},
{
  name: "鹿鸣谷景区",
  type: "4A级景区",
  address: "江西省九江市武宁县",
  lng: 115.20321,
  lat: 29.30241,
  description: "森林生态与峡谷休闲景区。",
  recommend: 7
},
{
  name: "云居山景区",
  type: "4A级景区",
  address: "江西省九江市永修县",
  lng: 115.74183,
  lat: 29.09241,
  description: "佛教名山，山林清幽。",
  recommend: 9
},
{
  name: "共青垦荒文化体验园",
  type: "4A级景区",
  address: "江西省九江市共青城市",
  lng: 115.82121,
  lat: 29.23883,
  description: "展示垦荒精神和知青文化。",
  recommend: 8
},
{
  name: "庐山市观音桥景区",
  type: "4A级景区",
  address: "江西省九江市庐山市",
  lng: 116.00841,
  lat: 29.55321,
  description: "古石拱桥与山水景观相映成趣。",
  recommend: 8
},

/* ================= 新余市 ================= */
{
  name: "洪阳洞景区",
  type: "4A级景区",
  address: "江西省新余市渝水区",
  lng: 114.98021,
  lat: 27.85983,
  description: "溶洞奇观与宗教文化相结合。",
  recommend: 8
},
{
  name: "介桥古村景区",
  type: "4A级景区",
  address: "江西省新余市分宜县",
  lng: 114.67583,
  lat: 27.92121,
  description: "保存完好的赣派古村落。",
  recommend: 7
},

/* ================= 赣州市 ================= */
{
  name: "会昌戏剧镇景区",
  type: "4A级景区",
  address: "江西省赣州市会昌县",
  lng: 115.79121,
  lat: 25.60083,
  description: "戏剧艺术与古城文化融合。",
  recommend: 8
},
{
  name: "石城县赣江源景区",
  type: "4A级景区",
  address: "江西省赣州市石城县",
  lng: 116.36483,
  lat: 26.38821,
  description: "赣江发源地，自然生态优良。",
  recommend: 9
},
{
  name: "龙南市阳明心谷景区",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.83021,
  lat: 24.89283,
  description: "以阳明心学文化和山水景观为特色。",
  recommend: 8
},
{
  name: "寻乌调查体验园",
  type: "4A级景区",
  address: "江西省赣州市寻乌县",
  lng: 115.64841,
  lat: 24.96521,
  description: "红色文化与调查研究体验基地。",
  recommend: 8
},
{
  name: "安基山景区",
  type: "4A级景区",
  address: "江西省赣州市信丰县",
  lng: 114.90883,
  lat: 25.40621,
  description: "森林生态与登山休闲景区。",
  recommend: 7
},
{
  name: "红兴谷景区",
  type: "4A级景区",
  address: "江西省赣州市兴国县",
  lng: 115.36421,
  lat: 26.30883,
  description: "红色文化与生态旅游结合。",
  recommend: 7
},
{
  name: "大余县梅关景区",
  type: "4A级景区",
  address: "江西省赣州市大余县",
  lng: 114.33683,
  lat: 25.37721,
  description: "古驿道与梅岭文化景观。",
  recommend: 9
},
{
  name: "全南县攀岩小镇景区",
  type: "4A级景区",
  address: "江西省赣州市全南县",
  lng: 114.51383,
  lat: 24.74241,
  description: "以攀岩运动和户外体验为主题。",
  recommend: 8
},

/* ================= 上饶市 ================= */
{
  name: "湖城·饶州古镇旅游区",
  type: "4A级景区",
  address: "江西省上饶市鄱阳县",
  lng: 116.69921,
  lat: 29.01383,
  description: "鄱阳湖文化与古镇风貌结合。",
  recommend: 8
},
{
  name: "隐居·石头部落景区",
  type: "4A级景区",
  address: "江西省上饶市德兴市",
  lng: 117.57983,
  lat: 28.98241,
  description: "以石屋聚落和乡村生活体验为特色。",
  recommend: 7
},
{
  name: "叠山文化园",
  type: "4A级景区",
  address: "江西省上饶市信州区",
  lng: 117.95721,
  lat: 28.45383,
  description: "纪念爱国诗人谢叠山。",
  recommend: 7
},
{
  name: "凤凰湖景区",
  type: "4A级景区",
  address: "江西省上饶市广信区",
  lng: 117.92241,
  lat: 28.40783,
  description: "城市湖泊休闲景区。",
  recommend: 7
},

/* ================= 吉安市 ================= */
{
  name: "遂川县白水仙景区",
  type: "4A级景区",
  address: "江西省吉安市遂川县",
  lng: 114.48421,
  lat: 26.28283,
  description: "以瀑布群和原生态山水著称。",
  recommend: 8
},
{
  name: "峡江县金梅花景区",
  type: "4A级景区",
  address: "江西省吉安市峡江县",
  lng: 115.13983,
  lat: 27.58241,
  description: "以梅花景观和休闲游览为主。",
  recommend: 7
},
{
  name: "红豆杉养生谷景区",
  type: "4A级景区",
  address: "江西省吉安市井冈山市",
  lng: 114.19121,
  lat: 26.59783,
  description: "养生康养与森林生态结合。",
  recommend: 8
},
{
  name: "白云湖匠心谷景区",
  type: "4A级景区",
  address: "江西省吉安市吉州区",
  lng: 114.96383,
  lat: 27.11721,
  description: "湖泊生态与文创体验融合。",
  recommend: 7
},
{
  name: "杨万里故里景区",
  type: "4A级景区",
  address: "江西省吉安市吉水县",
  lng: 115.14841,
  lat: 27.21383,
  description: "纪念南宋诗人杨万里。",
  recommend: 8
},
{
  name: "墨潭桃花岛景区",
  type: "4A级景区",
  address: "江西省吉安市吉水县",
  lng: 115.16983,
  lat: 27.18921,
  description: "以桃花景观和水域风光著称。",
  recommend: 7
},
{
  name: "马家洲革命历史纪念园景区",
  type: "4A级景区",
  address: "江西省吉安市泰和县",
  lng: 114.89621,
  lat: 26.77983,
  description: "红色革命教育基地。",
  recommend: 8
},

/* ================= 抚州市 ================= */
{
  name: "旴源首镇景区",
  type: "4A级景区",
  address: "江西省抚州市广昌县",
  lng: 116.34321,
  lat: 26.84783,
  description: "抚河源头文化与生态景区。",
  recommend: 7
},
{
  name: "洽湾船形古镇景区",
  type: "4A级景区",
  address: "江西省抚州市南城县",
  lng: 116.62383,
  lat: 27.59821,
  description: "独特船形布局的历史古镇。",
  recommend: 8
},
{
  name: "资溪县野狼谷景区",
  type: "4A级景区",
  address: "江西省抚州市资溪县",
  lng: 117.03521,
  lat: 27.70583,
  description: "峡谷、瀑布与森林生态景区。",
  recommend: 8
},

/* ================= 萍乡市 ================= */
{
  name: "花涧里景区",
  type: "4A级景区",
  address: "江西省萍乡市安源区",
  lng: 113.88783,
  lat: 27.65421,
  description: "花海景观与休闲体验区。",
  recommend: 7
},
{
  name: "月上广寒景区",
  type: "4A级景区",
  address: "江西省萍乡市湘东区",
  lng: 113.72721,
  lat: 27.62383,
  description: "夜游灯光与文化演艺结合。",
  recommend: 7
},
{
  name: "武功山云顶景区",
  type: "5A级景区",
  address: "江西省萍乡市芦溪县",
  lng: 114.19921,
  lat: 27.45683,
  description: "高山草甸与云海景观闻名全国。",
  recommend: 10
},

/* ================= 鹰潭市 ================= */
{
  name: "白鹤湖嘻嘻哩景区",
  type: "4A级景区",
  address: "江西省鹰潭市余江区",
  lng: 116.74183,
  lat: 28.19521,
  description: "湖泊休闲与亲子娱乐结合。",
  recommend: 7
},
{
  name: "灵溪湖生态旅游区",
  type: "4A级景区",
  address: "江西省鹰潭市贵溪市",
  lng: 117.16121,
  lat: 28.35383,
  description: "湖泊湿地与生态观光区。",
  recommend: 7
},

{
  name: "寻乌调查体验园",
  type: "4A级景区",
  address: "江西省赣州市寻乌县",
  lng: 115.65183,
  lat: 24.95621,
  description: "以寻乌调查精神为主题的红色教育体验园。",
  recommend: 8
},
{
  name: "安基山景区",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.95321,
  lat: 25.87583,
  description: "集山岳观光、森林康养于一体的生态景区。",
  recommend: 7
},
{
  name: "红兴谷景区",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.98241,
  lat: 25.86283,
  description: "红色文化与山谷生态融合的旅游区。",
  recommend: 7
},
{
  name: "大余县梅关景区",
  type: "4A级景区",
  address: "江西省赣州市大余县",
  lng: 114.39383,
  lat: 25.22241,
  description: "古驿道梅关古道所在地，岭南咽喉要地。",
  recommend: 9
},
{
  name: "全南县攀岩小镇景区",
  type: "4A级景区",
  address: "江西省赣州市全南县",
  lng: 114.52921,
  lat: 24.74383,
  description: "以攀岩运动和户外体验为特色的小镇。",
  recommend: 8
},

/* ================= 宜春市 ================= */
{
  name: "七星岭景区",
  type: "4A级景区",
  address: "江西省宜春市袁州区",
  lng: 114.36241,
  lat: 27.81883,
  description: "城市近郊山地森林休闲景区。",
  recommend: 7
},

/* ================= 上饶市 ================= */
{
  name: "叠山文化园",
  type: "4A级景区",
  address: "江西省上饶市广丰区",
  lng: 118.19121,
  lat: 28.43783,
  description: "纪念南宋爱国诗人谢枋得的文化园区。",
  recommend: 7
},
{
  name: "凤凰湖景区",
  type: "4A级景区",
  address: "江西省上饶市信州区",
  lng: 117.97041,
  lat: 28.44821,
  description: "城市湖泊型生态休闲景区。",
  recommend: 7
},

/* ================= 吉安市 ================= */
{
  name: "红豆杉养生谷景区",
  type: "4A级景区",
  address: "江西省吉安市井冈山市",
  lng: 114.20983,
  lat: 26.63183,
  description: "以红豆杉生态资源和康养度假为特色。",
  recommend: 8
},
{
  name: "白云湖匠心谷景区",
  type: "4A级景区",
  address: "江西省吉安市吉州区",
  lng: 114.98841,
  lat: 27.12021,
  description: "融合湖泊景观与非遗匠心文化。",
  recommend: 7
},
{
  name: "杨万里故里景区",
  type: "4A级景区",
  address: "江西省吉安市吉水县",
  lng: 115.15283,
  lat: 27.21421,
  description: "南宋著名诗人杨万里出生地。",
  recommend: 8
},
{
  name: "吉水县墨潭桃花岛景区",
  type: "4A级景区",
  address: "江西省吉安市吉水县",
  lng: 115.12921,
  lat: 27.23183,
  description: "以桃花景观和水上休闲为特色。",
  recommend: 7
},
{
  name: "泰和县马家洲革命历史纪念园景区",
  type: "4A级景区",
  address: "江西省吉安市泰和县",
  lng: 114.88583,
  lat: 26.78921,
  description: "重要革命历史纪念与爱国教育基地。",
  recommend: 8
},

/* ================= 抚州市 ================= */
{
  name: "洽湾船形古镇景区",
  type: "4A级景区",
  address: "江西省抚州市南城县",
  lng: 116.66121,
  lat: 27.55783,
  description: "以船形街巷布局闻名的千年古镇。",
  recommend: 8
},
{
  name: "资溪县野狼谷景区",
  type: "4A级景区",
  address: "江西省抚州市资溪县",
  lng: 117.08183,
  lat: 27.72241,
  description: "峡谷探险与原生态森林景观。",
  recommend: 7
},

/* ================= 九江市 ================= */
{
  name: "云居山景区",
  type: "4A级景区",
  address: "江西省九江市永修县",
  lng: 115.80921,
  lat: 29.01883,
  description: "佛教名山，禅宗圣地。",
  recommend: 9
},
{
  name: "共青垦荒文化体验园",
  type: "4A级景区",
  address: "江西省九江市共青城市",
  lng: 115.78421,
  lat: 29.24783,
  description: "展示共青城垦荒创业历史。",
  recommend: 7
},
{
  name: "庐山市观音桥景区",
  type: "4A级景区",
  address: "江西省九江市庐山市",
  lng: 115.96383,
  lat: 29.44121,
  description: "古石拱桥与自然山水相映成趣。",
  recommend: 8
},

/* ================= 萍乡市 ================= */
{
  name: "武功山云顶景区",
  type: "5A级景区",
  address: "江西省萍乡市芦溪县",
  lng: 114.18841,
  lat: 27.46383,
  description: "高山草甸云海日出景观闻名全国。",
  recommend: 10
},

/* ================= 南昌市 ================= */
{
  name: "方大特钢工业旅游景区",
  type: "4A级景区",
  address: "江西省南昌市青山湖区",
  lng: 115.94841,
  lat: 28.68183,
  description: "展示现代钢铁工业生产流程。",
  recommend: 7
},
{
  name: "南昌华侨城欢乐象湖景区",
  type: "4A级景区",
  address: "江西省南昌市西湖区",
  lng: 115.86683,
  lat: 28.62421,
  description: "集主题娱乐、商业休闲于一体。",
  recommend: 8
},

/* ================= 吉安市 ================= */
{
  name: "安福县野牛瀑布大峡谷景区",
  type: "4A级景区",
  address: "江西省吉安市安福县",
  lng: 114.57421,
  lat: 27.40483,
  description: "以峡谷瀑布和原生态山林景观著称。",
  recommend: 8
},
{
  name: "遂川县草林红圩小镇景区",
  type: "4A级景区",
  address: "江西省吉安市遂川县",
  lng: 114.50983,
  lat: 26.29421,
  description: "红色文化与客家古镇风貌结合。",
  recommend: 8
},
{
  name: "吉安县云天麓谷景区",
  type: "4A级景区",
  address: "江西省吉安市吉安县",
  lng: 114.88241,
  lat: 27.05283,
  description: "集山地休闲、生态观光于一体。",
  recommend: 7
},
{
  name: "永新县院下景区",
  type: "4A级景区",
  address: "江西省吉安市永新县",
  lng: 114.20321,
  lat: 26.94683,
  description: "红色文化村落与自然景观结合。",
  recommend: 7
},
{
  name: "峡江县玉笥养生谷景区",
  type: "4A级景区",
  address: "江西省吉安市峡江县",
  lng: 115.20183,
  lat: 27.58241,
  description: "以道教文化和养生休闲为主题。",
  recommend: 8
},
{
  name: "吉安县大丰田园景区",
  type: "4A级景区",
  address: "江西省吉安市吉安县",
  lng: 114.91783,
  lat: 27.06721,
  description: "现代农业观光与田园体验区。",
  recommend: 7
},
{
  name: "吉水县中国进士文化园",
  type: "4A级景区",
  address: "江西省吉安市吉水县",
  lng: 115.13321,
  lat: 27.22983,
  description: "集中展示中国科举进士文化。",
  recommend: 8
},
{
  name: "永丰县恩江古城景区",
  type: "4A级景区",
  address: "江西省吉安市永丰县",
  lng: 115.44041,
  lat: 27.31883,
  description: "赣中古城风貌与历史文化街区。",
  recommend: 8
},
{
  name: "泰和县蜀口生态岛景区",
  type: "4A级景区",
  address: "江西省吉安市泰和县",
  lng: 114.89383,
  lat: 26.80821,
  description: "江心生态岛屿型休闲旅游区。",
  recommend: 7
},

/* ================= 抚州市 ================= */
{
  name: "临川区临汝书院景区",
  type: "4A级景区",
  address: "江西省抚州市临川区",
  lng: 116.36621,
  lat: 27.98283,
  description: "宋代理学书院，文化底蕴深厚。",
  recommend: 8
},
{
  name: "乐安县登云岭景区",
  type: "4A级景区",
  address: "江西省抚州市乐安县",
  lng: 115.83921,
  lat: 27.42583,
  description: "以山岳风光和森林景观为主。",
  recommend: 7
},

/* ================= 上饶市 ================= */
{
  name: "余干县琵琶湖景区",
  type: "4A级景区",
  address: "江西省上饶市余干县",
  lng: 116.68483,
  lat: 28.70241,
  description: "湖泊湿地与休闲观光相结合。",
  recommend: 7
},
{
  name: "广信区云谷田园生态农业小镇景区",
  type: "4A级景区",
  address: "江西省上饶市广信区",
  lng: 117.95921,
  lat: 28.39483,
  description: "生态农业展示与乡村旅游示范区。",
  recommend: 7
},

/* ================= 九江市 ================= */
{
  name: "彭泽县凯瑞景区",
  type: "4A级景区",
  address: "江西省九江市彭泽县",
  lng: 116.56383,
  lat: 29.87741,
  description: "集休闲度假与生态观光于一体。",
  recommend: 7
},
{
  name: "德安县万家岭大捷纪念园景区",
  type: "4A级景区",
  address: "江西省九江市德安县",
  lng: 115.77683,
  lat: 29.36041,
  description: "重要抗战历史纪念地。",
  recommend: 8
},
{
  name: "修水县陈门五杰故里景区",
  type: "4A级景区",
  address: "江西省九江市修水县",
  lng: 114.57241,
  lat: 29.02883,
  description: "展示陈门五杰文化与历史。",
  recommend: 7
},
{
  name: "武宁县长水景区",
  type: "4A级景区",
  address: "江西省九江市武宁县",
  lng: 115.06783,
  lat: 29.25621,
  description: "山水生态与湖泊景观结合。",
  recommend: 7
},
{
  name: "庐山市秀峰景区",
  type: "4A级景区",
  address: "江西省九江市庐山市",
  lng: 116.00421,
  lat: 29.46283,
  description: "庐山重要组成部分，以瀑布闻名。",
  recommend: 9
},
{
  name: "浔阳江文化旅游景区",
  type: "4A级景区",
  address: "江西省九江市浔阳区",
  lng: 116.00483,
  lat: 29.71421,
  description: "以长江文化和历史遗存为主题。",
  recommend: 8
},
{
  name: "瑞昌市铜源剪影文化园景区",
  type: "4A级景区",
  address: "江西省九江市瑞昌市",
  lng: 115.68841,
  lat: 29.67683,
  description: "展示铜文化与地方历史。",
  recommend: 7
},
{
  name: "都昌县鄱阳湖南山风景区",
  type: "4A级景区",
  address: "江西省九江市都昌县",
  lng: 116.21383,
  lat: 29.29921,
  description: "鄱阳湖湖畔自然与人文景观区。",
  recommend: 8
},

/* ================= 南昌市 ================= */
{
  name: "原城纪·南昌城市文化街区景区",
  type: "4A级景区",
  address: "江西省南昌市南昌县",
  lng: 115.94383,
  lat: 28.54521,
  description: "沉浸式南昌城市文化体验街区。",
  recommend: 8
},
{
  name: "万寿宫历史文化街区景区",
  type: "4A级景区",
  address: "江西省南昌市西湖区",
  lng: 115.87421,
  lat: 28.67983,
  description: "南昌最具代表性的历史文化街区。",
  recommend: 9
},
{
  name: "八大山人梅湖景区",
  type: "4A级景区",
  address: "江西省南昌市青云谱区",
  lng: 115.89241,
  lat: 28.63183,
  description: "纪念八大山人艺术成就的文化景区。",
  recommend: 8
},
{
  name: "南昌汉代海昏侯国考古遗址公园",
  type: "5A级景区",
  address: "江西省南昌市新建区",
  lng: 115.81721,
  lat: 28.74241,
  description: "中国重大考古发现遗址公园。",
  recommend: 10
},
{
  name: "小平小道陈列馆",
  type: "4A级景区",
  address: "江西省南昌市新建区",
  lng: 115.80841,
  lat: 28.72083,
  description: "记录邓小平同志重要历史时期。",
  recommend: 8
},

/* ================= 新余市 ================= */
{
  name: "双林夏布文化旅游景区",
  type: "4A级景区",
  address: "江西省新余市分宜县",
  lng: 114.72683,
  lat: 27.80521,
  description: "展示国家级非遗夏布制作技艺。",
  recommend: 8
},
{
  name: "罗坊会议红色景区",
  type: "4A级景区",
  address: "江西省新余市渝水区",
  lng: 114.90321,
  lat: 27.91283,
  description: "重要革命历史会议旧址。",
  recommend: 8
},

/* ================= 萍乡市 ================= */
{
  name: "袁水源红色文化园景区",
  type: "4A级景区",
  address: "江西省萍乡市芦溪县",
  lng: 114.02183,
  lat: 27.62841,
  description: "红色文化教育与生态游览结合。",
  recommend: 7
},

/* ================= 鹰潭市 ================= */
{
  name: "贵溪市青茅境景区",
  type: "4A级景区",
  address: "江西省鹰潭市贵溪市",
  lng: 117.14241,
  lat: 28.25783,
  description: "以原生态山林和溪谷景观为特色。",
  recommend: 7
},

/* ================= 景德镇市 ================= */
{
  name: "三宝国际瓷谷景区",
  type: "4A级景区",
  address: "江西省景德镇市珠山区",
  lng: 117.21421,
  lat: 29.28183,
  description: "集陶瓷艺术、创意与旅游于一体。",
  recommend: 9
},
{
  name: "高岭·中国村景区",
  type: "4A级景区",
  address: "江西省景德镇市浮梁县",
  lng: 117.33683,
  lat: 29.41821,
  description: "瓷土文化发源地与乡村旅游示范区。",
  recommend: 8
},

/* ================= 宜春市 ================= */
{
  name: "明月山栖隐谷景区",
  type: "4A级景区",
  address: "江西省宜春市袁州区",
  lng: 114.42183,
  lat: 27.62983,
  description: "明月山核心休闲养生谷地。",
  recommend: 8
},
{
  name: "天工开物文化园景区",
  type: "4A级景区",
  address: "江西省宜春市奉新县",
  lng: 115.38241,
  lat: 28.70183,
  description: "弘扬宋应星《天工开物》科技文化。",
  recommend: 8
},

/* ================= 九江市 ================= */
{
  name: "鄱阳湖南山风景区",
  type: "4A级景区",
  address: "江西省九江市都昌县",
  lng: 116.20341,
  lat: 29.35283,
  description: "鄱阳湖畔集山水观光与湿地生态于一体的景区。",
  recommend: 8
},
{
  name: "山水武宁西海湾景区",
  type: "4A级景区",
  address: "江西省九江市武宁县",
  lng: 115.09321,
  lat: 29.28783,
  description: "庐山西海湖湾风光与休闲度假区。",
  recommend: 9
},
{
  name: "石钟山景区",
  type: "4A级景区",
  address: "江西省九江市湖口县",
  lng: 116.25421,
  lat: 29.74783,
  description: "因苏轼《石钟山记》而闻名的名山。",
  recommend: 9
},
{
  name: "庐山西海国际温泉度假村",
  type: "4A级景区",
  address: "江西省九江市武宁县",
  lng: 115.25421,
  lat: 29.36483,
  description: "温泉养生与湖岛度假相结合。",
  recommend: 8
},
{
  name: "庐山天沐温泉度假村",
  type: "4A级景区",
  address: "江西省九江市庐山市",
  lng: 116.04241,
  lat: 29.46283,
  description: "以温泉康养和休闲度假为特色。",
  recommend: 8
},
{
  name: "龙宫洞景区",
  type: "4A级景区",
  address: "江西省九江市武宁县",
  lng: 115.18783,
  lat: 29.31021,
  description: "大型喀斯特溶洞景观。",
  recommend: 8
},

/* ================= 抚州市 ================= */
{
  name: "资溪县大觉溪旅游区",
  type: "4A级景区",
  address: "江西省抚州市资溪县",
  lng: 117.07241,
  lat: 27.69983,
  description: "漂流与峡谷生态旅游胜地。",
  recommend: 8
},
{
  name: "大华山蝶栖谷景区",
  type: "4A级景区",
  address: "江西省抚州市乐安县",
  lng: 115.92683,
  lat: 27.42921,
  description: "以蝴蝶生态和山谷景观为特色。",
  recommend: 7
},
{
  name: "曾巩文化园景区",
  type: "4A级景区",
  address: "江西省抚州市南丰县",
  lng: 116.52921,
  lat: 27.21883,
  description: "纪念北宋文学家曾巩的文化园区。",
  recommend: 7
},

/* ================= 吉安市 ================= */
{
  name: "遂川县桃源梯田景区",
  type: "4A级景区",
  address: "江西省吉安市遂川县",
  lng: 114.38983,
  lat: 26.34921,
  description: "高山梯田景观，四季景色分明。",
  recommend: 8
},
{
  name: "古后河人文谷景区",
  type: "4A级景区",
  address: "江西省吉安市吉州区",
  lng: 114.99321,
  lat: 27.13083,
  description: "集人文历史与生态休闲于一体。",
  recommend: 7
},

/* ================= 景德镇市 ================= */
{
  name: "昌南新区名坊园景区",
  type: "4A级景区",
  address: "江西省景德镇市昌江区",
  lng: 117.22921,
  lat: 29.25483,
  description: "集中展示陶瓷名坊和制瓷工艺。",
  recommend: 8
},

/* ================= 南昌市 ================= */
{
  name: "安义古村群",
  type: "4A级景区",
  address: "江西省南昌市安义县",
  lng: 115.55041,
  lat: 28.84983,
  description: "保存完好的明清古村落群。",
  recommend: 9
},
{
  name: "狮子峰景区",
  type: "4A级景区",
  address: "江西省南昌市湾里区",
  lng: 115.74421,
  lat: 28.78241,
  description: "以奇峰怪石和登山观景著称。",
  recommend: 7
},
{
  name: "竹海明珠景区",
  type: "4A级景区",
  address: "江西省南昌市湾里区",
  lng: 115.72183,
  lat: 28.80921,
  description: "成片竹林构成的生态景区。",
  recommend: 7
},
{
  name: "绿地303观光厅",
  type: "4A级景区",
  address: "江西省南昌市红谷滩区",
  lng: 115.85841,
  lat: 28.68883,
  description: "南昌城市高空观景地标。",
  recommend: 8
},
{
  name: "溪霞怪石岭生态公园",
  type: "4A级景区",
  address: "江西省南昌市新建区",
  lng: 115.82421,
  lat: 28.81983,
  description: "丹霞怪石与生态休闲结合。",
  recommend: 7
},
{
  name: "阳光照耀29度假景区",
  type: "4A级景区",
  address: "江西省南昌市新建区",
  lng: 115.79921,
  lat: 28.84283,
  description: "以度假休闲与亲子体验为主。",
  recommend: 7
},

/* ================= 宜春市 ================= */
{
  name: "东浒寨景区",
  type: "4A级景区",
  address: "江西省宜春市靖安县",
  lng: 115.34783,
  lat: 28.90841,
  description: "古山寨遗址与自然风光结合。",
  recommend: 8
},
{
  name: "怪石林景区",
  type: "4A级景区",
  address: "江西省宜春市宜丰县",
  lng: 114.86041,
  lat: 28.40183,
  description: "奇特花岗岩石林地貌。",
  recommend: 8
},
{
  name: "杨岐山孽龙洞景区",
  type: "4A级景区",
  address: "江西省宜春市袁州区",
  lng: 114.34721,
  lat: 27.91183,
  description: "佛教名山与溶洞景观结合。",
  recommend: 8
},

/* ================= 新余市 ================= */
{
  name: "仙女湖风景名胜区",
  type: "5A级景区",
  address: "江西省新余市渝水区",
  lng: 114.94983,
  lat: 27.81521,
  description: "以湖岛风光和爱情文化闻名。",
  recommend: 10
},
{
  name: "中国洞都景区",
  type: "4A级景区",
  address: "江西省新余市分宜县",
  lng: 114.64241,
  lat: 27.80483,
  description: "溶洞群与地质科普旅游区。",
  recommend: 8
},

/* ================= 赣州市 ================= */
{
  name: "罗汉岩景区",
  type: "4A级景区",
  address: "江西省赣州市瑞金市",
  lng: 116.02583,
  lat: 25.90521,
  description: "丹霞地貌与佛教文化景区。",
  recommend: 8
},
{
  name: "丫山景区",
  type: "4A级景区",
  address: "江西省赣州市大余县",
  lng: 114.33241,
  lat: 25.40183,
  description: "山岳风光与休闲度假区。",
  recommend: 8
},
{
  name: "五龙客家风情园",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.93683,
  lat: 25.86883,
  description: "展示客家民俗文化的主题园区。",
  recommend: 7
},
{
  name: "宝葫芦农庄",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.97321,
  lat: 25.86241,
  description: "农业观光与亲子体验结合。",
  recommend: 7
},
{
  name: "通天岩景区",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.89783,
  lat: 25.82421,
  description: "丹霞石窟造像与摩崖石刻。",
  recommend: 9
},
{
  name: "东生围景区",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.74721,
  lat: 24.93483,
  description: "保存完整的客家围屋建筑群。",
  recommend: 8
},

/* ================= 赣州市 ================= */
{
  name: "三僚风水文化景区",
  type: "4A级景区",
  address: "江西省赣州市兴国县",
  lng: 115.36321,
  lat: 26.33783,
  description: "中国风水文化发源地之一。",
  recommend: 9
},
{
  name: "汉仙岩景区",
  type: "4A级景区",
  address: "江西省赣州市会昌县",
  lng: 115.78521,
  lat: 25.60383,
  description: "丹霞地貌与道教文化相结合。",
  recommend: 8
},
{
  name: "南武当景区",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.82341,
  lat: 24.89683,
  description: "丹霞奇峰与客家文化景区。",
  recommend: 9
},
{
  name: "关西围屋群景区",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.80321,
  lat: 24.91821,
  description: "中国最大的客家围屋群。",
  recommend: 9
},
{
  name: "通天寨景区",
  type: "4A级景区",
  address: "江西省赣州市石城县",
  lng: 116.36521,
  lat: 26.33841,
  description: "典型丹霞地貌自然奇观。",
  recommend: 8
},
{
  name: "屏山旅游景区",
  type: "4A级景区",
  address: "江西省赣州市大余县",
  lng: 114.33583,
  lat: 25.41521,
  description: "山岳森林与生态休闲景区。",
  recommend: 7
},

/* ================= 吉安市 ================= */
{
  name: "阳明山国家森林公园",
  type: "4A级景区",
  address: "江西省吉安市青原区",
  lng: 115.04021,
  lat: 26.98883,
  description: "以森林康养与生态旅游著称。",
  recommend: 8
},
{
  name: "阳明湖景区",
  type: "4A级景区",
  address: "江西省吉安市青原区",
  lng: 115.05383,
  lat: 26.97321,
  description: "湖泊湿地与休闲观光结合。",
  recommend: 7
},
{
  name: "秋收起义纪念地",
  type: "4A级景区",
  address: "江西省吉安市永新县",
  lng: 114.24241,
  lat: 26.94483,
  description: "重要红色革命历史纪念地。",
  recommend: 9
},
{
  name: "渼陂古村",
  type: "4A级景区",
  address: "江西省吉安市青原区",
  lng: 115.02683,
  lat: 26.92641,
  description: "保存完好的庐陵古村落。",
  recommend: 8
},
{
  name: "陂下古村",
  type: "4A级景区",
  address: "江西省吉安市吉水县",
  lng: 115.13183,
  lat: 27.10321,
  description: "典型赣派建筑古村落。",
  recommend: 8
},
{
  name: "青原山风景名胜区",
  type: "4A级景区",
  address: "江西省吉安市青原区",
  lng: 115.01841,
  lat: 26.95783,
  description: "佛教文化名山与自然景观。",
  recommend: 9
},
{
  name: "钓源古村",
  type: "4A级景区",
  address: "江西省吉安市吉州区",
  lng: 114.99183,
  lat: 27.10241,
  description: "欧阳修后裔聚居地。",
  recommend: 8
},
{
  name: "吉州窑景区",
  type: "4A级景区",
  address: "江西省吉安市吉州区",
  lng: 114.95821,
  lat: 27.10983,
  description: "宋代著名民窑遗址群。",
  recommend: 9
},
{
  name: "万安县田北画村",
  type: "4A级景区",
  address: "江西省吉安市万安县",
  lng: 114.78241,
  lat: 26.47383,
  description: "艺术乡村与田园风光结合。",
  recommend: 7
},

/* ================= 抚州市 ================= */
{
  name: "广昌莲花景区",
  type: "4A级景区",
  address: "江西省抚州市广昌县",
  lng: 116.33521,
  lat: 26.84683,
  description: "中国白莲之乡莲花观赏区。",
  recommend: 8
},
{
  name: "乐安流坑景区",
  type: "4A级景区",
  address: "江西省抚州市乐安县",
  lng: 115.91841,
  lat: 27.37921,
  description: "中国历史文化名村。",
  recommend: 9
},
{
  name: "金竹飞瀑景区",
  type: "4A级景区",
  address: "江西省抚州市南城县",
  lng: 116.62183,
  lat: 27.51741,
  description: "瀑布群与原生态峡谷景观。",
  recommend: 8
},
{
  name: "麻姑山景区",
  type: "4A级景区",
  address: "江西省抚州市南城县",
  lng: 116.65821,
  lat: 27.60183,
  description: "道教名山，麻姑文化发源地。",
  recommend: 9
},
{
  name: "仙盖山景区",
  type: "4A级景区",
  address: "江西省抚州市临川区",
  lng: 116.38383,
  lat: 27.91321,
  description: "以奇峰怪石和森林生态著称。",
  recommend: 8
},
{
  name: "九瀑峡景区",
  type: "4A级景区",
  address: "江西省抚州市乐安县",
  lng: 115.96241,
  lat: 27.42383,
  description: "峡谷瀑布群自然景观。",
  recommend: 8
},
{
  name: "黎川古城旅游景区",
  type: "4A级景区",
  address: "江西省抚州市黎川县",
  lng: 116.90421,
  lat: 27.29241,
  description: "保存完好的明清古城。",
  recommend: 8
},
{
  name: "金溪竹桥古村",
  type: "4A级景区",
  address: "江西省抚州市金溪县",
  lng: 116.79183,
  lat: 27.91241,
  description: "典型赣派古村落。",
  recommend: 8
},

/* ================= 上饶市 ================= */
{
  name: "鄱阳湖国家湿地公园",
  type: "5A级景区",
  address: "江西省上饶市鄱阳县",
  lng: 116.69241,
  lat: 29.00283,
  description: "中国最大淡水湖湿地生态系统。",
  recommend: 10
},
{
  name: "葛仙山景区",
  type: "5A级景区",
  address: "江西省上饶市铅山县",
  lng: 117.57921,
  lat: 28.17683,
  description: "道教名山与云海景观。",
  recommend: 10
},
{
  name: "鹅湖书院景区",
  type: "4A级景区",
  address: "江西省上饶市铅山县",
  lng: 117.53683,
  lat: 28.22741,
  description: "中国古代四大书院之一。",
  recommend: 9
},
{
  name: "铜钹山景区",
  type: "4A级景区",
  address: "江西省上饶市广丰区",
  lng: 118.22383,
  lat: 28.36421,
  description: "原始森林与高山草甸景观。",
  recommend: 8
},
{
  name: "大茅山景区",
  type: "4A级景区",
  address: "江西省上饶市玉山县",
  lng: 118.16521,
  lat: 28.60283,
  description: "山岳景观与道教文化。",
  recommend: 8
},

/* ================= 吉安市 ================= */
{
  name: "渼陂古村",
  type: "4A级景区",
  address: "江西省吉安市青原区",
  lng: 115.06283,
  lat: 27.08241,
  description: "保存完好的庐陵文化古村落，明清建筑集中。",
  recommend: 9
},
{
  name: "陂下古村",
  type: "4A级景区",
  address: "江西省吉安市青原区",
  lng: 115.03121,
  lat: 27.10583,
  description: "庐陵文化代表性古村，宗族文化浓厚。",
  recommend: 8
},
{
  name: "青原山风景名胜区",
  type: "4A级景区",
  address: "江西省吉安市青原区",
  lng: 115.01841,
  lat: 27.06421,
  description: "佛教文化名山，集登山、游览、休闲于一体。",
  recommend: 9
},
{
  name: "钓源古村",
  type: "4A级景区",
  address: "江西省吉安市吉州区",
  lng: 114.99483,
  lat: 27.15021,
  description: "欧阳修后裔聚居地，古建筑保存完好。",
  recommend: 8
},
{
  name: "吉州窑景区",
  type: "4A级景区",
  address: "江西省吉安市吉州区",
  lng: 114.98241,
  lat: 27.13683,
  description: "中国古代重要民窑遗址，黑釉瓷代表。",
  recommend: 9
},
{
  name: "万安县田北画村",
  type: "4A级景区",
  address: "江西省吉安市万安县",
  lng: 114.81283,
  lat: 26.45421,
  description: "以乡村艺术和写生文化为特色。",
  recommend: 7
},

/* ================= 抚州市 ================= */
{
  name: "金溪竹桥古村",
  type: "4A级景区",
  address: "江西省抚州市金溪县",
  lng: 116.76421,
  lat: 27.91883,
  description: "保存完好的明清古村落，徽派建筑风格。",
  recommend: 9
},
{
  name: "乐安流坑景区",
  type: "5A级景区",
  address: "江西省抚州市乐安县",
  lng: 116.22683,
  lat: 27.45521,
  description: "千年古村，江南第一进士村。",
  recommend: 10
},
{
  name: "抚州市乐安县九瀑峡景区",
  type: "4A级景区",
  address: "江西省抚州市乐安县",
  lng: 116.15321,
  lat: 27.38683,
  description: "峡谷瀑布群景观，生态原始。",
  recommend: 8
},
{
  name: "抚州市仙盖山景区",
  type: "4A级景区",
  address: "江西省抚州市临川区",
  lng: 116.37183,
  lat: 27.90241,
  description: "集道教文化与山岳景观于一体。",
  recommend: 8
},
{
  name: "黎川古城旅游景区",
  type: "4A级景区",
  address: "江西省抚州市黎川县",
  lng: 116.90641,
  lat: 27.29183,
  description: "保存完好的明清古城格局。",
  recommend: 8
},
{
  name: "抚州崇仁源野山庄",
  type: "4A级景区",
  address: "江西省抚州市崇仁县",
  lng: 116.08521,
  lat: 27.76483,
  description: "集生态度假、休闲康养于一体。",
  recommend: 7
},

/* ================= 资溪 / 金溪 ================= */
{
  name: "御龙湾景区",
  type: "4A级景区",
  address: "江西省抚州市资溪县",
  lng: 117.07483,
  lat: 27.72841,
  description: "以峡谷、漂流和度假休闲为特色。",
  recommend: 8
},
{
  name: "金竹飞瀑景区",
  type: "4A级景区",
  address: "江西省抚州市资溪县",
  lng: 117.10621,
  lat: 27.75383,
  description: "多级瀑布群与原生态森林景观。",
  recommend: 8
},

/* ================= 南城 / 广昌 ================= */
{
  name: "麻姑山景区",
  type: "4A级景区",
  address: "江西省抚州市南城县",
  lng: 116.63983,
  lat: 27.53821,
  description: "道教名山，麻姑文化发源地。",
  recommend: 9
},
{
  name: "三翁花园景区",
  type: "4A级景区",
  address: "江西省抚州市南城县",
  lng: 116.65541,
  lat: 27.52183,
  description: "集园林景观与传统文化于一体。",
  recommend: 7
},
{
  name: "广昌莲花景区",
  type: "4A级景区",
  address: "江西省抚州市广昌县",
  lng: 116.32521,
  lat: 26.84383,
  description: "中国白莲之乡，夏季莲花盛景。",
  recommend: 8
},

/* ================= 其他 ================= */
{
  name: "曹山景区",
  type: "4A级景区",
  address: "江西省抚州市宜黄县",
  lng: 116.23841,
  lat: 27.54883,
  description: "佛教禅宗曹洞宗祖庭之一。",
  recommend: 8
},

/* ================= 抚州市 ================= */
{
  name: "黎川古城旅游景区",
  type: "4A级景区",
  address: "江西省抚州市黎川县",
  lng: 116.91121,
  lat: 27.29283,
  description: "保存完好的明清古城格局与街巷风貌。",
  recommend: 8
},
{
  name: "金溪竹桥古村",
  type: "4A级景区",
  address: "江西省抚州市金溪县",
  lng: 116.74841,
  lat: 27.91883,
  description: "以廊桥和古村落文化著称。",
  recommend: 8
},
{
  name: "临川灵谷峰景区",
  type: "4A级景区",
  address: "江西省抚州市临川区",
  lng: 116.39883,
  lat: 27.97921,
  description: "集山岳、佛教文化与自然景观于一体。",
  recommend: 8
},
{
  name: "乐安县登云岭景区",
  type: "4A级景区",
  address: "江西省抚州市乐安县",
  lng: 115.88521,
  lat: 27.42383,
  description: "高山森林与云海景观突出。",
  recommend: 7
},
{
  name: "乐安金竹飞瀑景区",
  type: "4A级景区",
  address: "江西省抚州市乐安县",
  lng: 115.86241,
  lat: 27.45183,
  description: "以瀑布群和峡谷生态为特色。",
  recommend: 8
},
{
  name: "南丰县曾巩文化园景区",
  type: "4A级景区",
  address: "江西省抚州市南丰县",
  lng: 116.51841,
  lat: 27.22583,
  description: "纪念唐宋八大家之一曾巩。",
  recommend: 7
},
{
  name: "佛岭国际公园",
  type: "4A级景区",
  address: "江西省抚州市东乡区",
  lng: 116.64683,
  lat: 28.24321,
  description: "集森林康养与休闲度假于一体。",
  recommend: 7
},
{
  name: "广昌中国莲花景区",
  type: "4A级景区",
  address: "江西省抚州市广昌县",
  lng: 116.32421,
  lat: 26.84383,
  description: "以莲花文化和湿地景观著称。",
  recommend: 8
},
{
  name: "文昌里",
  type: "4A级景区",
  address: "江西省抚州市临川区",
  lng: 116.36041,
  lat: 27.98383,
  description: "抚州历史文化街区代表。",
  recommend: 8
},
{
  name: "资溪县真相乡村旅游区",
  type: "4A级景区",
  address: "江西省抚州市资溪县",
  lng: 117.06183,
  lat: 27.69821,
  description: "以生态农业和乡村体验为特色。",
  recommend: 7
},
{
  name: "南丰县洽湾船形古镇景区",
  type: "4A级景区",
  address: "江西省抚州市南丰县",
  lng: 116.45241,
  lat: 27.17483,
  description: "形似船体布局的历史古镇。",
  recommend: 8
},
{
  name: "临汝书院景区",
  type: "4A级景区",
  address: "江西省抚州市临川区",
  lng: 116.37321,
  lat: 27.96483,
  description: "宋代理学书院，文化底蕴深厚。",
  recommend: 8
},
{
  name: "野狼谷景区",
  type: "4A级景区",
  address: "江西省抚州市资溪县",
  lng: 117.01521,
  lat: 27.67383,
  description: "峡谷探险与生态旅游结合。",
  recommend: 7
},
{
  name: "大觉溪旅游区",
  type: "4A级景区",
  address: "江西省抚州市资溪县",
  lng: 117.03683,
  lat: 27.65121,
  description: "以溪流、瀑布和原生态森林为特色。",
  recommend: 8
},
{
  name: "同胜九曲东黎森林公园",
  type: "4A级景区",
  address: "江西省抚州市黎川县",
  lng: 116.94241,
  lat: 27.32183,
  description: "森林氧吧与登山休闲胜地。",
  recommend: 7
},
{
  name: "江西阳明山国家森林公园",
  type: "4A级景区",
  address: "江西省抚州市黎川县",
  lng: 116.99841,
  lat: 27.35683,
  description: "以高山森林和王阳明文化闻名。",
  recommend: 8
},

/* ================= 赣州市 ================= */
{
  name: "大余县丫山旅游度假区",
  type: "4A级景区",
  address: "江西省赣州市大余县",
  lng: 114.35783,
  lat: 25.40121,
  description: "以山地度假与森林康养为主。",
  recommend: 8
},
{
  name: "通天岩景区",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.92241,
  lat: 25.86483,
  description: "以摩崖石刻和丹霞地貌著称。",
  recommend: 9
},
{
  name: "翠微峰国家森林公园",
  type: "4A级景区",
  address: "江西省赣州市宁都县",
  lng: 116.05683,
  lat: 26.49821,
  description: "峰林奇石与森林景观结合。",
  recommend: 8
},
{
  name: "于都屏山旅游区",
  type: "4A级景区",
  address: "江西省赣州市于都县",
  lng: 115.44783,
  lat: 25.98241,
  description: "集山水风光与红色文化于一体。",
  recommend: 8
},
{
  name: "九曲度假村",
  type: "4A级景区",
  address: "江西省赣州市赣县区",
  lng: 115.00521,
  lat: 25.85283,
  description: "以山水休闲与度假体验为主。",
  recommend: 7
},
{
  name: "五龙客家风情园",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.95841,
  lat: 25.87921,
  description: "集中展示客家民俗与建筑文化。",
  recommend: 8
},

/* ================= 赣州市 ================= */
{
  name: "关西围屋景区",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.79283,
  lat: 24.91021,
  description: "规模宏大的客家围屋建筑群代表。",
  recommend: 9
},
{
  name: "江西石城·通天寨景区",
  type: "4A级景区",
  address: "江西省赣州市石城县",
  lng: 116.34183,
  lat: 26.32641,
  description: "以丹霞地貌和险峻奇峰著称。",
  recommend: 9
},
{
  name: "赣州阳明湖景区",
  type: "4A级景区",
  address: "江西省赣州市上犹县",
  lng: 114.49621,
  lat: 25.85783,
  description: "高山湖泊型生态旅游景区。",
  recommend: 8
},
{
  name: "汉仙岩景区",
  type: "4A级景区",
  address: "江西省赣州市会昌县",
  lng: 115.71021,
  lat: 25.60083,
  description: "融合丹霞地貌与道教文化。",
  recommend: 8
},
{
  name: "苏区干部好作风纪念园",
  type: "4A级景区",
  address: "江西省赣州市于都县",
  lng: 115.41483,
  lat: 25.95841,
  description: "重要红色教育基地。",
  recommend: 8
},
{
  name: "赣县客家文化城",
  type: "4A级景区",
  address: "江西省赣州市赣县区",
  lng: 115.01583,
  lat: 25.86221,
  description: "集中展示客家历史文化。",
  recommend: 7
},
{
  name: "江南宋城历史文化旅游区",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.94241,
  lat: 25.85383,
  description: "宋代城址与赣州古城文化核心区。",
  recommend: 9
},
{
  name: "南武当旅游景区",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.77321,
  lat: 24.87283,
  description: "以丹霞奇峰和道教文化闻名。",
  recommend: 8
},
{
  name: "寻乌县青龙岩景区",
  type: "4A级景区",
  address: "江西省赣州市寻乌县",
  lng: 115.67241,
  lat: 24.98183,
  description: "溶洞、峡谷与自然山水结合。",
  recommend: 7
},
{
  name: "南康区家居小镇景区",
  type: "4A级景区",
  address: "江西省赣州市南康区",
  lng: 114.75683,
  lat: 25.65121,
  description: "以家具产业文化为主题的小镇。",
  recommend: 7
},
{
  name: "瑞金罗汉岩景区",
  type: "4A级景区",
  address: "江西省赣州市瑞金市",
  lng: 116.02521,
  lat: 25.88683,
  description: "丹霞地貌与红色文化融合景区。",
  recommend: 8
},
{
  name: "全南天龙山景区",
  type: "4A级景区",
  address: "江西省赣州市全南县",
  lng: 114.52921,
  lat: 24.74083,
  description: "以山岳森林和观景栈道为特色。",
  recommend: 7
},
{
  name: "石城八卦脑景区",
  type: "4A级景区",
  address: "江西省赣州市石城县",
  lng: 116.28183,
  lat: 26.27783,
  description: "高山草甸与云海景观闻名。",
  recommend: 9
},
{
  name: "信丰县谷山景区",
  type: "4A级景区",
  address: "江西省赣州市信丰县",
  lng: 114.97521,
  lat: 25.40983,
  description: "山林生态与佛教文化结合。",
  recommend: 7
},
{
  name: "东生围",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.81583,
  lat: 24.92321,
  description: "典型客家方形围屋建筑。",
  recommend: 7
},
{
  name: "上堡梯田",
  type: "4A级景区",
  address: "江西省赣州市崇义县",
  lng: 114.20421,
  lat: 25.74683,
  description: "华东地区规模宏大的梯田景观。",
  recommend: 9
},
{
  name: "雅溪古村",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.78121,
  lat: 24.90183,
  description: "保存完好的客家古村落。",
  recommend: 7
},
{
  name: "江西梅关国家森林公园",
  type: "4A级景区",
  address: "江西省赣州市大余县",
  lng: 114.37183,
  lat: 25.40121,
  description: "以梅岭古道和森林生态著称。",
  recommend: 8
},
{
  name: "中国赣南脐橙产业园景区",
  type: "4A级景区",
  address: "江西省赣州市信丰县",
  lng: 114.94241,
  lat: 25.35283,
  description: "展示赣南脐橙产业与农业文化。",
  recommend: 7
},
{
  name: "赣州市虔心小镇景区",
  type: "4A级景区",
  address: "江西省赣州市章贡区",
  lng: 114.92183,
  lat: 25.88921,
  description: "以休闲度假和慢生活为主题。",
  recommend: 7
},
{
  name: "宁都小布镇景区",
  type: "4A级景区",
  address: "江西省赣州市宁都县",
  lng: 116.01321,
  lat: 26.50083,
  description: "红色文化与古镇风貌相结合。",
  recommend: 8
},
{
  name: "寻乌调查旧址",
  type: "4A级景区",
  address: "江西省赣州市寻乌县",
  lng: 115.65183,
  lat: 24.96421,
  description: "毛泽东寻乌调查的重要旧址。",
  recommend: 9
},
{
  name: "会昌县小密花乡景区",
  type: "4A级景区",
  address: "江西省赣州市会昌县",
  lng: 115.75683,
  lat: 25.56321,
  description: "以花海景观和乡村旅游为特色。",
  recommend: 7
},
{
  name: "定南桃源乐境风景区",
  type: "4A级景区",
  address: "江西省赣州市定南县",
  lng: 115.03021,
  lat: 24.77483,
  description: "山水田园与休闲度假结合。",
  recommend: 7
},
{
  name: "于都县长征出发地纪念园",
  type: "5A级景区",
  address: "江西省赣州市于都县",
  lng: 115.41421,
  lat: 25.95283,
  description: "中央红军长征出发地核心纪念区。",
  recommend: 10
},
{
  name: "兴国县红兴谷景区",
  type: "4A级景区",
  address: "江西省赣州市兴国县",
  lng: 115.36241,
  lat: 26.31883,
  description: "红色文化与生态峡谷景区。",
  recommend: 8
},
{
  name: "龙南市安基山景区",
  type: "4A级景区",
  address: "江西省赣州市龙南市",
  lng: 114.73683,
  lat: 24.86183,
  description: "森林登山与自然观景胜地。",
  recommend: 7
},
{
  name: "全南县攀岩小镇景区",
  type: "4A级景区",
  address: "江西省赣州市全南县",
  lng: 114.51521,
  lat: 24.74241,
  description: "以攀岩运动和户外体验为主题。",
  recommend: 8
},

/* ================= 济南市 ================= */
{
  name: "济南青铜山大峡谷景区",
  type: "4A级景区",
  address: "山东省济南市历城区",
  lng: 117.28783,
  lat: 36.53241,
  description: "以峡谷、溶洞和山地景观为特色。",
  recommend: 8
},
{
  name: "济南灵岩山景区",
  type: "4A级景区",
  address: "山东省济南市长清区",
  lng: 116.87521,
  lat: 36.44783,
  description: "佛教名山，灵岩寺为四大名刹之一。",
  recommend: 9
},
{
  name: "济南融创文旅城",
  type: "4A级景区",
  address: "山东省济南市历城区",
  lng: 117.24641,
  lat: 36.68483,
  description: "集主题乐园、演艺、商业于一体。",
  recommend: 9
},

/* ================= 青岛市 ================= */
{
  name: "青岛老城文化旅游区",
  type: "4A级景区",
  address: "山东省青岛市市南区",
  lng: 120.32241,
  lat: 36.06521,
  description: "集中展现青岛历史风貌与建筑文化。",
  recommend: 9
},
{
  name: "青岛电视塔",
  type: "4A级景区",
  address: "山东省青岛市市南区",
  lng: 120.35483,
  lat: 36.07241,
  description: "青岛城市制高点与观景地标。",
  recommend: 8
},
{
  name: "青岛毛公山景区",
  type: "4A级景区",
  address: "山东省青岛市崂山区",
  lng: 120.60241,
  lat: 36.16783,
  description: "以奇石地貌和红色文化著称。",
  recommend: 8
},

/* ================= 淄博市 ================= */
{
  name: "颜神古镇景区",
  type: "4A级景区",
  address: "山东省淄博市博山区",
  lng: 117.85821,
  lat: 36.48783,
  description: "以陶琉文化和古镇风貌为特色。",
  recommend: 8
},
{
  name: "沂源牛郎织女景区",
  type: "4A级景区",
  address: "山东省淄博市沂源县",
  lng: 118.16241,
  lat: 36.17483,
  description: "以牛郎织女爱情传说为主题。",
  recommend: 7
},
{
  name: "马踏湖国家湿地公园",
  type: "4A级景区",
  address: "山东省淄博市桓台县",
  lng: 118.02883,
  lat: 36.95721,
  description: "北方典型湖泊湿地生态区。",
  recommend: 8
},
{
  name: "红叶柿岩旅游区",
  type: "4A级景区",
  address: "山东省淄博市博山区",
  lng: 117.87421,
  lat: 36.41483,
  description: "以红叶、石村和山地景观闻名。",
  recommend: 9
},

/* ================= 枣庄市 ================= */
{
  name: "莲青山风景区",
  type: "4A级景区",
  address: "山东省枣庄市滕州市",
  lng: 117.18583,
  lat: 35.08121,
  description: "以奇峰怪石和山林景观著称。",
  recommend: 8
},
{
  name: "墨子科技文化城旅游区",
  type: "4A级景区",
  address: "山东省枣庄市滕州市",
  lng: 117.16241,
  lat: 35.09383,
  description: "以墨子思想与科技文化为主题。",
  recommend: 8
},

/* ================= 济宁市 ================= */
{
  name: "微山湖渔家水街景区",
  type: "4A级景区",
  address: "山东省济宁市微山县",
  lng: 117.12841,
  lat: 34.79483,
  description: "展示湖区渔家文化与水乡风情。",
  recommend: 8
},
{
  name: "康王谷景区",
  type: "4A级景区",
  address: "山东省济宁市邹城市",
  lng: 117.01241,
  lat: 35.40483,
  description: "集峡谷、森林和休闲度假于一体。",
  recommend: 7
},

/* ================= 威海市 ================= */
{
  name: "半月湾景区",
  type: "4A级景区",
  address: "山东省威海市环翠区",
  lng: 122.11683,
  lat: 37.53521,
  description: "海湾沙滩与城市海岸景观。",
  recommend: 8
},

/* ================= 日照市 ================= */
{
  name: "白鹭湾景区",
  type: "4A级景区",
  address: "山东省日照市东港区",
  lng: 119.56683,
  lat: 35.43921,
  description: "以湿地生态和白鹭栖息闻名。",
  recommend: 7
},
{
  name: "天台山旅游区",
  type: "4A级景区",
  address: "山东省日照市莒县",
  lng: 118.91521,
  lat: 35.57783,
  description: "以山岳景观和道教文化为特色。",
  recommend: 8
},

/* ================= 临沂市 ================= */
{
  name: "琅琊古城旅游区",
  type: "4A级景区",
  address: "山东省临沂市兰山区",
  lng: 118.34583,
  lat: 35.09241,
  description: "复原琅琊文化的沉浸式古城。",
  recommend: 9
},
{
  name: "醉东风旅游区",
  type: "4A级景区",
  address: "山东省临沂市郯城县",
  lng: 118.35121,
  lat: 34.62383,
  description: "以田园休闲和文化体验为主。",
  recommend: 7
},
{
  name: "郯国古城旅游区",
  type: "4A级景区",
  address: "山东省临沂市郯城县",
  lng: 118.34321,
  lat: 34.61421,
  description: "展示郯国历史文化的古城景区。",
  recommend: 8
},

/* ================= 德州市 ================= */
{
  name: "泉城欧乐堡动物王国景区",
  type: "4A级景区",
  address: "山东省德州市齐河县",
  lng: 116.71841,
  lat: 36.78283,
  description: "大型野生动物主题乐园。",
  recommend: 9
},
{
  name: "德百杂技蟋蟀谷",
  type: "4A级景区",
  address: "山东省德州市宁津县",
  lng: 116.80183,
  lat: 37.64841,
  description: "融合杂技表演与民俗文化。",
  recommend: 7
},

/* ================= 聊城市 ================= */
{
  name: "双海湖风景区",
  type: "4A级景区",
  address: "山东省聊城市高唐县",
  lng: 116.22641,
  lat: 36.86983,
  description: "城市湖泊型生态休闲景区。",
  recommend: 7
},
{
  name: "运河文化旅游景区",
  type: "4A级景区",
  address: "山东省聊城市临清市",
  lng: 115.70683,
  lat: 36.84621,
  description: "大运河沿线重要历史文化区。",
  recommend: 8
},
{
  name: "鱼山曹植风景区",
  type: "4A级景区",
  address: "山东省聊城市东阿县",
  lng: 116.23721,
  lat: 36.33983,
  description: "纪念曹植与建安文学文化。",
  recommend: 7
},
{
  name: "九州洼月季旅游景区",
  type: "4A级景区",
  address: "山东省聊城市东昌府区",
  lng: 115.98583,
  lat: 36.45721,
  description: "以月季花海和休闲游览为特色。",
  recommend: 7
},

/* ================= 菏泽市 ================= */
{
  name: "青龙山景区",
  type: "4A级景区",
  address: "山东省菏泽市巨野县",
  lng: 116.07121,
  lat: 35.40183,
  description: "以山林景观和佛教文化著称。",
  recommend: 7
},

/* ================= 菏泽市 ================= */
{
  name: "曹县黄河故道湿地风景区",
  type: "4A级景区",
  address: "山东省菏泽市曹县",
  lng: 115.56683,
  lat: 34.85121,
  description: "黄河故道形成的湿地生态景观区。",
  recommend: 7
},
{
  name: "巨野县金山景区",
  type: "4A级景区",
  address: "山东省菏泽市巨野县",
  lng: 116.11841,
  lat: 35.39883,
  description: "以佛教文化和山地景观著称。",
  recommend: 7
},

/* ================= 日照市 ================= */
{
  name: "五莲山旅游风景区",
  type: "4A级景区",
  address: "山东省日照市五莲县",
  lng: 119.21241,
  lat: 35.75183,
  description: "集奇峰怪石、古寺名刹于一体。",
  recommend: 8
},
{
  name: "九如山瀑布群风景区",
  type: "4A级景区",
  address: "山东省济南市历城区",
  lng: 117.33241,
  lat: 36.34483,
  description: "以多级瀑布和峡谷景观闻名。",
  recommend: 9
},

/* ================= 济南市 ================= */
{
  name: "济南方特东方神画主题乐园",
  type: "4A级景区",
  address: "山东省济南市槐荫区",
  lng: 116.91241,
  lat: 36.68383,
  description: "以中华传统文化为主题的大型乐园。",
  recommend: 9
},
{
  name: "济南野生动物世界",
  type: "4A级景区",
  address: "山东省济南市章丘区",
  lng: 117.43841,
  lat: 36.65583,
  description: "大型野生动物放养式主题公园。",
  recommend: 9
},
{
  name: "济南千佛山风景名胜区",
  type: "4A级景区",
  address: "山东省济南市历下区",
  lng: 117.04183,
  lat: 36.63741,
  description: "济南三大名胜之一，佛教文化圣地。",
  recommend: 9
},
{
  name: "金象山乐园",
  type: "4A级景区",
  address: "山东省济南市历城区",
  lng: 117.11883,
  lat: 36.53521,
  description: "以休闲娱乐和亲子游乐为主。",
  recommend: 7
},
{
  name: "莱芜战役纪念馆",
  type: "4A级景区",
  address: "山东省济南市莱芜区",
  lng: 117.68421,
  lat: 36.21383,
  description: "重要红色革命教育基地。",
  recommend: 8
},
{
  name: "九顶塔中华民族欢乐园",
  type: "4A级景区",
  address: "山东省济南市历城区",
  lng: 117.30783,
  lat: 36.40821,
  description: "展示中国少数民族文化的主题园区。",
  recommend: 8
},
{
  name: "济南国际园博园景区",
  type: "4A级景区",
  address: "山东省济南市长清区",
  lng: 116.77183,
  lat: 36.55721,
  description: "集园林艺术与休闲观光于一体。",
  recommend: 8
},
{
  name: "济南红叶谷生态文化旅游区",
  type: "4A级景区",
  address: "山东省济南市历城区",
  lng: 117.22241,
  lat: 36.33083,
  description: "以秋季红叶景观著称。",
  recommend: 9
},
{
  name: "朱家峪旅游区",
  type: "4A级景区",
  address: "山东省济南市章丘区",
  lng: 117.47383,
  lat: 36.70721,
  description: "保存完好的北方古村落。",
  recommend: 8
},
{
  name: "济南植物园",
  type: "4A级景区",
  address: "山东省济南市长清区",
  lng: 116.80241,
  lat: 36.55183,
  description: "集植物观赏、科研与休闲于一体。",
  recommend: 7
},
{
  name: "香山旅游区",
  type: "4A级景区",
  address: "山东省济南市莱芜区",
  lng: 117.70183,
  lat: 36.24841,
  description: "以自然山林与休闲观光为主。",
  recommend: 7
},
{
  name: "章丘百脉泉景区",
  type: "4A级景区",
  address: "山东省济南市章丘区",
  lng: 117.53783,
  lat: 36.70783,
  description: "以泉群景观和园林结合著称。",
  recommend: 9
},

/* ================= 潍坊市 ================= */
{
  name: "临朐石门坊风景区",
  type: "4A级景区",
  address: "山东省潍坊市临朐县",
  lng: 118.53121,
  lat: 36.48683,
  description: "以红叶、峡谷和石门坊闻名。",
  recommend: 8
},

/* ================= 青岛市 ================= */
{
  name: "青岛金沙滩景区",
  type: "4A级景区",
  address: "山东省青岛市黄岛区",
  lng: 120.04683,
  lat: 35.96921,
  description: "中国沙质最细的海滨浴场之一。",
  recommend: 9
},

/* ================= 泰安市 ================= */
{
  name: "东平湖景区",
  type: "4A级景区",
  address: "山东省泰安市东平县",
  lng: 116.33121,
  lat: 35.92783,
  description: "山东第二大淡水湖。",
  recommend: 8
},
{
  name: "水泊梁山风景名胜区",
  type: "5A级景区",
  address: "山东省济宁市梁山县",
  lng: 116.10683,
  lat: 35.80321,
  description: "《水浒传》故事发源地。",
  recommend: 10
},

/* ================= 淄博市 ================= */
{
  name: "董子园风景区",
  type: "4A级景区",
  address: "山东省淄博市临淄区",
  lng: 118.31121,
  lat: 36.81883,
  description: "纪念儒家学者董仲舒的文化园区。",
  recommend: 7
},
{
  name: "潭溪山旅游区",
  type: "4A级景区",
  address: "山东省淄博市淄川区",
  lng: 118.05783,
  lat: 36.57521,
  description: "以峡谷、玻璃栈道闻名。",
  recommend: 9
},

/* ================= 枣庄 / 临沂 ================= */
{
  name: "峄山风景名胜区",
  type: "4A级景区",
  address: "山东省枣庄市峄城区",
  lng: 117.61121,
  lat: 34.72383,
  description: "以摩崖石刻和山岳文化著称。",
  recommend: 8
},
{
  name: "琅琊台风景区",
  type: "4A级景区",
  address: "山东省青岛市黄岛区",
  lng: 120.06841,
  lat: 35.87283,
  description: "秦始皇东巡驻跸地。",
  recommend: 8
},
{
  name: "沂南县朱家林创意小镇",
  type: "4A级景区",
  address: "山东省临沂市沂南县",
  lng: 118.42421,
  lat: 35.54683,
  description: "乡村创意与文旅融合示范区。",
  recommend: 7
},
{
  name: "栖霞太虚宫",
  type: "4A级景区",
  address: "山东省烟台市栖霞市",
  lng: 120.84983,
  lat: 37.32241,
  description: "道教文化与山林景观结合。",
  recommend: 7
},

/* ================= 德州 / 临沂 ================= */
{
  name: "德州金山寺",
  type: "4A级景区",
  address: "山东省德州市陵城区",
  lng: 116.57683,
  lat: 37.38521,
  description: "北方重要佛教寺院。",
  recommend: 7
},
{
  name: "郯城县银杏生态旅游区",
  type: "4A级景区",
  address: "山东省临沂市郯城县",
  lng: 118.32183,
  lat: 34.61321,
  description: "万亩银杏林生态景区。",
  recommend: 8
},

/* ================= 烟台市 ================= */
{
  name: "长岛·庙岛列岛",
  type: "5A级景区",
  address: "山东省烟台市蓬莱区",
  lng: 120.74183,
  lat: 38.06421,
  description: "北方海岛风光与海洋生态保护区。",
  recommend: 10
},

/* ================= 枣庄市 ================= */
{
  name: "熊耳山景区",
  type: "4A级景区",
  address: "山东省枣庄市山亭区",
  lng: 117.48821,
  lat: 35.13383,
  description: "以峡谷、奇石和山岳风光著称。",
  recommend: 8
},
{
  name: "滕州微山湖湿地红荷旅游区",
  type: "5A级景区",
  address: "山东省枣庄市滕州市",
  lng: 117.16683,
  lat: 34.80121,
  description: "万亩红荷湿地生态旅游区。",
  recommend: 10
},

/* ================= 东营市 ================= */
{
  name: "天宁寺文化旅游区",
  type: "4A级景区",
  address: "山东省东营市广饶县",
  lng: 118.43421,
  lat: 37.05983,
  description: "佛教文化与历史遗迹结合。",
  recommend: 7
},
{
  name: "红滩湿地旅游区",
  type: "4A级景区",
  address: "山东省东营市垦利区",
  lng: 118.96841,
  lat: 37.73283,
  description: "黄河入海口特色湿地景观。",
  recommend: 8
},

/* ================= 济宁市 ================= */
{
  name: "曲阜石门山风景区",
  type: "4A级景区",
  address: "山东省济宁市曲阜市",
  lng: 116.99183,
  lat: 35.54421,
  description: "以石刻文化和山林景观闻名。",
  recommend: 7
},
{
  name: "宝相寺",
  type: "4A级景区",
  address: "山东省济宁市汶上县",
  lng: 116.47683,
  lat: 35.73483,
  description: "千年佛教古刹，供奉佛牙舍利。",
  recommend: 8
},
{
  name: "尼山圣境",
  type: "5A级景区",
  address: "山东省济宁市曲阜市",
  lng: 117.07121,
  lat: 35.48783,
  description: "展示孔子思想和儒家文化的圣地。",
  recommend: 10
},
{
  name: "太白湖景区",
  type: "4A级景区",
  address: "山东省济宁市任城区",
  lng: 116.62321,
  lat: 35.36083,
  description: "城市湖泊型生态休闲景区。",
  recommend: 8
},
{
  name: "嘉祥青山景区",
  type: "4A级景区",
  address: "山东省济宁市嘉祥县",
  lng: 116.34041,
  lat: 35.41921,
  description: "集山水与佛教文化于一体。",
  recommend: 7
},

/* ================= 潍坊市 ================= */
{
  name: "欢乐海沙滩景区",
  type: "4A级景区",
  address: "山东省潍坊市滨海区",
  lng: 119.23521,
  lat: 37.07583,
  description: "滨海沙滩休闲娱乐度假区。",
  recommend: 8
},
{
  name: "青州九龙峪景区",
  type: "4A级景区",
  address: "山东省潍坊市青州市",
  lng: 118.51521,
  lat: 36.77083,
  description: "峡谷、瀑布与自然生态景观。",
  recommend: 8
},
{
  name: "安丘青云山民俗游乐园",
  type: "4A级景区",
  address: "山东省潍坊市安丘市",
  lng: 119.18983,
  lat: 36.42921,
  description: "民俗文化与游乐设施结合。",
  recommend: 7
},
{
  name: "临朐揽翠湖天沐温泉度假村",
  type: "4A级景区",
  address: "山东省潍坊市临朐县",
  lng: 118.50741,
  lat: 36.54783,
  description: "温泉康养与湖泊度假区。",
  recommend: 8
},

/* ================= 泰安市 ================= */
{
  name: "徂徕山森林温泉康养中心",
  type: "4A级景区",
  address: "山东省泰安市岱岳区",
  lng: 117.23021,
  lat: 36.02883,
  description: "森林温泉与康养度假结合。",
  recommend: 8
},
{
  name: "新泰莲花山新甫山风景区",
  type: "4A级景区",
  address: "山东省泰安市新泰市",
  lng: 117.72421,
  lat: 35.88183,
  description: "山岳佛教文化景区。",
  recommend: 7
},

/* ================= 威海市 ================= */
{
  name: "乳山银滩旅游度假区",
  type: "4A级景区",
  address: "山东省威海市乳山市",
  lng: 121.53921,
  lat: 36.91883,
  description: "以沙细水清著称的滨海度假区。",
  recommend: 9
},
{
  name: "石岛赤山风景名胜区",
  type: "4A级景区",
  address: "山东省威海市荣成市",
  lng: 122.45183,
  lat: 36.87621,
  description: "佛教文化与山海景观融合。",
  recommend: 8
},

/* ================= 烟台市 ================= */
{
  name: "昆嵛山国家森林公园",
  type: "4A级景区",
  address: "山东省烟台市牟平区",
  lng: 121.68521,
  lat: 37.34883,
  description: "道教名山，森林覆盖率高。",
  recommend: 9
},
{
  name: "大黑山岛",
  type: "4A级景区",
  address: "山东省烟台市长岛县",
  lng: 120.71983,
  lat: 38.09121,
  description: "海岛风光与渔家文化。",
  recommend: 8
},
{
  name: "牟氏庄园",
  type: "4A级景区",
  address: "山东省烟台市栖霞市",
  lng: 120.87383,
  lat: 37.30921,
  description: "中国北方最大的地主庄园。",
  recommend: 9
},
{
  name: "烟台山旅游景区",
  type: "4A级景区",
  address: "山东省烟台市芝罘区",
  lng: 121.40641,
  lat: 37.54683,
  description: "近代建筑群与海滨景观。",
  recommend: 9
},
{
  name: "蓬莱海洋极地世界",
  type: "4A级景区",
  address: "山东省烟台市蓬莱区",
  lng: 120.74921,
  lat: 37.82241,
  description: "大型海洋动物展示场馆。",
  recommend: 8
},

/* ================= 青岛市 ================= */
{
  name: "青岛森林野生动物世界",
  type: "4A级景区",
  address: "山东省青岛市黄岛区",
  lng: 120.02683,
  lat: 35.93521,
  description: "大型放养式野生动物园。",
  recommend: 9
},
{
  name: "藏马山景区",
  type: "4A级景区",
  address: "山东省青岛市黄岛区",
  lng: 119.95983,
  lat: 35.78821,
  description: "山地休闲与度假综合体。",
  recommend: 8
},

/* ================= 淄博市 ================= */
{
  name: "齐山风景区",
  type: "4A级景区",
  address: "山东省淄博市淄川区",
  lng: 117.89321,
  lat: 36.58483,
  description: "佛教文化与山岳景观结合。",
  recommend: 8
},
{
  name: "聊斋城",
  type: "4A级景区",
  address: "山东省淄博市淄川区",
  lng: 117.85741,
  lat: 36.56983,
  description: "以蒲松龄《聊斋志异》为主题。",
  recommend: 8
},
{
  name: "陶瓷琉璃博物馆",
  type: "4A级景区",
  address: "山东省淄博市张店区",
  lng: 118.01783,
  lat: 36.81421,
  description: "展示淄博陶瓷与琉璃文化。",
  recommend: 8
},

/* ================= 临沂市 ================= */
{
  name: "山东抱犊崮国家森林公园",
  type: "4A级景区",
  address: "山东省临沂市沂水县",
  lng: 118.36983,
  lat: 35.84021,
  description: "以崮型地貌和森林景观闻名。",
  recommend: 8
},
{
  name: "临沂市动植物园旅游区",
  type: "4A级景区",
  address: "山东省临沂市河东区",
  lng: 118.40241,
  lat: 35.08683,
  description: "集动物观赏与休闲游乐。",
  recommend: 7
},
{
  name: "沂南沂蒙红色影视基地景区",
  type: "4A级景区",
  address: "山东省临沂市沂南县",
  lng: 118.45241,
  lat: 35.58683,
  description: "红色文化影视拍摄基地。",
  recommend: 8
},
{
  name: "沂南竹泉村旅游区",
  type: "4A级景区",
  address: "山东省临沂市沂南县",
  lng: 118.41021,
  lat: 35.64283,
  description: "泉水古村落与民俗体验。",
  recommend: 9
},

/* ================= 聊城市 ================= */
{
  name: "东昌湖旅游区",
  type: "4A级景区",
  address: "山东省聊城市东昌府区",
  lng: 115.97921,
  lat: 36.45483,
  description: "城市湖泊与历史文化结合。",
  recommend: 8
},

/* ================= 滨州市 ================= */
{
  name: "杜受田故居",
  type: "4A级景区",
  address: "山东省滨州市滨城区",
  lng: 118.03183,
  lat: 37.38121,
  description: "清代名臣杜受田故居。",
  recommend: 7
},

/* ================= 日照市 ================= */
{
  name: "磴山风景区",
  type: "4A级景区",
  address: "山东省日照市东港区",
  lng: 119.41821,
  lat: 35.42083,
  description: "山海相连的自然风景区。",
  recommend: 7
},

/* ================= 菏泽市 ================= */
{
  name: "鱼山曹植墓景区",
  type: "4A级景区",
  address: "山东省菏泽市东明县",
  lng: 115.07521,
  lat: 35.27983,
  description: "三国文学家曹植安葬地。",
  recommend: 7
},

/* ================= 德州市 ================= */
{
  name: "泉城极地海洋世界景区",
  type: "4A级景区",
  address: "山东省德州市齐河县",
  lng: 116.79483,
  lat: 36.83121,
  description: "大型极地海洋主题公园。",
  recommend: 8
},
{
  name: "夏津德百温泉度假村",
  type: "4A级景区",
  address: "山东省德州市夏津县",
  lng: 116.00321,
  lat: 36.97383,
  description: "温泉养生与度假休闲区。",
  recommend: 7
},

/* ================= 聊城 ================= */
{
  name: "东阿阿胶城",
  type: "4A级景区",
  address: "山东省聊城市东阿县",
  lng: 116.24783,
  lat: 36.33241,
  description: "阿胶文化展示与体验基地。",
  recommend: 8
},

/* ================= 潍坊 / 诸城 ================= */
{
  name: "诸城恐龙博物馆",
  type: "4A级景区",
  address: "山东省潍坊市诸城市",
  lng: 119.39841,
  lat: 36.00483,
  description: "中国最大的恐龙化石专题博物馆。",
  recommend: 9
},

/* ================= 济宁 / 邹城 ================= */
{
  name: "孟庙孟府旅游区",
  type: "5A级景区",
  address: "山东省济宁市邹城市",
  lng: 116.97383,
  lat: 35.40521,
  description: "亚圣孟子故里，儒家文化圣地。",
  recommend: 10
},

/* ================= 淄博市 ================= */
{
  name: "淄博聊斋城",
  type: "4A级景区",
  address: "山东省淄博市淄川区",
  lng: 117.97321,
  lat: 36.61283,
  description: "以蒲松龄《聊斋志异》文化为主题的旅游景区。",
  recommend: 8
},
{
  name: "淄博陶瓷琉璃博物馆",
  type: "4A级景区",
  address: "山东省淄博市张店区",
  lng: 118.05541,
  lat: 36.80883,
  description: "展示淄博陶瓷与琉璃文化的重要博物馆。",
  recommend: 8
},
{
  name: "冠世榴园风景区",
  type: "4A级景区",
  address: "山东省淄博市博山区",
  lng: 117.86241,
  lat: 36.49483,
  description: "以万亩石榴园和山地风光著称。",
  recommend: 8
},

/* ================= 日照市 ================= */
{
  name: "日照磴山风景区",
  type: "4A级景区",
  address: "山东省日照市东港区",
  lng: 119.36683,
  lat: 35.40721,
  description: "集山岳景观与宗教文化于一体。",
  recommend: 7
},
{
  name: "万平口海滨风景区",
  type: "5A级景区",
  address: "山东省日照市东港区",
  lng: 119.52583,
  lat: 35.36421,
  description: "日照最具代表性的海滨旅游区。",
  recommend: 10
},
{
  name: "刘家湾赶海园",
  type: "4A级景区",
  address: "山东省日照市东港区",
  lng: 119.45021,
  lat: 35.48283,
  description: "以海洋民俗和赶海体验为特色。",
  recommend: 8
},
{
  name: "山东日照国家级海洋公园",
  type: "4A级景区",
  address: "山东省日照市岚山区",
  lng: 119.44841,
  lat: 35.09583,
  description: "海洋生态保护与观光旅游区。",
  recommend: 8
},

/* ================= 济宁市 ================= */
{
  name: "鱼山曹植墓景区",
  type: "4A级景区",
  address: "山东省济宁市鱼台县",
  lng: 116.70321,
  lat: 35.00883,
  description: "三国文学家曹植安葬地。",
  recommend: 7
},
{
  name: "济宁嘉祥青山景区",
  type: "4A级景区",
  address: "山东省济宁市嘉祥县",
  lng: 116.34583,
  lat: 35.40241,
  description: "集自然风光与石刻文化于一体。",
  recommend: 7
},
{
  name: "邹城市明鲁王陵景区",
  type: "4A级景区",
  address: "山东省济宁市邹城市",
  lng: 116.97821,
  lat: 35.40583,
  description: "明代鲁王陵寝建筑群。",
  recommend: 8
},

/* ================= 德州市 ================= */
{
  name: "夏津德百温泉度假村",
  type: "4A级景区",
  address: "山东省德州市夏津县",
  lng: 116.03783,
  lat: 36.95521,
  description: "集温泉康养与休闲度假于一体。",
  recommend: 8
},
{
  name: "德州泉城欧乐堡梦幻世界",
  type: "4A级景区",
  address: "山东省德州市齐河县",
  lng: 116.76241,
  lat: 36.79583,
  description: "大型主题游乐园，适合亲子游。",
  recommend: 9
},
{
  name: "乐陵千年枣林游览区",
  type: "4A级景区",
  address: "山东省德州市乐陵市",
  lng: 117.21983,
  lat: 37.70841,
  description: "以古枣林和生态农业为特色。",
  recommend: 7
},

/* ================= 聊城市 / 东阿 ================= */
{
  name: "东阿阿胶城",
  type: "4A级景区",
  address: "山东省聊城市东阿县",
  lng: 116.27041,
  lat: 36.33683,
  description: "展示阿胶文化和中医药历史。",
  recommend: 8
},

/* ================= 潍坊市 ================= */
{
  name: "临朐揽翠湖天沐温泉度假村",
  type: "4A级景区",
  address: "山东省潍坊市临朐县",
  lng: 118.54321,
  lat: 36.46483,
  description: "温泉康养与山水休闲度假区。",
  recommend: 8
},
{
  name: "寿光蔬菜高科技示范园",
  type: "4A级景区",
  address: "山东省潍坊市寿光市",
  lng: 118.79021,
  lat: 36.85583,
  description: "展示现代农业科技成果。",
  recommend: 7
},
{
  name: "金宝乐园",
  type: "4A级景区",
  address: "山东省潍坊市奎文区",
  lng: 119.12383,
  lat: 36.68321,
  description: "集游乐、动物观赏和休闲于一体。",
  recommend: 8
},

/* ================= 烟台市 ================= */
{
  name: "蓬莱海洋极地世界",
  type: "4A级景区",
  address: "山东省烟台市蓬莱区",
  lng: 120.74741,
  lat: 37.82283,
  description: "极地动物展示与海洋科普体验。",
  recommend: 8
},
{
  name: "蓬莱欧乐堡梦幻世界",
  type: "5A级景区",
  address: "山东省烟台市蓬莱区",
  lng: 120.75083,
  lat: 37.83521,
  description: "大型主题乐园与度假综合体。",
  recommend: 10
},

/* ================= 临沂市 ================= */
{
  name: "沂南竹泉村旅游区",
  type: "4A级景区",
  address: "山东省临沂市沂南县",
  lng: 118.44321,
  lat: 35.59483,
  description: "以竹林、泉水和古村落为特色。",
  recommend: 9
},
{
  name: "临沂观唐温泉度假村旅游区",
  type: "4A级景区",
  address: "山东省临沂市河东区",
  lng: 118.49041,
  lat: 35.10383,
  description: "集温泉养生与度假休闲于一体。",
  recommend: 8
},
{
  name: "山东沂水天上王城旅游区",
  type: "4A级景区",
  address: "山东省临沂市沂水县",
  lng: 118.65583,
  lat: 35.90841,
  description: "以崖壁城堡和历史文化为特色。",
  recommend: 8
},
{
  name: "临沂市兰陵国家农业公园旅游区",
  type: "4A级景区",
  address: "山东省临沂市兰陵县",
  lng: 118.07421,
  lat: 34.85883,
  description: "现代农业展示与休闲观光园区。",
  recommend: 7
},

/* ================= 青岛市 ================= */
{
  name: "青岛极地海洋公园",
  type: "4A级景区",
  address: "山东省青岛市崂山区",
  lng: 120.49783,
  lat: 36.09741,
  description: "极地海洋动物展示与表演。",
  recommend: 9
},
{
  name: "青岛奥林匹克雕塑文化园",
  type: "4A级景区",
  address: "山东省青岛市市南区",
  lng: 120.38321,
  lat: 36.07083,
  description: "奥运主题雕塑与滨海公园。",
  recommend: 7
},
{
  name: "青岛方特梦幻王国",
  type: "4A级景区",
  address: "山东省青岛市城阳区",
  lng: 120.39741,
  lat: 36.29583,
  description: "高科技主题游乐园。",
  recommend: 9
},
{
  name: "少海风景区",
  type: "4A级景区",
  address: "山东省青岛市胶州市",
  lng: 120.00683,
  lat: 36.29041,
  description: "湖泊湿地与休闲度假区。",
  recommend: 7
},

/* ================= 枣庄市 ================= */
{
  name: "台儿庄大战纪念馆",
  type: "4A级景区",
  address: "山东省枣庄市台儿庄区",
  lng: 117.73121,
  lat: 34.56683,
  description: "纪念台儿庄大战的重要红色景区。",
  recommend: 9
},

/* ================= 威海市 ================= */
{
  name: "威海荣成市那香海景区",
  type: "4A级景区",
  address: "山东省威海市荣成市",
  lng: 122.56041,
  lat: 37.39321,
  description: "以沙滩海岸和度假休闲为特色。",
  recommend: 9
},
{
  name: "成山头景区",
  type: "5A级景区",
  address: "山东省威海市荣成市",
  lng: 122.72041,
  lat: 37.39583,
  description: "中国大陆最东端，山海壮观。",
  recommend: 10
},

/* ================= 菏泽市 ================= */
{
  name: "曹州牡丹园",
  type: "4A级景区",
  address: "山东省菏泽市牡丹区",
  lng: 115.46283,
  lat: 35.24321,
  description: "中国最大的牡丹观赏园。",
  recommend: 9
},

/* ================= 泰安市 / 盈泰 ================= */
{
  name: "山东盈泰生态温泉度假村",
  type: "4A级景区",
  address: "山东省泰安市岱岳区",
  lng: 117.05183,
  lat: 36.10421,
  description: "温泉养生与生态度假区。",
  recommend: 8
},

/* ================= 青岛西海岸 ================= */
{
  name: "山东珠山国家森林公园",
  type: "4A级景区",
  address: "山东省青岛市黄岛区",
  lng: 120.07121,
  lat: 35.92283,
  description: "森林生态与山地休闲公园。",
  recommend: 8
},

/* ================= 日照市 ================= */
{
  name: "山东日照国家级海洋公园",
  type: "4A级景区",
  address: "山东省日照市东港区",
  lng: 119.55321,
  lat: 35.41183,
  description: "以滨海生态保护与休闲观光为主题。",
  recommend: 9
},
{
  name: "山东日照海滨国家森林公园",
  type: "4A级景区",
  address: "山东省日照市东港区",
  lng: 119.56183,
  lat: 35.47321,
  description: "海岸防护林与沙滩相结合的生态公园。",
  recommend: 9
},

/* ================= 德州市 ================= */
{
  name: "泉城欧乐堡梦幻世界",
  type: "4A级景区",
  address: "山东省德州市齐河县",
  lng: 116.72041,
  lat: 36.77983,
  description: "大型主题游乐园，适合亲子游玩。",
  recommend: 9
},

/* ================= 青岛市 ================= */
{
  name: "青岛世界园艺博览园",
  type: "4A级景区",
  address: "山东省青岛市李沧区",
  lng: 120.44621,
  lat: 36.17683,
  description: "展示全球园艺文化与生态景观。",
  recommend: 8
},
{
  name: "青岛海滨风景区",
  type: "5A级景区",
  address: "山东省青岛市市南区",
  lng: 120.38483,
  lat: 36.06183,
  description: "以栈桥、八大关等著名景点闻名。",
  recommend: 10
},

/* ================= 泰安市 ================= */
{
  name: "东平县白佛山景区",
  type: "4A级景区",
  address: "山东省泰安市东平县",
  lng: 116.36241,
  lat: 35.93283,
  description: "佛教文化与自然山景相结合。",
  recommend: 7
},
{
  name: "泰安方特欢乐世界",
  type: "4A级景区",
  address: "山东省泰安市泰山区",
  lng: 117.12421,
  lat: 36.21783,
  description: "高科技主题游乐园。",
  recommend: 9
},
{
  name: "泰安市太阳部落",
  type: "4A级景区",
  address: "山东省泰安市岱岳区",
  lng: 117.00683,
  lat: 36.12721,
  description: "以史前文化和民俗体验为主题。",
  recommend: 8
},

/* ================= 烟台市 ================= */
{
  name: "烟台金沙滩海滨公园",
  type: "4A级景区",
  address: "山东省烟台市开发区",
  lng: 121.21421,
  lat: 37.55883,
  description: "优质沙滩和滨海休闲胜地。",
  recommend: 9
},
{
  name: "养马岛旅游度假区",
  type: "4A级景区",
  address: "山东省烟台市牟平区",
  lng: 121.60383,
  lat: 37.45121,
  description: "以海岛风光和休闲度假著称。",
  recommend: 9
},
{
  name: "山东省天宇自然博物馆",
  type: "4A级景区",
  address: "山东省烟台市莱阳市",
  lng: 120.71683,
  lat: 36.98121,
  description: "以古生物化石收藏闻名。",
  recommend: 8
},
{
  name: "烟台市中粮君顶酒庄",
  type: "4A级景区",
  address: "山东省烟台市蓬莱区",
  lng: 120.77641,
  lat: 37.81683,
  description: "葡萄酒文化与酒庄旅游体验区。",
  recommend: 8
},

/* ================= 潍坊市 ================= */
{
  name: "昌邑青山秀水景区",
  type: "4A级景区",
  address: "山东省潍坊市昌邑市",
  lng: 119.42683,
  lat: 36.85921,
  description: "以山水景观和生态休闲为特色。",
  recommend: 7
},

/* ================= 威海市 ================= */
{
  name: "威海里口山风景名胜区",
  type: "4A级景区",
  address: "山东省威海市环翠区",
  lng: 122.09321,
  lat: 37.49483,
  description: "山海相连的自然生态景区。",
  recommend: 8
},

/* ================= 临沂市 ================= */
{
  name: "黑虎山狩猎旅游区",
  type: "4A级景区",
  address: "山东省临沂市沂水县",
  lng: 118.64683,
  lat: 35.83121,
  description: "集生态观光与户外体验于一体。",
  recommend: 7
},
{
  name: "临沂蒙阴县岱崮地貌旅游区",
  type: "4A级景区",
  address: "山东省临沂市蒙阴县",
  lng: 117.94321,
  lat: 35.78283,
  description: "独特的崮状地貌自然奇观。",
  recommend: 9
},
{
  name: "临沂市科技馆",
  type: "4A级景区",
  address: "山东省临沂市兰山区",
  lng: 118.36041,
  lat: 35.07283,
  description: "互动式科普教育场馆。",
  recommend: 7
},
{
  name: "浮来山风景区",
  type: "4A级景区",
  address: "山东省临沂市莒南县",
  lng: 118.76421,
  lat: 35.59421,
  description: "以古银杏和佛教文化闻名。",
  recommend: 8
},
{
  name: "临沂孟良崮旅游区",
  type: "5A级景区",
  address: "山东省临沂市蒙阴县",
  lng: 117.99241,
  lat: 35.71083,
  description: "重要红色革命纪念地。",
  recommend: 10
},

/* ================= 菏泽市 ================= */
{
  name: "浮来青旅游度假区",
  type: "4A级景区",
  address: "山东省菏泽市郓城县",
  lng: 115.99521,
  lat: 35.60783,
  description: "集生态观光与休闲度假为一体。",
  recommend: 7
},
{
  name: "单县浮龙湖生态旅游景区",
  type: "4A级景区",
  address: "山东省菏泽市单县",
  lng: 116.08783,
  lat: 34.82921,
  description: "大型湖泊生态休闲旅游区。",
  recommend: 8
},
{
  name: "水浒好汉城",
  type: "4A级景区",
  address: "山东省菏泽市郓城县",
  lng: 115.99321,
  lat: 35.60483,
  description: "以《水浒传》文化为主题。",
  recommend: 8
},
{
  name: "巨野金山旅游度假区",
  type: "4A级景区",
  address: "山东省菏泽市巨野县",
  lng: 116.10241,
  lat: 35.38883,
  description: "山地休闲与度假景区。",
  recommend: 7
},
{
  name: "景阳冈·狮子楼旅游区",
  type: "4A级景区",
  address: "山东省聊城市阳谷县",
  lng: 115.78583,
  lat: 36.11821,
  description: "水浒故事发源地之一。",
  recommend: 8
},

/* ================= 淄博市 ================= */
{
  name: "鲁山溶洞群风景区",
  type: "4A级景区",
  address: "山东省淄博市沂源县",
  lng: 118.14421,
  lat: 36.16783,
  description: "规模宏大的喀斯特溶洞群。",
  recommend: 8
},

/* ================= 日照市 ================= */
{
  name: "日照海滨国家森林公园",
  type: "4A级景区",
  address: "山东省日照市东港区",
  lng: 119.57521,
  lat: 35.45783,
  description: "集森林、沙滩、海岸于一体的滨海生态公园。",
  recommend: 9
},

/* ================= 淄博市 ================= */
{
  name: "黑虎山狩猎旅游区",
  type: "4A级景区",
  address: "山东省淄博市博山区",
  lng: 117.90241,
  lat: 36.47183,
  description: "以山林生态与狩猎文化体验为特色。",
  recommend: 7
},
{
  name: "岜山中医药健康旅游景区",
  type: "4A级景区",
  address: "山东省淄博市淄川区",
  lng: 117.95383,
  lat: 36.59821,
  description: "融合中医药文化与康养旅游。",
  recommend: 7
},

/* ================= 临沂市 ================= */
{
  name: "蒙阴县岱崮地貌旅游区",
  type: "4A级景区",
  address: "山东省临沂市蒙阴县",
  lng: 117.93841,
  lat: 35.75883,
  description: "中国罕见的崮状地貌景观群。",
  recommend: 9
},
{
  name: "临沂市科技馆",
  type: "4A级景区",
  address: "山东省临沂市兰山区",
  lng: 118.34841,
  lat: 35.07921,
  description: "集科普教育与互动体验于一体。",
  recommend: 7
},
{
  name: "孟良崮旅游区",
  type: "5A级景区",
  address: "山东省临沂市蒙阴县",
  lng: 117.94421,
  lat: 35.73183,
  description: "著名革命纪念地，红色旅游经典。",
  recommend: 10
},
{
  name: "沂水雪山彩虹谷风景区",
  type: "4A级景区",
  address: "山东省临沂市沂水县",
  lng: 118.63421,
  lat: 36.00683,
  description: "以彩虹谷、雪山与娱乐项目著称。",
  recommend: 8
},
{
  name: "临沂龙园旅游区",
  type: "4A级景区",
  address: "山东省临沂市河东区",
  lng: 118.45841,
  lat: 35.11883,
  description: "以龙文化和大型雕塑群为特色。",
  recommend: 8
},
{
  name: "莒南山东省政府和八路军115师司令部旧址旅游区",
  type: "4A级景区",
  address: "山东省临沂市莒南县",
  lng: 118.86683,
  lat: 35.17521,
  description: "重要抗战时期革命旧址。",
  recommend: 9
},

/* ================= 日照 / 莒县 ================= */
{
  name: "浮来山风景区",
  type: "4A级景区",
  address: "山东省日照市莒县",
  lng: 118.81121,
  lat: 35.59383,
  description: "以古银杏和佛教文化闻名。",
  recommend: 8
},

/* ================= 烟台市 ================= */
{
  name: "中粮君顶酒庄",
  type: "4A级景区",
  address: "山东省烟台市蓬莱区",
  lng: 120.73321,
  lat: 37.81283,
  description: "集葡萄酒酿造、品鉴与观光于一体。",
  recommend: 8
},
{
  name: "烟台磁山温泉小镇",
  type: "4A级景区",
  address: "山东省烟台市牟平区",
  lng: 121.51541,
  lat: 37.37883,
  description: "以温泉养生和度假休闲为主题。",
  recommend: 8
},

/* ================= 枣庄市 ================= */
{
  name: "滕州市墨子纪念馆",
  type: "4A级景区",
  address: "山东省枣庄市滕州市",
  lng: 117.16521,
  lat: 35.09183,
  description: "纪念墨子思想与墨家文化。",
  recommend: 7
},
{
  name: "铁道游击队纪念园",
  type: "4A级景区",
  address: "山东省枣庄市薛城区",
  lng: 117.23841,
  lat: 34.79383,
  description: "以铁道游击队英雄事迹为主题。",
  recommend: 9
},

/* ================= 青岛市 ================= */
{
  name: "青岛啤酒博物馆",
  type: "4A级景区",
  address: "山东省青岛市市北区",
  lng: 120.33783,
  lat: 36.08121,
  description: "展示百年青岛啤酒历史与工艺。",
  recommend: 9
},
{
  name: "青岛灵山湾城市休闲旅游区",
  type: "4A级景区",
  address: "山东省青岛市黄岛区",
  lng: 120.05783,
  lat: 35.90321,
  description: "滨海休闲、文化与度假综合区。",
  recommend: 8
},
{
  name: "青岛天泰温泉度假区",
  type: "4A级景区",
  address: "山东省青岛市即墨区",
  lng: 120.53183,
  lat: 36.43283,
  description: "以海洋温泉和度假酒店为特色。",
  recommend: 8
},

/* ================= 济南市 ================= */
{
  name: "宏济堂中医药文化旅游景区",
  type: "4A级景区",
  address: "山东省济南市历城区",
  lng: 117.07241,
  lat: 36.66883,
  description: "展示中医药文化与百年制药历史。",
  recommend: 8
},

/* ================= 泰安市 ================= */
{
  name: "肥城市春秋古镇景区",
  type: "4A级景区",
  address: "山东省泰安市肥城市",
  lng: 116.76321,
  lat: 36.18283,
  description: "以春秋文化和古镇风貌为主题。",
  recommend: 7
},
{
  name: "泰山天颐湖旅游度假区",
  type: "4A级景区",
  address: "山东省泰安市岱岳区",
  lng: 117.05841,
  lat: 36.14621,
  description: "湖泊度假、亲子游乐综合区。",
  recommend: 8
},
{
  name: "揽翠湖旅游度假区",
  type: "4A级景区",
  address: "山东省泰安市泰山区",
  lng: 117.09521,
  lat: 36.20383,
  description: "以湖景休闲与生态旅游为主。",
  recommend: 7
},

/* ================= 济宁市 ================= */
{
  name: "红色刘集旅游景区",
  type: "4A级景区",
  address: "山东省济宁市梁山县",
  lng: 116.10421,
  lat: 35.80183,
  description: "鲁西南重要红色革命遗址。",
  recommend: 8
},
{
  name: "羊山古镇军事旅游区",
  type: "4A级景区",
  address: "山东省济宁市金乡县",
  lng: 116.34241,
  lat: 35.03521,
  description: "军事文化与古镇旅游结合。",
  recommend: 8
},

/* ================= 淄博 / 沂源 ================= */
{
  name: "源泉开元溶洞",
  type: "4A级景区",
  address: "山东省淄博市沂源县",
  lng: 118.15683,
  lat: 36.23321,
  description: "典型喀斯特溶洞景观。",
  recommend: 8
},

/* ================= 威海市 ================= */
{
  name: "威海天沐温泉度假区",
  type: "4A级景区",
  address: "山东省威海市文登区",
  lng: 122.01683,
  lat: 37.16883,
  description: "集温泉养生与海滨度假于一体。",
  recommend: 8
},

/* ================= 潍坊市 ================= */
{
  name: "诸城市动物园",
  type: "4A级景区",
  address: "山东省潍坊市诸城市",
  lng: 119.41041,
  lat: 35.99121,
  description: "集动物观赏与科普教育于一体。",
  recommend: 7
},

/* ================= 东营市 ================= */
{
  name: "河口区鸣翠湖湿地风景区",
  type: "4A级景区",
  address: "山东省东营市河口区",
  lng: 118.51241,
  lat: 37.89283,
  description: "黄河三角洲湿地生态景观。",
  recommend: 8
},
{
  name: "莲花湖湿地景区",
  type: "4A级景区",
  address: "山东省东营市东营区",
  lng: 118.47421,
  lat: 37.45683,
  description: "城市湿地公园与生态休闲区。",
  recommend: 7
},

/* ================= 淄博 ================= */
{
  name: "齐文化博物馆",
  type: "4A级景区",
  address: "山东省淄博市临淄区",
  lng: 118.30983,
  lat: 36.82241,
  description: "系统展示齐国历史与齐文化精髓。",
  recommend: 9
},
{
  name: "淄博马踏湖风景区",
  type: "4A级景区",
  address: "山东省淄博市桓台县",
  lng: 118.08921,
  lat: 37.01183,
  description: "北方水乡湿地生态景区。",
  recommend: 8
},
{
  name: "临淄古车馆·太公生态文化旅游区",
  type: "4A级景区",
  address: "山东省淄博市临淄区",
  lng: 118.32321,
  lat: 36.81983,
  description: "展示中国古代车马文化与姜太公文化。",
  recommend: 8
},
{
  name: "山东原山国家森林公园",
  type: "4A级景区",
  address: "山东省淄博市博山区",
  lng: 117.89183,
  lat: 36.48921,
  description: "集森林康养与生态旅游于一体。",
  recommend: 8
},
{
  name: "淄博市王渔洋故里景区",
  type: "4A级景区",
  address: "山东省淄博市博山区",
  lng: 117.85841,
  lat: 36.47383,
  description: "清代文学家王渔洋故里。",
  recommend: 7
},
{
  name: "博山陶瓷琉璃艺术中心",
  type: "4A级景区",
  address: "山东省淄博市博山区",
  lng: 117.86183,
  lat: 36.49521,
  description: "展示博山陶瓷与琉璃艺术。",
  recommend: 8
},

/* ================= 聊城 ================= */
{
  name: "临清宛园",
  type: "4A级景区",
  address: "山东省聊城市临清市",
  lng: 115.70241,
  lat: 36.84321,
  description: "明清园林风格的私家园林。",
  recommend: 7
},

/* ================= 济南 ================= */
{
  name: "五埠岭伙大门景区",
  type: "4A级景区",
  address: "山东省济南市历城区",
  lng: 117.18421,
  lat: 36.65483,
  description: "以红色文化和乡村旅游为特色。",
  recommend: 7
},
{
  name: "山东百脉泉酒业景区",
  type: "4A级景区",
  address: "山东省济南市章丘区",
  lng: 117.53521,
  lat: 36.71383,
  description: "展示白酒酿造工艺与百脉泉文化。",
  recommend: 7
},

/* ================= 泰安 ================= */
{
  name: "宁阳县复圣文化旅游区",
  type: "4A级景区",
  address: "山东省泰安市宁阳县",
  lng: 116.79421,
  lat: 35.76183,
  description: "纪念复圣颜回的儒家文化景区。",
  recommend: 8
},

/* ================= 临沂 ================= */
{
  name: "平邑县九间棚景区",
  type: "4A级景区",
  address: "山东省临沂市平邑县",
  lng: 117.64183,
  lat: 35.51021,
  description: "山区生态修复与乡村振兴典范。",
  recommend: 8
},
{
  name: "龙门崮旅游度假区",
  type: "4A级景区",
  address: "山东省临沂市沂水县",
  lng: 118.41121,
  lat: 35.95183,
  description: "沂蒙山地貌与休闲度假结合。",
  recommend: 8
},
{
  name: "沂南沂蒙马泉休闲园旅游区",
  type: "4A级景区",
  address: "山东省临沂市沂南县",
  lng: 118.38183,
  lat: 35.53721,
  description: "集温泉、民宿、田园体验于一体。",
  recommend: 8
},
{
  name: "临沂市皇山东夷文化休闲旅游区",
  type: "4A级景区",
  address: "山东省临沂市河东区",
  lng: 118.43421,
  lat: 35.10383,
  description: "展示东夷文化与自然景观。",
  recommend: 7
},
{
  name: "沂水东方瑞海国际温泉度假村",
  type: "4A级景区",
  address: "山东省临沂市沂水县",
  lng: 118.60241,
  lat: 35.81183,
  description: "高端温泉康养度假区。",
  recommend: 8
},
{
  name: "费县沂蒙云瀑洞天旅游区",
  type: "4A级景区",
  address: "山东省临沂市费县",
  lng: 117.95241,
  lat: 35.28583,
  description: "以瀑布群和溶洞景观著称。",
  recommend: 8
},
{
  name: "临沂天谷旅游景区",
  type: "4A级景区",
  address: "山东省临沂市兰山区",
  lng: 118.33041,
  lat: 35.11921,
  description: "都市休闲与文化体验综合区。",
  recommend: 7
},
{
  name: "临沂沂南县红石寨旅游区",
  type: "4A级景区",
  address: "山东省临沂市沂南县",
  lng: 118.46241,
  lat: 35.57483,
  description: "石寨建筑与红色文化结合。",
  recommend: 8
},
{
  name: "沂南智圣汤泉旅游度假村旅游区",
  type: "4A级景区",
  address: "山东省临沂市沂南县",
  lng: 118.40583,
  lat: 35.54121,
  description: "以诸葛亮文化与温泉养生为主题。",
  recommend: 8
},

/* ================= 烟台 ================= */
{
  name: "烟台海昌渔人码头旅游景区",
  type: "4A级景区",
  address: "山东省烟台市莱山区",
  lng: 121.45041,
  lat: 37.45883,
  description: "滨海休闲与海洋文化综合区。",
  recommend: 8
},
{
  name: "烟台张裕国际葡萄酒城",
  type: "4A级景区",
  address: "山东省烟台市芝罘区",
  lng: 121.37841,
  lat: 37.54083,
  description: "世界知名葡萄酒文化展示区。",
  recommend: 9
},
{
  name: "烟台张裕酒文化博物馆",
  type: "4A级景区",
  address: "山东省烟台市芝罘区",
  lng: 121.37721,
  lat: 37.54183,
  description: "中国葡萄酒工业发源地博物馆。",
  recommend: 9
},
{
  name: "山东莱阳白垩纪地质公园",
  type: "4A级景区",
  address: "山东省烟台市莱阳市",
  lng: 120.73841,
  lat: 36.99421,
  description: "恐龙化石与地质遗迹景区。",
  recommend: 8
},
{
  name: "招远罗山黄金生态旅游区",
  type: "4A级景区",
  address: "山东省烟台市招远市",
  lng: 120.42121,
  lat: 37.37983,
  description: "黄金文化与生态旅游融合。",
  recommend: 8
},
{
  name: "烟台市大基山旅游景区",
  type: "4A级景区",
  address: "山东省烟台市牟平区",
  lng: 121.66741,
  lat: 37.30083,
  description: "山海景观与休闲登山胜地。",
  recommend: 7
},

/* ================= 青岛 ================= */
{
  name: "石老人观光园",
  type: "4A级景区",
  address: "山东省青岛市崂山区",
  lng: 120.48921,
  lat: 36.09683,
  description: "滨海礁石景观与城市观光区。",
  recommend: 8
},
{
  name: "青岛滨海学院世界动物自然生态博物馆",
  type: "4A级景区",
  address: "山东省青岛市黄岛区",
  lng: 120.03783,
  lat: 35.87241,
  description: "大型自然生态与动物标本博物馆。",
  recommend: 8
},
{
  name: "青岛葡萄酒博物馆",
  type: "4A级景区",
  address: "山东省青岛市市北区",
  lng: 120.34583,
  lat: 36.07241,
  description: "展示葡萄酒文化与历史。",
  recommend: 7
},
{
  name: "青岛银海国际游艇俱乐部旅游区",
  type: "4A级景区",
  address: "山东省青岛市市南区",
  lng: 120.38721,
  lat: 36.05883,
  description: "高端游艇休闲与海洋旅游区。",
  recommend: 8
},

/* ================= 潍坊 ================= */
{
  name: "潍坊十笏园文化街区",
  type: "4A级景区",
  address: "山东省潍坊市潍城区",
  lng: 119.09541,
  lat: 36.71283,
  description: "清代私家园林与文化街区。",
  recommend: 8
},
{
  name: "杨家埠民间艺术大观园",
  type: "4A级景区",
  address: "山东省潍坊市寒亭区",
  lng: 119.17583,
  lat: 36.79821,
  description: "木版年画与民俗文化展示。",
  recommend: 8
},
{
  name: "高密红高粱小镇",
  type: "4A级景区",
  address: "山东省潍坊市高密市",
  lng: 119.75121,
  lat: 36.38683,
  description: "莫言文学与乡村文化结合。",
  recommend: 8
},
{
  name: "寿光林海生态博览园",
  type: "4A级景区",
  address: "山东省潍坊市寿光市",
  lng: 118.86421,
  lat: 37.03883,
  description: "生态林海与休闲农业景区。",
  recommend: 8
},
{
  name: "寿光水上王城·洰淀湖风景区",
  type: "4A级景区",
  address: "山东省潍坊市寿光市",
  lng: 118.79641,
  lat: 37.06783,
  description: "湖泊湿地与水上娱乐景区。",
  recommend: 8
},
{
  name: "诸城常山风景区",
  type: "4A级景区",
  address: "山东省潍坊市诸城市",
  lng: 119.42241,
  lat: 36.02283,
  description: "山岳景观与文化休闲区。",
  recommend: 7
},
{
  name: "诸城恐龙文化旅游区",
  type: "4A级景区",
  address: "山东省潍坊市诸城市",
  lng: 119.39521,
  lat: 35.99741,
  description: "恐龙化石与科普体验景区。",
  recommend: 8
},

/* ================= 滨州 ================= */
{
  name: "滨州孙武古城旅游区",
  type: "4A级景区",
  address: "山东省滨州市惠民县",
  lng: 117.50841,
  lat: 37.48921,
  description: "兵圣孙武故里与古城景观。",
  recommend: 9
},
{
  name: "孙膑旅游城·亿城寺景区",
  type: "4A级景区",
  address: "山东省滨州市邹平市",
  lng: 117.76421,
  lat: 36.86383,
  description: "孙膑文化与佛教文化融合。",
  recommend: 8
},
{
  name: "麻大湖景区",
  type: "4A级景区",
  address: "山东省滨州市博兴县",
  lng: 118.12641,
  lat: 37.15683,
  description: "湖泊湿地与渔文化景区。",
  recommend: 7
},
{
  name: "孤岛槐树林温泉旅游区",
  type: "4A级景区",
  address: "山东省滨州市沾化区",
  lng: 118.05021,
  lat: 37.69983,
  description: "槐林温泉与生态休闲区。",
  recommend: 7
},
{
  name: "仙坛山旅游区",
  type: "4A级景区",
  address: "山东省滨州市无棣县",
  lng: 117.94841,
  lat: 37.74083,
  description: "道教文化与山地景观。",
  recommend: 7
},
{
  name: "魏集古村落",
  type: "4A级景区",
  address: "山东省滨州市惠民县",
  lng: 117.60383,
  lat: 37.51821,
  description: "明清风格黄河古村落。",
  recommend: 8
},

/* ================= 菏泽 ================= */
{
  name: "单县幵山景区",
  type: "4A级景区",
  address: "山东省菏泽市单县",
  lng: 116.06041,
  lat: 34.76283,
  description: "山岳景观与佛教文化结合。",
  recommend: 7
},
{
  name: "曹县黄河故道湿地风景区",
  type: "4A级景区",
  address: "山东省菏泽市曹县",
  lng: 115.59841,
  lat: 34.82683,
  description: "黄河故道湿地生态保护区。",
  recommend: 7
},

/* ================= 日照 ================= */
{
  name: "日照大青山景区",
  type: "4A级景区",
  address: "山东省日照市岚山区",
  lng: 119.28721,
  lat: 35.04383,
  description: "山海相依的自然风景区。",
  recommend: 8
},

/* ================= 威海 ================= */
{
  name: "威海福如东海文化园",
  type: "4A级景区",
  address: "山东省威海市文登区",
  lng: 122.08321,
  lat: 37.19383,
  description: "福寿文化与园林景观。",
  recommend: 8
},
{
  name: "环翠楼公园",
  type: "4A级景区",
  address: "山东省威海市环翠区",
  lng: 122.12041,
  lat: 37.50121,
  description: "威海城市地标公园。",
  recommend: 8
},
{
  name: "威海海滨生态公园风景带·侨乡号游轮",
  type: "4A级景区",
  address: "山东省威海市环翠区",
  lng: 122.14321,
  lat: 37.50041,
  description: "滨海风景带与海上观光体验。",
  recommend: 8
},
{
  name: "仙姑顶景区",
  type: "4A级景区",
  address: "山东省威海市环翠区",
  lng: 122.09583,
  lat: 37.47621,
  description: "威海市区制高点观景胜地。",
  recommend: 8
},

/* ================= 东营 ================= */
{
  name: "林海湾旅游区",
  type: "4A级景区",
  address: "山东省东营市垦利区",
  lng: 118.74241,
  lat: 37.66983,
  description: "黄河入海口生态旅游区。",
  recommend: 7
},

/* ================= 枣庄 ================= */
{
  name: "南阳古镇",
  type: "4A级景区",
  address: "山东省枣庄市微山县",
  lng: 117.09421,
  lat: 34.72483,
  description: "运河文化与湖区古镇。",
  recommend: 8
},

/* ================= 济宁 ================= */
{
  name: "孙子文化旅游度假区",
  type: "4A级景区",
  address: "山东省济宁市邹城市",
  lng: 116.99241,
  lat: 35.39883,
  description: "兵法文化与休闲度假融合。",
  recommend: 9
},

/* ================= 其他 ================= */
{
  name: "茶山风景区",
  type: "4A级景区",
  address: "山东省临沂市莒南县",
  lng: 118.70841,
  lat: 35.21983,
  description: "茶文化与山地景观结合。",
  recommend: 7
},
{
  name: "华东百利葡萄酒庄园",
  type: "4A级景区",
  address: "山东省烟台市蓬莱区",
  lng: 120.76421,
  lat: 37.82483,
  description: "葡萄酒庄体验与观光。",
  recommend: 7
},
{
  name: "上九山村旅游景区",
  type: "4A级景区",
  address: "山东省济南市南部山区",
  lng: 117.09921,
  lat: 36.52983,
  description: "山村生态与乡村旅游。",
  recommend: 7
},
{
  name: "蒲湖风景区",
  type: "4A级景区",
  address: "山东省潍坊市安丘市",
  lng: 119.21421,
  lat: 36.47283,
  description: "湖泊湿地与休闲景区。",
  recommend: 7
},
{
  name: "临港区无极鬼谷旅游区",
  type: "4A级景区",
  address: "山东省威海市临港区",
  lng: 121.97241,
  lat: 37.12983,
  description: "鬼谷子文化与山地景观。",
  recommend: 7
},
{
  name: "明月海藻世界",
  type: "4A级景区",
  address: "山东省青岛市即墨区",
  lng: 120.52983,
  lat: 36.38921,
  description: "海藻主题科普与体验园。",
  recommend: 7
},
{
  name: "鑫诚现代农业示范园",
  type: "4A级景区",
  address: "山东省潍坊市青州市",
  lng: 118.45121,
  lat: 36.71183,
  description: "现代农业展示与休闲体验。",
  recommend: 7
},
{
  name: "郯国故城",
  type: "4A级景区",
  address: "山东省临沂市郯城县",
  lng: 118.34583,
  lat: 34.61121,
  description: "古郯国历史遗址。",
  recommend: 7
},

    // ==================== 海南省 (15家) ====================
    { name: "海口火山口公园", type: "4A级景区", address: "海南省海口市秀英区", lng: 110.2215, lat: 19.9342, description: "以火山地质遗迹为核心的公园。", recommend: 7 },
    { name: "三亚天涯海角", type: "4A级景区", address: "海南省三亚市天涯区", lng: 109.3505, lat: 18.2956, description: "海南标志性景观，以碧海礁石闻名。", recommend: 8 },
    { name: "琼海博鳌亚洲论坛永久会址", type: "4A级景区", address: "海南省琼海市博鳌镇", lng: 110.5918, lat: 19.1522, description: "博鳌亚洲论坛的定期会议所在地。", recommend: 7 },
    { name: "万宁兴隆热带植物园", type: "4A级景区", address: "海南省万宁市兴隆镇", lng: 110.2012, lat: 18.7345, description: "汇集数千种热带植物的科普基地。", recommend: 7 },
    { name: "陵水南湾猴岛", type: "4A级景区", address: "海南省陵水县新村镇", lng: 109.9834, lat: 18.3987, description: "世界上唯一的岛屿型猕猴保护区。", recommend: 7 },
    { name: "三亚南山文化旅游区", type: "5A级景区", address: "海南省三亚市崖州区", lng: 109.2078, lat: 18.3067, description: "展示佛教文化与长寿文化的综合景区。", recommend: 8 },
    { name: "三亚大小洞天旅游区", type: "5A级景区", address: "海南省三亚市崖州区", lng: 109.1645, lat: 18.3012, description: "中国南端的道家文化旅游胜地。", recommend: 7 },
    { name: "琼海博鳌水城", type: "4A级景区", address: "海南省琼海市博鳌镇", lng: 110.5950, lat: 19.1600, description: "集江、河、海、山、岛于一体的度假区。", recommend: 6 },
    { name: "万宁日月湾海门游览区", type: "4A级景区", address: "海南省万宁市礼纪镇", lng: 110.1654, lat: 18.6543, description: "著名的冲浪胜地与民俗文化区。", recommend: 6 },
    { name: "陵水分界洲岛旅游区", type: "5A级景区", address: "海南省陵水县光坡镇", lng: 110.1123, lat: 18.4876, description: "海水清澈，适合潜水与海上运动。", recommend: 8 },
    { name: "保亭呀诺达雨林文化旅游区", type: "5A级景区", address: "海南省保亭县三道镇", lng: 109.6543, lat: 18.4567, description: "地处北纬18度的热带雨林景观。", recommend: 8 },
    { name: "五指山热带雨林风景区", type: "4A级景区", address: "海南省五指山市水满乡", lng: 109.6876, lat: 18.9012, description: "以海南最高峰五指山为核心的雨林。", recommend: 7 },
    { name: "乐东尖峰岭国家森林公园", type: "4A级景区", address: "海南省乐东县尖峰镇", lng: 108.8432, lat: 18.6987, description: "保存最完好的原始热带雨林之一。", recommend: 7 },
    { name: "澄迈红树林旅游区", type: "4A级景区", address: "海南省澄迈县大丰镇", lng: 110.0123, lat: 19.9543, description: "独特的红树林湿地生态景观。", recommend: 6 },
    { name: "儋州东坡书院", type: "4A级景区", address: "海南省儋州市中和镇", lng: 109.2134, lat: 19.7345, description: "纪念北宋大文豪苏东坡的文化遗址。", recommend: 6 },

    // ==================== 重庆市 (27家) ====================
    { name: "磁器口古镇", type: "4A级景区", address: "重庆市沙坪坝区", lng: 106.4478, lat: 29.5812, description: "重庆著名的历史文化街区。", recommend: 8 },
    { name: "园博园", type: "4A级景区", address: "重庆市渝北区", lng: 106.5543, lat: 29.6987, description: "汇集国内外园林景观的博览园。", recommend: 7 },
    { name: "重庆野生动物世界", type: "4A级景区", address: "重庆市永川区", lng: 105.8432, lat: 29.3012, description: "大型野生动物主题公园。", recommend: 7 },
    { name: "武隆天生三桥", type: "5A级景区", address: "重庆市武隆区", lng: 107.8012, lat: 29.4234, description: "规模宏大的天生石拱桥群。", recommend: 8 },
    { name: "江津四面山", type: "5A级景区", address: "重庆市江津区", lng: 106.4012, lat: 28.5876, description: "以瀑布、森林、丹霞地貌著称。", recommend: 7 },
    { name: "重庆欢乐谷", type: "4A级景区", address: "重庆市渝北区", lng: 106.5123, lat: 29.6876, description: "现代大型主题游乐园。", recommend: 7 },
    { name: "重庆大足石刻", type: "5A级景区", address: "重庆市大足区", lng: 105.7987, lat: 29.7543, description: "世界文化遗产，精美的石窟艺术。", recommend: 8 },
    { name: "重庆巫山小三峡-小小三峡", type: "5A级景区", address: "重庆市巫山县", lng: 109.8876, lat: 31.0876, description: "长江三峡支流上的奇秀景观。", recommend: 8 },
    { name: "重庆武隆喀斯特旅游区", type: "5A级景区", address: "重庆市武隆区", lng: 107.7543, lat: 29.4567, description: "世界自然遗产，典型的喀斯特地貌。", recommend: 8 },
    { name: "重庆酉阳桃花源", type: "5A级景区", address: "重庆市酉阳县", lng: 108.7654, lat: 28.8432, description: "还原陶渊明笔下的世外桃源。", recommend: 7 },
    { name: "重庆万盛黑山谷景区", type: "5A级景区", address: "重庆市万盛经开区", lng: 106.9876, lat: 28.8987, description: "峡谷幽深，生态环境优越。", recommend: 7 },
    { name: "重庆南川金佛山", type: "5A级景区", address: "重庆市南川区", lng: 107.1876, lat: 29.0123, description: "生物多样性丰富的名山。", recommend: 7 },
    { name: "重庆黔江濯水景区", type: "5A级景区", address: "重庆市黔江区", lng: 108.8123, lat: 29.3123, description: "拥有著名的风雨廊桥。", recommend: 7 },
    { name: "重庆合川钓鱼城景区", type: "4A级景区", address: "重庆市合川区", lng: 106.3012, lat: 30.0123, description: "改变世界历史的古战场遗址。", recommend: 7 },
    { name: "重庆永川乐和乐都主题公园", type: "4A级景区", address: "重庆市永川区", lng: 105.8543, lat: 29.3123, description: "集动物园与游乐场于一体。", recommend: 7 },
    { name: "重庆北碚缙云山国家级自然保护区", type: "4A级景区", address: "重庆市北碚区", lng: 106.3987, lat: 29.8432, description: "佛教胜地与自然保护区。", recommend: 7 },
    { name: "重庆巴南丰盛古镇", type: "4A级景区", address: "重庆市巴南区", lng: 106.8123, lat: 29.5123, description: "保存完好的明清风格古镇。", recommend: 6 },
    { name: "重庆长寿湖旅游区", type: "4A级景区", address: "重庆市长寿区", lng: 107.1234, lat: 29.9123, description: "西南地区最大的人工湖。", recommend: 6 },
    { name: "重庆綦江古剑山景区", type: "4A级景区", address: "重庆市綦江区", lng: 106.6123, lat: 28.9876, description: "著名的佛教名山与康养胜地。", recommend: 6 },
    { name: "重庆璧山观音塘湿地公园", type: "4A级景区", address: "重庆市璧山区", lng: 106.2134, lat: 29.5876, description: "城市湿地公园，环境优美。", recommend: 6 },
    { name: "重庆铜梁安居古城", type: "4A级景区", address: "重庆市铜梁区", lng: 106.0123, lat: 29.9123, description: "历史悠久的江畔古城。", recommend: 7 },
    { name: "重庆潼南陈抟故里景区", type: "4A级景区", address: "重庆市潼南区", lng: 105.8123, lat: 30.2123, description: "以道教文化与油菜花海著称。", recommend: 6 },
    { name: "重庆荣昌万灵古镇", type: "4A级景区", address: "重庆市荣昌区", lng: 105.6123, lat: 29.4876, description: "原名路孔镇，移民文化浓厚。", recommend: 6 },
    { name: "重庆开州汉丰湖景区", type: "4A级景区", address: "重庆市开州区", lng: 108.4123, lat: 31.2123, description: "三峡移民搬迁后形成的内陆湖。", recommend: 6 },
    { name: "重庆梁平双桂堂景区", type: "4A级景区", address: "重庆市梁平区", lng: 107.8123, lat: 30.6123, description: "西南佛教禅宗祖庭。", recommend: 6 },
    { name: "重庆城口亢谷景区", type: "4A级景区", address: "重庆市城口县", lng: 108.9123, lat: 31.9123, description: "大巴山深处的避暑胜地。", recommend: 6 },
    { name: "重庆丰都名山景区", type: "4A级景区", address: "重庆市丰都县", lng: 107.7123, lat: 29.8876, description: "著名的“鬼城”文化景区。", recommend: 7 },
    { name: "重庆垫江牡丹生态旅游区", type: "4A级景区", address: "重庆市垫江县", lng: 107.3123, lat: 30.3123, description: "以牡丹花海为特色的生态景区。", recommend: 6 },

    // ==================== 四川省 (37家) ====================
    { name: "成都大熊猫繁育研究基地", type: "5A级景区", address: "四川省成都市成华区", lng: 104.1445, lat: 30.7334, description: "全球著名的大熊猫保护基地。", recommend: 8 },
    { name: "成都欢乐谷", type: "4A级景区", address: "四川省成都市金牛区", lng: 104.0345, lat: 30.7234, description: "大型现代主题公园。", recommend: 7 },
    { name: "自贡恐龙博物馆", type: "4A级景区", address: "四川省自贡市大安区", lng: 104.8234, lat: 29.3987, description: "世界三大恐龙遗址博物馆之一。", recommend: 8 },
    { name: "宜宾蜀南竹海", type: "5A级景区", address: "四川省宜宾市长宁县", lng: 105.0123, lat: 28.4567, description: "壮观的竹林海洋景观。", recommend: 8 },
    { name: "乐山大佛博物馆", type: "4A级景区", address: "四川省乐山市市中区", lng: 103.7789, lat: 29.5456, description: "展示乐山大佛历史与文化的博物馆。", recommend: 7 },
    { name: "江油窦圌山", type: "4A级景区", address: "四川省绵阳市江油市", lng: 104.8123, lat: 31.9123, description: "以奇峰、古刹著称的风景区。", recommend: 6 },
    { name: "成都青城山-都江堰旅游景区", type: "5A级景区", address: "四川省成都市都江堰市", lng: 103.6123, lat: 30.9876, description: "世界文化遗产，道教名山与古水利工程。", recommend: 8 },
    { name: "乐山大佛", type: "5A级景区", address: "四川省乐山市市中区", lng: 103.7745, lat: 29.5432, description: "世界上最大的石刻弥勒佛坐像。", recommend: 8 },
    { name: "阿坝九寨沟", type: "5A级景区", address: "四川省阿坝州九寨沟县", lng: 103.9123, lat: 33.2123, description: "童话世界，绝美的水景景观。", recommend: 8 },
    { name: "甘孜稻城亚丁", type: "5A级景区", address: "四川省甘孜州稻城县", lng: 100.3456, lat: 28.4567, description: "蓝色星球上的最后一片净土。", recommend: 8 },
    { name: "凉山泸沽湖", type: "4A级景区", address: "四川省凉山州盐源县", lng: 100.7543, lat: 27.6987, description: "神秘的女儿国，高原明珠。", recommend: 8 },
    { name: "成都武侯祠", type: "4A级景区", address: "四川省成都市武侯区", lng: 104.0456, lat: 30.6432, description: "纪念诸葛亮、刘备的蜀汉英雄纪念地。", recommend: 8 },
    { name: "绵阳北川羌城旅游区", type: "5A级景区", address: "四川省绵阳市北川县", lng: 104.4567, lat: 31.8432, description: "展示羌族文化与抗震救灾精神。", recommend: 7 },
    { name: "广元剑门关", type: "5A级景区", address: "四川省广元市剑阁县", lng: 105.5678, lat: 32.2123, description: "剑门蜀道的核心，一夫当关万夫莫开。", recommend: 8 },
    { name: "南充阆中古城", type: "5A级景区", address: "四川省南充市阆中市", lng: 105.9678, lat: 31.5876, description: "中国四大古城之一。", recommend: 8 },
    { name: "广安邓小平故里旅游区", type: "5A级景区", address: "四川省广安市广安区", lng: 106.6456, lat: 30.4876, description: "邓小平同志的出生地。", recommend: 8 },
    { name: "达州八台山景区", type: "4A级景区", address: "四川省达州市万源市", lng: 108.1234, lat: 32.0123, description: "迎接四川第一缕阳光的地方。", recommend: 6 },
    { name: "雅安碧峰峡景区", type: "4A级景区", address: "四川省雅安市雨城区", lng: 103.0123, lat: 30.0876, description: "集自然峡谷与熊猫基地于一体。", recommend: 7 },
    { name: "眉山三苏祠", type: "4A级景区", address: "四川省眉山市东坡区", lng: 103.8345, lat: 30.0456, description: "苏洵、苏轼、苏辙的故居。", recommend: 7 },
    { name: "资阳安岳石刻", type: "4A级景区", address: "四川省资阳市安岳县", lng: 105.3345, lat: 30.0987, description: "精美的唐宋石刻艺术。", recommend: 7 },
    { name: "攀枝花二滩国家森林公园", type: "4A级景区", address: "四川省攀枝花市盐边县", lng: 101.7890, lat: 26.8123, description: "以二滩水电站形成的湖光山色。", recommend: 6 },
    { name: "泸州老窖旅游区", type: "4A级景区", address: "四川省泸州市江阳区", lng: 105.4567, lat: 28.8876, description: "展示中国白酒文化的工业旅游区。", recommend: 7 },
    { name: "德阳三星堆博物馆", type: "4A级景区", address: "四川省德阳市广汉市", lng: 104.2123, lat: 30.9987, description: "古蜀文明的重大考古发现。", recommend: 8 },
    { name: "遂宁中国死海旅游度假区", type: "4A级景区", address: "四川省遂宁市大英县", lng: 105.2345, lat: 30.5876, description: "独特的盐卤漂浮体验。", recommend: 7 },
    { name: "内江大千园旅游景区", type: "4A级景区", address: "四川省内江市市中区", lng: 105.0678, lat: 29.5876, description: "纪念国画大师张大千。", recommend: 6 },
    { name: "乐山峨眉山", type: "5A级景区", address: "四川省乐山市峨眉山市", lng: 103.3345, lat: 29.5876, description: "中国四大佛教名山之一。", recommend: 8 },
    { name: "阿坝黄龙景区", type: "5A级景区", address: "四川省阿坝州松潘县", lng: 103.9876, lat: 32.7543, description: "人间瑶池，彩池景观绝美。", recommend: 8 },
    { name: "甘孜海螺沟景区", type: "5A级景区", address: "四川省甘孜州泸定县", lng: 102.0123, lat: 29.5876, description: "低海拔现代冰川景观。", recommend: 8 },
    { name: "凉山邛海-泸山景区", type: "4A级景区", address: "四川省凉山州西昌市", lng: 102.2890, lat: 27.8432, description: "山水相依的城市后花园。", recommend: 7 },
    { name: "成都杜甫草堂", type: "4A级景区", address: "四川省成都市青羊区", lng: 104.0234, lat: 30.6678, description: "唐代大诗人杜甫在成都的故居。", recommend: 8 },
    { name: "绵阳七曲山风景区", type: "4A级景区", address: "四川省绵阳市梓潼县", lng: 105.1678, lat: 31.6432, description: "文昌文化的发源地。", recommend: 6 },
    { name: "广元皇泽寺", type: "4A级景区", address: "四川省广元市利州区", lng: 105.8234, lat: 32.4345, description: "中国唯一的女皇帝武则天的祀庙。", recommend: 7 },
    { name: "南充凌云山景区", type: "4A级景区", address: "四川省南充市高坪区", lng: 106.2123, lat: 30.7543, description: "集自然风光与宗教文化于一体。", recommend: 6 },
    { name: "宜宾李庄古镇", type: "4A级景区", address: "四川省宜宾市翠屏区", lng: 104.7890, lat: 28.7890, description: "万里长江第一古镇。", recommend: 7 },
    { name: "广安华蓥山", type: "4A级景区", address: "四川省广安市华蓥市", lng: 106.7890, lat: 30.3876, description: "以石林景观与红色文化著称。", recommend: 7 },
    { name: "达州真佛山景区", type: "4A级景区", address: "四川省达州市达川区", lng: 107.5678, lat: 31.0123, description: "著名的佛教胜地。", recommend: 6 },
    { name: "雅安蒙顶山景区", type: "4A级景区", address: "四川省雅安市名山区", lng: 103.1234, lat: 30.0678, description: "世界茶文化圣山。", recommend: 7 },
    { name: "眉山瓦屋山景区", type: "4A级景区", address: "四川省眉山市洪雅县", lng: 102.9678, lat: 29.6432, description: "亚洲最大的桌山。", recommend: 7 },
    { name: "资阳陈毅故里景区", type: "4A级景区", address: "四川省资阳市乐至县", lng: 105.0123, lat: 30.2890, description: "陈毅元帅的出生地。", recommend: 6 },

    // ==================== 贵州省 (28家) ====================
    { name: "贵阳黔灵山公园", type: "4A级景区", address: "贵州省贵阳市云岩区", lng: 106.6987, lat: 26.5987, description: "黔南第一山，集自然风光、文物古迹与民俗风情于一体。", recommend: 8 },
    { name: "安顺龙宫", type: "5A级景区", address: "贵州省安顺市西秀区", lng: 105.8543, lat: 26.1567, description: "拥有超长水溶洞及壮观的洞中瀑布景观。", recommend: 8 },
    { name: "遵义会议会址", type: "4A级景区", address: "贵州省遵义市红花岗区", lng: 106.9234, lat: 27.6987, description: "中国革命历史转折点的见证地，红色旅游圣地。", recommend: 8 },
    { name: "荔波小七孔", type: "5A级景区", address: "贵州省黔南州荔波县", lng: 107.7543, lat: 25.2567, description: "集山、水、林、洞、湖、瀑为一体的原始奇观。", recommend: 8 },
    { name: "镇远古镇", type: "5A级景区", address: "贵州省黔东南州镇远县", lng: 108.4234, lat: 27.0543, description: "拥有2000多年历史的文化名城，舞阳河穿城而过。", recommend: 8 },
    { name: "梵净山", type: "5A级景区", address: "贵州省铜仁市江口县", lng: 108.7012, lat: 27.9123, description: "武陵山脉主峰，著名的佛教名山与自然保护区。", recommend: 8 },
    { name: "西江千户苗寨", type: "4A级景区", address: "贵州省黔东南州雷山县", lng: 108.1765, lat: 26.4987, description: "全世界最大的苗族聚居村寨，展示苗族原生文化。", recommend: 8 },
    { name: "肇兴侗寨", type: "4A级景区", address: "贵州省黔东南州黎平县", lng: 109.1876, lat: 25.9123, description: "全国最大的侗族村寨之一，以鼓楼群著称。", recommend: 7 },
    { name: "万峰林", type: "5A级景区", address: "贵州省黔西南州兴义市", lng: 104.9123, lat: 25.0123, description: "中国西南三大喀斯特地貌之一，气势磅礴的锥状峰林。", recommend: 8 },
    { name: "贵阳花溪青岩古镇", type: "5A级景区", address: "贵州省贵阳市花溪区", lng: 106.6876, lat: 26.3345, description: "贵州四大古镇之一，明清风格建筑保存完好。", recommend: 8 },
    { name: "安顺黄果树瀑布景区", type: "5A级景区", address: "贵州省安顺市镇宁县", lng: 105.6678, lat: 25.9987, description: "亚洲最大的瀑布，中国著名的自然景观。", recommend: 8 },
    { name: "遵义赤水丹霞旅游区", type: "5A级景区", address: "贵州省遵义市赤水市", lng: 105.7012, lat: 28.5876, description: "世界自然遗产，以丹霞地貌和瀑布群闻名。", recommend: 8 },
    { name: "毕节百里杜鹃景区", type: "5A级景区", address: "贵州省毕节市大方县", lng: 105.8432, lat: 27.2123, description: "世界上最大的天然花园，春季杜鹃花海壮观。", recommend: 8 },
    { name: "贵阳天河潭景区", type: "4A级景区", address: "贵州省贵阳市花溪区", lng: 106.5876, lat: 26.4567, description: "兼具溶洞、瀑布、峡谷景观的“贵州山水浓缩盆景”。", recommend: 7 },
    { name: "毕节织金洞景区", type: "4A级景区", address: "贵州省毕节市织金县", lng: 105.8876, lat: 26.7543, description: "中国溶洞之王，规模宏大，形态万千。", recommend: 8 },
    { name: "铜仁九龙洞景区", type: "4A级景区", address: "贵州省铜仁市碧江区", lng: 109.3012, lat: 27.7543, description: "大型天然喀斯特溶洞，洞内石笋高大雄伟。", recommend: 6 },
    { name: "黔南平塘天眼景区", type: "4A级景区", address: "贵州省黔南州平塘县", lng: 106.8567, lat: 25.6543, description: "世界最大的单口径球面射电望远镜FAST所在地。", recommend: 8 },
    { name: "黔西南马岭河峡谷景区", type: "4A级景区", address: "贵州省黔西南州兴义市", lng: 104.9678, lat: 25.1234, description: "地球上最美丽的伤痕，百瀑横飞的深谷奇观。", recommend: 8 },
    { name: "贵阳保利国际温泉", type: "4A级景区", address: "贵州省贵阳市乌当区", lng: 106.7543, lat: 26.6345, description: "集温泉养生、休闲度假为一体的城市温泉。", recommend: 6 },
    { name: "安顺夜郎洞景区", type: "4A级景区", address: "贵州省安顺市普定县", lng: 105.7543, lat: 26.3012, description: "传说中夜郎王居住的地方，典型的溶洞景观。", recommend: 6 },
    { name: "遵义海龙屯景区", type: "4A级景区", address: "贵州省遵义市汇川区", lng: 106.8345, lat: 27.8123, description: "世界文化遗产，保存完好的中世纪军事屯堡。", recommend: 7 },
    { name: "毕节威宁草海生态旅游区", type: "4A级景区", address: "贵州省毕节市威宁县", lng: 104.2345, lat: 26.8678, description: "高原明珠，黑颈鹤等珍稀候鸟的越冬地。", recommend: 7 },
    { name: "铜仁石阡温泉群风景名胜区", type: "4A级景区", address: "贵州省铜仁市石阡县", lng: 108.2345, lat: 27.3012, description: "历史悠久的天然温泉，具有极高的医疗价值。", recommend: 6 },
    { name: "黔南茂兰国家级自然保护区", type: "4A级景区", address: "贵州省黔南州荔波县", lng: 107.9123, lat: 25.1567, description: "世界同纬度地区残存最大的原始森林。", recommend: 7 },
    { name: "黔西南万峰湖景区", type: "4A级景区", address: "贵州省黔西南州兴义市", lng: 105.0678, lat: 24.9123, description: "西南地区最大的人工湖之一，钓鱼者的天堂。", recommend: 6 },
    { name: "贵阳阿哈湖国家湿地公园", type: "4A级景区", address: "贵州省贵阳市南明区", lng: 106.6789, lat: 26.5432, description: "城市中心的湿地公园，生态环境优美。", recommend: 6 },
    { name: "安顺旧州古镇", type: "4A级景区", address: "贵州省安顺市西秀区", lng: 106.1012, lat: 26.2345, description: "历史悠久的屯堡文化古镇，民风淳朴。", recommend: 6 },

    // ==================== 云南省 (37家) ====================
    { name: "昆明西山森林公园", type: "4A级景区", address: "云南省昆明市西山区", lng: 102.6345, lat: 24.9567, description: "俯瞰滇池绝佳地，拥有龙门石窟等名胜。", recommend: 7 },
    { name: "大理古城", type: "4A级景区", address: "云南省大理州大理市", lng: 100.1654, lat: 25.6987, description: "南诏国与大理国的都城，极具白族风情。", recommend: 8 },
    { name: "丽江束河古镇", type: "4A级景区", address: "云南省丽江市古城区", lng: 100.2012, lat: 26.9123, description: "茶马古道上保存完好的重要集镇。", recommend: 7 },
    { name: "西双版纳野象谷", type: "5A级景区", address: "云南省西双版纳州景洪市", lng: 100.8543, lat: 22.1567, description: "中国境内唯一能近距离观察亚洲野象的地方。", recommend: 8 },
    { name: "腾冲热海", type: "5A级景区", address: "云南省保山市腾冲市", lng: 98.4567, lat: 24.9123, description: "著名的地热奇观，以大滚锅闻名遐迩。", recommend: 8 },
    { name: "昆明大观楼", type: "4A级景区", address: "云南省昆明市西山区", lng: 102.6789, lat: 25.0123, description: "以天下第一长联闻名，滇池畔的文化名楼。", recommend: 6 },
    { name: "香格里拉普达措国家公园", type: "5A级景区", address: "云南省迪庆州香格里拉市", lng: 99.9123, lat: 27.8123, description: "拥有湖泊、湿地、森林的高原生态公园。", recommend: 8 },
    { name: "玉溪抚仙湖", type: "4A级景区", address: "云南省玉溪市澄江市", lng: 102.9123, lat: 24.5123, description: "中国蓄水量最大的深水湖泊，水质极佳。", recommend: 8 },
    { name: "昆明石林", type: "5A级景区", address: "云南省昆明市石林县", lng: 103.3234, lat: 24.8123, description: "世界自然遗产，典型的喀斯特石林地貌。", recommend: 8 },
    { name: "丽江玉龙雪山", type: "5A级景区", address: "云南省丽江市玉龙县", lng: 100.2012, lat: 27.1012, description: "纳西族的神山，北半球最近赤道的雪山。", recommend: 8 },
    { name: "大理崇圣寺三塔", type: "5A级景区", address: "云南省大理州大理市", lng: 100.1456, lat: 25.7012, description: "大理标志性建筑，展现唐宋时期建筑艺术。", recommend: 8 },
    { name: "西双版纳热带植物园", type: "5A级景区", address: "云南省西双版纳州勐腊县", lng: 101.2543, lat: 21.9123, description: "中国面积最大、收集物种最丰富的植物园。", recommend: 8 },
    { name: "迪庆香格里拉", type: "4A级景区", address: "云南省迪庆州香格里拉市", lng: 99.7012, lat: 27.8234, description: "心中的日月，藏区文化的集中展示地。", recommend: 7 },
    { name: "保山腾冲火山热海", type: "4A级景区", address: "云南省保山市腾冲市", lng: 98.4345, lat: 25.0123, description: "火山地热并存的奇特地质景观区。", recommend: 7 },
    { name: "德宏勐巴娜西珍奇园", type: "4A级景区", address: "云南省德宏州芒市", lng: 98.5876, lat: 24.4345, description: "汇集了大量古树名木、奇石珍宝的园林。", recommend: 6 },
    { name: "怒江丙中洛景区", type: "4A级景区", address: "云南省怒江州贡山县", lng: 98.6123, lat: 28.0123, description: "人神共居的地方，怒江第一湾所在地。", recommend: 7 },
    { name: "普洱太阳河国家森林公园", type: "4A级景区", address: "云南省普洱市思茅区", lng: 101.1234, lat: 22.5876, description: "北回归线上最大的绿洲，动植物天堂。", recommend: 7 },
    { name: "临沧翁丁原始部落文化旅游区", type: "4A级景区", address: "云南省临沧市沧源县", lng: 99.2123, lat: 23.2567, description: "中国保存最完整的佤族原始群居村落。", recommend: 7 },
    { name: "楚雄彝人古镇", type: "4A级景区", address: "云南省楚雄州楚雄市", lng: 101.5432, lat: 25.0456, description: "以彝族文化为核心的仿古建筑群。", recommend: 6 },
    { name: "红河哈尼梯田", type: "5A级景区", address: "云南省红河州元阳县", lng: 102.7543, lat: 23.1234, description: "世界文化遗产，哈尼族创造的大地艺术。", recommend: 8 },
    { name: "文山普者黑景区", type: "5A级景区", address: "云南省文山州丘北县", lng: 104.1234, lat: 24.1234, description: "独特的喀斯特岩溶湖泊湿地景观。", recommend: 8 },
    { name: "西双版纳傣族园", type: "4A级景区", address: "云南省西双版纳州景洪市", lng: 100.9567, lat: 21.8432, description: "展示傣族建筑、服饰、习俗的活态博物馆。", recommend: 7 },
    { name: "大理双廊古镇", type: "4A级景区", address: "云南省大理州大理市", lng: 100.1876, lat: 25.9123, description: "洱海畔的明珠，享有“大理风光在苍洱”之誉。", recommend: 7 },
    { name: "丽江古城", type: "5A级景区", address: "云南省丽江市古城区", lng: 100.2345, lat: 26.8765, description: "世界文化遗产，无城墙的纳西族古城。", recommend: 8 },
    { name: "迪庆梅里雪山景区", type: "4A级景区", address: "云南省迪庆州德钦县", lng: 98.7543, lat: 28.4567, description: "藏传佛教四大神山之首，日照金山奇观。", recommend: 8 },
    { name: "保山和顺古镇", type: "4A级景区", address: "云南省保山市腾冲市", lng: 98.4567, lat: 25.0123, description: "著名的侨乡，保留了大量精美的古建筑。", recommend: 8 },
    { name: "德宏莫里热带雨林景区", type: "4A级景区", address: "云南省德宏州瑞丽市", lng: 97.9123, lat: 24.1012, description: "以热带雨林景观和莫里瀑布著称。", recommend: 6 },
    { name: "怒江大峡谷景区", type: "4A级景区", address: "云南省怒江州泸水市", lng: 98.8543, lat: 25.8432, description: "世界上最长、最神秘、最险峻的大峡谷之一。", recommend: 7 },
    { name: "普洱梅子湖公园", type: "4A级景区", address: "云南省普洱市思茅区", lng: 100.9876, lat: 22.7543, description: "普洱市区的生态绿肺，湖光山色宜人。", recommend: 6 },
    { name: "临沧崖画谷景区", type: "4A级景区", address: "云南省临沧市沧源县", lng: 99.3012, lat: 23.3123, description: "距今3000多年的古老崖画，展现先民生活。", recommend: 6 },
    { name: "楚雄黑井古镇", type: "4A级景区", address: "云南省楚雄州禄丰市", lng: 101.7543, lat: 25.3876, description: "历史上的“千年盐都”，保留了古朴的盐文化。", recommend: 6 },
    { name: "红河建水古城", type: "4A级景区", address: "云南省红河州建水县", lng: 102.8234, lat: 23.6123, description: "文献名邦，拥有朱家花园、孔庙等古迹。", recommend: 8 },
    { name: "文山西畴国家石漠公园", type: "4A级景区", address: "云南省文山州西畴县", lng: 104.6789, lat: 23.4345, description: "展示石漠化治理奇迹的生态公园。", recommend: 6 },
    { name: "大理苍山景区", type: "4A级景区", address: "云南省大理州大理市", lng: 100.1012, lat: 25.6543, description: "云弄峰等十九峰巍峨壮丽，与洱海相映。", recommend: 8 },
    { name: "丽江泸沽湖景区", type: "4A级景区", address: "云南省丽江市宁蒗县", lng: 100.7543, lat: 27.6987, description: "摩梭人聚居地，神秘的“女儿国”。", recommend: 8 },
    { name: "迪庆松赞林寺", type: "4A级景区", address: "云南省迪庆州香格里拉市", lng: 99.7012, lat: 27.8567, description: "小布达拉宫，云南规模最大的藏传佛教寺院。", recommend: 8 },
    { name: "保山龙陵松山战役遗址", type: "4A级景区", address: "云南省保山市龙陵县", lng: 98.9123, lat: 24.5123, description: "滇西抗战的重要遗址，爱国主义教育基地。", recommend: 6 },
    { name: "德宏一寨两国景区", type: "4A级景区", address: "云南省德宏州瑞丽市", lng: 97.7543, lat: 23.9876, description: "中缅边境线穿村而过，独特的边境风情。", recommend: 7 },
    { name: "怒江独龙江景区", type: "4A级景区", address: "云南省怒江州贡山县", lng: 98.3234, lat: 27.8432, description: "独龙族聚居地，原始纯净的自然秘境。", recommend: 7 },

    // ==================== 西藏自治区 (20家) ====================
    { name: "拉萨市曲水县秀色才纳景区", type: "4A级景区", address: "西藏自治区拉萨市曲水县", lng: 90.7345, lat: 29.3567, description: "集现代农业观光与藏草药种植为一体的生态景区。", recommend: 6 },
    { name: "拉萨市曲水县西藏野生动物保护园", type: "4A级景区", address: "西藏自治区拉萨市曲水县", lng: 90.8123, lat: 29.3123, description: "展示青藏高原特有野生动物的保护与科普基地。", recommend: 7 },
    { name: "拉萨市文创园区南山公园", type: "4A级景区", address: "西藏自治区拉萨市城关区", lng: 91.1123, lat: 29.6123, description: "拉萨市内的绿色屏障，可俯瞰布达拉宫全景。", recommend: 6 },
    { name: "拉萨市经开区莲华之宝中华藏瓷文化旅游体验园", type: "4A级景区", address: "西藏自治区拉萨市堆龙德庆区", lng: 91.0123, lat: 29.6543, description: "深度体验藏瓷文化与中华传统工艺的融合。", recommend: 6 },
    { name: "日喀则市吉隆县吉隆沟旅游景区", type: "4A级景区", address: "西藏自治区日喀则市吉隆县", lng: 85.2123, lat: 28.3876, description: "喜马拉雅山脉深处的世外桃源，植被茂密。", recommend: 8 },
    { name: "日喀则市康马县崇巴雍错景区", type: "4A级景区", address: "西藏自治区日喀则市康马县", lng: 89.6123, lat: 28.2123, description: "高山湖泊景观，湖水清澈，雪山环绕。", recommend: 6 },
    { name: "日喀则市定结县奇林峡景区", type: "4A级景区", address: "西藏自治区日喀则市定结县", lng: 87.7543, lat: 28.1234, description: "独特的冰川侵蚀地貌，峡谷造型奇特壮观。", recommend: 7 },
    { name: "山南市乃东区雍布拉康景区", type: "4A级景区", address: "西藏自治区山南市乃东区", lng: 91.8123, lat: 29.1567, description: "西藏历史上第一座宫殿，具有极高的历史地位。", recommend: 8 },
    { name: "林芝市波密县嘎朗湖景区", type: "4A级景区", address: "西藏自治区林芝市波密县", lng: 95.4567, lat: 29.8876, description: "湖光山色与藏式村落交织，如诗如画。", recommend: 7 },
    { name: "林芝市巴宜区措木及日景区", type: "4A级景区", address: "西藏自治区林芝市巴宜区", lng: 94.4123, lat: 29.7543, description: "意为“观音菩萨的眼泪”，原始森林环抱的冰湖。", recommend: 7 },
    { name: "昌都市丁青县天穹孜珠景区", type: "4A级景区", address: "西藏自治区昌都市丁青县", lng: 95.5678, lat: 31.3876, description: "海拔最高的苯教寺庙之一，地貌奇特。", recommend: 8 },
    { name: "那曲市比如县萨普旅游景区", type: "4A级景区", address: "西藏自治区那曲市比如县", lng: 93.8123, lat: 31.1234, description: "雪山、冰川与湖泊的完美结合，户外爱好者天堂。", recommend: 8 },
    { name: "阿里地区札达县古格文化遗址公园", type: "4A级景区", address: "西藏自治区阿里地区札达县", lng: 79.8123, lat: 31.4876, description: "古格王朝遗址，展现了消失的文明与精美壁画。", recommend: 8 },
    { name: "阿里地区日土县班公湖景区", type: "4A级景区", address: "西藏自治区阿里地区日土县", lng: 79.7543, lat: 33.4345, description: "著名的“长脖子湖”，东淡西咸，景色奇绝。", recommend: 8 },
    { name: "拉萨布达拉宫", type: "5A级景区", address: "西藏自治区拉萨市城关区", lng: 91.1172, lat: 29.6578, description: "世界文化遗产，西藏标志性的宫堡式建筑群。", recommend: 8 },
    { name: "日喀则珠峰大本营", type: "4A级景区", address: "西藏自治区日喀则市定日县", lng: 86.8543, lat: 28.1432, description: "近距离观赏世界第一高峰珠穆朗玛峰的绝佳地。", recommend: 8 },
    { name: "林芝雅鲁藏布大峡谷", type: "5A级景区", address: "西藏自治区林芝市米林县", lng: 94.9123, lat: 29.6123, description: "世界第一大峡谷，拥有壮丽的马蹄形大拐弯。", recommend: 8 },
    { name: "山南羊卓雍措", type: "4A级景区", address: "西藏自治区山南市浪卡子县", lng: 90.4123, lat: 28.9876, description: "西藏三大圣湖之一，湖水如羊脂般温润。", recommend: 8 },
    { name: "昌都然乌湖景区", type: "4A级景区", address: "西藏自治区昌都市八宿县", lng: 96.7543, lat: 29.5123, description: "藏东第一大湖，冰川延伸至湖边。", recommend: 7 },
    { name: "日喀则萨迦寺", type: "4A级景区", address: "西藏自治区日喀则市萨迦县", lng: 88.0123, lat: 28.9123, description: "萨迦派主寺，藏有大量珍贵经卷和壁画。", recommend: 7 },

    // ==================== 陕西省 (40家) ====================
    { name: "西安大唐芙蓉园", type: "5A级景区", address: "陕西省西安市雁塔区", lng: 108.9678, lat: 34.2123, description: "全方位展示盛唐风貌的大型皇家园林式文化主题公园。", recommend: 8 },
    { name: "西安碑林", type: "4A级景区", address: "陕西省西安市碑林区", lng: 108.9543, lat: 34.2567, description: "中国收藏古代碑石时间最早、名碑最多的艺术宝库。", recommend: 8 },
    { name: "宝鸡法门寺", type: "5A级景区", address: "陕西省宝鸡市扶风县", lng: 107.9123, lat: 34.4345, description: "安置释迦牟尼佛指骨舍利的佛教圣地。", recommend: 8 },
    { name: "延安革命纪念馆", type: "4A级景区", address: "陕西省延安市宝塔区", lng: 109.4876, lat: 36.6123, description: "展示中共中央在延安十三年光辉历程的纪念馆。", recommend: 8 },
    { name: "汉中武侯祠", type: "4A级景区", address: "陕西省汉中市勉县", lng: 106.6789, lat: 33.2345, description: "中国最早的武侯祠，纪念蜀汉丞相诸葛亮。", recommend: 7 },
    { name: "咸阳博物馆", type: "4A级景区", address: "陕西省咸阳市渭城区", lng: 108.7123, lat: 34.3345, description: "以秦汉历史文物收藏、研究、陈列为主的博物馆。", recommend: 6 },
    { name: "渭南华山", type: "5A级景区", address: "陕西省渭南市华阴市", lng: 110.0876, lat: 34.4876, description: "五岳之西岳，以“奇、险、峻、秀”闻名天下。", recommend: 8 },
    { name: "铜川药王山", type: "4A级景区", address: "陕西省铜川市耀州区", lng: 108.9876, lat: 34.9123, description: "纪念隋唐医学家孙思邈的圣地。", recommend: 6 },
    { name: "西安秦始皇兵马俑博物馆", type: "5A级景区", address: "陕西省西安市临潼区", lng: 109.2789, lat: 34.3876, description: "世界第八大奇迹，秦始皇陵的陪葬坑。", recommend: 8 },
    { name: "西安华清池", type: "5A级景区", address: "陕西省西安市临潼区", lng: 109.2123, lat: 34.3678, description: "著名的皇家园林和温泉疗养胜地。", recommend: 8 },
    { name: "延安黄帝陵", type: "5A级景区", address: "陕西省延安市黄陵县", lng: 109.2678, lat: 35.5876, description: "中华民族始祖轩辕黄帝的陵寝。", recommend: 8 },
    { name: "宝鸡太白山", type: "5A级景区", address: "陕西省宝鸡市眉县", lng: 107.7543, lat: 34.0123, description: "秦岭山脉主峰，以高、寒、险、奇著称。", recommend: 8 },
    { name: "汉中两汉三国文化景区", type: "4A级景区", address: "陕西省汉中市汉台区", lng: 107.0345, lat: 33.0678, description: "深度展示汉中作为汉家发祥地的历史文化。", recommend: 7 },
    { name: "铜川照金红色旅游景区", type: "4A级景区", address: "陕西省铜川市耀州区", lng: 108.6543, lat: 35.0123, description: "陕甘边革命根据地的核心区域。", recommend: 7 },
    { name: "咸阳乾陵", type: "4A级景区", address: "陕西省咸阳市乾县", lng: 108.2123, lat: 34.5432, description: "唐高宗李治与女皇武则天的合葬墓。", recommend: 8 },
    { name: "商洛金丝峡景区", type: "5A级景区", address: "陕西省商洛市商南县", lng: 110.5678, lat: 33.3123, description: "被誉为“峡谷奇观，生态王国”。", recommend: 8 },
    { name: "安康瀛湖景区", type: "4A级景区", address: "陕西省安康市汉滨区", lng: 108.8876, lat: 32.5876, description: "西北地区最大的人工湖，湖光山色优美。", recommend: 7 },
    { name: "榆林镇北台景区", type: "4A级景区", address: "陕西省榆林市榆阳区", lng: 109.7543, lat: 38.3345, description: "万里长城三大奇观之一，号称“万里长城第一台”。", recommend: 7 },
    { name: "西安大雁塔・大唐芙蓉园", type: "5A级景区", address: "陕西省西安市雁塔区", lng: 108.9654, lat: 34.2187, description: "西安标志性建筑大雁塔及其周边文化区。", recommend: 8 },
    { name: "延安宝塔山景区", type: "4A级景区", address: "陕西省延安市宝塔区", lng: 109.4987, lat: 36.5876, description: "延安的标志和象征，革命圣地的灯塔。", recommend: 8 },
    { name: "汉中石门栈道景区", type: "4A级景区", address: "陕西省汉中市汉台区", lng: 107.0123, lat: 33.1567, description: "以石门水库为依托，展示古代栈道文化。", recommend: 7 },
    { name: "咸阳茂陵博物馆", type: "4A级景区", address: "陕西省咸阳市兴平市", lng: 108.5678, lat: 34.3345, description: "汉武帝刘彻的陵寝，以石刻艺术著称。", recommend: 7 },
    { name: "渭南韩城党家村", type: "4A级景区", address: "陕西省渭南市韩城市", lng: 110.4345, lat: 35.5123, description: "被誉为“民居瑰宝”，保存完好的明清建筑群。", recommend: 7 },
    { name: "铜川玉华宫景区", type: "4A级景区", address: "陕西省铜川市印台区", lng: 108.8543, lat: 35.2123, description: "唐代皇家避暑行宫，玄奘法师圆寂之地。", recommend: 6 },
    { name: "商洛牛背梁国家森林公园", type: "4A级景区", address: "陕西省商洛市柞水县", lng: 108.9123, lat: 33.8123, description: "秦岭东段主峰，动植物资源丰富。", recommend: 7 },
    { name: "安康南宫山景区", type: "4A级景区", address: "陕西省安康市岚皋县", lng: 109.1234, lat: 32.2123, description: "以火山地质遗迹和佛教文化为特色。", recommend: 6 },
    { name: "榆林红石峡景区", type: "4A级景区", address: "陕西省榆林市榆阳区", lng: 109.7345, lat: 38.3123, description: "长城边的摩崖石刻艺术宝库。", recommend: 7 },
    { name: "西安城墙・碑林历史文化景区", type: "5A级景区", address: "陕西省西安市碑林区", lng: 108.9456, lat: 34.2512, description: "世界上保存最完整、规模最大的古城墙。", recommend: 8 },
    { name: "宝鸡关山草原景区", type: "4A级景区", address: "陕西省宝鸡市陇县", lng: 106.3456, lat: 34.9123, description: "享有“小阿尔卑斯”美誉的高山草甸。", recommend: 7 },
    { name: "延安枣园革命旧址", type: "4A级景区", address: "陕西省延安市宝塔区", lng: 109.4345, lat: 36.6123, description: "中共中央书记处在延安时期的驻地。", recommend: 8 },
    { name: "汉中黎坪国家森林公园", type: "4A级景区", address: "陕西省汉中市南郑区", lng: 106.6123, lat: 32.7543, description: "以石林、峡谷、瀑布景观为主的森林公园。", recommend: 6 },
    { name: "咸阳昭陵博物馆", type: "4A级景区", address: "陕西省咸阳市礼泉县", lng: 108.4567, lat: 34.6123, description: "唐太宗李世民的陵寝，陪葬墓规模宏大。", recommend: 7 },
    { name: "渭南洽川风景区", type: "4A级景区", address: "陕西省渭南市合阳县", lng: 110.3123, lat: 35.1234, description: "黄河流域最大的河滨湿地，《诗经》发源地。", recommend: 6 },
    { name: "铜川陈炉古镇", type: "4A级景区", address: "陕西省铜川市印台区", lng: 109.1234, lat: 35.0123, description: "著名的“耀州窑”延续至今的唯一火种。", recommend: 6 },
    { name: "商洛柞水溶洞景区", type: "4A级景区", address: "陕西省商洛市柞水县", lng: 109.1012, lat: 33.6543, description: "西北地区罕见的喀斯特溶洞群。", recommend: 7 },
    { name: "安康中坝大峡谷景区", type: "4A级景区", address: "陕西省安康市石泉县", lng: 108.2123, lat: 32.9123, description: "峡谷幽深，飞瀑流泉，自然风光秀丽。", recommend: 6 },
    { name: "榆林白云山景区", type: "4A级景区", address: "陕西省榆林市佳县", lng: 110.4876, lat: 38.0123, description: "著名的道教名山，俯瞰黄河大拐弯。", recommend: 7 },
    { name: "西安钟鼓楼博物馆", type: "4A级景区", address: "陕西省西安市莲湖区", lng: 108.9423, lat: 34.2612, description: "西安古城的中心标志，明代建筑艺术瑰宝。", recommend: 8 },

    // ==================== 甘肃省 (90家) ====================
    { name: "兰州西固区河口古镇旅游景区", type: "4A级景区", address: "甘肃省兰州市西固区", lng: 103.4123, lat: 36.1234, description: "黄河之滨的历史文化名镇。", recommend: 7 },
    { name: "定西临洮县洮河石文化博览园", type: "4A级景区", address: "甘肃省定西市临洮县", lng: 103.8543, lat: 35.3876, description: "展示洮河奇石文化的专业博览园。", recommend: 6 },
    { name: "陇南礼县六出祁山旅游景区", type: "4A级景区", address: "甘肃省陇南市礼县", lng: 105.1234, lat: 34.2123, description: "三国文化遗迹，诸葛亮北伐战场。", recommend: 7 },
    { name: "陇南徽县嘉陵江峡谷群旅游景区", type: "4A级景区", address: "甘肃省陇南市徽县", lng: 106.1234, lat: 33.7543, description: "嘉陵江上游壮丽的峡谷自然风光。", recommend: 6 },
    { name: "陇南成县杜公祠旅游景区", type: "4A级景区", address: "甘肃省陇南市成县", lng: 105.7543, lat: 33.7543, description: "纪念唐代大诗人杜甫流寓成县的祠堂。", recommend: 6 },
    { name: "临夏康乐县竹子沟景区", type: "4A级景区", address: "甘肃省临夏州康乐县", lng: 103.6123, lat: 35.2123, description: "高山草甸与森林交织的避暑胜地。", recommend: 7 },
    { name: "甘南迭部县茨日那景区", type: "4A级景区", address: "甘肃省甘南州迭部县", lng: 103.2123, lat: 34.0123, description: "红色旅游胜地，长征路上的重要节点。", recommend: 6 },
    { name: "甘南夏河县甘加秘境景区", type: "4A级景区", address: "甘肃省甘南州夏河县", lng: 102.5123, lat: 35.2123, description: "集石林、草原、古城于一体的秘境。", recommend: 8 },
    { name: "平凉华亭市关山莲花台景区", type: "4A级景区", address: "甘肃省平凉市华亭市", lng: 106.4123, lat: 35.1234, description: "关山深处的道教名山，自然风光幽美。", recommend: 7 },
    { name: "平凉崆峒区海寨沟景区", type: "4A级景区", address: "甘肃省平凉市崆峒区", lng: 106.6123, lat: 35.5123, description: "集山水景观与休闲娱乐为一体的景区。", recommend: 6 },
    { name: "张掖肃南县祁连山鹿文化生态旅游区", type: "4A级景区", address: "甘肃省张掖市肃南县", lng: 99.6123, lat: 38.8123, description: "展示祁连山马鹿养殖与生态文化。", recommend: 6 },
    { name: "天水秦州区苏湾文化旅游区", type: "4A级景区", address: "甘肃省天水市秦州区", lng: 105.7123, lat: 34.5876, description: "融合民俗文化与现代农业的旅游区。", recommend: 6 },
    { name: "天水甘谷县古坡草原景区", type: "4A级景区", address: "甘肃省天水市甘谷县", lng: 105.1234, lat: 34.7543, description: "天水境内难得的高山草甸景观。", recommend: 7 },
    { name: "天水张家川县平安草原景区", type: "4A级景区", address: "甘肃省天水市张家川县", lng: 106.2123, lat: 35.0123, description: "浓郁的民族风情与草原风光。", recommend: 6 },
    { name: "兰州水车博览园", type: "4A级景区", address: "甘肃省兰州市城关区", lng: 103.8432, lat: 36.0678, description: "展现黄河水车文化的专题博览园。", recommend: 7 },
    { name: "张掖大佛寺", type: "4A级景区", address: "甘肃省张掖市甘州区", lng: 100.4567, lat: 38.9345, description: "拥有亚洲最大的室内木胎泥塑卧佛。", recommend: 8 },
    { name: "敦煌雅丹", type: "4A级景区", address: "甘肃省酒泉市敦煌市", lng: 93.2123, lat: 40.5123, description: "罕见的雅丹地貌群，被誉为“魔鬼城”。", recommend: 8 },
    { name: "天水伏羲庙", type: "4A级景区", address: "甘肃省天水市秦州区", lng: 105.7123, lat: 34.5876, description: "中华始祖伏羲氏的祭祀建筑群。", recommend: 8 },
    { name: "嘉峪关方特欢乐世界", type: "4A级景区", address: "甘肃省嘉峪关市雄关区", lng: 98.2123, lat: 39.8123, description: "大型高科技现代主题乐园。", recommend: 7 },
    { name: "兰州五泉山公园", type: "4A级景区", address: "甘肃省兰州市城关区", lng: 103.8234, lat: 36.0345, description: "因有惠、甘、掬、摸、冽五眼清泉而得名。", recommend: 7 },
        { name: "嘉峪关长城博物馆", type: "4A级景区", address: "甘肃省嘉峪关市", lng: 98.2123, lat: 39.8123, description: "中国第一座以长城历史文化为陈列主题的博物馆。", recommend: 7 },
    { name: "酒泉西汉胜迹", type: "4A级景区", address: "甘肃省酒泉市肃州区", lng: 98.5123, lat: 39.7123, description: "以西汉酒泉胜迹为核心的园林。", recommend: 7 },
    { name: "张掖马蹄寺景区", type: "4A级景区", address: "甘肃省张掖市肃南县", lng: 100.4567, lat: 38.4123, description: "集石窟艺术、祁连山风光于一体。", recommend: 8 },
    { name: "武威文庙", type: "4A级景区", address: "甘肃省武威市凉州区", lng: 102.6456, lat: 37.9123, description: "陇右学宫之冠，保存完好的文庙建筑群。", recommend: 7 },
    { name: "天水南郭寺", type: "4A级景区", address: "甘肃省天水市秦州区", lng: 105.7234, lat: 34.5678, description: "陇右第一名刹，杜甫曾在此留诗。", recommend: 7 },
    { name: "平凉云崖寺景区", type: "4A级景区", address: "甘肃省平凉市庄浪县", lng: 106.1234, lat: 35.2123, description: "以石窟群和自然山水著称。", recommend: 7 },
    { name: "定西遮阳山景区", type: "4A级景区", address: "甘肃省定西市漳县", lng: 104.5123, lat: 34.7123, description: "因“山高蔽日”而得名，奇峰异石林立。", recommend: 7 },
    { name: "陇南万象洞景区", type: "4A级景区", address: "甘肃省陇南市武都区", lng: 104.9123, lat: 33.3876, description: "华夏北方第一洞，溶洞景观万象更新。", recommend: 8 },
    { name: "临夏松鸣岩景区", type: "4A级景区", address: "甘肃省临夏州和政县", lng: 103.2123, lat: 35.2123, description: "松涛阵阵，岩壁陡峭，风景秀丽。", recommend: 7 },
    { name: "甘南桑科草原景区", type: "4A级景区", address: "甘肃省甘南州夏河县", lng: 102.4567, lat: 35.1234, description: "著名的藏族牧场，草原辽阔。", recommend: 8 },
    { name: "白银会师旧址", type: "4A级景区", address: "甘肃省白银市会宁县", lng: 105.0567, lat: 35.6876, description: "红军三大主力会师地，红色圣地。", recommend: 8 },
    { name: "金昌金川公园", type: "4A级景区", address: "甘肃省金昌市金川区", lng: 102.1876, lat: 38.5123, description: "镍都绿洲，城市综合性公园。", recommend: 6 },
    { name: "庆阳小崆峒景区", type: "4A级景区", address: "甘肃省庆阳市西峰区", lng: 107.6123, lat: 35.7123, description: "黄土高原上的独特自然景观。", recommend: 6 },
    { name: "兰州植物园", type: "4A级景区", address: "甘肃省兰州市安宁区", lng: 103.7123, lat: 36.1123, description: "集科研、科普、游览于一体的植物园。", recommend: 6 },
    { name: "嘉峪关东湖生态旅游景区", type: "4A级景区", address: "甘肃省嘉峪关市", lng: 98.2876, lat: 39.7876, description: "戈壁明珠，城市生态水利风景区。", recommend: 6 },
    { name: "酒泉大法幢寺", type: "4A级景区", address: "甘肃省酒泉市", lng: 98.5123, lat: 39.7123, description: "酒泉著名的佛教寺院。", recommend: 5 },
    { name: "张掖焉支山景区", type: "4A级景区", address: "甘肃省张掖市山丹县", lng: 101.2123, lat: 38.4123, description: "历史名山，曾是匈奴的祭天之地。", recommend: 7 },
    { name: "武威天梯山石窟", type: "4A级景区", address: "甘肃省武威市凉州区", lng: 102.7543, lat: 37.5123, description: "中国石窟鼻祖，大佛依山而坐。", recommend: 8 },
    { name: "天水玉泉观", type: "4A级景区", address: "甘肃省天水市秦州区", lng: 105.7123, lat: 34.5876, description: "著名的道教宫观，因泉水清冽如玉得名。", recommend: 7 },
    { name: "平凉庄浪云崖寺", type: "4A级景区", address: "甘肃省平凉市庄浪县", lng: 106.1234, lat: 35.2123, description: "石窟艺术与自然风光的结合。", recommend: 6 },
    { name: "定西渭河源景区", type: "4A级景区", address: "甘肃省定西市渭源县", lng: 104.1234, lat: 35.1234, description: "黄河最大支流渭河的发源地。", recommend: 7 },
    { name: "陇南康县阳坝自然风景区", type: "4A级景区", address: "甘肃省陇南市康县", lng: 105.8123, lat: 33.1234, description: "陇上江南，原始森林与溪流景观。", recommend: 7 },
    { name: "临夏和政古动物化石博物馆", type: "4A级景区", address: "甘肃省临夏州和政县", lng: 103.3456, lat: 35.4123, description: "收藏大量珍稀古动物化石。", recommend: 8 },
    { name: "甘南郎木寺景区", type: "4A级景区", address: "甘肃省甘南州碌曲县", lng: 102.6123, lat: 34.0876, description: "东方小瑞士，藏传佛教文化浓厚。", recommend: 8 },
    { name: "白银黄河大峡景区", type: "4A级景区", address: "甘肃省白银市", lng: 104.1234, lat: 36.1234, description: "黄河穿行于峡谷之中的壮丽景观。", recommend: 6 },
    { name: "金昌骊靬古城景区", type: "4A级景区", address: "甘肃省金昌市永昌县", lng: 101.9123, lat: 38.2123, description: "传说中罗马军团流落中国的地方。", recommend: 7 },
    { name: "庆阳周祖陵森林公园", type: "4A级景区", address: "甘肃省庆阳市庆城县", lng: 107.8876, lat: 36.0123, description: "周先祖不窋的陵寝所在地。", recommend: 7 },
    { name: "兰州兴隆山国家级自然保护区", type: "4A级景区", address: "甘肃省兰州市榆中县", lng: 104.0123, lat: 35.9123, description: "陇右名山，成吉思汗灵柩曾暂厝于此。", recommend: 8 },
    { name: "嘉峪关讨赖河生态景区", type: "4A级景区", address: "甘肃省嘉峪关市", lng: 98.2123, lat: 39.8123, description: "依托讨赖河形成的生态景观带。", recommend: 6 },
    { name: "酒泉敦煌古城", type: "4A级景区", address: "甘肃省酒泉市敦煌市", lng: 94.5123, lat: 40.1234, description: "著名的影视拍摄基地，还原古敦煌风貌。", recommend: 7 },
    { name: "张掖山丹军马场", type: "4A级景区", address: "甘肃省张掖市山丹县", lng: 101.5123, lat: 38.1234, description: "亚洲最大的军马场，草原辽阔。", recommend: 8 },
    { name: "武威神州荒漠野生动物园", type: "4A级景区", address: "甘肃省武威市", lng: 102.7543, lat: 37.9123, description: "展示荒漠特有野生动物。", recommend: 6 },
    { name: "天水秦安文庙", type: "4A级景区", address: "甘肃省天水市秦安县", lng: 105.6789, lat: 34.8567, description: "保存完好的明清文庙建筑。", recommend: 6 },
    { name: "平凉泾川大云寺・王母宫景区", type: "4A级景区", address: "甘肃省平凉市泾川县", lng: 107.3456, lat: 35.3123, description: "西王母文化发祥地，出土过佛舍利。", recommend: 7 },
    { name: "定西通渭温泉度假区", type: "4A级景区", address: "甘肃省定西市通渭县", lng: 105.2123, lat: 35.2123, description: "著名的“陇上神泉”。", recommend: 7 },
    { name: "陇南成县西狭颂风景区", type: "4A级景区", address: "甘肃省陇南市成县", lng: 105.6123, lat: 33.7123, description: "拥有著名的汉代摩崖刻石《西狭颂》。", recommend: 7 },
    { name: "临夏永靖黄河三峡景区", type: "4A级景区", address: "甘肃省临夏州永靖县", lng: 103.3123, lat: 35.9123, description: "黄河上的高峡平湖景观。", recommend: 8 },
    { name: "甘南则岔石林景区", type: "4A级景区", address: "甘肃省甘南州碌曲县", lng: 102.8123, lat: 34.2123, description: "奇特的石林地貌与原始森林。", recommend: 7 },
    { name: "白银会宁红军长征胜利纪念馆", type: "4A级景区", address: "甘肃省白银市会宁县", lng: 105.0567, lat: 35.6876, description: "全面展示长征胜利历史。", recommend: 7 },
    { name: "金昌金水湖景区", type: "4A级景区", address: "甘肃省金昌市", lng: 102.1876, lat: 38.5123, description: "城市人工湖泊景观。", recommend: 6 },
    { name: "庆阳南梁革命纪念馆", type: "4A级景区", address: "甘肃省庆阳市华池县", lng: 108.1234, lat: 36.4123, description: "陕甘边革命根据地中心。", recommend: 8 },
    { name: "兰州青城古镇", type: "4A级景区", address: "甘肃省兰州市榆中县", lng: 104.2123, lat: 36.3123, description: "黄河岸边的千年古镇，水烟之乡。", recommend: 7 },
    { name: "嘉峪关长城第一墩景区", type: "4A级景区", address: "甘肃省嘉峪关市", lng: 98.1876, lat: 39.7123, description: "万里长城最西端的起点。", recommend: 7 },
    { name: "酒泉赤金峡景区", type: "4A级景区", address: "甘肃省酒泉市玉门市", lng: 97.5123, lat: 39.8123, description: "集水利工程与自然风光于一体。", recommend: 6 },
    { name: "张掖文殊山景区", type: "4A级景区", address: "甘肃省张掖市肃南县", lng: 99.8123, lat: 39.5123, description: "著名的佛教石窟群。", recommend: 6 },
    { name: "武威雷台汉墓", type: "4A级景区", address: "甘肃省武威市凉州区", lng: 102.6456, lat: 37.9234, description: "中国旅游标志“马踏飞燕”的出土地。", recommend: 8 },
    { name: "天水甘谷大象山", type: "4A级景区", address: "甘肃省天水市甘谷县", lng: 105.3123, lat: 34.7123, description: "拥有巨大的石胎泥塑大佛。", recommend: 7 },
    { name: "平凉灵台古灵台・荆山森林公园", type: "4A级景区", address: "甘肃省平凉市灵台县", lng: 107.6123, lat: 35.0123, description: "周文王祭天遗址所在地。", recommend: 6 },
    { name: "定西陇西威远楼景区", type: "4A级景区", address: "甘肃省定西市陇西县", lng: 104.6123, lat: 35.0123, description: "著名的古建筑，陇西标志。", recommend: 6 },
    { name: "陇南徽县三滩风景区", type: "4A级景区", address: "甘肃省陇南市徽县", lng: 106.2123, lat: 33.8123, description: "原始森林与飞瀑流泉景观。", recommend: 6 },
    { name: "临夏康乐莲花山景区", type: "4A级景区", address: "甘肃省临夏州康乐县", lng: 103.7123, lat: 35.0123, description: "因山形似莲花而得名，民歌花儿之乡。", recommend: 7 },
    { name: "甘南腊子口景区", type: "4A级景区", address: "甘肃省甘南州迭部县", lng: 103.8123, lat: 34.1234, description: "长征路上的天险关隘。", recommend: 8 },
    { name: "白银景泰黄河石林景区", type: "4A级景区", address: "甘肃省白银市景泰县", lng: 104.3123, lat: 36.8123, description: "雄伟壮观的石林地貌与黄河曲流。", recommend: 8 },
    { name: "金昌花文化博览园", type: "4A级景区", address: "甘肃省金昌市", lng: 102.1876, lat: 38.5123, description: "展示各类花卉与园林艺术。", recommend: 6 },
    { name: "庆阳庆城周祖陵景区", type: "4A级景区", address: "甘肃省庆阳市庆城县", lng: 107.8876, lat: 36.0123, description: "周文化发祥地。", recommend: 7 },
    { name: "嘉峪关悬臂长城景区", type: "4A级景区", address: "甘肃省嘉峪关市峪泉镇", lng: 98.2123, lat: 39.8567, description: "筑于黑山之巅，形似长城倒挂，气势雄伟。", recommend: 7 },
    { name: "酒泉瓜州锁阳城景区", type: "4A级景区", address: "甘肃省酒泉市瓜州县", lng: 96.2012, lat: 40.2567, description: "世界文化遗产，保存完好的唐代古城遗址。", recommend: 7 },
    { name: "张掖大湖湾景区", type: "4A级景区", address: "甘肃省张掖市临泽县", lng: 100.1567, lat: 39.2123, description: "集湿地风光、水上娱乐为一体的生态景区。", recommend: 6 },
    { name: "武威民勤沙生植物园", type: "4A级景区", address: "甘肃省武威市民勤县", lng: 103.0876, lat: 38.6123, description: "亚洲最大的沙漠植物园，展示荒漠植物多样性。", recommend: 6 },
    { name: "天水武山水帘洞景区", type: "4A级景区", address: "甘肃省天水市武山县", lng: 104.8543, lat: 34.8123, description: "拥有巨大的摩崖浮雕大佛，石窟艺术精湛。", recommend: 8 },
    { name: "平凉崇信龙泉寺景区", type: "4A级景区", address: "甘肃省平凉市崇信县", lng: 107.0345, lat: 35.3123, description: "山间泉水喷涌，古树参天，环境清幽。", recommend: 6 },
    { name: "定西通渭悦心国际书画村", type: "4A级景区", address: "甘肃省定西市通渭县", lng: 105.2345, lat: 35.2123, description: "展示通渭深厚的书画文化底蕴。", recommend: 6 },
    { name: "陇南两当云屏三峡景区", type: "4A级景区", address: "甘肃省陇南市两当县", lng: 106.4567, lat: 33.9123, description: "以山青、水秀、峡幽、石奇著称。", recommend: 7 },
    { name: "临夏东乡唐汪杏花村景区", type: "4A级景区", address: "甘肃省临夏州东乡县", lng: 103.4123, lat: 35.8123, description: "春季杏花盛开，如诗如画的田园风光。", recommend: 6 },
    { name: "甘南尕海湖景区", type: "4A级景区", address: "甘肃省甘南州碌曲县", lng: 102.3123, lat: 34.2567, description: "高原明珠，重要的候鸟迁徙栖息地。", recommend: 8 },
    { name: "白银白银国家矿山公园", type: "4A级景区", address: "甘肃省白银市白银区", lng: 104.1876, lat: 36.5567, description: "展示矿业遗迹与工业文明的科普基地。", recommend: 6 },
    { name: "金昌骊靬文化产业园", type: "4A级景区", address: "甘肃省金昌市永昌县", lng: 101.9567, lat: 38.2123, description: "以古罗马流落军团传说为背景的文化景区。", recommend: 7 },
    { name: "庆阳镇原北石窟寺景区", type: "4A级景区", address: "甘肃省庆阳市镇原县", lng: 107.5123, lat: 35.6123, description: "陇东地区规模最大的石窟群之一。", recommend: 7 },
    { name: "兰州河口古镇", type: "4A级景区", address: "甘肃省兰州市西固区", lng: 103.4123, lat: 36.1234, description: "黄河岸边的商贸重镇，保留大量古建筑。", recommend: 6 },
    { name: "嘉峪关紫轩葡萄酒庄园", type: "4A级景区", address: "甘肃省嘉峪关市", lng: 98.2567, lat: 39.7876, description: "展示葡萄酒酿造工艺与文化的工业旅游区。", recommend: 6 },
    { name: "酒泉敦煌阳关景区", type: "4A级景区", address: "甘肃省酒泉市敦煌市", lng: 94.0567, lat: 39.9123, description: "劝君更尽一杯酒，西出阳关无故人。", recommend: 8 },
    { name: "张掖黑河国家湿地公园", type: "4A级景区", address: "甘肃省张掖市甘州区", lng: 100.4123, lat: 38.9567, description: "内陆河流域重要的湿地生态系统。", recommend: 7 },
    { name: "武威天祝三峡国家森林公园", type: "4A级景区", address: "甘肃省武威市天祝县", lng: 102.8123, lat: 36.8123, description: "雪山、森林、草原交织的高原风光。", recommend: 7 },
    { name: "天水秦安凤山景区", type: "4A级景区", address: "甘肃省天水市秦安县", lng: 105.6789, lat: 34.8567, description: "集自然景观与古建筑群为一体。", recommend: 6 },
    { name: "平凉华亭莲花台景区", type: "4A级景区", address: "甘肃省平凉市华亭市", lng: 106.4123, lat: 35.1234, description: "山形似莲花，道教文化底蕴深厚。", recommend: 6 },
    { name: "定西临洮岳麓山公园", type: "4A级景区", address: "甘肃省定西市临洮县", lng: 103.8678, lat: 35.3876, description: "临洮县城的标志性景观，人文荟萃。", recommend: 6 },
    { name: "陇南宕昌官鹅沟国家森林公园", type: "4A级景区", address: "甘肃省陇南市宕昌县", lng: 104.3123, lat: 33.9876, description: "被誉为“小九寨”，湖泊瀑布美不胜收。", recommend: 8 },
    { name: "临夏广河齐家文化博物馆", type: "4A级景区", address: "甘肃省临夏州广河县", lng: 103.5678, lat: 35.4876, description: "展示齐家文化考古发现的专题博物馆。", recommend: 6 },
    { name: "甘南冶力关景区", type: "4A级景区", address: "甘肃省甘南州临潭县", lng: 103.5123, lat: 34.9123, description: "集山水、森林、石林、民俗为一体。", recommend: 8 },
    { name: "白银会宁红军长征胜利景园", type: "4A级景区", address: "甘肃省白银市会宁县", lng: 105.0567, lat: 35.6876, description: "以长征为主题的大型红色文化园林。", recommend: 7 },
    { name: "金昌金水湖景区", type: "4A级景区", address: "甘肃省金昌市金川区", lng: 102.1876, lat: 38.5123, description: "城市人工湖泊，环境优美。", recommend: 6 },
    { name: "庆阳合水子午岭景区", type: "4A级景区", address: "甘肃省庆阳市合水县", lng: 108.3123, lat: 35.8123, description: "黄土高原上的天然氧吧，植被茂密。", recommend: 7 },
    { name: "兰州石佛沟国家森林公园", type: "4A级景区", address: "甘肃省兰州市七里河区", lng: 103.7876, lat: 35.9123, description: "避暑胜地，拥有深厚的佛教文化背景。", recommend: 6 },
    { name: "嘉峪关方特丝路神画", type: "4A级景区", address: "甘肃省嘉峪关市", lng: 98.2123, lat: 39.8123, description: "以丝路文化为主题的大型高科技乐园。", recommend: 7 },
    { name: "酒泉敦煌玉门关景区", type: "4A级景区", address: "甘肃省酒泉市敦煌市", lng: 93.8567, lat: 40.3567, description: "丝绸之路北道的咽喉要隘。", recommend: 8 },
    { name: "张掖高台大湖湾文化旅游景区", type: "4A级景区", address: "甘肃省张掖市高台县", lng: 99.8123, lat: 39.3123, description: "水天一色的湿地景观。", recommend: 6 },
    { name: "武威凉州植物园", type: "4A级景区", address: "甘肃省武威市凉州区", lng: 102.6456, lat: 37.9123, description: "城市绿肺，集科普与休闲于一体。", recommend: 5 },
    { name: "天水清水温泉生态旅游景区", type: "4A级景区", address: "甘肃省天水市清水县", lng: 106.1234, lat: 34.7543, description: "著名的森林温泉，康养胜地。", recommend: 7 },
    { name: "平凉庄浪梯田景区", type: "4A级景区", address: "甘肃省平凉市庄浪县", lng: 106.1012, lat: 35.2123, description: "中国梯田化模范县，大地艺术奇观。", recommend: 7 },
    { name: "定西岷县狼渡湿地草原景区", type: "4A级景区", address: "甘肃省定西市岷县", lng: 104.0123, lat: 34.4345, description: "草原辽阔，河流蜿蜒，风景如画。", recommend: 7 },
    { name: "陇南文县天池国家森林公园", type: "4A级景区", address: "甘肃省陇南市文县", lng: 104.6123, lat: 32.9123, description: "高山湖泊，水质清澈，群山环抱。", recommend: 8 },
    { name: "临夏积石山大墩峡景区", type: "4A级景区", address: "甘肃省临夏州积石山县", lng: 102.8567, lat: 35.7123, description: "峡谷幽深，瀑布成群，民族风情浓郁。", recommend: 7 },
    { name: "甘南当周草原景区", type: "4A级景区", address: "甘肃省甘南州合作市", lng: 102.9123, lat: 34.9876, description: "合作市的后花园，典型的草原风光。", recommend: 7 },
    { name: "白银靖远法泉寺景区", type: "4A级景区", address: "甘肃省白银市靖远县", lng: 104.6789, lat: 36.5678, description: "石窟与古建筑结合的宗教旅游胜地。", recommend: 6 },
    { name: "金昌金川国家矿山公园", type: "4A级景区", address: "甘肃省金昌市金川区", lng: 102.1876, lat: 38.5123, description: "展示亚洲最大的人造露天矿坑。", recommend: 7 },
    { name: "庆阳华池南梁革命纪念馆", type: "4A级景区", address: "甘肃省庆阳市华池县", lng: 108.1234, lat: 36.4123, description: "陕甘边革命根据地政府所在地。", recommend: 8 },
    { name: "兰州青城古镇景区", type: "4A级景区", address: "甘肃省兰州市榆中县", lng: 104.2123, lat: 36.3123, description: "黄河岸边的千年古镇，水烟文化发源地。", recommend: 7 },
    { name: "嘉峪关关城文物景区", type: "4A级景区", address: "甘肃省嘉峪关市", lng: 98.2123, lat: 39.8123, description: "天下第一雄关，明代长城西端起点。", recommend: 8 },
    { name: "酒泉敦煌鸣沙山月牙泉景区", type: "4A级景区", address: "甘肃省酒泉市敦煌市", lng: 94.6678, lat: 40.0876, description: "山泉共处，沙水共生的奇观。", recommend: 8 },
    { name: "张掖七彩丹霞景区", type: "4A级景区", address: "甘肃省张掖市临泽县", lng: 100.0345, lat: 38.9678, description: "中国最美的丹霞地貌之一，色彩斑斓。", recommend: 8 },
    { name: "武威雷台景区", type: "4A级景区", address: "甘肃省武威市凉州区", lng: 102.6456, lat: 37.9234, description: "马踏飞燕出土地，汉文化展示中心。", recommend: 8 },
    { name: "天水麦积山景区", type: "4A级景区", address: "甘肃省天水市麦积区", lng: 106.0012, lat: 34.3567, description: "东方雕塑陈列馆，四大石窟之一。", recommend: 8 },
    { name: "平凉崆峒山景区", type: "4A级景区", address: "甘肃省平凉市崆峒区", lng: 106.5876, lat: 35.5432, description: "中华道教第一山，黄帝问道处。", recommend: 8 },
    { name: "定西贵清山景区", type: "4A级景区", address: "甘肃省定西市漳县", lng: 104.4567, lat: 34.5876, description: "陇中黄土高原上的奇秀名山。", recommend: 7 },
    { name: "陇南官鹅沟景区", type: "4A级景区", address: "甘肃省陇南市宕昌县", lng: 104.3123, lat: 33.9876, description: "集原始森林、草原、雪山、湖泊于一体。", recommend: 8 },
    { name: "临夏八坊十三巷景区", type: "4A级景区", address: "甘肃省临夏市", lng: 103.2123, lat: 35.5987, description: "展示穆斯林风情与砖雕艺术的历史街区。", recommend: 7 },
    { name: "甘南拉卜楞寺景区", type: "4A级景区", address: "甘肃省甘南州夏河县", lng: 102.5123, lat: 35.2012, description: "藏传佛教格鲁派六大宗主寺之一。", recommend: 8 },
    { name: "白银黄河石林景区", type: "4A级景区", address: "甘肃省白银市景泰县", lng: 104.3123, lat: 36.8123, description: "雄伟壮观的石林地貌与黄河曲流。", recommend: 8 },
    { name: "金昌紫金花城景区", type: "4A级景区", address: "甘肃省金昌市", lng: 102.1876, lat: 38.5123, description: "浪漫的紫色花海，城市景观新名片。", recommend: 6 },
    { name: "庆阳周祖陵景区", type: "4A级景区", address: "甘肃省庆阳市庆城县", lng: 107.8876, lat: 36.0123, description: "周文化发祥地，祭祀周先祖不窋的圣地。", recommend: 7 },

    // 青海省4A级景区数据模板

{ name: "西宁野生动物园", type: "4A级景区", address: "青海省西宁市城西区", lng: 101.768, lat: 36.627, description: "青藏高原唯一的大型野生动物园，展示雪豹、藏羚羊等珍稀高原动物，科普与观光兼具", recommend: 8 },
{ name: "青海湖二郎剑景区", type: "4A级景区", address: "青海省海南藏族自治州共和县", lng: 100.857, lat: 36.603, description: "青海湖核心景区，可近距离观赏湖光山色，体验藏族民俗，是青海湖观光首选", recommend: 10 },
{ name: "格尔木昆仑旅游区", type: "4A级景区", address: "青海省海西蒙古族藏族自治州格尔木市", lng: 94.897, lat: 36.407, description: "昆仑文化核心景区，涵盖昆仑山口、昆仑神泉等景点，展现昆仑山脉雄浑风貌", recommend: 9 },
{ name: "互助土族故土园", type: "4A级景区", address: "青海省海东市互助土族自治县", lng: 102.078, lat: 36.847, description: "集中展示土族民俗文化，有土族庄园、歌舞表演，体验独特的土族风情", recommend: 8 },
{ name: "贵德国家地质公园", type: "4A级景区", address: "青海省海南藏族自治州贵德县", lng: 101.478, lat: 36.037, description: "以丹霞地貌为核心，七彩丹霞与黄河风光交融，地质科普与观光价值极高", recommend: 9 },
{ name: "青海湖景区", type: "4A级景区", address: "青海省海南藏族自治州共和县", lng: 100.667, lat: 36.947, description: "中国最大内陆湖，高原蓝宝石，湖光山色与草原、雪山相映，自然风光绝美", recommend: 10 },
{ name: "塔尔寺", type: "4A级景区", address: "青海省西宁市湟中区", lng: 101.578, lat: 36.497, description: "藏传佛教格鲁派六大寺院之一，酥油花、壁画、堆绣被誉为“塔尔寺三绝”", recommend: 10 },
{ name: "海东瞿昙寺景区", type: "4A级景区", address: "青海省海东市乐都区", lng: 102.478, lat: 36.477, description: "明代皇家寺院，藏汉结合建筑风格，历史文化底蕴深厚，宗教与人文观光佳选", recommend: 8 },
{ name: "海北祁连山草原景区", type: "4A级景区", address: "青海省海北藏族自治州祁连县", lng: 100.247, lat: 38.177, description: "中国最美六大草原之一，草原辽阔，雪山映衬，是放牧、摄影的胜地", recommend: 9 },
{ name: "黄南热贡文化生态保护区", type: "4A级景区", address: "青海省黄南藏族自治州同仁市", lng: 102.007, lat: 35.527, description: "热贡艺术发源地，唐卡、堆绣、泥塑等非遗文化浓郁，是藏传佛教艺术宝库", recommend: 9 },
{ name: "果洛年保玉则景区", type: "4A级景区", address: "青海省果洛藏族自治州久治县", lng: 101.078, lat: 33.357, description: "三江源核心景区，神山圣湖交织，是徒步、摄影的秘境，生态价值极高", recommend: 9 },
{ name: "玉树文成公主庙景区", type: "4A级景区", address: "青海省玉树藏族自治州玉树市", lng: 97.178, lat: 33.007, description: "纪念文成公主入藏，藏汉民族团结象征，庙宇古朴，文化底蕴深厚", recommend: 8 },
{ name: "海西茶卡盐湖景区", type: "4A级景区", address: "青海省海西蒙古族藏族自治州乌兰县", lng: 99.097, lat: 36.787, description: "中国“天空之镜”，盐湖镜面效果震撼，是网红打卡与摄影胜地", recommend: 10 },
{ name: "海东循化撒拉族绿色家园", type: "4A级景区", address: "青海省海东市循化撒拉族自治县", lng: 102.578, lat: 35.847, description: "撒拉族聚居区，展现撒拉族民俗文化，黄河沿岸风光秀美，体验撒拉族生活", recommend: 7 },
{ name: "海北原子城景区", type: "4A级景区", address: "青海省海北藏族自治州海晏县", lng: 100.978, lat: 36.977, description: "中国第一个核武器研制基地旧址，红色教育与核工业科普基地", recommend: 9 },

// 新疆维吾尔自治区4A级景区数据模板

{ name: "乌鲁木齐天山野生动物园", type: "4A级景区", address: "新疆维吾尔自治区乌鲁木齐市达坂城区", lng: 87.678, lat: 43.627, description: "西北最大野生动物园，展示新疆特有野生动物，如普氏野马、雪豹等，科普与观光兼具", recommend: 8 },
{ name: "吐鲁番葡萄沟景区", type: "4A级景区", address: "新疆维吾尔自治区吐鲁番市高昌区", lng: 89.178, lat: 42.977, description: "葡萄种植核心区，夏季葡萄挂满枝头，体验维吾尔族民俗与葡萄文化", recommend: 9 },
{ name: "喀什艾提尕尔清真寺", type: "4A级景区", address: "新疆维吾尔自治区喀什地区喀什市", lng: 75.997, lat: 39.477, description: "中国最大清真寺之一，伊斯兰建筑典范，是喀什穆斯林宗教活动中心", recommend: 9 },
{ name: "伊犁那拉提草原", type: "4A级景区", address: "新疆维吾尔自治区伊犁哈萨克自治州新源县", lng: 84.078, lat: 43.427, description: "空中草原景观，雪山、森林、草原交织，是伊犁河谷最美草原之一", recommend: 10 },
{ name: "阿勒泰可可托海景区", type: "4A级景区", address: "新疆维吾尔自治区阿勒泰地区富蕴县", lng: 89.827, lat: 47.227, description: "地质奇观与矿山文化结合，有可可托海国家地质公园，是地质科普胜地", recommend: 9 },
{ name: "阿克苏天山神秘大峡谷景区", type: "4A级景区", address: "新疆维吾尔自治区阿克苏地区库车市", lng: 82.827, lat: 41.777, description: "红色峡谷地貌，峡谷幽深，岩壁纹理奇特，是中国十大最美峡谷之一", recommend: 9 },
{ name: "巴音郭楞蒙古自治州博斯腾湖景区", type: "4A级景区", address: "新疆维吾尔自治区巴音郭楞蒙古自治州博湖县", lng: 87.027, lat: 41.977, description: "中国最大内陆淡水湖，湖光与芦苇荡、沙漠交织，是观鸟、水上娱乐胜地", recommend: 9 },
{ name: "克孜勒苏柯尔克孜自治州慕士塔格峰景区", type: "4A级景区", address: "新疆维吾尔自治区克孜勒苏柯尔克孜自治州阿克陶县", lng: 75.027, lat: 38.277, description: "“冰山之父”慕士塔格峰，雪山与喀拉库勒湖相映，是帕米尔高原标志性景观", recommend: 10 },
{ name: "昌吉回族自治州天山天池景区", type: "4A级景区", address: "新疆维吾尔自治区昌吉回族自治州阜康市", lng: 88.127, lat: 43.877, description: "高山湖泊景观，雪山倒映湖中，是新疆标志性自然景观，道教文化浓郁", recommend: 10 },
{ name: "哈密五堡魔鬼城景区", type: "4A级景区", address: "新疆维吾尔自治区哈密市伊州区", lng: 93.278, lat: 42.627, description: "雅丹地貌核心区，风蚀地貌奇特，被称为“魔鬼城”，是摄影与探险胜地", recommend: 8 },
{ name: "和田昆仑湖景区", type: "4A级景区", address: "新疆维吾尔自治区和田地区和田市", lng: 79.927, lat: 37.127, description: "城市湖泊公园，展现和田绿洲风光，是市民休闲、观光的好去处", recommend: 7 },
{ name: "塔城巴克图口岸景区", type: "4A级景区", address: "新疆维吾尔自治区塔城地区塔城市", lng: 82.978, lat: 46.727, description: "中哈边境口岸，体验边境风情，展现边疆贸易与文化交流", recommend: 7 },
{ name: "吐鲁番火焰山景区", type: "4A级景区", address: "新疆维吾尔自治区吐鲁番市高昌区", lng: 89.527, lat: 42.927, description: "中国最热的地方，红色砂岩山体形似火焰，《西游记》文化IP浓厚", recommend: 8 },
{ name: "喀什噶尔老城景区", type: "4A级景区", address: "新疆维吾尔自治区喀什地区喀什市", lng: 75.997, lat: 39.477, description: "保存完整的维吾尔族老城，街巷纵横，民俗文化浓郁，是喀什灵魂所在", recommend: 10 },
{ name: "伊犁喀拉峻景区", type: "4A级景区", address: "新疆维吾尔自治区伊犁哈萨克自治州特克斯县", lng: 82.727, lat: 43.127, description: "立体草原景观，草原、森林、峡谷、雪山交织，被称为“人体草原”", recommend: 10 },
{ name: "阿勒泰喀纳斯景区", type: "4A级景区", address: "新疆维吾尔自治区阿勒泰地区布尔津县", lng: 87.027, lat: 48.727, description: "人间仙境，湖水随季节变色，周边白桦林、图瓦人村落，是新疆最美秘境", recommend: 10 },
{ name: "阿克苏温宿大峡谷景区", type: "4A级景区", address: "新疆维吾尔自治区阿克苏地区温宿县", lng: 80.727, lat: 41.327, description: "峡谷与丹霞地貌结合，岩壁色彩丰富，是徒步、摄影的探险胜地", recommend: 8 },
{ name: "巴音郭楞蒙古自治州楼兰古城景区", type: "4A级景区", address: "新疆维吾尔自治区巴音郭楞蒙古自治州若羌县", lng: 89.827, lat: 40.427, description: "古楼兰国遗址，沙漠中的历史遗迹，展现丝绸之路文明兴衰", recommend: 8 },
{ name: "克孜勒苏柯尔克孜自治州白沙湖景区", type: "4A级景区", address: "新疆维吾尔自治区克孜勒苏柯尔克孜自治州阿克陶县", lng: 75.227, lat: 38.427, description: "高原湖泊，湖水湛蓝，周边白沙山环绕，是帕米尔高原网红打卡点", recommend: 9 },
{ name: "昌吉回族自治州江布拉克景区", type: "4A级景区", address: "新疆维吾尔自治区昌吉回族自治州奇台县", lng: 90.327, lat: 43.727, description: "麦田与草原交织，秋季麦浪金黄，是新疆田园风光代表", recommend: 8 },
{ name: "哈密回王府景区", type: "4A级景区", address: "新疆维吾尔自治区哈密市伊州区", lng: 93.478, lat: 42.827, description: "清代哈密回王府邸，融合中原与伊斯兰建筑风格，展现哈密回王历史", recommend: 7 },
{ name: "和田团城景区", type: "4A级景区", address: "新疆维吾尔自治区和田地区和田市", lng: 79.978, lat: 37.127, description: "维吾尔族传统民居街区，展现和田民俗文化，是体验南疆生活的好去处", recommend: 7 },
{ name: "塔城裕民巴尔鲁克山景区", type: "4A级景区", address: "新疆维吾尔自治区塔城地区裕民县", lng: 82.927, lat: 45.927, description: "山地草原景观，山花烂漫，是“小白杨”歌曲发源地，生态与人文结合", recommend: 7 },
{ name: "乌鲁木齐水磨沟景区", type: "4A级景区", address: "新疆维吾尔自治区乌鲁木齐市水磨沟区", lng: 87.678, lat: 43.827, description: "城市近郊温泉与山林景区，休闲养生、徒步观光的城市后花园", recommend: 7 },
{ name: "吐鲁番交河故城景区", type: "4A级景区", address: "新疆维吾尔自治区吐鲁番市高昌区", lng: 89.127, lat: 42.977, description: "世界上保存最完整的生土建筑城市，古丝绸之路重镇遗址，历史价值极高", recommend: 9 },
{ name: "喀什泽普金湖杨景区", type: "4A级景区", address: "新疆维吾尔自治区喀什地区泽普县", lng: 77.227, lat: 38.227, description: "胡杨林与叶尔羌河交织，秋季胡杨金黄，是南疆最美胡杨林景区之一", recommend: 8 },
{ name: "阿克苏库车王府景区", type: "4A级景区", address: "新疆维吾尔自治区阿克苏地区库车市", lng: 82.978, lat: 41.727, description: "清代库车回王府邸，展现库车回王历史与维吾尔族民俗文化", recommend: 7 },
{ name: "巴音郭楞蒙古自治州天鹅河景区", type: "4A级景区", address: "新疆维吾尔自治区巴音郭楞蒙古自治州库尔勒市", lng: 86.178, lat: 41.777, description: "城市河流景区，天鹅栖息于此，是库尔勒城市生态名片", recommend: 7 },
{ name: "克孜勒苏柯尔克孜自治州阿克陶县奥依塔克冰川公园", type: "4A级景区", address: "新疆维吾尔自治区克孜勒苏柯尔克孜自治州阿克陶县", lng: 75.278, lat: 38.927, description: "低海拔冰川公园，冰川与森林、草原交织，是冰川观光与探险胜地", recommend: 8 },
{ name: "昌吉回族自治州杜氏旅游度假区", type: "4A级景区", address: "新疆维吾尔自治区昌吉回族自治州昌吉市", lng: 87.327, lat: 44.027, description: "乡村旅游度假区，集采摘、游乐、民俗体验于一体，适合家庭休闲", recommend: 7 },
{ name: "哈密巴里坤坤湖景区", type: "4A级景区", address: "新疆维吾尔自治区哈密市巴里坤哈萨克自治县", lng: 93.027, lat: 43.627, description: "高原湖泊，草原与雪山环绕，是巴里坤草原核心景观", recommend: 8 },
{ name: "和田和田玉文化旅游景区", type: "4A级景区", address: "新疆维吾尔自治区和田地区和田市", lng: 79.927, lat: 37.127, description: "和田玉文化核心区，展示和田玉开采、加工历史，体验玉石文化", recommend: 8 },
{ name: "塔城额敏河景区", type: "4A级景区", address: "新疆维吾尔自治区塔城地区额敏县", lng: 83.627, lat: 46.527, description: "额敏河沿岸生态景区，湿地与草原交织，是观鸟、休闲的好去处", recommend: 7 },
{ name: "乌鲁木齐南山风景区", type: "4A级景区", address: "新疆维吾尔自治区乌鲁木齐市乌鲁木齐县", lng: 87.327, lat: 43.527, description: "城市近郊山地景区，森林、草原、雪山交织，是乌鲁木齐市民避暑、徒步胜地", recommend: 8 },
{ name: "伊犁赛里木湖景区", type: "4A级景区", address: "新疆维吾尔自治区伊犁哈萨克自治州博乐市", lng: 81.227, lat: 44.627, description: "“大西洋最后一滴眼泪”，湖水湛蓝，周边雪山、草原环绕，是新疆最美湖泊之一", recommend: 10 },

// 宁夏回族自治区4A级景区数据模板

{ name: "阅海湾旅游景区", type: "4A级景区", address: "宁夏回族自治区银川市金凤区", lng: 106.278, lat: 38.487, description: "银川城市滨水景区，湖光与城市建筑交融，休闲观光、亲子游玩佳选", recommend: 7 },
{ name: "中粮长城天赋酒庄", type: "4A级景区", address: "宁夏回族自治区银川市西夏区", lng: 106.078, lat: 38.427, description: "贺兰山葡萄酒庄代表，集葡萄种植、酿造、品鉴于一体，体验葡萄酒文化", recommend: 8 },
{ name: "沃福百瑞宁夏枸杞馆", type: "4A级景区", address: "宁夏回族自治区银川市西夏区", lng: 106.127, lat: 38.467, description: "枸杞文化主题馆，展示枸杞种植、加工历史，科普宁夏枸杞产业文化", recommend: 7 },
{ name: "宁夏农旅产业园", type: "4A级景区", address: "宁夏回族自治区银川市贺兰县", lng: 106.327, lat: 38.577, description: "现代农业观光园区，集采摘、科普、休闲于一体，适合家庭亲子体验", recommend: 7 },
{ name: "吴忠市董府景区", type: "4A级景区", address: "宁夏回族自治区吴忠市青铜峡市", lng: 105.978, lat: 37.877, description: "清代将领董福祥府邸，清末建筑典范，历史文化底蕴深厚", recommend: 8 },
{ name: "银川镇北堡西部影城", type: "4A级景区", address: "宁夏回族自治区银川市西夏区", lng: 106.178, lat: 38.407, description: "中国十大影视基地之一，《大话西游》等经典影片取景地，体验西北影视风情", recommend: 9 },
{ name: "中卫沙坡头景区", type: "4A级景区", address: "宁夏回族自治区中卫市沙坡头区", lng: 105.027, lat: 37.477, description: "集大漠、黄河、高山、绿洲于一体，滑沙、羊皮筏子等体验丰富，西北风光代表", recommend: 10 },
{ name: "吴忠黄河楼景区", type: "4A级景区", address: "宁夏回族自治区吴忠市青铜峡市", lng: 106.078, lat: 37.827, description: "黄河文化地标，登楼可俯瞰黄河风光，展现黄河文明与宁夏历史", recommend: 8 },
{ name: "固原六盘山红军长征景区", type: "4A级景区", address: "宁夏回族自治区固原市隆德县", lng: 106.127, lat: 35.627, description: "红军长征翻越最后一座大山的纪念地，红色教育与生态观光结合", recommend: 9 },
{ name: "石嘴山沙湖旅游景区", type: "4A级景区", address: "宁夏回族自治区石嘴山市平罗县", lng: 106.327, lat: 38.827, description: "沙水相依的独特景观，沙漠与湖泊并存，观鸟、水上娱乐项目丰富", recommend: 9 },
{ name: "银川贺兰山岩画景区", type: "4A级景区", address: "宁夏回族自治区银川市西夏区", lng: 106.027, lat: 38.527, description: "古代游牧民族岩画宝库，展现远古人类生活与信仰，文化价值极高", recommend: 8 },
{ name: "中卫腾格里沙漠湿地·金沙海旅游区", type: "4A级景区", address: "宁夏回族自治区中卫市沙坡头区", lng: 105.127, lat: 37.527, description: "腾格里沙漠边缘湿地，沙漠与绿洲交织，是沙漠观光与生态体验胜地", recommend: 8 },
{ name: "吴忠青铜峡黄河大峡谷景区", type: "4A级景区", address: "宁夏回族自治区吴忠市青铜峡市", lng: 105.927, lat: 37.877, description: "黄河上游峡谷景观，108塔、水利枢纽等人文与自然交融，游船观光佳选", recommend: 8 },
{ name: "固原须弥山石窟景区", type: "4A级景区", address: "宁夏回族自治区固原市原州区", lng: 105.927, lat: 36.027, description: "宁夏最早的石窟群，佛教造像精美，是丝绸之路上的佛教艺术瑰宝", recommend: 8 },
{ name: "石嘴山星海湖景区", type: "4A级景区", address: "宁夏回族自治区石嘴山市大武口区", lng: 106.378, lat: 38.927, description: "城市湖泊湿地景区，湖光山色秀美，是市民休闲、观鸟的好去处", recommend: 7 },
   
//该部分代码为旅图Go2.0版本新增，包括了广东，广西，湖北，湖南四省4a景区
// 广东省4A级景区完整数据模板 - 高德GCJ02坐标系 | 直接嵌入网站使用

{ name: "广州塔景区", type: "4A级景区", address: "广东省广州市海珠区", lng: 113.324, lat: 23.116, description: "广州地标性建筑，集观光、游乐、餐饮于一体，可俯瞰珠江两岸城市风光，拥有摩天轮、极速云霄等特色项目", recommend: 10 },
{ name: "中山纪念堂", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.269, lat: 23.135, description: "为纪念孙中山先生而建的历史建筑，融合中西建筑风格，是广州重要的文化和纪念地标", recommend: 9 },
{ name: "莲花山旅游区", type: "4A级景区", address: "广东省广州市番禺区", lng: 113.442, lat: 22.967, description: "拥有古采石场遗址、莲花塔等景观，自然风光与人文古迹交融，是祈福、观光的休闲胜地", recommend: 8 },
{ name: "越秀公园", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.261, lat: 23.138, description: "广州最大的综合性公园，五羊石像为城市象征，园内有越秀山、镇海楼等知名景点", recommend: 9 },
{ name: "黄花岗公园", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.281, lat: 23.133, description: "辛亥革命七十二烈士墓园所在地，红色旅游经典景区，园内庄严肃穆，绿植葱郁", recommend: 8 },
{ name: "南越王博物院（王墓展区）", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.257, lat: 23.137, description: "依托西汉南越王墓而建，馆藏大量珍贵文物，展现岭南地区古代历史文化风貌", recommend: 8 },
{ name: "陈家祠旅游景区", type: "4A级景区", address: "广东省广州市荔湾区", lng: 113.247, lat: 23.122, description: "岭南建筑艺术的明珠，集木雕、砖雕、石雕等工艺于一体，现为广东民间工艺博物馆", recommend: 9 },
{ name: "广州动物园", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.260, lat: 23.130, description: "城市中心综合性动物园，饲养多种珍稀野生动物，是亲子游玩、科普教育的好去处", recommend: 7 },
{ name: "广东科学中心", type: "4A级景区", address: "广东省广州市番禺区", lng: 113.382, lat: 23.045, description: "国内大型科普教育基地，拥有多个主题展馆，以互动体验的方式普及科学知识", recommend: 8 },
{ name: "九龙湖旅游度假区", type: "4A级景区", address: "广东省广州市花都区", lng: 113.228, lat: 23.410, description: "依托九龙湖打造的生态度假区，湖光山色秀美，配套休闲、住宿、游乐等设施", recommend: 7 },
{ name: "广州起义烈士陵园", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.272, lat: 23.121, description: "纪念广州起义牺牲烈士的陵园，红色旅游景区，园内有烈士纪念碑、纪念馆等建筑", recommend: 8 },
{ name: "南海神庙景区", type: "4A级景区", address: "广东省广州市黄埔区", lng: 113.445, lat: 23.118, description: "中国古代海上丝绸之路的重要遗迹，祭祀南海神的庙宇，历史悠久，文化底蕴深厚", recommend: 7 },
{ name: "岭南印象园", type: "4A级景区", address: "广东省广州市番禺区", lng: 113.423, lat: 23.008, description: "展现岭南传统村落风貌的景区，融合岭南建筑、民俗、美食，沉浸式体验岭南文化", recommend: 8 },
{ name: "南沙天后宫", type: "4A级景区", address: "广东省广州市南沙区", lng: 113.568, lat: 22.772, description: "东南亚最大的妈祖庙，依山面海而建，建筑气势恢宏，是祈福、观海的特色景区", recommend: 7 },
{ name: "北京路文化旅游区", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.264, lat: 23.117, description: "广州历史最悠久的商业街，兼具文化与商业价值，有千年古道遗址、骑楼等景观", recommend: 10 },
{ name: "沙湾古镇景区", type: "4A级景区", address: "广东省广州市番禺区", lng: 113.321, lat: 22.908, description: "岭南经典古镇，保留大量明清建筑，是广东音乐、沙湾飘色的发源地，民俗文化浓郁", recommend: 8 },
{ name: "永庆坊旅游区", type: "4A级景区", address: "广东省广州市荔湾区", lng: 113.244, lat: 23.120, description: "依托西关老街改造的文旅街区，融合岭南西关风情与现代文创，网红打卡胜地", recommend: 9 },
{ name: "石门国家森林公园", type: "4A级景区", address: "广东省广州市从化区", lng: 113.557, lat: 23.558, description: "国家级森林公园，森林覆盖率高，有红叶谷、石门天池等景观，四季风光各异", recommend: 7 },
{ name: "广州起义纪念馆", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.263, lat: 23.122, description: "依托广州起义指挥部旧址而建，馆藏起义相关文物史料，是红色教育重要基地", recommend: 8 },
{ name: "黄埔军校旧址纪念馆旅游区", type: "4A级景区", address: "广东省广州市黄埔区", lng: 113.407, lat: 23.098, description: "中国近代著名军事学校旧址，培养了大批爱国将领，是红色旅游和历史教育胜地", recommend: 9 },
{ name: "石头记矿物园", type: "4A级景区", address: "广东省广州市花都区", lng: 113.215, lat: 23.427, description: "以矿物宝石为主题的景区，拥有大量矿物标本和奇石景观，兼具科普与观赏价值", recommend: 6 },
{ name: "宝墨园 - 南粤苑景区", type: "4A级景区", address: "广东省广州市番禺区", lng: 113.302, lat: 22.917, description: "岭南古典园林代表，亭台楼阁、碧水荷风，融合岭南建筑与江南园林特色，馆藏丰富", recommend: 8 },
{ name: "广州融创文旅城", type: "4A级景区", address: "广东省广州市花都区", lng: 113.208, lat: 23.436, description: "大型综合性文旅综合体，拥有融创乐园、水世界、雪世界等，适合家庭休闲游乐", recommend: 9 },
{ name: "余荫山房", type: "4A级景区", address: "广东省广州市番禺区", lng: 113.365, lat: 22.938, description: "广东四大名园之一，岭南微型园林的典范，布局精巧，亭台楼阁错落有致", recommend: 8 },
{ name: "白水寨旅游区", type: "4A级景区", address: "广东省广州市增城区", lng: 113.897, lat: 23.645, description: "以落差428.5米的白水仙瀑布为核心，山林叠翠，溪流潺潺，是徒步观光的胜地", recommend: 7 },
{ name: "从化碧水湾温泉度假村", type: "4A级景区", address: "广东省广州市从化区", lng: 113.602, lat: 23.648, description: "知名温泉度假村，拥有多种特色温泉池，配套完善的住宿和休闲设施，养生度假佳选", recommend: 8 },
{ name: "七彩澳游世界旅游区", type: "4A级景区", address: "广东省广州市增城区", lng: 113.815, lat: 23.297, description: "以澳洲风情为主题的文旅景区，有萌宠互动、花海观光、户外游乐等多种体验", recommend: 6 },
{ name: "天人山水旅游区", type: "4A级景区", address: "广东省广州市从化区", lng: 113.726, lat: 23.605, description: "生态文旅度假区，融合自然山水与艺术景观，有花海、湖泊、网红打卡点等", recommend: 7 },
{ name: "帽峰山森林公园景区", type: "4A级景区", address: "广东省广州市白云区", lng: 113.428, lat: 23.375, description: "广州近郊森林公园，主峰海拔534.9米，森林茂密，空气清新，适合徒步休闲", recommend: 6 },
{ name: "华南国家植物园", type: "4A级景区", address: "广东省广州市天河区", lng: 113.345, lat: 23.158, description: "国家级植物园，收集大量热带亚热带植物，兼具科研、科普和观光价值，绿植繁茂", recommend: 8 },
{ name: "海珠湿地公园景区", type: "4A级景区", address: "广东省广州市海珠区", lng: 113.342, lat: 23.097, description: "广州中心城区的生态绿核，湿地风光秀美，生物多样性丰富，是观鸟、休闲的好去处", recommend: 7 },
{ name: "中国共产党第三次全国代表大会会址纪念馆旅游区", type: "4A级景区", address: "广东省广州市越秀区", lng: 113.258, lat: 23.125, description: "中共三大召开地旧址，红色旅游经典景区，馆藏大量史料，展现建党初期的革命历史", recommend: 9 },
{ name: "广州市城市规划展览中心", type: "4A级景区", address: "广东省广州市白云区", lng: 113.267, lat: 23.178, description: "展示广州城市规划与发展的专业展馆，采用高科技手段，沉浸式了解广州城市变迁", recommend: 6 },
{ name: "广州市文化馆（新馆）景区", type: "4A级景区", address: "广东省广州市海珠区", lng: 113.318, lat: 23.092, description: "广州文化新地标，融合岭南建筑风格，开展各类文化展览、非遗展示和文艺活动", recommend: 7 },
{ name: "广州市流溪河国家森林公园", type: "4A级景区", address: "广东省广州市从化区", lng: 113.735, lat: 23.758, description: "国家级森林公园，依托流溪河水库而建，湖光山色，森林广袤，是生态观光胜地", recommend: 7 },
{ name: "广州市白江湖森林公园", type: "4A级景区", address: "广东省广州市增城区", lng: 113.856, lat: 23.527, description: "近郊森林公园，有白江湖、瀑布群等自然景观，山林清幽，适合徒步和亲子游玩", recommend: 6 },
{ name: "广州市增城何仙姑景区", type: "4A级景区", address: "广东省广州市增城区", lng: 113.867, lat: 23.218, description: "以何仙姑文化为主题的景区，有何仙姑家庙、仙藤、宝塔等景观，民俗文化浓郁", recommend: 6 },
{ name: "仙湖植物园", type: "4A级景区", address: "广东省深圳市罗湖区", lng: 114.172, lat: 22.578, description: "深圳老牌植物园，融合植物观赏、宗教文化（弘法寺），依山面湖，风光秀美", recommend: 9 },
{ name: "欢乐港湾旅游景区", type: "4A级景区", address: "广东省深圳市宝安区", lng: 113.898, lat: 22.547, description: "深圳前海网红地标，有“湾区之光”摩天轮、滨海演艺中心，集休闲、观光、娱乐于一体", recommend: 10 },
{ name: "光明农场大观园景区", type: "4A级景区", address: "广东省深圳市光明区", lng: 113.927, lat: 22.786, description: "以农业观光和亲子体验为特色，可体验挤牛奶、摘水果，品尝光明乳鸽等特色美食", recommend: 7 },
{ name: "野生动物园", type: "4A级景区", address: "广东省深圳市南山区", lng: 113.938, lat: 22.557, description: "国内首家放养式野生动物园，饲养多种珍稀动物，有动物表演、自驾投喂等体验", recommend: 9 },
{ name: "青青世界旅游区", type: "4A级景区", address: "广东省深圳市南山区", lng: 113.917, lat: 22.486, description: "以生态休闲为特色的景区，有热带雨林、蝴蝶谷、农场体验，亲近自然的好去处", recommend: 7 },
{ name: "西部海上田园旅游区", type: "4A级景区", address: "广东省深圳市宝安区", lng: 113.807, lat: 22.608, description: "依托珠江口湿地打造的生态景区，融合水乡风情、农业观光，有多种水上娱乐项目", recommend: 6 },
{ name: "观澜湖休闲旅游区", type: "4A级景区", address: "广东省深圳市龙华区", lng: 114.018, lat: 22.675, description: "以高尔夫运动为核心的休闲度假区，配套温泉、酒店、购物，适合高端休闲度假", recommend: 8 },
{ name: "大梅沙海滨公园", type: "4A级景区", address: "广东省深圳市盐田区", lng: 114.317, lat: 22.586, description: "深圳知名免费海滨公园，沙滩开阔，海水清澈，是滨海休闲、玩水消暑的胜地", recommend: 10 },
{ name: "华侨城创意文化园", type: "4A级景区", address: "广东省深圳市南山区", lng: 113.928, lat: 22.546, description: "由旧厂房改造的文创园区，聚集大量创意工作室、展览和特色小店，文艺气息浓厚", recommend: 8 },
{ name: "海上世界旅游区", type: "4A级景区", address: "广东省深圳市南山区", lng: 113.927, lat: 22.528, description: "以“明华轮”为核心的滨海文旅街区，集美食、购物、休闲、观光于一体，夜景绝美", recommend: 9 },
{ name: "深圳欢乐谷", type: "4A级景区", address: "广东省深圳市南山区", lng: 113.918, lat: 22.547, description: "国内知名主题乐园，拥有多种惊险刺激的游乐设施和特色演艺，适合年轻群体游玩", recommend: 10 },
{ name: "深圳世界之窗", type: "4A级景区", address: "广东省深圳市南山区", lng: 113.917, lat: 22.548, description: "以世界名胜微缩景观为特色的主题公园，融合观光、游乐、演艺，一日游遍世界", recommend: 10 },
{ name: "锦绣中华・民俗村", type: "4A级景区", address: "广东省深圳市南山区", lng: 113.915, lat: 22.550, description: "融合中国名胜微缩景观和各民族民俗文化，沉浸式体验中国传统文化和民族风情", recommend: 9 },
{ name: "深圳东部华侨城茶溪谷", type: "4A级景区", address: "广东省深圳市盐田区", lng: 114.327, lat: 22.598, description: "东部华侨城休闲板块，有茵特拉根小镇、茶翁古镇、花海，欧式风情与自然山水融合", recommend: 9 },
{ name: "深圳东部华侨城大侠谷", type: "4A级景区", address: "广东省深圳市盐田区", lng: 114.318, lat: 22.607, description: "东部华侨城游乐板块，拥有多种惊险游乐设施，依托山海风光，兼具刺激与观光", recommend: 9 },
{ name: "深圳大鹏所城文化旅游区", type: "4A级景区", address: "广东省深圳市大鹏新区", lng: 114.378, lat: 22.537, description: "明清海防古城，深圳历史文化之根，保留大量明清建筑，民俗文化和红色文化交融", recommend: 9 },
{ name: "深圳杨梅坑 - 鹿嘴山庄旅游区", type: "4A级景区", address: "广东省深圳市大鹏新区", lng: 114.478, lat: 22.517, description: "深圳最美滨海徒步路线，依山面海，沙滩礁石错落，是《美人鱼》取景地，网红打卡点", recommend: 10 },
{ name: "深圳甘坑客家小镇", type: "4A级景区", address: "广东省深圳市龙岗区", lng: 114.157, lat: 22.618, description: "以客家文化为主题的特色小镇，保留客家围屋，融合文创、民俗、美食，客家风情浓郁", recommend: 8 },
{ name: "圆明新园", type: "4A级景区", address: "广东省珠海市香洲区", lng: 113.578, lat: 22.257, description: "以北京圆明园为蓝本的仿古园林，复刻多处经典景观，融合皇家园林与江南园林特色", recommend: 8 },
{ name: "桂山岛风景区", type: "4A级景区", address: "广东省珠海市香洲区", lng: 113.727, lat: 22.078, description: "珠海知名海岛，拥有清新的滨海风光，可体验海岛徒步、海鲜美食、水上运动", recommend: 7 },
{ name: "外伶仃岛旅游度假区", type: "4A级景区", address: "广东省珠海市香洲区", lng: 113.878, lat: 22.017, description: "珠海小众海岛，海水清澈见底，是潜水、海钓的胜地，可远眺香港长洲岛", recommend: 8 },
{ name: "东澳岛旅游度假区", type: "4A级景区", address: "广东省珠海市香洲区", lng: 113.678, lat: 22.027, description: "珠海知名度假海岛，有南沙湾沙滩、钻石沙滩，配套高端酒店，滨海度假佳选", recommend: 9 },
{ name: "珠海长隆海洋王国", type: "4A级景区", address: "广东省珠海市香洲区", lng: 113.587, lat: 22.138, description: "全球知名海洋主题乐园，拥有多种珍稀海洋生物，大型演艺和惊险游乐设施兼具", recommend: 10 },
{ name: "珠海御温泉度假村", type: "4A级景区", address: "广东省珠海市斗门区", lng: 113.278, lat: 22.217, description: "日式风情温泉度假村，拥有多种特色温泉池，配套庙会小吃街，养生休闲佳选", recommend: 9 },
{ name: "珠海海泉湾旅游度假区", type: "4A级景区", address: "广东省珠海市金湾区", lng: 113.127, lat: 21.987, description: "大型滨海温泉度假区，有海洋温泉、神秘岛乐园、剧场演艺，综合性休闲度假胜地", recommend: 8 },
{ name: "珠海罗西尼工业旅游区", type: "4A级景区", address: "广东省珠海市香洲区", lng: 113.527, lat: 22.278, description: "以钟表文化为主题的工业旅游景区，可参观钟表生产流程，了解钟表文化和历史", recommend: 6 },
{ name: "珠海汤臣倍健透明工厂景区", type: "4A级景区", address: "广东省珠海市金湾区", lng: 113.227, lat: 22.018, description: "营养保健品工业旅游景区，透明化展示生产流程，兼具科普教育和工业观光价值", recommend: 6 },
{ name: "珠海横琴星乐度・露营小镇", type: "4A级景区", address: "广东省珠海市香洲区", lng: 113.598, lat: 22.127, description: "以露营为主题的文旅小镇，有多种特色露营房型和户外游乐设施，适合亲子休闲", recommend: 7 },
{ name: "珠海斗门古街景区", type: "4A级景区", address: "广东省珠海市斗门区", lng: 113.218, lat: 22.267, description: "珠海百年骑楼老街，保留西洋风格骑楼建筑，集美食、购物、民俗于一体，市井气息浓", recommend: 7 },
{ name: "珠海金台寺景区", type: "4A级景区", address: "广东省珠海市斗门区", lng: 113.178, lat: 22.178, description: "珠海知名佛教寺院，依山面湖而建，建筑气势恢宏，环境清幽，是祈福观光胜地", recommend: 7 },
{ name: "南澳岛生态旅游区", type: "4A级景区", address: "广东省汕头市南澳县", lng: 117.078, lat: 23.427, description: "广东唯一海岛县，拥有绵长的海岸线、清新的滨海风光，山海相依，生态环境绝佳", recommend: 10 },
{ name: "妈屿岛旅游区", type: "4A级景区", address: "广东省汕头市龙湖区", lng: 116.758, lat: 23.378, description: "汕头近郊小众海岛，有妈祖庙、海滨沙滩，融合海洋文化和民俗文化，休闲观光佳选", recommend: 7 },
{ name: "潮阳莲花峰风景区", type: "4A级景区", address: "广东省汕头市潮阳区", lng: 116.578, lat: 23.178, description: "因山峰形似莲花而得名，濒临南海，有海滨风光、历史碑刻，是观海怀古胜地", recommend: 7 },
{ name: "澄海前美古村（含陈慈黉故居）", type: "4A级景区", address: "广东省汕头市澄海区", lng: 116.727, lat: 23.478, description: "岭南知名古村，陈慈黉故居为岭南侨宅典范，建筑融合中西风格，雕梁画栋，气势恢宏", recommend: 8 },
{ name: "汕头小公园开埠区", type: "4A级景区", address: "广东省汕头市金平区", lng: 116.648, lat: 23.367, description: "汕头开埠文化发源地，保留大量骑楼建筑，以中山纪念亭为核心，市井文化和侨乡文化浓郁", recommend: 9 },
{ name: "汕头方特欢乐世界・蓝水星", type: "4A级景区", address: "广东省汕头市龙湖区", lng: 116.778, lat: 23.398, description: "粤东知名主题乐园，以科幻为特色，拥有多种高科技游乐设施，适合年轻群体和亲子", recommend: 8 },
{ name: "汕头礐石风景名胜区", type: "4A级景区", address: "广东省汕头市濠江区", lng: 116.618, lat: 23.347, description: "汕头老牌景区，依山面海，有奇峰怪石、寺庙亭台，是登高观海、休闲祈福的胜地", recommend: 7 },
{ name: "汕头中山公园", type: "4A级景区", address: "广东省汕头市金平区", lng: 116.638, lat: 23.378, description: "粤东知名老牌公园，中式园林风格，有九曲桥、假山、亭台，是市民休闲的好去处", recommend: 6 },
{ name: "汕头开埠文化陈列馆", type: "4A级景区", address: "广东省汕头市金平区", lng: 116.647, lat: 23.368, description: "展示汕头开埠历史的展馆，馆藏大量开埠相关文物史料，展现汕头侨乡文化和近代历史", recommend: 7 },
{ name: "汕头侨批文物馆", type: "4A级景区", address: "广东省汕头市金平区", lng: 116.648, lat: 23.367, description: "以侨批文化为主题的展馆，馆藏大量侨批文物，展现潮汕华侨的海外奋斗史和家国情怀", recommend: 7 },
{ name: "南风古灶旅游区", type: "4A级景区", address: "广东省佛山市禅城区", lng: 113.058, lat: 23.017, description: "拥有500多年历史的龙窑，是陶瓷活化石，可体验制陶，感受石湾陶瓷文化的魅力", recommend: 9 },
{ name: "盈香生态园", type: "4A级景区", address: "广东省佛山市高明区", lng: 112.827, lat: 22.878, description: "大型农业生态园，有花海观光、亲子游乐、户外拓展，配套特色美食，适合家庭游玩", recommend: 8 },
{ name: "祖庙博物馆", type: "4A级景区", address: "广东省佛山市禅城区", lng: 113.068, lat: 23.057, description: "佛山文化地标，供奉北帝，融合木雕、砖雕、陶塑等工艺，是岭南民俗文化的核心", recommend: 10 },
{ name: "皂幕山旅游风景区", type: "4A级景区", address: "广东省佛山市高明区", lng: 112.927, lat: 22.827, description: "佛山第一高峰，山林叠翠，溪流潺潺，登顶可俯瞰珠三角风光，徒步观光佳选", recommend: 7 },
{ name: "平洲玉器街景区", type: "4A级景区", address: "广东省佛山市南海区", lng: 113.178, lat: 23.018, description: "中国知名玉器集散地，集玉器加工、销售、鉴赏于一体，玉器文化浓郁，可淘玉赏玉", recommend: 7 },
{ name: "陈村花卉世界", type: "4A级景区", address: "广东省佛山市顺德区", lng: 113.127, lat: 22.987, description: "中国知名花卉交易中心，花海连绵，品种繁多，兼具花卉观光和交易功能", recommend: 7 },
{ name: "顺德罗浮宫国际家具艺术博览中心", type: "4A级景区", address: "广东省佛山市顺德区", lng: 113.187, lat: 22.898, description: "全球知名家具博览中心，集家具展示、销售、艺术鉴赏于一体，建筑气势恢宏", recommend: 6 },
{ name: "乐从国际家居汇展中心", type: "4A级景区", address: "广东省佛山市顺德区", lng: 113.198, lat: 22.887, description: "中国知名家居集散地，汇聚大量家居品牌，集展示、销售、体验于一体", recommend: 6 },
{ name: "史努比缤纷世界景区", type: "4A级景区", address: "广东省佛山市顺德区", lng: 113.227, lat: 22.898, description: "以史努比为主题的亲子乐园，有多种卡通游乐设施和表演，适合低龄儿童游玩", recommend: 7 },
{ name: "紫南村文化旅游区", type: "4A级景区", address: "广东省佛山市禅城区", lng: 112.978, lat: 22.987, description: "岭南美丽乡村典范，村容整洁，融合民俗文化、乡村旅游，是乡村振兴示范基地", recommend: 7 },
{ name: "三水荷花世界", type: "4A级景区", address: "广东省佛山市三水区", lng: 112.987, lat: 23.127, description: "世界知名荷花主题景区，荷花品种繁多，夏季荷花盛开，景色绝美，配套水上游乐", recommend: 7 },
{ name: "佛山创意产业园", type: "4A级景区", address: "广东省佛山市禅城区", lng: 113.078, lat: 23.047, description: "旧厂房改造的文创园区，聚集大量特色餐饮、文创小店、休闲娱乐，夜经济氛围浓厚", recommend: 8 },
{ name: "佛山岭南天地", type: "4A级景区", address: "广东省佛山市禅城区", lng: 113.068, lat: 23.058, description: "依托岭南古民居改造的文旅街区，保留镬耳屋等岭南建筑，融合文创、美食、购物", recommend: 9 },
{ name: "佛山梁园", type: "4A级景区", address: "广东省佛山市禅城区", lng: 113.088, lat: 23.067, description: "广东四大名园之一，岭南古典园林典范，布局精巧，碧水萦回，亭台楼阁错落", recommend: 8 },
{ name: "佛山清晖园", type: "4A级景区", address: "广东省佛山市顺德区", lng: 113.268, lat: 22.807, description: "广东四大名园之一，岭南园林精品，布局紧凑，兼具江南园林韵味，馆藏丰富", recommend: 9 },
{ name: "佛山南海湾森林生态园", type: "4A级景区", address: "广东省佛山市南海区", lng: 112.927, lat: 22.807, description: "近郊森林生态园，山林叠翠，溪流瀑布成群，空气清新，是徒步溯溪的胜地", recommend: 7 },
{ name: "佛山梦里水乡景区", type: "4A级景区", address: "广东省佛山市南海区", lng: 113.198, lat: 23.127, description: "以水乡风情为特色的景区，河网密布，古桥错落，夜景绝美，融合民俗与休闲", recommend: 7 },
{ name: "佛山西樵山国艺影视城", type: "4A级景区", address: "广东省佛山市南海区", lng: 112.907, lat: 22.828, description: "以影视拍摄为核心的景区，复刻多个时代的建筑风貌，可体验影视拍摄，打卡网红景点", recommend: 8 },
{ name: "佛山高明盈香生态园", type: "4A级景区", address: "广东省佛山市高明区", lng: 112.828, lat: 22.877, description: "盈香生态园姊妹园区，同样以农业观光、亲子游乐为特色，配套更多户外拓展项目", recommend: 7 },
{ name: "佛山顺德容桂渔人码头", type: "4A级景区", address: "广东省佛山市顺德区", lng: 113.298, lat: 22.787, description: "由旧码头改造的文旅街区，江景秀美，集特色餐饮、文创小店、休闲打卡于一体", recommend: 8 },
{ name: "佛山顺德欢乐海岸 PLUS", type: "4A级景区", address: "广东省佛山市顺德区", lng: 113.248, lat: 22.817, description: "顺德网红文旅综合体，有“顺德眼”摩天轮、大型游乐设施，融合美食、游乐、休闲", recommend: 10 },
{ name: "佛山南海千灯湖公园", type: "4A级景区", address: "广东省佛山市南海区", lng: 113.138, lat: 23.087, description: "佛山城市地标，湖光山色秀美，灯光夜景一绝，是市民休闲、打卡的好去处", recommend: 9 },
{ name: "古佛洞天景区", type: "4A级景区", address: "广东省韶关市乐昌市", lng: 113.327, lat: 25.018, description: "岭南知名喀斯特溶洞，洞内钟乳石千姿百态，有古佛造像，融自然与人文景观于一体", recommend: 7 },
{ name: "帽子峰旅游景区", type: "4A级景区", address: "广东省韶关市南雄市", lng: 114.378, lat: 25.278, description: "以红叶观光为特色的景区，秋季红叶漫山，层林尽染，有“粤北小九寨”之称", recommend: 8 },
{ name: "珠玑古巷・梅关古道景区", type: "4A级景区", address: "广东省韶关市南雄市", lng: 114.327, lat: 25.078, description: "客家先民南迁的重要驿站，梅关古道是古代南北交通要道，冬季梅花盛开，景色绝美", recommend: 9 },
{ name: "曹溪温泉假日度假村", type: "4A级景区", address: "广东省韶关市曲江区", lng: 113.678, lat: 24.827, description: "依托温泉资源打造的度假村，毗邻南华寺，温泉养生与佛教文化交融，休闲祈福佳选", recommend: 7 },
{ name: "经律论文化旅游小镇景区", type: "4A级景区", address: "广东省韶关市曲江区", lng: 113.727, lat: 24.878, description: "以佛教文化为主题的文旅小镇，毗邻南华寺，有温泉、禅修、观光等多种体验", recommend: 7 },
{ name: "丽宫旅游区", type: "4A级景区", address: "广东省韶关市乳源瑶族自治县", lng: 113.278, lat: 24.727, description: "大型综合性旅游区，有温泉、滑雪、游乐等设施，融合自然山水与休闲娱乐", recommend: 7 },
{ name: "南岭国家森林公园", type: "4A级景区", address: "广东省韶关市乳源瑶族自治县", lng: 113.178, lat: 24.878, description: "国家级森林公园，广东海拔最高的森林公园，山林广袤，生物多样性丰富，生态绝佳", recommend: 8 },
{ name: "广东大峡谷景区", type: "4A级景区", address: "广东省韶关市乳源瑶族自治县", lng: 113.078, lat: 24.778, description: "广东知名大峡谷，落差300多米，峡谷幽深，瀑布成群，徒步观光的绝佳胜地", recommend: 9 },
{ name: "云门山生态文化旅游区", type: "4A级景区", address: "广东省韶关市乳源瑶族自治县", lng: 113.327, lat: 24.828, description: "依托云门山打造的文旅区，有玻璃桥、漂流、花海，融合自然山水与惊险游乐", recommend: 8 },
{ name: "满堂客家大围景区", type: "4A级景区", address: "广东省韶关市始兴县", lng: 114.078, lat: 24.927, description: "岭南最大的客家围屋，建筑气势恢宏，保留完整的客家民居格局，客家文化浓郁", recommend: 8 },
{ name: "东华山风景区", type: "4A级景区", address: "广东省韶关市翁源县", lng: 114.178, lat: 24.378, description: "以山水风光和佛教文化为特色，有东华寺、奇峰怪石，环境清幽，祈福观光佳选", recommend: 7 },
{ name: "云天海原始森林度假村景区", type: "4A级景区", address: "广东省韶关市新丰县", lng: 114.027, lat: 24.078, description: "依托原始森林打造的度假村，森林覆盖率高，空气清新，是养生休闲、避暑的胜地", recommend: 7 },
{ name: "万绿湖风景区", type: "4A级景区", address: "广东省河源市东源县", lng: 114.578, lat: 23.727, description: "华南最大的人工湖，湖水碧绿，岛屿星罗棋布，生态环境绝佳，游船观光的胜地", recommend: 9 },
{ name: "巴伐利亚庄园", type: "4A级景区", address: "广东省河源市源城区", lng: 114.627, lat: 23.778, description: "以巴伐利亚风情为主题的文旅小镇，融合温泉、滑雪、宗教文化，异国风情浓郁", recommend: 8 },
{ name: "客天下水晶温泉国际旅游度假区", type: "4A级景区", address: "广东省河源市源城区", lng: 114.678, lat: 23.728, description: "以客家文化为主题的温泉度假区，拥有多种特色温泉池，融合客家民俗与温泉养生", recommend: 7 },
{ name: "霍山旅游风景区", type: "4A级景区", address: "广东省河源市龙川县", lng: 115.178, lat: 24.078, description: "岭南丹霞地貌名山，奇峰怪石千姿百态，有“丹霞第二”之称，登高观光佳选", recommend: 8 },
{ name: "黄龙岩畲族风情旅游区", type: "4A级景区", address: "广东省河源市东源县", lng: 114.827, lat: 23.927, description: "以畲族文化和喀斯特溶洞为特色，洞内钟乳石奇特，可体验畲族民俗和歌舞", recommend: 7 },
{ name: "佗城景区", type: "4A级景区", address: "广东省河源市龙川县", lng: 115.078, lat: 24.027, description: "岭南千年古县，南越王赵佗兴王之地，保留大量历史建筑，客家文化和历史文化交融", recommend: 8 },
{ name: "河源恐龙文博园", type: "4A级景区", address: "广东省河源市源城区", lng: 114.688, lat: 23.757, description: "以恐龙文化为主题的文博园区，馆藏大量恐龙蛋化石，是恐龙科普教育的重要基地", recommend: 7 },
{ name: "河源太平古街景区", type: "4A级景区", address: "广东省河源市源城区", lng: 114.678, lat: 23.748, description: "河源老牌商业街，保留骑楼建筑，集客家美食、购物、民俗于一体，市井气息浓郁", recommend: 6 },
{ name: "客天下景区", type: "4A级景区", address: "广东省梅州市梅江区", lng: 116.178, lat: 24.278, description: "以客家文化为主题的大型文旅综合体，融合客家民俗、温泉、游乐、住宿，客家风情浓郁", recommend: 8 },
{ name: "雁山湖国际花园度假村", type: "4A级景区", address: "广东省梅州市梅县区", lng: 116.427, lat: 24.427, description: "以花海和湖光山色为特色的度假村，花海连绵，湖水清澈，休闲度假佳选", recommend: 7 },
{ name: "南寿峰旅游景区", type: "4A级景区", address: "广东省梅州市梅县区", lng: 116.278, lat: 24.327, description: "以养生文化为主题的景区，山林叠翠，配套养生温泉、药膳，是养生休闲的胜地", recommend: 7 },
{ name: "五指石风景名胜区", type: "4A级景区", address: "广东省梅州市平远县", lng: 116.078, lat: 24.578, description: "岭南丹霞地貌名山，五座山峰形似五指，奇峰怪石，栈道悬空，景色绝美", recommend: 9 },
{ name: "韩山历史文化旅游区", type: "4A级景区", address: "广东省梅州市丰顺县", lng: 116.127, lat: 24.178, description: "以韩文公文化为主题的景区，山林叠翠，有茶园、花海，融合文化观光与生态休闲", recommend: 7 },
{ name: "三河坝战役纪念园景区", type: "4A级景区", address: "广东省梅州市大埔县", lng: 116.478, lat: 24.328, description: "纪念三河坝战役的红色旅游景区，有烈士纪念碑、纪念馆，展现革命先烈的英雄事迹", recommend: 9 },
{ name: "球王故里文化旅游区", type: "4A级景区", address: "广东省梅州市五华县", lng: 115.778, lat: 23.927, description: "以球王李惠堂为主题的景区，展现足球文化和客家民俗，是足球文化爱好者的胜地", recommend: 7 },
{ name: "叶剑英纪念园", type: "4A级景区", address: "广东省梅州市梅县区", lng: 116.227, lat: 24.378, description: "纪念叶剑英元帅的景区，有故居、纪念馆，馆藏大量史料，展现元帅的生平事迹", recommend: 9 },
{ name: "雁南飞茶田景区", type: "4A级景区", address: "广东省梅州市梅县区", lng: 116.478, lat: 24.478, description: "以茶文化为主题的景区，万亩茶园连绵，融合客家文化和茶文化，品茶观光佳选", recommend: 9 },
{ name: "灵光寺旅游区", type: "4A级景区", address: "广东省梅州市梅县区", lng: 116.488, lat: 24.487, description: "广东四大名寺之一，佛教文化圣地，寺内古木参天，建筑气势恢宏，祈福观光佳选", recommend: 8 },
{ name: "长潭旅游区", type: "4A级景区", address: "广东省梅州市蕉岭县", lng: 116.178, lat: 24.627, description: "以长潭湖为核心的景区，湖光山色秀美，有客家围屋、寺庙，融合自然与人文景观", recommend: 7 },
{ name: "百侯名镇旅游区", type: "4A级景区", address: "广东省梅州市大埔县", lng: 116.427, lat: 24.527, description: "岭南客家名镇，保留大量明清客家建筑，民俗文化浓郁，是客家文化体验的胜地", recommend: 8 },
{ name: "坪山梯田旅游区", type: "4A级景区", address: "广东省梅州市大埔县", lng: 116.578, lat: 24.578, description: "岭南知名梯田景区，梯田层叠，四季风光各异，春季灌水、秋季稻黄，景色绝美", recommend: 8 },
{ name: "富大陶瓷工业旅游区", type: "4A级景区", address: "广东省梅州市大埔县", lng: 116.478, lat: 24.427, description: "以陶瓷文化为主题的工业旅游景区，可参观陶瓷生产流程，体验制陶，感受客家陶瓷文化", recommend: 6 },
{ name: "张弼士故居旅游区", type: "4A级景区", address: "广东省梅州市大埔县", lng: 116.627, lat: 24.528, description: "纪念张裕葡萄酒创始人张弼士的景区，故居为客家围屋，融合客家文化和侨乡文化", recommend: 7 },
{ name: "龙门铁泉旅游度假区", type: "4A级景区", address: "广东省惠州市龙门县", lng: 114.178, lat: 23.727, description: "惠州知名温泉度假区，拥有多种特色温泉池，配套完善的住宿和休闲设施，养生度假佳选", recommend: 8 },
{ name: "五矿・哈施塔特旅游小镇", type: "4A级景区", address: "广东省惠州市博罗县", lng: 114.427, lat: 23.178, description: "以奥地利哈施塔特小镇为蓝本的文旅小镇，欧式风情浓郁，网红打卡胜地", recommend: 9 },
{ name: "巽寮国际滨海旅游度假区", type: "4A级景区", address: "广东省惠州市惠东县", lng: 114.878, lat: 22.827, description: "惠州知名滨海度假区，沙滩绵延，海水清澈，配套大量酒店和游乐设施，滨海度假佳选", recommend: 10 },
{ name: "罗浮山风景名胜区", type: "4A级景区", address: "广东省惠州市博罗县", lng: 114.078, lat: 23.278, description: "岭南四大名山之一，道教第七洞天，山林叠翠，道观林立，祈福观光、养生休闲佳选", recommend: 10 },
{ name: "南昆山生态旅游区", type: "4A级景区", address: "广东省惠州市龙门县", lng: 114.327, lat: 23.627, description: "岭南知名生态旅游区，森林覆盖率高，空气清新，是避暑、养生、徒步的胜地", recommend: 9 },
{ name: "惠州西湖风景名胜区", type: "4A级景区", address: "广东省惠州市惠城区", lng: 114.428, lat: 23.078, description: "惠州城市名片，“苎萝西子”，湖光山色秀美，亭台楼阁错落，与杭州西湖齐名", recommend: 10 },
{ name: "惠州海滨温泉旅游度假区", type: "4A级景区", address: "广东省惠州市惠东县", lng: 114.927, lat: 22.878, description: "滨海温泉度假区，融合温泉养生和滨海风光，拥有多种特色温泉池，休闲度假佳选", recommend: 7 },
{ name: "惠州尚天然花海温泉小镇", type: "4A级景区", address: "广东省惠州市龙门县", lng: 114.227, lat: 23.778, description: "以花海和温泉为特色的小镇，花海连绵，温泉养生，配套客家围屋，融合自然与民俗", recommend: 7 },
{ name: "惠州永记生态园", type: "4A级景区", address: "广东省惠州市惠东县", lng: 114.727, lat: 22.927, description: "大型农业生态园，有花海观光、亲子游乐、科普教育，适合家庭游玩和农业体验", recommend: 6 },
{ name: "惠州大亚湾黄金海岸", type: "4A级景区", address: "广东省惠州市惠阳区", lng: 114.578, lat: 22.678, description: "大亚湾知名海滨沙滩，沙滩开阔，海水清澈，是滨海休闲、玩水消暑的好去处", recommend: 8 },
{ name: "惠州双月湾旅游区", type: "4A级景区", address: "广东省惠州市惠东县", lng: 114.978, lat: 22.727, description: "因形状似两轮弯月而得名，左右两个海湾风光各异，沙滩绵延，是滨海观光的胜地", recommend: 10 },
{ name: "惠州红花湖景区", type: "4A级景区", address: "广东省惠州市惠城区", lng: 114.378, lat: 23.027, description: "惠州城市绿核，环湖18公里绿道，湖光山色秀美，是骑行、徒步、休闲的好去处", recommend: 9 },
{ name: "惠州叶挺将军纪念园", type: "4A级景区", address: "广东省惠州市惠阳区", lng: 114.478, lat: 22.827, description: "纪念叶挺将军的红色旅游景区，有故居、纪念馆，展现将军的革命生平与英雄事迹", recommend: 9 },
{ name: "惠州秋长谷里旅游区", type: "4A级景区", address: "广东省惠州市惠阳区", lng: 114.427, lat: 22.878, description: "依托客家古村改造的文旅区，保留客家围屋，融合乡村旅游、文创、民宿，客家风情浓郁", recommend: 7 },
{ name: "凤山祖庙旅游区", type: "4A级景区", address: "广东省汕尾市城区", lng: 115.378, lat: 22.727, description: "汕尾知名妈祖庙，依山面海而建，建筑气势恢宏，是潮汕地区重要的祈福圣地", recommend: 8 },
{ name: "海丰水底山旅游度假区", type: "4A级景区", address: "广东省汕尾市海丰县", lng: 115.078, lat: 22.878, description: "大型山地旅游度假区，有温泉、瀑布、花海，融合自然山水与休闲养生，度假佳选", recommend: 7 },
{ name: "陆丰玄武山旅游区", type: "4A级景区", address: "广东省汕尾市陆丰市", lng: 115.878, lat: 22.927, description: "粤东知名佛教圣地，元山寺为核心，建筑气势恢宏，民俗文化浓郁，祈福观光佳选", recommend: 9 },
{ name: "海丰莲花山度假村", type: "4A级景区", address: "广东省汕尾市海丰县", lng: 115.227, lat: 22.978, description: "依托莲花山打造的度假村，山林叠翠，温泉养生，配套完善，休闲度假佳选", recommend: 7 },
{ name: "海丰新山红色旅游区", type: "4A级景区", address: "广东省汕尾市海丰县", lng: 115.178, lat: 22.928, description: "红色旅游经典景区，是彭湃烈士开展革命活动的重要地点，红色文化底蕴深厚", recommend: 8 },
{ name: "汕尾红海湾旅游区", type: "4A级景区", address: "广东省汕尾市城区", lng: 115.527, lat: 22.627, description: "汕尾知名滨海旅游区，沙滩礁石错落，海浪汹涌，是冲浪、观海的胜地，网红打卡点", recommend: 10 },
{name: "汕尾金町湾旅游区", type: "4A 级景区", address: "广东省汕尾市城区", lng: 115.327, lat: 22.778, description: "汕尾新晋滨海网红打卡点，沙滩开阔平缓，海水清澈，配套网红民宿、滨海步道，是休闲度假、观海打卡的佳选", recommend: 9},
{ name: "广东观音山国家森林公园", type: "4A 级景区", address: "广东省东莞市樟木头镇", lng: 114.178, lat: 22.927, description: "东莞知名森林公园，以观音文化为核心，山林叠翠，有观音圣像、寺庙，是祈福、徒步的胜地", recommend: 8 },
{ name: "龙凤山庄影视旅游区", type: "4A 级景区", address: "广东省东莞市凤岗镇", lng: 114.127, lat: 22.778, description: "以影视拍摄和婚庆为特色的景区，欧式建筑林立，花海连绵，是网红打卡、婚纱拍摄的佳选", recommend: 8 },
{ name: "香市动物园", type: "4A 级景区", address: "广东省东莞市寮步镇", lng: 113.878, lat: 22.927, description: "东莞综合性动物园，饲养多种珍稀野生动物，有动物表演、亲子互动项目，适合家庭游玩", recommend: 7 },
{ name: "香市文化旅游区", type: "4A 级景区", address: "广东省东莞市寮步镇", lng: 113.888, lat: 22.937, description: "以莞香文化为核心的景区，展现莞香种植、制作工艺，融合民俗文化、观光体验", recommend: 7 },
{ name: "隐贤山庄", type: "4A 级景区", address: "广东省东莞市常平镇", lng: 114.178, lat: 22.978, description: "东莞综合性文旅景区，有游乐设施、动物园、寺庙，融合休闲游乐、祈福观光，适合家庭游玩", recommend: 8 },
{ name: "松山湖生态景区", type: "4A 级景区", address: "广东省东莞市松山湖管委会", lng: 113.827, lat: 22.827, description: "东莞城市生态绿核，湖光山色秀美，环湖绿道绵长，是骑行、徒步、休闲观光的好去处", recommend: 9 },
{ name: "鸦片战争博物馆景区", type: "4A 级景区", address: "广东省东莞市虎门镇", lng: 113.678, lat: 22.727, description: "纪念鸦片战争的红色旅游景区，有虎门销烟池、纪念馆，馆藏大量史料，是历史教育重要基地", recommend: 9 },
{ name: "广东东江纵队旧址景区", type: "4A 级景区", address: "广东省东莞市大岭山镇", lng: 113.878, lat: 22.878, description: "东江纵队革命活动旧址，红色旅游经典景区，展现华南抗日游击战争的历史，红色教育基地", recommend: 8 },
{ name: "可园博物馆景区", type: "4A 级景区", address: "广东省东莞市莞城区", lng: 113.758, lat: 22.937, description: "广东四大名园之一，岭南古典园林典范，布局精巧，亭台楼阁错落，馆藏岭南书画珍品", recommend: 8 },
{ name: "华阳湖湿地公园景区", type: "4A 级景区", address: "广东省东莞市麻涌镇", lng: 113.578, lat: 22.827, description: "东莞知名湿地公园，水乡风光秀美，河网密布，古桥错落，可游船观光、体验水乡民俗", recommend: 8 },
{ name: "东莞科学馆", type: "4A 级景区", address: "广东省东莞市莞城区", lng: 113.748, lat: 22.938, description: "东莞科普教育重要基地，拥有多个科普展厅和互动体验项目，适合青少年科普学习", recommend: 7 },
{ name: "东莞展览馆", type: "4A 级景区", address: "广东省东莞市南城街道", lng: 113.778, lat: 22.917, description: "展示东莞城市发展和历史文化的展馆，馆藏大量文物和史料，沉浸式了解东莞的变迁与发展", recommend: 7 },
{ name: "东莞袁崇焕纪念园", type: "4A 级景区", address: "广东省东莞市石碣镇", lng: 113.827, lat: 23.027, description: "纪念明末名将袁崇焕的景区，有故居、纪念馆、衣冠冢，展现袁崇焕的生平与英雄事迹", recommend: 8 },
{ name: "东莞南社明清古村落", type: "4A 级景区", address: "广东省东莞市茶山镇", lng: 113.927, lat: 22.978, description: "保留完整的明清客家古村落，镬耳屋林立，民俗文化浓郁，是岭南古村观光的佳选", recommend: 8 },
{ name: "东莞塘尾古村落", type: "4A 级景区", address: "广东省东莞市石排镇", lng: 113.978, lat: 23.027, description: "岭南明清古村落典范，保留大量古民居、祠堂，建筑风格独特，民俗文化底蕴深厚", recommend: 7 },
{ name: "詹园景区", type: "4A 级景区", address: "广东省中山市南区街道", lng: 113.478, lat: 22.578, description: "岭南最大的私家古典园林，融合江南园林与岭南建筑特色，亭台楼阁、碧水荷风，景色秀美", recommend: 8 },
{ name: "中国（大涌）红木文化博览城景区", type: "4A 级景区", address: "广东省中山市大涌镇", lng: 113.427, lat: 22.527, description: "以红木文化为核心的景区，集红木雕刻、展示、销售于一体，展现岭南红木工艺的魅力", recommend: 7 },
{ name: "华艺广场景区", type: "4A 级景区", address: "广东省中山市古镇镇", lng: 113.278, lat: 22.578, description: "以灯饰文化为核心的工业旅游景区，集灯饰展示、设计、销售于一体，是古镇灯饰文化的代表", recommend: 7 },
{ name: "圭峰山风景区", type: "4A 级景区", address: "广东省江门市新会区", lng: 113.078, lat: 22.527, description: "江门知名名山，山林叠翠，有玉台寺、圭峰湖等景观，是登高、祈福、休闲观光的胜地", recommend: 9 },
{ name: "华侨城古劳水乡景区", type: "4A 级景区", address: "广东省江门市鹤山市", lng: 113.027, lat: 22.727, description: "岭南知名水乡，河网密布，桑基鱼塘错落，融合水乡观光、民俗体验、游乐休闲", recommend: 9 },
{ name: "开平碉楼文化旅游区", type: "4A 级景区", address: "广东省江门市开平市", lng: 112.678, lat: 22.278, description: "岭南碉楼建筑代表，集防卫、居住于一体，建筑风格融合中西，是世界文化遗产组成部分", recommend: 10 },
{ name: "台山上下川岛旅游区", type: "4A 级景区", address: "广东省江门市台山市", lng: 112.727, lat: 21.727, description: "江门知名海岛旅游区，上下川岛各具特色，沙滩绵长，海水清澈，滨海度假、海钓的佳选", recommend: 9 },
{ name: "恩平金山温泉度假村", type: "4A 级景区", address: "广东省江门市恩平市", lng: 112.278, lat: 22.078, description: "江门知名温泉度假村，温泉水质优良，拥有多种特色温泉池，配套完善，养生度假佳选", recommend: 8 },
{ name: "恩平帝都温泉旅游区", type: "4A 级景区", address: "广东省江门市恩平市", lng: 112.327, lat: 22.127, description: "以温泉养生为特色的景区，温泉池依山水而建，融合自然风光与温泉体验，休闲养生佳选", recommend: 8 },
{ name: "恩平锦江温泉旅游度假区", type: "4A 级景区", address: "广东省江门市恩平市", lng: 112.227, lat: 22.027, description: "江门老牌温泉度假区，拥有动感温泉、养生温泉等多种池型，配套游乐设施，适合家庭游玩", recommend: 8 },
{ name: "新会古兜温泉旅游度假区", type: "4A 级景区", address: "广东省江门市新会区", lng: 113.027, lat: 22.178, description: "集山海泉于一体的温泉度假区，有海洋温泉、淡水温泉，配套登山、观海，休闲度假佳选", recommend: 9 },
{ name: "新会梁启超故居纪念馆", type: "4A 级景区", address: "广东省江门市新会区", lng: 113.078, lat: 22.578, description: "纪念梁启超先生的景区，有故居、纪念馆，馆藏大量史料，展现梁启超的生平与思想成就", recommend: 8 },
{ name: "台山康桥温泉旅游度假区", type: "4A 级景区", address: "广东省江门市台山市", lng: 112.478, lat: 22.027, description: "台山知名温泉度假区，温泉池种类繁多，配套水上乐园、住宿，适合家庭休闲、温泉养生", recommend: 8 },
{ name: "江门长廊生态园", type: "4A 级景区", address: "广东省江门市江海区", lng: 113.178, lat: 22.527, description: "江门综合性生态园，有花海观光、亲子游乐、萌宠互动，配套特色餐饮，适合家庭游玩", recommend: 7 },
{ name: "大澳渔村旅游景区", type: "4A 级景区", address: "广东省阳江市阳东区", lng: 112.378, lat: 21.778, description: "岭南古渔村典范，保留完整的渔家风貌，可体验渔家民俗、品尝海鲜，感受滨海渔村文化", recommend: 8 },
{ name: "凌霄岩风景区", type: "4A 级景区", address: "广东省阳江市阳春市", lng: 111.727, lat: 22.027, description: "岭南知名喀斯特溶洞，洞内钟乳石千姿百态，气势恢宏，有 “南国第一洞府” 的美誉", recommend: 9 },
{ name: "春湾风景区", type: "4A 级景区", address: "广东省阳江市阳春市", lng: 111.878, lat: 22.127, description: "阳春知名景区，融合喀斯特山水、溶洞风光，是影视拍摄取景地，自然景色秀美", recommend: 8 },
{ name: "咸水矿温泉景区", type: "4A 级景区", address: "广东省阳江市阳西县", lng: 111.778, lat: 21.627, description: "阳江知名咸水矿温泉景区，温泉水质独特，拥有多种特色温泉池，养生度假、休闲娱乐佳选", recommend: 8 },
{ name: "湖光岩风景区", type: "4A 级景区", address: "广东省湛江市麻章区", lng: 110.378, lat: 21.278, description: "世界地质公园，拥有中国唯一的玛珥湖，湖光山色秀美，地质景观独特，科普与观光兼具", recommend: 10 },
{ name: "三岭山森林公园", type: "4A 级景区", address: "广东省湛江市霞山区", lng: 110.478, lat: 21.227, description: "湛江城市森林公园，森林覆盖率高，空气清新，有湖泊、山林，是市民休闲、徒步的好去处", recommend: 7 },
{ name: "遂溪孔子文化城景区", type: "4A 级景区", address: "广东省湛江市遂溪县", lng: 110.278, lat: 21.327, description: "以儒家文化为核心的景区，有孔庙、儒学馆，建筑气势恢宏，是国学教育、文化观光的佳选", recommend: 8 },
{ name: "茂德公鼓城旅游区", type: "4A 级景区", address: "广东省湛江市雷州市", lng: 110.078, lat: 20.927, description: "以雷州文化为核心的文旅街区，复刻雷州古街风貌，集美食、民俗、购物于一体，雷州风情浓郁", recommend: 8 },
{ name: "湛江金沙湾滨海休闲旅游区", type: "4A 级景区", address: "广东省湛江市赤坎区", lng: 110.378, lat: 21.278, description: "湛江城市滨海地标，沙滩开阔，椰林成荫，配套滨海步道、休闲设施，是市民休闲、观海的佳选", recommend: 9 },
{ name: "湛江鼎龙湾国际海洋度假区", type: "4A 级景区", address: "广东省湛江市吴川市", lng: 110.727, lat: 21.427, description: "湛江大型滨海度假区，拥有绵长沙滩、水上乐园、温泉，融合滨海度假、休闲游乐，适合家庭游玩", recommend: 9 },
{ name: "湛江徐闻港旅游区", type: "4A 级景区", address: "广东省湛江市徐闻县", lng: 110.478, lat: 20.327, description: "琼州海峡重要港口，融合港口观光、滨海休闲，可远眺海南岛，感受渡海文化", recommend: 7 },
{ name: "湛江雷州西湖公园", type: "4A 级景区", address: "广东省湛江市雷州市", lng: 110.027, lat: 20.978, description: "雷州知名古典公园，湖光山色秀美，有苏公亭、寇公祠等人文景观，融合自然与人文风光", recommend: 7 },
{ name: "浪漫海岸景区", type: "4A 级景区", address: "广东省茂名市电白区", lng: 111.078, lat: 21.427, description: "茂名知名滨海景区，以浪漫为主题，沙滩绵长，椰林成荫，是婚纱拍摄、滨海度假的佳选", recommend: 9 },
{ name: "南海旅游岛・中国第一滩景区", type: "4A 级景区", address: "广东省茂名市电白区", lng: 111.027, lat: 21.278, description: "茂名地标性滨海景区，沙滩绵延数公里，海水清澈，配套完善，是滨海休闲、玩水消暑的胜地", recommend: 10 },
{ name: "冼太夫人故里文化旅游景区", type: "4A 级景区", address: "广东省茂名市电白区", lng: 111.178, lat: 21.527, description: "纪念冼太夫人的景区，有冼太庙、纪念馆，展现冼太夫人的历史功绩，岭南巾帼文化代表", recommend: 9 },
{ name: "高州仙人洞旅游景区", type: "4A 级景区", address: "广东省茂名市高州市", lng: 110.827, lat: 22.027, description: "茂名山林景区，山林叠翠，瀑布成群，空气清新，夏季凉爽，是避暑、徒步、溯溪的胜地", recommend: 8 },
{ name: "放鸡岛海上乐园景区", type: "4A 级景区", address: "广东省茂名市电白区", lng: 111.278, lat: 21.227, description: "茂名知名海岛，海水清澈见底，是潜水、海钓、海上游乐的胜地，滨海休闲佳选", recommend: 9 },
{ name: "大唐荔乡文化旅游区", type: "4A 级景区", address: "广东省茂名市高州市", lng: 110.878, lat: 21.827, description: "以荔枝文化为核心的景区，万亩荔枝林连绵，春季赏花、夏季摘果，感受岭南荔乡文化", recommend: 8 },
{name: "广垦国家热带农业公园", type: "4A 级景区", address: "广东省茂名市化州市", lng: 110.678, lat: 21.627, description: "国家级热带农业公园，集热带作物种植、科普教育、休闲观光于一体，可体验热带农业风光与农耕文化", recommend: 7},
{ name: "窦州古城景区", type: "4A 级景区", address: "广东省茂名市信宜市", lng: 110.978, lat: 22.327, description: "岭南千年古城，保留完整的古城墙、古街道，民俗文化浓郁，是历史文化观光的佳选", recommend: 8 },
{ name: "信宜莲花湖庄园景区", type: "4A 级景区", address: "广东省茂名市信宜市", lng: 110.927, lat: 22.278, description: "茂名综合性文旅景区，有湖泊、花海、游乐设施，融合自然观光、休闲游乐，适合家庭游玩", recommend: 7 },
{ name: "茂名电白御水古温泉旅游度假区", type: "4A 级景区", address: "广东省茂名市电白区", lng: 111.078, lat: 21.578, description: "茂名老牌温泉度假区，温泉历史悠久，水质优良，配套完善，养生度假、休闲放松的佳选", recommend: 8 },
{ name: "龙母祖庙景区", type: "4A 级景区", address: "广东省肇庆市德庆县", lng: 111.727, lat: 23.127, description: "岭南龙母文化圣地，建筑气势恢宏，历史悠久，是祈福、感受岭南民俗文化的重要景区", recommend: 9 },
{ name: "猫爪谷景区", type: "4A 级景区", address: "广东省肇庆市高要区", lng: 112.427, lat: 23.178, description: "肇庆网红乡村文旅景区，有花海、湖泊、萌宠互动，融合乡村休闲、亲子游乐，适合家庭游玩", recommend: 8 },
{ name: "德庆学宫景区", type: "4A 级景区", address: "广东省肇庆市德庆县", lng: 111.778, lat: 23.178, description: "岭南现存最完整的孔庙之一，建筑风格独特，集儒家文化与岭南建筑艺术于一体，文化底蕴深厚", recommend: 8 },
{ name: "封开龙山景区", type: "4A 级景区", address: "广东省肇庆市封开县", lng: 111.527, lat: 23.427, description: "肇庆喀斯特山水景区，山林叠翠，溶洞奇特，融合自然观光、溶洞探险，自然风光秀美", recommend: 8 },
{ name: "四会奇石河景区", type: "4A 级景区", address: "广东省肇庆市四会市", lng: 112.827, lat: 23.627, description: "肇庆山水景区，有奇石、瀑布、溪流，山林清幽，空气清新，是徒步、溯溪、休闲观光的佳选", recommend: 8 },
{ name: "封开贺江碧道画廊景区", type: "4A 级景区", address: "广东省肇庆市封开县", lng: 111.478, lat: 23.378, description: "依托贺江打造的生态景区，江景秀美，碧道绵长，可游船、骑行、徒步，感受岭南水乡风光", recommend: 9 },
{ name: "肇庆星湖旅游景区", type: "4A 级景区", address: "广东省肇庆市端州区", lng: 112.478, lat: 23.078, description: "肇庆城市地标，融合七星岩、鼎湖山风光，湖光山色秀美，喀斯特地貌独特，岭南风光代表", recommend: 10 },
{ name: "肇庆鼎湖山景区", type: "4A 级景区", address: "广东省肇庆市鼎湖区", lng: 112.578, lat: 23.178, description: "岭南四大名山之一，国家级自然保护区，森林覆盖率高，空气清新，有 “天然氧吧” 的美誉", recommend: 10 },
{ name: "肇庆七星岩景区", type: "4A 级景区", address: "广东省肇庆市端州区", lng: 112.478, lat: 23.078, description: "岭南喀斯特山水代表，七座山峰形似北斗七星，湖光山色交融，亭台楼阁错落，景色绝美", recommend: 10 },
{ name: "肇庆宋城墙景区", type: "4A 级景区", address: "广东省肇庆市端州区", lng: 112.488, lat: 23.087, description: "岭南现存最完整的宋代城墙，历史悠久，城墙巍峨，登城可俯瞰肇庆城区风光，历史底蕴深厚", recommend: 8 },
{ name: "古龙峡生态旅游区", type: "4A 级景区", address: "广东省清远市清新区", lng: 113.178, lat: 23.727, description: "清远知名生态旅游区，以漂流为特色，峡谷幽深，瀑布成群，还有玻璃桥、滑道，惊险刺激与自然观光兼具", recommend: 10 },
{ name: "森波拉度假森林景区", type: "4A 级景区", address: "广东省清远市佛冈县", lng: 113.527, lat: 23.827, description: "清远大型综合性度假区，有主题乐园、温泉、森林观光，融合休闲游乐、养生度假，适合家庭游玩", recommend: 9 },
{ name: "聚龙湾旅游区", type: "4A 级景区", address: "广东省清远市佛冈县", lng: 113.578, lat: 23.878, description: "清远知名温泉度假区，温泉水质优良，拥有多种特色温泉池，配套游乐设施，休闲养生佳选", recommend: 8 },
{ name: "熹乐谷温泉旅游区", type: "4A 级景区", address: "广东省清远市佛冈县", lng: 113.478, lat: 23.927, description: "清远高端温泉度假区，温泉融合养生与休闲，配套水上乐园、高尔夫，适合高端度假、家庭游玩", recommend: 9 },
{ name: "湟川三峡 - 龙潭文化生态旅游区", type: "4A 级景区", address: "广东省清远市连州市", lng: 112.327, lat: 24.927, description: "清远知名峡谷景区，湟川三峡风光秀美，两岸奇峰怪石，可游船观光，融合自然与瑶族文化", recommend: 9 },
{ name: "连南瑶族自治县万山朝王景区", type: "4A 级景区", address: "广东省清远市连南县", lng: 112.178, lat: 24.727, description: "清远瑶族文化景区，千峰林立，形似群臣朝王，融合瑶族民俗、山水观光，感受瑶族文化魅力", recommend: 8 },
{ name: "清远黄腾峡生态旅游区", type: "4A 级景区", address: "广东省清远市清城区", lng: 113.278, lat: 23.827, description: "清远以漂流和高空项目为特色的景区，漂流惊险刺激，还有玻璃桥、蹦极，适合年轻群体挑战", recommend: 10 },
{ name: "清远牛鱼嘴原始生态风景区", type: "4A 级景区", address: "广东省清远市清城区", lng: 113.327, lat: 23.878, description: "清远原始生态景区，山林茂密，溪流潺潺，有玻璃桥、花海，融合自然观光、休闲游乐，适合徒步", recommend: 8 },
{ name: "清远英德宝晶宫", type: "4A 级景区", address: "广东省清远市英德市", lng: 113.227, lat: 24.127, description: "岭南知名喀斯特溶洞，洞内钟乳石千姿百态，配套玻璃桥、游船，溶洞观光与休闲游乐兼具", recommend: 9 },
{ name: "清远英德洞天仙境", type: "4A 级景区", address: "广东省清远市英德市", lng: 113.078, lat: 24.278, description: "英德喀斯特溶洞景区，有 “华南第一天坑” 之称，洞内风光独特，可游船观光，自然景色绝美", recommend: 9 },
{ name: "清远连州地下河", type: "4A 级景区", address: "广东省清远市连州市", lng: 112.278, lat: 24.778, description: "岭南地下河代表，溶洞与地下河交融，乘船游览如入仙境，喀斯特地貌景观独特", recommend: 10 },
{ name: "清远佛冈森波拉奇妙世界", type: "4A 级景区", address: "广东省清远市佛冈县", lng: 113.527, lat: 23.827, description: "森波拉度假区主题乐园，以远古文化为特色，有游乐设施、演艺表演，适合家庭游玩、亲子互动", recommend: 8 },
{ name: "潮州古城（含广济桥、韩文公祠）", type: "4A 级景区", address: "广东省潮州市湘桥区", lng: 116.678, lat: 23.627, description: "潮州历史文化核心区，保留完整的古城墙、古街道，广济桥、韩文公祠为核心，潮汕文化浓郁", recommend: 10 },
{ name: "绿太阳景区", type: "4A 级景区", address: "广东省潮州市潮安区", lng: 116.527, lat: 23.678, description: "潮州综合性文旅景区，有欧式建筑、花海、湖泊、游乐设施，融合观光、游乐，适合家庭游玩", recommend: 7 },
{ name: "绿岛旅游山庄景区", type: "4A 级景区", address: "广东省潮州市饶平县", lng: 116.927, lat: 23.727, description: "潮州乡村文旅景区，融合山水观光、农家体验、休闲游乐，感受潮汕乡村风光与民俗", recommend: 7 },
{ name: "广济桥文物旅游景区", type: "4A 级景区", address: "广东省潮州市湘桥区", lng: 116.688, lat: 23.628, description: "中国四大古桥之一，集梁桥、浮桥、拱桥于一体，历史悠久，建筑独特，潮州文化地标", recommend: 10 },
{ name: "韩文公祠景区", type: "4A 级景区", address: "广东省潮州市湘桥区", lng: 116.698, lat: 23.637, description: "纪念韩愈的祠宇，依山面江而建，建筑气势恢宏，馆藏大量史料，是潮汕文化的重要象征", recommend: 9 },
{ name: "潮州凤凰天池景区", type: "4A 级景区", address: "广东省潮州市潮安区", lng: 116.578, lat: 23.827, description: "潮州凤凰山脉核心景区，天池风光秀美，周边茶园连绵，是登高、观星、品茶的佳选", recommend: 9 },
{ name: "揭西黄满寨瀑布旅游区", type: "4A 级景区", address: "广东省揭阳市揭西县", lng: 115.878, lat: 23.427, description: "揭阳知名瀑布景区，瀑布群成群，落差大，气势恢宏，山林叠翠，是徒步、观光的胜地", recommend: 9 },
{ name: "揭阳进贤门城楼景区", type: "4A 级景区", address: "广东省揭阳市榕城区", lng: 116.378, lat: 23.527, description: "揭阳古城地标，城楼巍峨，历史悠久，登楼可俯瞰揭阳城区风光，是揭阳历史文化的象征", recommend: 8 },
{ name: "揭阳学宫景区", type: "4A 级景区", address: "广东省揭阳市榕城区", lng: 116.388, lat: 23.537, description: "岭南现存完整的孔庙之一，建筑风格独特，儒家文化底蕴深厚，是国学教育、文化观光的佳选", recommend: 8 },
{ name: "揭阳阳美翡翠博览中心", type: "4A 级景区", address: "广东省揭阳市揭东区", lng: 116.478, lat: 23.578, description: "中国知名翡翠集散地，集翡翠加工、销售、鉴赏于一体，翡翠文化浓郁，可淘玉赏玉", recommend: 7 },
{ name: "揭阳望天湖旅游度假区", type: "4A 级景区", address: "广东省揭阳市揭东区", lng: 116.527, lat: 23.627, description: "揭阳综合性度假区，有湖泊、花海、游乐设施、萌宠互动，融合休闲游乐、亲子体验，适合家庭游玩", recommend: 8 },
{ name: "翔顺金水台温泉小镇景区", type: "4A 级景区", address: "广东省云浮市新兴县", lng: 112.178, lat: 22.527, description: "云浮知名温泉小镇，温泉水质优良，配套酒店、餐饮、游乐，融合温泉养生、休闲度假", recommend: 8 },
{ name: "广东天露山旅游度假区", type: "4A 级景区", address: "广东省云浮市新兴县", lng: 112.078, lat: 22.627, description: "云浮山林度假区，山林叠翠，瀑布成群，有漂流、玻璃桥、花海，融合自然观光、惊险游乐", recommend: 9 },
{ name: "六祖故里旅游度假区", type: "4A 级景区", address: "广东省云浮市新兴县", lng: 112.127, lat: 22.478, description: "禅宗六祖慧能故里，国恩寺为核心，佛教文化底蕴深厚，是祈福、禅修、感受禅宗文化的胜地", recommend: 10 },
{ name: "悦天下生态旅游区", type: "4A 级景区", address: "广东省云浮市新兴县", lng: 112.027, lat: 22.578, description: "云浮生态文旅景区，有湖泊、竹林、温泉，配套网红亲水民宿，融合自然观光、休闲养生", recommend: 8 },

// 广西壮族自治区4A级景区数据模板 - 高德GCJ02坐标系 | 单行展示

{ name: "广西八桂田园", type: "4A级景区", address: "广西南宁市西乡塘区", lng: 108.296, lat: 22.837, description: "现代农业观光示范园，集种植展示、科普教育、休闲采摘于一体，田园风光秀美", recommend: 7 },
{ name: "南宁市动物园", type: "4A级景区", address: "广西南宁市西乡塘区", lng: 108.352, lat: 22.815, description: "综合性动物园，饲养多种珍稀野生动物，配套游乐设施，是亲子游玩与科普教育的好去处", recommend: 8 },
{ name: "伊岭岩景区", type: "4A级景区", address: "广西南宁市武鸣区", lng: 108.313, lat: 22.970, description: "喀斯特溶洞景观，洞内钟乳石千姿百态，融合壮族民俗文化，观光体验丰富", recommend: 8 },
{ name: "良凤江森林旅游区", type: "4A级景区", address: "广西南宁市江南区", lng: 108.300, lat: 22.733, description: "城市森林公园，森林覆盖率高，有菩提大观园、凤凰湖等景观，天然氧吧", recommend: 7 },
{ name: "广西规划馆景区", type: "4A级景区", address: "广西南宁市良庆区", lng: 108.367, lat: 22.613, description: "展示广西城市规划与发展的专业展馆，高科技展示手段，沉浸式了解广西发展脉络", recommend: 6 },
{ name: "马山金伦洞景区", type: "4A级景区", address: "广西南宁市马山县", lng: 108.197, lat: 23.367, description: "喀斯特大型溶洞，洞内景观奇幻，钟乳石形态各异，被誉为“广西第一洞”", recommend: 8 },
{ name: "南宁市人民公园", type: "4A级景区", address: "广西南宁市兴宁区", lng: 108.347, lat: 22.843, description: "南宁老牌城市公园，有镇宁炮台、白龙湖等景点，绿植繁茂，是市民休闲好去处", recommend: 7 },
{ name: "水锦・顺庄", type: "4A级景区", address: "广西南宁市马山县", lng: 108.233, lat: 23.417, description: "山水生态景区，溪流潺潺、瀑布成群，配套玻璃栈道、民宿，休闲观光佳选", recommend: 8 },
{ name: "龙门水都景区", type: "4A级景区", address: "广西南宁市西乡塘区", lng: 108.247, lat: 22.867, description: "集山水观光、温泉养生、休闲游乐于一体的综合性景区，配套完善", recommend: 8 },
{ name: "九龙瀑布景区", type: "4A级景区", address: "广西南宁市横州市", lng: 109.217, lat: 22.617, description: "瀑布群景观，九级瀑布连绵不断，山林叠翠，溪水清澈，自然风光秀美", recommend: 7 },
{ name: "马山弄拉旅游景区", type: "4A级景区", address: "广西南宁市马山县", lng: 108.217, lat: 23.433, description: "喀斯特生态旅游区，森林覆盖率高，有普陀寺、石峰景观，生态环境绝佳", recommend: 7 },
{ name: "南宁园博园景区", type: "4A级景区", address: "广西南宁市邕宁区", lng: 108.447, lat: 22.700, description: "展示各地园林特色的主题公园，融合自然景观与人文建筑，四季风光各异", recommend: 9 },
{ name: "南宁万达茂景区", type: "4A级景区", address: "广西南宁市邕宁区", lng: 108.433, lat: 22.717, description: "大型文旅综合体，有主题乐园、商业街区、文化展馆，适合家庭休闲游乐", recommend: 8 },
{ name: "那贵坡樱花园", type: "4A级景区", address: "广西南宁市江南区", lng: 108.367, lat: 22.683, description: "以樱花观光为特色的景区，春季樱花烂漫，配套休闲设施，网红打卡胜地", recommend: 7 },
{ name: "广西百益上河城旅游景区", type: "4A级景区", address: "广西南宁市江南区", lng: 108.350, lat: 22.800, description: "旧厂房改造的文创园区，集文创、餐饮、休闲、展览于一体，文艺气息浓厚", recommend: 8 },
{ name: "江宇梦想小镇", type: "4A级景区", address: "广西南宁市武鸣区", lng: 108.377, lat: 22.917, description: "欧式风情小镇，建筑典雅，配套花海、湖泊、休闲设施，网红拍照佳选", recommend: 7 },
{ name: "邕宁区蒲津公园", type: "4A级景区", address: "广西南宁市邕宁区", lng: 108.427, lat: 22.743, description: "依托蒲津古渡而建的公园，有蒲津塔、历史展馆，可俯瞰邕江风光", recommend: 6 },
{ name: "融晟天河海悦城", type: "4A级景区", address: "广西南宁市江南区", lng: 108.327, lat: 22.767, description: "大型文旅商业综合体，有海洋馆、主题乐园、商业街区，适合家庭游玩", recommend: 8 },
{ name: "秀美邕江・邕州古韵旅游景区", type: "4A级景区", address: "广西南宁市青秀区", lng: 108.367, lat: 22.817, description: "沿邕江打造的景观带，融合历史文化与滨水休闲，夜景绝美", recommend: 9 },
{ name: "广西壮族自治区博物馆", type: "4A级景区", address: "广西南宁市青秀区", lng: 108.357, lat: 22.823, description: "展示广西历史文化与民族风情的综合性博物馆，馆藏丰富珍贵文物", recommend: 8 },
{ name: "南宁市江南公园", type: "4A级景区", address: "广西南宁市江南区", lng: 108.340, lat: 22.783, description: "城市综合性公园，绿植繁茂，有湖泊、花海、休闲步道，市民休闲好去处", recommend: 6 },
{ name: "南国乡村（广西南宁）", type: "4A级景区", address: "广西南宁市武鸣区", lng: 108.333, lat: 22.950, description: "乡村振兴示范景区，融合田园风光、民俗文化、民宿休闲，体验乡村生活", recommend: 7 },
{ name: "宾阳县名山生态旅游区", type: "4A级景区", address: "广西南宁市宾阳县", lng: 108.817, lat: 23.117, description: "生态观光景区，有名山、溪流、古村落，自然与人文景观交融", recommend: 6 },
{ name: "南宁嘉和城景区", type: "4A级景区", address: "广西南宁市兴宁区", lng: 108.433, lat: 22.883, description: "大型休闲度假区，有高尔夫球场、温泉、主题乐园，高端休闲度假佳选", recommend: 8 },
{ name: "南宁九曲湾温泉景区", type: "4A级景区", address: "广西南宁市兴宁区", lng: 108.450, lat: 22.897, description: "知名温泉景区，温泉水质优良，配套多种特色温泉池，养生休闲好去处", recommend: 8 },
{ name: "广西药用植物园", type: "4A级景区", address: "广西南宁市青秀区", lng: 108.417, lat: 22.850, description: "中国最大的药用植物园，收集大量药用植物，科普与观光兼具", recommend: 7 },
{ name: "广西科技馆", type: "4A级景区", address: "广西南宁市青秀区", lng: 108.360, lat: 22.827, description: "科普教育基地，有多种互动体验展品，适合青少年学习科学知识", recommend: 7 },
{ name: "南宁大明山风景旅游区", type: "4A级景区", address: "广西南宁市武鸣区", lng: 108.483, lat: 23.417, description: "国家级自然保护区，山体巍峨，森林茂密，有瀑布、云海等景观，避暑胜地", recommend: 9 },
{ name: "广西民族博物馆", type: "4A级景区", address: "广西南宁市青秀区", lng: 108.417, lat: 22.783, description: "展示广西各民族文化的专题博物馆，馆藏民族文物、民俗展品，文化底蕴深厚", recommend: 8 },
{ name: "南宁市凤岭儿童公园", type: "4A级景区", address: "广西南宁市青秀区", lng: 108.400, lat: 22.847, description: "儿童主题公园，有多种儿童游乐设施，适合亲子游玩", recommend: 7 },
{ name: "南宁市民歌湖景区", type: "4A级景区", address: "广西南宁市青秀区", lng: 108.367, lat: 22.817, description: "以民歌文化为主题的滨水景区，可乘船游览，欣赏城市夜景与民歌表演", recommend: 8 },
{ name: "隆安县龙虎山旅游景区", type: "4A级景区", address: "广西南宁市隆安县", lng: 107.767, lat: 23.117, description: "自然保护区，有大量猕猴栖息，森林茂密，溪流潺潺，生态观光佳选", recommend: 7 },
{ name: "南宁花花大世界景区", type: "4A级景区", address: "广西南宁市武鸣区", lng: 108.317, lat: 22.933, description: "大型生态观光园，有花海、湖泊、拓展设施，休闲观光与亲子互动兼具", recommend: 7 },
{ name: "南宁上林县大龙湖景区", type: "4A级景区", address: "广西南宁市上林县", lng: 108.683, lat: 23.567, description: "喀斯特湖泊景观，湖光山色秀美，岛屿星罗棋布，游船观光佳选", recommend: 8 },
{ name: "南宁昆仑关旅游风景区", type: "4A级景区", address: "广西南宁市兴宁区", lng: 108.583, lat: 22.983, description: "红色旅游经典景区，纪念昆仑关战役，有纪念碑、纪念馆，历史教育基地", recommend: 9 },
{ name: "广西高峰森林公园", type: "4A级景区", address: "广西南宁市兴宁区", lng: 108.383, lat: 22.917, description: "城市近郊森林公园，森林覆盖率高，有徒步步道、休闲设施，天然氧吧", recommend: 7 },
{ name: "柳州龙潭景区", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.400, lat: 24.300, description: "融合喀斯特山水与民族文化的景区，有龙潭、雷潭、鼓楼等景观，风光秀美", recommend: 9 },
{ name: "柳侯公园", type: "4A级景区", address: "广西柳州市城中区", lng: 109.407, lat: 24.317, description: "纪念柳宗元的古典公园，有柳侯祠、罗池、柑香亭，文化底蕴深厚", recommend: 8 },
{ name: "柳州市立鱼峰风景区", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.413, lat: 24.310, description: "柳州城市地标，山峰形似立鱼，有刘三姐文化景观，山歌文化发源地", recommend: 8 },
{ name: "柳州博物馆", type: "4A级景区", address: "广西柳州市城中区", lng: 109.403, lat: 24.327, description: "展示柳州历史文化与民族风情的综合性博物馆，馆藏大量珍贵文物", recommend: 7 },
{ name: "广西鹿寨香桥岩风景区", type: "4A级景区", address: "广西柳州市鹿寨县", lng: 109.733, lat: 24.417, description: "喀斯特地貌景区，有天生桥、溶洞、峡谷，自然景观独特", recommend: 7 },
{ name: "柳州市三江县丹洲景区", type: "4A级景区", address: "广西柳州市三江侗族自治县", lng: 109.683, lat: 25.017, description: "江心古村落，保留完整的明清建筑，侗族民俗文化浓郁，休闲观光佳选", recommend: 8 },
{ name: "柳州文庙景区", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.417, lat: 24.307, description: "仿古建筑群，气势恢宏，展现儒家文化，是祈福与文化观光的胜地", recommend: 7 },
{ name: "柳州城市规划展览馆", type: "4A级景区", address: "广西柳州市城中区", lng: 109.427, lat: 24.333, description: "展示柳州城市规划与发展的专业展馆，高科技展示手段，了解城市变迁", recommend: 6 },
{ name: "柳州市马鹿山奇石博览园景区", type: "4A级景区", address: "广西柳州市城中区", lng: 109.443, lat: 24.347, description: "以奇石为主题的景区，馆藏大量珍贵奇石，奇石文化浓郁", recommend: 7 },
{ name: "柳州市三江县大侗寨景区", type: "4A级景区", address: "广西柳州市三江侗族自治县", lng: 109.517, lat: 25.033, description: "侗族聚居区，有鼓楼、风雨桥、吊脚楼，侗族民俗文化浓郁，体验独特", recommend: 9 },
{ name: "柳州市工业博物馆景区", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.417, lat: 24.293, description: "展示柳州工业发展历程的专题博物馆，工业文化底蕴深厚", recommend: 7 },
{ name: "柳州市百里柳江旅游景区", type: "4A级景区", address: "广西柳州市城中区", lng: 109.407, lat: 24.317, description: "沿柳江打造的景观带，融合自然风光与城市夜景，可乘船游览", recommend: 9 },
{ name: "柳州市园博园景区", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.477, lat: 24.267, description: "展示各地园林特色的主题公园，自然景观与人文建筑交融", recommend: 8 },
{ name: "柳州市融安石门仙湖旅游景区", type: "4A级景区", address: "广西柳州市融安县", lng: 109.333, lat: 25.217, description: "喀斯特山水景区，有石门、仙湖、溶洞，自然风光秀美", recommend: 8 },
{ name: "柳州柳城县知青城景区", type: "4A级景区", address: "广西柳州市柳城县", lng: 109.200, lat: 24.617, description: "以知青文化为主题的景区，保留知青生活遗迹，怀旧与休闲兼具", recommend: 6 },
{ name: "柳州市都乐岩景区", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.467, lat: 24.250, description: "喀斯特溶洞景区，洞内钟乳石千姿百态，自然景观独特", recommend: 7 },
{ name: "融水・元宝山龙女沟景区", type: "4A级景区", address: "广西柳州市融水苗族自治县", lng: 109.133, lat: 25.367, description: "苗族风情与山水风光交融的景区，有溪流、瀑布、吊脚楼，民俗体验丰富", recommend: 8 },
{ name: "柳江县凤凰河生态旅游度假区", type: "4A级景区", address: "广西柳州市柳江区", lng: 109.300, lat: 24.183, description: "生态度假区，有温泉、湖泊、山林，休闲养生与自然观光兼具", recommend: 8 },
{ name: "柳州市动物园", type: "4A级景区", address: "广西柳州市柳南区", lng: 109.367, lat: 24.267, description: "综合性动物园，饲养多种珍稀野生动物，适合亲子游玩", recommend: 7 },
{ name: "柳州市融水县老君洞景区", type: "4A级景区", address: "广西柳州市融水苗族自治县", lng: 109.250, lat: 25.117, description: "道教文化景区，有溶洞、道观，自然与人文景观交融", recommend: 7 },
{ name: "柳州市雀儿山公园景区", type: "4A级景区", address: "广西柳州市柳北区", lng: 109.383, lat: 24.347, description: "城市综合性公园，有雀儿山、湖泊、休闲设施，市民休闲好去处", recommend: 6 },
{ name: "三江县仙人山景区", type: "4A级景区", address: "广西柳州市三江侗族自治县", lng: 109.433, lat: 25.167, description: "侗族聚居区的山地景区，有茶园、鼓楼，自然风光与民俗文化兼具", recommend: 7 },
{ name: "融水双龙沟原始森林度假区", type: "4A级景区", address: "广西柳州市融水苗族自治县", lng: 109.200, lat: 25.283, description: "原始森林景区，有玻璃栈道、漂流、萌宠互动，休闲游乐与自然观光兼具", recommend: 9 },
{ name: "柳州螺蛳粉产业园旅游景区", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.483, lat: 24.233, description: "以螺蛳粉文化为主题的工业旅游景区，可参观生产流程，体验螺蛳粉文化", recommend: 8 },
{ name: "祥荷乡韵景区", type: "4A级景区", address: "广西柳州市柳江区", lng: 109.267, lat: 24.133, description: "荷花主题景区，夏季荷花盛开，田园风光秀美，休闲观光佳选", recommend: 7 },
{ name: "卡乐星球欢乐世界旅游景区", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.477, lat: 24.250, description: "大型主题乐园，有多种惊险刺激的游乐设施，适合年轻群体游玩", recommend: 9 },
{ name: "鹿寨县中渡古镇", type: "4A级景区", address: "广西柳州市鹿寨县", lng: 109.700, lat: 24.450, description: "千年古镇，保留完整的明清建筑，民俗文化浓郁，历史底蕴深厚", recommend: 8 },
{ name: "上汽通用五菱宝骏基地", type: "4A级景区", address: "广西柳州市柳江区", lng: 109.317, lat: 24.167, description: "工业旅游景区，可参观汽车生产流程，了解汽车工业文化", recommend: 6 },
{ name: "螺蛳粉小镇", type: "4A级景区", address: "广西柳州市柳江区", lng: 109.283, lat: 24.150, description: "以螺蛳粉文化为主题的特色小镇，融合工业旅游、民俗体验、休闲游乐", recommend: 8 },
{ name: "梦呜苗寨民俗文化体验园", type: "4A级景区", address: "广西柳州市融水苗族自治县", lng: 109.217, lat: 25.267, description: "苗族民俗体验景区，可体验苗族歌舞、服饰、美食，沉浸式感受苗族文化", recommend: 8 },
{ name: "仙草堂生态灵芝透明工厂", type: "4A级景区", address: "广西柳州市融安县", lng: 109.367, lat: 25.183, description: "工业旅游景区，透明化展示灵芝培育与加工流程，科普与观光兼具", recommend: 6 },
{ name: "克里湾水乐园", type: "4A级景区", address: "广西柳州市鱼峰区", lng: 109.477, lat: 24.250, description: "大型水上乐园，有多种水上游乐设施，夏季玩水消暑的胜地", recommend: 8 },
{ name: "三江侗天宫文化景区", type: "4A级景区", address: "广西柳州市三江侗族自治县", lng: 109.533, lat: 25.033, description: "侗族文化主题景区，有侗天宫、民俗展馆，展现侗族传统文化", recommend: 7 },
{ name: "融水风情苗乡景区", type: "4A级景区", address: "广西柳州市融水苗族自治县", lng: 109.233, lat: 25.250, description: "苗族风情旅游区，融合苗族村寨、山水风光、民俗体验，特色鲜明", recommend: 8 },
{ name: "桂林乐满地休闲世界", type: "4A级景区", address: "广西桂林市兴安县", lng: 110.650, lat: 25.600, description: "大型主题乐园，有游乐设施、温泉、度假酒店，综合性休闲度假胜地", recommend: 9 },
{ name: "芦笛景区", type: "4A级景区", address: "广西桂林市秀峰区", lng: 110.277, lat: 25.283, description: "以喀斯特溶洞为核心的景区，芦笛岩洞内景观奇幻，被誉为“大自然的艺术之宫”", recommend: 9 },
{ name: "七星景区", type: "4A级景区", address: "广西桂林市七星区", lng: 110.317, lat: 25.273, description: "桂林经典景区，有七星岩、骆驼山等景观，自然与人文景观交融", recommend: 9 },
{ name: "桂林冠岩景区", type: "4A级景区", address: "广西桂林市雁山区", lng: 110.433, lat: 25.173, description: "喀斯特溶洞与地下河景区，可乘船、坐火车游览，体验独特", recommend: 8 },
{ name: "桂林愚自乐园艺术园", type: "4A级景区", address: "广西桂林市雁山区", lng: 110.467, lat: 25.133, description: "融合艺术与自然的景区，有雕塑作品、山水景观，艺术气息浓厚", recommend: 7 },
{ name: "桂林银子岩旅游度假区", type: "4A级景区", address: "广西桂林市荔浦市", lng: 110.417, lat: 24.767, description: "喀斯特溶洞景区，洞内钟乳石洁白如银，景观奇幻，有“游了银子岩，一世不缺钱”的美誉", recommend: 9 },
{ name: "桂林古东瀑布景区", type: "4A级景区", address: "广西桂林市灵川县", lng: 110.433, lat: 25.333, description: "可攀爬的瀑布群景区，溪水清澈，山林叠翠，休闲探险佳选", recommend: 8 },
{ name: "兴安灵渠景区", type: "4A级景区", address: "广西桂林市兴安县", lng: 110.683, lat: 25.633, description: "世界古代水利工程奇迹，沟通湘江与漓江，历史底蕴深厚，文化价值极高", recommend: 10 },
{ name: "桂林丰鱼岩旅游度假区", type: "4A级景区", address: "广西桂林市荔浦市", lng: 110.283, lat: 24.683, description: "大型喀斯特溶洞景区，洞内景观丰富，配套温泉、酒店，休闲度假佳选", recommend: 8 },
{ name: "桂林尧山景区", type: "4A级景区", address: "广西桂林市七星区", lng: 110.350, lat: 25.317, description: "桂林最高峰，山体巍峨，森林茂密，登顶可俯瞰桂林全城风光", recommend: 8 },
{ name: "荔浦荔江湾景区", type: "4A级景区", address: "广西桂林市荔浦市", lng: 110.367, lat: 24.783, description: "喀斯特山水景区，有荔江湾、溶洞、瀑布，自然风光秀美", recommend: 7 },
{ name: "桂林市南溪山景区", type: "4A级景区", address: "广西桂林市象山区", lng: 110.300, lat: 25.250, description: "桂林老牌景区，有南溪岩、瀑布，山林叠翠，是休闲观光的好去处", recommend: 7 },
{ name: "龙脊梯田", type: "4A级景区", address: "广西桂林市龙胜各族自治县", lng: 110.017, lat: 25.767, description: "世界知名梯田景观，梯田层叠，四季风光各异，春季灌水、秋季稻黄，景色绝美", recommend: 10 },
{ name: "桂林丹霞・八角寨景区", type: "4A级景区", address: "广西桂林市资源县", lng: 110.683, lat: 26.133, description: "丹霞地貌景区，八角寨山峰奇特，云海、日出景观绝美，有“丹霞之魂”的美誉", recommend: 9 },
{ name: "桂林资江・天门山景区", type: "4A级景区", address: "广西桂林市资源县", lng: 110.733, lat: 26.083, description: "资江沿岸山水景区，有天门山、溶洞、峡谷，自然风光秀美，可乘船游览", recommend: 8 },
{ name: "恭城红岩村景区", type: "4A级景区", address: "广西桂林市恭城瑶族自治县", lng: 110.917, lat: 25.083, description: "瑶族特色村寨，保留完整的瑶族民俗，秋季柿子挂满枝头，田园风光秀美", recommend: 8 },
{ name: "恭城三庙两馆景区", type: "4A级景区", address: "广西桂林市恭城瑶族自治县", lng: 110.883, lat: 25.067, description: "融合文庙、武庙、周渭祠等古建筑的景区，儒家文化与瑶族文化交融", recommend: 8 },
{ name: "桂林新区环城水系景区", type: "4A级景区", address: "广西桂林市临桂区", lng: 110.217, lat: 25.217, description: "沿新区打造的滨水景观带，湖光山色秀美，配套休闲步道，市民休闲好去处", recommend: 7 },
{ name: "红军长征湘江战役纪念园", type: "4A级景区", address: "广西桂林市全州县", lng: 111.017, lat: 25.917, description: "红色旅游经典景区，纪念红军长征湘江战役，有纪念碑、纪念馆，红色教育基地", recommend: 10 },
{ name: "灵川县大圩古镇景区", type: "4A级景区", address: "广西桂林市灵川县", lng: 110.483, lat: 25.283, description: "千年古镇，保留完整的明清建筑，漓江沿岸风光秀美，民俗文化浓郁", recommend: 8 },
{ name: "桂林猫儿山景区", type: "4A级景区", address: "广西桂林市兴安县", lng: 110.833, lat: 25.867, description: "华南第一高峰，国家级自然保护区，森林茂密，有云海、日出、瀑布，生态环境绝佳", recommend: 9 },

// 湖北省4A级景区数据模板 - 高德GCJ02坐标系 | 单行展示
// 2025年12月新增21家
{ name: "武汉市盘龙城国家考古遗址公园", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.227, lat: 30.703, description: "全国重点文物保护单位，展现商代盘龙城文化，考古遗址与人文景观兼具", recommend: 8 },
{ name: "武汉市汉阳区知音文化旅游区", type: "4A级景区", address: "湖北省武汉市汉阳区", lng: 114.233, lat: 30.567, description: "以知音文化为核心，含古琴台等景点，文化底蕴深厚，休闲观光佳选", recommend: 7 },
{ name: "武汉体育中心文化体育公园", type: "4A级景区", address: "湖北省武汉市蔡甸区", lng: 114.167, lat: 30.503, description: "集体育赛事、文化演艺、休闲健身于一体的综合性公园，设施完善", recommend: 7 },
{ name: "武汉市青山区武钢文化旅游区", type: "4A级景区", address: "湖北省武汉市青山区", lng: 114.383, lat: 30.657, description: "工业旅游景区，展现钢铁工业文化，科普与观光兼具", recommend: 6 },
{ name: "襄阳市鹿门山旅游区", type: "4A级景区", address: "湖北省襄阳市襄州区", lng: 112.277, lat: 31.903, description: "历史文化名山，孟浩然隐居地，山林秀美，人文景观丰富", recommend: 8 },
{ name: "襄阳市谷城大薤山景区", type: "4A级景区", address: "湖北省襄阳市谷城县", lng: 111.533, lat: 32.133, description: "避暑名山，森林覆盖率高，云海、溪流景观绝美，休闲度假佳选", recommend: 7 },
{ name: "宜昌市夷陵区南津关大峡谷", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.183, lat: 30.723, description: "长江三峡起点峡谷，悬崖峭壁、瀑布成群，自然风光雄奇", recommend: 9 },
{ name: "黄石市华侨城恐龙奇域景区", type: "4A级景区", address: "湖北省黄石市下陆区", lng: 115.057, lat: 30.233, description: "恐龙主题景区，有恐龙化石展示、互动游乐，亲子游玩胜地", recommend: 8 },
{ name: "黄石市阳新县滴水涯旅游区", type: "4A级景区", address: "湖北省黄石市阳新县", lng: 115.283, lat: 29.873, description: "瀑布景观核心景区，落差大、水量充沛，山林叠翠，生态绝佳", recommend: 7 },
{ name: "黄石市大冶市上冯古村生态旅游区", type: "4A级景区", address: "湖北省黄石市大冶市", lng: 114.983, lat: 30.133, description: "古村落生态景区，保留明清建筑，田园风光与民俗文化交融", recommend: 7 },
{ name: "十堰市郧西天河口旅游区", type: "4A级景区", address: "湖北省十堰市郧西县", lng: 110.433, lat: 33.033, description: "天河沿岸景区，融合七夕文化与山水风光，休闲观光佳选", recommend: 7 },
{ name: "十堰市竹山绿松石文化旅游区", type: "4A级景区", address: "湖北省十堰市竹山县", lng: 110.183, lat: 32.283, description: "以绿松石文化为核心，可参观开采加工，感受特色矿产文化", recommend: 6 },
{ name: "十堰市沧浪山国家森林公园旅游区", type: "4A级景区", address: "湖北省十堰市郧阳区", lng: 110.833, lat: 32.733, description: "国家级森林公园，森林茂密，溪流潺潺，生态观光与徒步胜地", recommend: 7 },
{ name: "荆州市石首桃源小镇景区", type: "4A级景区", address: "湖北省荆州市石首市", lng: 112.483, lat: 29.733, description: "田园风情小镇，有花海、民宿、休闲设施，网红打卡胜地", recommend: 8 },
{ name: "荆门园博园", type: "4A级景区", address: "湖北省荆门市漳河新区", lng: 112.203, lat: 31.033, description: "展示各地园林特色的主题公园，自然景观与人文建筑交融", recommend: 7 },
{ name: "孝感市云梦祥云湾文化旅游区", type: "4A级景区", address: "湖北省孝感市云梦县", lng: 113.733, lat: 31.033, description: "文化旅游综合体，融合民俗文化、休闲游乐，适合家庭游玩", recommend: 7 },
{ name: "黄冈市长征国家文化公园英山园区", type: "4A级景区", address: "湖北省黄冈市英山县", lng: 115.633, lat: 30.733, description: "红色旅游景区，展现长征文化，有纪念馆、遗址，红色教育基地", recommend: 8 },
{ name: "黄冈市武穴市通天河景区", type: "4A级景区", address: "湖北省黄冈市武穴市", lng: 115.533, lat: 29.873, description: "山水生态景区，有通天河、瀑布、溶洞，自然风光秀美", recommend: 7 },
{ name: "随州市新四军第五师纪念地景区", type: "4A级景区", address: "湖北省随州市曾都区", lng: 113.383, lat: 31.783, description: "红色旅游经典景区，纪念新四军第五师，有纪念馆、旧址", recommend: 8 },
{ name: "恩施大清江景区", type: "4A级景区", address: "湖北省恩施州恩施市", lng: 109.483, lat: 30.233, description: "清江沿岸核心景区，江水清澈，两岸喀斯特地貌奇特，游船观光佳选", recommend: 9 },
{ name: "恩施州宣恩县狮子关旅游区", type: "4A级景区", address: "湖北省恩施州宣恩县", lng: 109.433, lat: 29.933, description: "网红打卡景区，有悬浮桥、峡谷溪流，自然风光与游乐体验兼具", recommend: 10 },

// 2024年12月新增24家
{ name: "宜昌市三峡古兵寨旅游区", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.333, lat: 30.833, description: "三峡地区古军事遗址，兵寨遗迹保存完好，历史与山水交融", recommend: 8 },
{ name: "恩施州宣恩县矅天眼景区", type: "4A级景区", address: "湖北省恩施州宣恩县", lng: 109.383, lat: 29.883, description: "天然天坑景观，形似天眼，周边山林环绕，生态绝佳", recommend: 9 },
{ name: "神农架大九湖景区", type: "4A级景区", address: "湖北省神农架林区", lng: 110.133, lat: 31.633, description: "高山湿地景观，湖泊星罗棋布，草原、森林交织，风光绝美", recommend: 10 },
{ name: "襄阳市谷城狮子岩生态旅游区", type: "4A级景区", address: "湖北省襄阳市谷城县", lng: 111.633, lat: 32.083, description: "生态旅游区，有狮子岩、溪流、森林，休闲徒步佳选", recommend: 7 },
{ name: "黄冈市英山县毕昇纪念园", type: "4A级景区", address: "湖北省黄冈市英山县", lng: 115.683, lat: 30.783, description: "纪念活字印刷术发明者毕昇，文化底蕴深厚，科普与观光兼具", recommend: 8 },
{ name: "孝感市大悟县白果树湾新四军第五师司令部旧址景区", type: "4A级景区", address: "湖北省孝感市大悟县", lng: 114.133, lat: 31.533, description: "红色旅游景区，新四军第五师司令部旧址，红色教育基地", recommend: 8 },
{ name: "宜昌市宜都市三峡橘醋文化旅游区", type: "4A级景区", address: "湖北省宜昌市宜都市", lng: 111.483, lat: 30.433, description: "以橘醋文化为核心的工业旅游景区，可参观生产流程，体验特色文化", recommend: 6 },
{ name: "黄石市大冶铜绿山国家考古遗址公园", type: "4A级景区", address: "湖北省黄石市大冶市", lng: 115.033, lat: 30.083, description: "古铜矿遗址，展现古代采矿冶炼技术，历史价值极高", recommend: 8 },
{ name: "随州市随县神农部落景区", type: "4A级景区", address: "湖北省随州市随县", lng: 113.233, lat: 31.433, description: "以神农文化为主题，有部落村寨、民俗体验，文化特色鲜明", recommend: 7 },
{ name: "恩施州来凤县卯洞景区", type: "4A级景区", address: "湖北省恩施州来凤县", lng: 109.333, lat: 29.483, description: "天然溶洞景观，洞口形似卯时，洞内钟乳石奇特", recommend: 8 },
{ name: "十堰市茅箭区东沟景区", type: "4A级景区", address: "湖北省十堰市茅箭区", lng: 110.883, lat: 32.633, description: "红色旅游与生态旅游结合，有革命旧址、山林溪流", recommend: 7 },
{ name: "孝感市安陆钱冲古银杏生态旅游区", type: "4A级景区", address: "湖北省孝感市安陆市", lng: 113.833, lat: 31.233, description: "古银杏群落景区，秋季金黄一片，生态与观光兼具", recommend: 9 },
{ name: "襄阳市黄家湾风景区", type: "4A级景区", address: "湖北省襄阳市襄城区", lng: 112.083, lat: 31.733, description: "三国文化景区，诸葛亮夫人黄月英故里，山水风光秀美", recommend: 7 },
{ name: "黄冈市蕲春李时珍文化旅游区", type: "4A级景区", address: "湖北省黄冈市蕲春县", lng: 115.433, lat: 30.233, description: "纪念医药学家李时珍，有故居、纪念馆，医药文化浓郁", recommend: 9 },
{ name: "黄石市大冶市沼山古村桃乡景区", type: "4A级景区", address: "湖北省黄石市大冶市", lng: 114.883, lat: 30.033, description: "桃花观光与古村结合，春季桃花烂漫，田园风情浓郁", recommend: 7 },
{ name: "十堰市张湾区百龙潭景区", type: "4A级景区", address: "湖北省十堰市张湾区", lng: 110.733, lat: 32.683, description: "瀑布群景区，多级瀑布连绵，山林清幽，休闲观光佳选", recommend: 7 },
{ name: "武汉野生动物王国景区", type: "4A级景区", address: "湖北省武汉市蔡甸区", lng: 114.083, lat: 30.433, description: "大型野生动物园区，饲养多种珍稀动物，亲子游玩胜地", recommend: 8 },
{ name: "宜昌市秭归县三峡橙谷・环吒溪河景区", type: "4A级景区", address: "湖北省宜昌市秭归县", lng: 110.933, lat: 30.933, description: "柑橘种植与山水风光结合，秋季硕果累累，田园风情浓郁", recommend: 7 },
{ name: "荆州市洪湖湿地生态旅游区", type: "4A级景区", address: "湖北省荆州市洪湖市", lng: 113.433, lat: 29.733, description: "大型湿地生态景区，芦苇丛生，鸟类繁多，生态观光佳选", recommend: 9 },
{ name: "襄阳市保康县六柱垭生态文化旅游区", type: "4A级景区", address: "湖北省襄阳市保康县", lng: 111.133, lat: 31.733, description: "生态文化景区，有山林、溪流、民俗村落，休闲度假佳选", recommend: 7 },
{ name: "鄂州市梁子湖区凤栖绿洲生态文明博览园", type: "4A级景区", address: "湖北省鄂州市梁子湖区", lng: 114.733, lat: 30.233, description: "生态文明展示园区，融合生态观光、科普教育", recommend: 6 },
{ name: "黄冈市红安县锦绣铜锣景区", type: "4A级景区", address: "湖北省黄冈市红安县", lng: 114.633, lat: 31.233, description: "红色旅游与民俗文化结合，展现红安革命文化与民俗风情", recommend: 8 },
{ name: "武汉市江夏区梁子湖蓝波湾景区", type: "4A级景区", address: "湖北省武汉市江夏区", lng: 114.483, lat: 30.283, description: "梁子湖沿岸景区，湖光山色秀美，休闲度假、水上娱乐兼具", recommend: 8 },
{ name: "咸宁市通城县药姑山・古瑶村景区", type: "4A级景区", address: "湖北省咸宁市通城县", lng: 113.833, lat: 29.233, description: "古瑶族村落，保留瑶族民俗，山林环绕，生态绝佳", recommend: 8 },

// 2023年12月新增17家
{ name: "潜江市龙湾国家考古遗址公园", type: "4A级景区", address: "湖北省潜江市龙湾镇", lng: 112.833, lat: 30.233, description: "东周时期古遗址，楚文化遗迹丰富，历史价值极高", recommend: 8 },
{ name: "恩施州恩施鹿院坪景区", type: "4A级景区", address: "湖北省恩施州恩施市", lng: 109.083, lat: 30.283, description: "原始村落生态景区，峡谷幽深，瀑布成群，生态绝佳", recommend: 9 },
{ name: "荆门市圣境山生态旅游区", type: "4A级景区", address: "湖北省荆门市东宝区", lng: 112.133, lat: 31.133, description: "生态旅游区，有圣境山、森林、溪流，休闲徒步佳选", recommend: 7 },
{ name: "武汉市东西湖区武汉园博园", type: "4A级景区", address: "湖北省武汉市东西湖区", lng: 114.133, lat: 30.633, description: "集园林展示、休闲娱乐于一体，各地园林特色齐聚", recommend: 8 },
{ name: "荆门市屈家岭国家考古遗址公园", type: "4A级景区", address: "湖北省荆门市屈家岭管理区", lng: 112.833, lat: 31.133, description: "新石器时代遗址，展现屈家岭文化，考古与观光兼具", recommend: 8 },
{ name: "恩施州宣恩彭家寨旅游景区", type: "4A级景区", address: "湖北省恩施州宣恩县", lng: 109.233, lat: 29.933, description: "土家族古村落，吊脚楼保存完好，民俗文化浓郁", recommend: 9 },
{ name: "襄阳华侨城奇幻乐园景区", type: "4A级景区", address: "湖北省襄阳市东津新区", lng: 112.283, lat: 31.783, description: "大型主题乐园，有多种奇幻游乐设施，适合年轻群体与亲子游玩", recommend: 9 },
{ name: "武汉市黄陂区野村谷景区", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.333, lat: 30.833, description: "乡村生态景区，有田园风光、民宿、休闲设施，体验乡村生活", recommend: 7 },
{ name: "孝感市安陆盛世闻樱景区", type: "4A级景区", address: "湖北省孝感市安陆市", lng: 113.783, lat: 31.183, description: "樱花观光景区，春季樱花烂漫，网红打卡胜地", recommend: 8 },
{ name: "仙桃市沔阳小镇景区", type: "4A级景区", address: "湖北省仙桃市排湖风景区", lng: 113.333, lat: 30.333, description: "以沔阳文化为主题的特色小镇，民俗文化与休闲游乐兼具", recommend: 8 },
{ name: "随州市随县抱朴谷康养旅游区", type: "4A级景区", address: "湖北省随州市随县", lng: 113.433, lat: 31.633, description: "康养旅游区，山林清幽，配套康养设施，休闲养生佳选", recommend: 7 },
{ name: "咸宁市通山县龙隐山旅游度假区", type: "4A级景区", address: "湖北省咸宁市通山县", lng: 114.533, lat: 29.533, description: "山地旅游度假区，有玻璃栈道、花海、游乐设施，休闲观光兼具", recommend: 8 },
{ name: "十堰市竹溪县夯土小镇", type: "4A级景区", address: "湖北省十堰市竹溪县", lng: 109.633, lat: 32.033, description: "以夯土建筑为特色的小镇，民俗文化浓郁，田园风光秀美", recommend: 7 },
{ name: "孝感市大别山（大悟）红叶景区", type: "4A级景区", address: "湖北省孝感市大悟县", lng: 114.233, lat: 31.633, description: "秋季红叶观光景区，漫山红叶，景色绝美", recommend: 9 },
{ name: "宜昌市仙女吉吉主题公园", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.233, lat: 30.783, description: "儿童主题公园，有多种亲子游乐设施，适合低龄儿童游玩", recommend: 7 },
{ name: "荆州市松滋市卸甲坪旅游区", type: "4A级景区", address: "湖北省荆州市松滋市", lng: 111.533, lat: 29.533, description: "土家族聚居区，民俗文化与山水风光结合，特色鲜明", recommend: 7 },
{ name: "恩施州巴东野三关森林花海景区", type: "4A级景区", address: "湖北省恩施州巴东县", lng: 110.133, lat: 30.633, description: "高山森林花海，夏季鲜花盛开，空气清新，避暑佳选", recommend: 8 },

// 武汉市存量4A
{ name: "辛亥革命武昌起义纪念馆", type: "4A级景区", address: "湖北省武汉市武昌区", lng: 114.317, lat: 30.593, description: "纪念辛亥革命武昌起义，历史底蕴深厚，红色教育基地", recommend: 9 },
{ name: "归元禅寺", type: "4A级景区", address: "湖北省武汉市汉阳区", lng: 114.250, lat: 30.557, description: "武汉知名佛教寺院，建筑古朴，香火旺盛，祈福观光佳选", recommend: 9 },
{ name: "武汉科技馆", type: "4A级景区", address: "湖北省武汉市江岸区", lng: 114.327, lat: 30.623, description: "科普教育基地，互动展品丰富，适合青少年学习科学知识", recommend: 8 },
{ name: "黄鹤楼公园", type: "4A级景区", address: "湖北省武汉市武昌区", lng: 114.307, lat: 30.593, description: "武汉城市地标，江南三大名楼之一，登高可俯瞰长江风光", recommend: 10 },
{ name: "武汉植物园", type: "4A级景区", address: "湖北省武汉市洪山区", lng: 114.357, lat: 30.543, description: "国家级植物园，收集大量植物品种，科普与观光兼具", recommend: 8 },
{ name: "武汉欢乐谷", type: "4A级景区", address: "湖北省武汉市洪山区", lng: 114.417, lat: 30.573, description: "大型主题乐园，有多种惊险游乐设施，年轻群体游玩胜地", recommend: 9 },
{ name: "木兰草原", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.383, lat: 30.883, description: "华中地区最大草原景区，草原风光与民俗表演兼具", recommend: 9 },
{ name: "木兰天池", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.433, lat: 30.933, description: "山水生态景区，有天池、瀑布、溪流，休闲观光佳选", recommend: 8 },
{ name: "木兰云雾山", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.533, lat: 31.033, description: "以杜鹃花海为特色，春季杜鹃盛开，山林云雾缭绕", recommend: 9 },
{ name: "锦里沟", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.583, lat: 31.083, description: "土家族风情景区，有吊脚楼、民俗表演，文化特色鲜明", recommend: 8 },
{ name: "清凉寨", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.533, lat: 31.133, description: "避暑休闲景区，夏季凉爽，有瀑布、溪流，生态绝佳", recommend: 8 },
{ name: "农耕年华农业风情园", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.333, lat: 30.783, description: "农业观光园区，体验农耕生活，亲子互动佳选", recommend: 7 },
{ name: "中国地质大学（武汉）逸夫博物馆", type: "4A级景区", address: "湖北省武汉市洪山区", lng: 114.407, lat: 30.523, description: "地质科普博物馆，馆藏大量地质标本，科普价值高", recommend: 7 },
{ name: "武汉市科技馆（新馆）", type: "4A级景区", address: "湖北省武汉市江岸区", lng: 114.337, lat: 30.627, description: "现代化科普场馆，高科技展示手段，沉浸式科普体验", recommend: 8 },
{ name: "横渡长江博物馆", type: "4A级景区", address: "湖北省武汉市江岸区", lng: 114.327, lat: 30.617, description: "纪念横渡长江活动，展现武汉水文化，历史与科普兼具", recommend: 7 },
{ name: "张之洞与武汉博物馆", type: "4A级景区", address: "湖北省武汉市汉阳区", lng: 114.247, lat: 30.567, description: "纪念张之洞，展现武汉近代工业发展，文化底蕴深厚", recommend: 8 },
{ name: "黄陂姚家山景区", type: "4A级景区", address: "湖北省武汉市黄陂区", lng: 114.483, lat: 31.183, description: "红色旅游与生态旅游结合，有革命旧址、山林溪流", recommend: 7 },
{ name: "蔡甸区金龙水寨景区", type: "4A级景区", address: "湖北省武汉市蔡甸区", lng: 114.083, lat: 30.483, description: "水乡生态景区，有湖泊、荷花、休闲设施，休闲观光佳选", recommend: 7 },

// 宜昌市存量4A
{ name: "车溪民俗旅游区", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.183, lat: 30.683, description: "土家族民俗景区，展现传统民俗文化，田园风光秀美", recommend: 8 },
{ name: "三游洞风景区", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.133, lat: 30.783, description: "历史文化景区，白居易等文人墨客游览地，溶洞与人文交融", recommend: 9 },
{ name: "百里荒高山草原旅游区", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.383, lat: 30.983, description: "高山草原景区，夏季凉爽，草原风光与休闲游乐兼具", recommend: 9 },
{ name: "柴埠溪大峡谷风景区", type: "4A级景区", address: "湖北省宜昌市五峰土家族自治县", lng: 110.833, lat: 30.233, description: "喀斯特峡谷景区，悬崖峭壁、溪流瀑布，自然风光雄奇", recommend: 9 },
{ name: "三峡大瀑布景区", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.433, lat: 30.883, description: "三峡地区最大瀑布，水量充沛，气势恢宏", recommend: 10 },
{ name: "石牌要塞旅游区", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.133, lat: 30.833, description: "长江三峡军事要塞，历史遗迹保存完好，登高观江佳选", recommend: 8 },
{ name: "昭君村古汉文化游览区", type: "4A级景区", address: "湖北省宜昌市兴山县", lng: 110.733, lat: 31.033, description: "王昭君故里，古汉文化浓郁，民俗与山水交融", recommend: 8 },
{ name: "金狮洞景区", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.233, lat: 30.733, description: "喀斯特溶洞景区，钟乳石形似金狮，景观奇特", recommend: 7 },
{ name: "情人泉景区", type: "4A级景区", address: "湖北省宜昌市夷陵区", lng: 111.333, lat: 30.833, description: "溶洞与泉水结合，景观浪漫，适合情侣游玩", recommend: 7 },
{ name: "鸣凤山景区", type: "4A级景区", address: "湖北省宜昌市远安县", lng: 111.633, lat: 31.033, description: "道教文化名山，山体巍峨，道观古朴，祈福观光佳选", recommend: 8 },
{ name: "链子崖景区", type: "4A级景区", address: "湖北省宜昌市秭归县", lng: 110.883, lat: 30.983, description: "长江沿岸悬崖景区，铁链栈道惊险，自然风光雄奇", recommend: 8 },
{ name: "武陵峡口生态旅游区", type: "4A级景区", address: "湖北省宜昌市远安县", lng: 111.533, lat: 31.133, description: "峡谷生态景区，有溶洞、溪流、温泉，休闲度假佳选", recommend: 8 },

// 十堰市存量4A
{ name: "丹江口大坝旅游区", type: "4A级景区", address: "湖北省十堰市丹江口市", lng: 111.033, lat: 32.533, description: "南水北调中线工程核心，大坝气势恢宏，水利观光佳选", recommend: 9 },
{ name: "太极峡景区", type: "4A级景区", address: "湖北省十堰市丹江口市", lng: 111.233, lat: 32.433, description: "峡谷景观形似太极，自然风光秀美，休闲徒步佳选", recommend: 8 },
{ name: "九龙瀑风景区", type: "4A级景区", address: "湖北省十堰市郧阳区", lng: 110.933, lat: 32.733, description: "瀑布群景区，九级瀑布连绵，水量充沛，景观绝美", recommend: 9 },
{ name: "郧阳青龙山恐龙蛋化石群国家地质公园", type: "4A级景区", address: "湖北省十堰市郧阳区", lng: 110.833, lat: 32.833, description: "恐龙蛋化石群遗址，科普价值高，地质观光佳选", recommend: 8 },
{ name: "五龙河景区", type: "4A级景区", address: "湖北省十堰市郧西县", lng: 110.233, lat: 33.133, description: "溪流峡谷景区，五龙河蜿蜒流淌，山林叠翠", recommend: 8 },
{ name: "龙潭河景区", type: "4A级景区", address: "湖北省十堰市郧西县", lng: 110.333, lat: 33.083, description: "瀑布溪流景区，龙潭河瀑布群，生态绝佳", recommend: 7 },
{ name: "沧浪海旅游区", type: "4A级景区", address: "湖北省十堰市丹江口市", lng: 111.133, lat: 32.583, description: "丹江口水库沿岸景区，湖光山色秀美，休闲观光佳选", recommend: 8 },
{ name: "上津古城景区", type: "4A级景区", address: "湖北省十堰市郧西县", lng: 110.033, lat: 33.333, description: "明清古城，保存完好，历史文化底蕴深厚", recommend: 8 },
{ name: "虎啸滩景区", type: "4A级景区", address: "湖北省十堰市郧阳区", lng: 110.733, lat: 32.883, description: "峡谷景区，虎啸滩瀑布气势恢宏，自然风光雄奇", recommend: 7 },
{ name: "女娲山旅游区", type: "4A级景区", address: "湖北省十堰市竹山县", lng: 110.133, lat: 32.433, description: "女娲文化发源地，山体秀美，文化底蕴深厚", recommend: 7 },

// 荆州市存量4A
{ name: "荆州古城历史文化旅游区", type: "4A级景区", address: "湖北省荆州市荆州区", lng: 112.247, lat: 30.333, description: "明清古城墙环绕，历史文化浓郁，古城观光佳选", recommend: 9 },
{ name: "楚王车马阵景区", type: "4A级景区", address: "湖北省荆州市荆州区", lng: 112.133, lat: 30.433, description: "楚王陵遗址，车马阵遗迹震撼，历史价值极高", recommend: 9 },
{ name: "荆州博物馆", type: "4A级景区", address: "湖北省荆州市荆州区", lng: 112.233, lat: 30.347, description: "综合性博物馆，馆藏大量楚文化文物，文化底蕴深厚", recommend: 8 },
{ name: "洪湖悦兮半岛温泉旅游区", type: "4A级景区", address: "湖北省荆州市洪湖市", lng: 113.483, lat: 29.833, description: "温泉度假景区，温泉水质优良，休闲养生佳选", recommend: 8 },
{ name: "松滋洈水风景区", type: "4A级景区", address: "湖北省荆州市松滋市", lng: 111.733, lat: 29.833, description: "洈水水库沿岸景区，湖光山色秀美，休闲度假佳选", recommend: 8 },
{ name: "荆州园博园", type: "4A级景区", address: "湖北省荆州市荆州区", lng: 112.283, lat: 30.383, description: "园林展示景区，各地园林特色齐聚，休闲观光佳选", recommend: 7 },

// 襄阳市存量4A
{ name: "襄阳唐城景区", type: "4A级景区", address: "湖北省襄阳市襄城区", lng: 112.133, lat: 31.733, description: "仿唐建筑群，气势恢宏，影视拍摄与观光兼具", recommend: 10 },
{ name: "春秋寨景区", type: "4A级景区", address: "湖北省襄阳市南漳县", lng: 111.733, lat: 31.833, description: "春秋时期古寨遗址，依山而建，历史与山水交融", recommend: 9 },
{ name: "中国汉城景区", type: "4A级景区", address: "湖北省襄阳市枣阳市", lng: 112.733, lat: 32.133, description: "仿汉建筑群，展现汉代文化，观光与演艺兼具", recommend: 8 },
{ name: "米公祠景区", type: "4A级景区", address: "湖北省襄阳市樊城区", lng: 112.183, lat: 31.783, description: "纪念米芾，书法文化浓郁，人文景观丰富", recommend: 7 },
{ name: "南河小三峡景区", type: "4A级景区", address: "湖北省襄阳市谷城县", lng: 111.433, lat: 32.033, description: "南河峡谷景区，三峡风光秀美，游船观光佳选", recommend: 8 },
{ name: "白水寺风景区", type: "4A级景区", address: "湖北省襄阳市枣阳市", lng: 112.783, lat: 32.233, description: "纪念刘秀，寺庙古朴，历史文化底蕴深厚", recommend: 7 },
{ name: "无量台风景区", type: "4A级景区", address: "湖北省襄阳市枣阳市", lng: 112.833, lat: 32.183, description: "道教文化景区，无量山风光秀美，祈福观光佳选", recommend: 7 },
{ name: "熊河风景区", type: "4A级景区", address: "湖北省襄阳市枣阳市", lng: 112.633, lat: 32.033, description: "熊河水库沿岸景区，湖光山色秀美，休闲观光佳选", recommend: 7 },

// 黄冈市存量4A
{ name: "黄州区遗爱湖景区", type: "4A级景区", address: "湖北省黄冈市黄州区", lng: 114.933, lat: 30.483, description: "城市湖泊景区，湖光山色秀美，休闲观光佳选", recommend: 8 },
{ name: "红安县黄麻起义和鄂豫皖苏区纪念园", type: "4A级景区", address: "湖北省黄冈市红安县", lng: 114.683, lat: 31.283, description: "红色旅游经典景区，纪念黄麻起义，红色教育基地", recommend: 9 },
{ name: "麻城市孝感乡文化园", type: "4A级景区", address: "湖北省黄冈市麻城市", lng: 115.083, lat: 31.133, description: "移民文化景区，展现孝感乡移民历史，文化底蕴深厚", recommend: 8 },
{ name: "罗田县天堂寨景区", type: "4A级景区", address: "湖北省黄冈市罗田县", lng: 115.633, lat: 31.133, description: "大别山主峰景区，山体巍峨，森林茂密，避暑观光佳选", recommend: 10 },
{ name: "英山县桃花冲风景区", type: "4A级景区", address: "湖北省黄冈市英山县", lng: 115.733, lat: 30.833, description: "桃花观光与山水结合，春季桃花烂漫，夏季凉爽", recommend: 8 },
{ name: "浠水县三角山旅游度假区", type: "4A级景区", address: "湖北省黄冈市浠水县", lng: 115.233, lat: 30.433, description: "山地旅游度假区，三角山风光秀美，休闲度假佳选", recommend: 8 },
{ name: "黄梅县五祖寺景区", type: "4A级景区", address: "湖北省黄冈市黄梅县", lng: 115.933, lat: 29.833, description: "佛教禅宗五祖弘忍道场，寺庙古朴，宗教文化浓郁", recommend: 9 },
{ name: "团风县大崎山森林公园", type: "4A级景区", address: "湖北省黄冈市团风县", lng: 114.833, lat: 30.733, description: "国家级森林公园，森林茂密，休闲徒步佳选", recommend: 7 },
{ name: "蕲春县三江生态旅游度假区", type: "4A级景区", address: "湖北省黄冈市蕲春县", lng: 115.483, lat: 30.333, description: "生态旅游度假区，有山水、温泉、休闲设施", recommend: 7 },
{ name: "武穴市希尔寨生态农庄", type: "4A级景区", address: "湖北省黄冈市武穴市", lng: 115.583, lat: 29.933, description: "生态农庄，田园风光与休闲采摘兼具", recommend: 7 },
{ name: "红安县天台山风景区", type: "4A级景区", address: "湖北省黄冈市红安县", lng: 114.833, lat: 31.433, description: "山地景区，天台山风光秀美，宗教文化与生态结合", recommend: 7 },
{ name: "麻城市五脑山国家森林公园", type: "4A级景区", address: "湖北省黄冈市麻城市", lng: 115.033, lat: 31.033, description: "国家级森林公园，有花海、森林、寺庙，休闲观光佳选", recommend: 8 },
{ name: "英山县吴家山国家森林公园", type: "4A级景区", address: "湖北省黄冈市英山县", lng: 115.683, lat: 30.933, description: "国家级森林公园，森林茂密，避暑佳选", recommend: 7 },
{ name: "罗田县薄刀峰风景区", type: "4A级景区", address: "湖北省黄冈市罗田县", lng: 115.533, lat: 31.083, description: "山地景区，山峰形似薄刀，自然风光雄奇", recommend: 9 },

// 孝感市存量4A
{ name: "双峰山旅游度假区", type: "4A级景区", address: "湖北省孝感市孝昌县", lng: 113.933, lat: 31.333, description: "山地旅游度假区，双峰山风光秀美，休闲度假佳选", recommend: 8 },
{ name: "汤池温泉旅游景区", type: "4A级景区", address: "湖北省孝感市应城市", lng: 113.633, lat: 30.933, description: "知名温泉景区，温泉水质优良，养生休闲佳选", recommend: 9 },
{ name: "白兆山李白文化旅游区", type: "4A级景区", address: "湖北省孝感市安陆市", lng: 113.883, lat: 31.283, description: "李白隐居地，文化底蕴深厚，山水与人文交融", recommend: 8 },
{ name: "金卉庄园", type: "4A级景区", address: "湖北省孝感市孝南区", lng: 113.983, lat: 30.983, description: "花卉观光与休闲游乐结合，四季花海各异", recommend: 8 },
{ name: "天紫湖生态旅游度假区", type: "4A级景区", address: "湖北省孝感市孝南区", lng: 113.933, lat: 31.033, description: "湖泊生态度假区，有温泉、休闲设施，养生度假佳选", recommend: 7 },
{ name: "观音湖生态文化旅游区", type: "4A级景区", address: "湖北省孝感市孝昌县", lng: 113.983, lat: 31.383, description: "湖泊生态景区，观音湖风光秀美，休闲观光佳选", recommend: 8 },

// 咸宁市存量4A
{ name: "赤壁古战场景区", type: "4A级景区", address: "湖北省咸宁市赤壁市", lng: 113.533, lat: 29.733, description: "三国赤壁之战遗址，历史底蕴深厚，人文观光佳选", recommend: 9 },
{ name: "陆水湖风景区", type: "4A级景区", address: "湖北省咸宁市赤壁市", lng: 113.433, lat: 29.783, description: "陆水水库沿岸景区，湖光山色秀美，休闲观光佳选", recommend: 8 },
{ name: "九宫山风景区", type: "4A级景区", address: "湖北省咸宁市通山县", lng: 114.583, lat: 29.583, description: "避暑名山，九宫山风光秀美，夏季凉爽", recommend: 9 },
{ name: "三江森林温泉度假区", type: "4A级景区", address: "湖北省咸宁市咸安区", lng: 114.333, lat: 29.833, description: "森林温泉景区，温泉与森林结合，养生佳选", recommend: 8 },
{ name: "楚天瑶池温泉度假村", type: "4A级景区", address: "湖北省咸宁市咸安区", lng: 114.233, lat: 29.883, description: "温泉度假景区，温泉水质优良，休闲养生佳选", recommend: 7 },
{ name: "嘉鱼县山湖温泉旅游区", type: "4A级景区", address: "湖北省咸宁市嘉鱼县", lng: 113.933, lat: 29.933, description: "滨湖温泉景区，温泉与湖光山色结合", recommend: 7 },
{ name: "通山县隐水洞地质公园", type: "4A级景区", address: "湖北省咸宁市通山县", lng: 114.633, lat: 29.633, description: "喀斯特溶洞景区，洞内景观奇特，地质科普佳选", recommend: 9 },
{ name: "赤壁市龙佑温泉度假区", type: "4A级景区", address: "湖北省咸宁市赤壁市", lng: 113.483, lat: 29.833, description: "温泉度假景区，配套完善，休闲养生佳选", recommend: 8 },

// 恩施州存量4A
{ name: "恩施土司城", type: "4A级景区", address: "湖北省恩施州恩施市", lng: 109.483, lat: 30.333, description: "土家族土司文化景区，建筑古朴，民俗文化浓郁", recommend: 9 },
{ name: "梭布垭石林", type: "4A级景区", address: "湖北省恩施州恩施市", lng: 109.633, lat: 30.433, description: "喀斯特石林景区，石林形态各异，自然风光独特", recommend: 9 },
{ name: "地心谷景区", type: "4A级景区", address: "湖北省恩施州建始县", lng: 109.833, lat: 30.633, description: "峡谷地心景观，悬崖栈道惊险，自然风光雄奇", recommend: 10 },
{ name: "土家女儿城", type: "4A级景区", address: "湖北省恩施州恩施市", lng: 109.433, lat: 30.383, description: "土家族民俗文化街区，民俗表演、美食齐聚", recommend: 9 },
{ name: "坪坝营生态旅游区", type: "4A级景区", address: "湖北省恩施州咸丰县", lng: 109.133, lat: 29.733, description: "原始森林景区，森林茂密，生态绝佳，避暑佳选", recommend: 8 },
{ name: "唐崖河风景区", type: "4A级景区", address: "湖北省恩施州咸丰县", lng: 109.033, lat: 29.633, description: "唐崖河沿岸景区，峡谷、溪流、民俗结合", recommend: 8 },
{ name: "神农溪纤夫文化旅游区", type: "4A级景区", address: "湖北省恩施州巴东县", lng: 110.333, lat: 31.033, description: "神农溪沿岸景区，纤夫文化独特，游船观光佳选", recommend: 9 },
{ name: "野三河景区", type: "4A级景区", address: "湖北省恩施州建始县", lng: 109.733, lat: 30.733, description: "三河峡谷景区，自然风光秀美，休闲观光佳选", recommend: 8 },
{ name: "黄金洞景区", type: "4A级景区", address: "湖北省恩施州咸丰县", lng: 108.933, lat: 29.683, description: "大型溶洞景区，洞内景观丰富，地质奇观独特", recommend: 8 },

// 荆门市存量4A
{ name: "明显陵文化旅游区", type: "4A级景区", address: "湖北省荆门市钟祥市", lng: 112.533, lat: 31.233, description: "明代皇陵，建筑恢宏，历史价值极高", recommend: 9 },
{ name: "黄仙洞景区", type: "4A级景区", address: "湖北省荆门市钟祥市", lng: 112.433, lat: 31.333, description: "喀斯特溶洞景区，洞内景观奇特，地质科普佳选", recommend: 8 },
{ name: "绿林山风景区", type: "4A级景区", address: "湖北省荆门市京山市", lng: 113.133, lat: 31.033, description: "绿林起义遗址，山林秀美，历史与生态结合", recommend: 8 },
{ name: "彭墩乡村世界", type: "4A级景区", address: "湖北省荆门市钟祥市", lng: 112.333, lat: 31.133, description: "乡村旅游景区，田园风光与休闲体验兼具", recommend: 7 },
{ name: "爱飞客航空小镇", type: "4A级景区", address: "湖北省荆门市漳河新区", lng: 112.183, lat: 31.083, description: "航空主题景区，可体验航空文化，科普与观光兼具", recommend: 7 },
{ name: "太子山生态旅游区", type: "4A级景区", address: "湖北省荆门市京山市", lng: 112.833, lat: 30.933, description: "生态旅游区，太子山森林茂密，休闲徒步佳选", recommend: 7 },

// 黄石市存量4A
{ name: "仙岛湖生态旅游风景区", type: "4A级景区", address: "湖北省黄石市阳新县", lng: 115.333, lat: 29.933, description: "千岛湖泊景区，岛屿星罗棋布，湖光山色秀美", recommend: 9 },
{ name: "雷山风景区", type: "4A级景区", address: "湖北省黄石市大冶市", lng: 114.933, lat: 29.933, description: "山地景区，雷山风光秀美，人文景观丰富", recommend: 7 },
{ name: "大冶铁矿博物馆", type: "4A级景区", address: "湖北省黄石市铁山区", lng: 115.033, lat: 30.233, description: "铁矿工业博物馆，展现采矿历史，工业文化浓郁", recommend: 7 },
{ name: "东方山风景区", type: "4A级景区", address: "湖北省黄石市下陆区", lng: 115.083, lat: 30.283, description: "佛教文化名山，东方山风光秀美，祈福观光佳选", recommend: 8 },
{ name: "西塞山风景区", type: "4A级景区", address: "湖北省黄石市西塞山区", lng: 115.083, lat: 30.283, description: "长江沿岸名山，历史遗迹丰富，登高观江佳选", recommend: 7 },

// 鄂州市存量4A
{ name: "莲花山旅游区", type: "4A级景区", address: "湖北省鄂州市鄂城区", lng: 114.833, lat: 30.333, description: "莲花山风光秀美，有寺庙、碑林，休闲观光佳选", recommend: 7 },
{ name: "西山风景区", type: "4A级景区", address: "湖北省鄂州市鄂城区", lng: 114.817, lat: 30.383, description: "鄂州历史名山，西山风光秀美，人文景观丰富", recommend: 7 },
{ name: "梁子岛生态旅游区", type: "4A级景区", address: "湖北省鄂州市梁子湖区", lng: 114.783, lat: 30.183, description: "梁子湖岛屿景区，湖光山色秀美，生态绝佳", recommend: 8 },

// 随州市存量4A
{ name: "炎帝故里风景区", type: "4A级景区", address: "湖北省随州市随县", lng: 113.333, lat: 31.733, description: "炎帝神农氏故里，文化底蕴深厚，祈福观光佳选", recommend: 9 },
{name: "大洪山风景名胜区", type: "4A 级景区", address: "湖北省随州市随县", lng: 113.233, lat: 31.533, description: "国家级风景名胜区，山体巍峨，森林茂密，有溶洞、瀑布，避暑观光佳选", recommend: 9},
{ name: "西游记公园", type: "4A 级景区", address: "湖北省随州市随县", lng: 113.383, lat: 31.683, description: "西游记主题景区，有游乐设施、民俗表演，亲子游玩胜地", recommend: 8 },
{ name: "女儿国温泉", type: "4A 级景区", address: "湖北省随州市随县", lng: 113.373, lat: 31.673, description: "温泉度假景区，配套完善，养生休闲佳选", recommend: 8 },
{ name: "洛阳镇千年银杏谷", type: "4A 级景区", address: "湖北省随州市曾都区", lng: 113.483, lat: 31.733, description: "古银杏群落景区，秋季金黄一片，生态与观光兼具", recommend: 10 },
// 仙桃、潜江、天门、神农架存量 4A
{name: "仙桃市梦里水乡文化旅游区", type: "4A 级景区", address: "湖北省仙桃市沙湖镇", lng: 113.533, lat: 30.233, description: "水乡生态景区，湖光山色秀美，民俗文化浓郁", recommend: 8},
{ name: "潜江市返湾湖国家湿地公园", type: "4A 级景区", address: "湖北省潜江市后湖管理区", lng: 112.883, lat: 30.433, description: "国家级湿地公园，湿地风光秀美，鸟类繁多，生态观光佳选", recommend: 7 },
{ name: "天门市茶圣故里园", type: "4A 级景区", address: "湖北省天门市竟陵街道", lng: 113.133, lat: 30.633, description: "茶圣陆羽故里，茶文化浓郁，休闲观光与科普兼具", recommend: 8 },
{ name: "神农架官门山景区", type: "4A 级景区", address: "湖北省神农架林区", lng: 110.433, lat: 31.733, description: "神农架生态景区，动植物资源丰富，科普与观光兼具", recommend: 9 },
{ name: "神农架神农顶景区", type: "4A 级景区", address: "湖北省神农架林区", lng: 110.333, lat: 31.783, description: "神农架主峰景区，山体巍峨，云海、日出景观绝美", recommend: 10 },
{ name: "神农架天生桥景区", type: "4A 级景区", address: "湖北省神农架林区", lng: 110.483, lat: 31.683, description: "天生桥景观奇特，溪流瀑布成群，自然风光秀美", recommend: 9 },
{ name: "神农架野人谷景区", type: "4A 级景区", address: "湖北省神农架林区", lng: 110.233, lat: 31.733, description: "峡谷生态景区，森林茂密，生态绝佳，探险观光佳选", recommend: 8 },
{ name: "神农架红坪画廊景区", type: "4A 级景区", address: "湖北省神农架林区", lng: 110.183, lat: 31.783, description: "峡谷画廊景观，山水秀美，如诗如画", recommend: 8 },
// 2022 年 9 月新增 10 家
{name: "鄂州市西山风景区", type: "4A 级景区", address: "湖北省鄂州市鄂城区", lng: 114.817, lat: 30.383, description: "鄂州历史名山，古迹众多，登高可俯瞰鄂州城区", recommend: 7},
{ name: "宜昌博物馆", type: "4A 级景区", address: "湖北省宜昌市伍家岗区", lng: 111.333, lat: 30.683, description: "综合性博物馆，馆藏宜昌历史文化文物，科普价值高", recommend: 8 },
{ name: "恩施州鹤峰县屏山旅游景区", type: "4A 级景区", address: "湖北省恩施州鹤峰县", lng: 109.833, lat: 29.833, description: "网红打卡景区，峡谷清幽，河水清澈，悬浮船体验独特", recommend: 10 },
{ name: "咸宁市通城县药姑山・古瑶村景区", type: "4A 级景区", address: "湖北省咸宁市通城县", lng: 113.833, lat: 29.233, description: "古瑶族村落，保留瑶族民俗，山林环绕，生态绝佳", recommend: 8 },
{ name: "襄阳市保康县横冲景区", type: "4A 级景区", address: "湖北省襄阳市保康县", lng: 111.033, lat: 31.833, description: "高山生态景区，夏季凉爽，草原与森林交织", recommend: 7 },
{ name: "武汉市黄陂区花乡茶谷景区", type: "4A 级景区", address: "湖北省武汉市黄陂区", lng: 114.383, lat: 30.933, description: "茶旅融合景区，茶园连绵，田园风光秀美", recommend: 8 },
{ name: "恩施州巴东县无源洞景区", type: "4A 级景区", address: "湖北省恩施州巴东县", lng: 110.383, lat: 31.033, description: "溶洞与江景结合，洞内景观奇特，登高观江佳选", recommend: 8 },
{ name: "孝感市汉川市天屿湖旅游区", type: "4A 级景区", address: "湖北省孝感市汉川市", lng: 113.633, lat: 30.633, description: "湖泊旅游度假区，湖光山色秀美，休闲度假佳选", recommend: 8 },
{ name: "宜昌市宜都市青林休闲旅游区", type: "4A 级景区", address: "湖北省宜昌市宜都市", lng: 111.433, lat: 30.483, description: "休闲旅游区，田园风光与民俗体验兼具", recommend: 7 },
{ name: "黄冈市蕲春县李山生态旅游区", type: "4A 级景区", address: "湖北省黄冈市蕲春县", lng: 115.533, lat: 30.183, description: "生态旅游区，山林叠翠，溪流潺潺，休闲观光佳选", recommend: 7 },
// 2022 年 1 月新增 8 家
{name: "襄阳古城景区", type: "4A 级景区", address: "湖北省襄阳市襄城区", lng: 112.167, lat: 31.753, description: "明清古城，城墙保存完好，历史文化浓郁", recommend: 9},
{ name: "荆州海洋世界", type: "4A 级景区", address: "湖北省荆州市沙市区", lng: 112.283, lat: 30.383, description: "海洋主题景区，有海洋馆、水上乐园，亲子游玩胜地", recommend: 8 },
{ name: "襄阳市谷城县堰河乡村旅游区", type: "4A 级景区", address: "湖北省襄阳市谷城县", lng: 111.583, lat: 32.133, description: "乡村旅游景区，田园风光秀美，民俗文化浓郁", recommend: 7 },
{ name: "十堰市竹山县太和梅花谷景区", type: "4A 级景区", address: "湖北省十堰市竹山县", lng: 110.033, lat: 32.233, description: "梅花观光景区，冬季梅花盛开，休闲观光佳选", recommend: 8 },
{ name: "宜昌市长阳县卓尔木桥溪生态旅游度假区", type: "4A 级景区", address: "湖北省宜昌市长阳土家族自治县", lng: 110.833, lat: 30.433, description: "生态旅游度假区，山林清幽，休闲度假佳选", recommend: 8 },
{ name: "十堰市郧阳恐龙蛋化石群地质公园", type: "4A 级景区", address: "湖北省十堰市郧阳区", lng: 110.833, lat: 32.833, description: "恐龙蛋化石遗址，科普价值高，地质观光佳选", recommend: 8 },
{ name: "宜昌市远安县三峡龙隐谷生态旅游区", type: "4A 级景区", address: "湖北省宜昌市远安县", lng: 111.683, lat: 31.133, description: "峡谷生态景区，有溶洞、瀑布，自然风光秀美", recommend: 7 },
{ name: "黄石市龙凤山景区", type: "4A 级景区", address: "湖北省黄石市大冶市", lng: 114.883, lat: 30.083, description: "山地生态景区，龙凤山风光秀美，休闲观光佳选", recommend: 7 },
// 2022 年 12 月新增 8 家
{name: "鄂州市杏福园旅游区", type: "4A 级景区", address: "湖北省鄂州市梁子湖区", lng: 114.733, lat: 30.133, description: "田园旅游景区，有花海、采摘园，休闲体验佳选", recommend: 7},
{ name: "随州市广水市高贵三潭景区", type: "4A 级景区", address: "湖北省随州市广水市", lng: 113.833, lat: 31.583, description: "瀑布群景区，三潭瀑布景观绝美，生态绝佳", recommend: 8 },
{ name: "十堰市丹江口市武当大明峰景区", type: "4A 级景区", address: "湖北省十堰市丹江口市", lng: 111.083, lat: 32.483, description: "武当山余脉，山峰巍峨，道教文化浓郁", recommend: 9 },
{ name: "荆州市荆州园博园", type: "4A 级景区", address: "湖北省荆州市荆州区", lng: 112.283, lat: 30.383, description: "园林展示景区，各地园林特色齐聚，休闲观光佳选", recommend: 7 },
{ name: "鄂州市梁子岛生态旅游区", type: "4A 级景区", address: "湖北省鄂州市梁子湖区", lng: 114.783, lat: 30.183, description: "梁子湖岛屿景区，湖光山色秀美，生态绝佳", recommend: 8 },
{ name: "荆门市极客公园", type: "4A 级景区", address: "湖北省荆门市漳河新区", lng: 112.233, lat: 31.033, description: "科技主题公园，互动体验丰富，适合青少年游玩", recommend: 7 },
{ name: "孝感市应城国家矿山公园・爱漫文旅小镇", type: "4A 级景区", address: "湖北省孝感市应城市", lng: 113.683, lat: 30.983, description: "矿山公园与文旅小镇结合，工业文化与休闲游乐兼具", recommend: 7 },
{ name: "十堰市郧阳区汉江绿谷生态旅游区", type: "4A 级景区", address: "湖北省十堰市郧阳区", lng: 110.883, lat: 32.783, description: "汉江沿岸生态景区，绿谷风光秀美，休闲观光佳选", recommend: 8 },
// 2021 年新增 11 家
{name: "恩施州宣恩县仙山贡水旅游区", type: "4A 级景区", address: "湖北省恩施州宣恩县", lng: 109.433, lat: 29.933, description: "贡水沿岸景区，夜景绝美，民俗文化与滨水休闲兼具", recommend: 9},
{ name: "黄冈市黄梅县禅文化旅游区", type: "4A 级景区", address: "湖北省黄冈市黄梅县", lng: 115.983, lat: 29.883, description: "禅文化景区，寺庙古朴，宗教文化浓郁", recommend: 8 },
{ name: "宜昌市秭归县三峡竹海生态旅游区", type: "4A 级景区", address: "湖北省宜昌市秭归县", lng: 110.983, lat: 30.883, description: "竹海生态景区，竹林茂密，溪流瀑布成群", recommend: 8 },
{ name: "咸宁市嘉鱼县山湖温泉旅游区", type: "4A 级景区", address: "湖北省咸宁市嘉鱼县", lng: 113.933, lat: 29.933, description: "滨湖温泉景区，温泉与湖光山色结合", recommend: 7 },
{ name: "咸宁市赤壁市龙佑温泉度假区", type: "4A 级景区", address: "湖北省咸宁市赤壁市", lng: 113.483, lat: 29.833, description: "温泉度假景区，配套完善，休闲养生佳选", recommend: 8 },
{ name: "仙桃市沔阳小镇景区", type: "4A 级景区", address: "湖北省仙桃市排湖风景区", lng: 113.333, lat: 30.333, description: "以沔阳文化为主题的特色小镇，民俗文化与休闲游乐兼具", recommend: 8 },
{ name: "黄冈市罗田县三里畈温泉旅游区", type: "4A 级景区", address: "湖北省黄冈市罗田县", lng: 115.433, lat: 30.833, description: "温泉旅游度假区，温泉与田园风光结合", recommend: 8 },
{ name: "黄冈市英山县桃花冲风景区", type: "4A 级景区", address: "湖北省黄冈市英山县", lng: 115.733, lat: 30.833, description: "桃花观光与山水结合，春季桃花烂漫，夏季凉爽", recommend: 8 },
{ name: "宜昌市兴山县昭君故里旅游区", type: "4A 级景区", address: "湖北省宜昌市兴山县", lng: 110.733, lat: 31.033, description: "王昭君故里，古汉文化浓郁，民俗与山水交融", recommend: 8 },
{ name: "恩施州建始县地心谷景区", type: "4A 级景区", address: "湖北省恩施州建始县", lng: 109.833, lat: 30.633, description: "峡谷地心景观，悬崖栈道惊险，自然风光雄奇", recommend: 10 },

// 长沙市（32家）
{ name: "长沙世界之窗", type: "4A级景区", address: "湖南省长沙市开福区", lng: 113.033, lat: 28.247, description: "大型主题乐园，集游乐设施、演艺表演、文化展示于一体，适合全家游玩", recommend: 9 },
{ name: "长沙海底世界", type: "4A级景区", address: "湖南省长沙市开福区", lng: 113.037, lat: 28.250, description: "海洋主题公园，有多种海洋生物展示、海豚表演，亲子科普佳选", recommend: 8 },
{ name: "长沙天心阁", type: "4A级景区", address: "湖南省长沙市天心区", lng: 112.993, lat: 28.197, description: "长沙古城地标，楼阁古朴，登楼可俯瞰城区，历史文化底蕴深厚", recommend: 8 },
{ name: "湖南省博物馆", type: "4A级景区", address: "湖南省长沙市开福区", lng: 113.017, lat: 28.227, description: "综合性博物馆，馆藏马王堆汉墓文物等珍贵展品，文化价值极高", recommend: 9 },
{ name: "雷锋纪念馆", type: "4A级景区", address: "湖南省长沙市望城区", lng: 112.867, lat: 28.267, description: "纪念雷锋同志，红色教育基地，展现雷锋生平事迹与精神", recommend: 8 },
{ name: "大围山国家森林公园", type: "4A级景区", address: "湖南省长沙市浏阳市", lng: 114.133, lat: 28.333, description: "国家级森林公园，森林茂密，夏季避暑、秋季赏枫，生态绝佳", recommend: 9 },
{ name: "杨开慧纪念馆", type: "4A级景区", address: "湖南省长沙市长沙县", lng: 113.233, lat: 28.367, description: "纪念杨开慧烈士，红色旅游经典景区，红色教育基地", recommend: 8 },
{ name: "靖港古镇", type: "4A级景区", address: "湖南省长沙市望城区", lng: 112.833, lat: 28.317, description: "千年古镇，保留明清建筑，水乡风情浓郁，民俗文化体验丰富", recommend: 8 },
{ name: "浏阳苍坊旅游区（胡耀邦故里）", type: "4A级景区", address: "湖南省长沙市浏阳市", lng: 113.633, lat: 28.333, description: "胡耀邦同志故里，红色旅游与乡村风光结合，文化底蕴深厚", recommend: 9 },
{ name: "长沙生态动物园", type: "4A级景区", address: "湖南省长沙市天心区", lng: 113.050, lat: 28.083, description: "综合性动物园，饲养多种珍稀动物，适合亲子游玩与科普", recommend: 7 },
{ name: "湖南省森林植物园", type: "4A级景区", address: "湖南省长沙市雨花区", lng: 113.047, lat: 28.147, description: "大型植物园，收集大量植物品种，四季花海各异，休闲观光佳选", recommend: 8 },
{ name: "石燕湖生态旅游景区", type: "4A级景区", address: "湖南省长沙市雨花区", lng: 113.167, lat: 28.033, description: "山水生态景区，有湖泊、森林、玻璃桥，休闲游乐与自然观光兼具", recommend: 8 },
{ name: "宁乡紫龙湾旅游区", type: "4A级景区", address: "湖南省长沙市宁乡市", lng: 112.533, lat: 28.133, description: "温泉度假景区，温泉水质优良，配套休闲设施，养生度假佳选", recommend: 8 },
{ name: "沩山密印景区", type: "4A级景区", address: "湖南省长沙市宁乡市", lng: 112.383, lat: 28.183, description: "佛教文化景区，密印寺历史悠久，寺庙古朴，山林清幽", recommend: 8 },
{ name: "洋湖湿地景区", type: "4A级景区", address: "湖南省长沙市岳麓区", lng: 112.933, lat: 28.117, description: "城市湿地公园，湿地风光秀美，生物多样性丰富，休闲散步佳选", recommend: 7 },
{ name: "关山旅游区", type: "4A级景区", address: "湖南省长沙市宁乡市", lng: 112.683, lat: 28.233, description: "乡村旅游景区，融合田园风光、民俗文化、休闲游乐", recommend: 7 },
{ name: "黑麋峰国家森林公园", type: "4A级景区", address: "湖南省长沙市望城区", lng: 112.917, lat: 28.417, description: "国家级森林公园，森林茂密，有瀑布、溪流，休闲徒步佳选", recommend: 7 },
{ name: "千龙湖生态旅游区", type: "4A级景区", address: "湖南省长沙市望城区", lng: 112.733, lat: 28.317, description: "湖泊生态景区，有千龙湖、花海、休闲设施，度假休闲佳选", recommend: 7 },
{ name: "浏阳秋收起义纪念园", type: "4A级景区", address: "湖南省长沙市浏阳市", lng: 113.683, lat: 28.133, description: "纪念秋收起义，红色旅游景区，红色教育基地", recommend: 9 },
{ name: "新华联铜官窑古镇", type: "4A级景区", address: "湖南省长沙市望城区", lng: 112.767, lat: 28.367, description: "以铜官窑文化为主题的古镇，仿古建筑群，文化体验丰富", recommend: 8 },
{ name: "田汉文化园", type: "4A级景区", address: "湖南省长沙市长沙县", lng: 113.133, lat: 28.217, description: "纪念田汉先生，融合戏剧文化、休闲观光，文化特色鲜明", recommend: 7 },
{ name: "滨江文化园", type: "4A级景区", address: "湖南省长沙市开福区", lng: 112.983, lat: 28.233, description: "城市文化园区，有博物馆、图书馆、音乐厅，文化休闲兼具", recommend: 7 },
{ name: "铜官窑国家考古遗址公园", type: "4A级景区", address: "湖南省长沙市望城区", lng: 112.773, lat: 28.373, description: "唐代铜官窑遗址，考古与观光兼具，历史价值极高", recommend: 8 },
{ name: "望城光明大观园", type: "4A级景区", address: "湖南省长沙市望城区", lng: 112.817, lat: 28.283, description: "乡村旅游景区，田园风光秀美，亲子体验、休闲游乐兼具", recommend: 7 },
{ name: "影珠山景区", type: "4A级景区", address: "湖南省长沙市长沙县", lng: 113.283, lat: 28.433, description: "山地景区，影珠山风光秀美，有抗战遗址，红色与生态结合", recommend: 7 },
{ name: "华谊兄弟（长沙）电影小镇", type: "4A级景区", address: "湖南省长沙市岳麓区", lng: 112.867, lat: 28.183, description: "欧式风情小镇，影视拍摄与观光休闲兼具，网红打卡胜地", recommend: 9 },
{ name: "天华山旅游景区", type: "4A级景区", address: "湖南省长沙市长沙县", lng: 113.333, lat: 28.317, description: "山地生态景区，山林叠翠，休闲徒步佳选", recommend: 6 },
{ name: "长沙园林生态园", type: "4A级景区", address: "湖南省长沙市开福区", lng: 113.083, lat: 28.317, description: "城市园林景区，绿植繁茂，花卉观赏、休闲散步佳选", recommend: 7 },
{ name: "隆平水稻文化园", type: "4A级景区", address: "湖南省长沙市芙蓉区", lng: 113.073, lat: 28.203, description: "以水稻文化为主题，纪念袁隆平院士，科普与观光兼具", recommend: 8 },
{ name: "周洛大峡谷", type: "4A级景区", address: "湖南省长沙市浏阳市", lng: 113.883, lat: 28.383, description: "峡谷生态景区，瀑布成群，溪流潺潺，生态绝佳", recommend: 8 },
{ name: "三珍虎园", type: "4A级景区", address: "湖南省长沙市长沙县", lng: 113.383, lat: 28.367, description: "老虎养殖与观赏景区，可近距离接触老虎，科普体验独特", recommend: 7 },
{ name: "西溪磐石大峡谷风景区", type: "4A级景区", address: "湖南省长沙市浏阳市", lng: 113.833, lat: 28.433, description: "峡谷景区，山石奇特，溪流瀑布，休闲观光佳选", recommend: 7 },

// 衡阳市（13家）
{ name: "罗荣桓故居纪念馆", type: "4A级景区", address: "湖南省衡阳市衡东县", lng: 112.933, lat: 27.083, description: "纪念罗荣桓元帅，红色旅游景区，红色教育基地", recommend: 9 },
{ name: "石鼓书院", type: "4A级景区", address: "湖南省衡阳市石鼓区", lng: 112.573, lat: 26.903, description: "中国古代四大书院之一，历史文化底蕴深厚，研学观光佳选", recommend: 9 },
{ name: "蔡伦竹海旅游风景区", type: "4A级景区", address: "湖南省衡阳市耒阳市", lng: 112.833, lat: 26.483, description: "万亩竹海景区，竹林茂密，展现蔡伦造纸文化，生态与人文结合", recommend: 8 },
{ name: "常宁印山文化旅游区（中国印山）", type: "4A级景区", address: "湖南省衡阳市常宁市", lng: 112.433, lat: 26.333, description: "以印章文化为主题，山石刻满印章，文化特色鲜明", recommend: 8 },
{ name: "王船山故里生态文化旅游区", type: "4A级景区", address: "湖南省衡阳市衡阳县", lng: 112.433, lat: 26.833, description: "纪念王船山先生，生态与文化结合，休闲观光佳选", recommend: 8 },
{ name: "夏明翰故里景区", type: "4A级景区", address: "湖南省衡阳市衡阳县", lng: 112.633, lat: 26.883, description: "纪念夏明翰烈士，红色旅游景区，红色教育基地", recommend: 8 },
{ name: "奇石文化博物馆", type: "4A级景区", address: "湖南省衡阳市蒸湘区", lng: 112.563, lat: 26.883, description: "奇石收藏与展示景区，各类奇石琳琅满目，观赏价值高", recommend: 6 },
{ name: "东洲岛景区", type: "4A级景区", address: "湖南省衡阳市雁峰区", lng: 112.583, lat: 26.883, description: "湘江中洲岛，风光秀美，有古书院、寺庙，休闲观光佳选", recommend: 8 },
{ name: "南湖景区", type: "4A级景区", address: "湖南省衡阳市雁峰区", lng: 112.533, lat: 26.833, description: "城市湖泊景区，湖光山色秀美，休闲散步、游船观光佳选", recommend: 7 },
{ name: "水口山工人运动纪念馆景区", type: "4A级景区", address: "湖南省衡阳市常宁市", lng: 112.483, lat: 26.383, description: "纪念水口山工人运动，红色旅游景区，红色教育基地", recommend: 8 },
{ name: "紫金山旅游景区", type: "4A级景区", address: "湖南省衡阳市衡山县", lng: 112.733, lat: 27.233, description: "山地生态景区，山林叠翠，休闲观光佳选", recommend: 7 },
{ name: "岣嵝峰国家森林公园", type: "4A级景区", address: "湖南省衡阳市衡阳县", lng: 112.733, lat: 27.033, description: "国家级森林公园，森林茂密，避暑休闲佳选", recommend: 7 },
{ name: "南岳衡山（配套4A区）", type: "4A级景区", address: "湖南省衡阳市南岳区", lng: 112.733, lat: 27.283, description: "南岳衡山配套景区，山水风光与宗教文化结合", recommend: 8 },

// 株洲市（9家）
{ name: "茶陵云阳山景区", type: "4A级景区", address: "湖南省株洲市茶陵县", lng: 113.533, lat: 26.733, description: "山地生态景区，云阳山风光秀美，宗教文化与自然结合", recommend: 7 },
{ name: "炎陵神农谷景区", type: "4A级景区", address: "湖南省株洲市炎陵县", lng: 113.933, lat: 26.433, description: "峡谷生态景区，瀑布成群，溪流潺潺，生态绝佳", recommend: 9 },
{ name: "方特欢乐世界", type: "4A级景区", address: "湖南省株洲市云龙示范区", lng: 113.283, lat: 27.833, description: "大型主题乐园，科幻主题鲜明，游乐设施惊险刺激", recommend: 9 },
{ name: "神农城炎帝文化主题公园", type: "4A级景区", address: "湖南省株洲市天元区", lng: 113.133, lat: 27.833, description: "以炎帝文化为主题，有神农塔、神农湖，文化休闲兼具", recommend: 8 },
{ name: "红军标语博物馆", type: "4A级景区", address: "湖南省株洲市炎陵县", lng: 113.733, lat: 26.533, description: "收藏大量红军标语，红色旅游景区，红色教育基地", recommend: 8 },
{ name: "酒仙湖景区", type: "4A级景区", address: "湖南省株洲市攸县", lng: 113.333, lat: 27.033, description: "湖泊生态景区，湖光山色秀美，休闲观光佳选", recommend: 8 },
{ name: "芋园文化旅游景区", type: "4A级景区", address: "湖南省株洲市炎陵县", lng: 113.783, lat: 26.483, description: "红色旅游景区，红军活动旧址，红色教育基地", recommend: 8 },
{ name: "茶陵工农兵政府旧址景区", type: "4A级景区", address: "湖南省株洲市茶陵县", lng: 113.583, lat: 26.783, description: "中国第一个县级工农兵政府旧址，红色旅游经典景区", recommend: 9 },
{ name: "茶陵县花湖谷景区", type: "4A级景区", address: "湖南省株洲市茶陵县", lng: 113.483, lat: 26.683, description: "花海与湖泊结合，田园风光秀美，休闲观光佳选", recommend: 7 },

// 湘潭市（7家）
{ name: "彭德怀纪念馆", type: "4A级景区", address: "湖南省湘潭市湘潭县", lng: 112.833, lat: 27.733, description: "纪念彭德怀元帅，红色旅游景区，红色教育基地", recommend: 9 },
{ name: "湘乡东山书院旅游区", type: "4A级景区", address: "湖南省湘潭市湘乡市", lng: 112.583, lat: 27.833, description: "清代书院，毛泽东曾在此求学，历史文化底蕴深厚", recommend: 8 },
{ name: "茅浒水乡度假村", type: "4A级景区", address: "湖南省湘潭市湘乡市", lng: 112.533, lat: 27.783, description: "水乡度假景区，湖光山色秀美，休闲度假佳选", recommend: 7 },
{ name: "水府旅游区", type: "4A级景区", address: "湖南省湘潭市湘乡市", lng: 112.433, lat: 27.733, description: "湖泊生态景区，水府庙水库风光秀美，休闲观光佳选", recommend: 8 },
{ name: "盘龙大观园", type: "4A级景区", address: "湖南省湘潭市岳塘区", lng: 112.933, lat: 27.833, description: "大型花卉主题园区，四季花海各异，休闲观光佳选", recommend: 8 },
{ name: "昭山景区", type: "4A级景区", address: "湖南省湘潭市岳塘区", lng: 113.033, lat: 27.883, description: "山地生态景区，昭山风光秀美，历史文化底蕴深厚", recommend: 7 },
{ name: "昭山城市海景水上乐园", type: "4A级景区", address: "湖南省湘潭市岳塘区", lng: 113.043, lat: 27.893, description: "水上主题乐园，多种水上游乐设施，夏季消暑佳选", recommend: 8 },

// 邵阳市（8家）
{ name: "湘窖生态文化酿酒城", type: "4A级景区", address: "湖南省邵阳市大祥区", lng: 111.483, lat: 27.233, description: "工业旅游景区，展现酿酒文化，可参观生产流程、品尝美酒", recommend: 7 },
{ name: "黄桑生态旅游区", type: "4A级景区", address: "湖南省邵阳市绥宁县", lng: 110.133, lat: 26.633, description: "生态旅游区，森林茂密，溪流瀑布，生态绝佳", recommend: 9 },
{ name: "武冈云山国家森林公园", type: "4A级景区", address: "湖南省邵阳市武冈市", lng: 110.633, lat: 26.733, description: "国家级森林公园，云山风光秀美，宗教文化与自然结合", recommend: 8 },
{ name: "新邵白水洞景区", type: "4A级景区", address: "湖南省邵阳市新邵县", lng: 111.433, lat: 27.333, description: "峡谷生态景区，溶洞、瀑布、溪流，自然风光秀美", recommend: 8 },
{ name: "隆回大花瑶虎形山景区", type: "4A级景区", address: "湖南省邵阳市隆回县", lng: 110.933, lat: 27.333, description: "瑶族聚居区，民俗文化浓郁，梯田、花海风光秀美", recommend: 9 },
{ name: "蔡锷故里景区", type: "4A级景区", address: "湖南省邵阳市大祥区", lng: 111.473, lat: 27.223, description: "纪念蔡锷将军，历史文化景区，文化底蕴深厚", recommend: 8 },
{ name: "洞口县古楼驿生态文化旅游区", type: "4A级景区", address: "湖南省邵阳市洞口县", lng: 110.533, lat: 27.033, description: "生态文化景区，古驿道、山林风光，休闲观光佳选", recommend: 7 },
{ name: "雪峰山国家森林公园", type: "4A级景区", address: "湖南省邵阳市洪江市", lng: 110.133, lat: 27.333, description: "国家级森林公园，雪峰山风光秀美，避暑休闲佳选", recommend: 8 },

// 岳阳市（14家）
{ name: "任弼时纪念馆", type: "4A级景区", address: "湖南省岳阳市汨罗市", lng: 113.033, lat: 28.733, description: "纪念任弼时同志，红色旅游景区，红色教育基地", recommend: 9 },
{ name: "君山野生荷花世界", type: "4A级景区", address: "湖南省岳阳市君山区", lng: 113.133, lat: 29.333, description: "大型荷花主题景区，夏季荷花盛开，风光绝美", recommend: 8 },
{ name: "平江纪念馆", type: "4A级景区", address: "湖南省岳阳市平江县", lng: 113.533, lat: 28.733, description: "红色旅游景区，纪念平江起义，红色教育基地", recommend: 8 },
{ name: "张谷英旅游区", type: "4A级景区", address: "湖南省岳阳市岳阳县", lng: 113.333, lat: 29.033, description: "古村落景区，张谷英村建筑独特，民俗文化浓郁", recommend: 9 },
{ name: "圣安寺", type: "4A级景区", address: "湖南省岳阳市岳阳楼区", lng: 113.183, lat: 29.333, description: "佛教文化寺庙，历史悠久，建筑恢宏，祈福观光佳选", recommend: 7 },
{ name: "平江石牛寨景区", type: "4A级景区", address: "湖南省岳阳市平江县", lng: 113.833, lat: 28.833, description: "丹霞地貌景区，玻璃桥、悬崖栈道惊险刺激，自然风光雄奇", recommend: 10 },
{ name: "天岳幕阜山景区", type: "4A级景区", address: "湖南省岳阳市平江县", lng: 113.933, lat: 28.933, description: "山地生态景区，幕阜山风光秀美，避暑休闲佳选", recommend: 9 },
{ name: "屈子文化园", type: "4A级景区", address: "湖南省岳阳市汨罗市", lng: 113.083, lat: 28.833, description: "纪念屈原，楚辞文化浓郁，文化观光佳选", recommend: 9 },
{ name: "湘阴洋沙湖旅游景区", type: "4A级景区", address: "湖南省岳阳市湘阴县", lng: 112.833, lat: 28.633, description: "湖泊旅游度假区，湖光山色秀美，休闲度假佳选", recommend: 8 },
{ name: "六五零一景区", type: "4A级景区", address: "湖南省岳阳市临湘市", lng: 113.433, lat: 29.433, description: "军事主题景区，地下军事工程震撼，科普观光佳选", recommend: 8 },
{ name: "左宗棠文化园", type: "4A级景区", address: "湖南省岳阳市湘阴县", lng: 112.883, lat: 28.683, description: "纪念左宗棠，历史文化景区，文化底蕴深厚", recommend: 8 },
{ name: "五尖山国家森林公园", type: "4A级景区", address: "湖南省岳阳市临湘市", lng: 113.483, lat: 29.483, description: "国家级森林公园，森林茂密，休闲观光佳选", recommend: 7 },
{ name: "平江起义纪念馆", type: "4A级景区", address: "湖南省岳阳市平江县", lng: 113.583, lat: 28.783, description: "纪念平江起义，红色旅游经典景区，红色教育基地", recommend: 9 },
{ name: "团湖荷花公园", type: "4A级景区", address: "湖南省岳阳市君山区", lng: 113.183, lat: 29.383, description: "荷花主题公园，荷花品种繁多，夏季赏花佳选", recommend: 7 },

// 常德市（14家）
{ name: "柳叶湖旅游度假区", type: "4A级景区", address: "湖南省常德市武陵区", lng: 111.733, lat: 29.033, description: "城市湖泊度假区，柳叶湖风光秀美，休闲观光、水上娱乐兼具", recommend: 9 },
{ name: "清水湖旅游度假区", type: "4A级景区", address: "湖南省常德市汉寿县", lng: 111.933, lat: 28.833, description: "湖泊旅游度假区，配套酒店、高尔夫，高端度假佳选", recommend: 8 },
{ name: "夹山国家森林公园", type: "4A级景区", address: "湖南省常德市石门县", lng: 111.333, lat: 29.533, description: "国家级森林公园，森林茂密，有夹山寺，宗教与生态结合", recommend: 8 },
{ name: "花岩溪国家森林公园", type: "4A级景区", address: "湖南省常德市鼎城区", lng: 111.633, lat: 28.733, description: "国家级森林公园，森林茂密，湖泊秀美，休闲观光佳选", recommend: 7 },
{ name: "常德规划展示馆", type: "4A级景区", address: "湖南省常德市武陵区", lng: 111.783, lat: 29.033, description: "展示常德城市规划，高科技展示手段，了解城市发展", recommend: 6 },
{ name: "城头山旅游景区", type: "4A级景区", address: "湖南省常德市澧县", lng: 111.733, lat: 29.633, description: "城头山古文化遗址，历史价值极高，考古与观光兼具", recommend: 9 },
{ name: "林伯渠故居景区", type: "4A级景区", address: "湖南省常德市临澧县", lng: 111.733, lat: 29.433, description: "纪念林伯渠同志，红色旅游景区，红色教育基地", recommend: 8 },
{ name: "彭山景区", type: "4A级景区", address: "湖南省常德市澧县", lng: 111.833, lat: 29.683, description: "山地生态景区，彭山风光秀美，休闲观光佳选", recommend: 7 },
{ name: "枫林花海景区", type: "4A级景区", address: "湖南省常德市桃源县", lng: 111.433, lat: 28.933, description: "花海主题景区，四季花海各异，休闲观光佳选", recommend: 8 },
{ name: "卡乐星球旅游景区", type: "4A级景区", address: "湖南省常德市武陵区", lng: 111.783, lat: 29.083, description: "大型主题乐园，游乐设施丰富，适合年轻群体与亲子游玩", recommend: 9 },
{ name: "石门龙王洞景区", type: "4A级景区", address: "湖南省常德市石门县", lng: 111.233, lat: 29.633, description: "溶洞景区，洞内钟乳石奇特，景观绝美", recommend: 8 },
{ name: "津市绿岛蓝湾景区", type: "4A级景区", address: "湖南省常德市津市市", lng: 111.833, lat: 29.633, description: "滨湖生态景区，绿岛蓝湾风光秀美，休闲观光佳选", recommend: 7 },
{ name: "桃花源旅游管理区（配套区）", type: "4A级景区", address: "湖南省常德市桃源县", lng: 111.333, lat: 28.833, description: "桃花源景区配套区域，田园风光秀美，民俗文化浓郁", recommend: 8 },
{ name: "夷望溪景区", type: "4A级景区", address: "湖南省常德市桃源县", lng: 111.433, lat: 28.733, description: "溪流生态景区，夷望溪风光秀美，游船观光佳选", recommend: 8 },

// 张家界市（14家）
{ name: "黄龙洞旅游区", type: "4A级景区", address: "湖南省张家界市武陵源区", lng: 110.433, lat: 29.233, description: "喀斯特溶洞景区，洞内景观奇幻，被誉为“中华最佳洞府”", recommend: 10 },
{ name: "宝峰湖旅游区", type: "4A级景区", address: "湖南省张家界市武陵源区", lng: 110.483, lat: 29.203, description: "高山湖泊景区，湖光山色秀美，游船观光佳选", recommend: 9 },
{ name: "土家风情园", type: "4A级景区", address: "湖南省张家界市永定区", lng: 110.483, lat: 29.133, description: "土家族民俗文化景区，吊脚楼、摆手舞，民俗体验丰富", recommend: 8 },
{ name: "江垭温泉度假村", type: "4A级景区", address: "湖南省张家界市慈利县", lng: 110.833, lat: 29.433, description: "温泉度假景区，温泉水质优良，休闲养生佳选", recommend: 8 },
{ name: "万福温泉国际旅游度假区", type: "4A级景区", address: "湖南省张家界市慈利县", lng: 110.883, lat: 29.383, description: "高端温泉度假区，配套完善，休闲养生佳选", recommend: 8 },
{ name: "张家界龙王洞旅游区", type: "4A级景区", address: "湖南省张家界市慈利县", lng: 110.933, lat: 29.483, description: "溶洞景区，洞内钟乳石奇特，景观秀美", recommend: 7 },
{ name: "张家界大峡谷", type: "4A级景区", address: "湖南省张家界市慈利县", lng: 110.733, lat: 29.233, description: "峡谷生态景区，玻璃桥惊险刺激，自然风光雄奇", recommend: 10 },
{ name: "贺龙纪念馆", type: "4A级景区", address: "湖南省张家界市桑植县", lng: 110.133, lat: 29.433, description: "纪念贺龙元帅，红色旅游景区，红色教育基地", recommend: 9 },
{ name: "溪布老街非遗文化体验基地", type: "4A级景区", address: "湖南省张家界市武陵源区", lng: 110.473, lat: 29.213, description: "非遗文化街区，土家族民俗体验、特色美食齐聚", recommend: 8 },
{ name: "桑植九天峰恋景区", type: "4A级景区", address: "湖南省张家界市桑植县", lng: 110.033, lat: 29.533, description: "山地生态景区，山峰秀美，溪流瀑布，生态绝佳", recommend: 8 },
{ name: "中国工农红军第二方面军长征出发地景区", type: "4A级景区", address: "湖南省张家界市桑植县", lng: 110.183, lat: 29.483, description: "红色旅游景区，长征出发地，红色教育基地", recommend: 9 },
{ name: "张家界地缝景区", type: "4A级景区", address: "湖南省张家界市慈利县", lng: 110.783, lat: 29.283, description: "地缝峡谷景区，峡谷幽深，自然风光独特", recommend: 9 },
{ name: "九天洞景区", type: "4A级景区", address: "湖南省张家界市桑植县", lng: 109.933, lat: 29.583, description: "大型溶洞景区，洞内景观丰富，地质奇观独特", recommend: 8 },
{ name: "峰恋溪景区", type: "4A级景区", address: "湖南省张家界市武陵源区", lng: 110.533, lat: 29.233, description: "溪流生态景区，溪流潺潺，山林叠翠，休闲观光佳选", recommend: 7 },

// 益阳市（10家）
{ name: "益阳奥林匹克公园", type: "4A级景区", address: "湖南省益阳市赫山区", lng: 112.333, lat: 28.533, description: "城市体育公园，配套完善，休闲健身、观光兼具", recommend: 7 },
{ name: "山乡巨变第一村旅游区", type: "4A级景区", address: "湖南省益阳市赫山区", lng: 112.433, lat: 28.583, description: "乡村旅游景区，展现乡村巨变，田园风光秀美", recommend: 8 },
{ name: "安化茶马古道风景区", type: "4A级景区", address: "湖南省益阳市安化县", lng: 110.933, lat: 28.333, description: "茶马古道遗址，山林秀美，体验马帮文化", recommend: 9 },
{ name: "安化云台山景区", type: "4A级景区", address: "湖南省益阳市安化县", lng: 111.233, lat: 28.233, description: "山地生态景区，云台山风光秀美，茶旅融合", recommend: 8 },
{ name: "天意木国景区", type: "4A级景区", address: "湖南省益阳市赫山区", lng: 112.383, lat: 28.533, description: "木雕文化景区，各类木雕作品精美，观赏价值高", recommend: 7 },
{ name: "安化县百花寨景区", type: "4A级景区", address: "湖南省益阳市安化县", lng: 111.033, lat: 28.383, description: "花海生态景区，百花盛开，休闲观光佳选", recommend: 7 },
{ name: "青云洞・云上九歌溶洞景区", type: "4A级景区", address: "湖南省益阳市安化县", lng: 111.133, lat: 28.283, description: "溶洞景区，洞内景观奇特，配套演艺表演", recommend: 8 },
{ name: "桃花江竹海景区", type: "4A级景区", address: "湖南省益阳市桃江县", lng: 112.133, lat: 28.533, description: "万亩竹海景区，竹林茂密，休闲观光佳选", recommend: 8 },
{ name: "茶乡花海生态文化体验园", type: "4A级景区", address: "湖南省益阳市安化县", lng: 111.183, lat: 28.333, description: "茶旅融合景区，茶园与花海结合，休闲体验丰富", recommend: 7 },
{ name: "梅山文化生态园", type: "4A级景区", address: "湖南省益阳市安化县", lng: 111.083, lat: 28.433, description: "梅山文化景区，民俗文化浓郁，休闲观光佳选", recommend: 7 },

// 郴州市（18家）
{ name: "苏仙岭旅游区", type: "4A级景区", address: "湖南省郴州市苏仙区", lng: 113.033, lat: 25.783, description: "道教文化名山，苏仙岭风光秀美，历史文化底蕴深厚", recommend: 9 },
{ name: "汝城福泉山庄", type: "4A级景区", address: "湖南省郴州市汝城县", lng: 113.633, lat: 25.533, description: "温泉度假景区，温泉水质优良，休闲养生佳选", recommend: 8 },
{ name: "莽山国家森林公园", type: "4A级景区", address: "湖南省郴州市宜章县", lng: 112.933, lat: 25.333, description: "国家级森林公园，森林茂密，瀑布成群，生态绝佳", recommend: 10 },
{ name: "万华岩旅游区", type: "4A级景区", address: "湖南省郴州市北湖区", lng: 112.833, lat: 25.733, description: "溶洞景区，洞内钟乳石奇特，景观秀美", recommend: 8 },
{ name: "王仙岭旅游区", type: "4A级景区", address: "湖南省郴州市苏仙区", lng: 113.083, lat: 25.733, description: "山地生态景区，瀑布溪流，休闲观光佳选", recommend: 7 },
{ name: "九龙江国家森林公园", type: "4A级景区", address: "湖南省郴州市汝城县", lng: 113.833, lat: 25.433, description: "国家级森林公园，森林茂密，生态绝佳", recommend: 8 },
{ name: "宝山工矿旅游景区", type: "4A级景区", address: "湖南省郴州市桂阳县", lng: 112.733, lat: 25.733, description: "工业旅游景区，展现采矿文化，科普与观光兼具", recommend: 7 },
{ name: "飞天山国家地质公园", type: "4A级景区", address: "湖南省郴州市苏仙区", lng: 113.183, lat: 25.633, description: "丹霞地貌景区，自然风光雄奇，地质科普佳选", recommend: 9 },
{ name: "安仁稻田公园", type: "4A级景区", address: "湖南省郴州市安仁县", lng: 113.233, lat: 26.733, description: "稻田主题景区，田园风光秀美，休闲观光佳选", recommend: 7 },
{ name: "永兴板梁古村旅游区", type: "4A级景区", address: "湖南省郴州市永兴县", lng: 113.283, lat: 26.133, description: "古村落景区，板梁古村建筑独特，民俗文化浓郁", recommend: 8 },
{ name: "西瑶绿谷旅游区", type: "4A级景区", address: "湖南省郴州市临武县", lng: 112.533, lat: 25.333, description: "生态旅游区，森林茂密，休闲观光佳选", recommend: 7 },
{ name: "汝城沙洲红色旅游景区", type: "4A级景区", address: "湖南省郴州市汝城县", lng: 113.683, lat: 25.483, description: "红色旅游景区，半条被子故事发生地，红色教育基地", recommend: 9 },
{ name: "天堂温泉景区", type: "4A级景区", address: "湖南省郴州市北湖区", lng: 112.933, lat: 25.783, description: "温泉度假景区，配套完善，休闲养生佳选", recommend: 8 },
{ name: "资兴回龙山景区", type: "4A级景区", address: "湖南省郴州市资兴市", lng: 113.433, lat: 25.933, description: "山地生态景区，回龙山风光秀美，云海、日出景观绝美", recommend: 9 },
{ name: "东江湖景区（配套区）", type: "4A级景区", address: "湖南省郴州市资兴市", lng: 113.333, lat: 25.983, description: "东江湖配套景区，湖光山色秀美，休闲观光佳选", recommend: 8 },
{ name: "便江风景区", type: "4A级景区", address: "湖南省郴州市永兴县", lng: 113.133, lat: 26.233, description: "溪流生态景区，便江风光秀美，游船观光佳选", recommend: 8 },
{ name: "阳山古村景区", type: "4A级景区", address: "湖南省郴州市桂阳县", lng: 112.783, lat: 25.683, description: "古村落景区，阳山古村建筑独特，民俗文化浓郁", recommend: 7 },

// 永州市（19家）
{ name: "九嶷山舜帝陵景区", type: "4A级景区", address: "湖南省永州市宁远县", lng: 111.733, lat: 25.333, description: "纪念舜帝，历史文化底蕴深厚，祈福观光佳选", recommend: 9 },
{ name: "祁阳浯溪碑林景区", type: "4A级景区", address: "湖南省永州市祁阳市", lng: 111.833, lat: 26.533, description: "碑林文化景区，历代碑刻众多，文化价值极高", recommend: 9 },
{ name: "双牌阳明山旅游区", type: "4A级景区", address: "湖南省永州市双牌县", lng: 111.633, lat: 26.133, description: "山地生态景区，阳明山风光秀美，避暑休闲佳选", recommend: 9 },
{ name: "柳宗元文化旅游区", type: "4A级景区", address: "湖南省永州市零陵区", lng: 111.633, lat: 26.233, description: "纪念柳宗元，历史文化景区，文化底蕴深厚", recommend: 8 },
{ name: "东安舜皇山旅游区", type: "4A级景区", address: "湖南省永州市东安县", lng: 111.333, lat: 26.433, description: "山地生态景区，舜皇山风光秀美，生态绝佳", recommend: 8 },
{ name: "桐子坳景区", type: "4A级景区", address: "湖南省永州市双牌县", lng: 111.733, lat: 26.033, description: "银杏主题景区，秋季银杏金黄，风光绝美", recommend: 9 },
{ name: "江永勾蓝瑶寨景区", type: "4A级景区", address: "湖南省永州市江永县", lng: 111.333, lat: 25.333, description: "瑶族古村落，民俗文化浓郁，休闲观光佳选", recommend: 8 },
{ name: "零陵东山景区", type: "4A级景区", address: "湖南省永州市零陵区", lng: 111.683, lat: 26.283, description: "山地文化景区，东山风光秀美，历史文化底蕴深厚", recommend: 7 },
{ name: "蓝山云冰山景区", type: "4A级景区", address: "湖南省永州市蓝山县", lng: 112.133, lat: 25.033, description: "山地生态景区，云冰山风光秀美，云海、雾凇景观绝美", recommend: 9 },
{ name: "宁远下灌旅游区", type: "4A级景区", address: "湖南省永州市宁远县", lng: 111.833, lat: 25.433, description: "古村落景区，下灌村建筑独特，民俗文化浓郁", recommend: 8 },
{ name: "道县濂溪故里景区", type: "4A级景区", address: "湖南省永州市道县", lng: 111.533, lat: 25.533, description: "纪念周敦颐，历史文化景区，文化底蕴深厚", recommend: 8 },
{ name: "陈树湘红色文化园", type: "4A级景区", address: "湖南省永州市道县", lng: 111.583, lat: 25.483, description: "纪念陈树湘烈士，红色旅游景区，红色教育基地", recommend: 9 },
{ name: "祁阳市石洞源景区", type: "4A级景区", address: "湖南省永州市祁阳市", lng: 111.933, lat: 26.633, description: "生态文化景区，石洞源风光秀美，休闲观光佳选", recommend: 7 },
{ name: "新田龙家大院景区", type: "4A级景区", address: "湖南省永州市新田县", lng: 112.233, lat: 25.833, description: "古村落景区，龙家大院建筑独特，民俗文化浓郁", recommend: 7 },
{ name: "金洞三公垒瀑布群景区", type: "4A级景区", address: "湖南省永州市祁阳市", lng: 111.733, lat: 26.183, description: "瀑布群景区，三级瀑布景观绝美，生态绝佳", recommend: 8 },
{ name: "双牌青龙岩景区", type: "4A级景区", address: "湖南省永州市双牌县", lng: 111.583, lat: 26.083, description: "溶洞景区，洞内钟乳石奇特，景观秀美", recommend: 8 },
{ name: "千家峒景区", type: "4A级景区", address: "湖南省永州市江永县", lng: 111.233, lat: 25.233, description: "瑶族聚居区，民俗文化浓郁，休闲观光佳选", recommend: 8 },
{ name: "柳子庙景区", type: "4A级景区", address: "湖南省永州市零陵区", lng: 111.633, lat: 26.233, description: "纪念柳宗元，历史文化景区，文化底蕴深厚", recommend: 8 },
{ name: "周家大院景区", type: "4A级景区", address: "湖南省永州市零陵区", lng: 111.533, lat: 26.333, description: "古村落景区，周家大院建筑独特，民俗文化浓郁", recommend: 7 },

// 怀化市（23家）
{ name: "中国人民抗日战争胜利受降纪念馆", type: "4A级景区", address: "湖南省怀化市芷江县", lng: 109.733, lat: 27.433, description: "纪念抗战胜利受降，红色旅游经典景区，红色教育基地", recommend: 10 },
{ name: "通道万佛山风景名胜区", type: "4A级景区", address: "湖南省怀化市通道侗族自治县", lng: 109.733, lat: 26.133, description: "丹霞地貌景区，万佛山风光秀美，生态绝佳", recommend: 9 },
{ name: "黔阳古城", type: "4A级景区", address: "湖南省怀化市洪江市", lng: 110.133, lat: 27.333, description: "千年古城，保留明清建筑，民俗文化浓郁", recommend: 9 },
{ name: "洪江古商城", type: "4A级景区", address: "湖南省怀化市洪江市", lng: 110.183, lat: 27.283, description: "明清商城遗址，古建筑保存完好，商业文化浓郁", recommend: 10 },
{ name: "通道皇都侗文化村旅游区", type: "4A级景区", address: "湖南省怀化市通道侗族自治县", lng: 109.633, lat: 26.233, description: "侗族聚居区，民俗文化浓郁，休闲观光佳选", recommend: 8 },
{ name: "沅陵凤滩景区", type: "4A级景区", address: "湖南省怀化市沅陵县", lng: 110.333, lat: 28.433, description: "水利生态景区，凤滩水电站风光秀美，休闲观光佳选", recommend: 7 },
{ name: "通道转兵纪念地", type: "4A级景区", address: "湖南省怀化市通道侗族自治县", lng: 109.783, lat: 26.333, description: "红色旅游景区，通道转兵旧址，红色教育基地", recommend: 9 },
{ name: "通道芋头古侗寨景区", type: "4A级景区", address: "湖南省怀化市通道侗族自治县", lng: 109.533, lat: 26.183, description: "侗族古村落，建筑独特，民俗文化浓郁", recommend: 8 },
{ name: "黄岩生态旅游区", type: "4A级景区", address: "湖南省怀化市鹤城区", lng: 109.933, lat: 27.533, description: "山地生态景区，黄岩风光秀美，休闲观光佳选", recommend: 7 },
{ name: "溆浦穿岩山景区", type: "4A级景区", address: "湖南省怀化市溆浦县", lng: 110.733, lat: 27.933, description: "山地生态景区，穿岩山风光秀美，休闲观光佳选", recommend: 8 },
{ name: "九丰现代农博园景区", type: "4A级景区", address: "湖南省怀化市鹤城区", lng: 109.883, lat: 27.583, description: "现代农业观光园，科普与观光兼具", recommend: 7 },
{ name: "靖州飞山景区", type: "4A级景区", address: "湖南省怀化市靖州苗族侗族自治县", lng: 109.633, lat: 26.533, description: "山地文化景区，飞山风光秀美，宗教文化浓郁", recommend: 7 },
{ name: "会同粟裕故里景区", type: "4A级景区", address: "湖南省怀化市会同县", lng: 109.733, lat: 26.833, description: "纪念粟裕大将，红色旅游景区，红色教育基地", recommend: 9 },
{ name: "新晃龙溪古镇景区", type: "4A级景区", address: "湖南省怀化市新晃侗族自治县", lng: 109.133, lat: 27.333, description: "侗族古村落，民俗文化浓郁，休闲观光佳选", recommend: 7 },
{ name: "沅陵龙兴讲寺景区", type: "4A级景区", address: "湖南省怀化市沅陵县", lng: 110.433, lat: 28.483, description: "佛教文化寺庙，历史悠久，建筑恢宏", recommend: 8 },
{name: "麻阳代远文化旅游景区", type: "4A 级景区", address: "湖南省怀化市麻阳苗族自治县", lng: 109.833, lat: 27.733, description: "纪念滕代远同志，红色旅游与民俗文化结合，文化底蕴深厚", recommend: 8},
{ name: "中方荆坪古村景区", type: "4A 级景区", address: "湖南省怀化市中方县", lng: 109.933, lat: 27.433, description: "古村落景区，荆坪古村建筑独特，民俗文化浓郁", recommend: 8 },
{ name: "会同高椅古村景区", type: "4A 级景区", address: "湖南省怀化市会同县", lng: 109.833, lat: 26.933, description: "侗族古村落，高椅古村建筑独特，民俗文化浓郁", recommend: 9 },
{ name: "沅陵二酉山景区", type: "4A 级景区", address: "湖南省怀化市沅陵县", lng: 110.533, lat: 28.633, description: "历史文化名山，二酉山风光秀美，文化底蕴深厚", recommend: 8 },
{ name: "辰溪酉庄・大酉书院景区", type: "4A 级景区", address: "湖南省怀化市辰溪县", lng: 110.133, lat: 28.033, description: "书院文化景区，大酉书院历史悠久，文化底蕴深厚", recommend: 7 },
{ name: "思蒙碧水丹霞景区", type: "4A 级景区", address: "湖南省怀化市溆浦县", lng: 110.533, lat: 27.983, description: "丹霞地貌景区，碧水丹霞风光秀美，休闲观光佳选", recommend: 8 },
{ name: "岩门古堡寨景区", type: "4A 级景区", address: "湖南省怀化市麻阳苗族自治县", lng: 109.783, lat: 27.833, description: "古堡寨景区，建筑独特，历史文化底蕴深厚", recommend: 7 },
{ name: "黔中郡遗址景区", type: "4A 级景区", address: "湖南省怀化市沅陵县", lng: 110.483, lat: 28.533, description: "黔中郡遗址，历史价值极高，考古与观光兼具", recommend: 8 },
// 娄底市（9 家）
{name: "梅山龙宫景区", type: "4A 级景区", address: "湖南省娄底市新化县", lng: 111.233, lat: 27.733, description: "喀斯特溶洞景区，洞内景观奇幻，被誉为 “亚洲最美溶洞”", recommend: 10 },
{ name: "双峰曾国藩故居旅游区", type: "4A 级景区", address: "湖南省娄底市双峰县", lng: 112.033, lat: 27.433, description: "曾国藩故居，历史文化底蕴深厚，建筑恢宏", recommend: 9 },
{ name: "紫鹊界梯田景区", type: "4A 级景区", address: "湖南省娄底市新化县", lng: 111.433, lat: 27.833, description: "世界灌溉工程遗产，梯田层叠，四季风光各异", recommend: 10 },
{ name: "湄江旅游区", type: "4A 级景区", address: "湖南省娄底市涟源市", lng: 111.633, lat: 27.733, description: "山水生态景区，湄江风光秀美，休闲观光佳选", recommend: 8 },
{ name: "三联峒景区", type: "4A 级景区", address: "湖南省娄底市新化县", lng: 111.333, lat: 27.933, description: "山地生态景区，瀑布溪流，休闲观光佳选", recommend: 8 },
{ name: "新化大熊山景区", type: "4A 级景区", address: "湖南省娄底市新化县", lng: 111.133, lat: 28.133, description: "国家级森林公园，森林茂密，有大熊山，生态绝佳", recommend: 9 },
{ name: "蔡和森同志纪念馆・故居景区", type: "4A 级景区", address: "湖南省娄底市双峰县", lng: 112.083, lat: 27.483, description: "纪念蔡和森同志，红色旅游景区，红色教育基地", recommend: 9 },
{ name: "涟源龙山景区", type: "4A 级景区", address: "湖南省娄底市涟源市", lng: 111.733, lat: 27.633, description: "山地生态景区，龙山风光秀美，休闲观光佳选", recommend: 7 },
{ name: "博盛生态体验园景区", type: "4A 级景区", address: "湖南省娄底市涟源市", lng: 111.683, lat: 27.683, description: "生态体验园，休闲游乐、亲子互动兼具", recommend: 7 },
// 湘西土家族苗族自治州（15 家）
{name: "凤凰古城旅游区", type: "4A 级景区", address: "湖南省湘西州凤凰县", lng: 109.433, lat: 27.933, description: "中国最美古城之一，沱江穿城而过，古建筑保存完好", recommend: 10},
{ name: "乾州古城景区", type: "4A 级景区", address: "湖南省湘西州吉首市", lng: 109.733, lat: 28.333, description: "千年古城，民俗文化浓郁，休闲观光佳选", recommend: 8 },
{ name: "南华山神凤文化景区", type: "4A 级景区", address: "湖南省湘西州凤凰县", lng: 109.483, lat: 27.983, description: "神凤文化主题景区，南华山风光秀美，文化特色鲜明", recommend: 7 },
{ name: "猛洞河漂流景区", type: "4A 级景区", address: "湖南省湘西州永顺县", lng: 109.833, lat: 29.033, description: "漂流主题景区，猛洞河水流湍急，惊险刺激", recommend: 9 },
{ name: "芙蓉镇景区", type: "4A 级景区", address: "湖南省湘西州永顺县", lng: 109.883, lat: 28.833, description: "挂在瀑布上的古镇，自然风光与民俗文化结合", recommend: 10 },
{ name: "红石林景区", type: "4A 级景区", address: "湖南省湘西州古丈县", lng: 109.933, lat: 28.633, description: "红色石林地貌，景观独特，地质科普佳选", recommend: 9 },
{ name: "凤凰奇梁洞景区", type: "4A 级景区", address: "湖南省湘西州凤凰县", lng: 109.383, lat: 27.883, description: "溶洞景区，洞内景观奇幻，休闲观光佳选", recommend: 8 },
{ name: "浦市古镇景区", type: "4A 级景区", address: "湖南省湘西州泸溪县", lng: 109.833, lat: 28.533, description: "千年古镇，民俗文化浓郁，休闲观光佳选", recommend: 8 },
{ name: "湘西自治州老司城景区", type: "4A 级景区", address: "湖南省湘西州永顺县", lng: 109.733, lat: 28.933, description: "世界文化遗产，老司城遗址，历史价值极高", recommend: 9 },
{ name: "湘西州里耶古城景区", type: "4A 级景区", address: "湖南省湘西州龙山县", lng: 109.433, lat: 29.633, description: "秦代古城遗址，历史价值极高，考古与观光兼具", recommend: 9 },
{ name: "湘西民族文化园景区", type: "4A 级景区", address: "湖南省湘西州吉首市", lng: 109.783, lat: 28.383, description: "民族文化园区，展现湘西各民族文化，休闲观光佳选", recommend: 7 },
{ name: "湘西龙山县太平山景区", type: "4A 级景区", address: "湖南省湘西州龙山县", lng: 109.483, lat: 29.433, description: "山地生态景区，太平山风光秀美，休闲观光佳选", recommend: 7 },
{ name: "湘西凤凰县中华大熊猫苑", type: "4A 级景区", address: "湖南省湘西州凤凰县", lng: 109.433, lat: 27.833, description: "大熊猫饲养与观赏景区，亲子科普佳选", recommend: 8 },
{ name: "湘西泸溪县沅水画壁景区", type: "4A 级景区", address: "湖南省湘西州泸溪县", lng: 109.933, lat: 28.433, description: "沅江沿岸景区，石壁风光秀美，休闲观光佳选", recommend: 8 },
{ name: "湘西州德夯大峡谷景区（配套区）", type: "4A 级景区", address: "湖南省湘西州吉首市", lng: 109.633, lat: 28.233, description: "德夯大峡谷配套景区，自然风光雄奇", recommend: 9 },
];
        
        const ancientData = [
           /* ===== 古遗址 ===== */

{
  name: "曲回寺石像冢",
  type: "古遗址",
  year: "唐",
  address: "山西省大同市灵丘县",
  lng: 114.2368,
  lat: 39.4386,
  description: "唐代佛教石刻遗存，反映了北方地区佛教艺术的发展。",
  recommend: "7"
},
{
  name: "平城遗址",
  type: "古遗址",
  year: "北魏",
  address: "山西省大同市平城区",
  lng: 113.3001,
  lat: 40.0757,
  description: "北魏都城遗址，是研究北魏政治、军事与城市规划的重要实证。",
  recommend: "10"
},
{
  name: "许家窑遗址",
  type: "古遗址",
  year: "旧石器时代",
  address: "山西省大同市阳高县",
  lng: 113.7485,
  lat: 40.3612,
  description: "华北地区重要的旧石器时代人类活动遗址。",
  recommend: "9"
},
{
  name: "塔水河遗址",
  type: "古遗址",
  year: "旧石器时代",
  address: "山西省晋城市陵川县",
  lng: 113.3164,
  lat: 35.7918,
  description: "太行山区旧石器时代人类生存活动的重要见证。",
  recommend: "8"
},
{
  name: "洪山窑址",
  type: "古遗址",
  year: "宋",
  address: "山西省晋中市介休市",
  lng: 111.9132,
  lat: 37.0284,
  description: "宋代重要瓷器烧造遗址，反映北方制瓷工艺水平。",
  recommend: "8"
},
{
  name: "旌介遗址",
  type: "古遗址",
  year: "商",
  address: "山西省晋中市灵石县",
  lng: 111.7775,
  lat: 36.8471,
  description: "商代聚落遗址，对研究早期社会结构具有价值。",
  recommend: "7"
},
{
  name: "梁村遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省晋中市祁县",
  lng: 112.3356,
  lat: 37.3589,
  description: "新石器时代聚落遗址，反映农业与定居生活。",
  recommend: "7"
},
{
  name: "侯马晋国遗址",
  type: "古遗址",
  year: "东周",
  address: "山西省临汾市侯马市",
  lng: 111.3717,
  lat: 35.6229,
  description: "晋国晚期都城遗址，是晋文化研究核心区域。",
  recommend: "10"
},
{
  name: "霍州窑址",
  type: "古遗址",
  year: "宋",
  address: "山西省临汾市霍州市",
  lng: 111.7234,
  lat: 36.5672,
  description: "宋代窑业遗址，体现当时陶瓷生产体系。",
  recommend: "8"
},
{
  name: "柿子滩遗址",
  type: "古遗址",
  year: "旧石器时代",
  address: "山西省临汾市吉县",
  lng: 110.6815,
  lat: 36.1034,
  description: "黄河流域重要的旧石器时代遗址群。",
  recommend: "9"
},
{
  name: "曲村-天马遗址",
  type: "古遗址",
  year: "周",
  address: "山西省临汾市曲沃县",
  lng: 111.4698,
  lat: 35.6412,
  description: "西周至春秋时期晋国核心遗址。",
  recommend: "10"
},
{
  name: "丁村遗址",
  type: "古遗址",
  year: "旧石器时代",
  address: "山西省临汾市襄汾县",
  lng: 111.4415,
  lat: 35.8742,
  description: "中国旧石器时代考古的标志性遗址。",
  recommend: "10"
},
{
  name: "陶寺遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省临汾市襄汾县",
  lng: 111.4486,
  lat: 35.8769,
  description: "被认为与早期国家文明密切相关的重要遗址。",
  recommend: "10"
},
{
  name: "大河口遗址",
  type: "古遗址",
  year: "西周至春秋",
  address: "山西省临汾市翼城县",
  lng: 111.7196,
  lat: 35.7391,
  description: "西周至春秋时期的重要城邑与墓地遗址。",
  recommend: "9"
},
{
  name: "南梁古城遗址",
  type: "古遗址",
  year: "周",
  address: "山西省临汾市翼城县",
  lng: 111.7012,
  lat: 35.7214,
  description: "周代城址遗存，具有防御与居住功能。",
  recommend: "8"
},
{
  name: "苇沟-北寿城遗址",
  type: "古遗址",
  year: "周",
  address: "山西省临汾市翼城县",
  lng: 111.7348,
  lat: 35.7523,
  description: "周代城防体系的重要组成部分。",
  recommend: "8"
},
{
  name: "南村城址",
  type: "古遗址",
  year: "战国至汉",
  address: "山西省吕梁市方山县",
  lng: 111.2469,
  lat: 37.8952,
  description: "战国至汉代的区域性城址遗存。",
  recommend: "7"
},
{
  name: "碧村遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省吕梁市兴县",
  lng: 111.1324,
  lat: 38.4637,
  description: "新石器时代人类聚落遗址。",
  recommend: "7"
},
{
  name: "峙峪遗址",
  type: "古遗址",
  year: "旧石器时代",
  address: "山西省朔州市朔城区",
  lng: 112.4321,
  lat: 39.3314,
  description: "华北旧石器时代考古的重要发现。",
  recommend: "9"
},
{
  name: "童子寺遗址",
  type: "古遗址",
  year: "北齐至唐",
  address: "山西省太原市晋源区",
  lng: 112.4495,
  lat: 37.7071,
  description: "佛教建筑遗址，反映佛教传播历史。",
  recommend: "8"
},
{
  name: "蒙山开化寺遗址",
  type: "古遗址",
  year: "北齐",
  address: "山西省太原市晋源区",
  lng: 112.4458,
  lat: 37.7039,
  description: "北齐时期大型佛教遗址。",
  recommend: "9"
},
{
  name: "古交遗址",
  type: "古遗址",
  year: "旧石器时代",
  address: "山西省太原市古交市",
  lng: 112.1745,
  lat: 37.9092,
  description: "旧石器时代人类活动遗址。",
  recommend: "7"
},
{
  name: "晋阳古城遗址",
  type: "古遗址",
  year: "春秋至五代",
  address: "山西省太原市晋源区",
  lng: 112.4487,
  lat: 37.7082,
  description: "太原城市发展的历史源头。",
  recommend: "10"
},
{
  name: "娄烦古城遗址",
  type: "古遗址",
  year: "东周",
  address: "山西省太原市娄烦县",
  lng: 111.7934,
  lat: 38.0651,
  description: "东周时期北方城址遗存。",
  recommend: "7"
},
{
  name: "汾阳宫遗址",
  type: "古遗址",
  year: "隋",
  address: "山西省忻州市宁武县",
  lng: 112.3076,
  lat: 39.0021,
  description: "隋代皇家宫殿遗址。",
  recommend: "8"
},
{
  name: "玉壁城遗址",
  type: "古遗址",
  year: "北朝",
  address: "山西省运城市稷山县",
  lng: 110.9798,
  lat: 35.6013,
  description: "北朝时期军事防御城址。",
  recommend: "7"
},
{
  name: "周家庄遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省运城市绛县",
  lng: 111.5764,
  lat: 35.4907,
  description: "新石器时代聚落遗址。",
  recommend: "7"
},
{
  name: "程村遗址",
  type: "古遗址",
  year: "东周",
  address: "山西省运城市临猗县",
  lng: 110.7745,
  lat: 35.1482,
  description: "东周时期聚落遗址。",
  recommend: "7"
},
{
  name: "猗氏故城",
  type: "古遗址",
  year: "西汉",
  address: "山西省运城市临猗县",
  lng: 110.7702,
  lat: 35.1529,
  description: "西汉时期县城遗址。",
  recommend: "8"
},
{
  name: "下阳城遗址",
  type: "古遗址",
  year: "周",
  address: "山西省运城市平陆县",
  lng: 111.2098,
  lat: 34.8415,
  description: "周代城邑遗址。",
  recommend: "7"
},
{
  name: "虞国古城遗址",
  type: "古遗址",
  year: "周",
  address: "山西省运城市平陆县",
  lng: 111.2174,
  lat: 34.8468,
  description: "周代虞国都城遗址。",
  recommend: "9"
},
{
  name: "虞坂古盐道",
  type: "古遗址",
  year: "西周、明",
  address: "山西省运城市平陆县",
  lng: 111.2305,
  lat: 34.8582,
  description: "中国古代重要的盐业交通通道。",
  recommend: "9"
},
{
  name: "黄河栈道遗址",
  type: "古遗址",
  year: "唐至清",
  address: "山西省运城市平陆县",
  lng: 111.1987,
  lat: 34.8326,
  description: "沿黄河修建的古代交通设施遗存。",
  recommend: "8"
},
{
  name: "坡头遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省运城市芮城县",
  lng: 110.7083,
  lat: 34.7132,
  description: "新石器时代人类活动遗址。",
  recommend: "7"
},
{
  name: "臣河遗址",
  type: "古遗址",
  year: "旧石器时代",
  address: "山西省运城市芮城县",
  lng: 110.6945,
  lat: 34.7018,
  description: "旧石器时代遗址，反映早期人类活动。",
  recommend: "8"
},
{
  name: "金胜庄遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省运城市芮城县",
  lng: 110.7216,
  lat: 34.7184,
  description: "新石器时代聚落遗址。",
  recommend: "7"
},
{
  name: "西侯度遗址",
  type: "古遗址",
  year: "旧石器时代",
  address: "山西省运城市芮城县",
  lng: 110.7129,
  lat: 34.7206,
  description: "中国最早用火证据的重要遗址之一。",
  recommend: "10"
},
{
  name: "东庄遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省运城市芮城县",
  lng: 110.7362,
  lat: 34.7261,
  description: "新石器时代文化遗存。",
  recommend: "7"
},
{
  name: "古魏城遗址",
  type: "古遗址",
  year: "周",
  address: "山西省运城市芮城县",
  lng: 110.7445,
  lat: 34.7318,
  description: "周代魏国早期城址遗存。",
  recommend: "8"
},
{
  name: "西王村遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省运城市芮城县",
  lng: 110.7284,
  lat: 34.7095,
  description: "新石器时代聚落遗址。",
  recommend: "7"
},
{
  name: "上郭城址和邱家庄墓群",
  type: "古遗址",
  year: "春秋战国",
  address: "山西省运城市闻喜县",
  lng: 111.2207,
  lat: 35.3618,
  description: "春秋战国时期城址与墓葬遗存。",
  recommend: "8"
},
{
  name: "禹王城遗址",
  type: "古遗址",
  year: "东周至汉",
  address: "山西省运城市夏县",
  lng: 111.2249,
  lat: 35.1457,
  description: "东周至汉代的重要城址遗存。",
  recommend: "8"
},
{
  name: "西阴村遗址",
  type: "古遗址",
  year: "新石器时代",
  address: "山西省运城市夏县",
  lng: 111.2336,
  lat: 35.1534,
  description: "仰韶文化重要遗址。",
  recommend: "9"
},
{
  name: "东下冯遗址",
  type: "古遗址",
  year: "新石器至商",
  address: "山西省运城市夏县",
  lng: 111.2418,
  lat: 35.1492,
  description: "跨新石器至商代的重要文化遗址。",
  recommend: "9"
},
{
  name: "蒲津渡与蒲州故城遗址",
  type: "古遗址",
  year: "唐至明",
  address: "山西省运城市永济市",
  lng: 110.4496,
  lat: 34.8721,
  description: "黄河重要渡口及古城遗址。",
  recommend: "10"
},
{
  name: "解梁故城遗址",
  type: "古遗址",
  year: "东周",
  address: "山西省运城市永济市",
  lng: 110.4582,
  lat: 34.8786,
  description: "东周时期城址遗存。",
  recommend: "8"
},

/* ===== 古墓葬 ===== */

{
  name: "栗毓美墓",
  type: "古墓葬",
  year: "清",
  address: "山西省大同市浑源县",
  lng: 113.6954,
  lat: 39.7032,
  description: "清代重要历史人物墓葬。",
  recommend: "7"
},
{
  name: "方山永固陵遗址",
  type: "古墓葬",
  year: "北魏",
  address: "山西省大同市平城区",
  lng: 113.3112,
  lat: 40.0904,
  description: "北魏帝王陵墓遗址。",
  recommend: "10"
},
{
  name: "沙岭墓群",
  type: "古墓葬",
  year: "北魏",
  address: "山西省大同市平城区",
  lng: 113.3256,
  lat: 40.0831,
  description: "北魏时期大型墓葬群。",
  recommend: "9"
},
{
  name: "沙梁坡汉墓群",
  type: "古墓葬",
  year: "汉",
  address: "山西省大同市天镇县",
  lng: 114.0926,
  lat: 40.4215,
  description: "汉代墓葬群，具有重要考古价值。",
  recommend: "8"
},
{
  name: "古城堡墓群",
  type: "古墓葬",
  year: "汉",
  address: "山西省大同市阳高县",
  lng: 113.7462,
  lat: 40.3558,
  description: "汉代墓葬群，反映北方地区汉代丧葬制度。",
  recommend: "7"
},
{
  name: "什贴墓群",
  type: "古墓葬",
  year: "南北朝",
  address: "山西省晋中市榆次区",
  lng: 112.7469,
  lat: 37.6942,
  description: "南北朝时期墓葬遗存，具有重要历史价值。",
  recommend: "7"
},
{
  name: "羊舌墓地",
  type: "古墓葬",
  year: "西周至春秋",
  address: "山西省临汾市曲沃县",
  lng: 111.4726,
  lat: 35.6469,
  description: "晋国贵族羊舌氏家族墓地。",
  recommend: "9"
},
{
  name: "陶寺北墓地",
  type: "古墓葬",
  year: "东周",
  address: "山西省临汾市襄汾县",
  lng: 111.4521,
  lat: 35.8804,
  description: "东周时期墓地，与陶寺遗址密切相关。",
  recommend: "8"
},
{
  name: "东龙观墓群",
  type: "古墓葬",
  year: "宋、金、元",
  address: "山西省吕梁市汾阳市",
  lng: 111.7836,
  lat: 37.2679,
  description: "宋金元时期墓葬群，体现多朝代延续性。",
  recommend: "7"
},
{
  name: "马茂庄汉墓群",
  type: "古墓葬",
  year: "东汉",
  address: "山西省吕梁市离石区",
  lng: 111.1327,
  lat: 37.5243,
  description: "东汉时期墓葬群，保存较为完整。",
  recommend: "7"
},
{
  name: "广武汉墓群",
  type: "古墓葬",
  year: "汉",
  address: "山西省朔州市山阴县",
  lng: 112.8164,
  lat: 39.5291,
  description: "汉代墓葬群，反映塞北地区汉文化影响。",
  recommend: "7"
},
{
  name: "王家峰墓群",
  type: "古墓葬",
  year: "南北朝",
  address: "山西省太原市迎泽区",
  lng: 112.5773,
  lat: 37.8556,
  description: "南北朝时期墓葬遗存。",
  recommend: "7"
},
{
  name: "山王墓地",
  type: "古墓葬",
  year: "西周",
  address: "山西省运城市河津市",
  lng: 110.7136,
  lat: 35.5968,
  description: "西周时期贵族墓地。",
  recommend: "8"
},
{
  name: "马村砖雕墓",
  type: "古墓葬",
  year: "宋、金",
  address: "山西省运城市稷山县",
  lng: 110.9754,
  lat: 35.6027,
  description: "以砖雕装饰闻名的宋金时期墓葬。",
  recommend: "9"
},
{
  name: "横北佣国墓地",
  type: "古墓葬",
  year: "西周",
  address: "山西省运城市绛县",
  lng: 111.5803,
  lat: 35.4972,
  description: "西周时期佣国贵族墓地。",
  recommend: "9"
},
{
  name: "薛嵩墓",
  type: "古墓葬",
  year: "唐",
  address: "山西省运城市夏县",
  lng: 111.2196,
  lat: 35.1419,
  description: "唐代名将薛嵩之墓。",
  recommend: "8"
},
{
  name: "司马光墓",
  type: "古墓葬",
  year: "北宋",
  address: "山西省运城市夏县",
  lng: 111.2238,
  lat: 35.1486,
  description: "北宋著名史学家司马光墓地。",
  recommend: "10"
},
{
  name: "崔家河墓群",
  type: "古墓葬",
  year: "东周",
  address: "山西省运城市夏县",
  lng: 111.2314,
  lat: 35.1521,
  description: "东周时期墓葬群。",
  recommend: "7"
},
{
  name: "冯古庄墓地",
  type: "古墓葬",
  year: "西周",
  address: "山西省运城市新绛县",
  lng: 111.2216,
  lat: 35.6129,
  description: "西周时期贵族墓地。",
  recommend: "8"
},
{
  name: "西周黎侯墓群",
  type: "古墓葬",
  year: "西周至春秋",
  address: "山西省长治市黎城县",
  lng: 113.3964,
  lat: 36.5087,
  description: "西周黎侯国君及贵族墓葬群。",
  recommend: "9"
},

/* ===== 古建筑 ===== */

{
  name: "水神堂",
  type: "古建筑",
  year: "明至清",
  address: "山西省大同市广灵县",
  lng: 114.2826,
  lat: 39.7614,
  description: "明清时期祭祀水神的宗教建筑。",
  recommend: "7"
},
{
  name: "浑源圆觉寺塔",
  type: "古建筑",
  year: "金",
  address: "山西省大同市浑源县",
  lng: 113.6981,
  lat: 39.7024,
  description: "金代砖塔建筑，造型挺拔。",
  recommend: "8"
},
{
  name: "律吕神祠",
  type: "古建筑",
  year: "元至清",
  address: "山西省大同市浑源县",
  lng: 113.6915,
  lat: 39.7049,
  description: "用于祭祀音律之神的古代祠庙建筑。",
  recommend: "7"
},
{
  name: "浑源文庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省大同市浑源县",
  lng: 113.6938,
  lat: 39.7063,
  description: "明清时期儒学教育与祭祀建筑。",
  recommend: "8"
},
{
  name: "悬空寺",
  type: "古建筑",
  year: "明",
  address: "山西省大同市浑源县",
  lng: 113.6949,
  lat: 39.6598,
  description: "依悬崖而建的著名寺庙建筑，国内外知名。",
  recommend: "10"
},
{
  name: "荆庄大云寺大雄宝殿",
  type: "古建筑",
  year: "金",
  address: "山西省大同市浑源县",
  lng: 113.6827,
  lat: 39.7124,
  description: "金代木构佛殿，结构保存完好。",
  recommend: "9"
},
{
  name: "浑源永安寺",
  type: "古建筑",
  year: "元",
  address: "山西省大同市浑源县",
  lng: 113.6896,
  lat: 39.7081,
  description: "元代佛教寺院建筑。",
  recommend: "8"
},
{
  name: "觉山寺砖塔",
  type: "古建筑",
  year: "辽",
  address: "山西省大同市灵丘县",
  lng: 114.2419,
  lat: 39.4416,
  description: "辽代砖塔建筑，风格古朴。",
  recommend: "8"
},
{
  name: "大同观音堂",
  type: "古建筑",
  year: "清",
  address: "山西省大同市南郊区",
  lng: 113.2856,
  lat: 40.0479,
  description: "清代佛教建筑。",
  recommend: "7"
},
{
  name: "大同关帝庙大殿",
  type: "古建筑",
  year: "元",
  address: "山西省大同市平城区",
  lng: 113.2974,
  lat: 40.0812,
  description: "元代关帝庙主殿建筑。",
  recommend: "8"
},
{
  name: "大同九龙壁",
  type: "古建筑",
  year: "明",
  address: "山西省大同市平城区",
  lng: 113.2998,
  lat: 40.0841,
  description: "中国现存规模最大的九龙壁之一。",
  recommend: "10"
},
{
  name: "善化寺",
  type: "古建筑",
  year: "辽、金",
  address: "山西省大同市平城区",
  lng: 113.3012,
  lat: 40.0826,
  description: "辽金时期重要佛教寺院建筑群。",
  recommend: "10"
},
{
  name: "华严寺",
  type: "古建筑",
  year: "辽、金、清",
  address: "山西省大同市平城区",
  lng: 113.3027,
  lat: 40.0848,
  description: "辽金皇家寺院，现存大雄宝殿极具价值。",
  recommend: "10"
},
{
  name: "禅房寺塔",
  type: "古建筑",
  year: "辽",
  address: "山西省大同市平城区",
  lng: 113.2956,
  lat: 40.0738,
  description: "辽代佛塔建筑。",
  recommend: "8"
},
{
  name: "平城兴国寺",
  type: "古建筑",
  year: "明",
  address: "山西省大同市平城区",
  lng: 113.2983,
  lat: 40.0789,
  description: "明代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "大同鼓楼",
  type: "古建筑",
  year: "明",
  address: "山西省大同市平城区",
  lng: 113.3005,
  lat: 40.0835,
  description: "明代城市标志性建筑。",
  recommend: "9"
},
{
  name: "慈云寺",
  type: "古建筑",
  year: "明",
  address: "山西省大同市天镇县",
  lng: 114.0912,
  lat: 40.4206,
  description: "明代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "云林寺",
  type: "古建筑",
  year: "明",
  address: "山西省大同市阳高县",
  lng: 113.7491,
  lat: 40.3587,
  description: "明代佛教寺院。",
  recommend: "7"
},
{
  name: "怀覃会馆",
  type: "古建筑",
  year: "清",
  address: "山西省晋城市城区",
  lng: 112.8516,
  lat: 35.4974,
  description: "清代商帮会馆建筑。",
  recommend: "8"
},
{
  name: "三王村三峻庙",
  type: "古建筑",
  year: "金、清",
  address: "山西省晋城市高平市",
  lng: 112.9234,
  lat: 35.7912,
  description: "金清时期道教庙宇建筑。",
  recommend: "8"
},
{
  name: "高平嘉祥寺",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市高平市",
  lng: 112.9261,
  lat: 35.7846,
  description: "金代始建，延续至清代的佛教寺院。",
  recommend: "8"
},
{
  name: "大周村古寺庙建筑群",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋城市高平市",
  lng: 112.9183,
  lat: 35.7984,
  description: "宋至清时期多座寺庙组成的建筑群。",
  recommend: "8"
},
{
  name: "董峰万寿宫",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市高平市",
  lng: 112.9358,
  lat: 35.7869,
  description: "元清时期道教宫观建筑。",
  recommend: "7"
},
{
  name: "仙翁庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市高平市",
  lng: 112.9412,
  lat: 35.7925,
  description: "明清时期地方祭祀建筑。",
  recommend: "7"
},
{
  name: "建南济渎庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市高平市",
  lng: 112.9346,
  lat: 35.7894,
  description: "元至清时期祭祀济渎神的重要庙宇建筑。",
  recommend: "8"
},
{
  name: "石末宣圣庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省晋城市高平市",
  lng: 112.9418,
  lat: 35.7936,
  description: "供奉孔子的地方性文庙建筑。",
  recommend: "7"
},
{
  name: "良户玉虚观",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市高平市",
  lng: 112.9273,
  lat: 35.8015,
  description: "元清时期道教宫观建筑。",
  recommend: "7"
},
{
  name: "南庄玉皇庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市高平市",
  lng: 112.9198,
  lat: 35.7962,
  description: "供奉玉皇大帝的传统庙宇。",
  recommend: "7"
},
{
  name: "姬氏民居",
  type: "古建筑",
  year: "元",
  address: "山西省晋城市高平市",
  lng: 112.9226,
  lat: 35.7849,
  description: "保存较为完整的元代民居建筑实例。",
  recommend: "7"
},
{
  name: "崇明寺",
  type: "古建筑",
  year: "北宋至明",
  address: "山西省晋城市高平市",
  lng: 112.9315,
  lat: 35.8087,
  description: "始建于北宋的佛教寺院建筑。",
  recommend: "8"
},
{
  name: "开化寺",
  type: "古建筑",
  year: "北宋至清",
  address: "山西省晋城市高平市",
  lng: 112.9251,
  lat: 35.7872,
  description: "北宋创建并延续至清代的重要寺院。",
  recommend: "9"
},
{
  name: "游仙寺",
  type: "古建筑",
  year: "北宋至清",
  address: "山西省晋城市高平市",
  lng: 112.9187,
  lat: 35.7918,
  description: "北宋始建的佛教寺院建筑。",
  recommend: "8"
},
{
  name: "定林寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市高平市",
  lng: 112.9396,
  lat: 35.7991,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "西李门二仙庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市高平市",
  lng: 112.9442,
  lat: 35.7853,
  description: "供奉二仙信仰的地方性庙宇。",
  recommend: "7"
},
{
  name: "中坪二仙宫",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市高平市",
  lng: 112.9368,
  lat: 35.8124,
  description: "金清时期道教建筑。",
  recommend: "7"
},
{
  name: "二郎庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市高平市",
  lng: 112.9296,
  lat: 35.7947,
  description: "供奉二郎神的传统庙宇。",
  recommend: "7"
},
{
  name: "清梦观",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市高平市",
  lng: 112.9463,
  lat: 35.8069,
  description: "元清时期道教观宇。",
  recommend: "7"
},
{
  name: "古中庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市高平市",
  lng: 112.9204,
  lat: 35.8036,
  description: "地方性祭祀建筑，历史延续时间长。",
  recommend: "7"
},
{
  name: "团东清化寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市高平市",
  lng: 112.9148,
  lat: 35.8092,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "高平铁佛寺",
  type: "古建筑",
  year: "明清",
  address: "山西省晋城市高平市",
  lng: 112.9352,
  lat: 35.7826,
  description: "以铁佛造像著称的佛教寺院。",
  recommend: "8"
},

/* ===== 晋城市 · 陵川县 · 古建筑 ===== */

{
  name: "南召文庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市陵川县",
  lng: 113.2796,
  lat: 35.7738,
  description: "元清时期儒学教育与祭祀建筑。",
  recommend: "8"
},
{
  name: "北马玉皇庙",
  type: "古建筑",
  year: "金、清",
  address: "山西省晋城市陵川县",
  lng: 113.2684,
  lat: 35.7812,
  description: "供奉玉皇大帝的传统庙宇。",
  recommend: "7"
},
{
  name: "南北吉祥寺",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋城市陵川县",
  lng: 113.2915,
  lat: 35.7696,
  description: "宋至清时期延续使用的佛教寺院。",
  recommend: "8"
},
{
  name: "西溪二仙庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市陵川县",
  lng: 113.2842,
  lat: 35.7873,
  description: "金清时期地方性庙宇建筑。",
  recommend: "7"
},
{
  name: "龙岩寺",
  type: "古建筑",
  year: "金、明",
  address: "山西省晋城市陵川县",
  lng: 113.2981,
  lat: 35.7648,
  description: "依山而建的佛教寺院。",
  recommend: "7"
},
{
  name: "崔府君庙",
  type: "古建筑",
  year: "金至明",
  address: "山西省晋城市陵川县",
  lng: 113.2769,
  lat: 35.7926,
  description: "供奉崔府君的民间信仰建筑。",
  recommend: "7"
},
{
  name: "小会岭二仙庙",
  type: "古建筑",
  year: "北宋至清",
  address: "山西省晋城市陵川县",
  lng: 113.3047,
  lat: 35.7819,
  description: "北宋始建并延续至清代的二仙庙。",
  recommend: "7"
},
{
  name: "玉泉东岳庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市陵川县",
  lng: 113.2893,
  lat: 35.7586,
  description: "祭祀东岳大帝的重要庙宇。",
  recommend: "8"
},
{
  name: "石掌玉皇庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市陵川县",
  lng: 113.3128,
  lat: 35.7734,
  description: "金清时期道教建筑。",
  recommend: "7"
},
{
  name: "白玉宫",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市陵川县",
  lng: 113.2954,
  lat: 35.7958,
  description: "地方性道教宫观建筑。",
  recommend: "7"
},
{
  name: "南神头二仙庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市陵川县",
  lng: 113.3071,
  lat: 35.7896,
  description: "供奉二仙的传统庙宇。",
  recommend: "7"
},
{
  name: "寺润三教堂",
  type: "古建筑",
  year: "金",
  address: "山西省晋城市陵川县",
  lng: 113.3006,
  lat: 35.7672,
  description: "体现儒释道三教合一的建筑实例。",
  recommend: "8"
},
{
  name: "三圣瑞现塔",
  type: "古建筑",
  year: "金",
  address: "山西省晋城市陵川县",
  lng: 113.2921,
  lat: 35.7614,
  description: "金代佛塔建筑遗存。",
  recommend: "8"
},
{
  name: "崇安寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市陵川县",
  lng: 113.2753,
  lat: 35.7546,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "田庄全神庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市陵川县",
  lng: 113.3187,
  lat: 35.7831,
  description: "供奉多位神祇的庙宇建筑。",
  recommend: "7"
},

/* ===== 晋城市 · 沁水县 · 古建筑 ===== */

{
  name: "柳氏民居",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市沁水县",
  lng: 112.1854,
  lat: 35.6907,
  description: "保存完好的明清时期民居建筑。",
  recommend: "8"
},
{
  name: "湘峪古堡",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市沁水县",
  lng: 112.2026,
  lat: 35.7038,
  description: "集防御与居住于一体的明清古堡。",
  recommend: "9"
},
{
  name: "郭壁村古建筑群",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市沁水县",
  lng: 112.1987,
  lat: 35.6984,
  description: "以城堡式民居著称的古建筑群。",
  recommend: "9"
},
{
  name: "窦庄古建筑群",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市沁水县",
  lng: 112.1769,
  lat: 35.6824,
  description: "明清时期村落建筑集中保存区。",
  recommend: "8"
},

/* ===== 晋城市 · 阳城县 · 古建筑 ===== */

{
  name: "陈廷敬故居",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市阳城县",
  lng: 112.4216,
  lat: 35.4827,
  description: "清代名相陈廷敬家族宅院建筑群。",
  recommend: "10"
},
{
  name: "下交汤帝庙",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋城市阳城县",
  lng: 112.4382,
  lat: 35.4749,
  description: "祭祀商汤的传统庙宇。",
  recommend: "8"
},
{
  name: "开福寺",
  type: "古建筑",
  year: "金至明",
  address: "山西省晋城市阳城县",
  lng: 112.4476,
  lat: 35.4893,
  description: "金代创建的佛教寺院。",
  recommend: "7"
},
{
  name: "润城东岳庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市阳城县",
  lng: 112.4318,
  lat: 35.5012,
  description: "东岳信仰的重要建筑。",
  recommend: "8"
},
{
  name: "海会寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市阳城县",
  lng: 112.4597,
  lat: 35.4936,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "郭峪村古建筑群",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市阳城县",
  lng: 112.4264,
  lat: 35.4782,
  description: "保存完好的明清城堡式村落。",
  recommend: "10"
},
{
  name: "砥洎城",
  type: "古建筑",
  year: "明",
  address: "山西省晋城市阳城县",
  lng: 112.4149,
  lat: 35.4691,
  description: "明代军事防御城堡。",
  recommend: "9"
},
{
  name: "阳城文庙",
  type: "古建筑",
  year: "明清",
  address: "山西省晋城市阳城县",
  lng: 112.4207,
  lat: 35.4845,
  description: "明清时期儒学祭祀建筑。",
  recommend: "8"
},
{
  name: "阳城寿圣寺及琉璃塔",
  type: "古建筑",
  year: "明清",
  address: "山西省晋城市阳城县",
  lng: 112.4352,
  lat: 35.4918,
  description: "包含寺院与琉璃塔的建筑组合。",
  recommend: "9"
},

/* ===== 晋城市 · 泽州县 · 古建筑 ===== */

{
  name: "水东崔府君庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市泽州县",
  lng: 112.9956,
  lat: 35.5338,
  description: "供奉崔府君的传统庙宇。",
  recommend: "7"
},
{
  name: "坪上汤帝庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋城市泽州县",
  lng: 113.0124,
  lat: 35.5426,
  description: "祭祀商汤的重要民间信仰建筑。",
  recommend: "7"
},
{
  name: "府城关帝庙",
  type: "古建筑",
  year: "清",
  address: "山西省晋城市泽州县",
  lng: 113.0048,
  lat: 35.5281,
  description: "清代关帝信仰庙宇。",
  recommend: "7"
},
{
  name: "薛庄玉皇庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市泽州县",
  lng: 113.0186,
  lat: 35.5374,
  description: "玉皇信仰的重要建筑。",
  recommend: "7"
},
{
  name: "高都景德寺",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋城市泽州县",
  lng: 113.0332,
  lat: 35.5219,
  description: "宋代创建并延续使用的佛教寺院。",
  recommend: "8"
},
{
  name: "史村东岳庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市泽州县",
  lng: 113.0271,
  lat: 35.5493,
  description: "东岳信仰建筑。",
  recommend: "7"
},
{
  name: "西顿济渎庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市泽州县",
  lng: 113.0416,
  lat: 35.5317,
  description: "祭祀济渎神的重要庙宇。",
  recommend: "7"
},
{
  name: "河底成汤庙",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋城市泽州县",
  lng: 113.0492,
  lat: 35.5264,
  description: "商汤信仰庙宇。",
  recommend: "7"
},
{
  name: "尹西东岳庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋城市泽州县",
  lng: 113.0568,
  lat: 35.5193,
  description: "东岳信仰建筑。",
  recommend: "7"
},
{
  name: "坛岭头岱庙",
  type: "古建筑",
  year: "金、清",
  address: "山西省晋城市泽州县",
  lng: 113.0619,
  lat: 35.5388,
  description: "岱岳信仰庙宇。",
  recommend: "7"
},
{
  name: "川底佛堂",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市泽州县",
  lng: 113.0683,
  lat: 35.5237,
  description: "地方性佛教建筑。",
  recommend: "7"
},
{
  name: "青莲寺",
  type: "古建筑",
  year: "唐至清",
  address: "山西省晋城市泽州县",
  lng: 113.0447,
  lat: 35.5458,
  description: "始建于唐代的重要佛教寺院。",
  recommend: "10"
},
{
  name: "玉皇庙",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋城市泽州县",
  lng: 113.0372,
  lat: 35.5514,
  description: "宋清时期玉皇信仰建筑。",
  recommend: "8"
},
{
  name: "晋城二仙庙",
  type: "古建筑",
  year: "宋",
  address: "山西省晋城市泽州县",
  lng: 113.0285,
  lat: 35.5562,
  description: "宋代二仙信仰庙宇。",
  recommend: "8"
},
{
  name: "泽州岱庙",
  type: "古建筑",
  year: "宋至明",
  address: "山西省晋城市泽州县",
  lng: 113.0159,
  lat: 35.5604,
  description: "岱岳信仰的重要建筑。",
  recommend: "9"
},
{
  name: "北义城玉皇庙",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋城市泽州县",
  lng: 113.0096,
  lat: 35.5681,
  description: "宋清时期玉皇庙。",
  recommend: "7"
},
{
  name: "周村东岳庙",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋城市泽州县",
  lng: 113.0218,
  lat: 35.5746,
  description: "东岳信仰庙宇。",
  recommend: "7"
},
{
  name: "大阳汤帝庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋城市泽州县",
  lng: 113.0347,
  lat: 35.5792,
  description: "祭祀商汤的重要庙宇。",
  recommend: "8"
},
{
  name: "泽州崇寿寺",
  type: "古建筑",
  year: "北宋至清",
  address: "山西省晋城市泽州县",
  lng: 113.0473,
  lat: 35.5846,
  description: "北宋创建并延续至清代的佛教寺院。",
  recommend: "9"
},

/* ===== 晋中市 · 和顺县 / 介休市 / 灵石县 / 平遥县 ===== */

{
  name: "懿济圣母庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市和顺县",
  lng: 113.5694,
  lat: 37.3308,
  description: "元清时期祭祀圣母的庙宇。",
  recommend: "7"
},
{
  name: "云峰寺石佛殿",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市介休市",
  lng: 111.9246,
  lat: 37.0298,
  description: "以石佛造像著称的佛教建筑。",
  recommend: "8"
},
{
  name: "介休后土庙",
  type: "古建筑",
  year: "明、清",
  address: "山西省晋中市介休市",
  lng: 111.9203,
  lat: 37.0336,
  description: "祭祀后土神的重要庙宇。",
  recommend: "8"
},
{
  name: "介休源神庙",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市介休市",
  lng: 111.9287,
  lat: 37.0264,
  description: "清代地方性庙宇。",
  recommend: "7"
},
{
  name: "介休城隍庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市介休市",
  lng: 111.9231,
  lat: 37.0317,
  description: "明清时期城隍信仰建筑。",
  recommend: "8"
},
{
  name: "袄神楼",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市介休市",
  lng: 111.9196,
  lat: 37.0289,
  description: "清代民间信仰建筑。",
  recommend: "7"
},
{
  name: "回銮寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市介休市",
  lng: 111.9352,
  lat: 37.0213,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "张壁古堡",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋中市介休市",
  lng: 111.9528,
  lat: 37.0196,
  description: "集军事、防御、居住于一体的古堡村落。",
  recommend: "10"
},
{
  name: "太和岩牌楼",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市介休市",
  lng: 111.9463,
  lat: 37.0158,
  description: "清代石质牌楼建筑。",
  recommend: "7"
},
{
  name: "介休五岳庙",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市介休市",
  lng: 111.9397,
  lat: 37.0189,
  description: "祭祀五岳神的庙宇。",
  recommend: "7"
},
{
  name: "介休东岳庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市介休市",
  lng: 111.9426,
  lat: 37.0231,
  description: "东岳信仰建筑。",
  recommend: "8"
},
{
  name: "静升文庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市灵石县",
  lng: 111.7754,
  lat: 36.8519,
  description: "明清时期儒学祭祀建筑。",
  recommend: "8"
},
{
  name: "资寿寺",
  type: "古建筑",
  year: "明",
  address: "山西省晋中市灵石县",
  lng: 111.7832,
  lat: 36.8476,
  description: "明代佛教寺院。",
  recommend: "7"
},
{
  name: "晋祠庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市灵石县",
  lng: 111.7698,
  lat: 36.8583,
  description: "地方性祠庙建筑群。",
  recommend: "7"
},
{
  name: "灵石后土庙",
  type: "古建筑",
  year: "元",
  address: "山西省晋中市灵石县",
  lng: 111.7614,
  lat: 36.8552,
  description: "元代后土信仰庙宇。",
  recommend: "7"
},
{
  name: "王家大院",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市灵石县",
  lng: 111.7469,
  lat: 36.8657,
  description: "规模宏大的明清民居建筑群。",
  recommend: "10"
},
{
  name: "北依涧永福寺过殿",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市平遥县",
  lng: 112.1784,
  lat: 37.2126,
  description: "明清时期佛教寺院建筑。",
  recommend: "7"
},
{
  name: "梁家滩白云寺",
  type: "古建筑",
  year: "明至民国",
  address: "山西省晋中市平遥县",
  lng: 112.1684,
  lat: 37.2068,
  description: "始建于明代并延续至民国的佛教寺院。",
  recommend: "7"
},
{
  name: "平遥惠济桥",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市平遥县",
  lng: 112.1756,
  lat: 37.2134,
  description: "清代修建的石拱桥，是平遥重要交通遗存。",
  recommend: "7"
},
{
  name: "南政隆福寺",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市平遥县",
  lng: 112.1832,
  lat: 37.2019,
  description: "清代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "干坑南神庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市平遥县",
  lng: 112.1916,
  lat: 37.1958,
  description: "明清时期地方性祭祀建筑。",
  recommend: "7"
},
{
  name: "襄垣慈胜寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市平遥县",
  lng: 112.1649,
  lat: 37.2197,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "雷履泰旧居",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市平遥县",
  lng: 112.1769,
  lat: 37.2064,
  description: "清代晋商雷履泰的故居建筑。",
  recommend: "8"
},
{
  name: "平遥市楼",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市平遥县",
  lng: 112.1778,
  lat: 37.2042,
  description: "清代平遥城内重要标志性建筑。",
  recommend: "8"
},
{
  name: "镇国寺",
  type: "古建筑",
  year: "五代至清",
  address: "山西省晋中市平遥县",
  lng: 112.1631,
  lat: 37.1876,
  description: "始建于五代的著名佛教寺院，万佛殿极具价值。",
  recommend: "10"
},
{
  name: "平遥城墙",
  type: "古建筑",
  year: "明",
  address: "山西省晋中市平遥县",
  lng: 112.1762,
  lat: 37.2079,
  description: "保存完整的明代县城城墙体系。",
  recommend: "10"
},
{
  name: "双林寺",
  type: "古建筑",
  year: "明",
  address: "山西省晋中市平遥县",
  lng: 112.1587,
  lat: 37.2104,
  description: "以彩塑艺术闻名的佛教寺院。",
  recommend: "10"
},
{
  name: "慈相寺",
  type: "古建筑",
  year: "北宋至清",
  address: "山西省晋中市平遥县",
  lng: 112.1846,
  lat: 37.1892,
  description: "北宋创建并延续使用的佛教寺院。",
  recommend: "8"
},
{
  name: "平遥文庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋中市平遥县",
  lng: 112.1786,
  lat: 37.2031,
  description: "金清时期儒学教育与祭祀建筑。",
  recommend: "9"
},
{
  name: "平遥清凉寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市平遥县",
  lng: 112.1694,
  lat: 37.1978,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "清虚观",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市平遥县",
  lng: 112.1813,
  lat: 37.2096,
  description: "元清时期道教观宇建筑。",
  recommend: "8"
},
{
  name: "平遥城隍庙",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市平遥县",
  lng: 112.1748,
  lat: 37.2026,
  description: "清代城隍信仰庙宇。",
  recommend: "8"
},
{
  name: "日升昌旧址",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市平遥县",
  lng: 112.1765,
  lat: 37.2051,
  description: "中国最早票号旧址，晋商文化代表。",
  recommend: "10"
},
{
  name: "金庄文庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市平遥县",
  lng: 112.1596,
  lat: 37.2224,
  description: "元清时期乡村文庙建筑。",
  recommend: "7"
},
{
  name: "利应侯庙",
  type: "古建筑",
  year: "元",
  address: "山西省晋中市平遥县",
  lng: 112.1663,
  lat: 37.2189,
  description: "元代地方性祭祀建筑。",
  recommend: "7"
},
{
  name: "长则普明寺",
  type: "古建筑",
  year: "明清",
  address: "山西省晋中市平遥县",
  lng: 112.1542,
  lat: 37.1963,
  description: "明清时期佛教寺院。",
  recommend: "8"
},

/* ===== 晋中市 · 祁县 · 古建筑 ===== */

{
  name: "乔家大院",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市祁县",
  lng: 112.3376,
  lat: 37.3572,
  description: "清代晋商乔氏家族宅院，规模宏大。",
  recommend: "10"
},
{
  name: "兴梵寺",
  type: "古建筑",
  year: "宋",
  address: "山西省晋中市祁县",
  lng: 112.3514,
  lat: 37.3691,
  description: "宋代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "渠家大院",
  type: "古建筑",
  year: "清",
  address: "山西省晋中市祁县",
  lng: 112.3427,
  lat: 37.3628,
  description: "清代晋商渠氏家族宅院。",
  recommend: "8"
},
{
  name: "梁村洪福寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市祁县",
  lng: 112.3298,
  lat: 37.3816,
  description: "元清时期佛教寺院。",
  recommend: "8"
},
{
  name: "祁县镇河楼",
  type: "古建筑",
  year: "明",
  address: "山西省晋中市祁县",
  lng: 112.3351,
  lat: 37.3604,
  description: "明代防洪与瞭望建筑。",
  recommend: "8"
},

/* ===== 晋中市 · 寿阳县 / 太谷县 / 昔阳县 / 榆次区 / 榆社县 ===== */

{
  name: "普光寺",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋中市寿阳县",
  lng: 113.1754,
  lat: 37.8926,
  description: "宋代创建并延续至清代的佛教寺院。",
  recommend: "7"
},
{
  name: "福田寺",
  type: "古建筑",
  year: "元至明",
  address: "山西省晋中市寿阳县",
  lng: 113.1629,
  lat: 37.8853,
  description: "元明时期佛教寺院。",
  recommend: "7"
},
{
  name: "孟家沟龙泉寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市寿阳县",
  lng: 113.1842,
  lat: 37.8769,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "新村妙觉寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市太谷县",
  lng: 112.5534,
  lat: 37.4237,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "范村圆智寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市太谷县",
  lng: 112.5691,
  lat: 37.4172,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "安禅寺",
  type: "古建筑",
  year: "宋至明",
  address: "山西省晋中市太谷县",
  lng: 112.5468,
  lat: 37.4315,
  description: "宋明时期佛教寺院。",
  recommend: "7"
},
{
  name: "无边寺",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋中市太谷县",
  lng: 112.5612,
  lat: 37.4384,
  description: "宋清时期佛教寺院。",
  recommend: "7"
},
{
  name: "真圣寺",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋中市太谷县",
  lng: 112.5743,
  lat: 37.4268,
  description: "金清时期佛教寺院。",
  recommend: "7"
},
{
  name: "光化寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市太谷县",
  lng: 112.5589,
  lat: 37.4126,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "曹家大院",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市太谷县",
  lng: 112.5416,
  lat: 37.4189,
  description: "明清时期晋商曹氏家族宅院。",
  recommend: "9"
},
{
  name: "净信寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省晋中市太谷县",
  lng: 112.5524,
  lat: 37.4096,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "昔阳崇教寺",
  type: "古建筑",
  year: "元",
  address: "山西省晋中市昔阳县",
  lng: 113.7062,
  lat: 37.6184,
  description: "元代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "昔阳离相寺",
  type: "古建筑",
  year: "宋至清",
  address: "山西省晋中市昔阳县",
  lng: 113.6928,
  lat: 37.6259,
  description: "宋清时期佛教寺院。",
  recommend: "8"
},
{
  name: "榆次城隍庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省晋中市榆次区",
  lng: 112.7459,
  lat: 37.6948,
  description: "元清时期城隍信仰建筑。",
  recommend: "8"
},
{
  name: "福祥寺",
  type: "古建筑",
  year: "金至清",
  address: "山西省晋中市榆社县",
  lng: 112.9764,
  lat: 37.0718,
  description: "金清时期佛教寺院。",
  recommend: "7"
},
{
  name: "崇圣寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省晋中市榆社县",
  lng: 112.9628,
  lat: 37.0653,
  description: "元清时期佛教寺院。",
  recommend: "7"
},

/* ===== 临汾市 · 各县市 · 古建筑 ===== */

{
  name: "苇则寿圣寺",
  type: "古建筑",
  year: "元",
  address: "山西省晋中市左权县",
  lng: 113.3776,
  lat: 37.0764,
  description: "元代佛教寺院。",
  recommend: "7"
},
{
  name: "寺坪普照寺大殿",
  type: "古建筑",
  year: "元",
  address: "山西省晋中市左权县",
  lng: 113.3629,
  lat: 37.0847,
  description: "元代木构佛殿建筑。",
  recommend: "8"
},
{
  name: "左权文庙大成殿",
  type: "古建筑",
  year: "元",
  address: "山西省晋中市左权县",
  lng: 113.3792,
  lat: 37.0816,
  description: "元代儒学祭祀建筑。",
  recommend: "8"
},
{
  name: "麻衣寺砖塔",
  type: "古建筑",
  year: "金",
  address: "山西省临汾市安泽县",
  lng: 112.2469,
  lat: 36.1478,
  description: "金代砖塔建筑遗存。",
  recommend: "8"
},
{
  name: "郎寨砖塔",
  type: "古建筑",
  year: "唐",
  address: "山西省临汾市安泽县",
  lng: 112.2316,
  lat: 36.1543,
  description: "唐代砖塔建筑。",
  recommend: "9"
},
{
  name: "师家沟古建筑群",
  type: "古建筑",
  year: "清",
  address: "山西省临汾市汾西县",
  lng: 111.5317,
  lat: 36.6348,
  description: "清代村落古建筑集中区。",
  recommend: "8"
},
{
  name: "老君洞",
  type: "古建筑",
  year: "唐至明",
  address: "山西省临汾市浮山县",
  lng: 111.8416,
  lat: 36.3249,
  description: "唐至明时期道教遗存。",
  recommend: "8"
},
{
  name: "热留关帝庙",
  type: "古建筑",
  year: "明清",
  address: "山西省临汾市古县",
  lng: 111.9286,
  lat: 36.2673,
  description: "明清时期关帝信仰庙宇。",
  recommend: "8"
},
{
  name: "洪洞关帝庙",
  type: "古建筑",
  year: "元、明至清",
  address: "山西省临汾市洪洞县",
  lng: 111.6784,
  lat: 36.2551,
  description: "元明清时期关帝庙建筑。",
  recommend: "8"
},
{
  name: "洪洞商山庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省临汾市洪洞县",
  lng: 111.6936,
  lat: 36.2487,
  description: "明清时期地方性庙宇。",
  recommend: "7"
},
{
  name: "净石宫",
  type: "古建筑",
  year: "明至民国",
  address: "山西省临汾市洪洞县",
  lng: 111.7019,
  lat: 36.2614,
  description: "明至民国时期道教建筑。",
  recommend: "7"
},
{
  name: "广胜寺",
  type: "古建筑",
  year: "元明",
  address: "山西省临汾市洪洞县",
  lng: 111.6892,
  lat: 36.2736,
  description: "以飞虹塔和壁画著称的重要佛教寺院。",
  recommend: "10"
},
{
  name: "洪洞玉皇庙",
  type: "古建筑",
  year: "元",
  address: "山西省临汾市洪洞县",
  lng: 111.6728,
  lat: 36.2684,
  description: "元代玉皇信仰建筑。",
  recommend: "7"
},
{
  name: "霍州州署大堂",
  type: "古建筑",
  year: "元",
  address: "山西省临汾市霍州市",
  lng: 111.7206,
  lat: 36.5684,
  description: "元代地方行政建筑遗存。",
  recommend: "8"
},
{
  name: "霍州观音庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省临汾市霍州市",
  lng: 111.7269,
  lat: 36.5627,
  description: "元清时期观音信仰庙宇。",
  recommend: "7"
},
{
  name: "娲皇庙",
  type: "古建筑",
  year: "清",
  address: "山西省临汾市霍州市",
  lng: 111.7314,
  lat: 36.5598,
  description: "清代女娲信仰庙宇。",
  recommend: "7"
},
{
  name: "霍州祝圣寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省临汾市霍州市",
  lng: 111.7242,
  lat: 36.5736,
  description: "元清时期佛教寺院。",
  recommend: "8"
},
{
  name: "霍州鼓楼",
  type: "古建筑",
  year: "明清",
  address: "山西省临汾市霍州市",
  lng: 111.7221,
  lat: 36.5669,
  description: "明清时期城市标志性建筑。",
  recommend: "9"
},
{
  name: "柏山东岳庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省临汾市蒲县",
  lng: 111.0916,
  lat: 36.4187,
  description: "东岳信仰的重要庙宇。",
  recommend: "7"
},
{
  name: "南林交龙泉寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省临汾市曲沃县",
  lng: 111.4587,
  lat: 35.6542,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "东许三清庙献殿",
  type: "古建筑",
  year: "元",
  address: "山西省临汾市曲沃县",
  lng: 111.4638,
  lat: 35.6594,
  description: "元代道教三清庙的重要组成建筑献殿。",
  recommend: "7"
},
{
  name: "大悲院",
  type: "古建筑",
  year: "宋、金",
  address: "山西省临汾市曲沃县",
  lng: 111.4726,
  lat: 35.6518,
  description: "宋金时期佛教寺院遗存。",
  recommend: "7"
},
{
  name: "曲沃薛家大院",
  type: "古建筑",
  year: "清",
  address: "山西省临汾市曲沃县",
  lng: 111.4684,
  lat: 35.6572,
  description: "清代地方士绅家族宅院建筑。",
  recommend: "8"
},

/* ===== 临汾市 · 隰县 ===== */

{
  name: "隰县鼓楼",
  type: "古建筑",
  year: "明",
  address: "山西省临汾市隰县",
  lng: 111.0456,
  lat: 36.6932,
  description: "明代县城标志性鼓楼建筑。",
  recommend: "8"
},
{
  name: "千佛庵",
  type: "古建筑",
  year: "明",
  address: "山西省临汾市隰县",
  lng: 111.0538,
  lat: 36.6894,
  description: "明代佛教庵院建筑。",
  recommend: "7"
},

/* ===== 临汾市 · 乡宁县 ===== */

{
  name: "乡宁寿圣寺",
  type: "古建筑",
  year: "金至明",
  address: "山西省临汾市乡宁县",
  lng: 110.8437,
  lat: 35.9736,
  description: "金代创建并延续至明代的佛教寺院。",
  recommend: "7"
},

/* ===== 临汾市 · 襄汾县 ===== */

{
  name: "襄陵文庙大成殿",
  type: "古建筑",
  year: "元",
  address: "山西省临汾市襄汾县",
  lng: 111.4426,
  lat: 35.8774,
  description: "元代文庙核心建筑大成殿。",
  recommend: "8"
},
{
  name: "灵光寺琉璃塔",
  type: "古建筑",
  year: "金",
  address: "山西省临汾市襄汾县",
  lng: 111.4513,
  lat: 35.8836,
  description: "金代琉璃砖塔建筑，装饰精美。",
  recommend: "9"
},
{
  name: "丁村民宅",
  type: "古建筑",
  year: "明清",
  address: "山西省临汾市襄汾县",
  lng: 111.4678,
  lat: 35.8721,
  description: "保存完好的明清时期民居建筑群。",
  recommend: "10"
},
{
  name: "汾城古建筑群",
  type: "古建筑",
  year: "金至清",
  address: "山西省临汾市襄汾县",
  lng: 111.4367,
  lat: 35.8924,
  description: "金至清时期城镇古建筑集中分布区。",
  recommend: "9"
},
{
  name: "普净寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省临汾市襄汾县",
  lng: 111.4589,
  lat: 35.8696,
  description: "元清时期佛教寺院建筑。",
  recommend: "7"
},

/* ===== 临汾市 · 尧都区 ===== */

{
  name: "牛王庙戏台",
  type: "古建筑",
  year: "元",
  address: "山西省临汾市尧都区",
  lng: 111.5086,
  lat: 36.0817,
  description: "元代庙台合一的戏曲演出建筑。",
  recommend: "8"
},
{
  name: "东羊后土庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省临汾市尧都区",
  lng: 111.4963,
  lat: 36.0674,
  description: "元清时期后土信仰庙宇。",
  recommend: "7"
},
{
  name: "王曲东岳庙",
  type: "古建筑",
  year: "元至民国",
  address: "山西省临汾市尧都区",
  lng: 111.5214,
  lat: 36.0739,
  description: "延续至民国时期的东岳信仰建筑。",
  recommend: "7"
},
{
  name: "尧陵",
  type: "古建筑",
  year: "明至清",
  address: "山西省临汾市尧都区",
  lng: 111.5149,
  lat: 36.0963,
  description: "祭祀上古帝王尧的重要陵寝建筑群。",
  recommend: "9"
},
{
  name: "铁佛寺",
  type: "古建筑",
  year: "清",
  address: "山西省临汾市尧都区",
  lng: 111.5038,
  lat: 36.0881,
  description: "清代佛教寺院，以铁佛造像闻名。",
  recommend: "7"
},

/* ===== 临汾市 · 翼城县 ===== */

{
  name: "石四牌坊和木四牌坊",
  type: "古建筑",
  year: "明至清",
  address: "山西省临汾市翼城县",
  lng: 111.7136,
  lat: 35.7392,
  description: "明清时期石、木结构并存的牌坊建筑群。",
  recommend: "8"
},
{
  name: "樊店关帝庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省临汾市翼城县",
  lng: 111.7024,
  lat: 35.7461,
  description: "明清时期关帝信仰庙宇。",
  recommend: "7"
},
{
  name: "四圣宫",
  type: "古建筑",
  year: "元至清",
  address: "山西省临汾市翼城县",
  lng: 111.7218,
  lat: 35.7326,
  description: "供奉多位神祇的传统庙宇建筑。",
  recommend: "7"
},
{
  name: "南撤东岳庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省临汾市翼城县",
  lng: 111.7093,
  lat: 35.7284,
  description: "元清时期东岳信仰建筑。",
  recommend: "7"
},
{
  name: "乔泽庙戏台",
  type: "古建筑",
  year: "元",
  address: "山西省临汾市翼城县",
  lng: 111.7164,
  lat: 35.7448,
  description: "元代庙宇附属戏台建筑。",
  recommend: "7"
},

/* ===== 临汾市 · 永和县 ===== */

{
  name: "永和文庙大成殿",
  type: "古建筑",
  year: "明",
  address: "山西省临汾市永和县",
  lng: 110.6318,
  lat: 36.7584,
  description: "明代文庙核心建筑大成殿。",
  recommend: "8"
},

/* ===== 吕梁市 · 方山县 ===== */

{
  name: "大武鼓楼",
  type: "古建筑",
  year: "明",
  address: "山西省吕梁市方山县",
  lng: 111.2417,
  lat: 37.8926,
  description: "明代村镇鼓楼建筑。",
  recommend: "8"
},
{
  name: "于成龙故居",
  type: "古建筑",
  year: "清",
  address: "山西省吕梁市方山县",
  lng: 111.2369,
  lat: 37.8854,
  description: "清代名臣于成龙出生和生活过的宅院。",
  recommend: "9"
},

/* ===== 吕梁市 · 汾阳市 ===== */

{
  name: "太符观",
  type: "古建筑",
  year: "金至清",
  address: "山西省吕梁市汾阳市",
  lng: 111.7796,
  lat: 37.2674,
  description: "金清时期道教宫观建筑。",
  recommend: "7"
},
{
  name: "汾阳五岳庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省吕梁市汾阳市",
  lng: 111.7728,
  lat: 37.2719,
  description: "祭祀五岳神的传统庙宇。",
  recommend: "7"
},
{
  name: "文峰塔",
  type: "古建筑",
  year: "明至清",
  address: "山西省吕梁市汾阳市",
  lng: 111.7842,
  lat: 37.2756,
  description: "明清时期文风象征性砖塔建筑。",
  recommend: "8"
},
{
  name: "杏花村汾酒作坊",
  type: "古建筑",
  year: "清",
  address: "山西省吕梁市汾阳市",
  lng: 111.8076,
  lat: 37.2743,
  description: "清代汾酒酿造作坊遗址。",
  recommend: "9"
},
{
  name: "柏草坡龙天土地庙",
  type: "古建筑",
  year: "元至民国",
  address: "山西省吕梁市汾阳市",
  lng: 111.7963,
  lat: 37.2834,
  description: "延续至民国时期的土地信仰庙宇。",
  recommend: "7"
},
{
  name: "峪口圣母庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省吕梁市汾阳市",
  lng: 111.7689,
  lat: 37.2896,
  description: "元清时期圣母信仰建筑。",
  recommend: "8"
},
{
  name: "汾阳关帝庙",
  type: "古建筑",
  year: "明",
  address: "山西省吕梁市汾阳市",
  lng: 111.7751,
  lat: 37.2638,
  description: "明代关帝信仰庙宇。",
  recommend: "8"
},
{
  name: "汾阳后土圣母庙",
  type: "古建筑",
  year: "明至民国",
  address: "山西省吕梁市汾阳市",
  lng: 111.7897,
  lat: 37.2596,
  description: "明至民国时期后土信仰建筑。",
  recommend: "8"
},

/* ===== 吕梁市 · 交城县 / 离石区 / 临县 ===== */

{
  name: "交城玄中寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省吕梁市交城县",
  lng: 111.8094,
  lat: 37.6482,
  description: "明清时期重要佛教寺院。",
  recommend: "9"
},
{
  name: "卦山天宁寺",
  type: "古建筑",
  year: "唐至清",
  address: "山西省吕梁市交城县",
  lng: 111.8257,
  lat: 37.6624,
  description: "始建于唐代的佛教寺院。",
  recommend: "9"
},
{
  name: "安国寺",
  type: "古建筑",
  year: "明",
  address: "山西省吕梁市离石区",
  lng: 111.1496,
  lat: 37.5193,
  description: "明代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "天贞观",
  type: "古建筑",
  year: "明至清",
  address: "山西省吕梁市离石区",
  lng: 111.1638,
  lat: 37.5246,
  description: "明清时期道教观宇。",
  recommend: "7"
},
{
  name: "义居寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省吕梁市临县",
  lng: 110.9946,
  lat: 37.9604,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "碛口古建筑群",
  type: "古建筑",
  year: "明至清",
  address: "山西省吕梁市临县",
  lng: 110.9492,
  lat: 37.9936,
  description: "黄河古渡口商贸与民居建筑群。",
  recommend: "10"
},
{
  name: "善庆寺",
  type: "古建筑",
  year: "元",
  address: "山西省吕梁市临县",
  lng: 110.9728,
  lat: 37.9487,
  description: "元代佛教寺院遗存。",
  recommend: "7"
},

/* ===== 吕梁市 · 柳林县 / 石楼县 / 文水县 / 孝义市 / 兴县 ===== */

{
  name: "香严寺",
  type: "古建筑",
  year: "金至明",
  address: "山西省吕梁市柳林县",
  lng: 110.8763,
  lat: 37.4386,
  description: "金明时期佛教寺院。",
  recommend: "7"
},
{
  name: "玉虚宫下院",
  type: "古建筑",
  year: "清",
  address: "山西省吕梁市柳林县",
  lng: 110.8924,
  lat: 37.4459,
  description: "清代道教宫观附属建筑。",
  recommend: "7"
},
{
  name: "后土圣母庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省吕梁市石楼县",
  lng: 110.8407,
  lat: 36.9972,
  description: "明清时期后土信仰庙宇。",
  recommend: "7"
},
{
  name: "兴东垣东岳庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省吕梁市石楼县",
  lng: 110.8569,
  lat: 36.9864,
  description: "金清时期东岳信仰建筑。",
  recommend: "7"
},
{
  name: "则天庙",
  type: "古建筑",
  year: "金",
  address: "山西省吕梁市文水县",
  lng: 112.0126,
  lat: 37.4381,
  description: "金代祭祀武则天的庙宇。",
  recommend: "8"
},
{
  name: "上贤梵安寺塔",
  type: "古建筑",
  year: "宋、明",
  address: "山西省吕梁市文水县",
  lng: 112.0258,
  lat: 37.4529,
  description: "宋明时期佛塔建筑。",
  recommend: "8"
},
{
  name: "孝义三皇庙",
  type: "古建筑",
  year: "元至民国",
  address: "山西省吕梁市孝义市",
  lng: 111.7749,
  lat: 37.1446,
  description: "供奉三皇的传统庙宇。",
  recommend: "8"
},
{
  name: "孝义慈胜寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省吕梁市孝义市",
  lng: 111.7816,
  lat: 37.1528,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "孝义天齐庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省吕梁市孝义市",
  lng: 111.7683,
  lat: 37.1397,
  description: "元清时期天齐信仰庙宇。",
  recommend: "7"
},
{
  name: "中阳楼",
  type: "古建筑",
  year: "清",
  address: "山西省吕梁市孝义市",
  lng: 111.7762,
  lat: 37.1489,
  description: "清代城镇标志性楼阁建筑。",
  recommend: "7"
},
{
  name: "胡家沟砖塔",
  type: "古建筑",
  year: "明",
  address: "山西省吕梁市兴县",
  lng: 111.1258,
  lat: 38.4627,
  description: "明代砖塔建筑遗存。",
  recommend: "8"
},

/* ===== 朔州市 ===== */

{
  name: "广武城",
  type: "古建筑",
  year: "明",
  address: "山西省朔州市山阴县",
  lng: 112.8284,
  lat: 39.5316,
  description: "明代军事防御城堡遗址。",
  recommend: "8"
},
{
  name: "崇福寺",
  type: "古建筑",
  year: "金",
  address: "山西省朔州市朔城区",
  lng: 112.4346,
  lat: 39.3318,
  description: "金代重要佛教寺院建筑。",
  recommend: "9"
},
{
  name: "应县木塔",
  type: "古建筑",
  year: "辽",
  address: "山西省朔州市应县",
  lng: 113.1936,
  lat: 39.5538,
  description: "世界现存最高最古老的木构塔建筑。",
  recommend: "10"
},
{
  name: "净土寺",
  type: "古建筑",
  year: "金",
  address: "山西省朔州市应县",
  lng: 113.1842,
  lat: 39.5594,
  description: "金代佛教寺院建筑。",
  recommend: "8"
},
{
  name: "右玉宝宁寺",
  type: "古建筑",
  year: "明",
  address: "山西省朔州市右玉县",
  lng: 112.4663,
  lat: 39.9917,
  description: "明代佛教寺院。",
  recommend: "8"
},

/* ===== 太原市 ===== */

{
  name: "古交千佛寺",
  type: "古建筑",
  year: "清",
  address: "山西省太原市古交市",
  lng: 112.1728,
  lat: 37.9074,
  description: "清代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "宝宁寺窦大夫祠",
  type: "古建筑",
  year: "元至清",
  address: "山西省太原市尖草坪区",
  lng: 112.5039,
  lat: 37.9736,
  description: "元清时期纪念窦大夫的祠庙建筑。",
  recommend: "8"
},
{
  name: "净因寺",
  type: "古建筑",
  year: "金至明",
  address: "山西省太原市尖草坪区",
  lng: 112.5168,
  lat: 37.9682,
  description: "金明时期佛教寺院。",
  recommend: "7"
},
{
  name: "多福寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市尖草坪区",
  lng: 112.5094,
  lat: 37.9626,
  description: "明清时期佛教寺院建筑。",
  recommend: "7"
},
{
  name: "晋源阿育王塔",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市晋源区",
  lng: 112.4832,
  lat: 37.7264,
  description: "明清时期修建的佛塔，用以纪念阿育王弘扬佛法。",
  recommend: "7"
},
{
  name: "太山龙泉寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市晋源区",
  lng: 112.4958,
  lat: 37.7386,
  description: "依太山而建的佛教寺院，明清时期重修。",
  recommend: "8"
},
{
  name: "晋源文庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市晋源区",
  lng: 112.4769,
  lat: 37.7321,
  description: "明清时期晋源地区儒学教育与祭祀建筑。",
  recommend: "7"
},
{
  name: "晋祠",
  type: "古建筑",
  year: "宋",
  address: "山西省太原市晋源区",
  lng: 112.4411,
  lat: 37.7067,
  description: "中国现存最早的皇家园林式祠庙建筑群，宋代建筑艺术代表。",
  recommend: "10"
},
{
  name: "明秀寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市晋源区",
  lng: 112.4683,
  lat: 37.7194,
  description: "明清时期佛教寺院建筑。",
  recommend: "7"
},

/* ===== 太原市 · 清徐县 ===== */

{
  name: "清徐尧庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市清徐县",
  lng: 112.3584,
  lat: 37.6092,
  description: "明清时期祭祀上古帝王尧的重要庙宇。",
  recommend: "7"
},
{
  name: "狐突庙",
  type: "古建筑",
  year: "宋至清",
  address: "山西省太原市清徐县",
  lng: 112.3457,
  lat: 37.5983,
  description: "纪念春秋时期晋国大夫狐突的祠庙建筑。",
  recommend: "7"
},
{
  name: "清源文庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省太原市清徐县",
  lng: 112.3526,
  lat: 37.6158,
  description: "金代始建，延续至清代的文庙建筑。",
  recommend: "7"
},

/* ===== 太原市 · 杏花岭区 ===== */

{
  name: "唱经楼",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市杏花岭区",
  lng: 112.5712,
  lat: 37.8746,
  description: "明清时期用于科举唱名的楼阁建筑。",
  recommend: "7"
},

/* ===== 太原市 · 阳曲县 ===== */

{
  name: "帖木儿塔",
  type: "古建筑",
  year: "元",
  address: "山西省太原市阳曲县",
  lng: 112.6734,
  lat: 38.0628,
  description: "元代砖塔建筑，地方重要历史遗存。",
  recommend: "7"
},
{
  name: "前斧柯悬泉寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市阳曲县",
  lng: 112.6589,
  lat: 38.0482,
  description: "依泉临崖而建的明清佛教寺院。",
  recommend: "7"
},
{
  name: "阳曲大王庙大殿",
  type: "古建筑",
  year: "明",
  address: "山西省太原市阳曲县",
  lng: 112.6487,
  lat: 38.0715,
  description: "明代地方性祭祀庙宇的主体建筑。",
  recommend: "7"
},
{
  name: "辛庄开化寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市阳曲县",
  lng: 112.6821,
  lat: 38.0553,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "不二寺",
  type: "古建筑",
  year: "金",
  address: "山西省太原市阳曲县",
  lng: 112.6378,
  lat: 38.0394,
  description: "金代佛教寺院，体现佛教不二法门思想。",
  recommend: "7"
},
{
  name: "阳曲轩辕庙",
  type: "古建筑",
  year: "明清",
  address: "山西省太原市阳曲县",
  lng: 112.6654,
  lat: 38.0336,
  description: "明清时期祭祀轩辕黄帝的重要庙宇。",
  recommend: "8"
},

/* ===== 太原市 · 迎泽区 ===== */

{
  name: "太原大关帝庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市迎泽区",
  lng: 112.5698,
  lat: 37.8634,
  description: "太原城内规模较大的关帝信仰庙宇。",
  recommend: "8"
},
{
  name: "太原清真寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市迎泽区",
  lng: 112.5623,
  lat: 37.8579,
  description: "明清时期伊斯兰教建筑代表。",
  recommend: "7"
},
{
  name: "太原纯阳宫",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市迎泽区",
  lng: 112.5586,
  lat: 37.8681,
  description: "供奉吕洞宾的道教宫观建筑。",
  recommend: "8"
},
{
  name: "崇善寺大悲殿",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市迎泽区",
  lng: 112.5647,
  lat: 37.8612,
  description: "崇善寺内供奉观音菩萨的重要殿宇。",
  recommend: "7"
},
{
  name: "太原文庙",
  type: "古建筑",
  year: "清",
  address: "山西省太原市迎泽区",
  lng: 112.5731,
  lat: 37.8598,
  description: "清代太原府儒学祭祀建筑群。",
  recommend: "8"
},
{
  name: "永祚寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省太原市迎泽区",
  lng: 112.5774,
  lat: 37.8516,
  description: "以明代双塔著称的佛教寺院。",
  recommend: "9"
},

/* ===== 忻州市 · 代县 ===== */

{
  name: "阿育王塔",
  type: "古建筑",
  year: "元",
  address: "山西省忻州市代县",
  lng: 112.9592,
  lat: 39.0684,
  description: "元代修建的佛塔建筑。",
  recommend: "8"
},
{
  name: "边靖楼",
  type: "古建筑",
  year: "明",
  address: "山西省忻州市代县",
  lng: 112.9528,
  lat: 39.0621,
  description: "明代军事防御与瞭望建筑。",
  recommend: "8"
},
{
  name: "长城雁门关段",
  type: "古建筑",
  year: "明",
  address: "山西省忻州市代县",
  lng: 113.1116,
  lat: 39.1834,
  description: "明代长城重要关隘与防御体系。",
  recommend: "9"
},
{
  name: "代县文庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省忻州市代县",
  lng: 112.9476,
  lat: 39.0659,
  description: "明清时期代州儒学建筑。",
  recommend: "7"
},

/* ===== 忻州市 · 定襄县 ===== */

{
  name: "洪福寺",
  type: "古建筑",
  year: "金",
  address: "山西省忻州市定襄县",
  lng: 113.0034,
  lat: 38.4852,
  description: "金代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "定襄关王庙",
  type: "古建筑",
  year: "宋",
  address: "山西省忻州市定襄县",
  lng: 112.9927,
  lat: 38.4728,
  description: "宋代关帝庙，现存大殿为宋构。",
  recommend: "8"
},
{
  name: "留晖洪福寺",
  type: "古建筑",
  year: "明清",
  address: "山西省忻州市定襄县",
  lng: 113.0158,
  lat: 38.4936,
  description: "明清时期佛教寺院。",
  recommend: "8"
},

/* ===== 忻州市 · 繁峙县 ===== */

{
  name: "繁峙正觉寺大雄宝殿",
  type: "古建筑",
  year: "金",
  address: "山西省忻州市繁峙县",
  lng: 113.2658,
  lat: 39.1927,
  description: "金代佛教木构大殿。",
  recommend: "8"
},
{
  name: "岩山寺",
  type: "古建筑",
  year: "金",
  address: "山西省忻州市繁峙县",
  lng: 113.3124,
  lat: 39.1765,
  description: "金代佛教寺院，以壁画著称。",
  recommend: "9"
},
{
  name: "三圣寺",
  type: "古建筑",
  year: "金至清",
  address: "山西省忻州市繁峙县",
  lng: 113.2789,
  lat: 39.1583,
  description: "金代创建、清代沿用的佛教寺院。",
  recommend: "7"
},
{
  name: "公主寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省忻州市繁峙县",
  lng: 113.3017,
  lat: 39.1426,
  description: "明清时期佛教寺院。",
  recommend: "7"
},
{
  name: "秘密寺",
  type: "古建筑",
  year: "清",
  address: "山西省忻州市繁峙县",
  lng: 113.2894,
  lat: 39.1682,
  description: "清代佛教寺院，位置幽静。",
  recommend: "7"
},
{
  name: "繁峙琉璃塔",
  type: "古建筑",
  year: "明",
  address: "山西省忻州市繁峙县",
  lng: 113.2476,
  lat: 39.1358,
  description: "明代琉璃装饰砖塔。",
  recommend: "8"
},

/* ===== 忻州市 · 静乐县 ===== */

{
  name: "静乐文庙",
  type: "古建筑",
  year: "明至民国",
  address: "山西省忻州市静乐县",
  lng: 111.9384,
  lat: 38.3627,
  description: "明代始建、延续至民国的文庙建筑。",
  recommend: "8"
},

/* ===== 忻州市 · 五台山 ===== */

{
  name: "五台山建筑群(显通寺、碧山寺、塔院寺、菩萨顶)",
  type: "古建筑",
  year: "明清",
  address: "山西省忻州市五台山",
  lng: 113.5924,
  lat: 39.0316,
  description: "五台山核心寺院群，中国佛教四大名山之一。",
  recommend: "10"
},
{
  name: "阳武朱氏牌楼",
  type: "古建筑",
  year: "清",
  address: "山西省忻州市原平市",
  lng: 112.7318,
  lat: 38.7264,
  description: "清代为表彰朱氏家族而建的石质牌楼。",
  recommend: "8"
},

/* ===== 阳泉市 ===== */

{
  name: "关王庙",
  type: "古建筑",
  year: "宋",
  address: "山西省阳泉市郊区",
  lng: 113.5863,
  lat: 37.8692,
  description: "宋代祭祀关羽的庙宇建筑。",
  recommend: "7"
},
{
  name: "冠山书院",
  type: "古建筑",
  year: "清",
  address: "山西省阳泉市平定县",
  lng: 113.6248,
  lat: 37.7916,
  description: "清代重要的书院建筑，体现传统教育文化。",
  recommend: "8"
},
{
  name: "冠山天宁寺双塔",
  type: "古建筑",
  year: "宋、明至清",
  address: "山西省阳泉市平定县",
  lng: 113.6319,
  lat: 37.7834,
  description: "始建于宋代，明清沿用的佛教双塔建筑。",
  recommend: "9"
},
{
  name: "平定马齿岩寺",
  type: "古建筑",
  year: "金清",
  address: "山西省阳泉市平定县",
  lng: 113.6127,
  lat: 37.8046,
  description: "金代始建，清代修葺的佛教寺院。",
  recommend: "8"
},
{
  name: "藏山祠",
  type: "古建筑",
  year: "明至清",
  address: "山西省阳泉市盂县",
  lng: 113.4746,
  lat: 37.9728,
  description: "纪念赵氏孤儿故事的重要历史文化遗址。",
  recommend: "9"
},
{
  name: "大王庙",
  type: "古建筑",
  year: "金至明",
  address: "山西省阳泉市盂县",
  lng: 113.4568,
  lat: 37.9812,
  description: "金明时期地方性祭祀庙宇。",
  recommend: "7"
},
{
  name: "府君庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省阳泉市盂县",
  lng: 113.4629,
  lat: 37.9684,
  description: "元清时期供奉城隍与山川之神的庙宇。",
  recommend: "7"
},
{
  name: "坡头泰山庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省阳泉市盂县",
  lng: 113.4486,
  lat: 37.9567,
  description: "元清时期东岳泰山信仰庙宇。",
  recommend: "7"
},
{
  name: "盂北泰山庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省阳泉市盂县",
  lng: 113.4893,
  lat: 37.9881,
  description: "盂县北部重要的泰山信仰建筑。",
  recommend: "8"
},
{
  name: "西关三圣寺大殿",
  type: "古建筑",
  year: "明",
  address: "山西省阳泉市盂县",
  lng: 113.4716,
  lat: 37.9643,
  description: "明代佛教寺院主殿建筑。",
  recommend: "8"
},

/* ===== 运城市 ===== */

{
  name: "河津台头庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省运城市河津市",
  lng: 110.7034,
  lat: 35.6026,
  description: "元清时期地方性祭祀庙宇。",
  recommend: "7"
},
{
  name: "玄帝庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省运城市河津市",
  lng: 110.7118,
  lat: 35.5963,
  description: "明清时期供奉真武大帝的道教庙宇。",
  recommend: "7"
},
{
  name: "古垛后土庙",
  type: "古建筑",
  year: "元",
  address: "山西省运城市河津市",
  lng: 110.6894,
  lat: 35.6148,
  description: "元代后土信仰的重要遗存。",
  recommend: "7"
},
{
  name: "阮氏双碑楼",
  type: "古建筑",
  year: "清",
  address: "山西省运城市河津市",
  lng: 110.7251,
  lat: 35.5872,
  description: "清代为阮氏家族修建的碑楼建筑。",
  recommend: "8"
},
{
  name: "南阳法王庙",
  type: "古建筑",
  year: "元、明至清",
  address: "山西省运城市稷山县",
  lng: 110.9638,
  lat: 35.5937,
  description: "多朝代沿用的佛教法王信仰庙宇。",
  recommend: "7"
},
{
  name: "稷山稷王庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省运城市稷山县",
  lng: 110.9754,
  lat: 35.6046,
  description: "祭祀农业始祖后稷的重要庙宇。",
  recommend: "8"
},
{
  name: "北阳城砖塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市稷山县",
  lng: 110.9486,
  lat: 35.6182,
  description: "宋代砖塔建筑遗存。",
  recommend: "8"
},
{
  name: "青龙寺",
  type: "古建筑",
  year: "元",
  address: "山西省运城市稷山县",
  lng: 110.9827,
  lat: 35.5794,
  description: "元代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "长春观",
  type: "古建筑",
  year: "元至清",
  address: "山西省运城市绛县",
  lng: 111.5756,
  lat: 35.4908,
  description: "元清时期重要道教宫观。",
  recommend: "7"
},
{
  name: "绛县文庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省运城市绛县",
  lng: 111.5694,
  lat: 35.4943,
  description: "明清时期儒学祭祀建筑。",
  recommend: "7"
},
{
  name: "南樊石牌坊及碑亭",
  type: "古建筑",
  year: "清",
  address: "山西省运城市绛县",
  lng: 111.5849,
  lat: 35.4867,
  description: "清代石质牌坊与碑亭组合建筑。",
  recommend: "7"
},
{
  name: "乔寺碑楼",
  type: "古建筑",
  year: "清",
  address: "山西省运城市绛县",
  lng: 111.5618,
  lat: 35.5021,
  description: "清代寺院附属碑楼建筑。",
  recommend: "7"
},
{
  name: "南柳泰山庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省运城市绛县",
  lng: 111.5487,
  lat: 35.4764,
  description: "元清时期东岳信仰庙宇。",
  recommend: "7"
},
{
  name: "太阴寺",
  type: "古建筑",
  year: "金",
  address: "山西省运城市绛县",
  lng: 111.5923,
  lat: 35.4839,
  description: "金代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "董封戏台",
  type: "古建筑",
  year: "明",
  address: "山西省运城市绛县",
  lng: 111.5564,
  lat: 35.4712,
  description: "明代村落公共戏曲演出建筑。",
  recommend: "7"
},
{
  name: "景云宫玉皇殿",
  type: "古建筑",
  year: "元",
  address: "山西省运城市绛县",
  lng: 111.5732,
  lat: 35.4687,
  description: "元代道教宫观核心殿宇。",
  recommend: "7"
},
{
  name: "闾原头永兴寺塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市临猗县",
  lng: 110.7648,
  lat: 35.1546,
  description: "宋代砖塔建筑，保存较完整。",
  recommend: "7"
},
{
  name: "张村圣庵寺塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市临猗县",
  lng: 110.7421,
  lat: 35.1683,
  description: "宋代佛教砖塔遗存。",
  recommend: "7"
},
{
  name: "临晋县衙",
  type: "古建筑",
  year: "元至近代",
  address: "山西省运城市临猗县",
  lng: 110.7756,
  lat: 35.1418,
  description: "元代始建，延续使用至近代的县级衙署建筑。",
  recommend: "7"
},
{
  name: "妙道寺双塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市临猗县",
  lng: 110.7892,
  lat: 35.1326,
  description: "宋代佛教寺院遗存的双塔建筑。",
  recommend: "7"
},

/* ===== 运城市 · 芮城县 ===== */

{
  name: "巷口寿圣寺砖塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市芮城县",
  lng: 110.6934,
  lat: 34.6938,
  description: "宋代砖塔，造型古朴。",
  recommend: "7"
},
{
  name: "永乐宫",
  type: "古建筑",
  year: "元",
  address: "山西省运城市芮城县",
  lng: 110.6893,
  lat: 34.6958,
  description: "元代道教宫观，壁画艺术举世闻名。",
  recommend: "10"
},
{
  name: "芮城城隍庙",
  type: "古建筑",
  year: "北宋至清",
  address: "山西省运城市芮城县",
  lng: 110.6874,
  lat: 34.7012,
  description: "北宋始建，延续至清代的城隍信仰建筑。",
  recommend: "7"
},
{
  name: "清凉寺",
  type: "古建筑",
  year: "元",
  address: "山西省运城市芮城县",
  lng: 110.7018,
  lat: 34.6846,
  description: "元代佛教寺院遗存。",
  recommend: "7"
},
{
  name: "广仁王庙",
  type: "古建筑",
  year: "唐",
  address: "山西省运城市芮城县",
  lng: 110.7126,
  lat: 34.6763,
  description: "唐代祭祀广仁王的重要庙宇。",
  recommend: "8"
},

/* ===== 运城市 · 万荣县 ===== */

{
  name: "万荣稷王山塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市万荣县",
  lng: 110.8586,
  lat: 35.4178,
  description: "宋代砖塔，位于稷王山上。",
  recommend: "7"
},
{
  name: "薛瑄家庙及墓地",
  type: "古建筑",
  year: "明至清",
  address: "山西省运城市万荣县",
  lng: 110.8454,
  lat: 35.4026,
  description: "明清时期著名理学家薛瑄的家庙与墓地。",
  recommend: "8"
},
{
  name: "中里庄八龙寺塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市万荣县",
  lng: 110.8736,
  lat: 35.3947,
  description: "宋代佛教寺院遗存砖塔。",
  recommend: "7"
},
{
  name: "万荣旱泉塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市万荣县",
  lng: 110.8912,
  lat: 35.4119,
  description: "宋代砖塔建筑。",
  recommend: "7"
},
{
  name: "万荣东岳庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省运城市万荣县",
  lng: 110.8678,
  lat: 35.4236,
  description: "元清时期东岳泰山信仰庙宇。",
  recommend: "7"
},
{
  name: "闫景李家大院",
  type: "古建筑",
  year: "清至民国",
  address: "山西省运城市万荣县",
  lng: 110.8386,
  lat: 35.3894,
  description: "清末至民国时期大型民居院落建筑。",
  recommend: "8"
},
{
  name: "南阳村寿圣寺塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市万荣县",
  lng: 110.8264,
  lat: 35.4017,
  description: "宋代佛教砖塔。",
  recommend: "7"
},
{
  name: "万荣稷王庙",
  type: "古建筑",
  year: "金",
  address: "山西省运城市万荣县",
  lng: 110.8521,
  lat: 35.4302,
  description: "金代祭祀后稷的庙宇建筑。",
  recommend: "7"
},
{
  name: "万荣后土庙",
  type: "古建筑",
  year: "清",
  address: "山西省运城市万荣县",
  lng: 110.8467,
  lat: 35.4356,
  description: "清代后土信仰庙宇。",
  recommend: "7"
},
{
  name: "万泉文庙",
  type: "古建筑",
  year: "明",
  address: "山西省运城市万荣县",
  lng: 110.8339,
  lat: 35.4171,
  description: "明代儒学祭祀建筑。",
  recommend: "7"
},
{
  name: "北辛舍利塔",
  type: "古建筑",
  year: "明",
  address: "山西省运城市万荣县",
  lng: 110.8794,
  lat: 35.4458,
  description: "明代佛教舍利塔，保存完好。",
  recommend: "8"
},

/* ===== 运城市 · 闻喜县 ===== */

{
  name: "郭家庄仇氏石牌坊及碑亭",
  type: "古建筑",
  year: "清",
  address: "山西省运城市闻喜县",
  lng: 111.2246,
  lat: 35.3568,
  description: "清代石质牌坊与碑亭组合建筑。",
  recommend: "7"
},
{
  name: "后稷庙",
  type: "古建筑",
  year: "元至明",
  address: "山西省运城市闻喜县",
  lng: 111.2187,
  lat: 35.3689,
  description: "元明时期祭祀农业始祖后稷的庙宇。",
  recommend: "7"
},

/* ===== 运城市 · 夏县 ===== */

{
  name: "夏县文庙大成殿",
  type: "古建筑",
  year: "明",
  address: "山西省运城市夏县",
  lng: 111.2236,
  lat: 35.1428,
  description: "明代文庙核心建筑大成殿。",
  recommend: "7"
},
{
  name: "上冯圣母庙",
  type: "古建筑",
  year: "元、明至清",
  address: "山西省运城市夏县",
  lng: 111.1986,
  lat: 35.1567,
  description: "多朝代沿用的圣母信仰庙宇。",
  recommend: "7"
},
{
  name: "大洋泰山庙",
  type: "古建筑",
  year: "元",
  address: "山西省运城市夏县",
  lng: 111.1872,
  lat: 35.1294,
  description: "元代东岳泰山信仰庙宇。",
  recommend: "7"
},
{
  name: "墙下关帝庙",
  type: "古建筑",
  year: "明清",
  address: "山西省运城市夏县",
  lng: 111.2065,
  lat: 35.1683,
  description: "明清时期关帝信仰建筑。",
  recommend: "8"
},

/* ===== 运城市 · 新绛县 ===== */

{
  name: "绛州文庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省运城市新绛县",
  lng: 111.2264,
  lat: 35.6178,
  description: "明清时期绛州儒学祭祀建筑。",
  recommend: "7"
},
{
  name: "北池稷王庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省运城市新绛县",
  lng: 111.2139,
  lat: 35.6246,
  description: "明清时期后稷信仰庙宇。",
  recommend: "7"
},
{
  name: "白台寺",
  type: "古建筑",
  year: "金至清",
  address: "山西省运城市新绛县",
  lng: 111.2418,
  lat: 35.6037,
  description: "金代创建、清代沿用的佛教寺院。",
  recommend: "7"
},
{
  name: "泉掌关帝庙",
  type: "古建筑",
  year: "明",
  address: "山西省运城市新绛县",
  lng: 111.1973,
  lat: 35.5984,
  description: "明代关帝庙建筑。",
  recommend: "7"
},
{
  name: "绛州大堂(含三楼)",
  type: "古建筑",
  year: "元",
  address: "山西省运城市新绛县",
  lng: 111.2306,
  lat: 35.6124,
  description: "元代官署建筑，包含三楼遗存。",
  recommend: "7"
},
{
  name: "福胜寺",
  type: "古建筑",
  year: "元、明",
  address: "山西省运城市新绛县",
  lng: 111.2489,
  lat: 35.6213,
  description: "元明时期佛教寺院。",
  recommend: "7"
},
{
  name: "乔沟头玉皇庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省运城市新绛县",
  lng: 111.2617,
  lat: 35.5896,
  description: "元清时期道教玉皇信仰庙宇。",
  recommend: "7"
},
{
  name: "稷益庙",
  type: "古建筑",
  year: "明",
  address: "山西省运城市新绛县",
  lng: 111.2048,
  lat: 35.6336,
  description: "明代祭祀稷益的庙宇。",
  recommend: "7"
},
{
  name: "龙香关帝庙",
  type: "古建筑",
  year: "元至民国",
  address: "山西省运城市新绛县",
  lng: 111.2196,
  lat: 35.6442,
  description: "元至民国时期延续使用的关帝庙。",
  recommend: "7"
},
{
  name: "新绛龙兴寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省运城市新绛县",
  lng: 111.2351,
  lat: 35.6368,
  description: "元清时期佛教寺院建筑。",
  recommend: "7"
},
{
  name: "三官庙",
  type: "古建筑",
  year: "元",
  address: "山西省运城市新绛县",
  lng: 111.2463,
  lat: 35.6481,
  description: "元代道教三官信仰庙宇。",
  recommend: "7"
},
{
  name: "新绛寿圣寺大殿",
  type: "古建筑",
  year: "元",
  address: "山西省运城市新绛县",
  lng: 111.2587,
  lat: 35.6319,
  description: "元代佛教寺院主殿建筑。",
  recommend: "8"
},

/* ===== 运城市 · 盐湖区 ===== */

{
  name: "运城太平兴国寺塔",
  type: "古建筑",
  year: "宋",
  address: "山西省运城市盐湖区",
  lng: 111.0048,
  lat: 35.0264,
  description: "宋代佛教砖塔。",
  recommend: "7"
},
{
  name: "运城关王庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省运城市盐湖区",
  lng: 111.0069,
  lat: 35.0217,
  description: "明清时期关帝信仰庙宇。",
  recommend: "7"
},
{
  name: "池神庙及盐池禁墙",
  type: "古建筑",
  year: "明至清",
  address: "山西省运城市盐湖区",
  lng: 111.0196,
  lat: 35.0328,
  description: "与盐池管理相关的重要历史建筑群。",
  recommend: "7"
},
{
  name: "泛舟禅师塔",
  type: "古建筑",
  year: "唐",
  address: "山西省运城市盐湖区",
  lng: 111.0283,
  lat: 35.0186,
  description: "唐代高僧舍利塔。",
  recommend: "8"
},
{
  name: "解州关帝庙",
  type: "古建筑",
  year: "清",
  address: "山西省运城市盐湖区",
  lng: 110.9856,
  lat: 35.0417,
  description: "清代修缮的关帝祖庙建筑群。",
  recommend: "10"
},
{
  name: "舜帝陵庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省运城市盐湖区",
  lng: 111.0134,
  lat: 35.0086,
  description: "元清时期祭祀上古帝王舜的重要建筑。",
  recommend: "8"
},
{
  name: "寨里关帝庙献殿",
  type: "古建筑",
  year: "元",
  address: "山西省运城市盐湖区",
  lng: 111.0346,
  lat: 35.0492,
  description: "元代关帝庙献殿建筑。",
  recommend: "7"
},
{
  name: "郭村泰山庙大殿",
  type: "古建筑",
  year: "元",
  address: "山西省运城市盐湖区",
  lng: 111.0417,
  lat: 35.0576,
  description: "元代东岳泰山信仰庙宇主殿。",
  recommend: "7"
},
{
  name: "常平关帝庙",
  type: "古建筑",
  year: "清",
  address: "山西省运城市盐湖区",
  lng: 111.0278,
  lat: 35.0643,
  description: "清代关帝庙建筑。",
  recommend: "7"
},
{
  name: "解州同善义仓",
  type: "古建筑",
  year: "清",
  address: "山西省运城市盐湖区",
  lng: 110.9918,
  lat: 35.0374,
  description: "清代大型公益粮仓建筑。",
  recommend: "9"
},

/* ===== 运城市 · 永济市 ===== */

{
  name: "栖岩寺塔林",
  type: "古建筑",
  year: "唐至清",
  address: "山西省运城市永济市",
  lng: 110.4448,
  lat: 34.8726,
  description: "唐至清代历代高僧塔林群。",
  recommend: "9"
},
{
  name: "普救寺塔",
  type: "古建筑",
  year: "明",
  address: "山西省运城市永济市",
  lng: 110.4526,
  lat: 34.8803,
  description: "明代佛塔，与《西厢记》故事相关。",
  recommend: "9"
},
{
  name: "永济万固寺",
  type: "古建筑",
  year: "明",
  address: "山西省运城市永济市",
  lng: 110.4618,
  lat: 34.8916,
  description: "明代佛教寺院建筑。",
  recommend: "8"
},
{
  name: "永济扁鹊庙",
  type: "古建筑",
  year: "明",
  address: "山西省运城市永济市",
  lng: 110.4396,
  lat: 34.8592,
  description: "明代祭祀医祖扁鹊的庙宇。",
  recommend: "8"
},
{
  name: "董村戏台",
  type: "古建筑",
  year: "明",
  address: "山西省运城市永济市",
  lng: 110.4726,
  lat: 34.8674,
  description: "明代村落公共戏曲演出建筑。",
  recommend: "8"
},
{
  name: "东姚温牌坊",
  type: "古建筑",
  year: "明清",
  address: "山西省运城市永济市",
  lng: 110.4857,
  lat: 34.8831,
  description: "明清时期石质牌坊建筑。",
  recommend: "8"
},

/* ===== 运城市 · 垣曲县 ===== */

{
  name: "宋村永兴寺",
  type: "古建筑",
  year: "金、清",
  address: "山西省运城市垣曲县",
  lng: 111.6704,
  lat: 35.2758,
  description: "金代始建，清代修缮的佛教寺院。",
  recommend: "7"
},
{
  name: "二郎庙北殿",
  type: "古建筑",
  year: "元",
  address: "山西省运城市垣曲县",
  lng: 111.6846,
  lat: 35.2623,
  description: "元代祭祀二郎神的庙宇北殿。",
  recommend: "7"
},
{
  name: "埝堆玉皇庙",
  type: "古建筑",
  year: "元",
  address: "山西省运城市垣曲县",
  lng: 111.6928,
  lat: 35.2496,
  description: "元代道教玉皇信仰庙宇。",
  recommend: "7"
},

/* ===== 长治市 ===== */

{
  name: "庄头天仙庙",
  type: "古建筑",
  year: "元",
  address: "山西省长治市壶关县",
  lng: 113.1706,
  lat: 36.0837,
  description: "元代天仙信仰庙宇。",
  recommend: "7"
},
{
  name: "三峻庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省长治市壶关县",
  lng: 113.1864,
  lat: 36.0946,
  description: "金清时期多次修缮的庙宇建筑。",
  recommend: "7"
},
{
  name: "真泽二仙宫",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市壶关县",
  lng: 113.2017,
  lat: 36.0712,
  description: "元清时期二仙信仰宫观。",
  recommend: "7"
},
{
  name: "辛村天齐王庙",
  type: "古建筑",
  year: "元、明至清",
  address: "山西省长治市黎城县",
  lng: 113.3816,
  lat: 36.5207,
  description: "多朝代沿用的天齐王信仰庙宇。",
  recommend: "7"
},
{
  name: "长宁大庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市黎城县",
  lng: 113.3947,
  lat: 36.5338,
  description: "元清时期大型综合庙宇建筑。",
  recommend: "7"
},
{
  name: "黎城城隍庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省长治市黎城县",
  lng: 113.3886,
  lat: 36.5284,
  description: "明清时期城隍信仰庙宇。",
  recommend: "7"
},
{
  name: "西下庄昭泽王庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市黎城县",
  lng: 113.3724,
  lat: 36.5426,
  description: "元清时期昭泽王信仰庙宇。",
  recommend: "8"
},
{
  name: "李庄武庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省长治市潞城区",
  lng: 113.2536,
  lat: 36.3168,
  description: "元清时期武神信仰庙宇。",
  recommend: "7"
},
{
  name: "李庄文庙",
  type: "古建筑",
  year: "金至民国",
  address: "山西省长治市潞城区",
  lng: 113.2618,
  lat: 36.3214,
  description: "金代始建，沿用至民国的文庙建筑。",
  recommend: "7"
},
{
  name: "原起寺",
  type: "古建筑",
  year: "宋",
  address: "山西省长治市潞城区",
  lng: 113.2476,
  lat: 36.3096,
  description: "宋代佛教寺院遗存。",
  recommend: "7"
},
{
  name: "东邑龙王庙",
  type: "古建筑",
  year: "金至清",
  address: "山西省长治市潞城区",
  lng: 113.2694,
  lat: 36.3047,
  description: "金清时期龙王信仰庙宇。",
  recommend: "7"
},
{
  name: "潦河头关帝庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市潞城区",
  lng: 113.2846,
  lat: 36.2983,
  description: "元清时期关帝信仰庙宇。",
  recommend: "8"
},
{
  name: "关村炎帝庙",
  type: "古建筑",
  year: "元、清至民国",
  address: "山西省长治市潞州区",
  lng: 113.1164,
  lat: 36.2018,
  description: "祭祀炎帝的重要庙宇，延续使用至民国。",
  recommend: "7"
},
{
  name: "马厂崇教寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市潞州区",
  lng: 113.1296,
  lat: 36.2143,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "潞安府衙",
  type: "古建筑",
  year: "明",
  address: "山西省长治市潞州区",
  lng: 113.1238,
  lat: 36.1956,
  description: "明代地方官署建筑。",
  recommend: "7"
},
{
  name: "潞安府城隍庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市潞州区",
  lng: 113.1187,
  lat: 36.1894,
  description: "元清时期城隍信仰庙宇。",
  recommend: "7"
},
{
  name: "观音堂",
  type: "古建筑",
  year: "明",
  address: "山西省长治市潞州区",
  lng: 113.1364,
  lat: 36.2078,
  description: "明代佛教观音信仰建筑。",
  recommend: "7"
},
{
  name: "西青北大禹庙",
  type: "古建筑",
  year: "明至清",
  address: "山西省长治市平顺县",
  lng: 113.4518,
  lat: 36.2086,
  description: "明清时期祭祀大禹的庙宇。",
  recommend: "7"
},
{
  name: "北社三峻庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省长治市平顺县",
  lng: 113.4684,
  lat: 36.2197,
  description: "元清时期三峻信仰庙宇。",
  recommend: "7"
},
{
  name: "北社大禹庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省长治市平顺县",
  lng: 113.4726,
  lat: 36.2264,
  description: "元清时期大禹治水信仰庙宇。",
  recommend: "7"
},
{
  name: "北甘泉圣母庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省长治市平顺县",
  lng: 113.4867,
  lat: 36.2348,
  description: "元清时期圣母信仰庙宇。",
  recommend: "7"
},
{
  name: "天台庵",
  type: "古建筑",
  year: "唐",
  address: "山西省长治市平顺县",
  lng: 113.4578,
  lat: 36.2156,
  description: "唐代佛教寺院，保存有唐代木构建筑。",
  recommend: "9"
},
{
  name: "大云院",
  type: "古建筑",
  year: "五代至清",
  address: "山西省长治市平顺县",
  lng: 113.4694,
  lat: 36.2248,
  description: "五代创建，延续至清代的佛教寺院。",
  recommend: "8"
},
{
  name: "龙门寺",
  type: "古建筑",
  year: "五代至清",
  address: "山西省长治市平顺县",
  lng: 113.4816,
  lat: 36.2317,
  description: "五代始建，多次修缮的佛教寺院。",
  recommend: "8"
},
{
  name: "明惠大师塔",
  type: "古建筑",
  year: "五代",
  address: "山西省长治市平顺县",
  lng: 113.4742,
  lat: 36.2389,
  description: "五代时期高僧明惠大师的舍利塔。",
  recommend: "7"
},
{
  name: "九天圣母庙",
  type: "古建筑",
  year: "北宋至清",
  address: "山西省长治市平顺县",
  lng: 113.4926,
  lat: 36.2194,
  description: "北宋始建，延续至清代的圣母信仰庙宇。",
  recommend: "7"
},
{
  name: "淳化寺",
  type: "古建筑",
  year: "金",
  address: "山西省长治市平顺县",
  lng: 113.4868,
  lat: 36.2463,
  description: "金代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "佛头寺",
  type: "古建筑",
  year: "宋",
  address: "山西省长治市平顺县",
  lng: 113.5016,
  lat: 36.2338,
  description: "宋代佛教寺院遗存。",
  recommend: "7"
},
{
  name: "回龙寺",
  type: "古建筑",
  year: "金",
  address: "山西省长治市平顺县",
  lng: 113.5097,
  lat: 36.2426,
  description: "金代佛教寺院。",
  recommend: "7"
},
{
  name: "夏禹神祠",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市平顺县",
  lng: 113.5234,
  lat: 36.2268,
  description: "祭祀大禹治水功绩的庙宇建筑。",
  recommend: "7"
},
{
  name: "西社卫公庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市平顺县",
  lng: 113.5386,
  lat: 36.2347,
  description: "元清时期卫公信仰庙宇。",
  recommend: "8"
},

/* ===== 长治市 · 沁县 ===== */

{
  name: "南涅水洪教院",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市沁县",
  lng: 112.6994,
  lat: 36.7418,
  description: "元清时期道教洪教院建筑。",
  recommend: "7"
},
{
  name: "沁县大云院",
  type: "古建筑",
  year: "宋至清",
  address: "山西省长治市沁县",
  lng: 112.7126,
  lat: 36.7341,
  description: "宋代创建，延续至清代的佛教寺院。",
  recommend: "7"
},
{
  name: "普照寺大殿",
  type: "古建筑",
  year: "金",
  address: "山西省长治市沁县",
  lng: 112.7289,
  lat: 36.7206,
  description: "金代佛教寺院主殿建筑。",
  recommend: "7"
},

/* ===== 长治市 · 沁源县 ===== */

{
  name: "灵空山圣寿寺",
  type: "古建筑",
  year: "明至清",
  address: "山西省长治市沁源县",
  lng: 112.3927,
  lat: 36.4976,
  description: "灵空山内重要佛教寺院。",
  recommend: "8"
},

/* ===== 长治市 · 上党区 ===== */

{
  name: "北和炎帝庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省长治市上党区",
  lng: 113.0817,
  lat: 36.0908,
  description: "元清时期祭祀炎帝的重要庙宇。",
  recommend: "7"
},
{
  name: "正觉寺",
  type: "古建筑",
  year: "金至明",
  address: "山西省长治市上党区",
  lng: 113.0954,
  lat: 36.1032,
  description: "金明时期佛教寺院。",
  recommend: "7"
},
{
  name: "长治玉皇观",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市上党区",
  lng: 113.1128,
  lat: 36.0864,
  description: "元清时期道教玉皇观建筑。",
  recommend: "7"
},
{
  name: "上党西岩寺塔",
  type: "古建筑",
  year: "唐",
  address: "山西省长治市上党区",
  lng: 113.1286,
  lat: 36.0724,
  description: "唐代佛教砖塔遗存。",
  recommend: "9"
},
{
  name: "上党长春玉皇庙",
  type: "古建筑",
  year: "北宋至清",
  address: "山西省长治市上党区",
  lng: 113.1417,
  lat: 36.0648,
  description: "北宋始建的玉皇信仰庙宇。",
  recommend: "8"
},

/* ===== 长治市 · 屯留区 ===== */

{
  name: "先师和尚舍利塔",
  type: "古建筑",
  year: "唐",
  address: "山西省长治市屯留区",
  lng: 112.8786,
  lat: 36.3208,
  description: "唐代高僧舍利塔。",
  recommend: "8"
},
{
  name: "石室蓬莱宫",
  type: "古建筑",
  year: "明至清",
  address: "山西省长治市屯留区",
  lng: 112.8924,
  lat: 36.3126,
  description: "明清时期道教宫观建筑。",
  recommend: "7"
},
{
  name: "宝峰寺",
  type: "古建筑",
  year: "元明",
  address: "山西省长治市屯留区",
  lng: 112.9068,
  lat: 36.3042,
  description: "元明时期佛教寺院。",
  recommend: "7"
},

/* ===== 长治市 · 武乡县 ===== */

{
  name: "武乡真如寺",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市武乡县",
  lng: 112.8637,
  lat: 36.8346,
  description: "元清时期佛教寺院。",
  recommend: "7"
},
{
  name: "武乡大云寺",
  type: "古建筑",
  year: "宋",
  address: "山西省长治市武乡县",
  lng: 112.8474,
  lat: 36.8216,
  description: "宋代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "会仙观",
  type: "古建筑",
  year: "金至清",
  address: "山西省长治市武乡县",
  lng: 112.8318,
  lat: 36.8427,
  description: "金清时期道教宫观。",
  recommend: "7"
},
{
  name: "洪济院",
  type: "古建筑",
  year: "金至清",
  address: "山西省长治市武乡县",
  lng: 112.8549,
  lat: 36.8534,
  description: "金清时期佛教院落建筑。",
  recommend: "7"
},
{
  name: "武乡福源院",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市武乡县",
  lng: 112.8726,
  lat: 36.8663,
  description: "元清时期佛教寺院。",
  recommend: "8"
},

/* ===== 长治市 · 襄垣县 ===== */

{
  name: "襄垣五龙庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市襄垣县",
  lng: 113.0486,
  lat: 36.5367,
  description: "元清时期龙王信仰庙宇。",
  recommend: "7"
},
{
  name: "灵泽王庙",
  type: "古建筑",
  year: "金明清",
  address: "山西省长治市襄垣县",
  lng: 113.0634,
  lat: 36.5426,
  description: "金明清时期灵泽王信仰庙宇。",
  recommend: "7"
},
{
  name: "昭泽王庙",
  type: "古建筑",
  year: "金",
  address: "山西省长治市襄垣县",
  lng: 113.0716,
  lat: 36.5289,
  description: "金代昭泽王信仰庙宇。",
  recommend: "7"
},
{
  name: "襄垣文庙",
  type: "古建筑",
  year: "元至清",
  address: "山西省长治市襄垣县",
  lng: 113.0587,
  lat: 36.5194,
  description: "元清时期儒学祭祀建筑。",
  recommend: "7"
},
{
  name: "襄垣永惠桥",
  type: "古建筑",
  year: "金",
  address: "山西省长治市襄垣县",
  lng: 113.0826,
  lat: 36.5137,
  description: "金代石拱桥建筑。",
  recommend: "7"
},
{
  name: "襄垣昭泽王庙",
  type: "古建筑",
  year: "元、明",
  address: "山西省长治市襄垣县",
  lng: 113.0946,
  lat: 36.5068,
  description: "元明时期昭泽王庙。",
  recommend: "7"
},

/* ===== 长治市 · 长子县 ===== */

{
  name: "小张碧云寺大殿",
  type: "古建筑",
  year: "宋",
  address: "山西省长治市长子县",
  lng: 112.8994,
  lat: 36.1216,
  description: "宋代佛教寺院大殿。",
  recommend: "8"
},
{
  name: "崇庆寺",
  type: "古建筑",
  year: "宋",
  address: "山西省长治市长子县",
  lng: 112.9146,
  lat: 36.1087,
  description: "宋代佛教寺院建筑。",
  recommend: "7"
},
{
  name: "布村玉皇庙",
  type: "古建筑",
  year: "宋至清",
  address: "山西省长治市长子县",
  lng: 112.9274,
  lat: 36.1348,
  description: "宋清时期道教玉皇庙。",
  recommend: "7"
},
{
  name: "前万户汤王庙",
  type: "古建筑",
  year: "元",
  address: "山西省长治市长子县",
  lng: 112.9418,
  lat: 36.1274,
  description: "元代祭祀汤王的庙宇。",
  recommend: "7"
},
{
  name: "下霍护国灵贬王庙",
  type: "古建筑",
  year: "金、清",
  address: "山西省长治市长子县",
  lng: 112.9567,
  lat: 36.1168,
  description: "金清时期地方守护神庙宇。",
  recommend: "7"
},
{
  name: "韩坊尧王庙大殿",
  type: "古建筑",
  year: "金",
  address: "山西省长治市长子县",
  lng: 112.9684,
  lat: 36.1096,
  description: "金代祭祀尧帝的大殿建筑。",
  recommend: "7"
},
{
  name: "长子崔府君庙大殿",
  type: "古建筑",
  year: "金",
  address: "山西省长治市长子县",
  lng: 112.9826,
  lat: 36.1028,
  description: "金代崔府君信仰庙宇主殿。",
  recommend: "7"
},
{
  name: "法兴寺",
  type: "古建筑",
  year: "唐、宋",
  address: "山西省长治市长子县",
  lng: 113.0016,
  lat: 36.0947,
  description: "唐宋时期佛教寺院，历史价值极高。",
  recommend: "9"
},
{
  name: "义合三教堂",
  type: "古建筑",
  year: "金至民国",
  address: "山西省长治市长子县",
  lng: 113.0187,
  lat: 36.0874,
  description: "融合儒释道三教的宗教建筑。",
  recommend: "8"
},
{
  name: "大中汉三峻庙",
  type: "古建筑",
  year: "元、清",
  address: "山西省长治市长子县",
  lng: 113.0346,
  lat: 36.0786,
  description: "元清时期三峻信仰庙宇。",
  recommend: "7"
},
{
  name: "中漳伏羲庙",
  type: "古建筑",
  year: "元、明",
  address: "山西省长治市长子县",
  lng: 113.0496,
  lat: 36.0694,
  description: "元明时期祭祀伏羲的庙宇。",
  recommend: "7"
},
{
  name: "天王寺",
  type: "古建筑",
  year: "金",
  address: "山西省长治市长子县",
  lng: 113.0628,
  lat: 36.0617,
  description: "金代佛教天王殿建筑。",
  recommend: "7"
},
{
  name: "长子文庙大成殿",
  type: "古建筑",
  year: "元",
  address: "山西省长治市长子县",
  lng: 113.0764,
  lat: 36.0548,
  description: "元代文庙核心建筑大成殿。",
  recommend: "9"
},

/* ===== 石窟寺及石刻 ===== */

{
  name: "云冈石窟",
  type: "石窟寺及石刻",
  year: "北魏",
  address: "山西省大同市云冈区",
  lng: 113.1396,
  lat: 40.1098,
  description: "中国四大石窟之一，北魏皇家石窟艺术巅峰。",
  recommend: "10"
},
{
  name: "羊头山石窟",
  type: "石窟寺及石刻",
  year: "北魏至唐",
  address: "山西省晋城市高平市",
  lng: 112.8774,
  lat: 35.7686,
  description: "北魏至唐代开凿的石窟造像群。",
  recommend: "8"
},
{
  name: "碧落寺",
  type: "石窟寺及石刻",
  year: "唐明",
  address: "山西省晋城市泽州县",
  lng: 112.9228,
  lat: 35.5416,
  description: "唐明时期石窟与寺院建筑结合的遗存。",
  recommend: "7"
},
{
  name: "石马寺石窟",
  type: "石窟寺及石刻",
  year: "南北朝至唐",
  address: "山西省晋中市昔阳县",
  lng: 113.7624,
  lat: 37.6138,
  description: "南北朝至唐代摩崖造像与石窟遗存。",
  recommend: "8"
},
{
  name: "挂甲山摩崖造像",
  type: "石窟寺及石刻",
  year: "北朝至明",
  address: "山西省临汾市吉县",
  lng: 110.6894,
  lat: 36.1048,
  description: "北朝至明代延续开凿的摩崖石刻造像群。",
  recommend: "8"
},
{
  name: "七里脚千佛洞石窟",
  type: "石窟寺及石刻",
  year: "南北朝至唐",
  address: "山西省临汾市隰县",
  lng: 110.9516,
  lat: 36.6408,
  description: "南北朝至唐代开凿的千佛洞石窟造像群。",
  recommend: "8"
},
{
  name: "营里千佛洞石窟",
  type: "石窟寺及石刻",
  year: "北齐至唐",
  address: "山西省临汾市乡宁县",
  lng: 110.8464,
  lat: 35.9796,
  description: "北齐至唐代延续开凿的佛教石窟群。",
  recommend: "8"
},
{
  name: "竖石佛摩崖造像",
  type: "石窟寺及石刻",
  year: "北齐至唐",
  address: "山西省吕梁市交城县",
  lng: 112.1746,
  lat: 37.5558,
  description: "北齐至唐代摩崖石刻佛像，形制高大。",
  recommend: "8"
},
{
  name: "山神峪千佛洞石窟",
  type: "石窟寺及石刻",
  year: "元、清",
  address: "山西省吕梁市交口县",
  lng: 111.1926,
  lat: 36.9794,
  description: "元清时期千佛洞石窟造像遗存。",
  recommend: "7"
},
{
  name: "龙山石窟",
  type: "石窟寺及石刻",
  year: "元",
  address: "山西省太原市晋源区",
  lng: 112.4306,
  lat: 37.7086,
  description: "元代道教题材石窟群，雕刻精细。",
  recommend: "9"
},
{
  name: "天龙山石窟",
  type: "石窟寺及石刻",
  year: "东魏至唐",
  address: "山西省太原市晋源区",
  lng: 112.3947,
  lat: 37.7048,
  description: "东魏至唐代重要佛教石窟艺术代表。",
  recommend: "10"
},
{
  name: "静居寺石窟",
  type: "石窟寺及石刻",
  year: "唐",
  address: "山西省忻州市静乐县",
  lng: 111.9436,
  lat: 38.3584,
  description: "唐代佛教石窟，依山开凿。",
  recommend: "8"
},
{
  name: "开河寺石窟",
  type: "石窟寺及石刻",
  year: "南北朝至隋",
  address: "山西省阳泉市平定县",
  lng: 113.6168,
  lat: 37.8046,
  description: "南北朝至隋代佛教石窟遗存。",
  recommend: "8"
},
{
  name: "金灯寺石窟",
  type: "石窟寺及石刻",
  year: "明",
  address: "山西省长治市平顺县",
  lng: 113.4618,
  lat: 36.2169,
  description: "明代开凿的石窟寺，与悬空寺建筑结合。",
  recommend: "9"
},
{
  name: "南涅水石刻",
  type: "石窟寺及石刻",
  year: "南北朝至宋",
  address: "山西省长治市沁县",
  lng: 112.7046,
  lat: 36.7368,
  description: "南北朝至宋代摩崖石刻造像。",
  recommend: "8"
},

/* ===== 近现代重要史迹 ===== */

{
  name: "平型关战役遗址",
  type: "近现代",
  year: "1937",
  address: "山西省大同市灵丘县",
  lng: 114.2756,
  lat: 39.6874,
  description: "抗日战争中著名的平型关大捷发生地。",
  recommend: "10"
},
{
  name: "山西省立第三中学",
  type: "近现代",
  year: "民国",
  address: "山西省大同市平城区",
  lng: 113.2958,
  lat: 40.0906,
  description: "民国时期重要教育建筑遗存。",
  recommend: "7"
},
{
  name: "大同煤矿万人坑",
  type: "近现代",
  year: "抗日战争",
  address: "山西省大同市云冈区",
  lng: 113.1684,
  lat: 40.0867,
  description: "日本侵华时期矿工遇难的重要历史遗址。",
  recommend: "9"
},
{
  name: "山西铭贤学校旧址",
  type: "近现代",
  year: "清至中华民国",
  address: "山西省晋中市太谷县",
  lng: 112.5526,
  lat: 37.4248,
  description: "近代著名教会学校旧址。",
  recommend: "8"
},
{
  name: "孔家大院",
  type: "近现代",
  year: "1925年",
  address: "山西省晋中市太谷县",
  lng: 112.5648,
  lat: 37.4176,
  description: "民国时期典型的晋商宅院建筑。",
  recommend: "8"
}
        ];
        
// ===== DeepSeek API 核心配置 =====
const DEEPSEEK_API_KEY = "sk-0745adefa4484d49bc14aea1c71b338b"; // 替换为真实Key
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";

// 调用API获取回复
async function getAiReply(question) {
    // 显示加载中
    const chatHistory = document.getElementById("aiChatHistory");
    chatHistory.innerHTML += `<div style="color:#999;">AI正在思考...</div>`;
    
    try {
        // 调用DeepSeek接口
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
        const reply = data.choices[0]?.message?.content || "无法回答";
        
        // 替换加载提示为真实回复
        chatHistory.innerHTML = chatHistory.innerHTML.replace(
            /AI正在思考\.\.\./, 
            `<strong>智能导游：</strong>${reply}`
        );
    } catch (err) {
        chatHistory.innerHTML = chatHistory.innerHTML.replace(
            /AI正在思考\.\.\./, 
            `<strong>智能导游：</strong>出错了：${err.message}`
        );
    }
}

        // 合并所有数据
        const allScenicData = [...scenicData5A, ...scenicData4A, ...ancientData];
        
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
        const loginContainer = document.getElementById('loginContainer');
        const mainInterface = document.getElementById('mainInterface');
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

        // 侧边栏切换相关DOM
        const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
        const sidebar = document.getElementById('sidebar');

        
        
        // 页面加载完成后直接初始化地图和数据（移除登录逻辑）
        window.onload = function() {
            initMap();
            loadScenicData();
            initSearchFunction();
            initFilterFunction();
            initSidebarToggle(); // 初始化侧边栏切换
        }

    
    // ===== 新增：绑定AI提问按钮 =====
    const sendBtn = document.getElementById("sendAiBtn");
    const aiInput = document.getElementById("aiInput");
    
    // 点击发送
    sendBtn.onclick = function() {
        const question = aiInput.value.trim();
        if (!question) return alert("请输入问题");
        
        // 显示用户问题
        document.getElementById("aiChatHistory").innerHTML += 
            `<div style="text-align:right; margin:8px 0;"><strong>你：</strong>${question}</div>`;
        
        // 清空输入框并调用API
        aiInput.value = "";
        getAiReply(question);
    };
    
    // 回车发送
    aiInput.onkeypress = function(e) {
        if (e.key === "Enter") sendBtn.onclick();
    };

        // 侧边栏切换功能 - 核心修复
        function initSidebarToggle() {
            sidebarToggleBtn.addEventListener('click', function() {
                sidebar.classList.toggle('hidden');
                // 触发地图重绘，确保尺寸适配
                if (map) {
                    setTimeout(() => {
                        map.invalidateSize(); // 关键：通知leaflet地图尺寸变化
                    }, 300); // 匹配侧边栏过渡动画时长
                }
                // 切换按钮图标
                this.innerHTML = sidebar.classList.contains('hidden') ? '☰' : '✕';
            });
        }
        
        // 初始化地图
        function initMap() {
            map = L.map('map').setView([35.86166, 104.195397], 5);
            
            // 高德地图图层
            L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
                subdomains: ['1', '2', '3', '4'],
                attribution: '&copy; <a href="https://ditu.amap.com/">高德地图</a>'
            }).addTo(map);
            
            // 比例尺
            L.control.scale({imperial: false, position: 'bottomleft'}).addTo(map);
            
            
            // 标记点聚类
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
            
            // 地图缩放监听
            map.on('zoomend', function() {
                currentZoomLevel = map.getZoom();
            });
            
            // 地图控件事件
            zoomInBtn.addEventListener('click', () => map.zoomIn());
            zoomOutBtn.addEventListener('click', () => map.zoomOut());
            resetViewBtn.addEventListener('click', () => map.setView([35.86166, 104.195397], 5));
            locateChinaBtn.addEventListener('click', () => map.setView([35.86166, 104.195397], 5));
        }
        
        // 加载景区数据 - 核心修复：4A/5A筛选逻辑
        function loadScenicData() {
            markerClusters.clearLayers();
            markers = [];
            
            // 筛选数据 - 精准区分各类型
            const filteredData = allScenicData.filter(item => {
                let typeMatch = false;
                
                // 全部显示
                if (currentFilter.types.includes('all')) {
                    typeMatch = true;
                }
                // 5A景区筛选：严格匹配5A级景区
                else if (currentFilter.types.includes('5A')) {
                    typeMatch = item.type === '5A级景区';
                }
                // 4A景区筛选：严格匹配4A级景区
                else if (currentFilter.types.includes('4A')) {
                    typeMatch = item.type === '4A级景区';
                }
                // 古建筛选：匹配古遗址/古建筑类型
                else if (currentFilter.types.includes('古建')) {
                    typeMatch = item.type === '古遗址' || item.type === '古建筑';
                }
                
                // 推荐度筛选（统一转为数字）
                const itemRecommend = Number(item.recommend);
                const recommendMatch = itemRecommend >= currentFilter.minRecommend;
                
                return typeMatch && recommendMatch;
            });
            
            // 更新计数
            resultCount.textContent = filteredData.length;
            scenicListContainer.innerHTML = '';
            
            // 创建标记和列表
            filteredData.forEach((item, index) => {
                const marker = createMarker(item, index);
                markers.push(marker);
                markerClusters.addLayer(marker);
                createListItem(item, index);
            });
        }
        
        // 创建地图标记
        function createMarker(item, index) {
            // 标记颜色
            let iconColor = '#1a6dcc';
            if (item.type === '5A级景区') iconColor = '#ff6b6b';
            else if (item.type === '4A级景区') iconColor = '#4ecdc4';
            else iconColor = '#ffd166'; // 古建/近现代等统一用黄色
            
            // 自定义标记：显示景区名称
            const customIcon = L.divIcon({
                html: `
                    <div class="scenic-marker" style="background:${iconColor}">
                        <span class="marker-text">${item.name}</span>
                    </div>
                `,
                className: 'custom-marker',
                iconSize: [100, 30],
                iconAnchor: [50, 15]
            });
            
            const marker = L.marker([item.lat, item.lng], {
                icon: customIcon,
                title: `${item.name} - ${item.type} (推荐度: ${item.recommend}/10)`
            });
            
            // 弹窗内容
            let popupContent = `
                <div class="custom-popup">
                    <div class="popup-title">${item.name}</div>
                    <div class="popup-type ${item.type === '5A级景区' ? 'type-5a' : item.type === '4A级景区' ? 'type-4a' : 'type-ancient'}">${item.type}</div>
                    <div class="popup-address"><strong>地址:</strong> ${item.address}</div>
            `;
            
            if (item.year) {
                popupContent += `<div class="popup-year"><strong>年代:</strong> ${item.year}</div>`;
            }
            
            // 添加天气信息占位符
            popupContent += `
                    <div class="weather-info" id="weather-${index}">
                        <div style="margin:10px 0; text-align:center;">
                            <div style="font-size:12px; color:#888;">正在获取天气信息...</div>
                        </div>
                    </div>
                    <div class="popup-description">${item.description}</div>
                    <div style="margin-top:10px; font-size:12px; color:#888;">推荐度: ${item.recommend}/10</div>
                    <div class="web-search-recommend" style="margin-top:10px;" onclick="window.open('https://www.baidu.com/s?wd=${encodeURIComponent(item.name + ' ' + item.type)}', '_blank')">
                        <div class="recommend-title">
                            <i>🔍</i> 推荐全网搜索相关信息
                        </div>
                    </div>
                </div>
            `;
            
            marker.bindPopup(popupContent);
            
            // 点击标记打开弹窗并获取天气信息
            marker.on('click', function() {
                this.openPopup();
                // 延迟获取天气确保弹窗加载完成
                setTimeout(() => {
                    fetchWeatherForPopup(item.lng, item.lat, index);
                }, 300);
            });
            
            return marker;
        }
        
        // 获取天气信息（示例接口，需替换为有效key）
        function fetchWeatherForPopup(lng, lat, index) {
            // 注意：此处高德天气API key为示例，需自行替换为有效key
            const weatherUrl = `https://restapi.amap.com/v3/weather/weatherInfo?key=013b634e19b63448bb98e068840f3091&output=JSON&extensions=base&location=${lng},${lat}`;
            
            fetch(weatherUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.status === '1' && data.lives && data.lives.length > 0) {
                        const weather = data.lives[0];
                        updateWeatherPopup(index, weather);
                    } else {
                        updateWeatherPopup(index, null, '天气信息获取失败');
                    }
                })
                .catch(error => {
                    console.error('获取天气信息失败:', error);
                    updateWeatherPopup(index, null, '网络错误，请重试');
                });
        }
        
        // 更新弹窗天气信息
        function updateWeatherPopup(index, weather, errorMsg = null) {
            const weatherElement = document.getElementById(`weather-${index}`);
            if (!weatherElement) return;
            
            if (errorMsg) {
                weatherElement.innerHTML = `
                    <div style="margin:10px 0; text-align:center;">
                        <div style="font-size:12px; color:#e74c3c;">${errorMsg}</div>
                    </div>
                `;
                return;
            }
            
            // 天气图标映射
            const weatherIcons = {
                '晴': '☀️',
                '多云': '⛅',
                '阴': '☁️',
                '雨': '🌧️',
                '雪': '❄️',
                '雾': '🌫️'
            };
            
            const weatherIcon = weatherIcons[weather.weather] || '❓';
            weatherElement.innerHTML = `
                <div style="margin:10px 0; text-align:center;">
                    <div style="font-size:24px;">${weatherIcon}</div>
                    <div style="font-size:14px; margin-top:5px;">${weather.province} ${weather.city}</div>
                    <div style="font-size:12px; color:#666; margin-top:3px;">
                        ${weather.weather} ${weather.temperature}℃ | 湿度${weather.humidity}% | 风向${weather.winddirection}${weather.windpower}级
                    </div>
                </div>
            `;
        }
        
        // 创建列表项
        function createListItem(item, index) {
            const itemElement = document.createElement('div');
            itemElement.className = 'scenic-item';
            itemElement.setAttribute('data-index', index);
            
            // 类型样式类
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
            
            // 点击列表项定位到地图标记
            itemElement.addEventListener('click', function() {
                const marker = markers[index];
                map.setView([item.lat, item.lng], 12);
                marker.openPopup();
            });
            
            scenicListContainer.appendChild(itemElement);
        }
        
        // 初始化搜索功能
        function initSearchFunction() {
            // 搜索按钮点击
            searchBtn.addEventListener('click', performSearch);
            
            // 输入框回车搜索
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') performSearch();
            });
            
            // 点击页面其他区域关闭搜索结果
            document.addEventListener('click', function(e) {
                if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && e.target !== searchBtn) {
                    searchResults.style.display = 'none';
                }
            });
            
            // 执行搜索
            function performSearch() {
                const searchTerm = searchInput.value.trim().toLowerCase();
                searchResults.style.display = 'block';
                
                if (!searchTerm) {
                    searchResults.innerHTML = '<div class="no-results">请输入搜索关键词</div>';
                    return;
                }
                
                // 筛选匹配结果
                const matchedResults = allScenicData.filter(item => 
                    item.name.toLowerCase().includes(searchTerm) || 
                    item.address.toLowerCase().includes(searchTerm) ||
                    item.description.toLowerCase().includes(searchTerm)
                );
                
                if (matchedResults.length === 0) {
                    searchResults.innerHTML = `
                        <div class="no-results">未找到"${searchTerm}"相关结果</div>
                        <div class="web-search-recommend" onclick="window.open('https://www.baidu.com/s?wd=${encodeURIComponent(searchTerm + ' 景区')}', '_blank')">
                            <div class="recommend-title">
                                <i>🔍</i> 全网搜索"${searchTerm}"相关景区
                            </div>
                        </div>
                    `;
                    return;
                }
                
                // 渲染搜索结果
                searchResults.innerHTML = '';
                matchedResults.forEach((item, index) => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <h4>${item.name}</h4>
                        <p>${item.address} | ${item.type} | 推荐度: ${item.recommend}/10</p>
                    `;
                    
                    // 点击搜索结果定位到地图
                    resultItem.addEventListener('click', function() {
                        map.setView([item.lat, item.lng], 12);
                        // 查找对应标记并打开弹窗
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
        
        // 初始化筛选功能 - 核心修复：筛选逻辑
        function initFilterFunction() {
            // 类型筛选按钮
            const filterButtons = typeFilters.querySelectorAll('.filter-btn');
            filterButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    // 重置active状态
                    filterButtons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // 更新筛选条件
                    currentFilter.types = [this.getAttribute('data-type')];
                    loadScenicData();
                });
            });
            
            // 推荐度滑块
            recommendSlider.addEventListener('input', function() {
                const value = this.value;
                sliderValue.textContent = value;
                recommendValue.textContent = value;
                currentFilter.minRecommend = Number(value);
                loadScenicData();
            });
        }
        
        // AI助手功能（占位）
        document.getElementById('sendAiBtn').addEventListener('click', function() {
            const input = document.getElementById('aiInput').value.trim();
            if (!input) return;
            
            const chatHistory = document.getElementById('aiChatHistory');
            // 添加用户消息
            chatHistory.innerHTML += `<div style="margin:5px 0; text-align:right; color:#1a6dcc;"><strong>我:</strong> ${input}</div>`;
            
            // 模拟AI回复
            setTimeout(() => {
                let reply = `抱歉，我暂时无法回答"${input}"相关问题。您可以尝试搜索景区名称、地址或类型相关问题。`;
                if (input.includes('故宫') || input.includes('紫禁城')) {
                    reply = '故宫博物院位于北京中轴线中心，是明清两代的皇家宫殿，1987年被列为世界文化遗产，建议游玩时间3-4小时。';
                } else if (input.includes('长城') || input.includes('八达岭')) {
                    reply = '八达岭长城是明长城中保存最好的一段，海拔高达1015米，是万里长城的精华所在，建议避开节假日高峰。';
                }
                
                chatHistory.innerHTML += `<div style="margin:5px 0; text-align:left; color:#666;"><strong>智能导游:</strong> ${reply}</div>`;
                chatHistory.scrollTop = chatHistory.scrollHeight;
            }, 1000);
            
            document.getElementById('aiInput').value = '';
            chatHistory.scrollTop = chatHistory.scrollHeight;
        });
        
        // Enter键发送AI提问
        document.getElementById('aiInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('sendAiBtn').click();
            }
        });