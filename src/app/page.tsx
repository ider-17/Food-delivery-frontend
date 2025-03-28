import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { FoodDialog } from "@/components/FoodDialog";


export default function Home() {

  return (
    <div className="w-full bg-[#404040]">

      <Header />

      <img className="w-full" src="./home-bg.svg" />

      <div className="py-8 px-4 min-sm:px-12">
        <p className="text-white font-semibold mb-4 min-sm:ml-10">Categories</p>
        <div className="flex">
          {/* <ChevronLeft color="#FFFFFF" className="mt-1" /> */}
          <div className="flex gap-2 items-center overflow-x-auto whitespace-nowrap pb-4">

            <button className="bg-[#EF4444] text-white py-1 px-3 rounded-2xl">Appetizers</button>
            <button className="bg-white py-1 px-3 rounded-2xl">Salads</button>
            <button className="bg-white py-1 px-3 rounded-2xl">Pizzas</button>
            <button className="bg-white py-1 px-3 rounded-2xl">Lunch favorites</button>
            <button className="bg-white py-1 px-3 rounded-2xl">Main dishes</button>
            <button className="bg-white py-1 px-3 rounded-2xl">Fish * Sea foods</button>
            <button className="bg-white py-1 px-3 rounded-2xl">Side dish</button>
            <button className="bg-white py-1 px-3 rounded-2xl">Brunch</button>
            <button className="bg-white py-1 px-3 rounded-2xl">Desserts</button>

          </div>
          {/* <ChevronRight color="#FFFFFF" className="mt-1" /> */}
        </div>
      </div>

      <div className="py-10 px-4 min-sm:px-22">
        <p className="text-white font-semibold mb-4">Appetizers</p>
        <div className="flex flex-col gap-8 sm:grid-cols-2 min-sm:grid min-lg:grid-cols-3 min-md:grid-rows-2 min-sm:gap-9 w-full">

          <FoodDialog />
          <FoodDialog />
          <FoodDialog />
          <FoodDialog />
          <FoodDialog />
          <FoodDialog />

        </div>
      </div>

      <div className="py-10 px-4 min-sm:px-22">
        <p className="text-white font-semibold mb-4">Salads</p>
        <div className="flex flex-col gap-8 sm:grid-cols-2 min-sm:grid min-lg:grid-cols-3 max-sm:grid-rows-2 min-sm:gap-9 w-full">

          <FoodDialog />
          <FoodDialog />
          <FoodDialog />

        </div>
      </div>

      <div className="py-10 px-4 min-sm:px-22">
        <p className="text-white font-semibold mb-4">Lunch favorites</p>
        <div className="flex flex-col gap-8 sm:grid-cols-2 min-sm:grid min-lg:grid-cols-3 min-md:grid-rows-2 min-sm:gap-9 w-full">

          <FoodDialog />
          <FoodDialog />
          <FoodDialog />
          <FoodDialog />
          <FoodDialog />

        </div>
      </div>

      <div className="py-10 px-4 min-sm:px-22">
        <p className="text-white font-semibold mb-4">Salads</p>
        <div className="flex flex-col gap-8 sm:grid-cols-2 min-sm:grid min-lg:grid-cols-3 max-sm:grid-rows-2 min-sm:gap-9 w-full">

          <FoodDialog />
          <FoodDialog />
          <FoodDialog />

        </div>
      </div>

      <Footer />
    </div >
  );
}
