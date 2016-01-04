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
- %Y - The year as a decimal number including the century.
- %y - The year as a decimal number without a century (range 00 to 99).
- %m - The month as a decimal number (range 01 to 12).
- %d - The day of the month as a decimal number (range 01 to 31).
- %H - The hour as a decimal number using a 24-hour clock (range 00 to 23).
- %M - The minute as a decimal number (range 00 to 59).
- %S - The second as a decimal number (range 00 to 60). (The range is up to 60 to allow for occasional leap seconds.)

- %F - Equivalent to %Y-%m-%d (the ISO 8601 date format). (C99)

### toDate()
Return Date object of current date in object.

### add(count, type)
Add *count* of *type* (second, minute, houre, day, week, month, year) to current date and returns this.

### subtruct(count, type)
Alias for add method with negative count value.
