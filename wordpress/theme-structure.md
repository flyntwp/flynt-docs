# Theme Structure

```
flynt-theme/                     # → Root of the theme
├── config/                      # → WP/ACF Configuration
│   ├── customPostTypes/         # → Configure custom post types
│   ├── fieldGroups/             # → Configure ACF field groups
│   ├── templates/               # → Page templates (JSON)
├── Components/                  # → All components
├── Features/                    # → All features
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
├── bower.json                   # → Bower dependencies
├── composer.json                # → Composer dependencies
├── composer.lock                # → Composer lock file (never edit)
├── functions.php                # → Set template directory and load lib/Init.php
├── index.php                    # → Never manually edit
├── package.json                 # → Node.js dependencies and scripts
├── phpcs.ruleset.xml            # → Define PHP linting rules
├── screenshot.png               # → Theme screenshot for WP admin
├── yarn.lock                    # → Yarn lock file (never edit)
├── style.css                    # → Required WordPress theme style file.
├── .gitignore                   # → Files/Folders that will not be committed to Git.
```
