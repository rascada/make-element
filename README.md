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
### example

```javascript
// make-el

['hello ', 'make', '-', 'el']
  .map(word => word.toUpperCase())
  .forEach(word => makeEl('span', {
    innerText: word,
    id: `word_is_${word}`,
    appendTo: document.body,
  }));

// native

['hello ', 'make', '-', 'el']
  .map(word => word.toUpperCase())
  .forEach(word => {
    let span = document.createElement('span');

    span.innerText = word;
    span.id = `word_is_${word}`;
    document.body.appendChild(span);    
  });
```
