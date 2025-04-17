"use client";

import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "@/constants";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";



export default function LoginPage() {

  const router = useRouter()

  const [error, setError] = useState("");

  const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (val) => {
    try {
      const user = await axios.post(`${BASE_URL}/auth/login`, val);
      console.log(user)
      if (user) {
        toast("Event has been created.");
      }

      const decodedToken = jwtDecode(user.data.token);

      if (decodedToken.user.role == "ADMIN") {
        router.push("/admin")
        return
      } else {
        router.push("/");
      }

    } catch (error) {
      setError(error.response.data.error);
    }
  }

  return (
    <div className="flex justify-between w-full h-screen">
      <div className="w-[40%] flex justify-center items-center">

        <div className="w-[260px] h-fit">
          <div className="w-fit h-fit">
            <a href="/">
              <ChevronLeft className="p-2 border rounded-sm border-gray-100 mb-4 shadow cursor-pointer" size={35} />
            </a>
          </div>
          <h6 className="mb-1 text-2xl font-semibold">Login</h6>
          <p className="mb-6 text-gray-400">Log in to enjoy your favorite dishes.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Password" type="password" className="mb-4 mt-4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="font-normal p-0 m-0" variant="link" type="button">Forgot password ?</Button>
              {error && <p className="text-red-500">{error}</p>}
              <Button className="bg-black text-white w-full mt-6" variant="outline" type="submit">Let's Go</Button>
            </form>
          </Form>
          <div className="flex gap-3 justify-self-center">
            <Button className="text-gray-500 font-normal p-0 m-0" variant="link">
              <Link href="/register">Don't have an account?</Link>
            </Button>
            <Button className="text-blue-500 font-normal p-0 m-0" variant="link">
              <Link href="/register">Sign up</Link>
            </Button>
          </div>
        </div>

      </div>

      <div className="h-screen w-[70%]">
        <img className="h-full justify-self-end w-full" src="./bicycle.svg"></img>
      </div>
    </div>
  );
};