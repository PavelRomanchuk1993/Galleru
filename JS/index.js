document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".bottom-element__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".bottom-element__scroll");
    
    document.querySelectorAll(".bottom-element__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });
    
    document.querySelectorAll(".bottom-element__scroll").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-bottom-nav__element");
      }
    })
    dropdown.classList.toggle("active-bottom-nav__element");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".bottom-nav__list")) {
    document.querySelectorAll(".bottom-element__scroll").forEach(el => {
        el.classList.remove("active-bottom-nav__element");
    })
     document.querySelectorAll(".bottom-element__btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
$('.header__burger').click(function(event) {
  $('.header__burger,.header__nav,.header__entrance').toggleClass('active');
  $('body').toggleClass('lock');
  
})
$('.list-element__link').click(function(event) {
  $('.header__burger,.header__nav,.header__entrance').removeClass('active');
  $('body').removeClass('lock')
});
})
const element = document.querySelector('#custom-select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
});

const swiper1 = new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,
  spaceBetween: 30,
  pagination: {
  el: '.swiper-pagination',
  type: 'fraction',
  clickable: true,
  observer: true,
  resizeObserver: true,
  centeredSlides: true,
  },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      slidesPerGroup: 1, 
    },
    400: {
      slidesPerView: 2,
      slidesPerGroup: 2, 
    },
    1366: {
      slidesPerView: 3,
      slidesPerGroup: 3, 
      
    },
},
  });

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: 0,
  });
  
  document.querySelectorAll('.accordion-periods__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.accordion-periods__btn').forEach(function(btn){
    btn.classList.remove('accordion-periods__btn--active')});
    e.currentTarget.classList.add('accordion-periods__btn--active');
    document.querySelectorAll('.era__painters').forEach(function(tabsBtn){
    tabsBtn.classList.remove('era__painters--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('era__painters--active');
    });
    });

    tippy('#tooltip1', {
      theme: 'custom',
      content: "Пример современных тенденций - современная методология разработки",
      duration: [600, 600],
      maxWidth: 270,
    });
    tippy('#tooltip2', {
      theme: 'custom',
      content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
      duration: [600, 600],
      maxWidth: 270,
    });
    tippy('#tooltip3', {
      theme: 'custom',
      content: "В стремлении повысить качество",
      duration: [600, 600],
      maxWidth: 270,
    });

  const swiper2 = new Swiper('.events__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 2,
    loop: false,
    pagination: {
      el: '.events-swiper__boolit',
      clickable: true
      },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        slidesPerGroup: 1, 
      },
      400: {
        slidesPerView: 2,
        slidesPerGroup: 2, 
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3, 
      }
    },
    });
  const swiper3 = new Swiper('.projects__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,
  spaceBetween: 45,
  slidesPerView: 'auto',
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      slidesPerGroup: 1, 
    },
    400: {
      slidesPerView: 2,
      slidesPerGroup: 2, 
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3, 
    }
  },
  });

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);
  new JustValidate('.details__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      phone: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
         minLength: 'Недопустимый формат',
         maxLength: 'Недопустимый формат',
         required: 'Недопустимый формат',
      },
      phone: {
          required: 'Недопустимый формат',
          function: 'Недопустимый формат',
      }
  },
  });
  new window.JustValidate('.js-validate-error-label', {
    colorWrong: '#D11616'
  });

  
  




