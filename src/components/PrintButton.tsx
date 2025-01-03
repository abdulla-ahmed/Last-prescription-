import React from 'react';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mt-8 text-right print:hidden">
      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        <Printer size={16} className="mr-2" /> Print Prescription
      </button>
    </div>
  );
}