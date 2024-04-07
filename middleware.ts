export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/ask-the-pro", "/waste-database"],
};
