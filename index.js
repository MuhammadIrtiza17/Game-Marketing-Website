let image = document.getElementById("heroimg");
let play = document.getElementById("playstore");
let app = document.getElementById("appstore");
let tag = document.getElementById("tagh1");
let nav =document.getElementById('navigationsec')


    window.addEventListener('scroll', () => {
        let value = window.scrollY;
         tag.style.marginTop = value *4 + 'px'
         play.style.left= value * -4 + 'px'
         app.style.marginLeft = value *6 + 'px'
        //  image.style.marginTop = value * -3 +'px'
        //  if (value < 40) {
        //     nav.style.backgroundColor = 'transparent';
        //   } else {
        //     nav.style.background = "black"
        // }
     });    

