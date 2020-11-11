JCPopup.prototype = new Component();

function JCPopup(el) {
    this.init(el);
}

var JCPopupOptions = {
    name:'jc-popup',
    props:{

    },
    render(){
        var template = ``;
        this.el.outerHTML = template;
    }
}

Object.assign(JCPopup.prototype,JCPopupOptions)

console.log(JCPopup.prototype)

var PopupMap = document.getElementsByTagName('jc-popup');
for (var i = PopupMap.length - 1; i >= 0; i--) {
    new JCPopup(PopupMap[i]);
}