import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import * as React from "react"

import { CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <div className="w-full bg-[#404040]">

      <Header />

      <img className="w-full" src="./home-bg.svg" />

      <div className="py-8 px-4 min-sm:px-12">
        <p className="text-white font-semibold mb-4 min-sm:ml-10">Categories</p>
        <div className="flex gap-2 items-center overflow-x-auto whitespace-nowrap">

          {/* <Carousel className="w-full max-w-sm">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-[#EF4444] text-white py-1 px-3 rounded-2xl w-fit">Appetizers</div>
                  <div className="bg-white py-1 px-3 rounded-2xl w-fit">Salads</div>
                  <div className="bg-white py-1 px-3 rounded-2xl w-fit">Pizzas</div>
                  <div className="bg-white py-1 px-3 rounded-2xl w-fit">Lunch favorites</div>
                  <div className="bg-white py-1 px-3 rounded-2xl w-fit">Main dishes</div>
                  <div className="bg-white py-1 px-3 rounded-2xl w-fit">Fish * Sea foods</div>
                  <div className="bg-white py-1 px-3 rounded-2xl w-fit">Side dish</div>
                  <div className="bg-white py-1 px-3 rounded-2xl w-fit">Brunch</div>
                  <div className="bg-white py-1 px-3 rounded-2xl w-fit">Desserts</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}

          <ChevronLeft color="#FFFFFF" className="p-1" />
          <button className="bg-[#EF4444] text-white py-1 px-3 rounded-2xl">Appetizers</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Salads</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Pizzas</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Lunch favorites</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Main dishes</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Fish * Sea foods</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Side dish</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Brunch</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Desserts</button>
          <ChevronRight color="#FFFFFF" className="p-1" />
        </div>
      </div>

      <div className="py-10 px-4 min-sm:px-22">
        <p className="text-white font-semibold mb-4">Appetizers</p>
        <div className="flex flex-col gap-8 min-sm:grid min-sm:grid-cols-3 min-sm:grid-rows-2 min-sm:gap-9 w-full">


          {/* <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4">
                <div>
                  <img className="rounded-sm" src="./finger-food.svg" />
                  <div className="flex justify-between mt-5">
                    <h6 className="text-[#EF4444] font-semibold">Sunshine Stachers</h6>
                    <span className="font-semibold">$12.99</span>
                  </div>
                  <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
            </DialogContent>
          </Dialog> */}


        </div>
      </div>

      <div className="py-10 px-4 min-sm:px-22">
        <p className="text-white font-semibold mb-4">Salads</p>
        <div className="flex flex-col gap-8 min-sm:grid min-sm:grid-cols-3 min-sm:grid-rows-2 min-sm:gap-9 w-full">

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

        </div>
      </div>

      <div className="py-10 px-4 min-sm:px-22">
        <p className="text-white font-semibold mb-4">Lunch favorites</p>
        <div className="flex flex-col gap-8 min-sm:grid min-sm:grid-cols-3 min-sm:grid-rows-2 min-sm:gap-9 w-full">

        <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

        </div>
      </div>

      <div className="py-10 px-4 min-sm:px-22">
        <p className="text-white font-semibold mb-4">Salads</p>
        <div className="flex flex-col gap-8 min-sm:grid min-sm:grid-cols-3 min-sm:grid-rows-2 min-sm:gap-9 w-full">

        <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img className="w-full rounded-sm" src="./finger-food.svg" />
              <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-[#EF4444] font-semibold">Finger food</p>
              <p>$12.99</p>
            </div>
            <p className="mt-2">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
