import { NextResponse } from "next/server";

// Rotas que não exigem autenticação
const publicRoutes = ["/", "/auth"];

export function middleware(request) {
  // Obter o token do cookie
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Verificar se a rota atual é pública
  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith("/auth")
  );

  // Se não for rota pública e não tiver token, redirecionar para login
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Se for página de login e já estiver autenticado, redirecionar para dashboard
  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/pages/home", request.url));
  }

  // Continuar com a requisição normalmente
  return NextResponse.next();
}

// Configurar em quais caminhos o middleware será aplicado
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};