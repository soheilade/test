const assert = require('assert');

describe('Array', function(){
    describe('indexOf', function(){
        it('Should return -1 if the value is not in the array or a positive number (index) if it does exist', function(){
            assert.equal([1,2,3].indexOf(4), -1);
            assert.equal([1,2,3].indexOf(1), 0);
            assert.equal([1,2,3].indexOf(3), 2);
        });
    });
});