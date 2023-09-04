import { twoSumActions } from "@/reducers/twoSumReducer";
import React from "react";
import styles from "./arrayElement.module.css";

export const ArrayElement = ({ dispatchArrayItems, element }) => {
    return (
        <div
            className={styles.arrayElement}
            onClick={() =>
                dispatchArrayItems({
                    type: twoSumActions.DELETE_ELEMENT,
                    payload: element,
                })
            }
        >
            {element}
        </div>
    );
};
