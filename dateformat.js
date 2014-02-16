/**
 * DateFormat.js
 *
 * Year
 *   Y: A full numeric representation of a year, 4 digits.
 * Month
 *   m: Numeric representation of a month, with leading zeros.
 *   n: Numeric representation of a month, without leading zeros.
 * Day
 *   d: Day of the month, 2 digits with leading zeros.
 *   j: Day of the month without leading zeros.
 * Hour
 *   H: 24-hour format of an hour with leading zeros.
 *   h: 12-hour format of an hour with leading zeros.
 * Minute
 *   i: Minutes with leading zeros.
 * Second
 *   s: Seconds, with leading zeros.
 */
 (function(date) {
    var format = function(format) {
        if (! format) throw new Error('format is not specified. e.g.) "Y-m-d H:i:s"');

        //prepare
        var year, month, date, hours, minutes, seconds;
        year = this.getFullYear();
        month = this.getMonth();
        date = this.getDate();
        hours = this.getHours();
        minutes = this.getMinutes();
        seconds = this.getSeconds();

        //create partials used replacement
        var pad = function(n) { return n < 10 ? '0' + n : n };
        var partials = {
            Y: year,
            n: month,
            m: pad(month),
            j: date,
            d: pad(date),
            h: hours,
            H: pad(hours),
            i: pad(minutes),
            s: pad(seconds)
        };

        //replace
        var regExps = [/Y/gi, /n/gi, /m/gi, /j/gi, /d/gi, /h/gi, /H/gi, /i/gi, /s/gi];
        regExps.forEach(function(regExp) {
            format = format.replace(regExp, function(match) {
                return partials[match];
            });
        });

        return format;
    };

    //add format function to Date.prototype
    Date.prototype.format = format;
}());
