/*
   easySlide.js 
   v1.0
   Based on jquery or zepto for Mobile Development.
   王学智
   41787371@qq.com
*/
function easySlide(selector, section, num, restart) {
	$(selector).addClass('easyMainView');
	$(selector+','+selector+' '+section).addClass('easyViewBox');
	$(selector+' '+section).eq(0).addClass('saeyFirstView');
	$(selector+' '+section).addClass('saeySubView');
	var esStartPoint,esNowPoint,esDistance,h = $(selector).height(),numLen =$(section).length,moveWay='none';
	$(section).on('touchstart',function(e){
		esStartPoint = e.touches[0].clientY;
		$(this).css({'z-index':1});
		if(restart==true){
			if($(this).index()==0){
				$(selector+' '+section).eq(numLen-1).css({'top':-h-5, 'z-index':2});
			}
			if($(this).index()==(numLen-1)){
				$(selector+' '+section).eq(0).css({'top':h, 'z-index':2});
			}
		}
		$(this).prev().css({'top':-h-5, 'z-index':2});
		$(this).next().css({'top':h, 'z-index':2});
	})
	$(section).on('touchmove',function(e){
		esNowPoint = e.touches[0].clientY;
		esDistance = esNowPoint-esStartPoint;
		if(moveWay=='none'){
			esDistance<0?moveWay='up':moveWay='down';
		}
		if(restart==true){
			if($(this).index()==0){
				(moveWay=='down'&&$(selector+' '+section).eq(numLen-1).css({'top':-h+esDistance}));
			}
			if($(this).index()==(numLen-1)){
				(moveWay=='up'&&$(selector+' '+section).eq(0).css({'top':h+esDistance}));
			}
		}
		moveWay=='up'?$(this).next().css({'top':h+esDistance}):$(this).prev().css({'top':-h+esDistance});
	})
	$(section).on('touchend',function(e){
		if(moveWay=='up'){
			$(this).next().animate({'top':(Math.abs(esDistance/h)>num?0:h)},200);
		}else if(moveWay=='down'){
			$(this).prev().animate({'top':(Math.abs(esDistance/h)>num?0:-h)},200);
		}
		if(restart==true){
			if($(this).index()==0){
				(moveWay=='down'&&$(selector+' '+section).eq(numLen-1).animate({'top':(Math.abs(esDistance/h)>num?0:h)},200));
			}
			if($(this).index()==(numLen-1)){
				(moveWay=='up'&&$(selector+' '+section).eq(0).animate({'top':(Math.abs(esDistance/h)>num?0:-h)},200));
			}
		}
		moveWay = 'none';
	})
}
$(document).on('touchmove',function(e){
	e.preventDefault();
});