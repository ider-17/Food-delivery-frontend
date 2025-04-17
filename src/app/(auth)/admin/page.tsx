"use client";

import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/constants";
import { LayoutDashboard, Settings, Truck } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
    async function categoryFetch() {
        const response = await fetch(`${BASE_URL}/categories`);
        const { categories } = await response.json();

        console.log(categories, "res")
    };

    return (
        <div className="w-full h-screen flex bg-[#F4F4F5]">
            <div className="w-[205px] bg-white flex flex-col items-center">
                <Link href="/">
                    <div className="w-fit cursor-pointer mt-9">
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
            <div className="p-6">
                <div className="bg-white">
                </div>
            </div>
        </div>
    )
};