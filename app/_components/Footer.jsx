import Link from "next/link";
import React from "react";
import { FooterLinks } from ".";

export default function Footer() {
  return (
    <div className="lg:p-4">
      <h1 className="text-xl font-bold mb-4">Today's Featured Shopify apps</h1>

      <div className="space-y-2 lflex items-center">
        <Link
          href="/"
          className="md:font-semibold text-gray underline underline-offset-[20px] decoration-blue-500 px-2  md:px-3 py-1  hover:bg-hoverGray"
        >
          Profile
        </Link>
        <Link
          href="/"
          className="md:font-semibold text-gray  px-2  md:px-3 py-1  hover:bg-hoverGray"
        >
          Dashboard
        </Link>
        <Link
          href="/"
          className="md:font-semibold text-gray  px-2  md:px-3 py-1  hover:bg-hoverGray"
        >
          Settings
        </Link>
        <Link
          href="/"
          className="md:font-semibold text-gray  px-2  md:px-3 py-1  hover:bg-hoverGray"
        >
          Contacts
        </Link>
        <div className="flex justify-between ">
          <FooterLinks />
          <FooterLinks className={`md:flex hidden`} />
          <FooterLinks className={`md:flex hidden`} />
          <FooterLinks className={`md:flex hidden`} />
          <FooterLinks className={`md:flex hidden`} />
        </div>
      </div>
    </div>
  );
}
