"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "../public/assets/logo.png";
const links = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "Life Insurance", href: "/products/life-insurance" },
      {
        name: "Whole Life Insurance Policy",
        href: "/products/whole-life-insurance",
      },
      {
        name: "Unit Linked Insurance Plan",
        href: "/products/unit-linked-insurance",
      },
      { name: "Term Insurance", href: "/products/term-insurance" },
      { name: "Health Insurance", href: "/products/health-insurance" },
      { name: "Individual Insurance", href: "/products/individual-insurance" },
      { name: "Family Insurance", href: "/products/family-insurance" },
      { name: "Group Insurance", href: "/products/group-insurance" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Portfolio Management", href: "/services/portfolio-management" },
      { name: "Investment Advice", href: "/services/investment-advice" },
      { name: "Financial Consultant", href: "/services/financial-consultant" },
      { name: "How to Invest?", href: "/services/how-to-invest" },
    ],
  },
  { name: "Learn", href: "/learn" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img src={logo.src} alt="MVR Info Logo" className="h-10 w-auto" />
              <span
                className="text-2xl font-bold text-black"
                style={{ fontFamily: "Poppins" }}
              >
                MVR
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {links.map((link) =>
                link.submenu ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild>
                      <button className="text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                        {link.name} <ChevronDown size={16} className="ml-1" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-56">
                      {link.submenu.map((subitem) => (
                        <DropdownMenuItem key={subitem.name} asChild>
                          <Link href={subitem.href} className="w-full">
                            {subitem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 rounded-full text-white">
              Get Started
            </Button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              className="text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          {links.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="pl-4 mt-2 space-y-1">
                    {link.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-base font-medium rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button
              size="sm"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
