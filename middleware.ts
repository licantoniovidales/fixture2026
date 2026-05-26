export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/tournaments/:path*",
    "/api/tournaments/:path*",
    "/api/teams/:path*",
    "/api/fixture/:path*",
    "/api/exports/:path*",
  ],
};
