function VerticalMenu (properties,blocksize,visible) {
    this.prevPos = undefined;
    this.moved = false;
    this.id = properties.id
    this.parent = properties.parent;
    this.selector = "#"+properties.id;
    this.blocksize = blocksize;
    this.itemCss = properties.itemCss;
    this.css = properties.css;
    this.itemIds=properties.itemIds;

    this.children = {}

    this.renderMenu();

    if(visible)
    	$(this.selector).css('display','block');

    this.setHandlers();

}

VerticalMenu.prototype.setHandlers = function()
{
    var parent = this;
    for(var i=0;i<this.itemIds.length;i++)
    {
        var elem = $("#"+this.itemIds[i]);

        elem.customId = i;
        
        elem.on("touchend",function(e){

            var child = parent.children[e.target.id];
            if(child)
                    {
                        child.show();
                        currentMenu = child;
                        parent.hide()
                    }
        });   
    }
}

VerticalMenu.prototype.renderMenu = function()
{
	var html=`<div id="`+this.id+`" class="`+this.css+`">`;
	for(i=0;i<this.itemIds.length;i++)
	{
		html+=`<div id="`+this.itemIds[i]+`" class="`+this.itemCss[i]+`"></div>`
		html+="<hr class='vmenuhr'>"
	}
	html+=`</div>`

	document.write(html);
}

VerticalMenu.prototype.reset = function()
{
	$(this.selector).scrollTop(0);
}

VerticalMenu.prototype.show = function()
{
	$(this.selector).css('display','block');
}

VerticalMenu.prototype.hide = function()
{
	$(this.selector).css('display','none');
}

VerticalMenu.prototype.addChild = function(child,pos)
{

    this.children[this.itemIds[pos]] = child;

}



/*
touchcancel
touchend
touchenter
touchleave
touchmove
touchstart
*/