"use client";

import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"



export default function SignUpPage() {
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

    return (
        <div>
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="email"
                    render={() => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter your email..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </Form>

        </div>
    );
}

// <div className="grid grid-cols-3 w-full h-screen">
//     <div className="flex justify-center items-center">

//         <div className="w-[260px] h-[268px]">
//             <Link href="/">
//                 <button className="shadow w-8 h-8 rounded-sm flex justify-center items-center border border-gray-100 mb-4 cursor-pointer">
//                     <ChevronLeft className="p-1" />
//                 </button>
//             </Link>
//             <h6 className="mb-2 text-2xl font-semibold">Create your account</h6>
//             <p className="mb-3">Sign up to explore your favorite dishes.</p>
//             <Input className="mb-3" />
//             <Button className="bg-black text-white w-full" variant="outline">Let's Go</Button>
//             <div className="flex gap-1 justify-self-center">
//                 <Button className="text-gray-500 font-normal p-0 m-0" variant="link">Already have an account?</Button>
//                 <Button className="text-blue-500 font-normal p-0 m-0" variant="link">Log in</Button>
//             </div>
//         </div>

//     </div>

//     <div className="col-span-2 h-screen">
//         <img className="h-screen" src="./bicycle.svg"></img>
//     </div>
// </div>