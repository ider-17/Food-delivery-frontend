import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export function FoodDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
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
            </DialogTrigger>
            <DialogContent className="w-[80%] min-sm:max-w-[425px]">
                <div className="flex gap-2">
                    <img className="w-1/2 rounded-sm" src="./finger-food.svg" />
                    <div>
                        <DialogHeader>
                            <DialogTitle className="text-[#EF4444]">Sunshine Stackers</DialogTitle>
                            <DialogDescription>
                                Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-between items-center mt-26">
                            <div>
                                <p>Total price</p>
                                <p className="font-semibold">$12.99</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-7 h-7 rounded-full border flex justify-center items-center">-</button>
                                <p>1</p>
                                <button className="w-7 h-7 rounded-full border flex justify-center items-center">+</button>
                            </div>
                        </div>
                        <DialogFooter className="w-full flex items-end sm:justify-center mt-4">
                            <Button className="w-full rounded-2xl" type="submit">Add to cart</Button>
                        </DialogFooter>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}