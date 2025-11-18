import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  authorizationModalVisibltiy: boolean;
}
const initialState: InitialStateType = {
  authorizationModalVisibltiy: false,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    authorizationModalVisibltiyConf(state) {
      state.authorizationModalVisibltiy = !state.authorizationModalVisibltiy;
    },
  },
});

export const { authorizationModalVisibltiyConf } = modalSlice.actions;

export default modalSlice.reducer;
