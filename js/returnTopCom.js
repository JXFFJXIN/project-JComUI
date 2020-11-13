function JCReturnTop(el){
    this.init(el);
}
JCReturnTop.prototype = new Component();
var returnTopOptions = {
    name:'jc-returntop',
    props:{
        fixed:{
            type:Boolean,
            default:false,
        },
        duration:{//滚动总时间
            type:Number,
            default:500,
        },
        tick:{//运动的间隔时间
            type:Number,
            default:20,
        },
        scrolltop:{
            type:Number,
            default:0,
        },
        top:{
            type:Number,
            default:93,
        },
        left:{
            type:Number,
            default:98,
        }
    },
    render(){
        var cnNodes = this.el.children;
        var parentDom = document.documentElement
        var oReturnTop = document.createElement('div');
        var fixedClass = this.fixed?`is-fixed`:'';
        var childClass = cnNodes.length?'':`no-child`;
        if(fixedClass){
            oReturnTop.style = `position: fixed;
            transform: translate(-100%,-100%);
            top: ${this.top}%;
            left: ${this.left}%;`
        }
        var totalClass = ['jc-returntop' , fixedClass ,childClass];
        for (var i = 0; i < totalClass.length; i ++ ){
            if(totalClass[i] === '') {
                continue;
            }
            oReturnTop.classList.add(totalClass[i])
        }
        var that = this;
        if(!!cnNodes.length){
            oReturnTop.appendChild(...cnNodes);
        }
        console.log(oReturnTop.children)
        this.el.outerHTML = oReturnTop.outerHTML;
        var onReturnTop = document.getElementsByClassName('jc-returntop')[0]
        onReturnTop.onclick = function () {
            console.log('1212121')
            if (parentDom.isScrolling) {
                return;
            }
            else {
                start();
            }
            function start() {
                // 每次变化的量 = 总量 / 次数
                //1. 总量 = 目标 - 当前
                var total = that.scrolltop - parentDom.scrollTop;
                //2. 次数
                var times = Math.ceil(that.duration/that.tick);
                //3. 每次变化的量
                var dis = total/times;
                //记录当前的次数
                console.log(parentDom.scrollTop)
                var curTimes = 0;
                //开始滚动
                parentDom.isScrolling = true;//是否正在滚动
                var timer = setInterval(function () {
                    parentDom.scrollTop += dis;
                    curTimes++;
                    if (curTimes === times) {
                        clearInterval(timer);
                        parentDom.isScrolling = false;
                    }
                }, that.tick)
            }
        }
    }
}
Object.assign(JCReturnTop.prototype,returnTopOptions)
console.log(JCReturnTop.prototype)

var ReturnTopMap = document.getElementsByTagName('jc-returntop');
console.log(ReturnTopMap)
for ( var i = ReturnTopMap.length -1; i >= 0 ; i --){
    new JCReturnTop(ReturnTopMap[i]);
}