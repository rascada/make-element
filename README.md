# make-element
Fast way to create html element with dom

```javascript
const makeEl = require('make-el');

let h1 = makeEl('h1', {
  id: 'hello',
  innerText: 'hello make-el',
  appendTo: document.body,
});
```
