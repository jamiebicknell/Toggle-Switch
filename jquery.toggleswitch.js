/* 
Title:      Toggle Switch
URL:        http://github.com/jamiebicknell/Toggle-Switch
Author:     Jamie Bicknell
Twitter:    @jamiebicknell
Thanks:     @steve228uk for prop/var mods and plugin suggestion
*/

(function ($) {
    'use strict';
    $.fn.toggleSwitch = function (options) {
        var settings = $.extend({
            onClick: function () { return true; },
            onChangeOn: function () { return true; },
            onChangeOff: function () { return true; }
        }, options);
        $(this).each(function () {
            var obj = $(this), status = obj.is(':checked') ? '' : ' off';
            if (!obj.parent('div.switch').length) {
                obj.wrap('<div class="switch"></div>');
                obj.parent('div.switch').prepend('<span class="switched' + status + '" />').prepend('<div class="overlay" />');
            }
            obj.parent('div.switch').add($('label[for=' + obj.prop('id') + ']')).click(function (e) {
                e.preventDefault();
                if (!obj.prop('disabled')) {
                    var value, check;
                    settings.onClick.call(obj);
                    if ($(this).is('label')) {
                        value = $('#' + $(this).prop('for')).prev('span.switched');
                        check = $('#' + $(this).prop('for'));
                    } else {
                        value = $(this).children('span.switched');
                        check = $(this).children('input[type=checkbox]');
                    }
                    if (value.is('.off')) {
                        value.stop().animate({left: 0}, 150, 'linear').removeClass('off');
                        check.prop('checked', 'checked');
                        settings.onChangeOn.call(obj);
                    } else {
                        value.stop().animate({left: -21}, 150, 'linear').addClass('off');
                        check.prop('checked', '');
                        settings.onChangeOff.call(obj);
                    }
                }
            });
        });
    };
}(jQuery));