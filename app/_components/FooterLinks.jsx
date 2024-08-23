import Link from "next/link";
import React from "react";

export default function FooterLinks( {className}) {
  return (
    <div>
      <ul className={`flex flex-col space-y-2 my-5 text-gray ${className}`}>
        <Link href="/">About</Link>
        <Link href="/">Career</Link>
        <Link href="/">Brand Center</Link>
        <Link href="/">Blog</Link>
      </ul>
    </div>
  );
}
