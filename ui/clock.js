var clock = newClock()		
clock.start();

var pulldownDialog = new Dialog({id:"pulldowndialog",
	css:'pulldowndialog',parent:menu,menuSlideDirection:"down"},false)

$("#pulldowndialog").html("<span class='pulldowndialogtitle'>Quick Settings</span>");

menu.setpullDownDialog(pulldownDialog)


var pullupDialog = new Dialog({id:"pullupdialog",
	css:'pullupdialog',parent:menu,menuSlideDirection:"up"},false)

$("#pullupdialog").html("<span class='pullupdialogtitle'>Notifications</span>");

menu.setpullUpDialog(pullupDialog)
