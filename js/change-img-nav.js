
function ChangeNavImage(){
    const navBarCartoon = document.querySelector("#nav-bar__cartoon")
    const width = screen.width
    const height = screen.height
    if(height < width ){
        console.log('landscape')  
        navBarCartoon.src = "img/pointer-right.png"
    }else{
        console.log('portraid')  
        navBarCartoon.src = "img/pointer-top.png"
    } 
    
}

export default ChangeNavImage
 
