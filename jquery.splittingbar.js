/**
 Version: 1.1.0
 Author: JuanOnSoftware
 Url: https://github.com/vndevpro/splittingbar
 Purpose: split a bar into two parts by different colors. All other options are configurable.
*/

(function ($) {

    var defaults = {
        rightPartBgColor: '#4CAF50',
        leftPartBgColor: '#DDD',
        lineHeight: '20px',
        leftNumber: 0,
        rightNumber: 0,
        showText: ''
    };

    function SplittingBar($element, options) {
        this.$element = $element;
        this.options = $.extend({}, defaults, options);
        this.init();
    }

    SplittingBar.prototype = {
        init: function () {
            var leftPercent = this.options.leftNumber / (this.options.leftNumber + this.options.rightNumber) * 100;

            var leftText = '&nbsp;';
            if (this.options.showText === 'n') {
                leftText = this.options.leftNumber;
            } else if (this.options.showText === 'p') {
                leftText = leftPercent + '%';
            }

            if (this.options.leftNumber === 0 && this.options.rightNumber === 0) {
                leftPercent = 50;
            }

            this.$element.html(
                '<div style="width: 100%; background-color: ' + this.options.leftPartBgColor + '; color:white;">' +
                    '<div style="   width: ' + leftPercent + '%;' +
                                '   background-color: ' + this.options.rightPartBgColor + ';' +
                                '   text-align: center; font-weight: bold;' +
                                '   line-height: ' + this.options.lineHeight + ';">' +
                        leftText +
                    '</div>' +
                '</div>');
        }
    };

    $.fn.splittingBar = function (options) {
        return $(this).each(function () {
            new SplittingBar($(this), options);
        });
    };

})(jQuery);