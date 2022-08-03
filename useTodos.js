import { useEffect, useReducer } from "react";
import {todoReducer} from '../components/08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = (initialState=[]) => {
    
    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewItem = (newTODO) => {
        dispatch({
            type: 'add',
            payload: {
                id: new Date().getTime(),
                description: newTODO,
                done: false,
            }
        });
    }

    const handleToggleTodo = (id) => {
        dispatch(
            {
                type: 'toggle',
                payload: id
            }
        );
    }

    const handleDeleteTodo = (id) => {
        dispatch(
            {
                type: 'delete',
                payload: id
            }
        );
    }
    
    return {
        todos,
        handleNewItem,
        handleDeleteTodo,
        handleToggleTodo,
        pendingCount: todos.filter((item) => !item.done).length,
        todosCount: todos.length
    }
}
