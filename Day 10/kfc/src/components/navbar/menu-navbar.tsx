"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

function MenuNavbar() {
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <center>
      <nav className="max-w-[1070px] h-[40px] overflow-x-scroll flex flex-row gap-16 whitespace-nowrap no-scrollbar border-b-[1px] border-[#ccc] mx-[15px]">
        <a
          href="#special"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "special" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "special")}
        >
          SPECIAL
        </a>
        <a
          href="#combo"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "combo" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "combo")}
        >
          COMBO
        </a>
        <a
          href="#kfc-bucket"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "kfc-bucket" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "kfc-bucket")}
        >
          KFC BUCKET
        </a>
        <a
          href="#ala-carte-chicken"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "ala-carte-chicken"
              ? "border-b-4 border-[#e3022b] pt-1"
              : ""
          }`}
          onClick={() => setFocus(() => "ala-carte-chicken")}
        >
          ALA CARTE CHICKEN
        </a>
        <a
          href="#ala-carte"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "ala-carte" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "ala-carte")}
        >
          ALA CARTE
        </a>
        <a
          href="#drink"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "drink" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "drink")}
        >
          DRINK
        </a>
        <a
          href="#kids-meal"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "kids-meal" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "kids-meal")}
        >
          KIDS MEAL
        </a>
        <a
          href="#coffee"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "coffee" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "coffee")}
        >
          COFFEE
        </a>
        <a
          href="#breakfast"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "breakfast" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "breakfast")}
        >
          BREAKFAST
        </a>
        <a
          href="#dessert"
          className={`flex items-center text-lg  justify-center font-bold ${
            focus === "special" ? "border-b-4 border-[#e3022b] pt-1" : ""
          }`}
          onClick={() => setFocus(() => "dessert")}
        >
          DESSERT
        </a>
      </nav>
    </center>
  );
}

export default MenuNavbar;
