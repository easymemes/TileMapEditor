function getXmlHttp()
{
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
isSession2();
function sendMap(mapW,mapH,mapTiles)
{
  userName=document.getElementById("user_div_id").innerHTML;
  if(userName=="NotLogin"){return 0;};
  console.log(userName);
  var Alert = prompt('имя файла');
  var req = getXmlHttp();
  req.open('POST', 'php.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
       if(req.status == 200) {
         console.log(req.responseText);
  	 }
    }
  };
  req.send("width="+mapW+"&height="+mapH+"&map="+encodeURIComponent(mapTiles)+"&name="+Alert+"&username="+userName);
}
function loadMap(consty)
{
  var req = getXmlHttp();
  userName=document.getElementById("user_div_id").innerHTML;
  if(userName=="NotLogin"){return 0;};
  req.open('POST', 'php2.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
       if(req.status == 200) {
        console.log("table_gen_3:"+req.responseText);
         table_gen_3(req.responseText);
         
  	 }
    }
  };
  req.send("name="+consty+"&username="+userName);
}
function delete_load_funcy(constyVar)
{
  userName=document.getElementById("user_div_id").innerHTML;
  var req = getXmlHttp();
  req.open('POST', 'php4.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
       if(req.status == 200) {
        //document.getElementById('php_bug_report').innerHTML=req.responseText;
         console.log(req.responseText);
  	 }
    }
  };
  req.send("file="+constyVar+"&username="+userName);
}
function load_saves()
{
  userName=document.getElementById("user_div_id").innerHTML;
  if(userName=="NotLogin"){return 0;};
  var req = getXmlHttp();
  req.open('POST', 'php3.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
       if(req.status == 200) {
         var lm=document.getElementById('load_menu_id');
         lm.innerHTML="<div class='display_div3 pointer' onclick='change_display2();'></div>";
         var splitArry2 = req.responseText.split(' ');
         console.log(req.responseText);
        for(i=0;i<splitArry2.length-1;i++)
        {
          var LoadCell = document.createElement('div');
          LoadCell.classList.add('load_map_buttons');
          const consty=splitArry2[i];
          LoadCell.innerHTML=splitArry2[i];
          LoadCell.addEventListener("click",function(){loadMap(consty);});
          lm.appendChild(LoadCell);
          var DeleteLoad = document.createElement('div');
          DeleteLoad.classList.add('delete_load');
          DeleteLoad.addEventListener("click",function(){delete_load_funcy(consty); this.parentNode.remove();});
          LoadCell.appendChild(DeleteLoad);
        }
  	 }
    }
  };
  req.send("username="+userName);
}
function table_gen_3(string)
{
  console.log(string);
  var splitArry = string.split(' ');
  table_gen_2(+splitArry[0],+splitArry[1],2,50);
      /*


  ВАЖНЫЙ ФИКС:
  максимальное количество цветов при создании таблицы из массива 5!!
  дополнить сняв ограничение


    */
  for(i=0;i<splitArry[2].length;i++)
  {
    for(j=0;j<5;j++)
    {
      if(splitArry[2][i] == j)
      {
        tableMass[i].style.backgroundImage= 'url(image/'+j+'.png)';
        tableMass[i].style.backgroundSize='cover';
        if(tableMass[i].classList.contains("Class0"))
        {
          tableMass[i].classList.remove("Class0");
        }
        tableMass[i].classList.add("Class"+j);
      }
    }
  }
}
function userInfo()
{
  var req = getXmlHttp();
  var user_div = document.getElementById("user_div_id");
  var user_name=document.getElementById("login2").value;
  req.open('POST', 'index2.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
       if(req.status == 200) {
         user_div.innerHTML=req.responseText;
         console.log(req.responseText);
  	 }
    }
  };
  req.send("login="+user_name);
  isSession();
}
function registration()
{
  login=document.getElementById("login1").value;
  var req = getXmlHttp();
  req.open('POST', 'index.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
       if(req.status == 200)
       {

  	   }
    }
  };
  req.send("login="+login);
}
function setSession()
{
  user_name=document.getElementById("user_div_id").innerHTML;
  var req = getXmlHttp();
  req.open('POST', 'setSession.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) 
    {
      if(req.status == 200) 
      {
         document.getElementById("user_div_id").innerHTML;
  	  }
    }
  };
  req.send("login="+user_name);
}
function isSession()
{
  var req = getXmlHttp();
  req.open('POST', 'index3.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) 
    {
      if(req.status == 200) 
      {
        console.log(req.responseText);
  	  }
    }
  };
  req.send();
}
function isSession2()
{
  
  var req = getXmlHttp();
  req.open('POST', 'index4.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) 
    {
      if(req.status == 200) 
      {
        console.log("session:"+req.responseText);
        if(req.responseText == "")
        {
          document.getElementById('user_div_id').innerHTML="NotLogin";
        }
        else
        {
          document.getElementById('user_div_id').innerHTML=req.responseText;
        }
  	  }
    }
  };
  req.send();
}
function addImage() 
{
  Filename1 = this.parentNode.parentNode.id.substring(2);
 Filename = document.getElementById("textureChar"+Filename1).value
    var file = document.getElementById(this.id).files[0];
    console.log(file.name);

  var fileType=file.name.split(".");
  


    var formData = new FormData();
    formData.append("filename", file);
    var XHR = "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    xhr.open('POST', 'sendFile.php?name='+Filename, true);//?name='+Filename
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status === 200) 
        {
            console.log(xhr.responseText);
            button4BGid="x"+ this.parentNode.parentNode.id;
            document.getElementById(button4BGid).style.backgroundImage="url('user_images/"+Filename+'.'+fileType[fileType.length - 1]+"')";
            document.getElementById(button4BGid).style.backgroundSize="cover";
            
          }
    };
    xhr.send(formData);
}
function reloadImgName()
{
  console.log("old="+xdd.oldTextValue);
  console.log("new="+xdd.newTextValue);

  var req = getXmlHttp();
  req.open('POST', 'reloadImgName.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
        if(req.status == 200) 
        {
        console.log(req.responseText);
  	    }
    }
  };
  req.send("old="+xdd.oldTextValue+"&new="+xdd.newTextValue);

}

//в phphMyAdmin посмотреть таблицы  объект - mysqlI
//document.addEventListener("DOMContentLoaded", isSession); 