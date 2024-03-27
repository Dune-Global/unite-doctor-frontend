import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PatientDetailState {
  medicalHistoryPage: boolean;
  patientId: string;
  sessionId: string;
}

const initialState: PatientDetailState = {
  medicalHistoryPage: false,
  patientId: "",
  sessionId: "",
};

const patientDetailStateSlice = createSlice({
  name: "patientDetailState",
  initialState,
  reducers: {
    setMedicalHistoryPage(state, action: PayloadAction<boolean>) {
      state.medicalHistoryPage = action.payload;
    },
    setPatientId(state, action: PayloadAction<string>) {
      state.patientId = action.payload;
    },
    setSessionId(state, action: PayloadAction<string>) {
      state.sessionId = action.payload;
    },
  },
});

export const { setMedicalHistoryPage, setPatientId, setSessionId } =
  patientDetailStateSlice.actions;
export default patientDetailStateSlice.reducer;
