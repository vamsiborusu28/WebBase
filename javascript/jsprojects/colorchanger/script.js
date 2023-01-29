const btn=document.querySelector('.btn');


const colorChanger=function(){
    const colors=['red','blue','black','green','white','#120E43','#253898', '#5737D6'];
    const n=colors.length;
    const random=Math.trunc(Math.random()*n);
    document.body.style.backgroundColor=colors[random];
    btn.style.color=colors[random];
}



btn.addEventListener('click',colorChanger);