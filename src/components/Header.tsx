import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="w-full h-15 bg-black flex justify-between px-4 min:sm:px-10 items-center">
      <div className="w-22 min-sm:w-[20%]">
        <img src="./header-logo.svg" />
      </div>
      <div className="flex gap-3">
        <Button className="rounded-3xl hover:bg-[#EF4444] hover:text-white border-0" variant="outline">Sign up</Button>
        <Button className="rounded-3xl bg-[#EF4444] border-0 text-white" variant="outline">Log in</Button>
      </div>
    </div>
  )
}