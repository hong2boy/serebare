// 본페이지내 모든 소스는 언폴드에서 제작된 스크립트 입니다. 복사 판매 및 도용시에는 법적인 조취를 취하겠습니다. 


(function($){
  $(document).ready(function() {

    // popup10 slide
    var popUp10Slide = new Swiper ('.popUp10Swiper', {
      // Optional parameters

      loop: true,
      autoplay: {
        delay: 2500,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      on: {
        init: function () {
          // console.log("test on" + this.activeIndex);
          var swActive = $('.swiper-slide-active');
          // var swAImg = swActive.find('.ap-top-banner');
          var swATxt00 = swActive.find('h5');
          var swATxt01 = swActive.find('h2');
          var swATxt02 = swActive.find('h4');
          // TweenMax.fromTo(swAImg, 0.5, {x:100} , {x:0});
          // TweenMax.to(swAImg, 0.5, {x:0});
          TweenMax.to(swATxt00, 0.5, {opacity : 1 , x:0 , delay : 0.2});
          TweenMax.to(swATxt01, 0.5, {opacity : 1 , x:0 , delay : 0.4});
          TweenMax.to(swATxt02, 0.5, {opacity : 1 , x:0 , delay : 0.6});
        },
        slideChangeTransitionStart : function () {
          // console.log("test change" + this.activeIndex);
          var swNonActive = $('.swiper-slide');
          // var swNImg = swNonActive.find('.ap-top-banner');
          var swNTxt00 = swNonActive.find('h5');
          var swNTxt01 = swNonActive.find('h2');
          var swNTxt02 = swNonActive.find('h4');
          // TweenMax.set(swNImg , {x:100});

          TweenMax.set(swNTxt00, {opacity : 0 , x:50 });
          TweenMax.set(swNTxt01, {opacity : 0 , x:50 });
          TweenMax.set(swNTxt02, {opacity : 0 , x:50 });

          var swActive = $('.swiper-slide-active');
          // var swAImg = swActive.find('.ap-top-banner');
          var swATxt00 = swActive.find('h5');
          var swATxt01 = swActive.find('h2');
          var swATxt02 = swActive.find('h4');
          // TweenMax.to(swAImg, 0.5, {x:0});
          TweenMax.to(swATxt00, 0.5, {opacity : 1 , x:0 , delay : 0.2});
          TweenMax.to(swATxt01, 0.5, {opacity : 1 , x:0 , delay : 0.4});
          TweenMax.to(swATxt02, 0.5, {opacity : 1 , x:0 , delay : 0.6});

        },
        slideChangeTransitionEnd : function () {

        }
      },

    })
    // popup10 slide

  });
})(jQuery);
