$(function() {
  $(".loader").fadeOut(2000,function() {
   });
});
document.addEventListener('scroll', () => {
  const header = document.querySelector('.navbar')
  if (window.pageYOffset > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})


AOS.init();

var siteCarousel = function () {
  if ($('.nonloop-block-13').length > 0) {
    $('.nonloop-block-13').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      nav: true,
      navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
      responsive: {
        600: {
          margin: 0,
          nav: true,
          items: 2
        },
        1000: {
          margin: 0,
          stagePadding: 0,
          nav: true,
          items: 3
        },
        1200: {
          margin: 0,
          stagePadding: 0,
          nav: true,
          items: 4
        }
      }
    });
  }

  $('.slide-one-item').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    autoplay: true,
    pauseOnHover: false,
    nav: true,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });


  $('.slide-one-item-alt').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1000,
    autoplay: true,
    pauseOnHover: true,
    onDragged: function (event) {
      console.log('event : ', event.relatedTarget['_drag']['direction'])
      if (event.relatedTarget['_drag']['direction'] == 'left') {
        $('.slide-one-item-alt-text').trigger('next.owl.carousel');
      } else {
        $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
      }
    }
  });
  $('.slide-one-item-alt-text').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1000,
    autoplay: true,
    pauseOnHover: true,
    onDragged: function (event) {
      console.log('event : ', event.relatedTarget['_drag']['direction'])
      if (event.relatedTarget['_drag']['direction'] == 'left') {
        $('.slide-one-item-alt').trigger('next.owl.carousel');
      } else {
        $('.slide-one-item-alt').trigger('prev.owl.carousel');
      }
    }
  });


  $('.custom-next').click(function (e) {
    e.preventDefault();
    $('.slide-one-item-alt').trigger('next.owl.carousel');
    $('.slide-one-item-alt-text').trigger('next.owl.carousel');
  });
  $('.custom-prev').click(function (e) {
    e.preventDefault();
    $('.slide-one-item-alt').trigger('prev.owl.carousel');
    $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
  });

};
siteCarousel();




var siteIstotope = function () {
  /* activate jquery isotope */
  var $container = $('#posts').isotope({
    itemSelector: '.item',
    isFitWidth: true
  });

  $(window).resize(function () {
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });

  $container.isotope({ filter: '*' });

  // filter items on button click
  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#filters button').removeClass('active');
    $(this).addClass('active');
  });
}

siteIstotope();



var siteIstotope = function () {
  /* activate jquery isotope */
  var $container = $('#posts').isotope({
    itemSelector: '.item',
    isFitWidth: true
  });

  $(window).resize(function () {
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });

  $container.isotope({ filter: '*' });

  // filter items on button click
  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#filters button').removeClass('active');
    $(this).addClass('active');
  });
}

siteIstotope();


$('.fancybox').on('click', function () {
  var visibleLinks = $('.fancybox');

  $.fancybox.open(visibleLinks, {}, visibleLinks.index(this));

  return false;
});
