# DateFormat.js [![Build Status](https://travis-ci.org/torufuruya/DateFormat.js.png?branch=master)](https://travis-ci.org/torufuruya/DateFormat.js)

Extension of the Javascript Date object with a minimum function for shaping the date.

## Installation

download

```sh
$ git clone https://github.com/torufuruya/DateFormat.js.git
```

OR you can also download by using bower

```sh
$ bower install dateformatjs
```

and read in your HTML

```html
<script type="text/javascript" src="dateformat.js"></script>
```

then you can use Date.prototype.format function

```js
var d = new Date();
d.format('Y-m-d H:i:s');  //=> e.g. "2014-01-14 00:00:00"
```

## Usage

### Supported format type

- __Y:__ A full numeric representation of a year, 4 digits.
- __m:__ Numeric representation of a month, with leading zeros.
- __n:__ Numeric representation of a month, without leading zeros.
- __d:__ Day of the month, 2 digits with leading zeros.
- __j:__ Day of the month without leading zeros.
- __H:__ 24-hour format of an hour with leading zeros.
- __h:__ 12-hour format of an hour with leading zeros.
- __i:__ Minutes with leading zeros.
- __s:__ Seconds, with leading zeros.

### Example

```js
var d = new Date(1388599445000);

d.format('Y-m-d H:i:s')  //=> "2014-01-02 03:04:05"

d.format('n/j h:i')  //=> "1/2 3:04"
```

## Test

test with karma, mocha, and chai

```sh
$ npm install -g karma
$ npm install
$ karma start
```

## License

The MIT License (MIT)

Copyright (c) 2014 torufuruya