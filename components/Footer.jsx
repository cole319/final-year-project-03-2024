import React from "react";

import Link from "next/link";

import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className=" bg-sky-950 py-8 px-8 lg:px-60 text-neutral-200">
      {/* <hr className="w-full h-[1px] mx-auto mt-8 bg-gradient-to-r from-slate-700 to-sky-600 border-0"></hr> */}

      <div className="flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 space-x-0 md:justify-between">
        <div>
          <h1 className="text-neutral-50 text-lg font-semibold">
            © 2024 Suryarghya Saha{" "}
            <span className="text-neutral-300 text-normal font-normal">&</span>{" "}
            Siddharth Toppo
          </h1>
          <h1 className="text-neutral-300">All rights reserved</h1>
        </div>
        <div className="flex space-x-6 justify-center">
          <Link
            className="cursor-pointer hover:underline flex items-center space-x-2 text-center"
            href="/"
          >
            <BsTwitterX className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
          </Link>
          <Link
            className="cursor-pointer hover:underline flex items-center space-x-2 text-center"
            href="/"
          >
            <BsFillEnvelopeFill className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
          </Link>
          <Link
            className="cursor-pointer hover:underline flex items-center space-x-2 text-center"
            href="/"
          >
            <BsLinkedin className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

// export default Footer;
