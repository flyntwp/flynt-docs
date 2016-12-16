# Dynamic Subcomponents

- TODO: Read over and refactor / add to this file as appropriate.
- TODO: Test all of the code examples in this file.
- TODO: Test priority of filters < 999.

## Example Usage of the dynamicSubcomponents filter

```php
<?php
add_filter("Flynt/dynamicSubcomponents?name=ParentComponent", function($areas, $data, $parentData) {
  $areas['area51'] = [
    [
      'name' => 'ChildComponentName',
      'dataFilter' => 'Flynt/DataFilters/ChildComponentName/foo',
      'customData' => [
        'test1' => 1
      ]
    ]
  ];
  return $areas;
}, 10, 3);
```

### `Flynt/configPath`
Use this filter to set the path to your desired config file. Accepts up to two arguments: `$filePath` and `$fileName` including ending. Defaults to `{theme-folder}/config/{$fileName}`

Example:
```php
<?php
add_filter('Flynt/configPath', function($filePath, $fileName) {
  return get_template_directory() . '/someConfigFolder/' . $fileName;
}, 10, 2);
```

The original filter is overwritten as long as the filter priority is < 999.

### `Flynt/configFileLoader`
Use this filter to define your own custom config loading mechanism. Accepts up to three arguments: `$configArray`, `$configFileName`, `$configFilePath`. By default it runs a `json_decode` on the expected json file and returns the resulting array.

Example for loading `.yaml` files instead:
```php
<?php
add_filter('Flynt/configFileLoader', function ($configArray, $configFileName, $configFilePath) {
  return yaml_parse_file($configFilePath);
}, 10, 3);
```

The original filter is overwritten as long as the filter priority is < 999.

---

**[See a practical application of this in our guide to using the Flexible Content field type](flexible-content.md).**
