import ChangeNavImage from "./change-img-nav.js"; 
import moveGridElement from "./move-div.js"

//open hamburger menu
const botonMenu = document.querySelector("#button-menu");
const navbar = document.querySelector("#nav-bar");
botonMenu.addEventListener("click", () => {
	navbar.classList.toggle("open");  
})
//change menu image
window.addEventListener("resize", ChangeNavImage)
window.onload = ChangeNavImage

//hover project element

const $projects = document.querySelectorAll(".projects__grid__element")

$projects.forEach( project => {
	project.onmouseover = () => {
		const $projectDescription= project.querySelector(".projects__grid__element__description");
		$projectDescription.style.display = "flex"
    $projectDescription.classList.add("rotateIn")
	}
	project.onmouseout = () => {
		const $projectDescription= project.querySelector(".projects__grid__element__description");
		$projectDescription.style.display = "none"
    $projectDescription.classList.remove("rotateIn")
	}
})


//autotype effect
function autoType(elementClass, typingSpeed, typeOut){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(typeOut);
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
	console.log(amntOfChars)
    var newString = "";
	const barTime =  typingSpeed *  (amntOfChars+2)
    // thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text(text[0]	);
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
	  setTimeout(() => {
		$(".cursor").remove();
		$(elementClass).css({
			"position": "static",
			"display": "block"
		  });
	  }, barTime );
	  
	  
    },500);
	
  }
   
  try {
    $(document).ready(function(){ 
      autoType(".type-js-1",100, ".text-type-1");
    });
   setTimeout(() => {
   autoType(".type-js-2",100, ".text-type-2")
   }, 1600);
   setTimeout(() => {
   autoType(".type-js-3",100, ".text-type-3")
   }, 4100);
  } catch (error) {
    console.error(error);
    console.error('este no es el documento')
  }

  //move order divs
   window.onpageshow = ()=> {
     setInterval(() => {
         moveGridElement()
     }, 5000);
 }

