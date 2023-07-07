const boton=document.querySelector("#volantus");
const imagen=document.querySelector("#volante");

//mostrar ocultar imagen de volante informativo
boton.addEventListener("click",()=>{
if(imagen.className==="imagenOculta"){
boton.textContent="Ocultar volante informativo";
imagen.className="imagenGrande";
return;
}
if(imagen.className==="imagenGrande"){
boton.textContent="Mostrar volante informativo";
imagen.className="imagenOculta";
return;
}
});
