"use client";

import React, { useState } from "react";
import { Card } from "@dynamic-page-renderer/ui";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
}

export default function FAQ({
  title = "Preguntas frecuentes",
  subtitle = "Encuentra respuestas a las preguntas más comunes.",
  items,
  defaultOpenIndex = -1,
  allowMultiple = false,
}: FAQProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex >= 0 ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        if (allowMultiple) {
          return [...prevIndexes, index];
        } else {
          return [index];
        }
      }
    });
  };

  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      <div className="space-y-4">
        {items.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span className="font-medium text-lg">{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndexes.includes(index) ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                openIndexes.includes(index) ? "max-h-96 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
