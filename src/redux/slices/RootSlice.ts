import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    title: "Title",
    link: "Link",
    repo_link: "Github Repository",
    date_created: "Date Created",
  },
  reducers: {
    chooseTitle: (state, action) => {
      state.title = action.payload;
    },
    chooseLink: (state, action) => {
      state.link = action.payload;
    },
    chooseGit_Repo: (state, action) => {
      state.repo_link = action.payload;
    },
    chooseDate_Created: (state, action) => {
      state.date_created = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseLink, chooseGit_Repo, chooseDate_Created } =
  rootSlice.actions;
