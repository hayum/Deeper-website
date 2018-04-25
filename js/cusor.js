window.onload=Main;
  //global variable
   var x="";
   var y="";
   //postion
   function GetMouse(oEvent)
   {

	   x=oEvent.pageX;
     y=oEvent.pageY;
    //document.getElementById("Img").style.left=(parseInt(x)+10)+"px";
    document.getElementById("cusor").style.left=(parseInt(x)+10)+"px";
    document.getElementById("cusor").style.top=(parseInt(y)-10)+"px";
   }
  //entrance
  function Main()
  {
    var ele=document.getElementById("Main");
    //var ele=document.body;
    
    ele.onmousemove=function(){GetMouse(event);}
  
    ele.onmousedown=function(){ChangeBg("cusor","photo/cusor2.png");}
   
    ele.onmouseup=function(){ChangeBg("cusor","photo/cusor1.png");}
   }

  function ChangeBg(id,url)
  {
   document.getElementById(id).src=url;
 }


