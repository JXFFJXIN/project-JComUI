function JCSlideShow(el) {
    this.init(el)
}

JCSlideShow.prototype = new Component();

var slideShowOptions = {
    name: 'jc-slideshow',
    props: {
        isthreed: {
            type: Boolean,
            default: false,
        },
        hasbtn: {
            type: Boolean,
            default: false,
        },
        nolist: {
            type: Boolean,
            default: false,
        },
        disauto: {
            type: Boolean,
            default: false,
        },
    },
    data: {
        dataimg: [{
                src: "../image/1.jpg",
                title: "点开有彩蛋！",
                alt: "点开有彩蛋！",
                link: "https://www.baidu.com"
            },
            {
                src: "../image/2.jpg",
                title: "G.E.M.邓紫棋新歌MV上线！",
                alt: "G.E.M.邓紫棋新歌MV上线！",
                link: "https://www.baidu.com"
            },
            {
                src: "../image/3.jpg",
                title: "魔法X偶像，育成企划！",
                alt: "魔法X偶像，育成企划！",
                link: "https://www.baidu.com"
            },
            {
                src: "../image/4.jpg",
                title: "一个全程让人不明觉厉的专访！",
                alt: "一个全程让人不明觉厉的专访！",
                link: "https://www.baidu.com"
            },
            {
                src: "../image/5.jpg",
                title: "12月22日上海见",
                alt: "12月22日上海见",
                link: "https://www.baidu.com"
            },
            {
                src: "../image/1.jpg",
                title: "点开有彩蛋！",
                alt: "点开有彩蛋！",
                link: "https://www.baidu.com"
            }
        ],
        current: 0,
        timer: null,
    },
    render() {
        var oDiv = this._create('div');
        var oUl = this._create('ul');
        var oAppend = [];
        console.log(this.dataimg)
        var len = this.dataimg.length; // 数据长度
        for (var i = 0; i < len; i++) {
            var oData = this.dataimg[i];
            var oLi = this._create('li');
            var oA = this._create('a');
            var oMask = this._create('div');
            var oImg = this._create('img');
            var oSpan = this._create('span');

            oSpan.innerHTML = oData.title;
            oImg.src = oData.src;
            oImg.alt = oData.alt;
            oA.href = oData.link;

            this._class(oLi, 'jc-slideshow--li');
            this._class(oMask, 'jc-slideshow--mask');
            this._class(oA, 'jc-slideshow--link')

            this._append(oA, oMask, oImg, oSpan)
            this._append(oLi, oA)
            this._append(oUl, oLi);
        }

        this._class(oDiv, 'jc-slideshow');
        this._class(oUl, 'jc-slideshow--ul');
        oAppend.push(oUl);
        if (!this.nolist) {
            var oListUl = this._create('ul');
            this._class(oListUl, 'jc-slideshow--controllist')
            for (var i = 0; i < len - 1; i++) {
                var oListLi = this._create('li');
                this._class(oListLi, 'index');
                this._append(oListUl, oListLi);
            }
            this._class(oListUl.children[0], 'active')
            oAppend.push(oListUl);
        }
        if (this.hasbtn) {
            var oBtnBox = this._create('div');
            var oBtnLeft = this._create('div');
            var oBtnRight = this._create('div');

            oBtnLeft.innerHTML = '&lt;';
            oBtnRight.innerHTML = '&gt;';

            this._class(oBtnBox, 'jc-slideshow--controlbtn');
            this._class(oBtnLeft, 'jc-slideshow--btnleft', 'jc-slideshow--btnitem');
            this._class(oBtnRight, 'jc-slideshow--btnright', 'jc-slideshow--btnitem');

            this._append(oBtnBox, oBtnLeft, oBtnRight);
            oAppend.push(oBtnBox);

        }

        this._append(oDiv, ...oAppend);

        this.el.outerHTML = oDiv.outerHTML;

        var eBox = document.getElementsByClassName('jc-slideshow')[0];
        var eBannerList = eBox.getElementsByClassName('jc-slideshow--ul')[0];
        var bannerLength = eBannerList.children.length;
        var bannerWidth = eBannerList.children[0].offsetWidth;
        var eIndexList = eBox.getElementsByClassName('index');
        var eActiveIndex = eBox.getElementsByClassName('index active')[0];
        var eBtnBox = eBox.getElementsByClassName('jc-slideshow--controlbtn')[0];

        var that = this;
        startMove();
        handle();

        function startMove() {
            that.timer = setTimeout(autoMove, 1500);

            function autoMove() {
                that.current++
                eBannerList.style.left = `${-bannerWidth * that.current}px`
                changeIndex();
            }
        }

        function changeIndex() {
            var listCurrent = that.current % (bannerLength - 1)
            eIndexList[listCurrent].classList.add('active');
            eActiveIndex.classList.remove('active');
            eActiveIndex = eIndexList[listCurrent];
        }

        function handle() {
            eBannerList.addEventListener('transitionend', function () {
                if (that.current === bannerLength - 1) {
                    eBannerList.style.transition = 'none';
                    eBannerList.style.left = 0;
                    that.current = 0;
                }
                if (eBannerList.offsetLeft === 0) {
                    eBannerList.style.transition = 'left .2s'
                }
                startMove();
            })

            for (var i = 0; i < eIndexList.length; i++) {
                (function (i) {
                    var oIndex = eIndexList[i];
                    oIndex.onclick = function () {
                        var isActive = oIndex.classList.contains('active');
                        if (isActive) {
                            return;
                        };
                        toChange(i);
                    }
                })(i)
            }

            function toChange(i) {
                clearTimeout(that.timer);
                that.current = i;
                changeIndex();
                eBannerList.style.left = `${-i * bannerWidth}px`
                eBannerList.style.transition = 'none'
            }

            eBtnBox.onclick = function (e) {
                console.log(that.current)
                var i = 0;
                if (e.target.classList.contains("jc-slideshow--btnleft")) {
                    i = that.current - 1
                    if (i < 0 ){
                        i = bannerLength - 2;
                    }
                    console.log(bannerLength - 2)
                    toChange(i)

                } else if (e.target.classList.contains("jc-slideshow--btnright")) {
                    i = that.current + 1;
                    if (i > bannerLength - 2) {
                        i = 0;
                    }
                    toChange(i)
                }
            }

        }
    }
}

Object.assign(JCSlideShow.prototype, slideShowOptions);
console.log(JCSlideShow.prototype)

var slideShowMap = document.getElementsByTagName('jc-slideshow');
for (var i = slideShowMap.length - 1; i >= 0; i--) {
    new JCSlideShow(slideShowMap[i]);
}