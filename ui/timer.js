$("#timer").html("<i class='fa fa-clock-o fa-3x fa-fw uiicons timericon'><br><span class='timericontext'>Timer</span>");


var timerMenu=new HorizontalMenu(
	{	id:"timermenu", 
		css: "timermenu",
		itemIds:["stopwatch","countdown"],
		itemCss:["stopwatch","countdown"],
		animateClasses:["",""], parent:menu},
		200,false);


menu.addChild(timerMenu,2);

$("#stopwatch").html("<span class='timertext'>Stopwatch</span>");
$("#countdown").html("<span class='timertext'>Countdown</span>");


var stopWatchHideFunc = function ()
{
	stopWatch.reset()
}

var stopwatchDialog = new Dialog({id:"stopwatchdialog",
	css:'stopwatchdialog',parent:timerMenu,hideFunc:stopWatchHideFunc},false)

timerMenu.addChild(stopwatchDialog,0);

$("#stopwatchdialog").html(`
	<button class='timerresetbutton' onclick='stopWatch.reset()'>reset</button><br>
	<br><br>
	<span id='stopwatchdigit' class='stopwatchtext'>00:00:00.0</span><br><br>
	<button class='timergobutton' onclick='stopWatch.start()'>Go</button>
	`);


var countDownHideFunc = function ()
{
	countDown.reset()
}

var countdownDialog = new Dialog({id:"countdowndialog",
	css:'countdowndialog',parent:timerMenu,
	hideFunc:countDownHideFunc},false)

timerMenu.addChild(countdownDialog,1);

$("#countdowndialog").html(`

<button class='timerresetbutton' onclick='countDown.reset()'>reset</button><br><br>
<span id='countdowndigit' class='stopwatchtext'>00:05:00.0</span><br><br>
<input id='ctdhour' class='countdowninput countdowninputfirst'></input>
<input id='ctdminute' class='countdowninput'></input>
<input id='ctdsecond' class='countdowninput'></input>
<button class='timergobutton' onclick='countDown.start()'>Go</button>

	`);


var stopWatch = new StopWatch({id:'stopwatchdigit'})


var countdownFinishedDialog = new Dialog({id:"countdownfinisheddialog",
	css:'countdowndialog',parent:countdownDialog},false)

$('#countdownfinisheddialog').html("<br><br><br><span class='timerresetfinished'>Times Up!!</span><br><span id='countdowndigit' class='stopwatchtext'>00:00:00</span>")

var elapsedFunction = function()
{
	countdownDialog.hide()
	countdownFinishedDialog.show()
	currentMenu =countdownFinishedDialog
}

var countDown = new CountDown({id:'countdowndigit',
	hour:'ctdhour', minute:'ctdminute',second:'ctdsecond',
	elapsedFunction:elapsedFunction})


