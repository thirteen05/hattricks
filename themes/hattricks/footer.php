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
        <script src="<?php echo get_stylesheet_directory_uri();?>/bower_components/slick-carousel/slick/slick.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>



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
          
          //Initiates Stellar.js parallax plug-in on anything above tablet
          
          
          if($(window).innerWidth() > 768){
            $.stellar();
          }
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

                  /* If the object is completely visible in the window, fade in */
                  if( bottom_of_window > bottom_of_object ){

                      $(this).removeClass('offScreen');
                      $(this).addClass('onScreen');

                  } else{
                      $(this).removeClass('onScreen');
                      $(this).addClass('offScreen');
                  }

              }); 

          });
          
          $(function($){	

              var $window = $(window);
              var scrollTime = 1.5;
              var scrollDistance = 500;

              $window.on("mousewheel DOMMouseScroll", function(event){

                  event.preventDefault();	

                  var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
                  var scrollTop = $window.scrollTop();
                  var finalScroll = scrollTop - parseInt(delta*scrollDistance);

                  TweenMax.to($window, scrollTime, {
                      scrollTo : { y: finalScroll, autoKill:true },
                          ease: Power1.easeOut,
                          overwrite: 5							
                      });

              });
          });
          
          $('#hamburger').click(function(){
            $('#mobile-nav-wrapper').toggleClass('mobile-nav-show');
          });
          
          $('.your-class').slick({
            dots: false,
            speed: 500,
            appendArrows: '#home-testimonial-arrow-wrapper'
          });
          
          $(document).ready(function() {
            $("#carousel-home-food").on("slid", function() {
              var to_slide;
              to_slide = $("#carousel-home-food >.item.active").attr("data-slide-to");
              $(".carousel-home-food-indicator.active").removeClass("active");
              $(".carousel-home-food-indicators li[data-slide-to=" + to_slide + "]").addClass("active");
            });
            
            $(".carousel-home-food-indicator").on("click", function() {
              $(this).preventDefault();
              $("#carousel-home-food").carousel(parseInt($(this).attr("data-slide-to")));
              $(".carousel-home-food-indicator.active").removeClass("active");
              $(this).addClass("active");
            });
            
          });
          
          var $carousel = $('#carousel-home-food');
          $carousel.carousel();
          var handled=false;//global variable

          $carousel.bind('slide.bs.carousel', function (e) {
              var current=$(e.target).find('.item.active');
              var indx=$(current).index();
              if((indx+2)>$('.carousel-indicators li').length)
                  indx=-1
               if(!handled)
               {
                  $('.carousel-indicators li').removeClass('active')
                  $('.carousel-indicators li:nth-child('+(indx+2)+')').addClass('active');
               }
               else
               {
                  handled=!handled;//if handled=true make it back to false to work normally.
               }
          });

          $(".carousel-indicators li").on('click',function(){
             //Click event for indicators
             $(this).addClass('active').siblings().removeClass('active');
             //remove siblings active class and add it to current clicked item
             handled=true; //set global variable to true to identify whether indicator changing was handled or not.
          });
          
          
        </script>
      
      
    </body>
</html>