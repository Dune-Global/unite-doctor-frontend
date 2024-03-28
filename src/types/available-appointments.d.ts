interface DoctorAvailability {
  _id: string;
  date: string;
  doctorId: string;
  sessionDuration: number;
  numberOfAppointments: number;
  location: string;
  status: string;
}

interface DoctorInfo {
  _id: string;
  firstName: string;
  lastName: string;
  designation: string;
  gender: string;
  email: string;
  imgUrl: string;
}

interface ApiResponse {
  doctor: DoctorInfo;
  availabilities: DoctorAvailability[];
}

export type AvailableAppointmentsList = {
  id: string;
  date: string;
  time: string;
  duration: number;
  appointments: number;
  location: string;
};
