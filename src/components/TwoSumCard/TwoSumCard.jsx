"use client";

import { useForm } from "@/hooks/useForm";
import { twoSumActions, twoSumReducer } from "@/reducers/twoSumReducer";
import React, { useReducer, useState } from "react";
import styles from "./twoSumCard.module.css";
import { ArrayElement } from "../ArrayElement/ArrayElement";
import { sumTwoNumbers } from "@/lib/twoSum";

export const TwoSumCard = (props) => {
    const { handleFormChange, handleFormSubmit, formState } = useForm(
        { target: "" },
        executeSumTwoNumbers
    );
    const [target, setTarget] = useState();
    const [newArrayElement, setNewArrayElement] = useState();
    const [error, setError] = useState({ error: false, message: "", type: "" });
    const [array, dispatchArrayItems] = useReducer(
        twoSumReducer,
        [2, 6, 14, 12, 10, 25, 60, 20]
    );

    //TODO: if enough time - change to reducer and have children of array each dispatch actions when clicked

    const [indicies, setIndicies] = useState("");

    function executeSumTwoNumbers() {
        const result = sumTwoNumbers(formState.target, array);

        setIndicies(result);
    }

    function validateAddNewNumber(number) {
        if (Number.isNaN(number)) {
            return false;
        }
        return true;
    }

    function handleAddNewNumber(e) {
        if (validateAddNewNumber(e.target.value)) {
            setNewArrayElement(Number(e.target.value));
        } else {
            setError({
                error: true,
                message: "Please enter a valid number",
                type: "addNewNumber",
            });
        }
    }

    // a) An interface for adding and removing items in the array. (e.g. [2, 6, 14, 15])

    // c) Basic validation to ensure the inputs are correct.

    // d) A button to trigger the function call.
    return (
        <div className={styles.container}>
            <div className={styles.arrayToSearch}>
                <h1>Items to find the sum of</h1>
                <div className={styles.arrayElements}>
                    {array.map((element) => (
                        <ArrayElement
                            element={element}
                            key={element}
                            dispatchArrayItems={dispatchArrayItems}
                        />
                    ))}
                </div>
            </div>
            <form
                className={styles.formArray}
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatchArrayItems({
                        type: twoSumActions.ADD_ELEMENT,
                        payload: newArrayElement,
                    });
                    setNewArrayElement("");
                }}
            >
                <input
                    type="number"
                    name="newArrayElement"
                    placeholder="Add Item To array"
                    value={newArrayElement}
                    onChange={handleAddNewNumber}
                />
                <input type="submit" />
            </form>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <input
                    type="number"
                    name="target"
                    placeholder="Enter a target number..."
                    value={formState.target}
                    onChange={handleFormChange}
                />
                <input type="submit" placeholder="Find Two Sum Numbers" />
            </form>
            {indicies
                ? `indicies that match the target: ${indicies}`
                : "No Match"}
        </div>
    );
};
