window.addEventListener('DOMContentLoaded', function(){
    let burger = document.querySelector('.burger-item'),
    nav = document.querySelector('#nav');
    console.log(nav);
    console.log(burger);
    burger.addEventListener('click', function(){
    if(nav.style.opacity==0){
        nav.style.opacity = 1;
    } else{
        nav.style.opacity = 0;
    }
});
});
