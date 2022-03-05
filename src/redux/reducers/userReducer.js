// Store/Reducers/accountReducer.js

const initialState = {
    user_data: {
        id : 1,
        fullname : "Alvin Bauma",
        phone : "+243995502981"
    },
    is_connected: true,
};

/** Possible actions */
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_CONNECTION = 'SET_CONNECTION';

export function userReducer(state = initialState, action) {
    let nextState;

    switch (action.type) {

        case SET_USER_DATA:
            //Modifier le state user data
            nextState = {
                ...state,
                user_data: action.value,
            };

            return nextState || state; //Renvoie state si nextState est undefined

        case SET_CONNECTION:
            //Modifier le state account data
            nextState = {
                ...state,
                is_connected: action.value,
            };

            return nextState || state; //Renvoie state si nextState est undefined

        default:
            return state;
    }
}

