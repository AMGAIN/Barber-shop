export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book", href: "/booking" },
  { label: "Admin", href: "/admin" },
  { label: "Profile", href: "/profile" },
] as const;

export function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isAdminPath(pathname: string) {
  return isActivePath(pathname, "/admin");
}
