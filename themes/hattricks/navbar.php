<div>
  <nav class="navbar navbar-default navbar-fixed-top hidden-xs" id="hattricks-navbar">
    <div class="container">
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <?php
            wp_nav_menu( array(
                'menu'              => 'primary',
                'theme_location'    => 'primary',
                'depth'             => 2,
                'container'         => false,
                'menu_class'        => 'nav navbar-nav',
                'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
                'walker'            => new wp_bootstrap_navwalker())
            );
        ?>
      <ul class="nav navbar-nav navbar-right">
        <li>
          
          <a class="cart-contents" href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>"><i class="fa fa-shopping-cart"></i> <?php echo sprintf (_n( '%d item', '%d items', WC()->cart->cart_contents_count ), WC()->cart->cart_contents_count ); ?></a>
        </li>
      </ul>
      </div> <!--/.navbar-collapse -->
    </div><!--/.container-fluid -->
  </nav>
</div>