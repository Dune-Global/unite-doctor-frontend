"use client";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { CalendarIcon, Eye, EyeOff } from "lucide-react";
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
import { loginAccount, registerAccount } from "@/api/auth/authAPI";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  getDesignationList,
  getGenderList,
  getHospitalList,
  getUniversityList,
} from "@/api/enums/enumsAPI";

const Modal = ({ onClose }: { onClose: any }) => {
  return (
    <div className="modal">
      <div className="absolute bottom-0 modal-content h-screen w-full grid place-content-center bg-ugray-50/20 backdrop-blur-md z-20">
        <div className="flex flex-col justify-center ">
          <p className="text-2xl">Account activation mail sent to email.</p>
          <Link href="/sign-in" className="z-20">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

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
  mobile: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  nicNumber: z
    .string()
    .min(8, { message: "NIC must contain at least 12 characters" })
    .max(50, { message: "NIC can't contain more than 15 characters" }),
  currentUniversity: z.string({
    required_error: "A university name is required",
  }),
  currentHospital: z.string({
    required_error: "A hospital name is required",
  }),
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
  designation: z.string({
    required_error: "A designation is required",
  }),
  dateOfBirth: z.date({
    required_error: "A date of birth is required",
  }),
  gender: z.string({
    required_error: "Gender is required",
  }),
});

const formBaseStyles = {
  errorMessages: "text-ured-400 font-medium text-sm",
};

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [universityList, setUniversityList] = useState([]);
  const [genderList, setGenderList] = useState([]);
  const [hospitalList, setHospitalList] = useState([]);
  const [designationList, setDesignationList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getUniversityList().then((res) => {
      setUniversityList(res.data);
    });

    getGenderList().then((res) => {
      setGenderList(res.data);
    });

    getHospitalList().then((res) => {
      setHospitalList(res.data);
    });

    getDesignationList().then((res) => {
      setDesignationList(res.data);
    });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "Wasath",
      lastName: "Theekshana",
      email: "wasath.vt@gmail.com",
      slmcNumber: "SLMC200002",
      mobile: "0766692190",
      password: "Lithara@2002",
      nicNumber: "200233801945",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await registerAccount(values);
      console.log(res);

      // open model to say "Account activation mail send to email"
      if (res.status === 200) {
        // setShowModal(true);
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
        router.push("/sign-in");
      } else if (res.status === 409) {
        toast({
          title: "Sign up failed",
          description: res.data.errors[0].messages[0],
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sign up failed",
          description: "Please try again",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Sign up failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  }

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" ">
      {showModal && <Modal onClose={() => setShowModal(false)} />}
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
                    name="mobile"
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
                  <div className="text-base">Date of Birth</div>
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full border-ugray-100 pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
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
                    name="nicNumber"
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
                  <div className="text-base">Currunt Hospital</div>
                  <FormField
                    control={form.control}
                    name="currentHospital"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a Hospital" />
                            </SelectTrigger>
                            <SelectContent>
                              {hospitalList.map((hospital: any, index) => {
                                return (
                                  <SelectItem key={index} value={hospital}>
                                    {hospital}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
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
                    name="currentUniversity"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a University" />
                            </SelectTrigger>
                            <SelectContent>
                              {universityList.map((university: any, index) => {
                                return (
                                  <SelectItem key={index} value={university}>
                                    {university}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="snap-end">
                  <div className="text-base">Designation</div>
                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a Designation" />
                            </SelectTrigger>
                            <SelectContent>
                              {designationList.map(
                                (designation: any, index) => {
                                  return (
                                    <SelectItem key={index} value={designation}>
                                      {designation}
                                    </SelectItem>
                                  );
                                }
                              )}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="snap-end">
                  <div className="text-base">Gender</div>
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              {genderList.map((gender: any, index) => {
                                return (
                                  <SelectItem key={index} value={gender}>
                                    {gender}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
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
              </div>
              <div className="py-2">
                <Button className="w-full bg-ublue-100 text-ugray-0">
                  Sign Up
                </Button>

                <div className="text-sm text-center pt-2">
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
