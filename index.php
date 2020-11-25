<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <?php get_header(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <!-- header -->
  <?php get_template_part("includes/header"); ?>
  <!-- // header -->

  <main>
    <h1>元気ですか？</h1>
  </main>

  <!-- footer -->
  <?php get_template_part('includes/footer') ?>
  <!-- //footer -->

  <?php get_footer(); ?>
  <?php wp_footer(); ?>
</body>

</html>
