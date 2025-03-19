import React, { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
  center?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "lg",
  padding = true,
  center = true,
  className = "",
  ...props
}) => {
  const maxWidthStyles = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full",
  };

  const paddingStyles = padding ? "px-4 py-6" : "";
  const centerStyles = center ? "mx-auto" : "";

  const combinedClassName = `${maxWidthStyles[maxWidth]} ${paddingStyles} ${centerStyles} ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};
