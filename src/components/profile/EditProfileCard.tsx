"use client";

import { useState } from "react";
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
import { Button } from "@/components/common/Button";
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

const formSchema = z.object({
  date: z.string().nonempty({ message: "Date is required" }),
  time: z.string().nonempty({ message: "Time is required" }),
  duration: z.string().nonempty({ message: "Duration is required" }),
  appointments: z.string().nonempty({ message: "Appointments is required" }),
});

const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

export default function AvailabilityCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      time: "",
      duration: "",
      appointments: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Availability added successfully!",
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
          className="space-y-3 w-full  px-2 mb-2 "
        >
          <div className="space-y-5 snap-y  ">
            <div className="snap-end w-full">
              <div className="text-sm pb-2 text-ugray-400">Select the Date</div>
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select a date" />
                        </SelectTrigger>
                        <SelectContent>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                          />
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
              <div className="text-sm pb-2 text-ugray-400">Start Time</div>
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a time" />
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
            <div className="snap-end">
              <div className="text-sm pb-2 text-ugray-400">
                Session Duration (mins)
              </div>
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter session duration" {...field} />
                    </FormControl>
                    <FormMessage
                      className={`${formBaseStyles.errorMessages}`}
                    />
                  </FormItem>
                )}
              />
            </div>
            <div className="snap-end">
              <div className="text-sm pb-2 text-ugray-400">
                Number of Appointments
              </div>
              <FormField
                control={form.control}
                name="appointments"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter number of appointments"
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
            <Button
              type="submit"
              className="w-full bg-ublue-100 text-ugray-0"
              size="lg"
            >
              Set Availability
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
