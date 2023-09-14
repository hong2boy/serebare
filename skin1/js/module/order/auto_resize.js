$('.wrap').delegate( 'textarea', 'keyup', function () {
    var $parent =  $('.wrap');
    var popupHeight = window.innerHeight;
    var parentPadding = parseInt($parent.css('padding-top')) + parseInt($parent.css('padding-bottom'));
    var siblingsHeight = parseInt($parent.siblings('h1').innerHeight()) + parseInt($parent.siblings('.ec-base-button').innerHeight());
    var totalHeight = popupHeight - (siblingsHeight + parentPadding);

    $(this).height(totalHeight);
})
    .find( 'textarea' ).keyup();