        <div id="scroll-to-top" class="text-center">
          <i class="fa fa-chevron-up fa-2x font-white"></i>
        </div>
      
      
        <script src="<?php echo get_stylesheet_directory_uri();?>/bower_components/jquery/dist/jquery.min.js"></script>
        <script src="<?php echo get_stylesheet_directory_uri();?>/js/vendor/bootstrap.min.js"></script>
        <script src="<?php echo get_stylesheet_directory_uri();?>/js/main.js"></script>
        <script src="<?php echo get_stylesheet_directory_uri();?>/js/vertical-timeline/js/main.js"></script>
        <script src="<?php echo get_stylesheet_directory_uri();?>/js/thirteen05.js"></script>
        <script src="<?php echo get_stylesheet_directory_uri();?>/bower_components/jquery.scrollTo/jquery.scrollTo.min.js"></script>
        <script src="<?php echo get_stylesheet_directory_uri();?>/bower_components/jquery.stellar/src/jquery.stellar.js"></script>
        <script src="<?php echo get_stylesheet_directory_uri();?>/bower_components/jquery-selectric/public/jquery.selectric.min.js"></script>
      
        <script>
          
          //Fade in site when loaded
          
          $(window).load(function(){
            $('body').addClass('show');
            setTimeout($('#home-jumbo-content-wrapper').fadeIn(1000), 1000);
            
          });
          
          //Fade Navbar on scroll down
          
          thirteen05.navbarFade('#hattricks-navbar','navbar-green');
          
          
          //Sets anchosr for home page
          
          $(document).ready(function(){
            thirteen05.setAnchors(); 
          });
          
          //Initiates Stellar.js parallax plug-in
          
          $.stellar();
/*          
          $(function(){
            $('select').selectric();
          });*/
          
          //Shows Shipping Address form if Ship to Different Address is checked
          
          $('#ship-to-different-address-checkbox').change(function(){
                $('.shipping_address').stop().slideToggle();
          });
          
          $('#food-button').click(function(){
            $('#section-food-pregame').fadeToggle();
          });
          
          
          $('.staff-member-pic-wrapper').hover(function(){
            
            $(this).find('.staff-member-overlay').addClass('staff-hover');
            
          }, function(){
            
            $(this).find('.staff-member-overlay').removeClass('staff-hover');
            
          });
          
          
          
          /* Every time the window is scrolled ... */
          $(window).scroll( function(){

              /* Check the location of each desired element */
              $('.offScreen').each( function(i){

                  var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();

                  /* If the object is completely visible in the window, fade it it */
                  if( bottom_of_window > bottom_of_object ){

                      $(this).removeClass('offScreen');
                      $(this).addClass('onScreen');

                  } else{
                      $(this).removeClass('onScreen');
                      $(this).addClass('offScreen');
                  }

              }); 

          });
          
        </script>
      
      
    </body>
</html>