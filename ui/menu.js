var currentMenu;

var menu=new HorizontalMenu(
	{	id:"menu", 
		css: "menu",
		itemIds:["clock","today","timer","alarms","settings"],
		itemCss:["clock","menuitem","menuitem","menuitem","menuitem"],
		animateClasses:["uiicons","uiicons","uiicons","uiicons","uiicons"]},
		200,true);

currentMenu = menu;


function menuBack()
{
	if(currentMenu.parent)
	{
		currentMenu.reset()
		if(currentMenu.menuSlideDirection=='down')
			currentMenu.hideSlideUp()
		else if(currentMenu.menuSlideDirection=='up')
			currentMenu.hideSlideDown()
		else	
			currentMenu.hide()
		currentMenu.parent.show();
		currentMenu = currentMenu.parent;		   	
	}
	else
		currentMenu.reset()
}

