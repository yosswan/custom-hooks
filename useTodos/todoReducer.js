export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'add':
            return [
                ...initialState,
                action.payload
            ];

        case 'delete':
            return initialState.filter((item) => (
                item.id !== action.payload
            ));

        case 'toggle':
            return initialState.map((item) => {
                if(item.id === action.payload) {
                    item.done = !item.done;
                }
                return item;
            });
    
        default:
            return initialState;
    }

}