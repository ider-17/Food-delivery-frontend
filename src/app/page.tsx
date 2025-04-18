"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import * as React from "react";
import FoodList from "./_components/FoodList";


export default function Home() {

  return (
    <div className="w-full bg-[#404040]">

      <Header />

      <img className="w-full" src="./home-bg.svg" />

      <div className="py-8 px-4 min-sm:px-12">
        <p className="text-white font-semibold mb-4 min-sm:ml-10">Categories</p>
        <div className="flex">
          {/* <ChevronLeft color="#FFFFFF" className="mt-1" /> */}
          <div className="flex gap-2 items-center overflow-x-auto whitespace-nowrap pb-4 px-10 [&>*]:bg-white [&>*]:py-1 [&>*]:px-3 [&>*]:rounded-2xl">

            <button className="text-white !bg-[#EF4444]">Appetizers</button>
            <button>Salads</button>
            <button>Pizzas</button>
            <button>Lunch favorites</button>
            <button>Main dishes</button>
            <button>Fish * Sea foods</button>
            <button>Side dish</button>
            <button>Brunch</button>
            <button>Desserts</button>

          </div>
          {/* <ChevronRight color="#FFFFFF" className="mt-1" /> */}
        </div>
      </div>

      <FoodList />

      <Footer />

    </div >
  );
}