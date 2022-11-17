export const ADD_INTERESTED = "ADD_INTERESTED";
export const ADD_NOT_INTERESTED = "ADD_NOT_INTERESTED";
export const RESET_INTERESTED = "RESET_INTERESTED";
export const RESET_NOT_INTERESTED = "RESET_NOT_INTERESTED";

let interestedID = 0;
let notInterestedID = 0;

interface Restaurant {
    id: String;
    title: String;
    image: String;
    review: Number;
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
        id: ++notInterestedID,
        restaurant: item
    }
})

export const addInterested = (item: Restaurant) => ({
    type: ADD_INTERESTED,
    payload: {
        id: ++interestedID,
        restaurant: item
    }
})