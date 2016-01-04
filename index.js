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
      return format
        .replace('YYYY', date.getFullYear())
        .replace('YY', date.getYear())
        .replace('MM', ('0' + (date.getMonth() + 1)).slice(-2))
        .replace('DD', ('0' + (date.getDate() + 1)).slice(-2))
        .replace('hh', ('0' + date.getHours()))
        .replace('mm', ('0' + date.getMinutes()))
        .replace('ss', ('0' + date.getSeconds()))
      ;
    }
  };
};
