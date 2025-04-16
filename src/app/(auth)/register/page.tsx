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



export default function RegisterPage() {

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
            const user = await axios.post(`${BASE_URL}/auth/register`, val);

            if (user) {
                toast("Event has been created.");
                router.push("/login");
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
                    <h6 className="mb-1 text-2xl font-semibold">Create your account</h6>
                    <p className="mb-6 text-gray-400">Sign up to explore your favorite dishes.</p>
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
                        <Button className="text-gray-500 font-normal p-0 m-0" variant="link">Already have an account?</Button>
                        <Button className="text-blue-500 font-normal p-0 m-0" variant="link">Log in</Button>
                    </div>
                </div>

            </div>

            <div className="h-screen w-[70%]">
                <img className="h-full justify-self-end w-full" src="./bicycle.svg"></img>
            </div>
        </div>
    );
};

// "use client";

// import { ChevronLeft } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"



// export default function SignUpPage() {
//     const formSchema = z.object({
//         email: z.string().min(2).max(50),
//         password: z.string().min(8),
//     });

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             email: "",
//             password: "",
//         }
//     });

//     return (
//         <div className="grid grid-cols-3 w-full h-screen">
//             <div className="flex justify-center items-center">

//                 <div className="w-[260px] h-[268px]">
//                     <Link href="/">
//                         <button className="shadow w-8 h-8 rounded-sm flex justify-center items-center border border-gray-100 mb-4 cursor-pointer">
//                             <ChevronLeft className="p-1" />
//                         </button>
//                     </Link>
//                     <h6 className="mb-2 text-2xl font-semibold">Create your account</h6>
//                     <p className="mb-3">Sign up to explore your favorite dishes.</p>
//                     <Form {...form}>
//                         <FormField
//                             control={form.control}
//                             name="email"
//                             render={() => (
//                                 <FormItem>
//                                     <FormControl>
//                                         <Input placeholder="Enter your email..." />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         <FormField
//                             control={form.control}
//                             name="password"
//                             render={() => (
//                                 <FormItem>
//                                     <FormControl>
//                                         <Input placeholder="Password" type="password" />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                     </Form>
//                     <Button className="bg-black text-white w-full" variant="outline">Let's Go</Button>
//                     <div className="flex gap-1 justify-self-center">
//                         <Button className="text-gray-500 font-normal p-0 m-0" variant="link">Already have an account?</Button>
//                         <Button className="text-blue-500 font-normal p-0 m-0" variant="link">Log in</Button>
//                     </div>
//                 </div>

//             </div>

//             <div className="col-span-2 h-screen">
//                 <img className="h-screen" src="./bicycle.svg"></img>
//             </div>
//         </div>
//     );
// };