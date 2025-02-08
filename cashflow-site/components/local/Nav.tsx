"use client";

// components/Nav.tsx
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust this import based on your shadcn setup
import React from "react";
import Image from "next/image";
import { ContainerIcon } from "lucide-react";
import Container from "./Container";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <nav className="bg-white ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image
              src="/logo.png"
              width={160}
              height={160}
              alt="company logo"
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-gray-900"
            >
              How it works
            </Link>
            <Link
              href="/features"
              className="text-gray-600 hover:text-gray-900"
            >
              Our Features
            </Link>
            <Link
              href="/subscription"
              className="text-gray-600 hover:text-gray-900"
            >
              Subscription
            </Link>
            <Link href="/team" className="text-gray-600 hover:text-gray-900">
              Our Team
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </div>
          {/* Shadcn UI Button for Contact Us */}
          <Link href="/contact" className="hidden lg:flex">
            <Button variant="default" className="ml-4">
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-inner text-center">
            <div className="px-4 pt-8 pb-8 space-y-6">
              <Link
                href="/how-it-works"
                className="block text-gray-600 hover:text-gray-900"
              >
                How it works
              </Link>
              <Link
                href="/features"
                className="block text-gray-600 hover:text-gray-900"
              >
                Our Features
              </Link>
              <Link
                href="/subscription"
                className="block text-gray-600 hover:text-gray-900"
              >
                Subscription
              </Link>
              <Link
                href="/team"
                className="block text-gray-600 hover:text-gray-900"
              >
                Our Team
              </Link>
              <Link
                href="/faq"
                className="block text-gray-600 hover:text-gray-900"
              >
                FAQ
              </Link>
              <Link href="/contact">
                <Button variant="default" className="w-full mt-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Nav;
