const { expect, test } = require("@jest/globals");
const { sumTwoNumbers, twoSumOptimised } = require("./twoSum");

// O(n^2) solution
test("There are indicies that match the target", () => {
    expect(sumTwoNumbers(20, [2, 6, 14, 15])).toBe("1, 2");
});

test("There are indicies that match the target but the array is in different orders", () => {
    expect(sumTwoNumbers(20, [15, 2, 14, 6])).toBe("2, 3");
});

test("there are indicies that match the target ", () => {
    expect(sumTwoNumbers(30, [2, 6, 14, 12, 10, 25, 60, 20])).toBe("4, 7");
});

test("there are no indicies that match the target ", () => {
    expect(sumTwoNumbers(30, [2, 6, 14, 23, 10, 25, 60, 21])).toBe(null);
});

// O(n) solution
test("There are indicies that match the target", () => {
    expect(twoSumOptimised(20, [2, 6, 14, 15])).toBe("1, 2");
});

test("There are indicies that match the target but the array is in different orders", () => {
    expect(twoSumOptimised(20, [15, 2, 14, 6])).toBe("2, 3");
});

test("there are indicies that match the target ", () => {
    expect(twoSumOptimised(30, [2, 6, 14, 12, 10, 25, 60, 20])).toBe("4, 7");
});

test("there are no indicies that match the target ", () => {
    expect(twoSumOptimised(30, [2, 6, 14, 23, 10, 25, 60, 21])).toBe(null);
});
