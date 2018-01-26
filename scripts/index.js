/*主页业务逻辑页面*/	
//requirejs === require
require(["../src/config.js"],function(){ //先去配置;
	require(["jquery","pageall","navtop","putBig"],function($,pageall,navtop,putBig){//再去使用简写的路径;
		
		// 悬浮框
		$(function(){
			$(".slidehaha").eq(0).navtop();
		})
	})	
})
