/* 
Title:      Toggle Switch
Author:     @jamiebicknell
URL:        http://github.com/jamiebicknell/Toggle-Switch
*/

$(document).ready(function () {
    $('.switch, label.switch-label').each(function(i) {
        $(this).click(function(e) {
            e.preventDefault();
            if($(this).is('label')) {
                var $value = $('#'+$(this).attr('for')).prev('span.switched');
                var $check = $('#'+$(this).attr('for'));
            }
            else {
                var $value = $(this).children('span.switched');
                var $check = $(this).children('input[type=checkbox]');
            }
            if($value.is('.off')) {
                $value.stop().animate({left: 0},150).removeClass('off');
                $check.attr('checked','checked');
            }
            else {
                $value.stop().animate({left: -21},150).addClass('off');
                $check.attr('checked','');
            }
        });
    });
});