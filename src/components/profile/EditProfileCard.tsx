"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { z } from "zod";
import { ProfileInfo } from "@/data/mock/profile-info";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { IAccessToken } from "@/types/jwt";
import { getUser } from "@/utils/getUser";

let user:IAccessToken;
const tempUser = getUser();
if (tempUser !== undefined && tempUser !== null) {
  user = tempUser;
}

const formSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  email: z.string().nonempty({ message: "Email is required" }),
  phoneNumber: z.string().nonempty({ message: "Contact number is required" }),
  speciality: z.string().nonempty({ message: "Speciality is required" }),
  dateOfBirth: z.string().nonempty({ message: "Date of birth is required" }),
  gender: z.string().nonempty({ message: "Gender is required" }),
  slmcNumber: z.string().nonempty({ message: "SLMC number is required" }),
  nicNumber: z.string().nonempty({ message: "NIC number is required" }),
  currentHospital: z.string(),
  currentUniversity: z.string(),
  isPersonalClinic: z
    .string()
    .nonempty({ message: "Personal clinic is required" }),
  clinicName: z.string(),
  clinicAddress: z.string(),
});


const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

export default function EditProfileCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      speciality: "",
      dateOfBirth: "",
      gender: "",
      slmcNumber: "",
      nicNumber: "",
      currentHospital: "",
      currentUniversity: "",
      isPersonalClinic: "",
      clinicName: "",
      clinicAddress: "",
    },
  });

  const handleVerifyEmail = () => {
    // API integration for email verification
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Saved changes successfully!",
      description: (
        <pre className="bg-ugray-900 mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className=" text-ugray-0">
            {JSON.stringify(values, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 px-2 mb-2 "
        >
          {ProfileInfo.map((profile) => (
            <div className="space-y-5 snap-y flex flex-col" key={profile.id}>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">First Name</div>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter first name"
                            defaultValue={profile.fName}
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
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Last Name</div>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter last name"
                            defaultValue={profile.lName}
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
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Email</div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <Input
                            placeholder="Enter email address"
                            defaultValue={profile.email}
                            {...field}
                          />
                        </FormControl>
                        {user.isEmailVerified ? null : (
                          <Button
                            size="sm"
                            className="absolute top-0 right-2 text-ugray-0 bg-ublue-200"
                            onClick={handleVerifyEmail}
                          >
                            Verify
                          </Button>
                        )}
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Contact Number
                  </div>
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your contact number"
                            defaultValue={profile.contactNumber}
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
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Speciality</div>
                  <FormField
                    control={form.control}
                    name="speciality"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter speciality"
                            defaultValue={profile.designation}
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
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Date of Birth
                  </div>
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
                                "w-full border-ugray-100 pl-3 h-12 text-left font-normal",
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
                        <PopoverContent className="w-auto p-0" align="end">
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
                </div>
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Gender</div>
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={profile.gender} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
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
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">SLMC Number</div>
                  <FormField
                    control={form.control}
                    name="slmcNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter SLMC number"
                            defaultValue={profile.slmcNumber}
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
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">NIC Number</div>
                  <FormField
                    control={form.control}
                    name="nicNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter NIC number"
                            defaultValue={profile.nicNumber}
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
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Current Hospital
                  </div>
                  <FormField
                    control={form.control}
                    name="currentHospital"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter current hospital"
                            defaultValue={profile.currentHospital}
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
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Current University
                  </div>
                  <FormField
                    control={form.control}
                    name="currentUniversity"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter current university"
                            defaultValue={profile.currentUniversity}
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
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Personal Clinic
                  </div>
                  <FormField
                    control={form.control}
                    name="isPersonalClinic"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue
                                placeholder={profile.PersonalClinic}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
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
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Clinic Name</div>
                  <FormField
                    control={form.control}
                    name="clinicName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter clinic name"
                            defaultValue={profile.clinicName}
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
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Clinic Address
                  </div>
                  <FormField
                    control={form.control}
                    name="clinicAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter clinic address"
                            defaultValue={profile.clinicAddress}
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
              </div>
              <div className="flex gap-4">
                <div>
                  <Button type="submit" size="lg" className="text-ugray-0 bg-ublue-200">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </form>
      </Form>
    </div>
  );
}
