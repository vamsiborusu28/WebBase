let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});



/*Second Assignment 
Task1*/
/*
const thirdDiv=document.querySelector('.accordian:nth-child(3)>p');
console.log(thirdDiv);
thirdDiv.style.display='block';

const fourthDiv=document.querySelector('.accordian:nth-child(4)>p');
console.log(fourthDiv);
fourthDiv.style.display='block';
*/

/**
 Second Assignment 
 Task2
 */

/*
const fifthDiv=document.createElement('div'); 
fifthDiv.className='accordian'
const h3=document.createElement('h3');
h3.textContent='Skills';

const para=document.createElement('p');
para.innerText='I posses very good command over the Full Stack Development technologies like MERN which can be  seen in my work over the Github.'
para.style.display='block';

fifthDiv.appendChild(h3);
fifthDiv.appendChild(para);

document.querySelector('.accordian-wrapper').appendChild(fifthDiv);
*/