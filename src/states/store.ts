import { configureStore } from '@reduxjs/toolkit';
import { UploadSlice } from '../features/uploadSlice';
import fileUploadReducer from '../features/fileUploadSlice';
    
const store = configureStore({
    reducer:{
        upload: UploadSlice.reducer,
        fileUpload : fileUploadReducer
    }
})

export type RootState =  ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch

export default store