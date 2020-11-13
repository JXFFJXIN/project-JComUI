function JCCalender(el) {
    this.init(el);
}

var calenderOptions = {
    name:'jc-calender',
    props:{
        lan:{
            type:String,
            default:'China',
        },
        
    },
    render(){

    }
}

JCCalender.prototype = new Component();

Object.assign(JCCalender.prototype,calenderOptions);

console.log(JCCalender.prototype)

var calenderMap = document.getElementsByClassName('jc-calender');

for(var i = calenderMap.length - 1; i >= 0; i --) {
    new JCCalender(calenderMap[i]);
}