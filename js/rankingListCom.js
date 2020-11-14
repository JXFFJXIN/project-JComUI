function JCRankingList(el) {
    this.init(el);
}

JCRankingList.prototype = new Component();

var rankingListOptions = {
    name:'jc-rankingList',
    props:{

    },
    render(){

    }
}

Object.assign(JCRankingList.prototype,rankingListOptions);
console.log(JCRankingList.prototype);

var rankingListMap = document.getElementsByClassName('jc-rankinglist');
for (var i = rankingListMap.length - 1; i >= 0; i -- ){
    new JCRankingList(rankingListMap[i]);
}