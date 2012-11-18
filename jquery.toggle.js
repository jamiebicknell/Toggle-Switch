(function($) {
	
	$.fn.toggle = function(options) {
		
		var defaults = {
			'slide' : -21
		};

		var options = $.extend({}, defaults, options);

		return this.each(function() {

			var obj = this, status = 'on';

			if(!$(obj).prop('checked')){
				status = 'off';
			}

			$(obj).wrap('<div class="switch" />');

			$(obj).parent().append('<div class="overlay"/>')
			.append('<span class="switched '+status+'"/>');

			$(obj).parent().on('click', function(e){

				e.preventDefault();

				var value, check;

				value = $(this).children('span.switched');
				check = $(this).children('input[type=checkbox]');
			
				if(value.is('.off')) {
					value.stop().animate({left: 0},150).removeClass('off');
					check.prop('checked','checked');
				} else {
					value.stop().animate({left: options.slide},150).addClass('off');
					check.prop('checked','');
				}

			});

		});
		
	};
	
})(jQuery);