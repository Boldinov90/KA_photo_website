// ============== Меню "БУРГЕР" ================
// =============================================
const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
    document.querySelector('body').classList.toggle("no-scroll");
}

// =============== Поведение хедара ============
// ==============================================
window.onscroll = function() {
    let lastScrollTop = 0;
    window.onscroll = onScroll;

    function onScroll(e) {
        let top = window.pageYOffset;
        const header = document.querySelector(".header__top-wrapper");
        if (lastScrollTop > top) {
            // console.log('top');
            header.classList.remove("header__hidden");
            header.classList.add("header__fixed");
            if (window.pageYOffset < 200) {
                header.style.backgroundColor = "#29282f00";
                header.style.transition = "0.5s";
            }
        } else if (lastScrollTop < top) {
            // console.log('down');
            if (window.pageYOffset > 200) {
                header.classList.remove("header__fixed");
                header.classList.add("header__hidden");
                header.style.backgroundColor = "#29282ff6";
                header.style.transition = "0.5s";
            }
        }
        lastScrollTop = top;
    }
}

// =========== Навигация по сайту =============
// ======================================================================================
const anchors = document.querySelectorAll('a[href*= "#"]')
for(let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockId = anchor.getAttribute("href");
        document.querySelector('' + blockId).scrollIntoView({
        behavior: "smooth",
        block: "center" 
        })
        mobileNavContainer.classList.remove('mobile-nav--active');
        document.querySelector('body').classList.remove("no-scroll");
        menuToggle.classList.remove('menu-icon-active');
    })
}

// ===============  Подключение сортировки элементов в галерее по клику меню ============
// ======================================================================================
document.querySelector(".gallery-nav__items-list").addEventListener("click", function(e) {
    // Отмена стандартного поведения браузера
    e.preventDefault();
    // поиск и удаление активного класса в меню галереи
    document.querySelector(".gallery-nav__link--active").classList.remove("gallery-nav__link--active");
    // Добавление активного класса в меню галереи
    e.target.classList.add("gallery-nav__link--active");
})
var config = {
    load: {
        filter: '.marriage'
    }
};
var mixer = mixitup('.portfolio__gallery-items', config);


// Раскрытие всего контента в галерее
// ======================================================================================
document.querySelector('.portfolio__btn-lookAll').addEventListener("click", function(e) {
    // Отмена стандартного поведения браузера
    e.preventDefault();

    document.querySelector('.portfolio__gallery-items').classList.add("gallery-items__allContent");
    document.querySelector('.portfolio__btn-back').classList.remove("hidden-btn");
    document.querySelector('.portfolio__btn-lookAll').classList.add("hidden-btn");

});

// Cкрытие всего контента в галерее
// ======================================================================================
document.querySelector('.portfolio__btn-back').addEventListener("click", function(e) {
    // Отмена стандартного поведения браузера
    e.preventDefault();
    document.querySelector('.portfolio__gallery-items').classList.remove("gallery-items__allContent");
    document.querySelector('.portfolio__btn-lookAll').classList.remove("hidden-btn");
    document.querySelector('.portfolio__btn-back').classList.add("hidden-btn");
    document.getElementById("portfolio").scrollIntoView({
        behavior: "smooth",
        block: "center" 
        });
});

// ====================     Раскрытие и скрытие всего контента в "О СЕБЕ"    ==================
// ============================================================================================
document.querySelector('.about__arrow').addEventListener("click", function(e) {
    // Отмена стандартного поведения браузера
    e.preventDefault();
    // Переключение скрытия и показа содержимого блока
    document.querySelector('.about__text').classList.toggle("about__text-overflow");
    // Пререворачиваем стрелочку на 180
    document.querySelector('.arrow').classList.toggle("arrow-up");
});

// ====================     Настройки нижнего слайдера (цены и услуги)     ===================
// ===========================================================================================
$(document).ready(function() {
    const pricesSlider = $("#pricesSlider");
    pricesSlider.owlCarousel({
        items: 3,
        loop: false, // зацикливание
        dots: true,
        // margin: -100,
        smartSpeed: 500,
        responsive: {
            0: {
                margin: 2,
                items: 1
            },
            370: {
                items: 1,
                margin: -80
            },
            430: {
                items: 1,
                margin: -130
            },
            464: {
                items: 1,
                margin: -170
            },
            544: {
                items: 1,
                margin: -250
            },
            670: {
                items: 2,
                margin: -100
            },
            830: {
                items: 3,
                margin: 2

            }
        }
    });
});

// ====================     Настройки нижнего слайдера (ОТЗЫВЫ)     ===================
// ===========================================================================================
$(document).ready(function() {
    const reviewsSlider = $("#reviewsSlider");
    reviewsSlider.owlCarousel({
        items: 1,
        loop: true, // зацикливание
        dots: true,
        smartSpeed: 500,
        responsive: {
            0: {
                // margin: -120,
                items: 1
            },
            360: {
                margin: -120,
                items: 1
            },
            428: {
                margin: -170,
                items: 1
            },
            495: {
                margin: -230,
                items: 1
            },
            560: {
                margin: -130,
                items: 1
            },
            625: {
                margin: -200,
                items: 1
            },
            725: {
                margin: -300,
                items: 1
            },
            825: {
                margin: -400,
                items: 1
            },
            925: {
                margin: -500,
                items: 1
            },
            1024: {
                margin: -300,
                items: 1
            },
            1120: {
                items: 1,
                margin: -400
            },
            1220: {
                items: 1,
                margin: -500
            },
            1420: {
                items: 1,
                margin: -700
            },
            1600: {
                items: 1,
                margin: -900
            },
            1720: {
                items: 1,
                margin: -1000
            },
            1810: {
                items: 1,
                margin: -1100
            }
        }
    });
});

