"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
const logo = "https://res.cloudinary.com/dy2gwtbjb/image/upload/v1748418186/logo_vk74wp.png";

const links = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "Life Insurance", href: "/products/life-insurance" },
      { name: "Whole Life Insurance Policy", href: "/products/whole-life-insurance" },
      { name: "Unit Linked Insurance Plan", href: "/products/unit-linked-insurance" },
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
      setScrolled(window.scrollY > 10);
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
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img src={logo} alt="MVR Info Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-black" style={{ fontFamily: "Poppins" }}>
                MVR
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) =>
              link.submenu ? (
                <DropdownMenu.Root key={link.name}>
                  <DropdownMenu.Trigger asChild>
                    <button className="text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-1 z-50"
                    sideOffset={5}
                  >
                    {link.submenu.map((subitem) => (
                      <DropdownMenu.Item key={subitem.name} asChild>
                        <Link
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        >
                          {subitem.name}
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
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

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-4 pb-6 bg-white dark:bg-gray-900 shadow-lg space-y-2">
          {links.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <span>{link.name}</span>
                    <ChevronDown
                      className="transition-transform group-open:rotate-180"
                      size={16}
                    />
                  </summary>
                  <div className="pl-4 mt-2 space-y-1">
                    {link.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
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
                  className="block px-4 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
