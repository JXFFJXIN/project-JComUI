function JCSlideShow(el) {
    this.init(el)
}

JCSlideShow.prototype = new Component();

var slideShowOptions = {
    name:'jc-slideshow',
    props:{
        
    },
    render(){

    }
}

Object.assign(JCSlideShow.prototype,slideShowOptions);

var slideShowMap = document.getElementsByClassName('jc-slideshow');
for (var i = slideShowMap.length - 1; i >= 0; i -- ){
    new JCSlideShow();
}