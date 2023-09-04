function sumTwoNumbers(target, haystack) {
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 1; j < haystack.length; j++) {
            if (i == j) continue;
            let lo = haystack[i];
            let hi = haystack[j];
            if (target == hi + lo) {
                return `${i}, ${j}`;
            }
        }
    }
    return null;
}

function twoSumOptimised(target, haystack) {
    const hashtable = {};
    for (let i = 0; i < haystack.length; i++) {
        let diff = target - haystack[i];

        if (hashtable.hasOwnProperty(diff)) {
            return `${hashtable[diff]}, ${i}`;
        }

        hashtable[haystack[i]] = i;
    }

    return null;
}

module.exports = { twoSumOptimised, sumTwoNumbers };
