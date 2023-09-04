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

    const [newArrayElement, setNewArrayElement] = useState();
    const [error, setError] = useState({ error: false, message: "", type: "" });
    const [array, dispatchArrayItems] = useReducer(
        twoSumReducer,
        [2, 6, 14, 12, 10, 25, 60, 20]
    );
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
    // c) Basic validation to ensure the inputs are correct.

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Items to find the sum of</h1>
            <div className={styles.arrayToSearch}>
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
                className={`${styles.formArray} ${styles.form}`}
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
                    className={`${styles.input}`}
                    type="number"
                    name="newArrayElement"
                    placeholder="Add Item To array"
                    value={newArrayElement}
                    onChange={handleAddNewNumber}
                />
                <input type="submit" className={`${styles.submit}`} />
            </form>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <input
                    className={`${styles.input}`}
                    type="number"
                    name="target"
                    placeholder="Enter a target number..."
                    value={formState.target}
                    onChange={handleFormChange}
                />
                <input
                    type="submit"
                    className={`${styles.submit}`}
                    placeholder="Find Two Sum Numbers"
                />
            </form>
            {indicies === ""
                ? ""
                : indicies
                ? `indicies that match the target: ${indicies}`
                : ""}
        </div>
    );
};
