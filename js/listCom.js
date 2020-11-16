function JCList(el){
    this.init(el)
}

JCList.prototype = new Component();

var listOptions = {
    name:'jc-list',
    props:{
        key:{
            type:String,
            default:'hot',
        },
        disimg:{
            type:Boolean,
            default:false,
        },
        disminor:{
            type:Boolean,
            default:false,
        },
        distools:{
            type:Boolean,
            default:false,
        },
        disrank:{
            type:Boolean,
            default:false,
        },
        disimg:{
            type:Boolean,
            default:false,
        },
    },
    data:{
        datalist:[
            {
                maintext:`级别三，如何看待网曝阿里巴巴 p8 、上交博士在招聘软件上公开招私人生活助理，每月 1.6w 且可安排阿里正职？`,
                minortext:`网友爆料，求职中遭遇阿里员工利用发布的兼职招聘信息招聘私人生活助理，还表示可以包养，包养后可以申请正职…相关事情请看下面文章： 阿里 P8 包养事件`,
                hot:'12127',
                href:'https://www.baidu.com',
                imgSrc:'https://pic3.zhimg.com/80/v2-45cf0cd324748ee7ef0c1463d3bde03f_400x224.jpg',
                isNew:false,
            },
            {
                maintext:`级别一，如何看待网曝阿里巴巴 p8 、上交博士在招聘软件上公开招私人生活助理，每月 1.6w 且可安排阿里正职？`,
                minortext:`网友爆料，求职中遭遇阿里员工利用发布的兼职招聘信息招聘私人生活助理，还表示可以包养，包养后可以申请正职…相关事情请看下面文章： 阿里 P8 包养事件`,
                hot:'12130',
                href:'https://www.baidu.com',
                imgSrc:'https://pic3.zhimg.com/80/v2-45cf0cd324748ee7ef0c1463d3bde03f_400x224.jpg',
                isNew:false,
            },
            {
                maintext:`级别四，如何看待网曝阿里巴巴 p8 、上交博士在招聘软件上公开招私人生活助理，每月 1.6w 且可安排阿里正职？`,
                minortext:`网友爆料，求职中遭遇阿里员工利用发布的兼职招聘信息招聘私人生活助理，还表示可以包养，包养后可以申请正职…相关事情请看下面文章： 阿里 P8 包养事件`,
                hot:'12122',
                href:'https://www.baidu.com',
                imgSrc:'https://pic3.zhimg.com/80/v2-45cf0cd324748ee7ef0c1463d3bde03f_400x224.jpg',
                isNew:true,
            },
            {
                maintext:`级别二，如何看待网曝阿里巴巴 p8 、上交博士在招聘软件上公开招私人生活助理，每月 1.6w 且可安排阿里正职？`,
                minortext:`网友爆料，求职中遭遇阿里员工利用发布的兼职招聘信息招聘私人生活助理，还表示可以包养，包养后可以申请正职…相关事情请看下面文章： 阿里 P8 包养事件`,
                hot:'12128',
                href:'https://www.baidu.com',
                imgSrc:'https://pic3.zhimg.com/80/v2-45cf0cd324748ee7ef0c1463d3bde03f_400x224.jpg',
                isNew:false,
            },
            {
                maintext:`级别五，如何看待网曝阿里巴巴 p8 、上交博士在招聘软件上公开招私人生活助理，每月 1.6w 且可安排阿里正职？`,
                minortext:`网友爆料，求职中遭遇阿里员工利用发布的兼职招聘信息招聘私人生活助理，还表示可以包养，包养后可以申请正职…相关事情请看下面文章： 阿里 P8 包养事件`,
                hot:'12119',
                href:'https://www.baidu.com',
                imgSrc:'https://pic3.zhimg.com/80/v2-45cf0cd324748ee7ef0c1463d3bde03f_400x224.jpg',
                isNew:true,
            },
            {
                maintext:`级别六，如何看待网曝阿里巴巴 p8 、上交博士在招聘软件上公开招私人生活助理，每月 1.6w 且可安排阿里正职？`,
                minortext:`网友爆料，求职中遭遇阿里员工利用发布的兼职招聘信息招聘私人生活助理，还表示可以包养，包养后可以申请正职…相关事情请看下面文章： 阿里 P8 包养事件`,
                hot:'12100',
                href:'https://www.baidu.com',
                imgSrc:'https://pic3.zhimg.com/80/v2-45cf0cd324748ee7ef0c1463d3bde03f_400x224.jpg',
                isNew:false,
            }
        ]
    },
    render(){
        console.log(this.disimg)
        var that = this;
        // 数据处理
        var data = this.datalist.sort((a,b)=>b[that.key] - a[that.key])
        // 创建dom
        var listBox = this._create('div');
        this._class(listBox,'jc-list');
        var listList = this._create('ol');
        var len = data.length;
        for (var i = 0; i < len;i++){
            var listItem = this._create('li');
            var appendList = [];
            var datafor = data[i];
            if(!this.disrank) {
                var rankItem = this._create('div');
                this._class(rankItem,'jc-list--rank');
                if(datafor.isNew){
                    var newItem = this._create('div');
                    this._class(newItem,'jc-list--new');
                    newItem.innerHTML = '新'
                    this._append(rankItem,newItem);
                }
                appendList.push(rankItem);
            }
            var contentBox = this._create('div');
            var contentMainBox = this._create('h2');
            var contentMainItem = this._create('a');
            contentMainItem.innerHTML = datafor.maintext;
            contentMainItem.href = datafor.href;
            this._append(contentMainBox,contentMainItem);
            this._append(contentBox,contentMainBox);
            if(!this.disminor){
                var contentMinorBox = this._create('p');
                var contentMinorItem = this._create('a');
                contentMinorItem.innerHTML = datafor.minortext;
                contentMinorItem.href = datafor.href;
                this._append(contentMinorBox,contentMinorItem);
                this._append(contentBox,contentMinorBox)
            };
            if(!this.distools){
                var toolsBox = this._create('div');
                this._class(toolsBox,'jc-list--tools');
                var keyBox = this._create('div');
                var keyIcon = this._create('span');
                var keyItem = this._create('span');
                var dataKey = datafor[this.key];
                keyIcon.innerHTML = `&#xe627;`;
                this._class(keyIcon,'jc-list--iconfont');
                keyItem.innerHTML = `${dataKey}热度`;
                this._append(keyBox,keyIcon,keyItem);
                this._append(toolsBox,keyBox);
                this._append(contentBox,toolsBox)
            }
            this._class(contentBox,'jc-list--content');
            appendList.push(contentBox);
            if(!this.disimg){
                var imgBox = this._create('div');
                this._class(imgBox,'jc-list--img');
                var imgA = this._create('a');
                var imgItem = this._create('img');
                imgA.href = datafor.href;
                imgItem.src = datafor.imgSrc;
                imgItem.alt = datafor.maintext;
                this._append(imgA,imgItem);
                this._append(imgBox,imgA);
                appendList.push(imgBox);
            }
            this._append(listItem,...appendList);
            this._append(listList,listItem);
        }
        this._append(listBox,listList);
        // 替换dom
        this.el.outerHTML = listBox.outerHTML;
    }
}

Object.assign(JCList.prototype,listOptions);
console.log(JCList.prototype)
var listMap = document.getElementsByTagName('jc-list');
for (var i = listMap.length - 1; i >= 0; i -- ){
    new JCList(listMap[i]);
}