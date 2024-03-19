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
          className="space-y-3 w-full px-2 mb-2 "
        >
          <div className="space-y-5 snap-y flex flex-col w-full">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="snap-end w-full">
                <div className="text-sm pb-2 text-ugray-400">
                  Select the Date
                </div>
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
                            <SelectItem value="1am">01:00 AM</SelectItem>
                            <SelectItem value="2am">02:00 AM</SelectItem>
                            <SelectItem value="3am">03:00 AM</SelectItem>
                            <SelectItem value="4am">04:00 AM</SelectItem>
                            <SelectItem value="5am">05:00 AM</SelectItem>
                            <SelectItem value="6am">06:00 AM</SelectItem>
                            <SelectItem value="7am">07:00 AM</SelectItem>
                            <SelectItem value="8am">08:00 AM</SelectItem>
                            <SelectItem value="9am">09:00 AM</SelectItem>
                            <SelectItem value="10am">10:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM</SelectItem>
                            <SelectItem value="12am">12:00 PM</SelectItem>
                            <SelectItem value="1pm">01:00 PM</SelectItem>
                            <SelectItem value="2pm">02:00 PM</SelectItem>
                            <SelectItem value="3pm">03:00 PM</SelectItem>
                            <SelectItem value="4pm">04:00 PM</SelectItem>
                            <SelectItem value="5pm">05:00 PM</SelectItem>
                            <SelectItem value="6pm">06:00 PM</SelectItem>
                            <SelectItem value="7pm">07:00 PM</SelectItem>
                            <SelectItem value="8pm">08:00 PM</SelectItem>
                            <SelectItem value="9pm">09:00 PM</SelectItem>
                            <SelectItem value="10pm">10:00 PM</SelectItem>
                            <SelectItem value="11pm">11:00 PM</SelectItem>
                            <SelectItem value="12pm">12:00 AM</SelectItem>
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
                <div className="text-sm pb-2 text-ugray-400">
                  Session Duration (mins)
                </div>
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter session duration"
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
            </div>

            <Button
              type="submit"
              className="bg-ublue-100 text-ugray-0"
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
