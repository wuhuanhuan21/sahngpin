	function PageAll(){
		this.init()
	}
	PageAll.prototype={
		constructor:PageAll,
		init:function(){
			this.reload();
		},
		reload:function(){
			//console.log("1")
			var _this = this;
			$.ajax({
				url: 'clothes.html',
				type: 'GEt'
			})
			.then(function(res) {
				res=JSON.parse(res)
				console.log(res)
				_this.create(res)

			})
		},
		create:function(data){
			for(var i=0;i<data.length;i++){
				
					var $html = "<li class="+'list-item'+">"+
						            "<a id="+"list-a"+" href="+"danpin.html"+">"+
						                "<div class="+"item-img"+">"+
						                    "<img class="+"lazyload"+" src="+data[i].img+">"+
						                "</div>"+
						                "<div class="+"item_info"+">"+
						                    "<p class="+"icon"+">&nbsp;</p>"+
						                    "<h3>"+data[i].brand+"</h3>"+
						                    "<p class="+"item_name"+">"+data[i].item_name+"</p>"+
						                    "<p class="+"item_price"+">"+
						                        "<del class="+"sale_price"+">"+data[i].scale_price+"</del>"+
						                        "<span class="+"red_price"+">"+data[i].redprice+"</span>"+
						                   "</p>"+
						                "</div>"+
						            "</a>"+
						        "</li>"
				
				$($html).appendTo($(".page-content"))
			}
		}
		
	}
	 new PageAll();
