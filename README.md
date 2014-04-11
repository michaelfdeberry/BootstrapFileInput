Bootstrap File Input
=========

Bootstrap File Input is a simple JQuery plugin that will create an input group to act as a file input.

Usage
----
Add a standard file input to the page

```sh
<input id="fileUpload" type="file" />
```

Initialize the plugin for the element

```sh
$('#fileUpload').bootstrapFileInput();
```

Settings
----
___
size: [sm | md | lg] - Specifies the size of the input and button. sm will use input-sm and btn-sm. lg will use input-lg and btn-lg. Not setting this option uses the default input and button size. 

Default: md
___
btnPosition: [right | left] - Specifies which side of the input groupt to place the button.

Default: right
___
bntType: [btn-default | btn-primary | btn-success | btn-info | btn-warning | btn-danger ] - The bootstrap button class that will be applied to the button.

Default: btn-default
___
btnText: - The text that the button will display.

Default: Browse...
___
```sh
$('#fileUpload').bootstrapFileInput({ size: 'lg', btnType: 'btn-primary', btnPosition: 'left' });
$('#fileUpload1').bootstrapFileInput({ size: 'sm', btnType: 'btn-info' });
$('#fileUpload2').bootstrapFileInput({ btnText: 'Upload' } );
```
___
Requires
---
[Bootstrap]

[jQuery]

Preview
----
http://jsfiddle.net/mdeberry/7mAZ7/

License
----
Beerware

[Bootstrap]:http://getbootstrap.com
[jQuery]:http://jquery.com

