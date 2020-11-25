<!DOCTYPE html>
<html <?php w(); ?>>

<head>
  <?php get_header(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <!-- header -->
  <?php get_template_part("includes/header"); ?>
  <!-- // header -->

  <main></main>

  <!-- footer -->
  <?php get_template_part('includes/footer') ?>
  <!-- //footer -->

  <?php get_footer(); ?>
  <?php wp_footer(); ?>
</body>

</html>
