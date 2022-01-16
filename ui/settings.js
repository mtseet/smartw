$("#settings").html("<i class='fa fa-sliders fa-4x uiicons settingsicon'><br><span class='settingsicontext'>Settings</span>");


var settingsMenu=new VerticalMenu(
	{	id:"settingMenu", 
		css: "vmenu",
		itemIds:["smenuitem1","smenuitem2","smenuitem3"],
		itemCss:["vmenuitem","vmenuitem","vmenuitem"],
		parent:menu},
		35,false);

menu.addChild(settingsMenu,4);

var html=`<span class='settingstitle'>Faces</span><br>
	<span class='settingsdesc'>clock face settings</span>
	<select id='clockface' style='float:right' onchange='setClockFace()'>`
	clockfaces.forEach(function(face){
		if(face==currentClockface)
			html+=(`<option value='`+face+`' selected>`+face+`</option>`)
		else
			html+=(`<option value='`+face+`'>`+face+`</option>`)
	});
	html+=`</select>`

$("#smenuitem1").html(html);
$("#smenuitem2").html("<span class='settingstitle'>Version</span><br><span class='settingsdesc'>1.0</span>");
$("#smenuitem3").html("<span class='settingstitle'>About</span><br><span class='settingsdesc'></span>");


function setClockFace()
{
	var clockface = document.getElementById('clockface').value;
	localStorage.setItem('clockface', clockface);
	document.location = document.location
        
}

/*var clockFaceDialog = new Dialog({id:"clockfacedialog",css:'dialog',parent:settingsMenu},false)

$("#clockfacedialog").html("<span>Clock Face Selection</span>");

settingsMenu.addChild(clockFaceDialog,0)
*/
