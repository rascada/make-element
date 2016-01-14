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

['heLlo ', 'mAke', '-', 'eL!']
  .map(word => word.toLowerCase())
  .forEach(word => makeEl('span', {
    innerText: word,
    id: `word_is_${word}`,
    appendTo: document.body,
  }));

// native

['heLlo ', 'mAke', '-', 'eL!']
  .map(word => word.toLowerCase())
  .forEach(word => {
    let span = document.createElement('span');

    span.innerText = word;
    span.id = `word_is_${word}`;
    document.body.appendChild(span);    
  });
```
