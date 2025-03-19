import { NextRequest, NextResponse } from "next/server";

// Configuración de tipos para el middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ejemplo de interceptación: métricas de rendimiento
  const response = NextResponse.next();

  // Añadir encabezados para seguridad (características de Next.js 15)
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Ejemplo: logging de rutas visitadas
  console.log(`[${new Date().toISOString()}] Acceso a ruta: ${pathname}`);

  return response;
}
