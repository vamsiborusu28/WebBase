# **Fourth Assignment**

### Task

```
 const colors=document.querySelectorAll('.wrapper');
        colors.forEach((element) => {
            const color=element.querySelector('.clash-card__level');

            const style=getComputedStyle(color);

            const bgColor=element.querySelector('.clash-card__unit-stats');
            bgColor.style.backgroundColor=style.color;
            bgColor.style.color='white';

            const noBorder=element.querySelector('.no-border');
            noBorder.style.color='rgb(255,255,255)';
        })
```
