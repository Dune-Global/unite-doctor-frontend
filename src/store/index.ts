import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "./reducers/auth-reducer";
import patientDetailReducer from "./reducers/patient-detail-reducer";
import dashboardReducer from "./reducers/dashboard-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  authState: authReducer,
  patientDetailState: patientDetailReducer,
  dashBoardDataState: dashboardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
