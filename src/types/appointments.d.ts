export type AppointmentList = {
  id: string;
  patientName: string;
  imgUrl?: string;
  appointmentId: string;
  gender: string;
  age: string;
  location: string;
  date: string;
  time: string;
  status: string;
};

export interface TransformedAppointment {
  id: string;
  patientName: string;
  imgUrl: string;
  appointmentId: string;
  gender: string;
  age: string;
  location: string;
  date: string;
  time: string;
  status: string;
}
