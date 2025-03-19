import { Suspense } from "react";
import DynamicPageRenderer from "@/components/DynamicPageRenderer";
import { getPageData } from "@/lib/pageData";

// Metadatos estáticos para la página principal
export const metadata = {
  title: "Dynamic Page Renderer - Inicio",
  description:
    "Sistema de renderizado dinámico de páginas con Next.js 15 y React 19",
};

// Componente separado para usar async/await con Suspense
async function HomeContent() {
  const pageData = await getPageData("home");

  return <DynamicPageRenderer pageData={pageData} />;
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-xl">Cargando...</div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
