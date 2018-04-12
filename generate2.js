var count = 0;
var table;
var height;
var width;
var setTableBorder;
var cell;
var mapTiles;
class counter
{
};
var countHelp=0;
var massNumber="";
var massNumber2="";
var ismassgen = 0;
function table_gen()
{
  if(document.getElementById('text').value && document.getElementById('text2').value && document.getElementById('text4').value)
  {
    width=document.getElementById('text').value;
    height=document.getElementById('text2').value;
    if(document.getElementById('radioButton1').checked){setTableBorder = 0;}
    if(document.getElementById('radioButton2').checked){setTableBorder = 1;}
    if(document.getElementById('radioButton3').checked){setTableBorder = 2;}
    cell = document.getElementById('text4').value;
    cell = +cell;
    table_gen_2(width,height,setTableBorder,cell);
  }
}

function table_gen_2(width_tg2,height_tg2,border_tg2,cell_tg2)
{
  document.getElementById('text').value=width_tg2;
  document.getElementById('text2').value=height_tg2;
    if(count>=1)
    {
    document.getElementById('table').parentNode.removeChild(document.getElementById('table'));
    }
    count++;
  table = document.createElement('table');
  table.id="table";//так создаем элемен тстол
  var body = document.body;//создаем переменную для управления телом
  var b = width_tg2;
  var a = height_tg2;
  table.id='table';
  var div = document.getElementById('div');
  table.style.backgroundColor = 'gray';
  var style="background-color:white;width:"+cell_tg2+"px;height:"+cell_tg2+"px;";
  div.appendChild(table);//спавним тейбол
  for(i=0;i<a;i++)
  {
    window['tr'+i] = document.createElement('tr');
    table.appendChild(window['tr' + i]);
    for(j=0;j<b;j++)
    {
      window['td'+'w'+j+'h'+i] = document.createElement('td');
      window['td'+'w'+j+'h'+i].id="td";
      window['td'+'w'+j+'h'+i].classList.add("Class0");
      window['tr' + i].appendChild(window['td'+'w'+j+'h'+i]);
      window['td'+'w'+j+'h'+i].style = style;
    }
  }
  if(border_tg2 == 1)
  {
    table.style.border = 5+'px solid red';
    div.style.width= b*cell_tg2+10+'px';
    table.style.borderSpacing= 0+'px';
  }
  else if(border_tg2 == 2)
  {
    style="background-color:blue;width:"+cell_tg2+"px;height:"+cell_tg2+"px;border:10px";
    div.style.width= b*(cell_tg2+2)+2+'px';//
  }
  else
  {
    table.style.borderCollapse = 'collapse';
    div.style.width= b*cell_tg2+'px';
  }
}
var tableMass = document.getElementsByTagName('TD');
function massgen()
{
  tableMass = document.getElementsByTagName('TD');
  var div2 = document.getElementById('div2id');
  counter.countHelp=0;
  massNumber="";
  massNumber+="{<br>&#034;";
  width=document.getElementById('text').value;
  height=document.getElementById('text2').value;
  for(i=0;i<tableMass.length;i++)
  {
    for(j=0;j<tileButtonCreator.counter;j++)
    {
      if(tableMass[i].classList.contains("Class"+j))
      {
        if(j==0)
        {
          tableMass[i].innerHTML = '0';
        }
        else
        {
          tableMass[i].innerHTML = document.getElementById("textureChar"+j).value;
        }
      }
    }
    if(counter.countHelp == width)
    {
      massNumber += "&#034;,<br>&#034;";
      counter.countHelp=0;
    }
    massNumber += tableMass[i].innerHTML;
    tableMass[i].innerHTML="";
    counter.countHelp++;
  }
  massNumber+="&#034;<br>};";
  document.getElementById('hateThisShit').innerHTML=massNumber;
}

function massgen2()
{
  var div2 = document.getElementById('div2id');
  counter.countHelp=0;
  massNumber2="";
  for(i=0;i<tableMass.length;i++)
  {
    for(j=0;j<tileButtonCreator.counter;j++)
    {
      if(tableMass[i].classList.contains("Class"+j))
      {
        if(j==0)
        {
          tableMass[i].innerHTML = '0';
        }
        else
        {
        tableMass[i].innerHTML = document.getElementById("textureChar"+j).value;
        }
      }
    }
    if(counter.countHelp == width)
    {
      counter.countHelp=0;
    }
    massNumber2 += tableMass[i].innerHTML;
    tableMass[i].innerHTML="";
    counter.countHelp++;
  }
mapTiles=massNumber2;
}

function funcyCopy()
{
  var emailLink = document.getElementById('hateThisShit');
  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);


  try
  {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy email command was ' + msg);
  }
  catch(err)
  {
    console.log('Oops, unable to copy');
  }
  window.getSelection().removeAllRanges();
}

function generate_table_from_array()
{
  tableMass = document.getElementsByTagName('TD');
  var array = document.getElementById('generateArea').value;
  var array2="";
  var arrayWidth=0;
  var helpWidth=0;
  var width_generate_array=-1;
  var height_generate_array=0;
  /////////////////////////////////////////////разбирает массив на строку///////////////////////
  for(i=0;i<array.length;i++)
  {
    if((array[i]=='\"') && ((array[i+1]==',') || (array[i+1]=='\n'))){height_generate_array++;}
    if((array[i]==',') || (array[i]=='{') ||(array[i]=='}') || (array[i]==';'))
    {
    }
    else if(array[i]=='\"')
    {
      helpWidth++;
    }
    else if(array[i]=='\n')
    {
    }
    else
    {
    array2+=array[i];
    }
    if(helpWidth==1){width_generate_array++;}
  }
  document.getElementById('generateArea').value = array2;
  /////////////////////////////////////////////конец разбора///////////////////////
  table_gen_2(width_generate_array,height_generate_array,2,50);
    /*


  ВАЖНЫЙ ФИКС:
  максимальное количество цветов при создании таблицы из массива 5!!
  дополнить сняв ограничение


    */
  for(i=0;i<array2.length;i++)
  {
    for(j=0;j<5;j++)
    {
      if(array2[i] == j)
      {
        if(tableMass[i].classList.contains("Class0"))
        {
          tableMass[i].classList.remove("Class0");
        }
        tableMass[i].style.backgroundImage= 'url(image/'+j+'.png)';
        tableMass[i].style.backgroundSize='cover';
        tableMass[i].classList.add("Class"+j);
      }
    }
  }
  mapTiles=document.getElementById('generateArea').value;
  //document.getElementById('generateArea').value="";
}