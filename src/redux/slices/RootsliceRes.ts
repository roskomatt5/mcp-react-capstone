import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    name: "File",
    size: "Size",
    type: "Type",
    uri: "URI",
    uploaded_at: "Uploaded",
  },
  reducers: {
    chooseResName: (state, action) => {
      state.name = action.payload;
    },
    chooseResSize: (state, action) => {
      state.size = action.payload;
    },
    chooseResType: (state, action) => {
      state.type = action.payload;
    },
    chooseUri: (state, action) => {
      state.uri = action.payload;
    },
    chooseUploaded_At: (state, action) => {
      state.uploaded_at = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const {
  chooseResName,
  chooseResSize,
  chooseResType,
  chooseUri,
  chooseUploaded_At,
} = rootSlice.actions;
