const menuIcon = document.querySelector(".menuIcon");
const menuu = document.querySelector(".menu-navegacion");


menuIcon.addEventListener("click", ()=>{
    menuu.classList.toggle("spread")
})
window.addEventListener("click", e=>{
   // console.log(e.target != menuu)
    if (!menuIcon.classList.contains("spread") && e.target != menuu && e.target != menuIcon  ){
        menuu.classList.toggle("spread")
    }
})