/* 
Title:      Toggle Switch
Author:     @jamiebicknell
URL:        http://github.com/jamiebicknell/Toggle-Switch
*/

$(document).ready(function () {
    $('.switch, label.switch-label').each(function(i) {
        $(this).click(function(e) {

            var $value, $check;

            e.preventDefault();
            if($(this).is('label')) {
                $value = $('#'+$(this).attr('for')).prev('span.switched');
                $check = $('#'+$(this).attr('for'));
            }
            else {
                $value = $(this).children('span.switched');
                $check = $(this).children('input[type=checkbox]');
            }
            if($value.is('.off')) {
                $value.stop().animate({left: 0},150).removeClass('off');
                $check.prop('checked','checked');
            }
            else {
                $value.stop().animate({left: -21},150).addClass('off');
                $check.prop('checked','');
            }
        });
    });
});