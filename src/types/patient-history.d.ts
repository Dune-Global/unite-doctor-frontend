export type PatientHistoryList = {
  id: string;
  diseaseName: string;
  diseaseDescription: string;
  date: string;
  status:
    | "Medicine Started"
    | "Maintainance Stage"
    | "Recovery Stage"
    | "Final Stage";
  symptoms: string;
};
