import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div className="bg-black py-10 w-full">
            <div className="w-full bg-red-500 h-10">
                <p className="font-semibold text-white">Fresh fast delivered</p>
            </div>
            <div className="p-10 flex gap-4">
                <div className="mr-10">
                    <img src="footer-logo.svg" />
                </div>
                <div>
                    <p className="text-gray-500">NOMNOM</p>
                    <p className="text-white">Home</p>
                    <p className="text-white">Contact us</p>
                    <p className="text-white">Delivery zone</p>
                </div>
                <div>
                    <p className="text-gray-500">MENU</p>
                    <p className="text-white">Appetizers</p>
                    <p className="text-white">Salads</p>
                    <p className="text-white">Pizzas</p>
                    <p className="text-white">Lunch favorites</p>
                    <p className="text-white">Main dishes</p>
                </div>
                <div>
                    <p className="text-gray-500">MENU</p>
                    <p className="text-white">Side dish</p>
                    <p className="text-white">Brunch</p>
                    <p className="text-white">Desserts</p>
                    <p className="text-white">Beverages</p>
                    <p className="text-white">Fish & Sea foods</p>
                </div>
                <div>
                    <p className="text-gray-500">MENU</p>
                    <div className="flex gap-2 items-center">
                        <img src="./facebook-logo.svg"></img>
                        <Instagram color="#FFFFFF" />
                    </div>
                </div>
            </div>
        </div>
    )
}