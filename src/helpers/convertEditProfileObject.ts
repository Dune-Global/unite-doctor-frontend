export const convertToObject = (input: any) => {
  let editProfile = {
    firstName: input.firstName || "",
    lastName: input.lastName || "",
    email: input.email || "",
    mobile: input.phoneNumber || "", // Added phoneNumber property
    designation: input.speciality || "", // Added speciality property
    dateOfBirth: input.dateOfBirth || "",
    gender: input.gender || "",
    slmcNumber: input.slmcNumber || "", // Added slmcNumber property
    nicNumber: input.nicNumber || "", // Added nicNumber property
    currentHospital: input.currentHospital || "", // Added currentHospital property
    currentUniversity: input.currentUniversity || "", // Added currentUniversity property
    clinic: {
      isClinic: input.isPersonalClinic === "yes", // Convert "yes" to true, otherwise false
      clinicName: input.clinicName || "", // Added clinicName property
      clinicAddress: input.clinicAddress || "", // Added clinicAddress property
    },
  };

  return { editProfile };
};