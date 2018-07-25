$( document ).ready(function() {
  // $('.about_slider').slick();
  $('.about_slider').slick({
    // slidesToShow: 3,/
  slidesToScroll: 1,
  autoplay: true,
  // appendDots:'.slider_btn',
  arrows: false,
  appendDots: '.slide-controls',
  dots: true,
  dotsClass: 'custom-dots',
  customPaging: function (slider, i) {
    //FYI just have a look at the object to find aviable information
    //press f12 to access the console
    //you could also debug or look in the source
    console.log(slider);
    var slideNumber = (i + 1),
    totalSlides = slider.slideCount;
    return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"> 0' + slideNumber + '</span><span class="slider_box"></span></a>';
    }
  });
  $('.home_slider').slick({
    // slidesToShow: 3,/
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  appendDots: '.slide-controls',
  dots: true,
  dotsClass: 'custom-dots',
  customPaging: function (slider, i) {
    //FYI just have a look at the object to find aviable information
    //press f12 to access the console
    //you could also debug or look in the source
    console.log(slider);
    var slideNumber = (i + 1),
    totalSlides = slider.slideCount;
    return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"> 0' + slideNumber + '</span><span class="slider_box"></span></a>';
    }
  });
  $('.show_slider').slick({
    slidesToScroll: 1,
    // autoplay: true,
    appendArrows: $('.slide-controls-arrow'),
    // prevArrow: $('.slide-arrow.arrow-prev'),
    nextArrow: $('.slide-arrow.arrow-next'),
    appendDots: '.slide-controls',
    dots: true,
    dotsClass: 'custom-dots',
    customPaging: function (slider, i) {
      //FYI just have a look at the object to find aviable information
      //press f12 to access the console
      //you could also debug or look in the source
      console.log(slider);
      var slideNumber = (i + 1),
      totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"> 0' + slideNumber + '</span><span class="slider_box"></span></a>';
    }
  });
  $('.news_slider1').slick({
    // slidesToShow: 3,/
    slidesToScroll: 1,
    autoplay: true,
    // appendDots:'.slider_btn',
    // arrows: false,
    appendArrows: $('.slide-controls-arrow'),
    // prevArrow: $('.slide-arrow.arrow-prev'),
    nextArrow: $('.slide-arrow.arrow-next'),
    appendDots: '.slide-controls',
    dots: true,
    dotsClass: 'custom-dots',
    customPaging: function (slider, i) {
      //FYI just have a look at the object to find aviable information
      //press f12 to access the console
      //you could also debug or look in the source
      console.log(slider);
      var slideNumber = (i + 1),
      totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"> 0' + slideNumber + '</span><span class="slider_box"></span></a>';
    }
  });
  ///////////////news slider
  $('.news_slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    appendArrows: $('.slide-controls-arrow'),
    prevArrow: $('.slide-arrow.arrow-prev'),
    nextArrow: $('.slide-arrow.arrow-next'),

  });
  $('.news_slider_3').slick({
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 2,
    arrows: false,

  });
  $('.vp-controls-wrapper').css('display: none !important');
   $(".vp-title").css("display", "none");
});
