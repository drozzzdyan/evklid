document.addEventListener('DOMContentLoaded', () => {

  let menu = document.querySelector('.main-header__menu');
  let menuLinks = menu.querySelectorAll('.main-header__link')
  let burger = document.querySelector('.burger');

  let search_btn = document.querySelector('.search')
  let search_line = document.querySelector('.search-line');
  let search_btn_close = document.querySelector('.search-line__btn-close')

  // Меню

  burger.addEventListener('click',
    function () {
      burger.classList.toggle('burger_active');
      menu.classList.toggle('main-header__menu_active');
      document.body.classList.toggle('stop-scroll');
      search_line.classList.remove('search-line_active');
      search_btn.classList.remove('search_active');
    }
  )

  menuLinks.forEach(function (element) {
    element.addEventListener('click',
      function () {
        burger.classList.remove('burger_active');
        menu.classList.remove('main-header__menu_active');
        document.body.classList.remove('stop-scroll');
      })
  })

  // Поиск

  search_btn.addEventListener('click',
    function () {
      search_line.classList.add('search-line_active');
      search_btn.classList.add('search_active');
      burger.classList.remove('burger_active');
      menu.classList.remove('main-header__menu_active');
      document.body.classList.remove('stop-scroll');
    })

  search_btn_close.addEventListener('click',
    function () {
      search_line.classList.remove('search-line_active');
      search_btn.classList.remove('search_active');
    })

  // Свайпер

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 5000,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

  });

  // Табы

  let btn_step = document.querySelectorAll('.steps__btn');
  let text_step = document.querySelectorAll('.how-we-work__text');
  let picture_step = document.querySelectorAll('.how-we-work__picture');

  btn_step.forEach(function (step) {
    step.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path; // запомнили кнопку, которую нажали
      // удаляем у всех кнопок класс активности
      btn_step.forEach(function (step_delete) {
        step_delete.classList.remove('steps__btn_active');
      })
      e.currentTarget.classList.add('steps__btn_active'); // добавляем класс активности той кнопке, на которую нажали
      // удаляем классы активности у текста и изображения
      text_step.forEach(function (step) {
        step.classList.remove('how-we-work__text_active');
      })
      picture_step.forEach(function (step) {
        step.classList.remove('how-we-work__picture_active');
      })
      // добавляем классы активности соответсвующие кнопке для текста и изображения
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__text_active');
      document.querySelector(`[data-target-pic="${path}"]`).classList.add('how-we-work__picture_active');
    })
  })

  // Аккордеон

  new Accordion('.accordion', {
    duration: 300,
    onOpen: function (currentElement) {
      console.log(currentElement);
    }
  });

  // lazyload
  new LazyLoad(document.querySelectorAll('.white-icon'));

});