import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Drug } from '../types';

interface MedicationListProps {
  drugs: Drug[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: keyof Drug, value: string) => void;
}

export default function MedicationList({ drugs, onAdd, onRemove, onUpdate }: MedicationListProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Medications</h2>
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 print:hidden"
        >
          <Plus size={16} className="mr-1" /> Add Medication
        </button>
      </div>
      
      {drugs.map((drug, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Medication Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={drug.name}
              onChange={(e) => onUpdate(index, 'name', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Dosage</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={drug.dosage}
              onChange={(e) => onUpdate(index, 'dosage', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Frequency</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={drug.frequency}
              onChange={(e) => onUpdate(index, 'frequency', e.target.value)}
            />
          </div>
          <div className="flex items-end print:hidden">
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 print:block hidden">
        <h3 className="text-lg font-semibold mb-2">Prescribed Medications:</h3>
        <ol className="list-decimal pl-6">
          {drugs.map((drug, index) => (
            <li key={index} className="mb-2">
              <span className="font-medium">{drug.name}</span>
              {drug.dosage && <span> - {drug.dosage}</span>}
              {drug.frequency && <span> - {drug.frequency}</span>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}