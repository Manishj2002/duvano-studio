interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function Button({ type = 'button', children, disabled, className }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg font-poppins text-white-highlight transition ${disabled ? 'bg-dark-secondary cursor-not-allowed' : 'bg-soft-red hover:bg-neon-blue'} ${className}`}
    >
      {children}
    </button>
  );
}