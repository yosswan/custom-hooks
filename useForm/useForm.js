import React, { useState } from 'react'

export const useForm = (stateInicial = {}) => {
  
    const [formState, setFormState] = useState(stateInicial);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(stateInicial);
    }

    return {
        ...formState,
        onInputChange,
        onResetForm
    }
}
