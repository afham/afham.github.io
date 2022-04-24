// --------navbar pc-------------------

  // window.onscroll=()=>{
  //   console.log("scrolled")
  //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //     console.log("scoled down")
  //     document.querySelector(".sticky-top-section").style.animationName="sticky-top-slide-up";
  //   }
  //   else{
  //     console.log("scoled up")      
  //     document.querySelector(".sticky-top-section").style.animationName="sticky-top-slide-down";  
  //   }
  // }

  function scrollToView(e){
    if(e.id==="home"){
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    else if(e.id==="our-services"){
      const element = document.querySelector(".our-service-section");
      element.scrollIntoView();
    }
    else if(e.id==="cbm-calculator"){
      const element = document.querySelector(".cbm-section");
      element.scrollIntoView();
    }
    else if(e.id==="our-process"){
      const element = document.querySelector(".our-process-section");
      element.scrollIntoView();
    }
    else if(e.id==="why-choose-us"){
      const element = document.querySelector(".why-choose-us-section");
      element.scrollIntoView();
    }
  }


// ---------navbar mobile---------------

function openNavbar(){
  let animationName = document.getElementById('navbar').style.animationName
  console.log(animationName)
  if(!animationName || animationName==="navbar-slide-up" ){
      document.getElementById('navbar').style.animationName = "navbar-slide-down"
  }
  else{
      document.getElementById('navbar').style.animationName = "navbar-slide-up"
  }
}

window.addEventListener('resize', function(event) {
  if(this.innerWidth > "1100"){
    document.getElementById('navbar').style.height = ""
    document.getElementById('navbar').style.animationName = ""
  }
}, true);

// ---------our services-----------

var ourServiceObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
 
    document.querySelectorAll(".cards-section").forEach((item)=>item.style.animationName="fade-in")
  }
}, { threshold: [0] });

ourServiceObserver.observe(document.querySelector(".card-content"));

//---------cbm calculator -------------------

var ourServiceObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
 
    document.querySelectorAll(".cbm-section").forEach((item)=>item.style.animationName="fade-in")
  }
}, { threshold: [0] });

ourServiceObserver.observe(document.querySelector(".cbm-content"));


// ---------popup-------------

function openQuotePopup(e) {
  if(e.id==="quote-button"){
    document.getElementById("quote-form").classList.add("form")
    document.getElementById("quote-form").style.display="flex"
  }
  else if(e.id==="airfreight-btn"){
    document.getElementById("airfreight").classList.add("form")
    document.getElementById("airfreight").style.display="flex"
  }
  else if(e.id==="seafreight-btn"){
    document.getElementById("seafreight").classList.add("form")
    document.getElementById("seafreight").style.display="flex"
  }
  else if(e.id==="transportation-btn"){
    document.getElementById("transportation").classList.add("form")
    document.getElementById("transportation").style.display="flex"
  }
  else if(e.id==="relocations-btn"){
    document.getElementById("relocations").classList.add("form")
    document.getElementById("relocations").style.display="flex"
  }
  else if(e.id==="packing-btn"){
    document.getElementById("packing").classList.add("form")
    document.getElementById("packing").style.display="flex"
  }
  else if(e.id==="lcl-btn"){
    document.getElementById("lcl").classList.add("form")
    document.getElementById("lcl").style.display="flex"
  }
  else if(e.id==="customs-btn"){
    document.getElementById("customs").classList.add("form")
    document.getElementById("customs").style.display="flex"
  }
  else if(e.id==="luxury-btn"){
    document.getElementById("luxury").classList.add("form")
    document.getElementById("luxury").style.display="flex"
  }

  document.getElementById('quote-popup').style.display="flex"
  document.getElementById('quote-popup').style.animationName="fade-popup-background"
  document.querySelector('.form').style.animationName= "scale-up-popupform";
 
}

const quoteFormAnimated = document.getElementById('quote-form');
const airfreightAnimated = document.getElementById('airfreight');
const seafreightAnimated = document.getElementById('seafreight');
const transportationAnimated = document.getElementById('transportation');
const relocationsAnimated = document.getElementById('relocations');
const packingAnimated = document.getElementById('packing');
const lclAnimated = document.getElementById('lcl');
const customsAnimated = document.getElementById('customs');
const luxuryAnimated = document.getElementById('luxury');
quoteFormAnimated.addEventListener('animationend', closeAfterAnimationEnds);
airfreightAnimated.addEventListener('animationend', closeAfterAnimationEnds);
seafreightAnimated.addEventListener('animationend', closeAfterAnimationEnds);
transportationAnimated.addEventListener('animationend', closeAfterAnimationEnds);
relocationsAnimated.addEventListener('animationend', closeAfterAnimationEnds);
packingAnimated.addEventListener('animationend', closeAfterAnimationEnds);
lclAnimated.addEventListener('animationend', closeAfterAnimationEnds);
customsAnimated.addEventListener('animationend', closeAfterAnimationEnds);
luxuryAnimated.addEventListener('animationend', closeAfterAnimationEnds);

function closeAfterAnimationEnds(e){
  if(e.srcElement.style.animationName=="scale-down-popupform" ){
    console.log("fired",e.target.id)
    document.getElementById('quote-popup').style.display="none"
    e.srcElement.style.display="none"
    e.srcElement.style.animationName="";
  }
}

function closeQuotePopup(e){
  console.log("close annima")
  if(e.id==="quote-clsbtn"){
    console.log("quote annima")
    document.getElementById('quote-form').style.animationName= "scale-down-popupform";
  }
  else if(e.id==="airfreight-clsbtn"){
    document.getElementById('airfreight').style.animationName= "scale-down-popupform";
    console.log("air annima")
  }
  else if(e.id==="seafreight-clsbtn"){
    document.getElementById('seafreight').style.animationName= "scale-down-popupform";
  }
  else if(e.id==="transportation-clsbtn"){
    document.getElementById('transportation').style.animationName= "scale-down-popupform";
  }
  else if(e.id==="relocations-clsbtn"){
    document.getElementById('relocations').style.animationName= "scale-down-popupform";
  }
  else if(e.id==="packing-clsbtn"){
    document.getElementById('packing').style.animationName= "scale-down-popupform";
  }
  else if(e.id==="lcl-clsbtn"){
    document.getElementById('lcl').style.animationName= "scale-down-popupform";
  }
  else if(e.id==="customs-clsbtn"){
    document.getElementById('customs').style.animationName= "scale-down-popupform";
  }
  else if(e.id==="luxury-clsbtn"){
    document.getElementById('luxury').style.animationName= "scale-down-popupform";
  }
  document.getElementById('quote-popup').style.animationName="fade-reverse-popup-background"

}

// ----------------our prcoess--------------------
var ourProcessObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
    console.log("fired")
    document.querySelectorAll(".dark-line").forEach((item)=>item.style.animationName="traverse")
    document.querySelectorAll(".dot").forEach((item)=>item.style.animationName="fill-background")
  }
}, { threshold: [0] });

ourProcessObserver.observe(document.querySelector(".line-card"));






  