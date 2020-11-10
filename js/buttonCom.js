// 1. 获取
// var oJcButton = document.getElementsByTagName('jc-button');
// 2. 中间操作
// 标签名-特性注册-特性获取-特性检验-挂载-渲染
// 组件模块公用方法
// function Component() {};
// Component.prototype = {
//     // 初始化操作
//     init(el) {},
//     // 获取特性
//     getAttrVal() {},
//     // 数据检验
//     validate(attrKey, attrVal) {},
//     // 挂载el属性
//     initData(el) {},
// }
// 继承
JCButton.prototype = new Component();
// 配置组件特性
// 参数     | 说明          | 类型     | 可选值                                             | 默认值
// type     | 类型          | string  | primary / success / warning / danger / info / text | —      | 
// plain    | 是否朴素按钮  | boolean | —                                                   | false |
// round    | 是否圆角按钮  | boolean | —                                                   | false |
// circle   | 是否圆形按钮  | boolean | —                                                   | false |
// disabled | 是否禁用状态  | boolean | —                                                   | false |
// size     | 尺寸          | string  | medium / small / mini                               | —     |
JCButton.prototype.name='jc-button';
JCButton.prototype.props={
    type:{
        type:String,
        validator (prop) {
            return ['primary','success','warning','danger','info','text'].indexOf(prop) !== -1;
        }
    },
    plain:{
        type:Boolean,
        default: false,
    },
    round:{
        type:Boolean,
        default: false,
    },
    circle:{
        type:Boolean,
        default: false,
    },
    disabled:{
        type:Boolean,
        default: false,
    },
    size:{
        type: String,
        validator (prop) {
            return ['medium','small','mini'].indexOf(prop) !== -1;
        }
    }
},
JCButton.prototype.render = function() {
    // 样式类名
    var typeClass = this.type ? `jc-button--${this.type}`:'';
    var plainClass = this.plain ? `is-plain}`:'';
    var roundClass = this.round ? `is-round`:'';
    var circleClass = this.circle ? `is-circle`:'';
    var disabledClass = this.disabled ? `is-disabled`:'';
    var sizeClass = this.size ? `jc-button--${this.size}`:'';
    // 汇总
    var totalClass = [
        'jc-button',
        typeClass,
        plainClass,
        roundClass,
        circleClass,
        disabledClass,
        sizeClass
    ];
    // 构建结构
    var oButton = document.createElement('button');
    var jcInnerHTML = this.el.innerHTML;
    oButton.innerHTML = jcInnerHTML;
    for (var i = 0; i < totalClass.length;i ++) {
        if (totalClass[i] === '') {
            continue;
        };
        oButton.classList.add(totalClass[i]);
    }
    this.el.outerHTML = oButton.outerHTML;
}
// button组件
function JCButton(el) {
    this.init(el);// 传入dom对象进行初始化
}
// 3. 最终实现
// 封装第一第三步
var buttonTagMap = document.getElementsByTagName('jc-button');
for (var i = buttonTagMap.length - 1; i >= 0; i--) {
    new JCButton(buttonTagMap[i]);
}
