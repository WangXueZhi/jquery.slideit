jquery.slideit.js
======

基于jquery的换屏插件，用于移动端开发。
------

如何使用？
-------------------------------------------------
### 1.引入jquery
	<script type="text/javascript" src="jquery.min.js"></script>

### 2.引入 jquery.slideit.js和jquery.slideit.css
	<script type="text/javascript" src="jquery.slideit.js"></script>
	<link rel="stylesheet" type="text/css" href="jquery.slideit.css"/>
	
### 3.Html代码和执行方法
	<div id="slideit">
        <section class='red'></section>
        <section class='grey'></section>
        <section class='blue'></section>
        <section class='yellow'></section>
        <section class='green'></section>
    </div>
	<script>
		$('#slideit').slideit({
	        range:100,
	        time:500
	    });
	</script>


### EN

The JavaScript plug-in for touch to slide that based on jquery for Mobile Development.
------

How to use？
-------------------------------------------------
### 1.Import jquery
	<script type="text/javascript" src="jquery.min.js"></script>
	
### 2.Import jquery.slideit.js & jquery.slideit.css
	<script type="text/javascript" src="jquery.slideit.js"></script>
	<link rel="stylesheet" type="text/css" href="jquery.slideit.css"/>
	
### 3.Html code and run the function
	<div id="slideit">
        <section class='red'></section>
        <section class='grey'></section>
        <section class='blue'></section>
        <section class='yellow'></section>
        <section class='green'></section>
    </div>
	<script>
		$('#slideit').slideit({
	        range:100,
	        time:500
	    });
	</script>
	
### DEMO  
![github](http://www.lc-qx.com/jstoo/easyslide/demo.png "github") 