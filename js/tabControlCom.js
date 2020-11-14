function JCTabControl(el) {
    this.init(el)
}

JCTabControl.prototype = new Component();

var tabControlOptions = {
    name:'jc-tabcontrol',
    props:{
        type:{
            type:String,
            default:'primary',
            validator(prop){
                return ['primary','success','warning','danger','info','text'].indexOf(prop) !== -1;
            }
        },
        behavior:{
            type:String,
            default:'hover',
            validator(prop){
                return ['hover','click'].indexOf(prop) !== -1
            }
        },
        width:{
            type:Number,
            default:1230,
        },
        height:{
            type:Number,
            default:320,
        }
    },
    render(){
        var tabControlDom = this._create('div');
        this._class(tabControlDom,'jc-tabcontrol');
        tabControlDom.style.width=`${this.width}px`;
        var tabControlNav = this._create('ul');
        this._class(tabControlNav,'jc-tabcontrol--nav',`jc-tabcontrol--${this.type}`);
        tabControlNav.style.height = `${this.height}px`;
        
        var itemList = this.el.getElementsByTagName('tabcontrol-item');
        var contentList = this.el.getElementsByTagName('tabcontrol-content');
        var len = itemList.length;
        for (var i = 0; i < len; i ++){
            var tabControlLi = this._create('li');
            this._class(tabControlLi,'jc-tabcontrol--li');
            var tabControlItem = this._create('div');
            this._class(tabControlItem,'jc-tabcontrol--item');
            var tabControlContent = this._create('div');
            this._class(tabControlContent,'jc-tabcontrol--content');
            this._append(tabControlItem,...itemList[i].childNodes);
            this._append(tabControlContent,...contentList[i].childNodes);
            this._append(tabControlLi,tabControlItem,tabControlContent);
            this._append(tabControlNav,tabControlLi);
        }
        this._append(tabControlDom,tabControlNav);
        this.el.outerHTML = tabControlDom.outerHTML;

    }
}
Object.assign(JCTabControl.prototype,tabControlOptions);

console.log(JCTabControl.prototype)

var tabControlMap = document.getElementsByTagName('jc-tabcontrol');
for (var i = tabControlMap.length - 1; i >=0; i --) {
    new JCTabControl(tabControlMap[i]);
}