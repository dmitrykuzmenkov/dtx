var month_diff = function (date1, date2) {
  return ((date2.getFullYear() - date1.getFullYear()) * 12) + (date2.getMonth() - date1.getMonth());
};

module.exports = function (input) {
  var date;
  if (typeof(input) === 'string') {
    date = new Date(input);
  } else if (input && input instanceof Date) {
    date = input;
  } else {
    date = new Date();
  }

  return {
    subtract: function (count, type) {
      return this.add(-count, type);
    },
    add: function (count, type) {
      switch (type) {
        case 'second':
        case 'seconds':
        case 'sec':
        case 'secs':
          date.setTime(date.getTime() + count * 1e3);
          break;

        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
          date.setTime(date.getTime() + count * 6e4);
          break;

        case 'hour':
        case 'hours':
          date.setTime(date.getTime() + count * 36e5);
          break;

        case 'day':
        case 'days':
          date.setDate(date.getDate() + count);
          break;

        case 'month':
        case 'months':
          date.setMonth(date.getMonth() + count);
          break;

        case 'year':
        case 'years':
          date.setFullYear(date.getFullYear() + count);
          break;

        case 'week':
        case 'weeks':
          date.setDate(date.getDate() + count * 7);
          break;
      }
      return this;
    },
    diff: function (dtx, type) {
      var diff_ms = (date - dtx.toDate());
      var diff = 0;

      switch (type) {
        case 'second':
        case 'seconds':
        case 'sec':
        case 'secs':
          diff = diff_ms / 1e3;
          break;

        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
          diff = diff_ms / 6e4;
          break;

        case 'hour':
        case 'hours':
          diff = diff_ms / 36e5;
          break;

        case 'day':
        case 'days':
          diff = diff_ms / 864e5;
          break;

        case 'month':
        case 'months':
          diff = month_diff(dtx.toDate(), date);
          break;

        case 'year':
        case 'years':
          diff = month_diff(dtx.toDate(), date) / 12;
          break;

        case 'week':
        case 'weeks':
          diff = diff_ms / 6048e5;
          break;
      }

      return Math.floor(diff);
    },
    toDate: function () {
      return date;
    },
    format: function (format) {
      var ampm = date.getHours() < 12 ? 'AM' : 'PM';
      var tz_offsec = date.getTimezoneOffset();
      var tz_offset = (tz_offsec > 0 ? '+' : '-') +
        ('0' + (Math.abs(tz_offsec) / 60)).slice(-2) +
        ('0' + (Math.abs(tz_offsec) % 60)).slice(-2)
      ;
      return format
        .replace('%F', '%Y-%m-%d')
        .replace('%D', '%m/%d/%y')
        .replace('%R', '%H:%M')
        .replace('%r', '%I:%M:%S %p')
        .replace('%T', '%H:%M:%S')
        .replace('%Y', date.getFullYear())
        .replace('%y', date.getYear())
        .replace('%m', ('0' + (date.getMonth() + 1)).slice(-2))
        .replace('%d', ('0' + date.getDate()).slice(-2))
        .replace('%H', ('0' + date.getHours()).slice(-2))
        .replace('%I', ('0' + (date.getHours() % 12 || 12)).slice(-2))
        .replace('%M', ('0' + date.getMinutes()).slice(-2))
        .replace('%S', ('0' + date.getSeconds()).slice(-2))
        .replace('%u', date.getDay() + 1)
        .replace('%w', date.getDay())
        .replace('%z', tz_offset)
        .replace('%s', date.getTime())
        .replace('%p', ampm)
        .replace('%P', ampm.toUpperCase())
      ;
    }
  };
};
