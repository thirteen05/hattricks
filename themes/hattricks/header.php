<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
      
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/bower_components/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/bower_components/jquery-selectric/public/themes/modern/selectric.css">
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/bower_components/slick-carousel/slick/slick-theme.scss">
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/css/bootstrap.min.css">
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/css/main.css">
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/js/vertical-timeline/css/style.css"> <!-- Resource style -->
        <link rel="stylesheet" href="<?php echo get_stylesheet_uri();?>"> 
        
        <script src="<?php echo get_stylesheet_directory_uri();?>/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
      
      
        <?php if(is_home()): ?>
      
        <!--Adobe Edge Runtime-->
<!--            <script type="text/javascript" charset="utf-8" src="http://animate.adobe.com/runtime/6.0.0/edge.6.0.0.min.js"></script>
            <style>
                .edgeLoad-Home-Food-Animation { visibility:hidden; }
            </style>
      
        <script>
           AdobeEdge.loadComposition('Home-Food-Animation', 'Food-Animation', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0px",
            maxW: "undefined",
            width: "550px",
            height: "400px"
        }, {"dom":{}}, {"dom":{}});
        </script>-->
      
        <!--Adobe Edge Runtime End-->
      
        <?php endif; ?>
      
    </head>
    
    <?php 
    
      $trigger = '';
      
      if(is_home()):
        $trigger = '#trigger-wrapper-home';
      elseif(is_page('Food')):
        $trigger = '#trigger-wrapper-food';
      endif;
  
    ?>
  
    <body data-spy="scroll" data-target="<?php echo $trigger ?>">
      
      <?php 
      
        if(is_home()):
      
          get_template_part('partials/triggers-home');
      
        elseif(is_page('Food')):
      
          get_template_part('partials/triggers-food');
        
        endif; 
      
      ?>
      
      <?php get_template_part('navbar'); ?>
      <?php get_template_part('navbar-mobile'); ?>