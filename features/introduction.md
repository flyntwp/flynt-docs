# Features

With Wordpress, it is easy to create one large functions.php file, crammed full of all the custom logic your theme may need. This can get messy. In Flynt, we split each piece of functionality into smaller, self-contained **feature** bundles.

In most cases, features add global hooks and filters that affect the project on a global level. With this in mind, each feature is built with "drag and drop" reusability in mind.

Flynt comes with a core set of ready to go features:

<div class="alert alert-list" data-markdown>
- **[Acf](https://github.com/bleech/wp-starter-theme/tree/master/Features/Acf)**<br>
Load & configure ACF fields and field groups.

- **[AdminComponentPreview](https://github.com/bleech/wp-starter-theme/tree/master/Features/AdminComponentPreview)**<br>
Show screenshots of components in the WP back-end, and on the WP admin bar.

- **[AdminNotices](https://github.com/bleech/wp-starter-theme/tree/master/Features/AdminNotices)**<br>
A wrapper around the WordPress admin notice functionality.

- **[CleanHead](https://github.com/bleech/wp-starter-theme/tree/master/Features/CleanHead)**<br>
Clean-up the WP head markup.

- **[CleanRss](https://github.com/bleech/wp-starter-theme/tree/master/Features/CleanRss)**<br>
Improve WP RSS feeds.

- **[Components](https://github.com/bleech/wp-starter-theme/tree/master/Features/Components)**<br>
Register & configure Flynt Components.

- **[GoogleAnalytics](https://github.com/bleech/wp-starter-theme/blob/master/Features/GoogleAnalytics/GoogleAnalytics.php)**<br>
Add the Google Analytics tracking script.

- **[Jquery](https://github.com/bleech/wp-starter-theme/tree/master/Features/Jquery)**<br>
Load jQuery from a CDN.

- **[MimeTypes](https://github.com/bleech/wp-starter-theme/tree/master/Features/MimeTypes)**<br>
Add SVG support to the media gallery.

- **[Navigation](https://github.com/bleech/wp-starter-theme/tree/master/Features/Navigation)**<br>
Register navigation menus.

- **[PasswordForm](https://github.com/bleech/wp-starter-theme/tree/master/Features/PasswordForm)**<br>
Add the WP password form with twig templates.

- **[RemoveEditor](https://github.com/bleech/wp-starter-theme/tree/master/Features/RemoveEditor)**<br>
Remove `the_content()` editor.

- **[Templates](https://github.com/bleech/wp-starter-theme/tree/master/Features/Templates)**<br>
Set the config path for page templates.

- **[TimberLoader](https://github.com/bleech/wp-starter-theme/tree/master/Features/TimberLoader)**<br>
Enable rendering with Timber/Twig.

- **[TinyMce](https://github.com/bleech/wp-starter-theme/tree/master/Features/TinyMce)**<br>
Clean-up the WP content editor toolbar.

- **[CustomPostTypes](../wordpress/custom-post-types.md)**<br>
Create custom post types with JSON config files.

- **[CustomTaxonomies](#add-link)**<br>
Create custom taxonomies with JSON config files.
</div>

# Adding Features

All features are located in the `Features` folder and require a `functions.php` file.

There are only two steps to add a feature:

1. Add the feature to the `Features` folder.
2. Open `lib\Init.php`, and enable the feature using `add_theme_support` in the `initTheme` function. For example:
  ```php
  function initTheme() {
    // enable "Timber Loader" feature
    add_theme_support('flynt-timber-loader');
  }
  ```

That's it. In this example, Flynt will now initialize `Features\AdminNotices\functions.php` on the `after_setup_theme` hook. [This hook is called during each page load, after the theme is initialized.](https://codex.wordpress.org/Plugin_API/Action_Reference/after_setup_theme)

It is also possible to pass parameters to features in the `add_theme_support` function. For example:

```php
add_theme_support('flynt-acf', [
  'FieldGroupComposer',
  'OptionPages'
]);
```

<!-- TODO: Add example for accessing these parameters within the feature. -->

## Hooking into Features

You may wish to run additional logic after a feature is registered. This is possible with the `Flynt\registerFeature` hook.

After each feature is registered, the `Flynt\registerFeature` action is fired:

```php
<?php
add_action('registerFeature', function ($feature, $options, $dir) {
  // Do something after each feature is registered.
}, 10, 3);
```
It is also possible to target a specific feature:

```php
<?php
add_action('registerFeature?name=CustomPostTypes', function ($feature, $options, $dir) {
  // Do something when the custom post type feature is registered.
}, 10, 3);
```

## Creating Features

### Add `functions.php`

This is the only file a feature requires. The only additional requirement is to add the `Flynt` namespace:

```php
<?php
namespace Flynt\Features\ExampleFeature;

// Add feature functionality here!
```

### Add a `README.md`

Features should be easy to reuse and easy to understand. We strongly recommend adding a readme file for each feature you create. Include a short description of what the feature can do, and how to configure any options available.

<!-- TODO: Add/link example README template. -->

### Add Styles, Scripts, and Templates
Features support the addition of styles, scripts, and templates. All file types supported within components (Stylus, CSS, JS, Twig, and PHP files) will also be compiled and built in exactly the same way for features.

### Add ACF Fields
Sometimes, a feature may need to add ACF fields to allow the user to configure the options from the back-end. Again, this works exactly as with components. Add `fields.json` to the feature, and then configure the ACF fields:

```
{
  "globalOptions": [
    {
      "name": "googleMapsApiKey",
      "label": "Google Maps Api Key",
      "type": "text",
      "maxlength": 100,
      "required": 1
    }
  ]
}
```

<!-- TODO: Add link to snippets. -->

<a href="#add-link" class="btn btn-primary">You can read more on authoring ACF Fields here.</a>
