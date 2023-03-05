## Sixth Assignment

## **Task1**

```
 // First Task

    // Change Logo
    const logoImage=document.querySelector('header img');
    logoImage.setAttribute('src','./assets/ineuron-logo.png');
    //change Text
    const heading=document.querySelector('.hero h1');
    heading.style.width='70%';
    heading.style.fontSize='50px';

    const para=document.querySelector('.hero p');
    para.style.fontSize='16px';
    para.style.color='#758283';
```

## **Task2**

```
    // Second task

    //change price
    const price =document.querySelector('.app_price>span');

    price.textContent='10$';
    price.style.fontSize='40px';


    // Add Social Logo in footer Section
   /* <div class="footer_social_ico">
    <i class="fa-brands fa-twitter"></i><
    /div>
    */

    const socialLogos=document.querySelector('footer .footer_social ');
    const newLogo=document.createElement('div');
    newLogo.className='footer_social_ico';

   // newLogo.innerHTML=`<i class="fa-brands fa-linkedin"></i>`;
   const logo=document.createElement('i');
   logo.classList.add('fa-brands','fa-linkedin');
   newLogo.appendChild(logo);

   socialLogos.appendChild(newLogo);


```
