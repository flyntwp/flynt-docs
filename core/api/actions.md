# Actions

## Flynt/registerComponent
Exectuted when any or a specific component is registered. Can be used to load additional files.

Component specific action: `Flynt/registerComponent?name={$config['name']}`

Arguments for callable:
<dl>
  <dt>$componentPath</dt>
  <dd>the path of the component</dd>

  <dt>$componentName*</dt>
  <dd>the name of the component (*not available in component specific action)</dd>
</dl>

Defaults:
```php
add_action('Flynt/registerComponent', ['Flynt\Defaults', 'checkComponentFolder']);
add_action('Flynt/registerComponent', ['Flynt\Defaults', 'loadFunctionsFile']);
```
```php
namespace Flynt;
class Defaults {
  public static function checkComponentFolder($componentPath) {
    if (!is_dir($componentPath)) {
      trigger_error("Register Component: Folder {$componentPath} not found!", E_USER_WARNING);
    }
  }
  public static function loadFunctionsFile($componentPath) {
    $filePath = $componentPath . '/functions.php';
    if (file_exists($filePath)) {
      require_once $filePath;
    }
  }
}
```
