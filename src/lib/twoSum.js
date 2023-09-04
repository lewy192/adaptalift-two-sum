export function sumTwoNumbers(target, haystack) {
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

export function sumTwoNumbersOpt(target, haystack) {
    for (let i = 0; i < haystack.length; i++) {
        const element = haystack[i];
    }
}
