import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface UploadData {
    fileName: any
}

interface UploadState {
    uploadData: UploadData | null;

}

const initialState: UploadState ={
    uploadData:  null,
}

export const postUploadFile =  createAsyncThunk<UploadData, UploadData>(
    "uploadFile",
    async(requestData: any, thunkAPI : any) =>{
        try{
            const response = await axios.post<UploadData>(
                'https://fluxdux.com/importJsonData/Stock/Properties/',
                requestData
            );
            return response.data;

        }catch(error:any){
            return thunkAPI.rejectWithValue(error.response?.data || 'Unknown error');

        }  
    }
)

export  const UploadSlice = createSlice({
    name : "uploadTheFile",
    initialState,
    reducers :{
        addAFile :( state, action: PayloadAction<UploadData>) =>{
            state.uploadData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postUploadFile.fulfilled, (state, action: PayloadAction<UploadData>) => {
                state.uploadData = action.payload;
            })
    }
})

export default UploadSlice.reducer;
export const {addAFile} = UploadSlice.actions;