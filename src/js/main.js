const $uiAccordion = $('.accordion');
$uiAccordion.accordion({
  collapsible: true,
  heightStyle: 'content',

  activate: (event, ui) => {
    const newHeaderId = ui.newHeader.attr('id');

    if (newHeaderId) {
      history.pushState(null, null, `#${newHeaderId}`);
    }
  },

  create: (event, ui) => {
    const $this = $(event.target);
    const $activeAccordion = $(window.location.hash);

    if ($this.find($activeAccordion).length) {
      $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
    }
  }
});

$(window).on('hashchange', event => {
  const $activeAccordion = $(window.location.hash);
  const $parentAccordion = $activeAccordion.parents('.js-ui-accordion')

  if ($activeAccordion.length) {
    $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
  }
});






  jQuery(document).ready(function ($) {
    var g_top = 0;
    $(window).scroll(function () {
      var top = $(this).scrollTop();

      if (top > g_top) {
        $('.header__top__wrapper').fadeOut(400);
      } else {
        $('.header__top__wrapper').fadeIn(400);
      }
      g_top = top;
    });
  });

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: "slide",
    speed: 900,
  });

  
  var swiper = new Swiper('.swiper-containerr', {
    pagination: {
      el: '.swiper-pagination',
    },
  });


 
