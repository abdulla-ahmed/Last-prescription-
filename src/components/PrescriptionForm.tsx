import React, { useState } from 'react';
import { PrescriptionData, Drug } from '../types';
import PatientInfo from './PatientInfo';
import MedicationList from './MedicationList';
import DoctorInfo from './DoctorInfo';
import PrintButton from './PrintButton';
import PrintTemplate from './PrintTemplate';

export default function PrescriptionForm() {
  const [prescription, setPrescription] = useState<PrescriptionData>({
    patientName: '',
    age: '',
    sex: '',
    drugs: [{ name: '', dosage: '', frequency: '' }],
    doctorName: '',
  });

  const updatePatientInfo = (field: string, value: string) => {
    setPrescription(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addDrug = () => {
    setPrescription(prev => ({
      ...prev,
      drugs: [...prev.drugs, { name: '', dosage: '', frequency: '' }]
    }));
  };

  const removeDrug = (index: number) => {
    setPrescription(prev => ({
      ...prev,
      drugs: prev.drugs.filter((_, i) => i !== index)
    }));
  };

  const updateDrug = (index: number, field: keyof Drug, value: string) => {
    setPrescription(prev => ({
      ...prev,
      drugs: prev.drugs.map((drug, i) => 
        i === index ? { ...drug, [field]: value } : drug
      )
    }));
  };

  const updateDoctorName = (value: string) => {
    setPrescription(prev => ({
      ...prev,
      doctorName: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 print:p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 print:hidden">
        <div className="mb-8 text-center border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">Medical Prescription</h1>
        </div>

        <PatientInfo
          patientName={prescription.patientName}
          age={prescription.age}
          sex={prescription.sex}
          onUpdate={updatePatientInfo}
        />

        <MedicationList
          drugs={prescription.drugs}
          onAdd={addDrug}
          onRemove={removeDrug}
          onUpdate={updateDrug}
        />

        <DoctorInfo
          doctorName={prescription.doctorName}
          onUpdate={updateDoctorName}
        />

        <PrintButton />
      </div>

      <PrintTemplate
        doctorName={prescription.doctorName}
        drugs={prescription.drugs}
      />
    </div>
  );
}