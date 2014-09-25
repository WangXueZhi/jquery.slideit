easySlide.js v1.0
==================
The JavaScript code about thouch to slide. Based on jquery or zepto for Mobile Development.
------------------------------------------------

How to use
-------------------------------------------------
1.Import jquery or zepto
exp:<script type="text/javascript" src="zepto.js"></script>
2.Import easySlide.js
exp:<script type="text/javascript" src="easySlide.js"></script>
3.Html code and run the function
exp:
<div id="main">
	<div class="sec" id="sec1"></div>
    <div class="sec" id="sec2"></div>
    <div class="sec" id="sec3"></div>
</div>
<script>
/*easySlide(mainView,subView,(0-1),ifRestart)*/
easySlide('#main','.sec',0.1,true);
</script>
