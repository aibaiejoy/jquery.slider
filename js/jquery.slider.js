$(function(){
	//绑定左右移动按钮事件
	var i = -1;
	//使用锁控制动画在规定时间内只能执行一次
	var lock = false; 
	$(".prev-btn").on("click", function(){
		if(!lock){
			i--;
			lock = true;
		}
		$(".list").animate({
			left : i * 200
		}, 500, function(){
			lock = false;
		})
	})

	$(".next-btn").on("click", function(){
		if(!lock){
			i++;
			lock = true;
		}
		$(".list").animate({
			left : i * 200
		}, 500, function(){
			lock = false;
		})
	})
})