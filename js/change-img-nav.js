
function ChangeNavImage(){
    const navBarCartoon = document.querySelector("#nav-bar__cartoon")
    const width = screen.width
    const height = screen.height
    if(width < 900 && height < width ){
        navBarCartoon.src = "/img/pointer-right.png"
    }else{
        navBarCartoon.src = "/img/pointer-top.png"
    }   
}

export default ChangeNavImage
 
