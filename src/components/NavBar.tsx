"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuMoon, LuSun } from "react-icons/lu";
import SideBar from "./SideBar";
import { useThemeStore } from "@/store/useThemeStore";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();

  const menu: { title: string; path: string }[] = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Admissions", path: "/admissions" },
    { title: "Faculty", path: "/faculty" },
    { title: "Events", path: "/events" },
    { title: "Contact", path: "/contact" },
    { title: "Careers", path: "/careers" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex gap-4 items-center">
            <Image
              src="/ictLogo.jpg"
              alt="Logo"
              width={32} // base width
              height={32} // base height (square fallback)
              style={{ height: "auto", width: "auto" }} // enforce aspect ratio
            />
            <Link
              href="/"
              className="hidden md:block text-lg font-bold text-gray-900 dark:text-white"
            >
              ICT Center
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="space-x-2">
              {menu.map((nav) => (
                <NavigationMenuItem key={nav.path}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={nav.path}
                      className="text-sm p-2 hover:bg-gray-200/20 rounded duration-150 ease-in-out"
                    >
                      {nav.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* Programs Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid p-2 w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <NavigationMenuItem className="p-2 hover:bg-gray-200/20 rounded duration-150 ease-in-out">
                      <Link href="/admissions">Web Developement</Link>
                      <p className="opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, laudantium?
                      </p>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="p-2 hover:bg-gray-200/20 rounded duration-150 ease-in-out">
                      <Link href="/admissions">Web Developement</Link>
                      <p className="opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, laudantium?
                      </p>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="p-2 hover:bg-gray-200/20 rounded duration-150 ease-in-out">
                      <Link href="/admissions">Web Developement</Link>
                      <p className="opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, laudantium?
                      </p>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="p-2 hover:bg-gray-200/20 rounded duration-150 ease-in-out">
                      <Link href="/admissions">Web Developement</Link>
                      <p className="opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, laudantium?
                      </p>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="p-2 hover:bg-gray-200/20 rounded duration-150 ease-in-out">
                      <Link href="/admissions">Web Developement</Link>
                      <p className="opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, laudantium?
                      </p>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="p-2 hover:bg-gray-200/20 rounded duration-150 ease-in-out">
                      <Link href="/admissions">Web Developement</Link>
                      <p className="opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, laudantium?
                      </p>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="p-2 hover:bg-gray-200/20 rounded duration-150 ease-in-out">
                      <Link href="/admissions">Web Developement</Link>
                      <p className="opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, laudantium?
                      </p>
                    </NavigationMenuItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons + Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Link href="/apply">
              <Button variant="secondary" size="sm" className="cursor-pointer">
                Apply Now
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm" className="cursor-pointer">
                Login
              </Button>
            </Link>
            <Button
              type="button"
              onClick={toggleTheme}
              className="hidden lg:block cursor-pointer"
              variant="ghost"
            >
              {theme === "light" ? <LuMoon /> : <LuSun />}
            </Button>
            <SideBar />
          </div>
        </div>
      </div>
    </nav>
  );
}
