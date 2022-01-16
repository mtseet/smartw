$("#alarms").html("<i class='fa fa-bell-o fa-3x fa-fw uiicons alarmsicon'><br><span class='alarmsicontext'>Alarms</span>");


var alarmDialog = new Dialog({id:"alaramdialog",
	css:'alarmdialog',parent:menu},false)

menu.addChild(alarmDialog,3);


var alarms=[{when:'Today',time:'4:30',enabled:false},
{when:'Tomorrow',time:'10:25',enabled:true}]


var html="<table>"
alarms.forEach(function(a){
	html+="<tr>"
	html+="<td class='alarmtimetext'>"+a.time+"<br><span class='alarmwhentext'>"+a.when+"</span></td>"
	html+="<td class='alarmenabledtext'><i class='fa fa-bell-o'></td>"
	html+="</tr>"
})
html+="<tr>"
html+="<td>"
html+="<button class='alarmbutton'>&nbsp;+ New Alaram&nbsp;</button>"
html+="</td><td></td>"
html+="</tr>"
html+="</table>"

$('#alaramdialog').html(html);
