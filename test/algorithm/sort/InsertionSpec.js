const jsc = require('jsverify');
const insertion = require('../../../main/algorithm/sort/Insertion');
const isSorted = require('./Util').isSorted;

describe('Insertion Sort', function() {
    jsc.property('sorted', 'array integer', function(arr) {
        const result = insertion(arr, (v1, v2) => v1 < v2);
        return isSorted(result);
    });
});
