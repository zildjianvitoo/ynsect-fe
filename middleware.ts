export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/agenda",
    "/pengaturan",
    "/ask-the-pro",
    "/waste-database",
    "/forum/saved/:path",
    "/forum/user/:path",
  ],
};
