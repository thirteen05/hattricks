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

add_action('woocommerce_before_shop_loop_item','woocommerce_before_shop_loop_item_ht');

function woocommerce_before_shop_loop_item_ht(){
  echo "<div class='col-md-3'>";
}

add_action('woocommerce_after_shop_loop_item','woocommerce_after_shop_loop_item_ht');

function woocommerce_after_shop_loop_item_ht(){
  echo "</div>";
}

add_action('woocommerce_before_cart','woocommerce_before_cart_ht');

function woocommerce_before_cart_ht(){
  get_template_part('sections/woo/section-woo-shop-jumbo');
  echo "<div class='container'>";
}

add_action('woocommerce_before_checkout_form','woocommerce_before_checkout_form_ht');

function woocommerce_before_checkout_form_ht(){
  get_template_part('sections/woo/section-woo-shop-jumbo');
  echo "<div class='container'>";
}

add_filter('woocommerce_checkout_fields', 'bootstrap_checkout_fields_ht' );
function bootstrap_checkout_fields_ht($fields) {
    foreach ($fields as &$fieldset) {
        foreach ($fieldset as &$field) {
            // if you want to add the form-group class around the label and the input
            $field['class'][] = 'form-group'; 

            // add form-control to the actual input
            $field['input_class'][] = 'form-control form-control-ht';
        }
    }
    return $fields;
}

?>