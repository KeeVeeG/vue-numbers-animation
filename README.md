## Installation
```sh
$ npm install --save vue-numbers-animation
```

## Usage
Just import:

```javascript
import numbersAnimation from 'vue-numbers-animation'
Vue.directive("numbers-animation", numbersAnimation)
```

And use:
```javascript
// default animation is linear
// default time is 1000
<div v-numbers-animation="count"></div> 
```
![image](https://user-images.githubusercontent.com/35378637/126076858-2c146a5d-4511-4cbb-b9d9-7680de31d98d.gif)

or
```javascript
<div v-numbers-animation:easeOutElastic="{value: count, time: 2500}"></div>
```
![image](https://user-images.githubusercontent.com/35378637/126076896-139e5454-28cf-477f-96bb-da36bae4aad3.gif)


## Animations
![image](https://user-images.githubusercontent.com/35378637/126076223-8a49f283-4912-4eef-831e-7b7563043d7b.jpg)
