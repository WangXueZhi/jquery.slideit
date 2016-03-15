$.fn.slideit = function (option) {
	
	_this = $(this);

	var range = option.range;

	var rate = option.rate||1;

	var time = option.time||500;

	var canTouch = true;

	var view = {};

	view.list = _this.children('.slideView');

	view.length = view.list.length;

	view.index = {
		last : view.length-1,
		active : 0,
		next : 1,
		prev : null
	}

	view.size = {
		w : window.innerWidth,
		h : window.innerHeight
	}

	view.touch = {
		start: null,
		current: null,
		way: null,
		distance: null
	};
	
	_this.addClass('slideBox');

	updateState();
	
	_this.empty().append($(view.active)).append($(view.next));
	
	function updateIndex(forwards){
		forwards ? view.index.active++ : view.index.active--;
		view.index.next = (view.index.active==view.index.last) ? null : (view.index.active+1);
		view.index.prev = (view.index.active==0) ? null : (view.index.active-1);
		updateState();
		updateDom(forwards);
	}

	function updateDom(forwards){
		$('.slideView').not('.inview').remove();
		if(view.index.next&&forwards){
			_this.append($(view.list[view.index.next]));
		}
		if(view.index.prev>-1&&!forwards){
			_this.prepend($(view.list[view.index.prev]));
		}
	}

	function updateState(){
		$(view.active).removeClass('active inview');
		$(view.next).removeClass('next inview');
		$(view.prev).removeClass('prev inview');

		view.prev = view.index.prev>=0 ? view.list[view.index.prev] : null;
		view.next = view.index.next>=0 ? view.list[view.index.next] : null;
		view.active = view.list[view.index.active];

		$(view.active).addClass('active inview');

		if(view.prev){
			$(view.prev).addClass('prev inview');
		}
		if(view.next){
			$(view.next).addClass('next inview');
		}
	}

	_this.on('touchstart',function(e){
		if(!canTouch){
			return;
		}

		view.touch.start = e.originalEvent.targetTouches[0].pageY;	
		console.info(view.touch.start)

		$(document).on('touchmove',moving);
		$(document).on('touchend',movingEnd);

		return;
	})

	function moving(e){
		view.touch.current = e.originalEvent.targetTouches[0].pageY;

		view.touch.distance = view.touch.current - view.touch.start;
		var scale = (view.size.h - Math.abs(view.touch.distance)*rate)/(view.size.h);
		console.info(scale)
		view.touch.way = (view.touch.distance>0) ? 'down' : 'up';

		$(view.active).removeClass('down up').addClass(view.touch.way).css({'-webkit-transform':'translate(0,'+0+'px) scale('+scale+')'});

		if(view.next){
			$(view.next).css({'-webkit-transform':'translate(0,'+(view.size.h+view.touch.distance)+'px)'});
		}

		if(view.prev){
			$(view.prev).css({'-webkit-transform':'translate(0,'+(-view.size.h+view.touch.distance)+'px)'});
		}
	}

	function movingEnd(e){
		canTouch = false;

		$(document).off('touchmove',moving);
		$(document).off('touchend',movingEnd);

		var forwards = view.touch.way=='down'?false:true;

		addAnimate(forwards);

		var change = Math.abs(view.touch.distance)>=range;

		if(!forwards&&!view.prev){
			change = false;
		}

		if(forwards&&!view.next){
			change = false;
		}

		var scaleActive = change ? 0 : 1;

		$(view.active).css({'-webkit-transform':'translate(0,'+0+'px) scale('+scaleActive+')'});

		var viewDom = view.touch.way=='down' ? $(view.prev) : $(view.next);

		if(view.touch.way=='down'){
			var move = change ? 0 : '-100%';
		}else{
			var move = change ? 0 : '100%';
		}
		
		viewDom.css({'-webkit-transform':'translate(0,'+move+')'});

		setTimeout(function(){
			removeAnimate(forwards);
			$(view.active).removeClass('down up').attr('style','');
			$(view.next).attr('style','');
			$(view.prev).attr('style','');
			if(change){
				updateIndex(forwards);
			}
			canTouch = true;
		},time)
	}

	function addAnimate(forwards){
		var aniDom = forwards ? $(view.next) : $(view.prev);
		aniDom.addClass('slide-animate');
		$(view.active).addClass('slide-animate');
		$(view.active).css('transition-duration', (time/1000)+'s');
		aniDom.css('transition-duration', (time/1000)+'s');
	}

	function removeAnimate(forwards){
		var aniDom = forwards ? $(view.next) : $(view.prev);
		aniDom.removeClass('slide-animate');
		$(view.active).removeClass('slide-animate');
	}
}
