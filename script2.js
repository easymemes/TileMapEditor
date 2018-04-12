var isSessionVar=false;
var xy_started = false;
var press;
var mouseOffsetX;
var mouseOffsetY;
function xy()
{
  if(event.which==2){return false;}
    var div = document.getElementById('lulz2');
  mouseOffsetX = event.clientX-div.getBoundingClientRect().left;
  mouseOffsetY = event.clientY-div.getBoundingClientRect().top;
  if(xy_started) return;
  xy_started = true;
  div = document.getElementById('lulz2');
  mouseOffsetX = event.clientX-div.getBoundingClientRect().left;
  mouseOffsetY = event.clientY-div.getBoundingClientRect().top;
  function kekukle()
  {
    if(press)
    {
      div.style.left=event.clientX-mouseOffsetX;
      div.style.top=event.clientY-mouseOffsetY;
    }
  }
  document.addEventListener("mousemove",kekukle);
  div.addEventListener("mouseup",function(){press = false;});
  document.ondragstart = function() { return false }
  document.body.onselectstart = function() { return false }
}