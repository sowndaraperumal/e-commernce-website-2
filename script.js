//copy menu for mobile

function copyMenu() {
  //copy inside .dpt-cart to .department
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //copy inside nav to nav

  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to thetop-nav

  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//mobile menu
const menuButton=document.querySelector('.trigger'),
closeButton=document.querySelector('.t-close'),
addClass = document.querySelector('.site');

menuButton.addEventListener('click',function() {
  addClass.classList.toggle('showmenu')
})

closeButton.addEventListener('click',function() {
  addClass.classList.remove('showmenu')
})



//show sub menu on mobile phone

const submenu =document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle (e){
  e.preventDefault();
  submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand'): null);
  if(this.closest('.has-child').classList != 'expand'){
    this.closest('.has-child').classList.toggle('expand')
  }
}

// slider 
const swiper = new Swiper('.swiper', {
 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  
});
//show search

const searchButton = document.querySelector('.t-search'), tclose = document.querySelector('.search-close'),
showClass = document.querySelector('.site');

searchButton.addEventListener('click',function(){
  showClass.classList.toggle('showsearch')
})
tclose.addEventListener('click',function(){
  showClass.classList.remove('showsearch')
})

//show time
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');


  const timeString = `${hours}:${minutes}:${seconds}`;

  
  document.getElementById('hours').textContent = hours;
  document.getElementById('minute').textContent = minutes;
  document.getElementById('second').textContent = seconds;
}
updateTime();
    setInterval(updateTime, 1000);

//show dpt menu 
const dptButtom =document.querySelector('.dpt-cat .dpt-trigger'), dptClass= document.querySelector('.site');

dptButtom.addEventListener('click',function(){
  dptClass.classList.toggle('showdpt')
})