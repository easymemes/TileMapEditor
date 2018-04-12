var isdown = false;
var lulz = true;
function script()
{
  var div;
  var td;
  td=document.getElementById('td');
  var table = document.getElementById('table');
  div=event.target;
div.addEventListener("click",function(){
  div.className="";
  div.classList.add('Class'+xdd.PressedButtonNumber);
  table.style.backgroundColor = 'gray';
if(event.target != table)
{
  for(i=0;i<tileButtonCreator.counter;i++)
  {
    if(xdd.PressedButtonNumber == i)
    {
      if(xdd.PressedButtonNumber>0)
      {
      event.target.style.backgroundImage = 'url(image/'+i+'.png)';
      event.target.style.backgroundSize='cover';
      }
      else if(xdd.PressedButtonNumber == 0){ event.target.style.backgroundImage=null;}
    }
  }
}
})
div.addEventListener("mousedown",function(){isdown = true;})
document.addEventListener("mouseup",function(){isdown = false;})
  if(isdown && (event.target.id == "td"))
  {
  event.target.className="";
  event.target.classList.add('Class'+xdd.PressedButtonNumber);
    for(i=0;i<tileButtonCreator.counter;i++)
    {
      if(xdd.PressedButtonNumber == i)
      {
        if(xdd.PressedButtonNumber>0)
       {
        event.target.style.backgroundImage = 'url(image/'+i+'.png)';
        event.target.style.backgroundSize='cover';
       }
       else if(xdd.PressedButtonNumber == 0){ event.target.style.backgroundImage=null;}
      }
    }
table.backgroundImage=null;
table.classList="";
}
}

