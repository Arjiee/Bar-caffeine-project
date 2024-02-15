window.onscroll = function() {shrinkLogo(); shrinkMenu();};


//shrinkmenu script
function shrinkLogo() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = "95px";
    document.getElementById("logo").style.top = "-50px";
  } else {
    document.getElementById("logo").style.width = "180px";
    document.getElementById("logo").style.top = "-65px";
  }
}
function shrinkMenu() {
    const menulink = document.getElementsByClassName("menulinks");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("menulinks").style.height = "50px";
      menulink[0].style.fontSize = "19px";
    } else {
      document.getElementById("menulinks").style.height = "80px";
      menulink[0].style.fontSize = "23px";
    }
  }
//menus slider script
  const slider = document.getElementById('menuitem');
  const menuLinks = document.querySelectorAll('#categories button');
  
  function showSlide(index) {
  const slideWidth = document.querySelector('.menuslide').offsetWidth;
  const transformValue = -index * slideWidth;
  slider.style.transform = `translateX(${transformValue}px)`;
  
  menuLinks.forEach((link, i) => {
      link.style.backgroundColor = i === index ? '#30221C' : '#ACA180';
    });
  }
//alertfunction
function alertNot(){
  alert("This is a demo site, you cant do that right now!");

  
}
