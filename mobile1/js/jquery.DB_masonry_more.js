(function($){
	$.fn.DB_masonry_more=function(options){
		var opt={
			initNum:18,            //최초보이는갯수
			clickOpenNum:4,       //클리시오픈갯수
			speed:300,            //이동속도
			delay:200             //딜레이시간
		};
		$.extend(opt,options);
		return this.each(function(){
			var $this=$(this);
			var $item=$this.find('.grid-item');
			var $more=$this.find('.grid-more');
			var len=$item.length;
			var initNum=opt.initNum;
			var clickOpenNum=opt.clickOpenNum;
			var speed=opt.speed;
			var delay=opt.delay;
			var cnt=0;

			function view(){
				var timer=0;
				for(var i=cnt*clickOpenNum;i<cnt*clickOpenNum+initNum;i++){
					timer++;
					$item.eq(i).find('.box').show().delay(timer*delay).animate({'top':0,'left':0,opacity:1},speed);
				}
				$grid.masonry();
			}
			view();

			$more.bind('click',function(){
				cnt++;
				view();
				if(cnt*clickOpenNum+initNum>=len){
					$(this).addClass('off');
				}
			});
		});

	};

})(jQuery);



 var $grid=$('.grid').masonry({
   itemSelector: '.grid-item',
   gutter:15,
   FitWidth:true,
   transitionDuration: 0
 });
window.onload=function(){

$('.grid-wrap').DB_masonry_more({});

    };