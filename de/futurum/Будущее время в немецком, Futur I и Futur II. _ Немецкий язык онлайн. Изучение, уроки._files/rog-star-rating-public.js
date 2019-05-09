(function( $ ) {
	'use strict';
	
	$(function() {
		$(document).ready(function() {
			var rog_star_rating = {
				block: '.star-rating',
				star: '.star',
				hover: 'hover',
				starHover: function(s, e){				
					var self = this, p = s.parent(), obj = $(p).children(self.star), current_index = obj.length;
					$.each(obj, function( index, element ) {
						if($(element).get(0) == $(s).get(0)) current_index = index; 
						$(element).removeClass(self.hover);
						if( ($(element).hasClass('star-half') && $(element).hasClass('star-full')) || ($(element).hasClass('star-empty') && $(element).hasClass('star-full')) ) $(element).removeClass('star-full');
						if(e) if(index <= current_index) {
							$(element).addClass(self.hover);
							if( $(element).hasClass('star-half') || $(element).hasClass('star-empty') )
								$(element).addClass('star-full');
						}
					});
				},
				starClick: function(s){				
					var self = this, p = s.parent(), obj = $(p).children(self.star), r = 0;
					$.each(obj, function( index, element ) { if($(element).get(0) == $(s).get(0)) r = index+1; });
					$.post( ajax_url, {post_id:$(p).data('post-id'),r:r,action:'add_rating'}, function(response) { $(p).replaceWith(response); });
				},
				init: function(){
					var self = this;
					$(self.block).on('mouseenter', self.star, function(){ self.starHover($(this), true) });
					$(self.block).on('mouseleave', self.star, function(){ self.starHover($(this), false) });
					$(self.block).on('click', self.star, function(){ self.starClick($(this)) });
				}
			};
			rog_star_rating.init();
		});
	});

})( jQuery );
