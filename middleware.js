import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0"

export async function middleware(request) {
    try {
        const authRes = await auth0.middleware(request);

        // authentication routes — let the middleware handle it
        if (request.nextUrl.pathname.startsWith("/auth")) {
            return authRes;
        }

        // public routes — no need to check for session
        if (request.nextUrl.pathname === ("/")) {
            return authRes;
        }

        const { origin } = new URL(request.url)
        const session = await auth0.getSession()

        // user does not have a session — redirect to login
        if (!session) {
            return NextResponse.redirect(`${origin}/auth/login`)
        }

        return authRes
    } catch (err) {
        // If the error is JWEInvalid or similar, handle gracefully
        if (err.name === "JWEInvalid" || err.message.includes("Invalid Compact JWE")) {
            // Option 1: Redirect to login
            // return NextResponse.redirect(new URL('/api/auth/login', request.url));

            // Option 2: Just let the request through (for public pages)
            return NextResponse.next();
        }
        // For other errors, rethrow
        throw err;
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - api (API routes)
         */
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api).*)",
    ],
}