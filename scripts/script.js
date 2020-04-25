window.addEventListener("DOMContentLoaded", function(){

    let review_dots = document.querySelectorAll('#review-dot'),
        review_items = document.querySelectorAll('.slider-item'),
        dot_parent = document.querySelector('.reviews__dots');

    hideContent(review_items.length);
    showContent(0);
    review_items[0].style.opacity = 1;

    dot_parent.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('dot')){
            for(let i = 0; i<review_dots.length;i++){
                if(target==review_dots[i]){
                    hideContent(review_items.length);
                    showContent(i);
                    fadeSlider(i);
                }
            }
        }
    });

    function hideContent(n){
        for (let i = 0; i < review_items.length; i++){
            review_items[i].style.opacity=0;
            review_items[i].style.display='none';
            review_dots[i].classList.remove('dot--active');
        }
    }

    function showContent(n){
        review_items[n].style.display = 'flex';
        fadeSlider(n);
        review_dots[n].classList.add('dot--active');

    }

    var opacity = 0.1;
    function fadeSlider(i){
        setTimeout(function(){
            review_items[i].style.opacity+=opacity;
            opacity+=0.05;
            if(opacity<1){
                fadeSlider(i);
            } else{
                clearTimeout();
            }
        }, 100);

    }
    
});

