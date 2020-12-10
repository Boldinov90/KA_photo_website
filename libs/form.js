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