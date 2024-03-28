import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Appointment {
  appointmentNumber: number;
  patientFirstName: string;
  patientImgUrl: string;
  patientLastName: string;
  status: string;
  _id: string;
}

interface DashboardState {
  totalPatients: number;
  todaysAppointments: number;
  dashboardAppointments: Appointment[];
}

const initialState: DashboardState = {
  totalPatients: 0,
  todaysAppointments: 0,
  dashboardAppointments: [],
};

const dashboardStateSlice = createSlice({
  name: "dashboardState",
  initialState,
  reducers: {
    setTotalPatients(state, action: PayloadAction<number>) {
      state.totalPatients = action.payload;
    },

    setTodaysAppointments(state, action: PayloadAction<number>) {
      state.todaysAppointments = action.payload;
    },

    setDashboardAppointments(state, action: PayloadAction<Appointment[]>) {
      state.dashboardAppointments = action.payload;
    },
  },
});

export const {
  setTotalPatients,
  setTodaysAppointments,
  setDashboardAppointments,
} = dashboardStateSlice.actions;
export default dashboardStateSlice.reducer;
