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
    console.log("fired")
    document.querySelectorAll(".cards-section").forEach((item)=>item.style.animationName="fade-in")
  }
}, { threshold: [0] });

ourServiceObserver.observe(document.querySelector(".card-content"));

//---------cbm calculator -------------------

var ourServiceObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
    console.log("fired")
    document.querySelectorAll(".cbm-section").forEach((item)=>item.style.animationName="fade-in")
  }
}, { threshold: [0] });

ourServiceObserver.observe(document.querySelector(".cbm-content"));


// ---------popup-------------

function openQuotePopup(e) {
  document.getElementById('quote-popup').style.display="flex"
  document.getElementById('quote-popup').style.animationName="fade-popup-background"
  document.getElementById('form').style.animationName= "scale-up-popupform";
}

const animated = document.querySelector('.form');
animated.addEventListener('animationend', () => {
  console.log('Animation ended');
  console.log(animated.style.animationName)
  if(animated.style.animationName=="scale-down-popupform" ){
      document.getElementById('quote-popup').style.display="none"
  }
});

function closeQuotePopup(e){
  document.getElementById('form').style.animationName= "scale-down-popupform";
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






  