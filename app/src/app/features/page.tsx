import { Suspense } from "react";
import { getPageData } from "@/lib/pageData";
import DynamicPageRenderer from "@/components/DynamicPageRenderer";

// Metadatos estáticos para la página
export const metadata = {
  title: "Características - Dynamic Page Renderer",
  description:
    "Explora todas las características y funcionalidades de nuestro sistema",
};

export default function FeaturesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse p-8 text-center">
            <div className="h-8 bg-gray-200 rounded-full w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full max-w-md mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 max-w-md mx-auto"></div>
          </div>
        </div>
      }
    >
      <FeaturesContent />
    </Suspense>
  );
}

async function FeaturesContent() {
  // Obtener datos específicamente del archivo features.json
  const pageData = await getPageData("features");

  if (!pageData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-2xl font-bold mb-2">Contenido no encontrado</h1>
        <p className="text-gray-600">
          No se pudo cargar la información de características. Por favor
          verifica que el archivo features.json existe en la carpeta data.
        </p>
      </div>
    );
  }

  return <DynamicPageRenderer pageData={pageData} />;
}
