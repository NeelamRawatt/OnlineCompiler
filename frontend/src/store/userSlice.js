import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    _Id: '',
    name: '',
    email: '',
    password: '',
    authToken: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, payload) => {
            state._Id = payload;
            console.log(state._Id);
        },
        setName: (state, payload) => {
            state.name = payload;
            console.log(state.name);
        },
        setEmail: (state, payload) => {
            state.email = payload;
            console.log(state.email);
        },
        setPass: (state, payload) => {
            state.password = payload;
            console.log(state.password);
        },
        setAuthToken: (state, payload) => {
            state.authToken = payload

        }
    },
})

// Action creators are generated for each case reducer function
export const { setName, setEmail, setPass, setAuthToken, setUserId, authToken } = userSlice.actions

export default userSlice.reducer