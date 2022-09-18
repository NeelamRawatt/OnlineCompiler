import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import adminSlice from './adminSlice'
import questionSlice from './questionSlice'
// import counterSlice from './counterSlice'
export const store = configureStore({
    reducer: {
        user: userSlice,
        admin: adminSlice,
        question: questionSlice
    },
})