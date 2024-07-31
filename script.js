var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: "auto",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

//Показать все/скрыть                

        let showMoreBtn = document.querySelector('.show-more__btn')   //сохраняем в переменную кнопку
        let sliderMenu = document.querySelector('.slider-menu')       //сохраняем в переменную класс с брендами 
        let showMoreImg = document.querySelector('.show-more__img')   //сохраняем в переменную изо-е стрелочки 

        showMoreBtn.addEventListener('click', function() {             //повесили обработчик событий на кнопку
            if( showMoreBtn.innerHTML === 'Показать все') {            //если кнопка равна: показать все 
                sliderMenu.style.maxHeight = 'max-content'             //высота контента макисмальная 
                showMoreImg.style.transform = 'rotate(180deg)'         //стелочка вращется на 180 градусов
                showMoreBtn.textContent = 'Скрыть'                     //текст кнопки теперь: скрыть 
            } else {
                sliderMenu.style.maxHeight = '140px'                    //иначе, высота контента 140px
                showMoreImg.style.transform = 'rotate(0deg)'            //стрелочка в исходном положении
                showMoreBtn.textContent = 'Показать все'                //текст кнопки: показать все
            }
        });