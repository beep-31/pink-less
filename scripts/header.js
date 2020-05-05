window.addEventListener('DOMContentLoaded', function(){
    let burger = document.querySelector('.burger-item'),
        nav = document.querySelector('#nav'),
        opened = 'burger-item--opened',
        closed = 'burger-item--closed';
    burger.addEventListener('click', function(){
    if(nav.style.opacity==0){
        nav.style.opacity = 1;
        burger.classList.remove(closed);
        burger.classList.add(opened);
    } else{
        nav.style.opacity = 0;
        burger.classList.remove(opened);
        burger.classList.add(closed);
    }
});
});

