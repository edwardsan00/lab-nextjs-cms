"use client";

import React from "react";
import { Card } from "@dynamic-page-renderer/ui";

interface FeatureProps {
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
  align?: "left" | "center" | "right";
  variant?: "default" | "bordered" | "highlighted";
}

export default function Feature({
  title,
  description,
  icon,
  imageUrl,
  align = "center",
  variant = "default",
}: FeatureProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const variantClasses = {
    default: "",
    bordered: "border-2 border-blue-200",
    highlighted: "bg-blue-50 border border-blue-200",
  };

  return (
    <Card
      className={`p-6 h-full transition-all duration-300 hover:shadow-lg ${alignClasses[align]} ${variantClasses[variant]}`}
    >
      {(icon || imageUrl) && (
        <div className="mb-4 flex justify-center">
          {icon && (
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl">{icon}</span>
            </div>
          )}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-16 h-16 object-contain"
            />
          )}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}
