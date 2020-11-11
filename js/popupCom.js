JCPopup.prototype = new Component();

function JCPopup(el) {
    this.init(el);
}

var JCPopupOptions = {
    name: 'jc-popup',
    props: {
        type: {
            type: String,
            default: 'button',
            validator(prop) {
                return ['button', 'a', 'i'].indexOf(prop) !== -1;
            }
        },
        text: {
            type: String,
            default: '分享',
        },
        width: {
            type: Number,
            default: 300,
        },
        height: {
            type: Number,
            default: 400,
        },
    },
    render() {
        // 创建dom
        var cnNodes = this.el.children;
        var oPop = _create('div');
        var oControl = _create('div')
        var oShade = _create('div')
        var oBtn = _create(this.type);
        var oContent = _create('div');
        var oClose = _create('span');
        var oPopup = _create('div');
        // 构建dom树
        _append(oPopup, oControl, oShade);
        _append(oControl, oBtn);
        _append(oShade, oPop);
        _append(oPop, oClose, oContent);
        _append(oContent, ...cnNodes);
        oBtn.innerHTML = this.text;
        // 样式
        _class(oPopup, 'jc-popup');
        _class(oPop, 'jc-popup--pop');
        _class(oControl, 'jc-popup--control');
        oPop.style = `width:${this.width}px;height:${this.height}px`
        _class(oShade, 'jc-popup--shade');
        _class(oBtn, 'jc-popup--btn');
        _class(oContent, 'jc-popup--content');
        _class(oClose, 'jc-popup--close');

        function _append(x, ...y) {
            len = y.length
            for (var i = 0; i < len; i++) {
                x.appendChild(y[i]);
            }
        }

        function _create(x) {
            return document.createElement(x);
        }

        function _class(x, ...y) {
            len = y.length
            for (var i = 0; i < len; i++) {
                x.classList.add(y[i]);
            }
        }
        this.el.outerHTML = oPopup.outerHTML
        console.log(cnNodes)
        var Btn = document.getElementsByClassName('jc-popup--btn')[0];
        var Shade = document.getElementsByClassName('jc-popup--shade')[0];
        var Close = document.getElementsByClassName('jc-popup--close')[0];
        Btn.onclick = function () {
            Shade.style.display = 'block';
            Close.onclick = function () {
                Shade.style.display = 'none';
            }
        }
    },
}

Object.assign(JCPopup.prototype, JCPopupOptions)

var PopupMap = document.getElementsByTagName('jc-popup');
for (var i = PopupMap.length - 1; i >= 0; i--) {
    var oJCPopup = new JCPopup(PopupMap[i]);
}