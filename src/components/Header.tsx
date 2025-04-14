import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="w-full h-15 bg-black flex justify-between px-4 min:sm:px-10 items-center">
      <Link href="/">
        <div className="w-full cursor-pointer">
          <img src="./header-logo.svg" />
        </div>
      </Link>
      <div className="flex gap-3">
        <Link href="/register">
          <Button className="rounded-3xl hover:bg-[#EF4444] hover:text-white border-0 cursor-pointer" variant="outline">Sign up</Button>
        </Link>
        <Link href="/login">
          <Button className="rounded-3xl bg-[#EF4444] border-0 text-white cursor-pointer" variant="outline">Log in</Button>
        </Link>
      </div>
    </div>
  )
}