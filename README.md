# core-js-plus

Return the value at given object path.

## Install

```bash
$ npm install core-js-plus
```

## Usage

```js
<script src="./index.js"><script>

```

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

test.get('d.g.0.k')
// => {a: 1}

test.get('d.test.2')
// => 'carrot'

// if undefined return default value

test.get('d.ddd', 'def')
// => 'def'

test.get('d.9', 'def')
// => 'def'

```
