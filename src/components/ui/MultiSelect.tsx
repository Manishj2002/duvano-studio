'use client';

import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  label: string;
  name: string;
  value: string[];
  onChange: (values: string[]) => void;
  error?: string;
  options: Option[];
}

export default function MultiSelect({ label, name, value, onChange, error, options }: MultiSelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    onChange(selectedValues);
  };

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <select
        id={name}
        name={name}
        multiple
        value={value}
        onChange={handleChange}
        className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
