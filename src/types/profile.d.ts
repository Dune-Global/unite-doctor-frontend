export interface doctorProfileObject {
  editProfile: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    designation: string;
    dateOfBirth: string;
    gender: string;
    slmcNumber: string;
    nicNumber: string;
    currentHospital: string;
    currentUniversity: string;
    clinic: {
      isClinic: boolean;
      clinicName: string;
      clinicAddress: string;
    };
  };
}
