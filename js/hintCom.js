function JCHint(el) {
    this.init(el);
}
JCHint.prototype = new Component();
var hintOptions = {
    name:'jc-hint',
    props:{
        type:{
            type:String,
            default:'info',
            validator (prop) {
                return ['info','success','warn','error'].indexOf(prop) !== -1
            }
        },
        content:{
            type:String,
            default:'需要jc-hint标签中content属性编写内容'
        },
        duration:{
            type:Number,
            default:1,
        },
        size:{
            type:String,
            default:'medium',
            validator (prop) {
                return ['medium','small','mini'].indexOf(prop) !== -1;
            }
        }
    },
    render () {
        // 创建dom
        var oHintBtn = _create('div');
        var oHintShow = _create('div');
        var oHintContent = _create('div');
        var oHintIcon = _create('div');
        var oHint = _create('div');
        var oInner = this.el.innerHTML;
        var that = this;
        // 样式
        _class(oHint,'jc-hint');
        _class(oHintBtn,'jc-hint--btn',`jc-hint--${this.size}`);
        _class(oHintShow,'jc-hint--show',`jc-hint--${this.type}`);
        _class(oHintContent,'jc-hint--content');
        _class(oHintIcon,'jc-hint--icon');
        // 结构
        _append(oHintShow,oHintIcon,oHintContent);
        _append(oHint,oHintBtn,oHintShow);
        oHintContent.innerHTML = this.content;
        oHintBtn.innerHTML = oInner
        this.el.outerHTML = oHint.outerHTML
        console.log(this.el.innerHTML);
        // utils
        function _create(x){
            return document.createElement(x);
        };
        function _append(x,...y) {
            var len = y.length;
            for(var i = 0; i < len; i ++){
                x.appendChild(y[i]);
            }
        }
        function _class(x,...y) {
            var len = y.length;
            for (var i = 0; i < len; i++) {
                x.classList.add(y[i]);
            }
        }
        // 事件
        var hintBtn = document.getElementsByClassName('jc-hint--btn')[0];
        var hintShow = document.getElementsByClassName('jc-hint--show')[0]
        hintShow.lock = false;
        hintBtn.onclick = function () {
            if(this.lock){
                return;
            }
            var thatFn = this;
            this.lock = true;
            hintShow.style.display = 'flex'
            setTimeout(function () {
                hintShow.style.display = 'none';
                thatFn.lock = false;
            },that.duration * 1000);
        }
    }
}
Object.assign(JCHint.prototype,hintOptions);
var hintMap = document.getElementsByTagName('jc-hint');
for (var i = hintMap.length - 1; i >=0; i --) {
    new JCHint(hintMap[i]);
}