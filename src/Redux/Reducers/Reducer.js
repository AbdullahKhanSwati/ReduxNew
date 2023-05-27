

import * as actionTypes from "../ActionType"

const initialState = {
    temp:"",
    feels:"",
    country:""
}

export const MyReducers = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.ADD_TEM:
            return{
                state : action.payload
            }


        default:

            return state;


    }
}