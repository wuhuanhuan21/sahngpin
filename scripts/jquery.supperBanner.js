/*
	v:0.9.0
	轮播图插件;
	src:[]         必选参数:传入图片链接数组;
	create_btn     默认为true,是否创建控空间 激活按钮用 class superbanner_active;
	movement_mode  运动模式默认为 fade 提供选项 slide scroll 
	autoplay       默认为false,自动播放选项;
	

	__by:huaizhi 2018年1月10日15:51:39
*/
;(function($){

	//默认参数;
	var defaults = {
		src:[],
		create_btn:true,
		movement_mode:"fade",
		autoplay:false
	}

	var index = 0;//默认显示的图片;

	function Banner(opts,ele){
		this.init(opts,ele)
	}
	Banner.prototype = {
		constructor:Banner,
		init:function(opts,ele){
			// 参数判断;
			// 让 opt 一定为大于1项的数组;
			if(!(opts instanceof Object) || opts==undefined || opts == "string"){
				throw "请输入正确的配置参数，要求配置参数为Object类型";
			} 
			if(!(opts.src instanceof Array)){
				throw "请输入正确的src配置,src必须为大于1项的数组";
			}
			//参数合并;
			this.opts = $.extend(defaults,opts);
			this.ele = ele;
			this.rendring_pag()
		},
		rendring_pag:function(){
			//和forEach一样;
			var $ul = $("<ul></ul>");
			//装按钮的盒子;
			var $btn_box = $("<div></div>");
			$ul.addClass("superbanner_img_contants");
			$btn_box.addClass("superbanner_btn_wrap");
			$.each(this.opts.src,function(index,src){
				var $li = $("<li></li>")
				var $img = $("<img>")
				$img.attr("src",src);
				$li.append($img);
				$ul.append($li);
				//按钮；
				var $span = $("<span></span>");
				//$span.html(index);
				$btn_box.append($span);
			})
			//console.log($ul[0]);
			this.ele.append($ul);
			this.ele.append($btn_box);

			this.reset_ele();//结构结束 =>初始化样式;
		},
		reset_ele:function(){
			//初始化样式;
			var $ele = this.ele;
			var $ul = this.ele.find(".superbanner_img_contants");
			var $li = $ul.find("li");
			var $width = $ele.width(); //当前元素的
			var $height = $ele.height(); //当前元素的
			$ele.css({
				position:"relative",
				overflow:"hidden"
			})
			$li.css({
				width:$width,
				height:$height
			})
			$li.find("img").css({
				width:$width,
				height:$height,
			})
			//根据不同的动画执行不同的初始化样式方法;
			if(this.opts.movement_mode == "scroll"){
				$ul.width( $width* $li.length);
				$li.css({
					float:"left"
				})
			}else if(this.opts.movement_mode == "fade" || this.opts.movement_mode == "slide"){
				$ul.width($width)
				$li.width($width)
				$li.css({
					position:"absolute",
					left:0,
					top:0
				})
				$li.eq(0).css({
					zIndex:1
				})
				.siblings()
				.css({
					display:"none"
				})
			}
		},
		prev:function(){

		},
		next:function(){

		},
		moveTo:function(){

		},
		fade:function(){

		},
		slide:function(){

		},
		scroll:function(){

		}

	}
	$.fn.extend({
		superbanner:function(opts){
			return new Banner(opts,this);
		}
	})

})(jQuery)