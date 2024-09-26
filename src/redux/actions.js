export const SET_FIREFIGHTERS = 'SET_FIREFIGHTERS';
export const SET_DRONES = 'SET_DRONES';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const setFirefighters = (firefighters) => ({
    type: SET_FIREFIGHTERS,
    payload: firefighters,
});

export const setDrones = (drones) => ({
    type: SET_DRONES,
    payload: drones,
});

export const login = (user) => ({
    type: LOGIN,
    payload: user,
});

export const logout = () => ({
    type: LOGOUT,
});
//