import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  options: Option[];
}

export default function Select({
  label,
  name,
  value,
  onChange,
  error,
  options,
  ...rest
}: SelectProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-white-highlight font-medium">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue ${
          error ? 'border-soft-red' : 'border-gray-600'
        }`}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-black text-white">
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-soft-red text-sm mt-1">{error}</p>}
    </div>
  );
}
