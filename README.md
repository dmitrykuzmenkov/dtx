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
- %I - The hour as a decimal number using a 12-hour clock (range 01 to 12).
- %M - The minute as a decimal number (range 00 to 59).
- %S - The second as a decimal number (range 00 to 60). (The range is up to 60 to allow for occasional leap seconds.)

- %p - Either "AM" or "PM" according to the given time value, or the corresponding strings for the current locale. Noon is treated as "PM" and midnight as "AM".
- %P - Like %p but in lowercase: "am" or "pm" or a corresponding string for the current locale. (GNU)

- %D - Equivalent to %m/%d/%y. (Yecch-for Americans only. Americans should note that in other countries %d/%m/%y is rather common. This means that in international context this format is ambiguous and should not be used.) (SU)
- %F - Equivalent to %Y-%m-%d (the ISO 8601 date format). (C99)
- %R - The time in 24-hour notation (%H:%M). (SU) For a version including the seconds, see %T below.
- %r - The time in a.m. or p.m. notation. In the POSIX locale this is equivalent to %I:%M:%S %p. (SU)
- %T - The time in 24-hour notation (%H:%M:%S). (SU)

### toDate()
Return Date object of current date in object.

### add(count, type)
Add *count* of *type* (second, minute, houre, day, week, month, year) to current date and returns this.

### subtruct(count, type)
Alias for add method with negative count value.
