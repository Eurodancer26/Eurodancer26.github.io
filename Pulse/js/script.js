'use strict';
//Carusel

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: false,
                  arrows: false
                }               
            }
        ]
      });

//Tabs

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    
        function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                });
            });      
        }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  

//Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('300');
  });

  $('.button_min').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

//ValidateForms

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');
  
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, укажите ваше имя",
        phone:"Укажите ваш номер телефона",
        email: {
          required: "Нам нужен ваш адрес электронной почты, чтобы связаться с вами",
          email: "Ваш адрес электронной почты должен быть в формате имя@домен.com"
        }
      }
    });
  }

  //Masked Input Plugin for jQuery
  //перед использованием убрать type=number в input
  $('input[name=phone]').mask("+7 (999) 999-99-99");


  $('form').submit(function(e) {
    e.preventDefault();//отменяет стандартное поведение браузера "перезагрузку страницы"
    
    if(!$(this).valid()) {
      return;    //если форма не прошла валидацию, то ничего делать не будем
    }            //небудет отправлять пустые данные из формы
    
    $.ajax({             //отправляем при помощи метода ajax(), данные на сервер
      type: "POST",      //отдаём данные на сервер, GET получаем
      url: "js/mailer/smart.php", //запрос на передачу данных(куда передаём запрос)
      data: $(this).serialize()  //те данные которые хочу отправить на сервер
    }).done(function() {
      $(this).find("input").val("");//отчищаем все инпуты, после отправки
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');//все формы обновятся - отчистятся
    });
    return false;
  });


  //Smooth scroll and pageup
  //Плавная прокрутка и переход на страницу
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 664) {
      $('.pageup').fadeIn().addClass('animate__backInDown').removeClass('animate__fadeOutUpBig');
    } else {
      $('.pageup').removeClass('animate__backInDown').fadeOut().addClass('animate__fadeOutUpBig');   
    }
  });

  //Добавить плавную прокрутку ко всем ссылкам
  $("a").on('click', function(event) {

    //Убедитесь, что this.hash имеет значение, 
    //прежде чем переопределять поведение по умолчанию.
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      // Использование метода jQuery animate() для плавной прокрутки страницы

      // Необязательное число (800) указывает количество миллисекунд, 
      //которое требуется для прокрутки до указанной области.
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

        // Добавить решетку (#) к URL-адресу после завершения прокрутки (поведение при нажатии по умолчанию)
        window.location.hash = hash;
      });
    } // End if
  });

  new WOW().init();
});



