export type PatientList = {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  gender: string;
  age: string;
  disease: string;
  allergies: string;
  status: string;
};

export interface PatientData {
  sessionId: string;
  patient: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    imgUrl: string;
    password: string;
    allergies?: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  status: string;
}

export interface PatientInfo {
  sessionId: string;
  patientName: string;
  email: string;
  gender: string;
  age: number;
  allergies: string;
  imgUrl?: string;
}
