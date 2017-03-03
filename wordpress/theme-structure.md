# Theme Structure

```
flynt-theme/                     # → Root of the theme
├── Components/                  # → All components
├── Features/                    # → All features
├── config/                      # → WP/ACF Configuration
│   ├── customPostTypes/         # → Configure custom post types
│   ├── fieldGroups/             # → Configure ACF field groups
│   ├── templates/               # → Page templates (JSON)
├── gulpfile.js/                 # → Gulp tasks and setup
│   ├── tasks/                   # → Individual gulp-tasks, e.g. webpack, stylus
│   ├── config.js                # → Gulp config
│   ├── index.js                 # → Load gulp tasks with config
│   ├── webpack.config.js        # → Webpack config
├── lib/                         # → Hold utils and setup features
│   ├── Utils/                   # → Small utility functions
│   ├── Bootstrap.php            # → Run Flynt Bootstrap
│   ├── Init.php                 # → Setup theme, register features
├── dist/                        # → Built theme files (never edit)
├── node_modules/                # → Node.js packages (never edit)
├── templates/                   # → Page templates (PHP)
├── .env                         # → Configures dev environment
├── .flynt.json                  # → Configures Flynt
├── .stylintrc                   # → Define Stylus linting rules
├── apple-touch-icon-180x180.png # → Apple touch icon
├── bower.json                   # → Bower dependencies
├── composer.json                # → Composer dependencies
├── composer.lock                # → Composer lock file (never edit)
├── favicon.png                  # → Favicon image
├── functions.php                # → Set template directory and load lib/Init.php
├── index.php                    # → Never manually edit
├── package.json                 # → Node.js dependencies and scripts
├── phpcs.ruleset.xml            # → Define PHP linting rules
├── screenshot.png               # → Theme screenshot for WP admin
├── yarn.lock                    # → Yarn lock file (never edit)
```
