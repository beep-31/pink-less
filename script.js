window.addEventListener("DOMContentLoaded", function(){
    let burger = document.querySelector('.burger-item'),
    nav = document.querySelector('#nav');
    burger.addEventListener('click', function(){
        if(nav.style.opacity==0){
            nav.style.opacity = 1;
        } else{
            nav.style.opacity = 0;
        }
    });

    let review_dots = document.querySelectorAll('#review-dot'),
        review_items = document.querySelectorAll('.review__item.slider-item'),
        dot_parent = document.querySelector('.reviews__dots');

    dot_parent.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('dot')){
            for(let i = 0; i<review_dots.length;i++){
                if(target==review_dots[i]){
                    hideContent(review_items.length);
                    showContent(i);
                }
            }
        }
    });

    function hideContent(n){
        for (let i = 0; i < review_items.length; i++){
            review_items[i].classList.remove('slider-item--active');
            review_dots[i].classList.remove('dot--active');
        }
    }

    function showContent(n){
        if(!review_items[n].classList.contains('slider-item--active')){
            review_items[n].classList.add('slider-item--active');
            review_dots[n].classList.add('dot--active');
        }
    }
    
    
});

