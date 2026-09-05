import { NextResponse, type NextRequest } from "next/server";

/** Send locale-less URLs to /en or /zh based on the browser's preferred language. */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (/^\/(en|zh)(\/|$)/.test(pathname)) return NextResponse.next();
  const accept = req.headers.get("accept-language") ?? "";
  const locale = /(^|,)\s*zh/i.test(accept) ? "zh" : "en";
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
