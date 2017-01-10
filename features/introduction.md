# Introduction

Features are a way to extend theme functionality on a global level. They are used for adding hooks and filters that affect the whole project, or multiple components. For example:

- Setting up custom post types.
- Loading jQuery from a CDN.
- Adding SVG mime type support to the Wordpress media gallery.

# Using Features

All features are located in the `lib/Features` folder, and require a `functions.php` and a `README.md` file.

There are two steps to use a feature.

1. Add the feature to the `lib/Features` folder.
2. Open `lib/Init.php`, and enable the feature using `add_theme_support` in the `initTheme` function. The feature name must be passed in Kebap case, with the 'flynt' prefix. For example:
  ```php
  function initTheme() {
    // enable "Admin Notices" feature
    add_theme_support('flynt-admin-notices');
  }
  ```
3. Flynt will now initialize `Lib/Features/AdminNotices/functions.php` on the `after_setup_theme` hook. [This hook is called during each page load, after the theme is initialized.](https://codex.wordpress.org/Plugin_API/Action_Reference/after_setup_theme)

---

**TODO:**
- Should each feature have a page in here? Or just leave it in the readme for each feature? Ideal would be to somehow load the feature/readmes into here.
- Will the features be available somewhere, similar to NPM?
