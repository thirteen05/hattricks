<section id="section-food-jumbo">
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <img width="150" src="<?php echo get_stylesheet_directory_uri();?>/img/Hattricks-Shamrock-Icon.svg"/>
          <h1 class="font-bevan font-white text-shadow no-margin">Our Food</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ul>
            <li>
              <h3 class="font-bevan font-white text-shadow">Pre-Game</h3>
            </li>
            <li>
              <h3 class="font-bevan font-white text-shadow">First Period</h3>
            </li>
            <li>
              <h3 class="font-bevan font-white text-shadow">Second Period</h3>
            </li>
            <li>
              <h3 class="font-bevan font-white text-shadow">Third Period</h3>
            </li>
          </ul>
          <button id="food-button">Click Here</button>
        </div>
        <div class="col-md-8 no-padding" id="menu-wrapper">
          
          <?php get_template_part('sections/food/section-food-pregame'); ?>
          
        </div>
      </div>
    </div>
  </div>
</section>