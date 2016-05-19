'use strict';

(function($) {
    $.fn.scrollAnimate = function(options) {
        var settings = $.extend({
            'startAnimation': 'animated'
        }, options);
        
        // save the instance to all elements selected
        var self = this;
        
        var app = {
           elements: [],
           _between: function(pos, top, bottom) {
               return (pos >= top && pos <= bottom);
           },
           onScroll: function(e) {
               var elemsLength = this.elements.length;
               var windowHeight = parseInt($(window).height());     // get the browser height
               var distanceTop = parseInt($(window).scrollTop());   // get the distance to the top in pixels
               var distanceBottom = windowHeight + distanceTop;
               
               for(var i = 0; i < elemsLength; i++) {
                   var $elem = this.elements[i].elem;
                   if(this._between(this.elements[i].offset, distanceTop, distanceBottom)) {
                       if(!$elem.hasClass(settings.startAnimation)) {
                           var effect = this.elements[i].animation;
                           $elem.removeClass().addClass(effect +' '+ settings.startAnimation);
                       }
                   }
               }
           },
           initialize: function() {
               for(var i = 0; i < $(self).size(); i++) {
                   var $elem = $(self).eq(i);
                   var elemHeight = $elem.height();
                   var offset = $elem.offset().top; // $elem.offset().top - elemHeight;
                   var elemData = {
                       'elem': $elem,
                       'offset': offset,
                       'animation': $elem.attr('data-animate')
                   };
                   
                   this.elements.push(elemData);
               }
               
               console.log(this.elements);
               this.onScroll();
               this.initScroll();
           },
           initScroll: function() {
               $(document).on('scroll', this.onScroll.bind(this));
           }
        };
        
        app.initialize();
    }
}(jQuery));