import { BASE_URL } from "@/constants";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";


type FoodType = {
    _id: string;
    foodName: string;
    category: string;
    price: number;
    description: string;
};

type CategoryType = {
    createdAt: string;
    foods: FoodType[];
    name: string;
    updatedAt: string;
    _id: string;
}

const FoodList = async () => {
    console.log(process.env.BASE_URL)
    const response = await fetch(`${BASE_URL}/categories/with-foods`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const { categories } = await response.json();
    console.log(categories)

    return (
        <div className="text-white">
            {categories.map((category: CategoryType) => {
                return (
                    <div key={category._id} className="py-10 px-4 min-sm:px-22">
                        <p className="text-white font-semibold mb-4">{category.name}</p>
                        <div className="w-full flex flex-wrap gap-4 justify-center sm:grid-col-2
                        md:grid-col-3">
                            {category.foods.map((food) => {
                                return (
                                    <div key={food._id} className="w-[90%] sm:w-[48%] md:w-[31%]">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div className="bg-white p-4 rounded-[20px]">
                                                    <div className="relative h-fit">
                                                        <img className="w-full rounded-sm object-cover h-[200px] min-sm:h-[250px]" src="./finger-food.svg" />
                                                        <Button className="bg-white text-[#EF4444] rounded-full absolute bottom-[5%] right-[5%] w-11 h-11 hover:bg-[#EF4444] hover:text-white" variant="secondary">+</Button>
                                                    </div>
                                                    <div className="flex justify-between mt-5">
                                                        <p className="text-[#EF4444] font-semibold">{food.foodName}</p>
                                                        <p className="text-black font-semibold">{`${food.price}₮`}</p>
                                                    </div>
                                                    <p className="mt-2 text-black">{food.description}</p>
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
                                                        <div className="flex justify-between items-center min-sm:mt-26">
                                                            <div>
                                                                <p>Total price</p>
                                                                <p className="font-semibold">$12.99</p>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <Minus className="border rounded-full p-1" />
                                                                <p>1</p>
                                                                <Plus className="border rounded-full p-1" />
                                                            </div>
                                                        </div>
                                                        <DialogFooter className="w-full flex items-end sm:justify-center mt-4">
                                                            <Button className="w-full rounded-2xl" type="submit">Add to cart</Button>
                                                        </DialogFooter>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
                // return (
                //     <div>
                //         <p>{category.name}</p>
                //         <div>{category.foods.map((food) => {
                //             return (
                //                 <div key={food._id}>
                //                     <div className="flex gap-2">
                //                         <p>{food.foodName}</p>
                //                         <p>{food.price}</p>
                //                     </div>
                //                 </div>
                //             )
                //         })}</div>
                //     </div>
                // )
            })}
        </div>
    );
};

export default FoodList;