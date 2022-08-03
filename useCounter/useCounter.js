import { useState } from "react";
import PropTypes from 'prop-types';


const useCounter = (stateInicial) => {

    const [state, setState] = useState(stateInicial)
    let setCounter = (operacionId, counterId=null) => {};

    const operacion = (operacionId, counterId) => {
        const counter = !!counterId ? state[counterId] : state;
        const counterInicial = !!counterId ? stateInicial[counterId] : stateInicial;

        let resultado = counter;

        switch (operacionId) {
            case 0:
                resultado = counter + 1;
                break;
            case 1:
                resultado = counter - 1;
                break;
            case 2:
                resultado = counterInicial;
                break;
        
            default:
                break;
        }

        return resultado;
    }

    if(typeof stateInicial === 'object'){
        setCounter = (operacionId, counterId) => {
            let newState = {...state};
            newState[counterId] = operacion(operacionId, counterId)
            setState(newState);
        }
    } else {
        if(typeof stateInicial === 'number'){
            setCounter = (operacionId) => {
                setState(operacion(operacionId));
            }
        }
    }
    
    const add = (counterId) => {
        setCounter(0, counterId);
    }

    const subtrack = (counterId) => {
        setCounter(1, counterId);
    }

    const reset = (counterId) => {
        setCounter(2, counterId);
    }

    return {
        state,
        add,
        subtrack,
        reset
    };
}

useCounter.propTypes = {
    stateInicial: PropTypes.number.isRequired
};

export default useCounter;