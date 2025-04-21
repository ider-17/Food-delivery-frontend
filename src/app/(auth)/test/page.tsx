import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Coffee } from "lucide-react";

export default function ByMeCoffeeDonationCreator() {
    return (
        <div className="w-full h-screen">

            <div className="bg-white flex w-full h-[56px] items-center justify-center">
                <div className="w-[90%] h-[40px] flex justify-between">
                    <div className="w-[151px] h-[24px] flex gap-[10px] items-center">
                        <Coffee />
                        <p className="text-black font-bold">Buy Me Coffee</p>
                    </div>
                    <div className="w-[182px] h-[40px] flex gap-2 items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="w-[83px] h-[20px] font-[500]">Jake</p>
                        <ChevronDown size={20} />
                    </div>
                </div>
            </div>

            <div className="w-full"></div>
        </div>
    )
}