// const imgBx = document.querySelector('.slides');
        const slides = document.querySelectorAll('.slide-banner li');
        var btn_next = document.querySelector('.btn-sticky__next');
        var btn_prev = document.querySelector('.btn-sticky__prev');
        var i =0;
        // console.log(slides);
        btn_next.addEventListener('click',function(){
            slides[i].classList.remove('active');
            i = (i+1) % slides.length;
            slides[i].classList.add('active');
            console.log(2);
        })
        btn_prev.addEventListener('click',function(){
            slides[i].classList.remove('active');
            i = (i-1 + slides.length) % slides.length;
            slides[i].classList.add('active');
            console.log(2);
        })