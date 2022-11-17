export const ADD_NOT_INTERESTED = "ADD_NOT_INTERESTED";

let notInterestedID = 0;

export const addNotInterested = (item) => ({
    type: ADD_NOT_INTERESTED,
    payload: {
        id: ++notInterestedID,
        restaurant: item
    }
})

export const ADD_INTERESTED = "ADD_INTERESTED";

let interestedID = 0;

export const addInterested = (item) => ({
    type: ADD_INTERESTED,
    payload: {
        id: ++interestedID,
        restaurant: item
    }
})