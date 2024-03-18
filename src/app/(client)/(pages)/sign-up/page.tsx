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

  nic: z
    .string()
    .min(8, { message: "NIC must contain at least 12 characters" })
    .max(50, { message: "NIC can't contain more than 15 characters" }),
  curruntuni: z
    .string()
    .min(8, { message: "University name must contain at least 3 characters" })
    .max(50, {
      message: "University name can't contain more than 25 characters",
    }),
  currunthospital: z
    .string()
    .min(8, { message: "Currunt hospital must contain at least 12 characters" })
    .max(50, {
      message: "Currunt hospital can't contain more than 15 characters",
    }),
  personalclinic: z
    .string()
    .min(8, { message: "Currunt hospital must contain at least 12 characters" })
    .max(50, {
      message: "Currunt hospital can't contain more than 15 characters",
    }),
  clinicname: z
    .string()
    .min(8, { message: "Currunt hospital must contain at least 12 characters" })
    .max(50, {
      message: "Currunt hospital can't contain more than 15 characters",
    }),
  clinicaddress: z
    .string()
    .min(8, { message: "Currunt hospital must contain at least 12 characters" })
    .max(50, {
      message: "Currunt hospital can't contain more than 15 characters",
    }),

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

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      slmcNumber: "",
      contactNo: "",
      userId: "",

      nic: "",
      curruntuni: "",
      currunthospital: "",
      personalclinic: "",
      clinicname: "",
      clinicaddress: "",

      password: "",
      confirmpassword: "",
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
  const handleEyeClick2 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className=" ">
      <div className="flex justify-center ">
        <div className="flex flex-col gap-2 md:px-8  w-80  items-center justify-center sm:w-[500px] py-5   ">
          <div>
            <Image
              src={"/logo/logo.png"}
              alt=""
              width={130}
              height={100}
              quality={10}
              className="mb-2"
            ></Image>{" "}
          </div>

          <div className="flex flex-col gap-1  items-center text-center">
            <h2 className="font-semibold text-4xl mb-2">
              Let&apos;s get started
            </h2>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 w-full  px-2 mb-2 "
            >
              <div className="space-y-2 ">
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
                <div>
                  <div className="text-base">NIC Number </div>
                  <FormField
                    control={form.control}
                    name="nic"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your NIC number"
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
                  <div className="text-base">Currunt Hospital </div>
                  <FormField
                    control={form.control}
                    name="currunthospital"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your Currunt Hospital"
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
                  <div className="text-base">Current University </div>
                  <FormField
                    control={form.control}
                    name="curruntuni"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your Currunt University"
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
                  <div className="text-base">Personal Clinic </div>
                  <FormField
                    control={form.control}
                    name="personalclinic"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your Personal Clinic Name"
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
                  <div className="text-base">Clinic Name </div>
                  <FormField
                    control={form.control}
                    name="clinicname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your Clinic Name"
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
                  <div className="text-base">Clinic Address </div>
                  <FormField
                    control={form.control}
                    name="clinicaddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your Clinic Address"
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
              </div>
              <div className="py-2">
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
