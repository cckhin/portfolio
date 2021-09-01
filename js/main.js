'use strict';

$(function() {
  console.log( "ready!" );
  AOS.init();
});

function scrollToTargetElement(elementId) {
  $('html, body').animate({
    scrollTop: $(`#${elementId}`).offset().top
  }, 500);
}

jQuery(document).ready(function() {
  jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({ width: jQuery(this).attr('data-percent') }, 3000);
  });
});

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

