# VUE-DND2
---
A clone Vue Drag n' Drop now supported by VueJS v2

<sub>The whole concept of this plugin was made based on the already existing [Lain-dono](https://github.com/lain-dono/vue-dnd) - Now supported by v2 of VueJS</sub>
## Install
```
npm install vue-dnd2 --save
```

## Usage
```javascript
Vue.use(require('vue-dnd2'))
```
Add the drag n' drop directive to the elements that will accept this usability.
You can decide which elements will be able to be draggable or droppable or both.

#### Draggable sintax
```html
<div v-draggable.cart="{product_id: item.id, price: item.price}"></div>
```
| Param      | Value     |
|------------|-----------|
| cart       | The __Group__. You can choose a group of elements that will interact with drag n 'drop |
| product_id | The __Key__ object. A key object that will be passed to droppable element   |
| item.id    | The __Value__.  |


#### Droppable sintax
```html
<div v-droppable.cart="foo"></div>
```
```javascript
...
methods: {
  foo: function ($ev) {
    // $ev contains the draggable object
  }
}
```


| Param      | Value     |
|------------|-----------|
| cart       | The __Group__. You can choose a group of elements that will interact with drag n 'drop |
| foo | The __Function__. The function that will be called when the same group element is dropped in the droppable container |
