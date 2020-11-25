<?php

add_action('init', function () {

  add_theme_support("post-thumbnails");

  // メニューをサポートする。
  register_nav_menus([
    'global_nav' => 'グローバルナビゲーション',
  ]);

  register_post_type('item', [
    'label' => 'カスタム投稿',
    'public' => true,
    'menu_position' => 5,
    'menu_icon' => 'dashicons-store',
    'supports' => ['thumbnail', 'title', 'editor', 'custom-fields'],
    'has_archive' => true,
    'show_in_rest' => true
  ]);

  register_taxonomy('genre', 'item', [
    'label' => '商品ジャンル',
    'hierarchical' => true,
    'show_in_rest' => true
  ]);
});
