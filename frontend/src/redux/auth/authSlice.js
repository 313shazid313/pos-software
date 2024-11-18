import { createSlice } from '@reduxjs/toolkit'

const loadUserFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('token');
        if(serializedState === null) return {token: null};
        return {token: JSON.parse(serializedState)}
    } catch (error) {
        return {user: null}
    }
}


const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem('token', JSON.stringify(state.token) )
        },
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token')
        }
    }
})

export const {setToken, logout} = authSlice.actions;
export default authSlice.reducer;