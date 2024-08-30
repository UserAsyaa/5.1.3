        let showMoreBtn2 = document.querySelector('.show-more__technique-btn')   
        let techniqueMenu = document.querySelector('.technique-menu')   
        let showMoreImg2 = document.querySelector('.show-more__technique-img')

        showMoreBtn2.addEventListener('click', function() {
            if( showMoreBtn2.textContent === 'Показать все') {
                techniqueMenu.style.maxHeight = 'max-content' 
                showMoreImg2.style.transform = 'rotate(180deg)'
                showMoreBtn2.textContent = 'Скрыть'
            } else {
                techniqueMenu.style.maxHeight = '170px'                   
                showMoreImg.style.transform = 'rotate(0deg)'            
                showMoreBtn2.textContent = 'Показать все'                
                }
        });