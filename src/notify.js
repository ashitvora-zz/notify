/**
 * Old Twitter-like Notification
 *
 * MIT License
 *
 * Ashit Vora (a.k.vora@gmail.com)
 * Tested on jQuery 1.5.1
 *
 * Usage
 *
 *  $.notify.show({ 
 *    msg: "Message to display", 
 *    sticky: if TRUE, don't auto hide. else hide after 10 seconds
 *  });
 *
 */

(function($, undefined){
    
    var container = $("<div class='notify'>"),
        timeOut = 10000;
    
    $.notify = {};
    
    
    $.notify.init = function(){
		$("body").append(container);
		
		container.click(function(){
		    $.notify.hide();
		});
    };
    
    
    
    $.notify.show = function(config){
        var msg    = config.msg !== "undefined" ? $.trim(config.msg) : "",
			sticky = config.sticky !== "undefined" && config.sticky === true;
		
		if( msg.length > 0 ){
			
			container.html(msg).slideDown();
			
			if(! sticky){	
				setTimeout(function(){
					$.notify.hide();
				}, timeOut);
			}
			
		}
		
        
    };
    
    
    
    $.notify.hide = function(){
        container.slideUp();
    };
    
	
	
	$("document").ready(function(){
		$.notify.init();
	});
	
})(jQuery);