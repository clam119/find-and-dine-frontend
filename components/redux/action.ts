export const ADD_INTERESTED = "ADD_INTERESTED";
export const ADD_NOT_INTERESTED = "ADD_NOT_INTERESTED";
export const RESET_INTERESTED = "RESET_INTERESTED";
export const RESET_NOT_INTERESTED = "RESET_NOT_INTERESTED";
export const ADD_TO_MAIN="ADD_TO_MAIN";
export const ADD_FAVOURITE="ADD_FAVOURITE";
export const RESET_FAVOURITE="REMOVE_FAVOURITE";
export const REMOVE_FAVOURITE="REMOVE_FAVOURITE";
export const RESET_MAIN="RESET_MAIN";

let interestedID = 0;
let notInterestedID = 0;

interface Restaurant {
    id: String;
    title: String;
    image: String;
    review: Number;
}

export const resetMain = {
    type: RESET_MAIN
}

export const addToMain = (state: Restaurant[]) => ({
    type: ADD_TO_MAIN,
    payload: {
        restaurants: state
    }
});

export const addToFavourite = (item: Restaurant) => ({
    type: ADD_FAVOURITE,
    payload: {
        restaurant: item
    }
})

export const resetFavourite = {
    type: RESET_FAVOURITE
}
export const resetNotInterested = {
    type: RESET_NOT_INTERESTED
}
export const resetInterested = {
    type: RESET_INTERESTED
}

export const addNotInterested = (item: Restaurant) => ({
    type: ADD_NOT_INTERESTED,
    payload: {
        restaurant: item
    }
})

export const addInterested = (item: Restaurant) => ({
    type: ADD_INTERESTED,
    payload: {
        restaurant: item
    }
})