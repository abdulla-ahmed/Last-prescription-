import React from 'react';

interface PatientInfoProps {
  patientName: string;
  age: string;
  sex: string;
  onUpdate: (field: string, value: string) => void;
}

export default function PatientInfo({ patientName, age, sex, onUpdate }: PatientInfoProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Patient Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={patientName}
          onChange={(e) => onUpdate('patientName', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={age}
          onChange={(e) => onUpdate('age', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Sex</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={sex}
          onChange={(e) => onUpdate('sex', e.target.value)}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
}