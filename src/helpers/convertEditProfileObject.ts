export const convertToObject = (input: any) => {
  let editProfile = {
    firstName: input.firstName || "",
    lastName: input.lastName || "",
    email: input.email || "",
    phoneNumber: input.phoneNumber || "", // Added phoneNumber property
    speciality: input.speciality || "", // Added speciality property
    dateOfBirth: input.dateOfBirth || "",
    gender: input.gender || "",
    slmcNumber: input.slmcNumber || "", // Added slmcNumber property
    nicNumber: input.nicNumber || "", // Added nicNumber property
    currentHospital: input.currentHospital || "", // Added currentHospital property
    currentUniversity: input.currentUniversity || "", // Added currentUniversity property
    isPersonalClinic: input.isPersonalClinic || "", // Added isPersonalClinic property
    clinicName: input.clinicName || "", // Added clinicName property
    clinicAddress: input.clinicAddress || "", // Added clinicAddress property
  };

  return { editProfile };
};

