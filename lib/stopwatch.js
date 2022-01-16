
function StopWatch (properties) {

	this.stopwatchHandle = undefined
	this.id = properties.id
	this.selector = "#"+properties.id
}

StopWatch.prototype.start = function()
{
	if(this.stopwatchHandle)
	{
		this.stop();
		return;
	}

	if(!this.startTime)
		this.startTime = Date.now()

	var parent = this;

	this.stopwatchHandle=setInterval(function(){

		var elapsed = Date.now() - parent.startTime;

		var now = new Date(elapsed)

		var options = {
		  hour: 'numeric',
		  minute: 'numeric', second: 'numeric',
		  hour12: false,
		  timeZone:"UTC"
		};

		var ms = Math.round(now.getMilliseconds()/100)

		var time = new Intl.DateTimeFormat('en-US', options).format(now)+"."+ms
		
		if(time.startsWith("23:"))
			parent.reset();

		$(parent.selector).html(time);

	},100)

}

StopWatch.prototype.stop = function()
{

      if(this.stopwatchHandle)
      {
      		clearInterval(this.stopwatchHandle);
      		this.stopwatchHandle = undefined
 	  }
}

StopWatch.prototype.reset = function()
{

	this.stop();
	this.startTime = undefined
	$(this.selector).html("00:00:00.0");
}
