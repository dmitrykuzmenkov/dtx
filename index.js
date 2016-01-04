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
          date.setTime(date.getTime() + count * 1000);
          break;

        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
          date.setTime(date.getTime() + count * 60000);
          break;

        case 'hour':
        case 'hours':
          date.setTime(date.getTime() + count * 3600000);
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
    toDate: function () {
      return date;
    },
    format: function (format) {
      var ampm = date.getHours() < 12 ? 'AM' : 'PM';
      return format
        .replace('%F', '%Y-%m-%d')
        .replace('%D', '%m/%d/%y')
        .replace('%R', '%H:%M')
        .replace('%r', '%I:%M:%S %p')
        .replace('%T', '%H:%M:%S')
        .replace('%Y', date.getFullYear())
        .replace('%y', date.getYear())
        .replace('%m', ('0' + (date.getMonth() + 1)).slice(-2))
        .replace('%d', ('0' + (date.getDate() + 1)).slice(-2))
        .replace('%H', ('0' + date.getHours()))
        .replace('%I', ('0' + (date.getHours() % 12 || 12)))
        .replace('%M', ('0' + date.getMinutes()))
        .replace('%S', ('0' + date.getSeconds()))
        .replace('%u', date.getDay() + 1)
        .replace('%w', date.getDay())
        .replace('%p', ampm)
        .replace('%P', ampm.toUpperCase())
      ;
    }
  };
};
