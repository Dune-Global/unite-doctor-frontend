"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid Email" })
    .min(1, { message: "Should have at least one character" }),
});
const formBaseStyles = {
  errorMessages: "text-ured-400 font-medium text-sm",
};
export default function FogoetPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { email } = values;

      toast({
        variant: "default",
        title: "Please check your email.",
        description: "You have recieved an email.",
        action: <ToastAction altText="Try again">Go to home</ToastAction>,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Email is incorrect.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error(error);
    }
    console.log(values);
  }
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col gap-4 items-center justify-center md:py- py-">
        <div className="flex flex-col gap-2 px-8 py- w-[320px]  md:py- h-svh items-center justify-center sm:w-[500px]  ">
          <div>
            <Image
              src={"/logo/logo.png"}
              alt=""
              width={100}
              height={100}
            ></Image>{" "}
          </div>
          <div className="flex flex-col gap-1  items-center text-center">
            <h2 className="font-semibold text-4xl  ">Forgot Password</h2>
          </div>
          <Form {...form}>
            <form
              className="space-y-3 w-full  px-2 mb-2 "
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="space-y-5 ">
                <div>
                  <div className="text-base">Email </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Enter email address" {...field} />
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="">
                  <Button className="w-full bg-ublue-100 text-ugray-0">
                    Continue
                  </Button>
                </div>

              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
