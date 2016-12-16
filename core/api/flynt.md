# Flynt (namespace)

This is the main namespace of the plugin. In your theme you should only need to call the functions contained in the namespace. The following public functions are available:

## initDefaults
```php
function initDefaults()
```
Initializes a set of defaults used for regular setups.

## registerComponent
```php
function registerComponent(string $componentName, string $componentPath = null)
```
Registers a component for later use. If no `$componentPath` is specified, the default will be taken.

```php
function registerComponents(array $components = [])
```
Registers an array of components for later use. The array can consist of component names only (as values), or with the component name as key and component path as value.

## (echo|get)HtmlFromConfig
```php
function echoHtmlFromConfig(array $config)
```
```php
function getHtmlFromConfig(array $config)
```
Return and optionally echo the HTML generated from processing a given configuration array.

## (echo|get)HtmlFromConfigFile
```php
function echoHtmlFromConfigFile(string $fileName)
```
```php
function getHtmlFromConfigFile(string $fileName)
```
Return and optionally echo the HTML generated from processing a given configuration file.
