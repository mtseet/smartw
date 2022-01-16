function Clock(id,updateInterval) {

  this.selector = "#"+id;
  this.updateInterval = updateInterval
}

Clock.prototype.update = function()
{
   

  var now = new Date();
  var ctx = document.getElementById('clockcanvas').getContext('2d');
  ctx.save();
  ctx.clearRect(0, 0, 300, 200);
  ctx.translate(150, 75);
  ctx.scale(1.0, 0.5);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = $(this.selector).css("color");
  ctx.fillStyle = $(this.selector).css("background");
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';

  // Hour marks
/*  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5!= 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();
 */
ctx.beginPath();
ctx.lineWidth = 16; 
ctx.strokeStyle = $("#clockcircle").css("color");
ctx.arc(0, 0, 100, 0, Math.PI * 2, true);  
ctx.stroke();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = 'black';
  ctx.strokeStyle = $(this.selector).css("color");
  ctx.lineWidth = 8;

  // write Hours
  ctx.save();
  ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();
 
  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI / 30);
  ctx.strokeStyle = $("#clockhand").css("color");
  ctx.fillStyle = $("#clockhand").css("color");
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(120, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
//  ctx.beginPath();
//  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
//  ctx.stroke();
//  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
//  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
//  ctx.fill();
  ctx.restore();
  
  
/*  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = $("#clockcircle").css("color");
  ctx.arc(0, 0, 100, 0, Math.PI * 2, true);
  ctx.stroke();
*/
  ctx.restore();
}

Clock.prototype.start = function()
{

  this.update();

  var parent = this;
  setInterval(function(){ parent.update(); },this.updateInterval)
}


function newClock()
{
  $("#clock").html("<span id='clockcircle' class='clockcircle'></span><span id='clockhand' class='clockhand'></span><canvas id='clockcanvas' class='clockcanvas'></canvas>");
  return new Clock("clock",1000);
}
