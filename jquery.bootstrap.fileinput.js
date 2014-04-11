;(function ($) {
    var pluginName = 'bootstrapFileInput';
    var defaults = {          
        size: 'md',
        btnPosition: 'right', 
        btnType: 'btn-default',
        btnText: 'Browse...'
    };
    
    function BootstrapFileInput(element, options) {
        this._element = element;
        this._options = $.extend({}, defaults, options);
        this._name = pluginName;
        
        this.init();
    }
    
    BootstrapFileInput.prototype.init = function() {
        var fileUpload = $(this._element);
        var inputGroup = $('<div class="input-group" />');
        var buttonGroup = $('<span class="input-group-btn" />');        
        var input = $('<input type="text" readonly class="form-control" />');
        var button = $('<button type="button" class="btn" />')
            .text(this._options.btnText)
            .addClass(this._options.btnType); 
                
        if (this._options.size === 'sm') {            
            input.addClass('input-sm');
            button.addClass('btn-sm');
        } else if (this._options.size === 'lg') {             
            input.addClass('input-lg');
            button.addClass('btn-lg');
        }
        
        fileUpload.hide();        
        buttonGroup.append(button);
                    
        if(this._options.btnPosition === 'left') {
            inputGroup.append(buttonGroup);
            inputGroup.append(input);
        } else {                        
            inputGroup.append(input);
            inputGroup.append(buttonGroup);
        }
        
        inputGroup.insertAfter(fileUpload);

        button.on('click', function() {
            fileUpload.click();
        });

        fileUpload.on('change', function() {
            input.val(fileUpload.val().split('/').pop().split('\\').pop());            
        });
    }
    
    $.fn.bootstrapFileInput = function (options) {
        return this.each(function() {
            if(!$.data(this, 'plugin_' + pluginName) && this.tagName === 'INPUT' && this.type === 'file') {
                $.data(this, 'plugin_' + pluginName);
                new BootstrapFileInput(this, options);
            }
        });
    };

}(jQuery));
