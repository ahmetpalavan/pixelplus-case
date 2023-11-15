import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/user", request.url));
  }

  return NextResponse.next();
}
