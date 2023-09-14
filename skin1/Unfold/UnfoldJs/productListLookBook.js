(function($) {
  $(function() {

    //
    // $.ajax({
    //   type: "GET",
    //   url: "/product/detail-lookbook.html?product_no=189&cate_no=44&display_group=2",
    //   dataType: "text",
    //   success: function(Parse_data) {
    //     $('.lookBookMainSmallImg').html($(Parse_data).find('.detailArea .listImg ul'))
    //   }
    // })
    //

    var thisGridItem = $(".grid-item");
    var thisGridLength = thisGridItem.length;

    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      gutter:15,
      FitWidth:true,
      transitionDuration: 10,
      initLayout: false,
    });
    $grid.on( 'layoutComplete', function( event, items ) {
      view(thisGridItem,thisGridLength);
    });
    $grid.masonry();

    function view(gridItem,gridLegnth){
      var timer=0;
      var delay=200;
      var speed=300;
      for (var i = 0; i < gridLegnth; i++) {
        timer++;
        gridItem.eq(i).find('.box').show().delay(timer*delay).animate({'top':0,'left':0,opacity:1},speed);
      }
    }

  });
})(jQuery);
