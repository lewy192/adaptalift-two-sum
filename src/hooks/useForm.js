import { useState } from "react";

export const useForm = (
    initialState = {},
    onSubmit,
    resetInitialState = true
) => {
    const [formState, setFormState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const handleFormChange = (event) => {
        const {
            target: { name, value },
        } = event;
        setFormState({ ...formState, [name]: value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        onSubmit?.(formState);
        if (resetInitialState) setFormState(initialState);
        setLoading(false);
    };
    const submitOnEnter = (e) => {
        if (e.key === "Enter") handleFormSubmit(e);
    };
    // dont use setFormState unless you have an edge case that handle form change doesn't cover
    return {
        formState,
        handleFormChange,
        handleFormSubmit,
        submitOnEnter,
        setFormState,
        loading,
    };
};
