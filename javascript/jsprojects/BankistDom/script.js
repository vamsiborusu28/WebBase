'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Learn More button

const btn=document.querySelector('.btn--scroll-to');
const scroll=document.querySelector('#section--1');

btn.addEventListener('click',()=>{
//console.log(this);
console.log(scroll);
scroll.scrollIntoView({
  behavior:'smooth'
})
});

/*Nav Bar */

// const nav_links
// const nav_link

/*
const randomInt =(min,max) =>{
 return Math.floor(Math.random()*(max-min+1)+min);
};

const randomColor= ()=>{
  return  `rgb(${randomInt(2,67)},${randomInt(0,255)},${randomInt(11,200)})`;
}

const changeBackground=function(event){
  this.style.backgroundColor=randomColor();
  //this.style.padding='10px';
}

document.querySelector('.nav__link').addEventListener('click',changeBackground);


document.querySelector('.nav__links').addEventListener('click',changeBackground);

document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backgroundColor=randomColor();
  this.style.marginTop='20px';
  this.style.borderRadius='10px';
})
*/


// const navArray=document.querySelectorAll('.nav__link');

// navArray.forEach(function(element){
// element.addEventListener('click',function(event){
// event.preventDefault();
// const target=this.getAttribute('href');
// console.log(this.getAttribute('href'));
// const src=document.querySelector(target);
// src.scrollIntoView({
//   behavior:'smooth'
// })
// });
// });



document.querySelector('.nav__links').addEventListener('click',function(e){
e.preventDefault();
//console.log(e.target);
if(e.target.classList.contains('nav__link')==true){
  const target=e.target.getAttribute('href');
  document.querySelector(target).scrollIntoView({
    behavior:'smooth'
  })
}
})

/*
// DOM Traversing
document.documentElement.style.backgroundColor='black';
const h1=document.querySelector('h1');

// Move Downwards (Like Children)
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild;
h1.lastElementChild;




// Move Upwards (Like Parents)

h1.parentNode;
h1.parentElement;
h1.closest('.header').style.backgroundColor='yellow';
h1.closest('h1').style.backgroundColor='var(--gradient-primary)';

//Move Sideways (Like Siblings)

h1.previousElementSibling;
h1.nextElementSibling;

// Spread USe case
[...h1.parentNode.children].forEach(function(ele){
  if(ele!==h1){
    ele.style.backgroundColor='rgb(0,0,0)';
    ele.style.scale='1.1';
  }
})
*/

//Tabbed Component

const tab=document.querySelector('.operations__tab-container')
const buttonList=document.querySelectorAll('.operations__tab')
const contentList=document.querySelectorAll('.operations__content');


// Event Delegation on tab 

tab.addEventListener('click',(event) => {
 // event.preventDefault();
  const btn=event.target.closest('.operations__tab');
  //console.log(btn);
  if(!btn) return;


  // Remove Active tabs on operations tabs
  buttonList.forEach((ele)=>{
    ele.classList.remove('operations__tab--active');
  });
  // Add Active class on target Button

  btn.classList.add('operations__tab--active');

  //Remove Active tabs on operation content tabs
  contentList.forEach((element)=>{
    element.classList.remove('operations__content--active');
  })

  //Add Active tab on selected operation content tab
  const contentTab=document.querySelector(`.operations__content--${btn.dataset.tab}`);
  contentTab.classList.add('operations__content--active');
})


//Faded Navigation Bar




const firstNav=document.querySelector('.nav');
/*

//Mouse Over EVent
firstNav.addEventListener('mouseover',function(event){
  //console.log(event.target);
  if(event.target.classList.contains('nav__link')){
    const link=event.target;
    const navLinks=link.closest('nav').querySelectorAll('.nav__link');
    const logo=link.closest('nav').querySelector('img');
    console.log(logo);
    navLinks.forEach((element)=>{
      if(element!==link){
        element.style.opacity=0.5;
      }
    })
    logo.style.opacity=0.5;
  }
});


//Mouse Out Event

firstNav.addEventListener('mouseout',(event)=>{
  if(event.target.classList.contains('nav__link')){
    const link=event.target;
    const linkList=firstNav.querySelectorAll('.nav__link');
    const logo=firstNav.querySelector('img');

    linkList.forEach((element)=>{
      element.style.opacity=1;
    })

    logo.style.opacity=1;
  }
})
*/
// Second Way --> Passing arguments in Event Handler

const handOver =function(event,opacity){
  if(event.target.classList.contains('nav__link')){
    const link=event.target;

    const linkList=link.closest('nav').querySelectorAll('.nav__link');
    const logo=firstNav.querySelector('img');


    linkList.forEach((element)=>{
      if(element!==link)
      element.style.opacity=opacity;
    })
    logo.style.opacity=opacity;
  }
}


const handOver2=function(event){
  //console.log(this) // this contains the data passed through bind method
  if(event.target.classList.contains('nav__link')){
    const link=event.target;

    const linkList=link.closest('nav').querySelectorAll('.nav__link');
    const logo=firstNav.querySelector('img');


    linkList.forEach((element)=>{
      if(element!==link)
      element.style.opacity=this;
    })
    logo.style.opacity=this;
  }
}

firstNav.addEventListener('mouseover',function(event){
  handOver(event,0.5);
})

firstNav.addEventListener('mouseout',handOver2.bind(1));


// Sticky Nav Bar 

/*
const positionValues=scroll.getBoundingClientRect();

window.addEventListener('scroll',function(event){
  if(this.window.scrollY>positionValues.top){
    // firstNav.style.opacity=0.9;
    // firstNav.style.position='fixed';
    firstNav.classList.add('sticky');
  }
  else{
    firstNav.classList.remove('sticky');
  }
})
*/

// Better Way of Doing Sticky Bar -->The Intersection Obserever API




const header=document.querySelector('.header');

const headerInfo=firstNav.getBoundingClientRect();
//console.log(headerInfo.height)
const stickyNav=function(entries){
  const [entry]=entries;
  //console.log(entry);
  //console.log(entry.isIntersecting); 
  if(!entry.isIntersecting && header.classList.contains('sticky')===false){
    firstNav.classList.add('sticky');
  }
  else{
    firstNav.classList.remove('sticky');
  }
}
const headerObserver=new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${headerInfo.height}px`
});


headerObserver.observe(header);


/*
Creating new Intersection Observer API

This IntersectionObserver() contains two arguments
callback,options 

Options object lets you control the circumstances under which observer callback is called
It contains three arguments

1.root --> The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.

2.rootMargin -->Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.

3.threshold -->Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.

If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. 
The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.


Callback is a method is used to execute the logic written by the user Whenever the target meets a threshold specified for the IntersectionObserver, the callback is invoked. 
The callback receives a list of IntersectionObserverEntry objects and the observer


let callback = (entries, observer) => {
  entries.forEach((entry) => {
    Each entry describes an intersection change for one observed
    target element:
      entry.boundingClientRect
      entry.intersectionRatio
      entry.intersectionRect
      entry.isIntersecting
      entry.rootBounds
      entry.target
      entry.time
  });
};
The list of entries received by the callback includes one entry for each target which reported a change in its intersection status. Check the value of the isIntersecting property to see if the entry represents an element that currently intersects with the root.

Targeting an element to be observed
Once you have created the observer, you need to give it a target element to watch:
observer.observe(target);
*/

// const observerCallback=function(entries,observer){
//   entries.forEach((entry)=>{
//     console.log(entry);
//   })
// }
// const options={
//   root:null,
//   threshold:0.3
// }
// const observer=new IntersectionObserver(observerCallback,options);
// observer.observe(scroll); 


// Section Loader 

const allSections=document.querySelectorAll('section');

const sectionTransform=function(entries,observer){
  const [entry]=entries;


  console.log(entry);

  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
  
}

const sectionObserver=new IntersectionObserver(sectionTransform,{
  root:null,
  threshold:0.15
});



allSections.forEach(function(section){
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
 
});




// Lazy Image Loading

const imgFeatures=document.querySelectorAll('.features__img');

const imgLoading=function(entries,observer){
  const [entry]=entries;

  if(!entry.isIntersecting) return;
  const target=entry.target;
  const imgsrc=target.dataset.src;
  target.src=imgsrc;
  target.addEventListener('load',function(){
    target.classList.remove('lazy-img');
  })
  observer.unobserve(target);

  
}
const imgObserver=new IntersectionObserver(imgLoading,{
  root:null,
  threshold:1
})

imgFeatures.forEach((element)=>{
imgObserver.observe(element);
element.style.borderRadius='20px';
})



// Slider Component
