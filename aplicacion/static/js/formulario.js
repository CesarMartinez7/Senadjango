const envioFormulario=document.getElementById("submit")
const ventanaEmergenteConfirmo=document.getElementById("ventana")
const cerrar=document.getElementById("cerrar")

// EVENTO DE VENTANA EMERGENTE

envioFormulario.addEventListener("click",function(e){
    if(ventanaEmergenteConfirmo.classList.contains("esconder")){
        ventanaEmergenteConfirmo.classList.remove("esconder")
    }else{
        ventanaEmergenteConfirmo.classList.add("esconder")
    }
})



cerrar.addEventListener("click",function(event){
    if(ventanaEmergenteConfirmo.classList.contains("esconder")){
        ventanaEmergenteConfirmo.classList.remove("esconder")
    }else{
        ventanaEmergenteConfirmo.classList.add("esconder")
    }
})