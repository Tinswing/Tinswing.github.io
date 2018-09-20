var fourjs = (function(){
	var goodsTitle = document.getElementsByClassName('four-goods-title')[0],
		goodsBar = goodsTitle.getElementsByTagName('li');
		console.log(goodsBar);

	//商品导航部分
	function barToggle(){

	}
    //第四页初始化函数
    function init(){
    	barToggle();
    }
    return init;
}());

fourjs();