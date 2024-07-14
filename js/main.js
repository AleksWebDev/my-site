document.addEventListener('DOMContentLoaded', function(){
    /* ======== Показатьт/Скрыть мобильное меню ======== */
    const navIcon = document.querySelector('.nav-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const bodyEl = document.body;  

    navIcon.addEventListener('click', function(){
        /* this.classList.toggle('nav-icon--active'); */

        if(this.classList.contains('nav-icon--active')){
            this.classList.remove('nav-icon--active');
            mobileMenu.classList.remove('open');
            bodyEl.classList.remove('lock');
        }else{
            this.classList.add('nav-icon--active');
            mobileMenu.classList.add('open');
            bodyEl.classList.add('lock');
        };
    })


    mobileMenu.addEventListener('click', function(){
        this.classList.remove('open');
        navIcon.classList.remove('nav-icon--active');
        bodyEl.classList.remove('lock');
    });



    /* ==== activ placeholder */

    const formInput = document.querySelectorAll('.form__input');

    formInput.forEach(item => {

        const parent = item.closest('.form__item');
        const placeholder = parent.querySelector('.fake__placeholder');
        

        item.addEventListener('focus', function(){
            placeholder.classList.add('active');
        });

        item.addEventListener('blur', function(){
            if(item.value.length > 0){
                placeholder.classList.add('active');
            }else{
                placeholder.classList.remove('active');
            }
        })

    });


    /* Paralax mouse moving */

    let plxScene = document.querySelector('.contacts');
    let plxItem = document.querySelectorAll('.quotes');


    plxScene.addEventListener('mousemove', function(e){
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;


        plxItem.forEach(item =>{
            item.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
        })
    })


    /* BackToTop button */

    const BackToTop = document.querySelector('.backtop-btn');


    BackToTop.style.opacity = 0;


    document.addEventListener('scroll', function(){
        if(window.pageYOffset > 600){
            BackToTop.style.opacity = 1;
        }else{
            BackToTop.style.opacity = 0;
        }
    })

})


