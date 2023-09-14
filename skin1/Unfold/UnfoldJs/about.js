// 본페이지내 모든 소스는 언폴드에서 제작된 스크립트 입니다. 복사 판매 및 도용시에는 법적인 조취를 취하겠습니다. 


(function($){

  $('.scroll-link').click(function(event) {
    $("html , body").animate({
      scrollTop:$(".cont-01").offset().top
    },500);
  });

})(jQuery);
