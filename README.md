# Toggle Switch

This is a pure image based toggle switch powered by jQuery, using zero CSS3 properties and as a result it looks and functions the same in all browsers.

It utilises a semi transparent PNG overlay to mask the underneath switch image, so the toggling animation remains within the constraints of the rounded rectangle.

**[View the working example](http://jamiebicknell.github.io/Toggle-Switch)**

## Features

* Compatible in most browsers, including IE6+
* Retina images for supporting iDevices
* Uses semi-transparent PNG overlay, so will look the same in all browsers
* PNG Overlay will need to be updated for use on different backgrounds (PSD Included for both regular and retina images)
* Switch animates on click of the switch itself or the accompanying `<label>`

## Example Usage

Plugin will automatically generate HTML required, and gracefully fall back to a plain old checkbox if JavaScript is disabled. Downside is that there may be a slight flicker between seeing the checkbox and the toggle switch appearing.

```html
<link href='./toggleswitch.css' rel='stylesheet' type='text/css' />
<!--[if lt IE 8]>
<link href='./toggleswitch.ie.css' rel='stylesheet' type='text/css' />
<![endif]-->

<!-- Switch is ON -->
<label for='opt1'>Option 1</label>
<input type='checkbox' name='opt1' id='opt1' value='1' class='toggleswitch' checked='checked' />

<!-- Switch is OFF -->
<label for='opt2'>Option 2</label>
<input type='checkbox' name='opt2' id='opt2' value='1' class='toggleswitch' /> 

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js'></script>
<script type='text/javascript' src='./jquery.toggleswitch.js'></script>
<script type='text/javascript'>
jQuery(document).ready(function ($) {
    $('.toggleswitch').toggleSwitch();
});
</script>
```
    
## Alternative HTML Usage

No flicker between the document loading and toggle switch appearing, but there is no graceful fall back if JavaScript is disabled.

```html
<link href='./toggleswitch.css' rel='stylesheet' type='text/css' />
<!--[if lt IE 8]>
<link href='./toggleswitch.ie.css' rel='stylesheet' type='text/css' />
<![endif]-->

<!-- Switch is ON -->
<label for='opt1'>Option 1</label>
<div class='switch'>
    <div class='overlay'></div>
    <span class='switched'></span>
    <input type='checkbox' name='opt1' id='opt1' value='1' class='toggleswitch' checked='checked' />
</div>

<!-- Switch is OFF -->
<label for='opt2'>Option 2</label>
<div class='switch'>
    <div class='overlay'></div>
    <span class='switched off'></span>
    <input type='checkbox' name='opt2' id='opt2' value='1' class='toggleswitch' />
</div>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js'></script>
<script type='text/javascript' src='./jquery.toggleswitch.js'></script>
<script type='text/javascript'>
jQuery(document).ready(function ($) {
    $('.toggleswitch').toggleSwitch();
});
</script>
```

## Options

You can create functions for `onClick`, `onChangeOn`, and `onChangeOff`.

```html
<script type='text/javascript'>
jQuery(document).ready(function ($) {
    $('.toggleswitch').toggleSwitch({
        onClick: function () {
            console.log('Toggle Switch was clicked');
        },
        onChangeOn: function () {
            console.log('Toggle Switch was changed to the ON position');
        },
        onChangeOff: function () {
            console.log('Toggle Switch was changed to the OFF position');
        }
    });
});
</script>
```

## License

Toggle Switch is licensed under the [MIT license](http://opensource.org/licenses/MIT), see [LICENSE.md](https://github.com/jamiebicknell/Toggle-Switch/blob/master/LICENSE.md) for details.