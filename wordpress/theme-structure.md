# Theme Structure

```
flynt-theme/                     # → Root of the theme
├── Components/                  # → All components live here
│   ├── mainLayout/              # → Base layout component
│   ├── mainTemplate/            # → Base template component
├── Features/                    # → All features live here
├── config/                      # → Autoloading for `src/` files
├── gulpfile.js/                 # → Gulp tasks and setup
│   ├── tasks/                   # → Individual gulp-tasks, e.g. webpack, stylus setup
│   ├── config.js                # → Gulp config
│   ├── index.js                 # → Load gulp tasks with config
│   ├── webpack.config.js        # → Webpack config
├── lib/                         # → Hold utils and setup features
│   ├── Utils/                   # → Small utility functions
│   ├── Bootstrap.php            # → 
│   ├── Init.php                 # → Theme setup; init features
├── templates/                   # → Theme templates
├── dist/                        # → Built theme files (never edit)
├── functions.php                # → Run Flynt Bootstrap & init (never edit)
├── index.php                    # → Never manually edit
├── node_modules/                # → Node.js packages (never edit)
├── package.json                 # → Node.js dependencies and scripts
├── screenshot.png               # → Theme screenshot for WP admin
├── composer.json                # → Composer dependencies
├── composer.lock                # → Composer lock file (never edit)
├── bower.json                   # →
├── yarn.lock                    # → Yarn lock file (never edit)
├── .env                         # →
├── .flynt.json                  # →
├── favicon.png                  # →
├── apple-touch-icon-180x180.png # →
```
