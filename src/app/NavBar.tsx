"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import Button from "./(components)/Button";
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { label: "Home", path: "/" },
    { label: "Why Us", path: "/about" },
    { label: "Market", path: "/market" },
  ];

  const renderedLinks = links.map((link) => {
    const isActive = pathname === link.path;
    return (
      <Link href={link.path} key={link.label}>
        <li className={ isActive ? "mr-10 uppercase p-2 bg-burgundy rounded-md text-logo  text-xl":"mr-10 uppercase text-logo p-2  text-xl"}>
          {link.label}
        </li>
      </Link>
    );
  });

  const renderedLinksMobile = links.map((link) => {
    return (
      <Link href={link.path} key={link.label}>
        <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
          {link.label}
        </li>
      </Link>
    );
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`fixed w-full h-24 shadow-xl ${
        isScrolled ? "z-20 bg-transparent/50" : ""
      }`}
    >
      <div className="flex justify-between items-center h-full w-full px-2 sm:px-16">
        <div className="p-2">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width="100"
              height="75"
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">{renderedLinks}</ul>
        </div>
        <div className=" gap-4 items-center hidden sm:flex">
            <div className="cursor-pointer text-burgundy">SIGN IN</div>
          <Link href="/register">
            <Button register navbar>REGISTER</Button>
          </Link>
        </div>
        <div onClick={handleClick} className="sm:hidden cursor-pointer p-5">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          open
            ? "fixed left-0 top-0 w-[65%]  sm:block h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleClick} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>{renderedLinksMobile}</ul>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/register">
            <Button register onClick={() => setOpen(false)}>REGISTER</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
