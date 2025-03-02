const initialState = {
    card: []
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add_cars":
            return { 
                ...state, 
                card: [...state.card, action.payload] 
            };

        case "remove_cars":
            return { 
                ...state, 
                card: state.card.filter(car => car.id !== action.payload) 
            };

        default:
            return state;
    }
};
