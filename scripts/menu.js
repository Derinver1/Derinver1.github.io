const menuBtn=document.querySelector(".menu");  //boton de menu
const hamburger=document.querySelector("#hamburger"); //imagen hamburger
const menu=document.querySelector("#elMenu");

//hamburger button
menuBtn.addEventListener("click",()=>{
if(menu.className==="noMostrar"){
menu.className="menuOculto";
hamburger.src="images/xIcon.png";
return;
}
if(menu.className==="menuOculto"){
menu.className="noMostrar";
hamburger.src="images/hamburger.png";
return;
}
});
