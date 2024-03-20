import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  isEmailVerified: boolean;
  firstName: string;
  lastName: string;
  email: string;
  refreshToken: string;
  accessToken: string;
  imageUrl: string;
  designation: string;
}

const initialState: AuthState = {
  isAuth: false,
  isEmailVerified: false,
  firstName: "",
  lastName: "",
  email: "",
  refreshToken: "",
  accessToken: "",
  imageUrl: "",
  designation: "",
};

const authStateSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setIsEmailVerified(state, action: PayloadAction<boolean>) {
      state.isEmailVerified = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setImageUrl(state, action: PayloadAction<string>) {
      state.imageUrl = action.payload;
    },
    setDesignation(state, action: PayloadAction<string>) {
      state.designation = action.payload;
    },
  },
});

export const {
  setIsAuth,
  setIsEmailVerified,
  setAccessToken,
  setDesignation,
  setImageUrl,
  setRefreshToken,
  setEmail,
  setFirstName,
  setLastName
} = authStateSlice.actions;
export default authStateSlice.reducer;
