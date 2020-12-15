// ============== Определение цвета хедара =====
// =============================================
// thinHeaderWhenLoad();

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
            header.classList.remove("header__hidden");
            header.classList.add("header__fixed");
            if (window.pageYOffset < 200) {
                header.style.backgroundColor = "#29282f00";
                header.style.transition = "0.5s";
            }
        } else if (lastScrollTop < top) {
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

// ============== функция определения цвета хедара при хагрузке страницы ================
// ======================================================================================

function thinHeaderWhenLoad(){
    const header = document.querySelector(".header__top-wrapper");
    if (window.scrollY > 200) {
        console.log('test')
        header.style.cssText = "background-color: #29282ff6;";
        // header.style.cssText = "background-color: #fff;";
        // $('.header__top-wrapper').css('background', '#29282ff6');
    }
}
thinHeaderWhenLoad();


// =========== Навигация по сайту =============
// ======================================================================================
$(document).ready(function(){
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {
  
      // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
      if (this.hash !== "") {
        // Запретить поведение щелчка якоря по умолчанию
        event.preventDefault();
  
        // Хранить хэш
        var hash = this.hash;
  
        // Использование метода animate() jQuery для добавления плавной прокрутки страницы
        // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
  
          // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
          window.location.hash = hash;
        });
        mobileNavContainer.classList.remove('mobile-nav--active');
        document.querySelector('body').classList.remove("no-scroll");
        menuToggle.classList.remove('menu-icon-active');
      } // Конец, если
    });
  });


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
            1025: {
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

// ================    Функция отправки данных из формы на почту     ====================
// ======================================================================================
$(document).ready(function(){
	$("form").submit(function() { // Событие отправки с формы
		var form_data = $(this).serialize(); // Собираем данные из полей
		$.ajax({
			type: "POST", // Метод отправки
			url: "sendform.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: function() {
				$('.popup').addClass('active');
				$('.thanks').addClass('active');
			}
		});
		event.preventDefault();
		document.querySelector(".form__body").style.display = "none";
		document.querySelector(".form__body-reaction").style.display = "flex";
		setTimeout(() => {  
			document.querySelector(".form__body").style.display = "flex";
			document.querySelector(".form__body-reaction").style.display = "none";
			document.querySelector("#name").value = "";
			document.querySelector("#phone").value = "";
			document.querySelector("#checkbox").checked = false;
        }, 2500);
	});
});



