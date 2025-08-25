import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useThemeStore } from "@/store/useThemeStore";
import { LuMoon, LuSun } from "react-icons/lu";
import Link from "next/link";
import { useState } from "react";

export default function SideBar() {
  const { theme, toggleTheme } = useThemeStore();
  const [open, setOpen] = useState<boolean>(false);

  const menu: { title: string; path: string }[] = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Admissions", path: "/admissions" },
    { title: "Faculty", path: "/faculty" },
    { title: "Events", path: "/events" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex items-center lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-2">
            <RxHamburgerMenu className="w-6 h-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-64">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <SheetDescription></SheetDescription>

          {/* Menu Links */}
          <ul className="flex flex-col gap-4 mt-4">
            {menu.map((nav) => (
              <li key={nav.path}>
                <Link
                  href={nav.path}
                  className="block py-2 px-4 rounded hover:bg-muted duration-150"
                  onClick={() => setOpen(false)} // close sidebar on click
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer with theme toggle */}
          <SheetFooter className="mt-auto">
            <Button
              type="button"
              onClick={toggleTheme}
              variant="ghost"
              className="flex items-center gap-2 w-full justify-start"
            >
              {theme === "light" ? <LuMoon /> : <LuSun />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
