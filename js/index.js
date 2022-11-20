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

// download CV

$(function(){
  var flag=0;
  
  $('.share').on('click',function(){
   if(flag == 0)
    {
      $(this).siblings('.one').animate({
      bottom:'100px',
      left:'48',
    },200);
    
    //  $(this).siblings('.two').delay(200).animate({
    //   top:'260px',
    //   left:'40%'
    // },200);
    
    //  $(this).siblings('.three').delay(300).animate({
    //   top:'260px',
    //   left:'60%'
    // },200);
              
    $('.one i,.two i, .three i').delay(500).fadeIn(200);  
      flag = 1;
    }
    
    
  else{
    $('.one, .two, .three').animate({
        bottom:'30',
        left:'48px'
      },200);
      
  $('.one i,.two i, .three i').delay(500).fadeOut(200);
      flag = 0;
    }
  });
});

//change background
window.onload = verifySwitch()
const toggleSwitch = document.querySelector(
  '.theme-switch-wrapper input[type="checkbox"]'
);
const $checkTheme = document.querySelector("#theme-btn")


function switchTheme(checkValue) {
  console.log(checkValue)
  const $checkTheme = document.querySelector("#theme-btn")
  if(typeof checkValue !== 'string'){
    checkValue = $checkTheme.checked
  }
  let lightThemeText = document.getElementById("light-theme-text");
  let darkThemeText = document.getElementById("dark-theme-text");
  const $logo = document.querySelector("#logo")
  const $imgGithub = document.querySelector("#github")
  
 
  if (checkValue === "true" || checkValue === true) {
    $logo.src = "img/logo.png"
    try{
      $imgGithub.src = "img/tools/github-light.png"
    }catch(error){}
    document.documentElement.setAttribute("data-theme", "dark");
    lightThemeText.classList.add("disabled");
    darkThemeText.classList.remove("disabled");
    if(checkValue === "true"){
      $checkTheme.checked=true
    }    
  } else if (checkValue === "false" || checkValue === false) {
    $logo.src = "img/logo-white.png"
    
    try{
      $imgGithub.src = "img/tools/github-dark.png"
    }catch(error){}
    document.documentElement.setAttribute("data-theme", "light");
    lightThemeText.classList.remove("disabled");
    darkThemeText.classList.add("disabled");
    if(checkValue === "false"){
      $checkTheme.checked=false
    }
  }
  localStorage.setItem("checktheme", checkValue)
}

function  verifySwitch(){
  const $checkTheme = document.querySelector("#theme-btn")
  let checkValue = localStorage.getItem("checktheme")
  console.log(checkValue)
  if(checkValue === null){
   localStorage.setItem("checktheme", $checkTheme.checked)
   checkValue = localStorage.getItem("checktheme")
  }
  console.log(checkValue)
  switchTheme(checkValue)
}
toggleSwitch.addEventListener("change", switchTheme);


