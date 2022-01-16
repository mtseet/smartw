

$("#today").html("<i class='fa fa-spinner fa-3x fa-fw uiicons todayicon'><br><span class='todayicontext'>Today</span>");


var vmenu=new VerticalMenu(
	{	id:"vmenu", 
		css: "vmenu",
		itemIds:["vmenuitem1","vmenuitem2","vmenuitem3","vmenuitem4",
		"vmenuitem5","vmenuitem6","vmenuitem7"],
		itemCss:["vmenuitem","vmenuitem","vmenuitem","vmenuitem",
		"vmenuitem","vmenuitem","vmenuitem"],
		parent:menu},
		35,false);

menu.addChild(vmenu,1);

$("#vmenuitem1").html("<span class='todaynumbers'>374</span><br><span class='todaysteps'>steps</span>");
$("#vmenuitem2").html("<span class='todaynumbers'>0 bpm</span><br><span class='todaysteps'>65 resting</span>");
$("#vmenuitem3").html("<span class='todaynumbers'>36</span><br><span class='todaysteps'>steps this hour</span>");
$("#vmenuitem4").html("<span class='todaynumbers'>0.16</span><br><span class='todaysteps'>miles</span>");
$("#vmenuitem5").html("<span class='todaynumbers'>811</span><br><span class='todaysteps'>calories</span>");
$("#vmenuitem6").html("<span class='todaynumbers'>0</span><br><span class='todaysteps'>floors</span>");
$("#vmenuitem7").html("<span class='todaynumbers'>0</span><br><span class='todaysteps'>active minutes</span>");

