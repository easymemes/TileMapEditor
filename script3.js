xy_started_3 = false;
var press_3;
var mouseOffsetX_3;
var mouseOffsetY_3;
function xy_3()
{
 var div_3 =  document.getElementById('lulz3');
  mouseOffsetX_3 = event.clientX-div_3.getBoundingClientRect().left;
  mouseOffsetY_3 = event.clientY-div_3.getBoundingClientRect().top;
  if(xy_started_3) return;
  xy_started_3 = true;
  mouseOffsetX_3 = event.clientX-div_3.getBoundingClientRect().left;
  mouseOffsetY_3 = event.clientY-div_3.getBoundingClientRect().top;
  function kekukle_3()
  {
    if(press_3)
    {
      div_3.style.left=event.clientX-mouseOffsetX_3;
      div_3.style.top=event.clientY-mouseOffsetY_3;//event.clientY-DivPosY+25   event.clientX-DivPosX-25
    }
  }
  document.addEventListener("mousemove",kekukle_3);
  div_3.addEventListener("mouseup",function(){press_3 = false;});
  document.ondragstart = function() { return false }
  document.body.onselectstart = function() { return false }
}
