<?php

add_action( 'after_setup_theme', 'woocommerce_support' );

function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

add_action('woocommerce_before_main_content','woocommerce_before_main_content_ht');

function woocommerce_before_main_content_ht(){
  
  get_template_part('sections/woo/section-woo-shop-jumbo');
  echo "<div class='container-fluid' id='woo-shop-wrapper'>";
  echo "<div class='container'>";
  echo "<div class='row'>";
  
}

add_action('woocommerce_after_main_content','woocommerce_after_main_content_ht');

function woocommerce_after_main_content_ht(){
  
  echo "</div>";
  echo "</div>";
  echo "</div>";
}

// Register Custom Navigation Walker
require_once('wp_bootstrap_navwalker.php');

register_nav_menus( array(
    'primary' => __( 'Primary Menu', 'THEMENAME' ),
) );

?>