;(function($){
	//console.log($);
	$.fn.extend({
		navtop : function(){
			this.find("li:has(ul)").on("mouseover",function(){
				$(this).children().stop().slideDown()
			})
			//负责调用的对象;
			this.find("li:has(ul)").on("mouseout",function(){
				$(this).children().stop().slideUp();
			})
		}
	})
})(jQuery)
