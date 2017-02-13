 <!--
 var h=document.getElementById("tab").getElementsByTagName("h3");
 var d=document.getElementById("tab").getElementsByTagName("div");
 function go_to(ao){
  for(var i=0;i<h.length;i++){
   if(ao-1==i){
   h[i].className+=" up";
   d[i].className+=" block";
   }
   else {
   h[i].className=" ";
   d[i].className=" ";
   }
  }
 }