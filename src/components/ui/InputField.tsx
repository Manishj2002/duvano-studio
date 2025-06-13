import { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  isTextarea?: boolean;
  maxLength?: number;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  isTextarea = false,
  maxLength,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-white-highlight font-poppins">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full p-3 rounded-lg bg-dark-secondary text-white-highlight border border-dark-secondary focus:border-neon-blue focus:outline-none resize-none"
          rows={4}
        />
      ) : (
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 rounded-lg bg-dark-secondary text-white-highlight border border-dark-secondary focus:border-neon-blue focus:outline-none"
        />
      )}
      {error && <p className="text-soft-red text-sm">{error}</p>}
    </div>
  );
}