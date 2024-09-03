

const formulario=document.getElementById("formulario")

const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contraseña= document.getElementById("contraseña")



// document.addEventListener("DOMContentLoaded",function(){
//     nombre.focus()
// })


document.addEventListener("DOMContentLoaded",()=>{
    nombre.focus()
})


formulario.addEventListener("submit",function(event){
    const nombre=document.getElementById("nombre").value
    const correo=document.getElementById("correo").value
    const contraseña=document.getElementById("contraseña").value

    document.writeln(`<h1>${nombre}   ${contraseña}  ${correo}</h1>`)

})
