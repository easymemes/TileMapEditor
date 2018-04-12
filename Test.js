var divVar=document.getElementById('divid');
var body = document.body;
var color1=0;
var color2=0;
var color3=0;
class xdd
{
}
xdd.PressedButtonNumber=0;
xdd.DrowColorTexture=0;
class tileButtonCreator
{
  constructor(name)
  {
    const idbutton = tileButtonCreator.counter;
    this.name = name;
    var button = document.createElement('input');
    var externalColorDiv = document.createElement('div');
    externalColorDiv.classList.add("externalColorDiv");
    externalColorDiv.id="xd"+tileButtonCreator.counter;
    divVar.appendChild(externalColorDiv);
    button.type="button";
    button.id="xxd"+tileButtonCreator.counter;
    button.style="width:50px;height:50px;background-size:cover;border-radius: 20px;border:5px solid rgb(7, 131, 202);";
    button.addEventListener("click",function(){
      xdd.PressedButtonNumber=idbutton;
      console.log(xdd.PressedButtonNumber);
      //console.log(document.getElementById(this.id).style.backgroundImage);
      var backgroundVar = document.getElementById(this.id).style.backgroundImage;
      var splitBG = backgroundVar.split(".");
      var ImageType = splitBG[splitBG.length-1].substr(0, splitBG[splitBG.length-1].length - 2);
      console.log(ImageType);
      

      //url("user_images/3.png")
      if(document.getElementById(this.id).style.backgroundImage=="")
      {
        console.log("NOBG");
      }
    });
    externalColorDiv.appendChild(button);
    var text = document.createElement('input');
    var LoadUrImgButton = document.createElement('input');
    var Label = document.createElement('label');
    externalColorDiv.appendChild(Label);


    LoadUrImgButton.type="file";
    //LoadUrImgButton.name="file";
    LoadUrImgButton.id="avatar"+idbutton;
    LoadUrImgButton.style.display="none";
  LoadUrImgButton.addEventListener("change", addImage);
    Label.classList.add("InputButtonColorSettings");
    Label.appendChild(LoadUrImgButton);
    externalColorDiv.appendChild(text);
    text.value= tileButtonCreator.counter;
    text.type="text";
    text.addEventListener("change",function()
    {
    xdd.newTextValue = this.value;
    reloadImgName();
    })
    text.addEventListener("mousedown",function()
    {
    xdd.oldTextValue = this.value;
    console.log("xdd"+(this.id.substring(11)));
    })
    text.id="textureChar"+tileButtonCreator.counter;
    text.classList.add("InputTextColorSettings");
  }
}
tileButtonCreator.counter=1;
function textFuncy()
{
  window["NewObject"+tileButtonCreator.counter] = new tileButtonCreator("Rofl");
  tileButtonCreator.counter++;
}
