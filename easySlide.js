/*
   easySlide.js . v1.0 . Based on jquery or zepto for Mobile Development. xueZhi . 417787371@qq.com
*/

function easySlide(){
	this.run = function(selector, section, num, restart,callback){
		$(selector).addClass('easyMainView');
		$(selector+','+selector+' '+section).addClass('easyViewBox');
		$(selector+' '+section).eq(0).addClass('easyFirstView');
		$(selector+' '+section).addClass('easySubView');
		var esStartPoint,esNowPoint,esDistance,h = $(selector).height(),numLen =$(section).length,moveWay='none',animating=false;
		
		$(section).on('touchstart',function(e){
			if(animating==false){
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
			}
		})
		$(section).on('touchmove',function(e){
			if(animating==false){
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
			}
		})
		$(section).on('touchend',function(e){
			if(animating==false){
				var target = null;
				if(moveWay=='up'){
					animating = true;
					Math.abs(esDistance/h)>num?(target=0):(target=h);
					if(restart==true){
						if($(this).index()==(numLen-1)){
							$(selector+' '+section).eq(0).animate({'top':target},200);;
							slideEnd(callback,target==0?0:$(this).index());
						}else{
							$(this).next().animate({'top':target},200);
							slideEnd(callback,target==0?$(this).index()+1:$(this).index());
						}
					}else{
						if($(this).index()<(numLen-1)){
							$(this).next().animate({'top':target},200);
							slideEnd(callback,target==0?$(this).index()+1:$(this).index());
						}else{
							animating = false;	
						}
					}
				}else if(moveWay=='down'){
					animating = true;
					Math.abs(esDistance/h)>num?(target=0):(target=-h);
					if(restart==true){
						if($(this).index()==0){
							$(selector+' '+section).eq(numLen-1).animate({'top':target},200);
							slideEnd(callback,target==0?$('.easySubView').length-1:0);
						}else{
							$(this).prev().animate({'top':target},200);
							slideEnd(callback,target==0?$(this).index()-1:$(this).index());
						}
					}else{
						if($(this).index()>0){
							$(this).prev().animate({'top':target},200);
							slideEnd(callback,target==0?$(this).index()-1:$(this).index());
						}else{
							animating = false;
						}
					}
				}
				moveWay = 'none';
			}
			
		});
		function slideEnd(callback,res){
			setTimeout(function(){
				animating = false;	
				callback(res);
			},200);
		}
	}
}

$(document).on('touchmove',function(e){
	e.preventDefault();
});