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
/*
	当跟踪鼠标移动时，我们通常需要知道实际的鼠标指针的位置。
	event 对象传递给处理程序包含了一些有关鼠标的坐标信息。
	比如.clientX, .offsetX, 和 .pageX属性是有效的，但对他们的支持不同浏览器。
	幸运的是，jQuery的规范了.pageX和.pageY属性，以便他们能够在所有浏览器上使用
*/
//绑定mousemove事件, 这里展示了一个可以跟着鼠标移动的dom元素
$(function(){
	var x, y, lock;
	var lock = false;
	var rate = 5;	//此值可以用来
	$(".list").on("mousedown", function(e){
		//初期化时，记录鼠标起始位置，并设置锁，锁的用处是为了控制mousemove事件
		x = e.pageX;
		y = e.pageY;
		lock = false;
	}).on("mousemove", function(e){
		if(lock){
			return;
		}
		var $this = $(this);
		var moveX = e.pageX - x;
		if(Math.abs(moveX) > rate){
			var old = parseInt( $this.css("left") );
			$this.css("left", old + moveX );
			x = e.pageX;
		}
	}).on("mouseup", function(e){
		lock = true;
	})
})