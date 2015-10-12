var thirteen05 = (function(){
  
  return {
    
    setAnchors: function(){
        
        $('#custom-trigger-home-history, #begin-powerplay-wrapper').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#jumbotron-2', 1000);

        });

        $('#custom-trigger-home-food').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#jumbotron-3', 1000);

        });

        $('#custom-trigger-home-drinks').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#jumbotron-4', 1000);

        });

        $('#custom-trigger-home-thunder').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#jumbotron-5', 1000);

        });

        $('#scroll-to-top, #custom-trigger-home-top').click(function(e){
          e.preventDefault();
          $(window).scrollTo('html', 1000);
        });
    },
    navbarFade: function(navbarId, navbarFinalClass){
      
      $(window).scroll(function(){

        if($(window).scrollTop() > 0){
          
          $(navbarId).addClass(navbarFinalClass);
          $('#scroll-to-top').fadeIn('slow');
          
        } else{
          
          $(navbarId).removeClass(navbarFinalClass);
          $('#scroll-to-top').fadeOut('slow');
          
        }

      });
      
    }
  }
  
})();