/*主页业务逻辑页面*/	
//requirejs === require
require(["../script/config.js"],function(){ //先去配置;
	require(["jquery","supperBanner","pop","shopping","loadLi","pageall"],function($,sup,pop,shop,loadli,pageone){//再去使用简写的路径;
		//console.log($);
		// $(".container").css({
		// 	background : '#ddd'
		// })

		/*轮播图*/
		$(".swiper-slide").supperBanner({
			src:[
				
			],
			autoplay:true
		})

		/*登陆框*/
		//console.log(pop.init())
		//$("#login").on("click",$.proxy(pop.init,pop))
		$("#login").on("click",function(){
			pop.init(`<div>
						<p>hello world</p>
					</div>`)
		})

		loadli.init($(".goodslist li"))

		//通信没有问题;
		shop.init($(".goodslist li button"))

		pageone.init()
	})	
})
