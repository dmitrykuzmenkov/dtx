DTx
======
Lightweight date time manipulating library.

## Installation

Use npm package manager to install the DOM delegator
```bash
npm install dtx
```

## Usage

Follow example

```javascript
var dt = require('dtx');
console.log(dt().format('YYYY-MM-DD')); // Prints current date in format
console.log(dt().add(1, 'week').format('YYYY-MM-DD')); // Prints next week in prefered format
```

## Methods

### format(pattern)
Return formated string with pattern
- YYYY - full year
- YY - 2-digit year
- MM - 2-digit month
- DD - 2-digit day
- hh - 2-digit hour
- mm - 2-digit minute
- ss - 2-digit seconds

### toDate()
Return Date object of current date in object.

### add(count, type)
Add *count* of *type* (second, minute, houre, day, week, month, year) to current date and returns this.

### subtruct(count, type)
Alias for add method with negative count value.
