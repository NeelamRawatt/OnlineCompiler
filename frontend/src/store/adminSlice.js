import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    _Id: '',
    a_name: '',
    a_email: '',
    a_password: '',
    adminToken: '',
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminId: (state, payload) => {
            state._Id = payload;
            console.log(state._Id);
        },
        setaName: (state, payload) => {
            state.a_name = payload;
            console.log(state.a_name);
        },
        setaEmail: (state, payload) => {
            state.a_email = payload;
            console.log(state.a_email);
        },
        setaPass: (state, payload) => {
            state.a_password = payload;
            console.log(state.a_password);
        },
        setAdminToken: (state, payload) => {
            state.adminToken = payload

        }
    },
})

// Action creators are generated for each case reducer function
export const { setaName, setaEmail, setaPass, setAdminToken, setAdminId, adminToken } = adminSlice.actions

export default adminSlice.reducer