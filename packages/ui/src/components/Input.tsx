import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = "",
  id,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";
  const errorStyles = error ? "border-red-500" : "border-gray-300";
  const widthStyles = fullWidth ? "w-full" : "";

  const combinedClassName = `${baseStyles} ${errorStyles} ${widthStyles} ${className}`;

  return (
    <div className={`${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input id={id} className={combinedClassName} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
