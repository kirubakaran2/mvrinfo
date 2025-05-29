"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
const logo =
  "https://res.cloudinary.com/dy2gwtbjb/image/upload/v1748512885/logopic_x6cajm.png";

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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
          : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
<div className="flex-shrink-0">
  <Link href="/" className="flex items-center justify-center">
    <div className="h-24 w-24 flex items-center justify-center rounded-tl-lg rounded-br-xl overflow-hidden">
      <img src={logo} alt="MVR Info Logo" className="h-20 w-20 object-contain" />
    </div>
  </Link>
</div>



          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) =>
              link.submenu ? (
                <DropdownMenu.Root key={link.name}>
                  <DropdownMenu.Trigger asChild>
                    <button className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors duration-200">
                      {link.name}
                      <ChevronDown
                        size={16}
                        className="ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[220px] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg p-2 z-50 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      sideOffset={10}
                    >
                      {link.submenu.map((subitem) => (
                        <DropdownMenu.Item key={subitem.name} asChild>
                          <Link
                            href={subitem.href}
                            className="text-sm leading-none text-gray-700 dark:text-gray-300 rounded-md flex items-center h-8 px-3 py-6 relative select-none outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
                          >
                            {subitem.name}
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md hover:shadow-emerald-500/20">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 p-2 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 bg-white dark:bg-gray-900 shadow-lg space-y-1">
          {links.map((link) => (
            <div
              key={link.name}
              className="border-b border-gray-100 dark:border-gray-800 last:border-0"
            >
              {link.submenu ? (
                <div className="py-2">
                  <button
                    onClick={() => toggleSubmenu(link.name)}
                    className="flex justify-between items-center w-full px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-left transition-colors duration-200"
                  >
                    <span className="font-medium">{link.name}</span>
                    {openSubmenu === link.name ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openSubmenu === link.name
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 py-1 space-y-1">
                      {link.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-md hover:shadow-emerald-500/20"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown animations */}
      <style jsx global>{`
        @keyframes slideUpAndFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRightAndFade {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDownAndFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeftAndFade {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
