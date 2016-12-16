# ComponentManager (class)

Singleton used internally to manage registered components.

## getInstance (static)
Get the singleton of the ComponentManager.
```php
public static function getInstance()
```

## registerComponent
Register a component for later use.
```php
public function registerComponent(string $componentName, string $componentPath = null)
```

## getComponentFilePath
Get the path to a component specific file.
```php
public function getComponentFilePath(string $componentName, string $fileName = 'index.php')
```

## getAll
Get all registered Components.
```php
public function getAll()
```

## removeAll
Remove all registered Components.
```php
public function removeAll()
```
