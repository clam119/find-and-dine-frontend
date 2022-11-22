import { ADD_NOT_INTERESTED, RESET_NOT_INTERESTED } from "./action";
import { ADD_INTERESTED, RESET_INTERESTED } from "./action";
import { ADD_FAVOURITE, RESET_FAVOURITE, REMOVE_FAVOURITE } from "./action";
import { ADD_TO_MAIN, RESET_MAIN } from './action'
export const notInterestedInitialState = {
    restaurants: []
}

export const interestedInitialState = {
    restaurants: []
}

export const mainInitialState = {
    restaurants: []
}

export const favouriteInitialState = {
    restaurants: []
}

export const favouriteReducer = (state = favouriteInitialState, action) => {
    switch(action.type) {

        case ADD_FAVOURITE: {
            const { restaurant } = action.payload;
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]
            }
        }

        case RESET_FAVOURITE: {
            return {...favouriteInitialState};
        }
         
        default: {
            return state;
        }
    }
    
}

export const interestedReducer = (state = interestedInitialState, action) => {
    switch (action.type) {
        case ADD_INTERESTED: {
            const { restaurant } = action.payload;
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant ]
            };
        }
        case RESET_INTERESTED: {
            return { ...interestedInitialState };
        }
        default: 
            return state;
    }
}


export const mainReducer = (state = mainInitialState, action) => {
    switch (action.type) {
        case RESET_MAIN: {
            return {...mainInitialState};
        }
        case ADD_TO_MAIN: {
            const  restaurantie  = action.payload;
            return {
                restaurants: [...restaurantie.restaurants, ...state.restaurants]
            }
        }
        
        default: {
            return state;
        }
    }
}

export const notInterestedReducer = (state = notInterestedInitialState, action, main = mainInitialState) => {
    switch (action.type) {
        case ADD_NOT_INTERESTED: {
            const { restaurant } = action.payload;
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant ]
            };
        }
        case RESET_NOT_INTERESTED: {
            return {...notInterestedInitialState}
        }

        default: {
            return state;
        }
    }
}

