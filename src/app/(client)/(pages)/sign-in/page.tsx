"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Container from "@/components/common/container";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { loginAccount } from "@/api/auth/authAPI";
const formSchema = z.object({
  email: z
    .string()
    .email({ message: "invalid email" })
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});

const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { email, password } = values;
      const res = await loginAccount(email,);
      localStorage.setItem("jwtToken", res.token);
      toast({
        variant: "default",
        title: "Welcome back!",
        description: "You have successfully logged in.",
        action: <ToastAction altText="Try again">Go to home</ToastAction>,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Email or Password is incorrect.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error(error);
    }
    console.log(values);
  }

  return (
    <div className="flex flex-row justify-center  lg:justify-between ">
      <div className="flex lg:px-28 items-center justify-center">
        <Container>
          <div>
            <div className="flex flex-col gap-4 items-end justify-center md:py- py-">
              <div className="flex flex-col gap-2 px-8 py- w-[320px]  md:py- h-svh items-center justify-center   sm:w-[500px]  ">
                <div>
                  <Image
                    src={"/logo/logo.png"}
                    alt=""
                    width={100}
                    height={100}
                  ></Image>{" "}
                </div>
                <div className="flex flex-col gap-1  items-center text-center">
                  <h2 className="font-semibold text-4xl  ">Welcome Back!</h2>
                </div>
                <Form {...form}>
                  <form
                    className="space-y-3 w-full  px-2 mb-2 "
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    <div className="space-y-5 ">
                      <div>
                        <div className="text-base">User ID </div>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Enter your SLMC number"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage
                                className={`${formBaseStyles.errorMessages}`}
                              />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
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
                      <div className="flex justify-between">
                        <div className="flex flex-row gap-2">
                          <Checkbox />
                          <div className="text-sm flex">Remember me</div>
                        </div>
                        <div className="flex">
                          <Link
                            href={""}
                            className="text-sm underline text-ublue-100"
                          >
                            Forgot Password?{" "}
                          </Link>
                        </div>
                      </div>
                      <div className="">
                        <Button className="w-full bg-ublue-100 text-ugray-0">
                          Login
                        </Button>
                      </div>
                      <div className="text-sm text-center ">
                        <p className="text-black">
                          Don&apos;t have an account?{" "}
                          <a
                            href="/signup"
                            className="text-ublue-100 underline"
                          >
                            Sign up
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/*  */}
      <div className="lg:flex hidden ">
        <Image
          src={"/auth-png/hospital.png"}
          alt=""
          height={100}
          width={500}
          className=""
        />
      </div>
    </div>
  );
}
