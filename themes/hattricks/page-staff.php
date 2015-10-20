<?php get_header(); ?>


<?php

$args = array(
	'posts_per_page'   => -1,
	'offset'           => 0,
	'category'         => '',
	'category_name'    => '',
	'orderby'          => 'date',
	'order'            => 'DESC',
	'include'          => '',
	'exclude'          => '',
	'meta_key'         => '',
	'meta_value'       => '',
	'post_type'        => 'staff',
	'post_mime_type'   => '',
	'post_parent'      => '',
	'author'	   => '',
	'post_status'      => 'publish',
	'suppress_filters' => true 
);

$staff_array = get_posts( $args );

?>

<div id="staff-wrapper" data-stellar-background-ratio="0.1">

  <?php get_template_part('sections/staff/section-staff-jumbo'); ?>
  
  <div class="container">
    <div class="row">
    
    <?php foreach($staff_array as $staff): ?>
    
      <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $staff->ID ), 'single-post-thumbnail' ); ?>
        <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-3 col-md-offset-0 staff-member-pic-wrapper text-center" style="background-image: url(<?php echo $image[0]; ?>)">
          <div class="staff-member-overlay text-left">
            <h3 class=" font-bevan font-yellow"><?php echo $staff->post_title; ?></h3>
            <p class="font-white"><?php echo wpautop($staff->post_content); ?></p>
          </div>
        </div>
      
      <?php //var_dump($staff); ?>
      
    <?php endforeach; ?>
      
    </div>
  </div>
</div>


<?php get_footer(); ?>
