import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default withAuth(
  async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const isAuth = await getToken({ req: request });
    const protectPages = ["/admin"];
    const isAuthRouter = pathname.startsWith("/sign-in");
    const isProtextRoute = protectPages.some((rou) => pathname.startsWith(rou));
    if (!isAuth && isProtextRoute) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    if (isAuth && isAuthRouter) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);
export const config = {
  matcher: ["/admin/:path*"],
};
