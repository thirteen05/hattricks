<nav class="hidden-md hidden-lg">
  <div id="mobile-nav-wrapper">
    <div id="hamburger">
      <i class="fa fa-bars fa-2x font-white text-shadow"></i>
      <!--<i class="fa fa-times fa-2x font-white text-shadow"></i>-->
    </div>
    
    <?php

    $args = array(
        'theme_location'  => '',
        'menu'            => 'Mobile Menu',
        'container'       => 'div',
        'container_class' => '',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => 'mobile-nav-menu',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'depth'           => 0,
        'walker'          => ''
    );

    wp_nav_menu( $args );

    ?>
    
  </div>
</nav>