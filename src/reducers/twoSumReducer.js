/**
 *
 * @param {number[]} state
 * @param {{type: string, payload: number}} action
 * @returns
 */

export const twoSumReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ELEMENT":
            return [...state, action.payload];
        case "CLEAR_ELEMENTS":
            return [];
        case "DELETE_ELEMENT":
            return state.filter((index) => index !== action.payload);
        default:
            return state;
    }
};

class TwoSumActions {
    ADD_ELEMENT = "ADD_ELEMENT";
    CLEAR_ELEMENTS = "CLEAR_ELEMENTS";
    DELETE_ELEMENT = "DELETE_ELEMENT";
}

export const twoSumActions = new TwoSumActions();
