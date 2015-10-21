<?php get_header(); ?>

<div id="food-wrapper">
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <img width="150" src="<?php echo get_stylesheet_directory_uri();?>/img/Hattricks-Shamrock-Icon.svg"/>
          <h1 class="font-bevan font-white text-shadow no-margin">Our Food</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container">

    
    <?php get_template_part('sections/food/section-food-pregame-images'); ?>
    <?php get_template_part('partials/shamrock-divider'); ?>
    <?php get_template_part('sections/food/section-food-pregame'); ?>
    <?php get_template_part('sections/food/section-food-first-images'); ?>
    <?php get_template_part('partials/shamrock-divider'); ?>
    <?php get_template_part('sections/food/section-food-first'); ?>
    <?php get_template_part('sections/food/section-food-second-images'); ?>
    <?php get_template_part('partials/shamrock-divider'); ?>
    <?php get_template_part('sections/food/section-food-second'); ?>
    <?php get_template_part('partials/shamrock-divider'); ?>
    <?php get_template_part('sections/food/section-food-third'); ?>
    <?php get_template_part('partials/shamrock-divider'); ?>
    <?php get_template_part('sections/food/section-food-assists'); ?>
  </div>
</div>


<?php get_footer(); ?>