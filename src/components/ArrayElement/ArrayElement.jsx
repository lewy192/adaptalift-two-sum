import { twoSumActions } from "@/reducers/twoSumReducer";
import React, { useState } from "react";
import styles from "./arrayElement.module.css";

export const ArrayElement = ({ dispatchArrayItems, element }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className={styles.arrayElement}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() =>
                dispatchArrayItems({
                    type: twoSumActions.DELETE_ELEMENT,
                    payload: element,
                })
            }
        >
            <p className={`${styles.overlay} ${hover ? styles.active : ""}`}>
                X
            </p>
            {element}
        </div>
    );
};
