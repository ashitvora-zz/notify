/*
 * notify.js
 * Twitter like notifications plugin
 *
 * MIT License
 *
 * required jQuery 1.4.2 or higher
 *
 * Ashit Vora (a.k.vora@gmail.com)
 * 05/09/2010
 *
 *
 * Usage
 * -----
 * $.notify.show({msg: "This is the message to show", timeOut: "Time after which it should disappear. Leave it blank if you want user to close it"});
 *
 *
 */

(function($, undefined){
	$.notify = {
		
		notifyDiv :{},
		
		init : function(){
			//Message Container
			this.notifyDiv = $("<div>");
			
			//style the container
			this.notifyDiv.css({
				"width" : "100%",
				"padding" : "10px 20px",
				"margin" : "0",
				"fontSize" : "20px",
				"fontFamily" : "'Lucida Grande', Verdana",
				"textAlign" : "center",
				"position" : "fixed",
				"top" : "0",
				"left" : "0",
				"zIndex" : "1000",
				"backgroundColor" : "#fff",
				"display" : "none",
				"overflow" : "visible",
				"borderBottom" : "1px solid #aaa",
				"cursor" : "pointer"
			});
			
			//add it to the body
			$("body").append(this.notifyDiv);
			
			var self = this;
			this.notifyDiv.bind("click", function(){
				self.hide();
			});
		},
		
		show : function(){
			var args = arguments[0],
				msg = args.msg !== undefined && args.msg.length > 0 ? args.msg : "",
				timeOut = args.timeOut !== undefined && parseInt(args.timeOut, 10) > 0 ? args.timeOut : 0,
				self = this;

			//add the message and make it visible
			this.notifyDiv.text(msg).slideDown(function(){
				
				//if timeOut was passed as an argument, hide the notify bar after that time otherwise leave it as is.
				if(timeOut > 0){
					setTimeout(function(){
						self.hide();
					}, timeOut);
				}

			});
		},
		
		hide : function(){
			this.notifyDiv.slideUp();
		}
		
	};
	
	$("document").ready(function(){
		//Initialize it
		$.notify.init();
	});
	
})(jQuery);