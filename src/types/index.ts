export interface Drug {
  name: string;
  dosage: string;
  frequency: string;
}

export interface PrescriptionData {
  patientName: string;
  age: string;
  sex: string;
  drugs: Drug[];
  doctorName: string;
}