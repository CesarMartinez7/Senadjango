


const iconBurger = document.getElementById("burger")
const navLinks=document.getElementById("navbar-links")
const user=document.getElementById("user")

// [ ] # haz que al presionar el icono de burger se despiegle la navbar-link


iconBurger.addEventListener("click",function(){
    navLinks.classList.toggle("is-active")
    navLinks.style.transition="all ease 1s";
    user.style.alignSelf="center";
    user.style.transition="all ease 1s";
    navLinks.style.transition="all ease 1s";
    
    
})


// contador-productos

const contadorElement = document.getElementById("count");
const botonesPresionados = document.querySelectorAll(".presionadocar");

// Inicializamos el contador
let contador = parseInt(contadorElement.textContent);

// Iteramos sobre cada botón y añadimos un event listener
botonesPresionados.forEach(function(boton) {
    boton.addEventListener("click", function() {
        contador++; // Incrementamos el contador
        contadorElement.textContent = contador; // Actualizamos el contenido del elemento
    });
});



document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      const $notification = $delete.parentNode;
  
      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
      });
    });
  });

const botonwhassap = document.querySelectorAll(".presionado");

botonwhassap.forEach(function(boton) {
    boton.addEventListener("click", function() {
        window.open("https://api.whatsapp.com/send/?phone=573186934467&text=Hola%21+Quiero+cotizar+el+Espejo+VEGAS&type=phone_number&app_absent=0","_blank")
    });
});



document.getElementById("windowCar").addEventListener("click",function(event){
    event.preventDefault()

    const ventanaSeccionCarrito=document.getElementById("seccionVentasCarrito").innerHTML="HELLOO"
    
})



seccionVentasCarrito