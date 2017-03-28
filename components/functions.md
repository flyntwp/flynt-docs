# Functions.php

- TODO: Intro / What the file is for

## Enqueueing Assets
- TODO: registering dependencies

## Using Filters
Most of the time, the two main filters you will need inside `functions.php` are `Flynt/addComponentData` and `Flynt/dynamicSubcomponents`.

### `Flynt/addComponentData`
This filter can be used to add to or modify your component's data before it is passed to the view and rendered. This can be used, for example, to fetch and pass posts from a custom post type:

```php
<?php
add_filter('Flynt/addComponentData?name=ListLatestProducts', function ($data)
{
  $data['products'] = Timber::get_posts([
      'post_type' => 'product',
      'posts_per_page' => '5'
  ]);
  return $data;
});
```

This data is then available in the view template for `ListLatestProducts`.

```twig
<div is="flynt-list-latest-products" class="flyntComponent">
  <ul class="productList">
    {% for product in products  %}
      <li class="productList-item">
        <h3>{{ product.title }}</h3>
      </li>
    {% endfor %}
  </ul>
</div>
```

### `Flynt/dynamicSubcomponents`
With this filter, it is possible to dynamically add additional areas and components within your parent component. To learn how to use this in detail, [go to the section on dynamicSubcomponents](/dynamic-subcomponents.md).

## Using Utils and Features
