const insertion = function(items, isOrderedBefore) {
    let result = items.slice(0);
    for (let i = 0; i < result.length; i++) {
        let j = i;
        while (j > 0 && isOrderedBefore(j, j - 1)) {
            const temp = result[j];
            result[j] = result[j - 1];
            result[j - 1] = temp;
            j--;
        }
    }

    return result;
};

module.exports = insertion;
