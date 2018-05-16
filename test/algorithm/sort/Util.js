const isSorted = function(items, isOrderedBefore) {
    let prev;
    for (const curr in items) {
        if (prev) {
            if (isOrderedBefore(curr, prev)) {
                return false;
            }
            prev = curr;
        }
    }
    return true;
};

module.exports = {
    isSorted,
};


