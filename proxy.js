export { default } from "next-auth/proxy";

export const config = {
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};
