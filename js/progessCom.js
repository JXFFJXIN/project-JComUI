function JCProgress(el) {
    this.init(el); // 初始化
}
// 继承
JCProgress.prototype = new Component();
// // 注册属性
let progressOptions = {
    name: 'jc-progress', //组件名称
    props: { // 注册特性
        percentage: {
            type: Number,
            default: 0,
            validator(prop) {
                return prop <= 100 && prop >= 0;
            }
        },
        status: {
            type: String,
            default: 'default',
            validator(prop) {
                return ['default', 'success', 'exception', 'warning'].indexOf(prop) !== -1;
            }
        },
        'stroke-width': {
            type: Number,
            default: 6,
        },
        'text-inside': {
            type: Boolean,
            default: false
        }
    },
    render() { //渲染
        var template = `
        <div class="jc-progress">
          <div 
            class="line" 
            style="
              height: ${this['stroke-width']}px;
              width: ${this['text-inside'] ? '100%' : '94%'};
              margin-right: ${this['text-inside'] ? '0' : '1%'}
            "
          >
            <div class="bottom"></div>
            <div 
              class="top ${this.status !== 'default' ? this.status : ''}"
              style="width: ${this.percentage}%"
            >
              ${this['text-inside'] ? `<div class="inside-text" style="line-height: ${this['stroke-width']}px">${this.percentage}%</div>` : ''}
            </div>
          </div>
          ${this['text-inside'] ? '' : `<div class="outer-text">${this.percentage}%</div>`}
        </div>
      `;
        this.el.outerHTML = template;
    }
}
Object.assign(JCProgress.prototype, progressOptions);
console.log(JCProgress.prototype)

var progressTagMap = document.getElementsByTagName('jc-progress');
for (var i = progressTagMap.length - 1; i >= 0; i--) {
    new JCProgress(progressTagMap[i])
}