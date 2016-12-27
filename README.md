# core-js-plus

Return the value at given object path.

## Usage

```js

var test = {
  b: 'ccc',
  d: {
    e: 'fff',
    g: [
      {k: {a: 1}}
    ],
    'test': [
      'grape',
      'orange',
      'carrot'
    ]
  }
}

test.get('b')
// => 'ccc'

test.get('g.0.k')
// => {a: 1}

test.get('test.2')
// => 'carrot'

```
