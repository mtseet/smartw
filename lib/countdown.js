
function CountDown (properties) {

	this.stopwatchHandle = undefined
	this.id = properties.id
	this.selector = "#"+properties.id
	this.hour = "#"+properties.hour
	this.minute = "#"+properties.minute
	this.second = "#"+properties.second

	this.elapsedFunction = properties.elapsedFunction

	this.reset()
}

CountDown.prototype.getSelectedTime = function()
{
		var h = $(this.hour).val()
		if(h.length<1)
			h=0
		var m = $(this.minute).val()
		if(m.length<1)
			m=0
		var s = $(this.second).val()
		if(s.length<1)
			s=0

		h = 1000*60*60*h

		m = 1000*60*m

		s = 1000*s; 

		return h+m+s;
}

CountDown.prototype.start = function()
{

	if(this.stopwatchHandle)
	{
		this.stop();
		return;
	}

	if(!this.startTime)
	{	
		var d = new Date();

		d=new Date(d.getTime()+this.getSelectedTime())
		
		this.startTime = d.getTime();
	}

	var parent = this;

	this.stopwatchHandle=setInterval(function(){

		var elapsed = parent.startTime - Date.now();

		if(elapsed<=0)
		{
			if(parent.elapsedFunction)
				parent.elapsedFunction()
			parent.reset();
		}
		else {
				var now = new Date(elapsed)

				var options = {
				  hour: 'numeric',
				  minute: 'numeric', second: 'numeric',
				  hour12: false,
				  timeZone:"UTC"
				};

				var ms = Math.round(now.getMilliseconds()/100)

				var time = new Intl.DateTimeFormat('en-US', options).format(now)+"."+ms
				
				$(parent.selector).html(time);
		}
	},100)

}

CountDown.prototype.getFormattedTime = function()
{
		var h = $(this.hour).val()
		if(h.length<1)
			h=0
		var m = $(this.minute).val()
		if(m.length<1)
			m=0
		var s = $(this.second).val()
		if(s.length<1)
			s=0

		var now = new Date(Date.UTC(2017,1,1,h,m,s))

		var options = {
				  hour: 'numeric',
				  minute: 'numeric', second: 'numeric',
				  hour12: false,
				  timeZone:"UTC"
				};

		var ms = Math.round(now.getMilliseconds()/100)

		var time = new Intl.DateTimeFormat('en-US', options).format(now)+"."+ms
		return time	
}

CountDown.prototype.stop = function()
{

      if(this.stopwatchHandle)
      {
      		clearInterval(this.stopwatchHandle);
      		this.stopwatchHandle = undefined
 	  }
}

CountDown.prototype.reset = function()
{

	this.stop();
	this.startTime = undefined
	$(this.selector).html(this.getFormattedTime());
}
