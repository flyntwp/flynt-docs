# View Templates

View templates are written in [Twig](http://twig.sensiolabs.org/), and support everything provided additionally by [Timber](http://timber.github.io/timber/).

The template file for a component must be named `index.twig`.

All data passed to a component is readily available in the view. This data includes all fields configured in the [`field.json` file](fields/README.md) of the component, plus any additional data passed with the [`addComponentData` filter](functions.md#flynt-addcomponentdata).

For example, take a component named `exampleComponent`.

In `fields.json`:

```json
{
  "layout": {
    "name": "exampleComponent",
    "label": "Example Component",
    "sub_fields": [
      {
        "name": "exampleField",
        "label": "Example Field",
        "type": "text"
      }
    ]
  }
}
```

In `functions.php`:

```php
<?php

namespace Flynt\Components\ExampleComponent;

add_filter('Flynt/addComponentData?name=ExampleComponent', function ($data)
{
  $data['helloWorld'] = 'Hello World!';
  return $data;
});
```

This data is now available in `index.twig`:

```twig
<div is='flynt-example-component' class='flyntComponent'>
  <h1>{{ helloWorld }}</h1>
  <p>{{ exampleField }}</p>
</div>
```

If Twig is not your preferred template language, it is possible to customize this with Flynt Core. [You can read how to change the template language here.](../core/customization/changing-template-language.md)

<!-- - TODO: Talk about partials -->
