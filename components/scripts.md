# Scripts

To add scripts to a component, create a `script.js` file within the individual component folder. This file will be automatically compiled to the `dist` folder.

In this file, you can write your scripts however you wish. Flynt does not enforce any further requirements on your scripts. However, we strongly recommend using [Custom Elements](https://github.com/webcomponents/custom-elements).

## Custom Elements

To quote the Google Primer on Custom Elements:

> With Custom Elements, web developers can create new HTML tags, beef-up existing HTML tags, or extend the components other developers have authored. The API is the foundation of web components. It brings a web standards-based way to create reusable components using nothing more than vanilla JS/HTML/CSS. The result is less code, modular code, and more reuse in our apps.

We highly recommend reading through the full [Custom Elements Primer on Google's Web Fundamentals](https://developers.google.com/web/fundamentals/getting-started/primers/customelements).

To use custom elements with sufficient cross-browser support, it is important to require the polyfill within the MainLayout component.

```php
<?php

add_action('wp_enqueue_scripts', function () {
  Component::enqueueAssets('MainLayout', [
    [
      'name' => 'document-register-element',
      'type' => 'script',
      'path' => 'vendor/document-register-element.js'
    ]
  ]);
}, 0);
```

### The `is` attribute

In the view template, the `is` attribute is used to declare a component as a custom element. This means we are able to extend native HTML elements ([read more about this here](https://developers.google.com/web/fundamentals/getting-started/primers/customelements#extendhtml)). [We are also able to use this attribute to scope our component styles.](styles.md#scope)

```twig
<div is="flynt-example-component" class="flynt-component">
  <p>This Example Component has an `is` attribute.</p>
</div>
```

### Custom Elements Template

All Flynt Base Components use the same basic template for authoring scripts:

```js
class ExampleComponent extends window.HTMLDivElement {
  constructor (self) {
    self = super(self)
    self.$ = $(self)
    self.resolveElements()
    return self
  }

  resolveElements () {
    this.$exampleBtn = $('.exampleBtn', this)
  }

  connectedCallback () {
    this.$.on('click', this.$exampleBtn, this.exampleFunction)
  }

  exampleFunction = (e) => {
    console.log('The button was clicked', e)
  }
}

window.customElements.define('flynt-example-component', ExampleComponent, {extends: 'div'})
```

## Add Dependencies

Third party dependencies must be copied to the dist folder before they can be enqueued. This is done within the script of the component, using [Webpack File Loader](https://github.com/webpack-contrib/file-loader).

At the top of the component script, a file can be imported in the following format:

```js
import `file-loader?name=vendor/${fileName.js}!${fileNameInNodeModules.js}'`
```

For example:

```js
import 'file-loader?name=vendor/slick.js!slick-carousel/slick/slick.min'
import 'file-loader?name=vendor/slick.css!csso-loader!slick-carousel/slick/slick.css'
```
