# Features

Flynt comes with many out of the box features.

Features add global hooks and filters that affect the project on a global level. For example, they are used to:

- [Set up custom post types.](../wordpress/custom-post-types.md)
- [Load jQuery from a CDN.](https://github.com/bleech/wp-starter-theme/tree/master/Features/Jquery)
- [Add SVG mime type support to the Wordpress media gallery.](https://github.com/bleech/wp-starter-theme/tree/master/Features/MimeTypes)

# Use Existing Features

All features are located in the `Features` folder and require a `functions.php` and a `README.md` file.

There are two steps to use a feature.

1. Add the feature to the `Features` folder.
2. Open `lib\Init.php`, and enable the feature using `add_theme_support` in the `initTheme` function. The feature name must be passed in Kebap case, with the 'flynt' prefix. For example:
  ```php
  function initTheme() {
    // enable "Admin Notices" feature
    add_theme_support('flynt-admin-notices');
  }
  ```
3. Flynt will now initialize `Features/AdminNotices/functions.php` on the `after_setup_theme` hook. [This hook is called during each page load, after the theme is initialized.](https://codex.wordpress.org/Plugin_API/Action_Reference/after_setup_theme)

## Add Styles and Scripts
- It's possible to use templates, style files, scripts, just like components.

## Add Fields
- Can add general options to features. (Mention and link to the ACF section or wherever this is discussed in more detail)


## The `Flynt\registerFeature` hook

After each feature is registered, the `Flynt\registerFeature` action is fired:

```php
<?php
add_action('registerFeature', function ($feature, $options, $dir) {
  // Do something after each feature is registered.
});
```
It is also possible to target a specific feature:

```php
<?php
add_action('registerFeature?name=CustomPostTypes', function ($feature, $options, $dir) {
  // Do something when the custom post type feature is registered.
});
```
