# Fifth Assignment

## **Task**

```
        const btnDiv=document.querySelector('.nav-center div:nth-child(3)')
        console.log(btnDiv);

        //Creating a new button
        const newBtn=document.createElement('a');
        newBtn.className='btn';
        newBtn.textContent='Pro Subscription';
        btnDiv.appendChild(newBtn);

        //Adding Extra Menu Section
        const menuSection=document.querySelector('.tags-container>div');
        const newItem=document.createElement('a');
        newItem.setAttribute('href','#');
        newItem.innerText='Chinese(7)';

        menuSection.appendChild(newItem);

        // Adding new Receipe
        const receipeGallery=document.querySelector('.recipes-container .recipe-gallery');
        const receipeDiv=document.createElement('div');
        receipeDiv.className='card';

        const anchortag=document.createElement('a');
        anchortag.setAttribute('href','#');
        anchortag.className='recipe-text';

        const img=document.createElement('img');
        img.setAttribute('src','https://media.istockphoto.com/id/910315272/photo/tasty-fish-curry-stew-coconut-milk.jpg?s=612x612&w=0&k=20&c=WWgDvcI5L34VksNF5TEIJBV-Z80L6M7kM5gr6qsHuB8=');
        img.style.height="200px";
        img.style.width='100%';
        img.setAttribute('class','receipe-img');

        const h5=document.createElement('h5');
        h5.className='recipe-name';
        h5.textContent='Fish Curry';

        const p=document.createElement('p');
        p.className='recipe-disp';
        p.textContent='Prep:30min | Cook:50min';

        anchortag.appendChild(img);
        anchortag.appendChild(h5);
        anchortag.appendChild(p);

        receipeDiv.appendChild(anchortag);

        receipeGallery.appendChild(receipeDiv);

        //Adding name in footer section
        const changeName=document.querySelector('footer>p>a');
        changeName.innerText='Vamsi Borusu';
```
