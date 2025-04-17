"use client";

import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/constants";
import { CircleUserRound, ImageIcon, LayoutDashboard, Pen, Plus, Settings, Truck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import Image from "next/image";


type CategoryType = {
    name: string;
    _id: string;
    foods: [];
}

export default function AdminPage() {

    const [categories, setCategories] = useState([])

    const categoryFetch = async () => {
        const response = await fetch(`${BASE_URL}/categories/with-foods`);

        const { categories } = await response.json();

        console.log(categories);

        setCategories(categories);

    };

    useEffect(() => {
        categoryFetch();
    }, []);

    return (
        <div className="w-full h-screen flex bg-[#F4F4F5]">
            <div className="bg-white flex flex-col items-center px-5 py-9">
                <Link href="/">
                    <div className="w-fit cursor-pointer">
                        <img className="w-[165px] h-[44px]" src="./admin-logo.svg" />
                    </div>
                </Link>
                <Button className="w-[165px] h-[40px] rounded-full mt-10">
                    <LayoutDashboard />
                    Food menu
                </Button>
                <div className="mt-6 flex gap-[10px] w-[165px] h-[40px] justify-center">
                    <Truck /> Orders
                </div>
                <div className="mt-6 flex gap-[10px] w-[165px] h-[40px] justify-center">
                    <Settings /> Settings
                </div>
            </div>

            <div className="p-6 w-full flex flex-col gap-6">
                <div className="bg-white rounded-xl w-full p-6">
                    <div className="flex justify-end">
                        <CircleUserRound className="rounded full" size={40} />
                    </div>
                    <h1 className="font-semibold text-2xl">Dishes category</h1>
                    <div className="flex gap-3 w-full flex-wrap mt-4">
                        {categories.map((c: CategoryType) => {
                            return (
                                <div key={c._id} className="border rounded-full py-2 px-4 flex gap-2">
                                    <p>{c.name}</p>
                                    <p className="text-white bg-black px-3 rounded-full">{c.foods.length}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="bg-white rounded-xl p-5 flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl">Appetizers</h1>
                    <div className="flex gap-4 flex-wrap">

                        <div className="w-[270px] h-[240px] flex justify-center items-center border border-dashed rounded-3xl border-[#EF4444]">
                            <Dialog>
                                <DialogTrigger>
                                    <div>
                                        <Plus className="rounded-full justify-self-center bg-[#EF4444] p-3 hover:bg-white text-[#FFFFFF] border border-[#EF4444] hover:text-[#EF4444] mb-6" size={40} />
                                        <div>Add new Dish to Salads</div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="w-[460px] h-[592px] p-6">
                                    <DialogHeader>
                                        <DialogTitle>Add new Dish to Appetizers</DialogTitle>
                                        <DialogDescription>
                                            <div>
                                                <div className="flex gap-6 mt-6">
                                                    <div>
                                                        <div className="mb-2 font-semibold text-black">Food name</div>
                                                        <Input placeholder="Type food name..." />
                                                    </div>
                                                    <div>
                                                        <div className="mb-2 font-semibold text-black">Food price</div>
                                                        <Input placeholder="Enter price..." />
                                                    </div>
                                                </div>
                                                <div className="mt-6 font-semibold text-black">
                                                    <div className="mb-2 font-semibold text-black">Ingredients</div>
                                                    <Input placeholder="List ingredients" className="w-[412px] h-[90px]" />
                                                </div>
                                                <div className="mt-6 font-semibold text-black">
                                                    <div className="mb-2 font-semibold text-black">Food image</div>
                                                    <div className="w-[412px] h-[138px] border border-dashed border-blue-200 rounded-md bg-gray-50 p-4 flex flex-col items-center justify-center text-gray-500">
                                                        <ImageIcon className="mb-2" size={24} />
                                                        <div className="text-sm">Choose a file or drag & drop it here</div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 w-[412px] h-[64px] flex justify-end items-end">
                                                    <Button>Add Dish</Button>
                                                </div>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                        </div>

                        <div className="w-[270px] h-[240px] flex justify-center items-center border border-dashed rounded-3xl border-[#EF4444] p-4">
                            <Dialog>
                                <div>
                                    <div className="w-[238px] h-[129px] rounded-md relative mb-5">
                                        <img src="./finger-food.svg" className="w-[238px] h-[129px] object-cover rounded-md self-start"></img>
                                        <DialogTrigger>
                                            <div className="absolute bottom-[5%] right-[5%] text-[#EF4444]">
                                                <Pen className="rounded-full bg-white p-3 hover:bg-[#EF4444] hover:text-white" size={40} />
                                            </div>
                                        </DialogTrigger>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="font-semibold text-md text-[#EF4444]">Burrata Caprese</div>
                                        <div>14000₮</div>
                                    </div>

                                    <div>Fluffy powdered sugar.</div>

                                </div>

                                <DialogContent className="w-[460px] h-[592px] p-6">
                                    <DialogHeader>
                                        <DialogTitle>Add new Dish to Appetizers</DialogTitle>
                                        <DialogDescription>
                                            <div>
                                                <div className="flex gap-6 mt-6">
                                                    <div>
                                                        <div className="mb-2 font-semibold text-black">Food name</div>
                                                        <Input placeholder="Type food name..." />
                                                    </div>
                                                    <div>
                                                        <div className="mb-2 font-semibold text-black">Food price</div>
                                                        <Input placeholder="Enter price..." />
                                                    </div>
                                                </div>
                                                <div className="mt-6 font-semibold text-black">
                                                    <div className="mb-2 font-semibold text-black">Ingredients</div>
                                                    <Input placeholder="List ingredients" className="w-[412px] h-[90px]" />
                                                </div>
                                                <div className="mt-6 font-semibold text-black">
                                                    <div className="mb-2 font-semibold text-black">Food image</div>
                                                    <div className="w-[412px] h-[138px] border border-dashed border-blue-200 rounded-md bg-gray-50 p-4 flex flex-col items-center justify-center text-gray-500">
                                                        <ImageIcon className="mb-2" size={24} />
                                                        <div className="text-sm">Choose a file or drag & drop it here</div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 w-[412px] h-[64px] flex justify-end items-end">
                                                    <Button>Add Dish</Button>
                                                </div>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
};