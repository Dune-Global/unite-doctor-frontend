export type AppointmentList = {
  id: string;
  patientId: string;
  patientName: string;
  imgUrl?: string;
  appointmentId: string;
  gender: string;
  allergies: string;
  hereditaryDiseases: string;
  age: string;
  location: string;
  date: string;
  time: string;
  status: string;
};

export interface TransformedAppointment {
  id: string;
  patientId: string;
  patientName: string;
  imgUrl: string;
  appointmentId: string;
  gender: string;
  allergies: string;
  hereditaryDiseases: string;
  age: string;
  location: string;
  date: string;
  time: string;
  status: string;
}

type Medicine = {
  dose: string;
  medicineName: string;
  time: string;
};

type Report = {
  dateToBeTaken: string;
  reportname: string;
};

export interface InputObject {
  age: string;
  allergies: string;
  bloodPressure: string;
  description: string;
  disease: string;
  firstName: string;
  gender: string;
  height: string;
  lastName: string;
  medicine: Medicine[];
  nextChannelDate: string;
  other: string;
  reports: Report[];
  stage: string;
  symptoms: string;
  weight: string;
}

export interface prescriptionObject {
  prescription: {
    symptoms: string;
    diseases: string;
    stage: string;
    sessionDescription: string;
    medicine: {
      name: string;
      dose: string;
      time: string;
    }[];
    reports: {
      name: string;
      dateToTake: string;
    }[];
    weight: number | null;
    height: number | null;
    nextChanelDate: string | null;
    other: string;
  };
}
