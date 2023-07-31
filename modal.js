let button = document.getElementById("privacyButton");
let  modal = document.getElementById("privacyDiv");
let close = document.getElementById("close");
button.addEventListener('click' , ()=>{
      
    modal.style.display="block"
    modal.style.zIndex = "10000"
    modal.style.position="absolute"
    modal.style.background= "white"
    modal.style.margin="0.3em"


})
close.addEventListener('click',()=>{
    modal.style.display=("none")
})