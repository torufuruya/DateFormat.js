var expect = chai.expect;

describe('format', function() {
    var d = new Date('2014/01/02 23:03:04');

    context('with "Y-m-d"', function() {
        it('should return "2014-01-02"', function() {
            expect(d.format('Y-m-d')).to.eq('2014-01-02');
        });
    });

    context('with "Y/n/j"', function() {
        it('should return "2014/1/2"', function() {
            expect(d.format('Y/n/j')).to.eq('2014/1/2');
        });
    });

    context('with "H:i:s"', function() {
        it('should return "23:03:04"', function() {
            expect(d.format('H:i:s')).to.eq('23:03:04');
        });
    });

    context('with "h:i:s"', function() {
        it('should return "11:03:04"', function() {
            expect(d.format('h:i:s')).to.eq('11:03:04');
        });
    });

    context('with "Y-m-d H:i:s"', function() {
        it('should return "2014-01-02 23:03:04"', function() {
            expect(d.format('Y-m-d H:i:s')).to.eq('2014-01-02 23:03:04');
        });
    });

    context('with no format', function() {
        it('should throw Error with message "format is not specified. e.g. \"Y-m-d H:i:s\""', function() {
            expect(d.format).to.throw(Error, 'format is not specified. e.g. "Y-m-d H:i:s"');
        });
    });
});