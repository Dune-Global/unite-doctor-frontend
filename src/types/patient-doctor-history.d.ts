export type PatientDoctorHistory = {
  sessionId: string;
  doctorId: string;
  doctorDetails: DoctorDetails;
};

export type DoctorDetails = {
  id: string;
  doctorName: string;
  firstName: string;
  lastName: string;
  email: string;
  speciality: string;
  contactNUmber: string;
  imgUrl: string;
};
