easySlide.js v1.0
======

基于jquery或zepto的插件，用于移动端开发。
------

如何使用？
-------------------------------------------------
### 1.引入jquery或zepto
	<script type="text/javascript" src="zepto.js"></script>

### 2.引入 easySlide.js和easySlide.css
	<script type="text/javascript" src="easySlide.js"></script>
	<link rel="stylesheet" type="text/css" href="easySlide.css"/>
	
### 3.Html代码和执行方法
	<div id="main">
		<div class="sec" id="sec1"></div>
		<div class="sec" id="sec2"></div>
		<div class="sec" id="sec3"></div>
	</div>
	<script>
		/*easySlide(mainView,subView,(0-1),ifRestart)*/
		easySlide('#main','.sec',0.1,true);
	</script>


The JavaScript code about thouch to slide. Based on jquery or zepto for Mobile Development.
------

How to use？
-------------------------------------------------
### 1.Import jquery or zepto
	<script type="text/javascript" src="zepto.js"></script>
	
### 2.Import easySlide.js&easySlide.css
	<script type="text/javascript" src="easySlide.js"></script>
	<link rel="stylesheet" type="text/css" href="easySlide.css"/>
	
### 3.Html code and run the function
	<div id="main">
		<div class="sec" id="sec1"></div>
		<div class="sec" id="sec2"></div>
		<div class="sec" id="sec3"></div>
	</div>
	<script>
		/*easySlide(mainView,subView,(0-1),ifRestart)*/
		easySlide('#main','.sec',0.1,true);
	</script>
