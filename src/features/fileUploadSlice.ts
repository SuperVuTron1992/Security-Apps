import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state for the slice
interface FileUploadState {
  uploadResult: any; // Change this type based on what your API returns
  isLoading: boolean;
  error: string | null;
}

const initialState: FileUploadState = {
  uploadResult: null,
  isLoading: false,
  error: null,
};

// Create the thunk for the file upload
export const postUpLoadFileThunk = createAsyncThunk(
  'fileUpload/postUpLoadFile',
  async ({ data, fileName }: { data: any; fileName: string }, { rejectWithValue }) => {
    try {
      const requestData = {
        data,
        fileName,
      };
      const response = await axios.post(
        `https://fluxdux.com/importJsonData/Stock/Properties/`,
        requestData
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || 'File upload failed');
    }
  }
);

// Create the slice
const fileUploadSlice = createSlice({
  name: 'fileUpload',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUpLoadFileThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(postUpLoadFileThunk.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.uploadResult = action.payload;
    });
    builder.addCase(postUpLoadFileThunk.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// Export the reducer to be included in the store
export default fileUploadSlice.reducer;
