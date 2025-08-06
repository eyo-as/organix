"use client";

import dynamic from "next/dynamic";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NoSSR = dynamic(
  () => import("../ui/ModeToggle").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const Nav = () => {
  return (
    <nav className="w-full border-b shadow-sm px-4 py-3 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Organix
      </Link>
      <div className="space-x-2">
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <span>
          <NoSSR />
        </span>
      </div>
    </nav>
  );
};

export default Nav;
