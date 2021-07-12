function openNav(){
    
    
    
    document.getElementById("full-screen-navigation-link").style.height = "100vh"
    
  document.getElementById("full-screen-navigation-link").style.width = "100%";


   document.getElementById("full-screen-navigation-link").style.zIndex = "1";
    document.getElementById("header").style.zIndex ="-1";

    document.getElementById("full-screen-navigation-link").style.transition="height 200ms cubic-bezier(0,1.5,1,1.5)";
    

}
function closeNav(){
    //document.getElementById("full-screen-navigation-link").style.width = "0px";
    
 document.getElementById("full-screen-navigation-link").style.transition="height 100ms cubic-bezier(0,1.5,1,1.5)";

   document.getElementById("full-screen-navigation-link").style.height = "0px";


 
    document.getElementById("header").style.zIndex ="1";
    
    
    document.getElementById("full-screen-navigation-link").style.zIndex ="1";
 

}






function flip(){
  document.getElementById("card").style.transform = 'rotateY(180deg)';
}


function flipagain(){
  document.getElementById("card").style.transform = 'rotateY(360deg)';
}

function flipcontactcard()
{
  document.getElementById("contact-card").style.transform ='rotateY(180deg)';
}


function flipcontactcardagain()
{
  document.getElementById("contact-card").style.transform ='rotateY(360deg)';
  alert("Thanks for contacting us!");
}
function flipagaincontact()
{
  document.getElementById("contact-card").style.transform ='rotateY(360deg)';
}





var slideIndextemp=1;
function plusSlides(n){
  showSlides(slideIndextemp += n);
}
function currentSlide(n)
{
  showSlides(slideIndextemp = n );


}


function showSlides(n){

  var i;

  var newslides = document.getElementsByClassName("slide");
  var newdots = document.getElementsByClassName("circle-btn");
  if( n > newslides.length)
  {
    slideIndextemp = 1;
  }
  if( n < 1)
  {
    slideIndextemp = newslides.length;}

  for( i =0;i<newslides.length;i++)
  {
    newslides[i].style.display ="none";
  }
  for(i=0;i<dots.length;i++)
  {
    newdots[i].style.backgroundColor="rgba(255,255,255,0.1)";
    newdots[i].style.borderColor="transparent";
    newdots[i].style.boxShadow =" 0px 0px 10px black";
  }
 
  newslides[slideIndextemp-1].style.display= "block";
 
 newdots[slideIndextemp -1].style.backgroundColor="black";
 newdots[slideIndextemp -1].style.borderColor="white";
 newdots[slideIndextemp -1].style.boxShadow =" 0px 0px 10px white";
}




window.onresize = checkwidth;
window.onload  = checkwidth;

function checkwidth()
{

if(window.screen.width<1025)
{
var slideIndex = 1;

newSlide(slideIndex);



function newSlide(n){

  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("circle-btn");
  if( n > slides.length)
  {
    slideIndex = 1;
  }
  if( n < 1)
  {
    slideIndex = slides.length;}

  for( i =0;i<slides.length;i++)
  {
    slides[i].style.display ="none";
  }
  for(i=0;i<dots.length;i++)
  {
    dots[i].style.backgroundColor="rgba(255,255,255,0.1)";
    dots[i].style.borderColor="transparent";
    dots[i].style.boxShadow =" 0px 0px 10px black";
  }
 
  slides[slideIndex-1].style.display= "block";
 
 dots[slideIndex -1].style.backgroundColor="black";
 dots[slideIndex -1].style.borderColor="white";
 dots[slideIndex -1].style.boxShadow =" 0px 0px 10px white";
}




var prodSlideIndex = 1;
newshowprodSlides(prodSlideIndex);




function newshowprodSlides(n)
{
  var prodslide = document.getElementsByClassName("prod-slide");
  var proddots = document.getElementsByClassName("prod-circle-btn");
  if(n>prodslide.length)
  {
    prodSlideIndex=1;
  }
  if(n<1)
  {
    prodSlideIndex=prodslide.length;
  }
  for(i =0;i<prodslide.length;i++)
  {
    prodslide[i].style.display ="none";
  }
  for(i =0;i<proddots.length;i++)
  {
    proddots[i].style.backgroundColor="rgba(255,255,255,0.1)";
    proddots[i].style.borderColor="white";
    proddots[i].style.boxShadow ="0px 0px 5px white";
  }
 
  prodslide[prodSlideIndex-1].style.display="flex";
  proddots[prodSlideIndex-1].style.backgroundColor="white";
  proddots[prodSlideIndex-1].style.borderColor="black";
  proddots[prodSlideIndex-1].style.boxShadow="0px 0px 5px black";
}

}
else{

  var slider= document.getElementsByClassName("slide");

  for( i =0;i<slider.length;i++)
  {
    slider[i].style.display="flex";
  }

  var prodslider = document.getElementsByClassName("prod-slide");
  for( i =0;i<prodslider.length;i++)
  {
    prodslider[i].style.display="flex";
  }
}


}

var prodSlideIndextemp=1;
function prodplusslide(n)
{
  showprodSlides(prodSlideIndextemp+=n);

}

function prodCurrentSlide(n)
{
  showprodSlides(prodSlideIndextemp=n);
}


function showprodSlides(n)
{
  var newprodslide = document.getElementsByClassName("prod-slide");
  var newproddots = document.getElementsByClassName("prod-circle-btn");
  if(n>newprodslide.length)
  {
    prodSlideIndextemp=1;
  }
  if(n<1)
  {
    prodSlideIndextemp=newprodslide.length;
  }
  for(i =0;i<newprodslide.length;i++)
  {
    newprodslide[i].style.display ="none";
  }
  for(i =0;i<proddots.length;i++)
  {
    newproddots[i].style.backgroundColor="rgba(255,255,255,0.1)";
    newproddots[i].style.borderColor="white";
    newproddots[i].style.boxShadow ="0px 0px 5px white";
  }
 
  newprodslide[prodSlideIndextemp-1].style.display="flex";
  newproddots[prodSlideIndextemp-1].style.backgroundColor="white";
  newproddots[prodSlideIndextemp-1].style.borderColor="black";
  newproddots[prodSlideIndextemp-1].style.boxShadow="0px 0px 5px black";
}







