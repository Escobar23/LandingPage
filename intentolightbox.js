const imagenes = document.querySelectorAll(".image-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const menuIcon1 = document.querySelector(".menuIcon");
const menuu1 = document.querySelector(".menu-navegacion");

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
       aparecerImagen(imagen.getAttribute("src"));
      
    })
})

contenedorLight.addEventListener("click", (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle("showImage");
        menuIcon1.style.opacity = "1" 
        menuu1.style.opacity = "1"
        
    }
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    menuIcon1.style.opacity = "0" //transparentar el icon de menu
    menuu1.style.opacity = "0" //transparentar menu
}