function Clock(id,updateInterval) {

	this.selector = "#"+id;
	this.updateInterval = updateInterval
}

Clock.prototype.update = function()
{

	var date = new Date()

	// sometimes even the US needs 24-hour time
	var options = {
	  //year: 'numeric', month: 'numeric', day: 'numeric',
	  hour: 'numeric', minute: 'numeric', 
	  //second: 'numeric',
	  hour12: false,
	  //timeZone: 'America/Los_Angeles' 
	};

	var options2 = {
	  //year: 'numeric', 
	  month: 'long', day: 'numeric',
	  //hour: 'numeric', minute: 'numeric', 
	  //second: 'numeric',
	  //hour12: false,
	  //timeZone: 'America/Los_Angeles' 
	};

	var html=`<span class='clocktime'>`
			+new Intl.DateTimeFormat('en-US', options).format(date)
			+`</span><br>`+
			`<span class='clockdate'>`
			+new Intl.DateTimeFormat('en-US', options2).format(date)
			+`</span>`

	$(this.selector).html(html);
}

Clock.prototype.start = function()
{

	this.update();

	var parent = this;
	setInterval(function(){ parent.update(); },this.updateInterval)
}


function newClock()
{
	return new Clock("clock",10000);
}

