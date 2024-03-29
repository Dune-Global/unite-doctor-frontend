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
import React, { useState } from "react";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { updatePassword } from "@/api/profile/profileAPI";

const formSchema = z.object({
  currentPassword: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
  newPassword: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" })
    .max(50, { message: "Password can't contain more than 50 characters" })
    .refine(value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value), {
      message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character. Spaces are not allowed."
    }),
});

const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

export default function AvailabilityCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await updatePassword({
        oldPassword: values.currentPassword,
        newPassword: values.newPassword,
      });

      if (res.status === 200) {
        toast({
          title: "Password updated successfully!",
          description: "Your password has been updated.",
        });
      } else {
        toast({
          title: "Something went wrong!",
          description: res.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      toast({
        title: "Password must match!",
        description: "Please try again",
        variant: "destructive",
      });
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const handleEyeClickNew = () => {
    setShowNewPassword(!showNewPassword);
  }; 

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 px-2 mb-2 "
        >
          <div className="space-y-5 snap-y flex flex-col">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="snap-end w-full">
                <div className="text-sm pb-2 text-ugray-400">
                  Current Password
                </div>
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter current password"
                          {...field}
                        />
                      </FormControl>
                      <button
                        className="absolute right-2 top-[0.5rem] text-xl"
                        type="button"
                        onClick={handleEyeClick}
                      >
                        {showPassword ? (
                          <EyeOff
                            size={22}
                            strokeWidth={1}
                            className="text-black"
                          />
                        ) : (
                          <Eye
                            size={22}
                            strokeWidth={1}
                            className="text-black"
                          />
                        )}
                      </button>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div className="snap-end w-full">
                <div className="text-sm pb-2 text-ugray-400">New Password</div>
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormControl>
                        <Input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          {...field}
                        />
                      </FormControl>
                      <button
                        className="absolute right-2 top-[0.5rem] text-xl"
                        type="button"
                        onClick={handleEyeClickNew}
                      >
                        {showNewPassword ? (
                          <EyeOff
                            size={22}
                            strokeWidth={1}
                            className="text-black"
                          />
                        ) : (
                          <Eye
                            size={22}
                            strokeWidth={1}
                            className="text-black"
                          />
                        )}
                      </button>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <Button type="submit" size="lg">
                Change Password
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
