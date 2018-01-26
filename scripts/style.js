
//选项卡
var aLi = document.getElementById("sex").children;
var aShow = document.getElementById("nav-content").children;

	for(var i = 0 ; i < aLi.length ; i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			for(var i = 0 ; i < aLi.length ; i++){
				aLi[i].className = "";
				aShow[i].style.display = "none";
			}
			this.className = "active";
			aShow[this.index].style.display = "block";
		}
	}

//悬浮框
onscroll=function(){
    //获取滚动条的距离
    
    //效果更改 => 逻辑点;  更新判定条件;
    document.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        if (scrollTop <header.offsetHeight) {
            header.style.position = "relative";
        }else{
            header.style.position = "fixed";
            header.style.top = "0";
            header.style.left = "0";
            header.style.zIndex = "1000"
        }
    }
    // if (scrollTop>=header.offsetTop) {
    //     header.style.top = header.offsetTop + "px";
    //     //添加一个class属性，属性的属性值在上面给出定义
    //     header.className = "scrollactive";
    // }else{
    //     //如果顶部的值没有达到，则不执行
    //     header.className = "";
    // }
}



//轮播图
// 多想内容
