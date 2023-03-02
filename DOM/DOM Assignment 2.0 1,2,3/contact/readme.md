# **First Assignment**

### Task1

```
const ul=document.querySelector('header>nav>ul');
console.log(ul);

const rm=ul.removeChild(ul.lastElementChild);

const projects=document.createElement('li');
const hire=document.createElement('li');

projects.innerHTML=`<a href="#">Projects</a>`;
ul.appendChild(projects);
hire.innerHTML=`<a href="#">Hire Me</a>`;
ul.appendChild(hire);
```

### Task2

```

const ul=document.querySelector('nav>ul');
const project=document.createElement('li');
project.innerHTML=` <a href='#> </a>`;
project.textContent='Projects';
console.log(project);
/*ul.replaceChild(ul.lastElementChild,ul.firstElementChild); only replace the elements only  with in the same parent.*/
ul.lastElementChild.remove();
ul.appendChild(project);
```

### Task3

```
const para=document.querySelector('.hero-left-section>p');
const emp=document.querySelector('span:nth-child(3)');
emp.textContent='An Employee';
para.lastElementChild.innerText='Ineuron Intelligence Pvt Ltd.';
```

### Task4

```
const imgElement=document.querySelector('.hero-right-section>img')
console.log(imgElement);
imgElement.setAttribute('src','./got.jpg');
```

### Task5

```
/* Task 5*/
const taskButton=document.querySelector('.hero-right-section-btns')

const rightButton=document.createElement('button');
rightButton.textContent='Support me'
taskButton.appendChild(rightButton);
```

# **Second Assignment**

### Task1

```

```

### Task2

```

```

# **Third Assignment**

### Task 1

```

```
