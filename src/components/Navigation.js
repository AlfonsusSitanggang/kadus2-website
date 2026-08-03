"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    path: "/",
    label: "Beranda",
  },
  {
    label: "Tentang",
    children: [
      {
        path: "/profil",
        label: "Profil Kadus",
      },
      {
        path: "/sejarah",
        label: "Sejarah Kadus",
      },
    ],
  },
  {
    path: "/statistik",
    label: "Statistik",
  },
  {
    path: "/umkm",
    label: "UMKM",
  },
  {
    path: "/potensi",
    label: "Potensi",
  },
  {
    path: "/peta",
    label: "Peta",
  },
  
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [isTentangOpen, setIsTentangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkLoginStatus = async () => {
      if (!isMounted) return;

      setIsLoading(true);

      try {
        const response = await fetch("/api/check-auth");
        const data = await response.json();

        if (isMounted) {
          setIsLoggedIn(data.isLoggedIn);
        }
      } catch (error) {
        console.error("Failed to check auth status:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    checkLoginStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsTentangOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      setIsLoggedIn(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const isActivePath = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const isTentangActive = isActivePath("/profil") || isActivePath("/sejarah");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Nama Website */}
        <Link href="/" className="flex items-center">
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight">
              Kadus 2 Kecemen
            </span>

            <span className="hidden text-xs text-muted-foreground sm:block">
              Manisrenggo, Klaten
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsTentangOpen((prev) => !prev)}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      "text-muted-foreground hover:bg-muted hover:text-foreground",
                      isTentangActive && "bg-muted text-foreground",
                    )}
                  >
                    {item.label}

                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isTentangOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {isTentangOpen && (
                    <div className="absolute left-0 top-full mt-2 w-52 rounded-lg border bg-background p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors",
                            "text-muted-foreground hover:bg-muted hover:text-foreground",
                            isActivePath(child.path) &&
                              "bg-muted font-medium text-foreground",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:bg-muted hover:text-foreground",
                  isActivePath(item.path) && "bg-muted text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {!isLoading && isLoggedIn && (
            <div className="hidden items-center gap-2 md:flex">
              <Button onClick={handleLogout} variant="outline">
                Keluar
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Buka menu navigasi"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Navigation Mobile */}
      {isMobileMenuOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container mx-auto space-y-1 px-4 py-4">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setIsTentangOpen((prev) => !prev)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium",
                        "text-muted-foreground hover:bg-muted hover:text-foreground",
                        isTentangActive && "bg-muted text-foreground",
                      )}
                    >
                      {item.label}

                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isTentangOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {isTentangOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm",
                              "text-muted-foreground hover:bg-muted hover:text-foreground",
                              isActivePath(child.path) &&
                                "bg-muted font-medium text-foreground",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium",
                    "text-muted-foreground hover:bg-muted hover:text-foreground",
                    isActivePath(item.path) && "bg-muted text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {!isLoading && isLoggedIn && (
              <div className="mt-4 border-t pt-4">
                <div className="space-y-2">
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full"
                  >
                    Keluar
                  </Button>
                </div>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}