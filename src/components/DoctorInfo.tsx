import React from 'react';

interface DoctorInfoProps {
  doctorName: string;
  onUpdate: (value: string) => void;
}

export default function DoctorInfo({ doctorName, onUpdate }: DoctorInfoProps) {
  return (
    <div className="mt-8 pt-6 border-t">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Doctor's Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={doctorName}
          onChange={(e) => onUpdate(e.target.value)}
        />
      </div>
      
      <div className="mt-8 text-right border-t pt-4">
        <p className="text-sm text-gray-600 mb-2">Doctor's Signature</p>
        <div className="h-20 border-b border-gray-300"></div>
      </div>
    </div>
  );
}