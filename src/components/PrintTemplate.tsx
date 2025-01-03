import React from 'react';
import { Drug } from '../types';

interface PrintTemplateProps {
  doctorName: string;
  drugs: Drug[];
}

export default function PrintTemplate({ doctorName, drugs }: PrintTemplateProps) {
  return (
    <div className="hidden print:block">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">{doctorName}</h1>
        <div className="border-b-2 border-black mt-2"></div>
      </div>

      <div className="mb-8 text-center">
        <span className="text-2xl">℞</span>
      </div>

      <div className="mb-12">
        <ol className="list-decimal pl-6 space-y-4">
          {drugs.map((drug, index) => (
            <li key={index} className="text-lg">
              <div className="font-medium">{drug.name}</div>
              <div className="ml-6 text-gray-700">
                <div>{drug.dosage}</div>
                <div>{drug.frequency}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <div className="float-right text-right">
          <div className="h-20 border-b border-black w-48"></div>
          <div className="mt-2 font-medium">{doctorName}</div>
        </div>
      </div>
    </div>
  );
}