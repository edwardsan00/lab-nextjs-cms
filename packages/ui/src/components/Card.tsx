import React, { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  variant?: "default" | "outlined" | "elevated";
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  variant = "default",
  className = "",
  ...props
}) => {
  const variantStyles = {
    default: "bg-white border border-gray-200",
    outlined: "bg-white border border-gray-300",
    elevated: "bg-white shadow-md",
  };

  return (
    <div
      className={`rounded-lg p-4 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {title && <h3 className="text-lg font-medium">{title}</h3>}
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};
