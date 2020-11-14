function JCTextList(el) {
    this.init(el);
}

JCTextList.prototype = new Component();

var textListOptions = {
    name:'jc-textlist',
    props:{
        
    },
    render(){

    }
}

Object.assign(JCTextList.prototype,textListOptions);

var textListMap = document.getElementsByClassName('jc-textlist');
for(var i = textListMap.length - 1; i >= 0; i -- ){
    new JCTextList(textListMap[i]);
}