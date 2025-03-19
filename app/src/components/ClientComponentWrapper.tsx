"use client";

import React, { Suspense, lazy } from "react";
import { ComponentConfig } from "@/lib/pageData";
import { Button, Input } from "@dynamic-page-renderer/ui";

// Importar componentes cliente usando lazy()
const Feature = lazy(() => import("./Feature"));
const Pricing = lazy(() => import("./Pricing"));
const ContactForm = lazy(() => import("./ContactForm"));
const FAQ = lazy(() => import("./FAQ"));

// Mapa de componentes cliente
const clientComponentMap: Record<string, React.ComponentType<any>> = {
  Button,
  Input,
  Feature,
  Pricing,
  ContactForm,
  FAQ,
};

// Componente loading para Suspense
const LoadingFallback = () => (
  <div className="animate-pulse p-4 bg-gray-50 rounded">
    <div className="h-6 bg-gray-200 rounded mb-3"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

interface ClientComponentWrapperProps {
  componentType: string;
  props: Record<string, any>;
  children?: ComponentConfig[] | string;
}

export default function ClientComponentWrapper({
  componentType,
  props,
  children,
}: ClientComponentWrapperProps) {
  const Component = clientComponentMap[componentType];

  if (!Component) {
    console.warn(`Client component type "${componentType}" not found`);
    return null;
  }

  let renderedChildren: React.ReactNode = null;

  if (children) {
    if (typeof children === "string") {
      renderedChildren = children;
    } else {
      renderedChildren = children.map((childConfig, index) => {
        // Renderiza recursivamente componentes hijos cliente
        if (childConfig.type in clientComponentMap) {
          return (
            <ClientComponentWrapper
              key={index}
              componentType={childConfig.type}
              props={childConfig.props || {}}
              children={childConfig.children}
            />
          );
        }

        // Renderiza componentes hijos con texto plano
        return <div key={index}>{String(childConfig.children)}</div>;
      });
    }
  }

  // Usar Suspense para componentes cargados de manera diferida (lazy)
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Component {...props}>{renderedChildren}</Component>
    </Suspense>
  );
}
