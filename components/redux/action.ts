export const ADD_INTERESTED = "ADD_INTERESTED";
export const ADD_NOT_INTERESTED = "ADD_NOT_INTERESTED";
export const RESET_INTERESTED = "RESET_INTERESTED";
export const RESET_NOT_INTERESTED = "RESET_NOT_INTERESTED";

let notInterestedID = 0;

export const resetNotInterested = {
    type: RESET_NOT_INTERESTED
}

export const resetInterested = {
    type: RESET_INTERESTED
}

export const addNotInterested = (item) => ({
    type: ADD_NOT_INTERESTED,
    payload: {
        id: ++notInterestedID,
        restaurant: item
    }
})


let interestedID = 0;

export const addInterested = (item) => ({
    type: ADD_INTERESTED,
    payload: {
        id: ++interestedID,
        restaurant: item
    }
})