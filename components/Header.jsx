import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="md:py-12 py-8 text-white">
      <div className="container mx-auto bg-black flex justify-between items-center">
        <Link href="/">
          <h1 className="flex font-semibold text-4xl">
            Syerik <div className="text-accent">.</div>
          </h1>
        </Link>
        <div className="md:flex hidden items-center gap-8">
          <Nav />
          <Button>Hire me</Button>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
