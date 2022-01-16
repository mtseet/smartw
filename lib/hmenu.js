function HorizontalMenu (properties,blocksize,visible) {
    this.prevPos = undefined;
    this.prevPosY = undefined;
    this.moved = false;
    this.id = properties.id
    this.parent = properties.parent;
    this.selector = "#"+properties.id;
    this.blocksize = blocksize;
    this.itemCss = properties.itemCss;
    this.css = properties.css;
    this.itemIds=properties.itemIds;
    this.animateClasses = properties.animateClasses;

    this.children= {}

    this.renderMenu();

    if(visible)
    	$(this.selector).css('display','block');

    this.setHandlers();

}

HorizontalMenu.prototype.setHandlers = function()
{
	var parent = this;

    $(this.selector).on("touchstart",function(e){
		parent.prevPos = e.originalEvent.touches[0].pageX;  
		parent.prevPosY = e.originalEvent.touches[0].pageY;  

	});
	$(this.selector).on("touchmove",function(e){
		
		var elem = $(parent.selector);
		
		var diff = e.originalEvent.touches[0].pageY - parent.prevPosY
		if(Math.abs(diff)>50 && elem.scrollLeft()<200)
		{
			if(diff>0)
			{
				if(parent.pullDownDialog)
				{
					parent.pullDownDialog.showSlideDown();
					currentMenu = parent.pullDownDialog
				}
			} 
			else
			{
				if(parent.pullUpDialog)
				{
					parent.pullUpDialog.showSlideUp();
					currentMenu = parent.pullUpDialog
				}
			}
			parent.moved = true;
		}

		diff = e.originalEvent.touches[0].pageX - parent.prevPos
		if(!parent.moved && Math.abs(diff)>20)
		{
			if(diff>0)
			{
				elem.animate({scrollLeft:"-="+parent.blocksize},200, function()
					{
						parent.slidingComplete();
					});
			} 
			else
			{
				elem.animate({scrollLeft:"+="+parent.blocksize},200, function()
					{
						parent.slidingComplete();
					});
			}

			parent.moved = true;
		}

	});
	$(this.selector).on("touchend",function(e){

		if(!parent.moved)
		{		var child = parent.getSelectedChild()
				if(child)
				{
					child.show();
					currentMenu = child;
					parent.hide()
				}
		}
		
		parent.moved = false;
		parent.prevPos = undefined;
		
	});
}

HorizontalMenu.prototype.renderMenu = function()
{
	var html=`<div id="`+this.id+`" class="`+this.css+`">`;
	html+=`<table class='menutable'>`;
	html+=`<tr>`	
	for(i=0;i<this.itemIds.length;i++)
	{
		html+=`<td style='padding:0px'>`
		html+=`<div id="`+this.itemIds[i]+`" class="`+this.itemCss[i]+`"></div>`
		html+=`</td>`

	}
	html+=`</tr>`	
	html+=`</table>`
	html+=`</div>`

	document.write(html);
}

HorizontalMenu.prototype.reset = function()
{
	$(this.selector).scrollLeft(0);
	this.moved = false;
	this.prevPos = undefined;
}

HorizontalMenu.prototype.show = function()
{
	$(this.selector).css('display','block');
}

HorizontalMenu.prototype.hide = function()
{
	$(this.selector).css('display','none');
}

HorizontalMenu.prototype.addChild = function(child,pos)
{

	this.children[pos] = child;

}

HorizontalMenu.prototype.getSelectedChild = function(child,pos)
{

	var elem = $(this.selector);

	var pos = elem.scrollLeft()/this.blocksize;				

	return this.children[pos];
}

HorizontalMenu.prototype.getSelectedMenuPos = function()
{

	var elem = $(this.selector);

	var pos = elem.scrollLeft()/this.blocksize;				

	return pos;
}

HorizontalMenu.prototype.setpullDownDialog = function(pullDownDialog)
{
	this.pullDownDialog = pullDownDialog
}

HorizontalMenu.prototype.setpullUpDialog = function(pullUpDialog)
{
	this.pullUpDialog = pullUpDialog
}

HorizontalMenu.prototype.slidingComplete = function()
{
			var pos = this.getSelectedMenuPos()
		
			var selector = "."+this.animateClasses[pos];

			if(selector.length>1)
			{
				$(selector).addClass('menu-animation')

				setTimeout(function(){

					$(selector).removeClass('menu-animation')

				},1000)
			
			}
}
/*
touchcancel
touchend
touchenter
touchleave
touchmove
touchstart
*/