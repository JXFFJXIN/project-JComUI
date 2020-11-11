function ReturnTopCom(el){
    this.init(el);
}
ReturnTopCom.prototype = new Component();
var returnTopOptions = {
    name:'jc-returntop',
    props:{
        
    },
    render(){

    }
}
Object.assign(ReturnTopCom.prototype,returnTopOptions)

console.log(ReturnTopCom.prototype);