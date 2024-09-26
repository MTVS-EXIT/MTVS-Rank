import { SET_FIREFIGHTERS, SET_DRONES, LOGIN, LOGOUT } from './actions';

const initialState = {
    firefighters: [],
    drones: [],
    user: null,
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIREFIGHTERS:
            return { ...state, firefighters: action.payload };
        case SET_DRONES:
            return { ...state, drones: action.payload };
        case LOGIN:
            return { ...state, user: action.payload, isLoggedIn: true };
        case LOGOUT:
            return { ...state, user: null, isLoggedIn: false };
        default:
            return state;
    }
};

export default reducer;
//