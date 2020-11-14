function JCPaging(el) {
    this.init(el)
}
JCPaging.prototype = new Component();
var pagingOptions = {
    name: 'jc-paging',
    props: {
        total:{
            type:Number,
            default:1,
        },
        current:{
            type:Number,
            default:1
        },
        limit:{
            type:Number,
            default:10,
        },
        firstText:{
            type:String,
            default:'首页',
        },
        prevText:{
            type:String,
            default:'上一页',
        },
        nextText:{
            type:String,
            default:'下一页',
        },
        lastText:{
            type:String,
            default:'尾页'
        },
        panelNumber:{
            type:Number,
            default:10,
        },
        
    },
    oPaging:document.createElement('div'),
    _createPagerItem(content,...extraClassName){
        var a = this._create('a');
        var len = extraClassName.length;
        for (var i = 0; i < len; i ++){
            this._class(a,`jc-paging--${extraClassName[i]}`);
        }   
        a.innerText = content;
        this.oPaging.appendChild(a);
        return a;
    },
    _getPageNumber(){
        return Math.ceil(this.total/this.limit)
    },
    _createNumbers(){
        var min = this.current - Math.floor(this.panelNumber/2);
        if(min < 1){
            min = 1
        }
        var max = min + this.panelNumber - 1;
        var pageNumber = this._getPageNumber();
        if(max>pageNumber){
            max = pageNumber;
        }
        for (var i = min; i <= max; i ++) {
            var cls = null;
            if(i === this.current) {
                cls = 'active';
            }
            this._createPagerItem(i,'number',cls)
        }
    },
    _toPage(page){
        if (page < 1) {
            page = 1;//页码最小为1
        }
        var pageNumber = this._getPageNumber();
        if (page > pageNumber) {
            page = pageNumber; //页码为最大页码
        }
    
        if (this.current === page) {
            //页码无变化
            return;
        }
        this.current = page;
        this.render();
    },
    rendered:false,
    render() {
        this.oPaging.innerHTML = '';
        this._class(this.oPaging,'jc-paging')
        var disabled = '';
        if(this.current === 1){
            disabled = 'disabled';
        }
        this._createPagerItem(this.firstText,'first',disabled);
        this._createPagerItem(this.prevText,'prev',disabled);
        this._createNumbers();
        var pageNumber = this._getPageNumber();
        disabled = "";
        if (this.current === pageNumber){
            disabled = 'disabled'
        }
        this._createPagerItem(this.nextText,'next',disabled);
        this._createPagerItem(this.lastText,'last',disabled);
        var span = this._create('span');
        span.className = 'jc-paging--text';
        span.innerHTML = `<i class="current">${this.current}</i> / <i class="total">${pageNumber}</i>`
        this._append(this.oPaging,span);
        var startHTML = document.getElementsByClassName('jc-paging')[0];
        if(!this.rendered){
            this.el.outerHTML = this.oPaging.outerHTML;
            this.rendered = true;
        }else{
            startHTML.outerHTML = this.oPaging.outerHTML
        }
        var that = this;
        var opage = document.getElementsByClassName('jc-paging')[0];
        opage.onclick=function (e){
           if(e.target.classList.contains('jc-paging--first')){
               that._toPage(1);
           }
           else if (e.target.classList.contains('jc-paging--prev')) {
               that._toPage(that.current - 1);
           }
           else if (e.target.classList.contains('jc-paging--next')) {
                that._toPage(that.current +1);
           }
           else if (e.target.classList.contains('jc-paging--last')) {
               that._toPage(that._getPageNumber());
           }
           else if (e.target.classList.contains('jc-paging--number')) {
               that._toPage(+e.target.innerText);
           }
        }
    },
}
Object.assign(JCPaging.prototype, pagingOptions)

var pagingMap = document.getElementsByTagName('jc-paging');
for (var i = pagingMap.length - 1; i >= 0; i--) {
    new JCPaging(pagingMap[i]);
}
