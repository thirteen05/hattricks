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
  
}

add_action('woocommerce_after_shop_loop_item','woocommerce_after_shop_loop_item_ht');

function woocommerce_after_shop_loop_item_ht(){
  
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

add_action( 'init', 'staff_cpt_init' );
/**
 * Register a book post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function staff_cpt_init() {
	$labels = array(
		'name'               => _x( 'Staff', 'post type general name', 'your-plugin-textdomain' ),
		'singular_name'      => _x( 'Staff Member', 'post type singular name', 'your-plugin-textdomain' ),
		'menu_name'          => _x( 'Staff', 'admin menu', 'your-plugin-textdomain' ),
		'name_admin_bar'     => _x( 'Staff Member', 'add new on admin bar', 'your-plugin-textdomain' ),
		'add_new'            => _x( 'Add New', 'staff', 'your-plugin-textdomain' ),
		'add_new_item'       => __( 'Add New Staff member', 'your-plugin-textdomain' ),
		'new_item'           => __( 'New Staff Member', 'your-plugin-textdomain' ),
		'edit_item'          => __( 'Edit Staff Member', 'your-plugin-textdomain' ),
		'view_item'          => __( 'View Staff Member', 'your-plugin-textdomain' ),
		'all_items'          => __( 'All Staff', 'your-plugin-textdomain' ),
		'search_items'       => __( 'Search Staff', 'your-plugin-textdomain' ),
		'parent_item_colon'  => __( 'Parent Staff:', 'your-plugin-textdomain' ),
		'not_found'          => __( 'No staff members found.', 'your-plugin-textdomain' ),
		'not_found_in_trash' => __( 'No staff members found in Trash.', 'your-plugin-textdomain' )
	);

	$args = array(
		'labels'             => $labels,
                'description'        => __( 'Description.', 'your-plugin-textdomain' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'staff' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
        'menu_icon'          => 'dashicons-id-alt',
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
	);

	register_post_type( 'staff', $args );
}

remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_login_form', 10 );

?>