import { notFound } from "next/navigation";
import { Suspense } from "react";
import DynamicPageRenderer from "@/components/DynamicPageRenderer";
import { getPageData } from "@/lib/pageData";

// Definición de tipos mejorada para Next.js 15
type PageProps = {
  params: Promise<{ slug: string[] }>;
};
// Generación de metadatos dinámica
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const pageData = await getPageData(slug.join("/") ?? "home");

  if (!pageData) {
    return {
      title: "Página no encontrada",
      description: "La página que buscas no existe",
    };
  }

  return {
    title: pageData.title,
    description: pageData.description || "Dynamic Page Renderer",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // Usar React 19 Suspense para cargar datos
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-xl">Cargando...</div>
        </div>
      }
    >
      <PageContent slug={slug.join("/") ?? "home"} />
    </Suspense>
  );
}

// Componente separado para usar async/await con Suspense
async function PageContent({ slug }: { slug: string }) {
  console.log("slug pagecontent,", slug);

  const pageData = await getPageData(slug);

  if (!pageData) {
    notFound();
  }

  return <DynamicPageRenderer pageData={pageData} />;
}
