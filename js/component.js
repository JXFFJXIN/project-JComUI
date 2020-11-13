function Component() {};
Component.prototype = {
    // 初始化操作
    init(el) {
        this.initData(el);// 运行initData方法挂载el属性
        this.getAttrVal();// 运行getAttrVal方法挂载props值
        this.render();// 运行render方法进行渲染（outerHTML）
        this.event?this.event():'';
    },
    // 获取特性
    getAttrVal() {
        var props = Object.keys(this.props);
        for (var i = 0; i < props.length; i++) {
            var attrKey = props[i];// 循环数组获取key值
            var attrVal = this.el.getAttribute(attrKey);// 通过绑定的dom对象的getAttribute方法获取去属性值
            var propVal = this.validate(attrKey, attrVal);// 执行validate函数进行校验
            this[attrKey] = propVal;// 将属性挂载this上
        }
    },
    // 数据检验
    validate(attrKey, attrVal) {
        var propRule = this.props[attrKey];// 获取校验规则
        var prop = '';// 定义prop属性最后进行返回
        // 1. 如果传递的属性值为空，并且存在默认值，则设置该值为默认值
        if (attrVal === null && 'default' in propRule) {
            return propRule.default;
        }
        // 2. 根据propRule的type类型给prop赋值
        if (propRule.type === String) {// String。赋值为传递的值本身
            prop = attrVal;
        }else if (propRule.type === Number) {// Number。赋值为其数字形式
            prop = Number(attrVal);
        }else if (propRule.type === Boolean) {// Boolean.则赋值为true
            prop = true;
        }
        // 3. 如果校验规则中存在 validator 自定义校验函数，则执行函数，判断是否成功
        if (propRule.validator) {
            if (prop === null) {
                return ;
            }
            var flag = propRule.validator(prop);
            if (!flag) {
                console.error(`${this.name}组件的属性${attrKey}未校验成功`)
            }
        }
        return prop;
    },
    // 挂载el属性
    initData(el) {
        this.el = el;
    },
    _create(x){
        return document.createElement(x);
    },
    _append(x,...y){
        var len = y.length;
        for(var i = 0; i < len; i ++){
            x.appendChild(y[i]);
        }
    },
    _class(x,...y){
        var len = y.length;
        for (var i = 0; i < len; i ++ ){
            x.classList.add(y[i]);
        }
    }
}