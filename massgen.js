function w_h_plus()
{
  var NumWidth = tableMass[0].style.width.substring(0,(tableMass[0].style.width.length-2));
  NumWidth = + NumWidth;
  for(i=0;i<tableMass.length;i++)
  {
  tableMass[i].style.width = NumWidth + 5 +'px';
  tableMass[i].style.height = NumWidth + 5 +'px';
  }
  cell+=5;
  console.log(cell);
  switch (setTableBorder)
  {
    case 1:
    {
      document.getElementById('div').style.width= width*cell+10+'px';
      break;
    }
    case 2:
    {
      document.getElementById('div').style.width= width*(cell+2)+4+'px';//
      break;
    }
    default:
    document.getElementById('div').style.width= b*cell+'px';
  }

}



function w_h_minus()
{
  var NumWidth = tableMass[0].style.width.substring(0,(tableMass[0].style.width.length-2));
  NumWidth = + NumWidth;
  for(i=0;i<tableMass.length;i++)
  {
  tableMass[i].style.width = NumWidth - 5 +'px';
  tableMass[i].style.height = NumWidth - 5 +'px';
  }
    cell-=5;
    switch (setTableBorder)
    {
      case 1:
      {
        document.getElementById('div').style.width= width*cell+10+'px';
        break;
      }
      case 2:
      {
        document.getElementById('div').style.width= width*(cell+2)+4+'px';//
        break;
      }
      default:
      document.getElementById('div').style.width= b*cell+'px';
    }
}


document.addEventListener("keydown",function(){
if(event.keyCode == 107){w_h_plus()};
if(event.keyCode == 109){w_h_minus()};
});

var is_visible=false;
var is_visible2=false;
var is_visible3=false;
function change_display()
{
  is_visible=!is_visible;
  document.getElementById('generate_menu_id').style.display = is_visible ? 'block' : 'none';
}
function change_display2()
{
  is_visible2=!is_visible2;
  document.getElementById('load_menu_id').style.display = is_visible2 ? 'block' : 'none';
}
function change_display3()
{
  console.log(is_visible3);
  is_visible3=!is_visible3;
  document.getElementById('register_menu_id').style.display = is_visible3 ? 'block' : 'none';
}
