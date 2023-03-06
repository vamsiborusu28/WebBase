//Task1
const anchorList=document.querySelectorAll('div>a');

anchorList.forEach((element,index) => {
if(index%2){
  element.style.display='none';
}
});


//Task2
const submit=document.querySelector('form>button');
const text=document.querySelector('form>input');
submit.addEventListener('click',(event)=>{
  
  anchorList.forEach((element,ind)=>{
    if(ind%2){
    element.innerText=text.value;
    element.style.color='red';
    element.style.display='inline';
    }
  });
  event.preventDefault();
});