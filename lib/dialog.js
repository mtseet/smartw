function Dialog (properties,visible) {
	this.prevPos = undefined
	this.moved = false;
    this.id = properties.id
    this.parent = properties.parent;
    this.selector = "#"+properties.id;
    this.itemCss = properties.itemCss;
    this.css = properties.css;
    this.itemIds=properties.itemIds;
	this.menuSlideDirection = properties.menuSlideDirection
	this.hideFunc  = properties.hideFunc

    this.render();

    if(visible)
    	$(this.selector).css('display','block');

    this.setHandlers()
}

Dialog.prototype.setHandlers = function()
{
	var parent = this;

    $(this.selector).on("touchstart",function(e){
		parent.prevPos = e.originalEvent.touches[0].pageY;  

	});
	$(this.selector).on("touchmove",function(e){
		
		var diff = e.originalEvent.touches[0].pageY - parent.prevPos

		if(Math.abs(diff)>20)
		{			
			if(diff>0 && parent.menuSlideDirection=="up")
			{
				parent.hideSlideDown();
				currentMenu = parent.parent
			} 
			else if(parent.menuSlideDirection=="down")
			{

				parent.hideSlideUp();
				currentMenu = parent.parent
			}
			parent.moved = true;
		}

	});
	$(this.selector).on("touchend",function(e){

		parent.moved = false;
		parent.prevPos = undefined;
		
	});

}

Dialog.prototype.render = function()
{
	document.write(`<div id='`+this.id+`' class='`+this.css+`'></div>`);
}

Dialog.prototype.show = function()
{
	var elem = $(this.selector)
	elem.css('display','block');

}


Dialog.prototype.showSlideDown = function()
{
	var elem = $(this.selector)
	elem.css('display','block');
	elem.css('-webkit-animation','0.5s ease-in 0s move_eye')
	elem.css('animation','0.5s ease-in 0s move_eye')
}

Dialog.prototype.showSlideUp = function()
{
	var elem = $(this.selector)
	elem.css('display','block');
	elem.css('-webkit-animation','0.5s ease-in 0s move_eye3')
	elem.css('animation','0.5s ease-in 0s move_eye3')

}

Dialog.prototype.hide = function()
{
	var elem = $(this.selector)
	elem.css('display','none');

	if(this.hideFunc)
		this.hideFunc()
}

Dialog.prototype.hideSlideUp = function()
{
	var elem = $(this.selector)
	elem.css('-webkit-animation','0.5s ease-out 0s move_eye2')
	elem.css('animation','0.5s ease-out 0s move_eye2')
	elem.css('display','block');
	setTimeout(function(){
			elem.css('display','none');
	},500)
}

Dialog.prototype.hideSlideDown = function()
{
	var elem = $(this.selector)
	elem.css('-webkit-animation','0.5s ease-out 0s move_eye4')
	elem.css('animation','0.5s ease-out 0s move_eye4')
	elem.css('display','block');
	setTimeout(function(){
			elem.css('display','none');
	},500)
}

Dialog.prototype.reset = function()
{
}


