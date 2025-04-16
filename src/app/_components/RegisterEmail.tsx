import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function RegisterEmail({ form }) {
    return (
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
    )
}