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
  firstName: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  lastName: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  email: z
    .string()
    .email({ message: "invalid email" })
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  slmcNumber: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  contactNo: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  userId: z
    .string()
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
      firstName: "",
      lastName: "",
      email: "",
      slmcNumber: "",
      contactNo: "",
      userId: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Sign up Successful",
      description: (
        <pre className="bg-ugray-900 mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className=" text-ugray-0">
            {JSON.stringify(values, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex lg:px-28 items-center justify-center">
        <div className="flex flex-col gap-4 items-end justify-center ">
          <div className="flex flex-col gap-2 md:px-8 py- w-full  md:py- h-svh items-center justify-center sm:w-[500px]  ">
            <div>
              <Image
                src={"/logo/logo.png"}
                alt=""
                width={130}
                height={100}
                quality={10}
                className="mb-3"
              ></Image>{" "}
            </div>

            <div className="flex flex-col gap-1  items-center text-center">
              <h2 className="font-semibold text-4xl mb-8">Let&apos;s get started</h2>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 w-full  px-2 mb-2 "
              >
                <div className="space-y-5 snap-y  ">
                  <div className="snap-end ">
                    <div className="text-base">First Name</div>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your First Name"
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
                  <div className="snap-end">
                    <div className="text-base">Last Name</div>
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your Last Name"
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
                  <div className="snap-end">
                    <div className="text-base">Email</div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your Email Address"
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
                  <div className="snap-end">
                    <div className="text-base">SLMC Number</div>
                    <FormField
                      control={form.control}
                      name="slmcNumber"
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
                    <div className="text-base">Contact Number</div>
                    <FormField
                      control={form.control}
                      name="contactNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your Contact Number"
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
                    <div className="text-base">User ID </div>
                    <FormField
                      control={form.control}
                      name="userId"
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

                  <Button
                    type="submit"
                    className="w-full bg-ublue-100 text-ugray-0"
                  >
                    Sign Up
                  </Button>
                  <div className="text-sm text-center ">
                    <p className="text-black">
                      Already have an account?{" "}
                      <a href="/sign-in" className="text-ublue-100 underline">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
    
    </div>
  );
}
