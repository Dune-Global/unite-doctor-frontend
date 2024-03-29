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
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import React from "react";
import { z } from "zod";
import { CalendarIcon } from "lucide-react";
import { addAvailability } from "@/api/profile/profileAPI";

const formSchema = z.object({
  date: z.string().nonempty({ message: "Date is required" }),
  time: z.string().nonempty({ message: "Time is required" }),
  duration: z.string().nonempty({ message: "Duration is required" }),
  appointments: z.string().nonempty({ message: "Appointments is required" }),
  location: z.string().nonempty({ message: "Location is required" }),
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
      location: "",
    },
  });

  const handleAddAvailability = async (values: any) => {
    try {
      const formattedValues = {
        date: values.date,
        startTime: values.time,
        sessionDuration: parseInt(values.duration),
        numberOfAppointments: parseInt(values.appointments),
        location: values.location,
      };
      const res = await addAvailability(formattedValues);
      console.log(res);
  
      if (res.status === 200) {
        toast({
          title: "Availability Added Successfully",
          description: "You can now view your availability in the calendar",
        });
      } else {
        toast({
          title: "Something went wrong!",
          description: "Please try again later",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to add availability",
        description: "Please try again later",
      });
    }
  };
  
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={handleAddAvailability}
          className="space-y-3 px-2 mb-2 "
        >
          <div className="space-y-5 snap-y flex flex-col">
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
                        <PopoverContent className="w-auto p-0" align="start">
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
            <div className="flex flex-col lg:flex-row gap-4">
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
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="snap-end w-full">
                <div className="text-sm pb-2 text-ugray-400">
                  Location
                </div>
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter the location"
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
            <div>
              <Button
                type="submit"
                size="lg"
                className="text-ugray-0 bg-ublue-200"
              >
                Set Availability
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
