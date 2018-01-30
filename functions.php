function my_awesome_func() {
  $args = array(
    'post_type'   => 'page',
    'orderby'     => 'meta_value_num',
    'meta_key'    => 'section_order',
    'order'       => 'DESC',
    'numberposts' => 10
  );

// run query
$posts = get_posts($args);

  foreach ($posts as $key => $post) {
    $posts[$key]->acf = get_fields($post->ID);
  }
  
  // return results
    return new WP_REST_Response($posts, 200);
  }

add_action( 'rest_api_init', function () {
    register_rest_route( 'myplugin/v1', '/order', array(
      'methods' => 'GET',
      'callback' => 'my_awesome_func',
    ));
});
