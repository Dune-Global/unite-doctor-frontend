export const convertToObject = (input: any) => {
  let prescription = {
    symptoms: input.symptoms || "",
    diseases: input.disease || "",
    stage: input.stage || "",
    sessionDescription: input.description || "",
    medicine: input.medicine.map((item: any) => ({
      name: item.medicineName || "",
      dose: item.dose || "",
      time: item.time || "",
    })),
    reports: input.reports.map((item: any) => ({
      name: item.reportname || "",
      dateToTake: item.dateToBeTaken || "",
    })),
    weight: !isNaN(parseFloat(input.weight)) ? parseFloat(input.weight) : null,
    height: !isNaN(parseFloat(input.height)) ? parseFloat(input.height) : null,
    bloodPressure: !isNaN(parseFloat(input.bloodPressure))
      ? parseFloat(input.bloodPressure)
      : null,
    nextChanelDate: input.nextChannelDate || null,
    other: input.other || "",
  };

  return { prescription };
};
