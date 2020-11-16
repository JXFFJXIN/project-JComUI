function JCWaterFallFlow(el) {
    this.init(el);
}
JCWaterFallFlow.prototype = new Component();
var waterFallFlowOptions = {
    name:'jc-waterfallflow',
    props:{
        offset:{
            type:Number,
            default:20,
        },
        moretext:{
            type:String,
            default:'加载更多',
        }
    },
    data:{
        dataArr:[
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.1.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=1&abbucket=&acm=201509290.1003.1.1286473&id=8630571529&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/T1UP1rFddiXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "李宁正品冬季新款 女子运动生活系列休闲保暖短羽绒服AYMG078",
              "price": "179.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.2.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=2&abbucket=&acm=201509290.1003.1.1286473&id=564870809035&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/579630079/TB1K1keXfuSBuNkHFqDXXXfhVXa_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "LINING李宁专柜正品 当季新款 男子运动长裤 AYKN009-2",
              "price": "189.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.3.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=3&abbucket=&acm=201509290.1003.1.1286473&id=22224940214&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/756543395/TB2Vvp8qRsmBKNjSZFFXXcT9VXa_!!756543395.png_400x400q60.jpg",
              "desc": "Lining/李宁羽毛球服 运动上衣AWDH283-3",
              "price": "189.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.4.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=4&abbucket=&acm=201509290.1003.1.1286473&id=43230821405&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/TB1gnkRGVXXXXbcaXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "进口正品欧莱雅秀发锁护乳染前护理精华素头发质防烫防受损伤12ml",
              "price": "34.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.5.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=5&abbucket=&acm=201509290.1003.1.1286473&id=528494054610&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/TB1AMSULVXXXXbAXFXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "1LINING李宁正品 夏季新款 女子训练系列短袖POLO衫 APLK022",
              "price": "79.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.6.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=6&abbucket=&acm=201509290.1003.1.1286473&id=557058784329&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/579630079/TB19L4QSVXXXXcOXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "1LINING李宁专柜正品新款 男子运动紧身衣 AUDM035-2-1",
              "price": "109.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.7.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=7&abbucket=&acm=201509290.1003.1.1286473&id=560671298024&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/579630079/TB1J_pJXbYI8KJjy0FaXXbAiVXa_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "1LINING李宁专柜正品 男子灵活训练鞋 休闲鞋 运动鞋 AFHM027-1",
              "price": "199.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.8.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=8&abbucket=&acm=201509290.1003.1.1286473&id=544413197982&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/TB1vCrfPXXXXXXeXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "1长青款 李宁正品女裤 新款女子篮球系列运动紧身裤 AULM006-1",
              "price": "79.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.9.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=9&abbucket=&acm=201509290.1003.1.1286473&id=44538292782&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/TB1YUD7HpXXXXXFXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "LINING李宁专柜正品 夏季新款 女子训练系列短袖 T恤 ATSK096-1",
              "price": "59.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.10.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=10&abbucket=&acm=201509290.1003.1.1286473&id=547173855623&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/TB1D6YFQXXXXXcTXXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "Skechers/斯凯奇休闲鞋女编织套脚中口透气轻便美国直邮7440078",
              "price": "1069.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.11.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=11&abbucket=&acm=201509290.1003.1.1286473&id=528951335169&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/TB1712uMXXXXXXwXXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "美国直邮Skechers/斯凯奇14061 GOwalk 3轻质透气散步休闲鞋女鞋",
              "price": "1069.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.12.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=12&abbucket=&acm=201509290.1003.1.1286473&id=553169145214&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/1785908005/TB2lI2Ys8NkpuFjy0FaXXbRCVXa_!!1785908005.jpg_400x400q60.jpg",
              "desc": "Skechers/斯凯奇男休闲鞋懒人鞋耐磨记忆垫舒适美国直邮49002",
              "price": "1169.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.13.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=13&abbucket=&acm=201509290.1003.1.1286473&id=545291850018&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/1785908005/TB2BMzFpt4opuFjSZFLXXX8mXXa_!!1785908005.jpg_400x400q60.jpg",
              "desc": "Skechers/斯凯奇女鞋凉拖平底包头绒面耐磨欧美美国直邮3634",
              "price": "1159.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.14.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=14&abbucket=&acm=201509290.1003.1.1286473&id=544779756681&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/1785908005/O1CN015QIR1d290L6hroOtp_!!1785908005-0-lubanu-s.jpg_400x400q60.jpg",
              "desc": "Converse/匡威女帆布鞋All Star高帮涂鸦时尚街头美国直邮70361",
              "price": "1099.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.15.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=15&abbucket=&acm=201509290.1003.1.1286473&id=545298086454&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/TB1bFhWPFXXXXcuXXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "Skechers/斯凯奇女鞋中坡跟露趾套脚简约防滑夏季美国直邮 55177",
              "price": "999.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.16.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=16&abbucket=&acm=201509290.1003.1.1286473&id=546701169705&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/TB1DLhaQXXXXXXWapXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "LINING李宁正品 春秋新款男子训练系列卫衣卫裤 运动套装 AWEM003",
              "price": "189.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.17.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=17&abbucket=&acm=201509290.1003.1.1286473&id=13794533006&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/T1jMqLXadoXXX1rNoU_015041.jpg_400x400q60.jpg",
              "desc": "三星 GALAXY Tab P7510 P7500 保护套 原装皮套 商务皮套",
              "price": "45.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.18.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=18&abbucket=&acm=201509290.1003.1.1286473&id=561046903097&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/579630079/TB1r1lKXkfb_uJkHFrdXXX2IVXa_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "LINING李宁专柜正品新款 男子保暖羽绒马甲 AMRM011-2-3",
              "price": "309.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.19.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=19&abbucket=&acm=201509290.1003.1.1286473&id=563821948431&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/1785908005/TB2.489dQfb_uJkHFqDXXXVIVXa_!!1785908005.jpg_400x400q60.jpg",
              "desc": "The North Face/北面男休闲裤长裤加厚冬防水保暖美国直邮tnf917",
              "price": "2199.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?spm=875.7931836/B.20161011.20.8dae4265icImb6&abtest=&pvid=b7ce448e-67b4-4151-97d5-acb18306486f&pos=20&abbucket=&acm=201509290.1003.1.1286473&id=522975987109&scm=1007.12710.81708.100200300000000",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/TB1YIjUJVXXXXboXFXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "Canon/佳能 EW-88B 遮光罩 佳能 TS-E 24mm f/3.5L II 镜头遮光罩",
              "price": "331.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=1&abbucket=&acm=201509290.1003.1.1286473&id=40970532916&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/911873048/O1CN01KZ39XV1YO1oEY4mx4_!!911873048.jpg_400x400q60.jpg",
              "desc": "IBM 90Y8872 服务器硬盘 600G SAS 2.5寸热插拔 X3550 X3650 M4",
              "price": "1550.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=2&abbucket=&acm=201509290.1003.1.1286473&id=557776905197&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/230670856/TB2V9xdamFRMKJjy0FhXXX.xpXa_!!230670856.jpg_400x400q60.jpg",
              "desc": "YONEX尤尼克斯羽毛球鞋男女运动鞋轻便李宗伟YY球鞋 SHB-A2MEX",
              "price": "966.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=3&abbucket=&acm=201509290.1003.1.1286473&id=21781460371&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/TB1j1zgIFXXXXcLXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "LINING李宁专柜正品 女子网球文化鞋休闲鞋 ATCG018-1-2-3",
              "price": "79.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=4&abbucket=&acm=201509290.1003.1.1286473&id=542290515011&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/TB1JB5wOpXXXXXWXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "美国直邮SKECHERS/斯凯奇 62929套脚休闲真皮皮靴男踝靴子",
              "price": "1249.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=5&abbucket=&acm=201509290.1003.1.1286473&id=564477409955&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/1785908005/TB27cYseUo09KJjSZFDXXb9npXa_!!1785908005.jpg_400x400q60.jpg",
              "desc": "Skechers/斯凯奇男鞋凉鞋休闲款渔夫鞋针织网布美国直邮51873",
              "price": "749.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=6&abbucket=&acm=201509290.1003.1.1286473&id=565058191294&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/2154540986/O1CN01Pp1jk31J9d7yCBEWs_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "御Mavic 维修配件遥控器5维按钮 五维键(1只装)御维修配件适配DJI大疆",
              "price": "15.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=7&abbucket=&acm=201509290.1003.1.1286473&id=41703289172&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/2228223317/TB2SNgsbQ7myKJjSZFgXXcT9XXa_!!2228223317.jpg_400x400q60.jpg",
              "desc": "联想电脑商用台式机扬天M7200d 锐龙四核R3-2200 8G 1T Vega8核显媲美GTX1030 秒i3办公电脑整机全套",
              "price": "1999.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=8&abbucket=&acm=201509290.1003.1.1286473&id=521166291576&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/2518853527/TB2ZRDFbt3nyKJjSZFjXXcdBXXa_!!2518853527.jpg_400x400q60.jpg",
              "desc": "联想原装LT2451H粉盒 2605D M7605D M7615DNA M7655DHF打印机墨盒",
              "price": "249.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=9&abbucket=&acm=201509290.1003.1.1286473&id=561552039008&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/579630079/TB1OGa5c0fJ8KJjy0FeXXXKEXXa_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "1LINING李宁正品 春秋新款女子多合一套装风衣外套 AWBM048",
              "price": "429.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=10&abbucket=&acm=201509290.1003.1.1286473&id=43572364308&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/TB1Q8SEHXXXXXbRXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "原装戴尔Inspiron灵越15 5558 13 7347 11 3147电源适配器65W小口",
              "price": "89.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=11&abbucket=&acm=201509290.1003.1.1286473&id=18982599215&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/11474035516876489/T1MWKQXBNeXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "韩国lock乐扣乐扣保鲜盒1.9L大容量密封饭盒塑料便当盒促销HPL818",
              "price": "32.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=12&abbucket=&acm=201509290.1003.1.1286473&id=12615906840&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/T19QpLXvpcXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "佳能EF 75-300mm F4-5.6 III镜头 佳能75-300 III 大陆行货",
              "price": "1399.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=13&abbucket=&acm=201509290.1003.1.1286473&id=530589142317&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/TB1eZQ3MXXXXXaHaXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "美国直邮Adidas/阿迪达斯 E042Y男运动防晒袖套荧光色透气包邮",
              "price": "669.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=14&abbucket=&acm=201509290.1003.1.1286473&id=529104525918&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/TB1PIvWMXXXXXaoXXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "美国直邮Skechers/斯凯奇54105彩色舒适柔软轻质越野跑鞋男",
              "price": "1599.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=15&abbucket=&acm=201509290.1003.1.1286473&id=533175211479&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/TB1lPJmKpXXXXabXFXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "行货联想X260 X250 T460 T450 T440 高级扩展坞 底座40A20090CN",
              "price": "788.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=16&abbucket=&acm=201509290.1003.1.1286473&id=531190280661&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/TB1XVKoJFXXXXaBXVXXXXXXXXXX_!!2-item_pic.png_400x400q60.jpg",
              "desc": "海尔母婴空气净化器滤网 适用HY-KJ30A 脱臭过滤网 海帕",
              "price": "299.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=17&abbucket=&acm=201509290.1003.1.1286473&id=528075152753&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/TB1pusBLFXXXXXAXXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "戴尔原装DELL latitude E5280 E5480 E7280 E7480 E5290 E5490 E7290 E7490 Dock WD15 雷电口3扩展坞站",
              "price": "820.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=18&abbucket=&acm=201509290.1003.1.1286473&id=18606400347&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/bao/upload/TB1_l2SbB1D3KVjSZFyXXbuFpXa.png_400x400q60.jpg",
              "desc": "永久山地自行车水瓶架放水杯的架子固定架装水架单车骑行儿童踏板",
              "price": "9.9"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=19&abbucket=&acm=201509290.1003.1.1286473&id=520345175803&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/TB1Gd_SHFXXXXclXFXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "1李宁专柜正品 新款 女子透气溯溪鞋 户外鞋 AHLK006-2-3",
              "price": "169.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=b593ab48-9e0f-4f79-b1fe-7b4798da37ee&pos=20&abbucket=&acm=201509290.1003.1.1286473&id=520181803682&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/bao/upload/TB1nNxBkwHqK1RjSZJnXXbNLpXa.png_400x400q60.jpg",
              "desc": "瑞士浪琴律雅系列石英女士手表皮带腕表 时尚女表L4.259.4.12.2",
              "price": "5984.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=1&abbucket=&acm=201509290.1003.1.1286473&id=530752233073&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/TB1bvsyJpXXXXavXXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "美国直邮Puma/彪马 E028Y女运动裙连衣裙数字印花短袖透气包邮",
              "price": "1119.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=2&abbucket=&acm=201509290.1003.1.1286473&id=18403495954&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/19549029578180421/T1VVgHXc0eXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "天堂伞2025E碰 一甩干不粘水男士伞 弯勾柄伞二折伞晴雨伞",
              "price": "45.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=3&abbucket=&acm=201509290.1003.1.1286473&id=529072924174&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/TB1UfMiKpXXXXcyXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "戴尔DELL USB-C 转HDMI/VGA/以太网/USB 3.0 DA200转换器 适配器",
              "price": "278.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=4&abbucket=&acm=201509290.1003.1.1286473&id=561876398480&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/1785908005/TB23AfIesrI8KJjy0FhXXbfnpXa_!!1785908005.jpg_400x400q60.jpg",
              "desc": "The North Face/北面女羽绒服鹅绒中长款连帽冬季美国直邮tnf675",
              "price": "3519.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=5&abbucket=&acm=201509290.1003.1.1286473&id=561710200671&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/1785908005/TB22bzEesrI8KJjy0FhXXbfnpXa_!!1785908005.jpg_400x400q60.jpg",
              "desc": "The North Face/北面女棉马甲保暖防水防风立领美国直邮tnf727",
              "price": "1579.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=6&abbucket=&acm=201509290.1003.1.1286473&id=561830146042&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/1785908005/TB2Q9u2dsLJ8KJjy0FnXXcFDpXa_!!1785908005.jpg_400x400q60.jpg",
              "desc": "The North Face/北面男马甲厚款针织立领休闲保暖美国直邮tnf276",
              "price": "1369.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=7&abbucket=&acm=201509290.1003.1.1286473&id=17396486871&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i1/19549019972390496/T1ERoLXnRXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "天堂NF-3雨衣防风成人男女休闲户外风衣雨衣",
              "price": "65.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=8&abbucket=&acm=201509290.1003.1.1286473&id=530733426048&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i2/TB1tUsMHVXXXXa.XVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg",
              "desc": "美国直邮THE NORTH FACE/北面 E143Y女户外休闲衣外套连帽拉链",
              "price": "1449.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=9&abbucket=&acm=201509290.1003.1.1286473&id=38671177702&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i3/1807336153/TB2lTPpohRDOuFjSZFzXXcIipXa_!!1807336153.png_400x400q60.jpg",
              "desc": "美国3M净水器 BEV120滤芯 HF20滤芯 家用直饮机配件 耗材",
              "price": "480.0"
            },
            {
              "href": "https://detail.tmall.com/item.htm?abtest=&pvid=9d96ca69-7cf2-430e-8ef0-b9cfbbafb064&pos=10&abbucket=&acm=201509290.1003.1.1286473&id=25264628361&scm=1007.12710.81708.100200300000000 ",
              "img_src": "https://img.alicdn.com/bao/uploaded/i4/1675078857/TB2ZO_1ao_C11Bjy1zeXXXtGpXa_!!1675078857.png_400x400q60.jpg",
              "desc": "专柜原装正品 ZIPPO打火机耗材-芝宝专用打火石(1盒6粒装)",
              "price": "10.0"
            }
        ],
        start:0,
        initRender:0,
    },
    computes:{
        end(){
           return this.start+this.offset
        },
    },
    render(){
        var maxCount = this.dataArr.length;
        var waterBox = this._create('div');
        var template = '';
        var that = this;
        this._class(waterBox,'jc-water');
        var waterlist = this._create('ul');
        this._class(waterlist,'jc-water--ul')
        for (var i = this.start;i < this.end; i ++){
            var info = this.dataArr[i];
            template +=`
            <li class="jc-water--li">
                <a href="${info.href}" class="jc-water--item">
                    <div class="jc-water--img">
                        <img src="${info.img_src}" alt="">
                    </div>
                    <div class="jc-water--info">
                        <div class="jc-water--desc" title="${info.desc}">${info.desc}</div>
                        <div class="jc-water--price">￥${info.price}</div>
                    </div>
                </a>
            </li>
            `
        }
        waterlist.innerHTML += template;
        var morestring = this._create('div');
        this._class(morestring,'jc-water--more');
        morestring.innerHTML = this.moretext
        this._append(waterBox,waterlist,morestring);
        if (this.initRender<0){
            this.el = document.getElementsByClassName('jc-water')[0];
            this.el.outerHTML = waterBox.outerHTML;
        }else{
            this.el.outerHTML = waterBox.outerHTML;
            this.initRender --;
        }
        var oGetMore = document.getElementsByClassName('jc-water--more')[0];
        oGetMore.onclick = function () {
            console.log(that.end)
            if(that.end === maxCount) {
                return;
            }
            that.start += that.offset;
            that.end += that.offset;

            if (that.end > maxCount) {
                console.log('1212')
                that.end = maxCount;
                that.moretext = '没有更多'
            }
            that.render();
        }
    },
}

Object.assign(JCWaterFallFlow.prototype,waterFallFlowOptions);
console.log(JCWaterFallFlow.prototype);

var waterFallFlowMap = document.getElementsByTagName('jc-waterfallflow');
for (var i = waterFallFlowMap.length - 1; i >= 0; i --) {
    new JCWaterFallFlow(waterFallFlowMap[i]);
}