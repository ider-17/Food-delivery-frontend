import { Copyright, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div className="bg-black py-10 w-full">
            <div className="w-full bg-red-500 h-10 flex items-center gap-5 overflow-x-auto">
                <p className="font-semibold text-white">Fresh fast delivered</p>
                <p className="font-semibold text-white">Fresh fast delivered</p>
                <p className="font-semibold text-white">Fresh fast delivered</p>
                <p className="font-semibold text-white">Fresh fast delivered</p>
                <p className="font-semibold text-white">Fresh fast delivered</p>
                <p className="font-semibold text-white">Fresh fast delivered</p>
            </div>

            <div className="m-4 min-sm:m-10 flex gap-4 min-sm:gap-20 border-b border-gray-500 pb-4">
                <div className="min-sm:mr-18">
                    <img src="footer-logo.svg" />
                </div>
                <div className="[&>*]:text-white">
                    <p className="text-gray-500">NOMNOM</p>
                    <p>Home</p>
                    <p>Contact us</p>
                    <p>Delivery zone</p>
                </div>
                <div className="[&>*]:text-white">
                    <p className="text-gray-500">MENU</p>
                    <p>Appetizers</p>
                    <p>Salads</p>
                    <p>Pizzas</p>
                    <p>Lunch favorites</p>
                    <p>Main dishes</p>
                </div>
                <div className="[&>*]:text-white">
                    <p className="text-gray-500">MENU</p>
                    <p>Side dish</p>
                    <p>Brunch</p>
                    <p>Desserts</p>
                    <p>Beverages</p>
                    <p>Fish & Sea foods</p>
                </div>
                <div>
                    <p className="text-gray-500">MENU</p>
                    <div className="flex gap-2 items-center">
                        <img src="./facebook-logo.svg"></img>
                        <Instagram color="#FFFFFF" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 min-sm:gap-10 text-gray-500 px-10 w-full flex-wrap">
                <div className="flex gap-2">
                    <p>Copy right 2024 </p>
                    <Copyright />
                    <p className="ml-2">Nomnom LLC</p>
                </div>
                <p>Privacy policy</p>
                <p>Terms and condition</p>
                <p>Cookie policy</p>
            </div>
        </div>
    )
}