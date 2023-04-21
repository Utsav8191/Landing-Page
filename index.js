// On fav Btn Click

let count = 1;
function handleclick() {
  count++;
  const dropdownElement = document.querySelector('.dropdown-box');
  if(count%2 == 0) {   
    dropdownElement.style.display = 'block';   
  } else {
    dropdownElement.style.display = 'none'; 
  }
}



//Carousel Section 

const slideItem = document.querySelectorAll('.carousel-item');
let counter= 0;

function previous() {
  if(counter === 0) {
    return;
  }else {
    counter--;
    toggleSlide();
  }
}
function next() {
  if(counter == slideItem.length-1) {
    return;
  }else {
    counter++;
    toggleSlide();
  }
}
slideItem.forEach(
  (slide, index)=> {
    slide.style.left = `${index * 100}%`
})

const toggleSlide = ()=> {
  slideItem.forEach(
    (slide, index)=> {
      slide.style.transform = `translateX(-${counter * 100}%)`
  })
}


// ----------
const tabItem1 = document.querySelector('#tab-item1'); 
const tabItem2 = document.querySelector('#tab-item2'); 
const tabItem3 = document.querySelector('#tab-item3');

const tabButtons = document.querySelectorAll('.tab-btn'); 

function atsKeyword() {
  tabItem1.style.display = 'flex';
  tabItem2.style.display = 'none';
  tabItem3.style.display = 'none';
  tabButtons[0].classList.add('tab-btn-active');
  tabButtons[1].classList.remove('tab-btn-active');
  tabButtons[2].classList.remove('tab-btn-active');
}

function resumeAnalysis() {
  tabItem1.style.display = 'none';
  tabItem2.style.display = 'flex';
  tabItem3.style.display = 'none';
  tabButtons[1].classList.add('tab-btn-active');
  tabButtons[0].classList.remove('tab-btn-active');
  tabButtons[2].classList.remove('tab-btn-active');
}
function smartSuggestions() {
  tabItem1.style.display = 'none';
  tabItem2.style.display = 'none';
  tabItem3.style.display = 'flex';
  tabButtons[2].classList.add('tab-btn-active');
  tabButtons[1].classList.remove('tab-btn-active');
  tabButtons[0].classList.remove('tab-btn-active');
}