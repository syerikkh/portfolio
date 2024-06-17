import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="md:py-12 py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="flex font-semibold md:text-4xl text-2xl">
            Syerik <div className="text-accent">.</div>
          </h1>
        </Link>
        <div className="md:flex hidden items-center gap-8">
          <Nav />
          <Button className="bg-accent rounded-2xl hover:bg-accent-hover text-primary">
            Hire me
          </Button>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
