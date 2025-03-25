import { ChevronLeft, ChevronRight, MapPin, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div className="w-full h-screen bg-[#404040]">
      <div className="w-full h-15 bg-black flex justify-between px-10 items-center">
        <div>
          <img src="./header-logo.svg" />
        </div>
        {/* <div className="flex gap-3">
          <div className="flex bg-white rounded-3xl py-2 items-center px-4 gap-1">
            <MapPin color="#EF4444" />
            <p className="text-[#EF4444]">Delivery address:</p>
            <p className="text-gray-500">Add Location</p>
            <ChevronRight color="#7A8290" />
          </div>
          <Button className="rounded-3xl" variant="outline" size="icon">
            <ShoppingCart />
          </Button>

        </div> */}
        <div className="flex gap-3">
          <Button className="rounded-3xl hover:bg-[#EF4444] hover:text-white border-0" variant="outline">Sign up</Button>
          <Button className="rounded-3xl bg-[#EF4444] border-0 text-white" variant="outline">Log in</Button>
        </div>
      </div>
    </div>
  );
}
