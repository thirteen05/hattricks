var thirteen05 = (function(){
  
  return {
    
    setAnchors: function(){
      
      //Home Page
        
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
      
      //Food Page
      
        $('#custom-trigger-food-pregame').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#section-food-pregame-images', 1000);

        });

        $('#custom-trigger-food-first').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#section-food-first-images', 1000);

        });

        $('#custom-trigger-food-second').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#section-food-second-images', 1000);

        });

        $('#custom-trigger-food-third').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#section-food-third-images', 1000);
          
        });
          
        $('#custom-trigger-food-assists').click(function(e){
          e.preventDefault();
          $(window).scrollTo('#section-food-assists', 1000);

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