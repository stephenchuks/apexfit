import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => (
  <button
    className="px-4 py-2 bg-teal-600 text-white rounded-xl shadow hover:bg-teal-700 transition"
    {...props}
  >
    {label}
  </button>
);
