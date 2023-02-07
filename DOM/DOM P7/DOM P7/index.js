const anchorList=document.querySelectorAll('div>a');

anchorList.forEach((element,index) => {
if(index%2){
  element.style.display='none';
}
});



const submit=document.querySelector('form>button');

submit.addEventListener('click',(event)=>{
  
  anchorList.forEach((element,ind)=>{
    if(ind%2){
    element.style.color='red';
    element.style.display='inline';
    }
  });
  event.preventDefault();
});