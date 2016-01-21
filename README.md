DTx
======
Lightweight date time manipulating library.

## Installation

Use npm package manager to install the DTX
```bash
npm install dtx
```

## Usage

Follow example

```javascript
var dt = require('dtx');
var now = dt().format('%Y-%m-%d'); // Current date, for example, 2015-01-01
var next_week = dt().add(1, 'week').format('%F'); // Same format as above
```

## Methods

### format(pattern)
Return formated string using pattern
- **%Y** - The year as a decimal number including the century.
- **%y** - The year as a decimal number without a century (range 00 to 99).
- **%m** - The month as a decimal number (range 01 to 12).
- **%d** - The day of the month as a decimal number (range 01 to 31).
- **%H** - The hour as a decimal number using a 24-hour clock (range 00 to 23).
- **%I** - The hour as a decimal number using a 12-hour clock (range 01 to 12).
- **%M** - The minute as a decimal number (range 00 to 59).
- **%S** - The second as a decimal number (range 00 to 60). (The range is up to 60 to allow for occasional leap seconds.)

- **%s** - The number of seconds since the Epoch, 1970-01-01 00:00:00 +0000 (UTC). (TZ)
- **%u** - The day of the week as a decimal, range 1 to 7, Monday being 1. See also **%w**. (SU)
- **%w** - The day of the week as a decimal, range 0 to 6, Sunday being 0. See also **%u**.

- **%p** - Either "AM" or "PM" according to the given time value, or the corresponding strings for the current locale. Noon is treated as "PM" and midnight as "AM".
- **%P** - Like **%p** but in lowercase: "am" or "pm" or a corresponding string for the current locale. (GNU)

- **%D** - Equivalent to **%m/%d/%y**. (Yecch-for Americans only. Americans should note that in other countries **%d/%m/%y** is rather common. This means that in international context this format is ambiguous and should not be used.) (SU)
- **%F** - Equivalent to **%Y-%m-%d** (the ISO 8601 date format). (C99)
- **%R** - The time in 24-hour notation (**%H:%M**). (SU) For a version including the seconds, see **%T** below.
- **%r** - The time in a.m. or p.m. notation. In the POSIX locale this is equivalent to **%I:%M:%S %p**. (SU)
- **%T** - The time in 24-hour notation (**%H:%M:%S**). (SU)

- **%z** - The +hhmm or -hhmm numeric timezone (that is, the hour and minute offset from UTC). (SU)

### toDate()
Return Date object of current date in object.

### add(count, type)
Add *count* of *type* (second, minute, houre, day, week, month, year) to current date and returns this.

### subtract(count, type)
Alias for add method with negative count value.

### diff(dtx, type)
Get diff between two dtx objects. *Type* can be one of second, minute, houre, day, week, month, year.

For example:
```javascript
var dtx = require('dtx');

var dt1 = dtx('2015-10-10');
var dt2 = dtx('2015-01-01');

console.log(dt2.diff(dt1, 'days'));
```
