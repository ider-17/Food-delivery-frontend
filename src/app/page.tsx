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

export default function Home() {
  return (
    <div className="w-full bg-[#404040]">

      <Header />

      <img className="w-full" src="./home-bg.svg" />

      <div className="py-8 px-12">
        <p className="text-white font-semibold mb-4 ml-10">Categories</p>
        <div className="flex gap-2 items-center">
          <ChevronLeft color="#FFFFFF" className="p-1" />
          <button className="bg-[#EF4444] text-white py-1 px-3 rounded-2xl">Appetizers</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Salads</button>
          <button className="bg-white py-1 px-3 rounded-2xl" >Pizzas</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Lunch favorites</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Main dishes</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Fish * Sea foods</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Side dish</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Brunch</button>
          <button className="bg-white py-1 px-3 rounded-2xl">Desserts</button>
          <ChevronRight color="#FFFFFF" className="p-1" />
        </div>
      </div>

      <div className="py-10 px-22">
        <p className="text-white font-semibold mb-4">Appetizers</p>
        <div className="grid grid-cols-3 grid-rows-2 gap-9 w-full">

          <Dialog>
            <DialogTrigger>
              <div className="bg-white p-4 rounded-[20px]">
                <div className="relative">
                  <img className="rounded-sm w-full" src="./finger-food.svg" />
                  <div className="flex justify-center items-center bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white">+</div>
                </div>
                <div className="flex justify-between mt-5">
                  <p className="text-[#EF4444] font-semibold">Finger food</p>
                  <p>$12.99</p>
                </div>
                <p className="mt-2 text-left">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                <DialogDescription>
                  <div className="flex">
                    <img className="w-1/2" src="./finger-food.svg" />
                    <div className="p-4 w-[250px]">
                      <h5 className="text-[#EF4444] font-semibold mb-4">Sunshine Stackers</h5>
                      <p className="mb-20">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p>Total price</p>
                          <p className="text-black font-semibold">$12.99</p>
                        </div>
                        <div className="flex gap-2 items-center mt-10">
                          <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center border ">-</div>
                          <p>1</p>
                          <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center border ">+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
      </div>

      <div className="py-10 px-22">
        <p className="text-white font-semibold mb-4">Salads</p>
        <div className="grid grid-cols-3 grid-rows-1 gap-9">

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img src="./finger-food.svg" />
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
              <img src="./finger-food.svg" />
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
              <img src="./finger-food.svg" />
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

      <div className="py-10 px-22">
        <p className="text-white font-semibold mb-4">Lunch favorites</p>
        <div className="grid grid-cols-3 grid-rows-2 gap-9">

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img src="./finger-food.svg" />
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
              <img src="./finger-food.svg" />
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
              <img src="./finger-food.svg" />
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
              <img src="./finger-food.svg" />
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
              <img src="./finger-food.svg" />
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

      <div className="py-10 px-22">
        <p className="text-white font-semibold mb-4">Salads</p>
        <div className="grid grid-cols-3 grid-rows-1 gap-9">

          <div className="bg-white p-4 rounded-[20px]">
            <div className="relative">
              <img src="./finger-food.svg" />
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
              <img src="./finger-food.svg" />
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
              <img src="./finger-food.svg" />
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
