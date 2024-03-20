import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PatientDetailState {
  medicalHistoryPage: boolean;
}

const initialState: PatientDetailState = {
  medicalHistoryPage: false,
};

const patientDetailStateSlice = createSlice({
  name: "patientDetailState",
  initialState,
  reducers: {
    setMedicalHistoryPage(state, action: PayloadAction<boolean>) {
      state.medicalHistoryPage = action.payload;
    },
  },
});

export const { setMedicalHistoryPage } = patientDetailStateSlice.actions;
export default patientDetailStateSlice.reducer;
