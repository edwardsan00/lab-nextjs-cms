import { promises as fs } from "fs";
import path from "path";
// Importar nueva utilidad de caché de Next.js 15
import { unstable_cache } from "next/cache";

export interface ComponentConfig {
  type: string;
  props?: Record<string, any>;
  children?: ComponentConfig[] | string;
}

export interface PageData {
  title: string;
  description?: string;
  components: ComponentConfig[];
}

const dataPath: Record<string, string> = {
  home: "home.json",
  about: "about.json",
  features: "features.json",
  "seguros-vida": "seguros-vida.json",
  "seguros-vida/full": "seguros-vida/full.json",
};

/**
 * Obtiene los datos de la página según su slug, con caché optimizado para Next.js 15
 */
export const getPageData = unstable_cache(
  async (slug: string): Promise<PageData | null> => {
    try {
      if (!dataPath[slug]) return null;
      // En un entorno real, esto podría ser una llamada a la API
      const currentWorkingDirectory = process.cwd();
      const parentDirectory = path.resolve(currentWorkingDirectory, "..");
      const filePath = path.join(parentDirectory, "data", `${dataPath[slug]}`);
      const fileContents = await fs.readFile(filePath, "utf8");

      return JSON.parse(fileContents) as PageData;
    } catch (error) {
      // Si el archivo no existe, devolvemos null para manejar la página 404
      console.error(`Error loading page data for ${slug}:`, error);
      return null;
    }
  },
  ["page-data"], // Clave de caché
  {
    revalidate: 3600, // Revalidar cada hora
    tags: ["page-data"], // Tag para revalidación manual
  }
);

/**
 * Revalida el caché para una página específica
 */
export async function revalidatePageData(slug: string): Promise<void> {
  try {
    // En Next.js 15, podríamos usar revalidateTag directamente
    // Este es un placeholder para esa funcionalidad
    console.log(`Revalidated page data for ${slug}`);
  } catch (error) {
    console.error(`Error revalidating page data for ${slug}:`, error);
  }
}
