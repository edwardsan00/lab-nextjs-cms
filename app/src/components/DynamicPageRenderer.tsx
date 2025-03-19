import dynamic from "next/dynamic";
import { ComponentConfig, PageData } from "@/lib/pageData";
import { Card, Container } from "@dynamic-page-renderer/ui";
import ClientComponentWrapper from "./ClientComponentWrapper";

// Componentes del servidor
const Section = dynamic(() => import("./Section"), { ssr: true });
const Hero = dynamic(() => import("./Hero"), { ssr: true });
const Notification = dynamic(() => import("./Notification"), { ssr: true });

// No usar dynamic imports directamente en server components
// Los componentes cliente se cargarán a través de ClientComponentWrapper

interface DynamicPageRendererProps {
  pageData: PageData | null;
}

// Mapa de componentes, separando los de servidor y cliente
const serverComponentMap: Record<string, React.ComponentType<any>> = {
  Section,
  Hero,
  Container,
  Card,
  Notification,
};

// Los componentes cliente ahora se gestionan exclusivamente a través de ClientComponentWrapper
const clientComponentTypes = [
  "Button",
  "Input",
  "Feature",
  "Pricing",
  "ContactForm",
  "FAQ",
];

export default async function DynamicPageRenderer({
  pageData,
}: DynamicPageRendererProps) {
  const renderComponent = (
    config: ComponentConfig,
    index: number
  ): React.ReactNode => {
    const isClientComponent = clientComponentTypes.includes(config.type);

    // Para componentes del servidor
    if (!isClientComponent && config.type in serverComponentMap) {
      const Component = serverComponentMap[config.type];
      const props = config.props || {};
      let children: React.ReactNode = null;

      if (config.children) {
        if (typeof config.children === "string") {
          children = config.children;
        } else {
          children = config.children.map((childConfig, childIndex) =>
            renderComponent(childConfig, childIndex)
          );
        }
      }

      return (
        <Component key={index} {...props}>
          {children}
        </Component>
      );
    }

    // Para componentes del cliente
    if (isClientComponent) {
      return (
        <ClientComponentWrapper
          key={index}
          componentType={config.type}
          props={config.props || {}}
          children={config.children}
        />
      );
    }

    console.warn(`Component type "${config.type}" not found`);
    return null;
  };

  return (
    <>
      {/* Next.js 15 ya no permite tags <title> directos en las páginas, 
          se usan generateMetadata o metadata export en su lugar */}
      <main className="min-h-screen">
        {pageData?.components.map((config, index) =>
          renderComponent(config, index)
        )}
      </main>
    </>
  );
}
