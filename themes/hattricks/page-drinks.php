<?php get_header(); ?>

<div id="drinks-wrapper" data-stellar-background-ratio="0.1">
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <img width="150" src="<?php echo get_stylesheet_directory_uri();?>/img/Hattricks-Shamrock-Icon.svg"/>
          <h1 class="font-bevan font-white text-shadow no-margin">Our Drinks</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    
    <?php get_template_part('partials/shamrock-divider'); ?>
    <?php get_template_part('sections/drinks/section-drinks-wine-red'); ?>
  </div>
</div>


<?php get_footer(); ?>