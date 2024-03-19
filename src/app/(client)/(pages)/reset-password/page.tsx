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
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
  confirmpassword: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});
const formBaseStyles = {
  errorMessages: "text-ured-400 font-medium text-sm",
};
export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmpassword: "",
    },
  });
  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };
  const handleEyeClick2 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password !== values.confirmpassword) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Passwords do not match.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    try {
      toast({
        variant: "default",
        title: "Welcome back!",
        description: "You have successfully change the password.",
        action: <ToastAction altText="Try again">Go to home</ToastAction>,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Password is incorrect.",
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
                <div className="snap-end">
                  <div className="text-base">Password</div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your Password"
                              {...field}
                            />
                          </FormControl>
                          <button
                            className="absolute right-2 top-[0.65rem] text-xl"
                            type="button"
                            onClick={handleEyeClick}
                          >
                            {showPassword ? (
                              <EyeOff
                                size={25}
                                strokeWidth={1}
                                className="text-black"
                              />
                            ) : (
                              <Eye
                                size={25}
                                strokeWidth={1}
                                className="text-black"
                              />
                            )}
                          </button>
                        </div>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="snap-end">
                  <div className="text-base">Confirm Password</div>
                  <FormField
                    control={form.control}
                    name="confirmpassword"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Re-enter your Password"
                              {...field}
                            />
                          </FormControl>
                          <button
                            className="absolute right-2 top-[0.65rem] text-xl"
                            type="button"
                            onClick={handleEyeClick2}
                          >
                            {showConfirmPassword ? (
                              <EyeOff
                                size={25}
                                strokeWidth={1}
                                className="text-black"
                              />
                            ) : (
                              <Eye
                                size={25}
                                strokeWidth={1}
                                className="text-black"
                              />
                            )}
                          </button>
                        </div>
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
