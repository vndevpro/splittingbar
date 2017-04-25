/**
 Version: 1.0.0
 Author: JuanOnSoftware
 Url: https://github.com/vndevpro/splittingbar
 Purpose: split a bar into two parts by different colors. All other options are configurable.
 
 Sample HTML:
 
<div style="width: 100%; background-color: #AAA">
  <div style="width: 50%; background-color: #4CAF50; text-align: center; line-height: 30px;">50%</div>
</div> 
*/

(function($){
	
  var defaults = {
  	rightPartBgColor: '#4CAF50',
    leftPartBgColor: '#DDD',
    lineHeight: '20px',
    leftNumber: 10,
    rightNumber: 10
  };
  
  function SplittingBar($element, options){
  	this.$element = $element;
    this.options = $.extend({}, defaults, options);
    this.init();
  }
  
  SplittingBar.prototype = {
  	init: function(){
    	var leftPercent = this.options.leftNumber / (this.options.leftNumber + this.options.rightNumber) * 100;
    
    	this.$element.html('<div style="width: 100%; background-color: ' + this.options.leftPartBgColor + '"><div style="width: '+ leftPercent +'%; background-color: ' + this.options.rightPartBgColor + '; text-align: center; line-height: ' + this.options.lineHeight + ';">&nbsp;</div></div>');
    }
  };
  
  $.fn.splittingBar = function(options){
  	return $(this).each(function(){
    	new SplittingBar($(this), options);
    });
  };
  
})(jQuery);