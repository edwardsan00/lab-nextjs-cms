"use client";

import React from "react";
import { Button, Card } from "@dynamic-page-renderer/ui";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  currency?: string;
  period?: string;
  onClick?: () => void;
}

export default function Pricing({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
  currency = "$",
  period = "mes",
  onClick,
}: PricingTierProps) {
  return (
    <Card
      className={`relative p-6 h-full flex flex-col ${
        popular
          ? "border-2 border-blue-500 shadow-lg"
          : "border border-gray-200"
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-gray-500 text-lg">{currency}</span>
          <span className="text-4xl font-bold mx-1">{price}</span>
          {period && <span className="text-gray-500">/{period}</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="mb-8 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span
                className={`mr-2 mt-1 ${
                  feature.included ? "text-green-500" : "text-gray-400"
                }`}
              >
                {feature.included ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </span>
              <span
                className={feature.included ? "text-gray-800" : "text-gray-400"}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <Button
          variant={popular ? "primary" : "outline"}
          size="lg"
          className="w-full"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}
