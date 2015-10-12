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
          
        </script>
      
      
    </body>
</html>