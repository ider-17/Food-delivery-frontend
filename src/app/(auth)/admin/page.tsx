"use client";

import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/constants";
import { CircleUserRound, LayoutDashboard, Settings, Truck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
};