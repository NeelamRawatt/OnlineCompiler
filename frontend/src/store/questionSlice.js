import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    question: ''
}

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setQuestion: (state, payload) => {
            state.question = payload;
            console.log(state._Id);
        },
        // setName: (state, payload) => {
        //     state.name = payload;
        //     console.log(state.name);
        // },
        // setEmail: (state, payload) => {
        //     state.email = payload;
        //     console.log(state.email);
        // },
        // setPass: (state, payload) => {
        //     state.password = payload;
        //     console.log(state.password);
        // },
        // setAuthToken: (state, payload) => {
        //     state.authToken = payload

        // }
    },
})

// Action creators are generated for each case reducer function
export const { setQuestion } = questionSlice.actions

export default questionSlice.reducer