import { configureStore } from '@reduxjs/toolkit';
import  { UploadSlice } from '../features/uploadSlice';

const store = configureStore({
    reducer:{
        upload: UploadSlice.reducer
    }
})

export type RootState =  ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch

export default store