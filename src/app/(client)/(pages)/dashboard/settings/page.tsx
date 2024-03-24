"use client";

import { ProfileInfo } from "@/data/mock/profile-info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import AvailabilityCard from "@/components/profile/AvailabilityCard";
import EditProfileCard from "@/components/profile/EditProfileCard";
import ChangePasswordCard from "@/components/profile/ChangePasswordCard";
import { columns } from "./(table)/columns";
import { DataTable } from "./(table)/data-table";
import { useEffect, useState } from "react";
import { AvailableAppointmentsList } from "@/types/available-appointments";
import { Appointments } from "@/data/mock/profile-info";

export default function Settings() {
  const [data, setData] = useState<AvailableAppointmentsList[]>([]);

  useEffect(() => {
    const appointmentsActionHandler = async () => {
      const data = await Appointments();
      setData(data);
    };

    appointmentsActionHandler();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <div className="text-2xl font-medium">Profile Settings</div>
      </div>
      <div className="my-8 flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <Tabs defaultValue="availability" className="w-full">
            <TabsList className="bg-ugray-0 py-6 mb-3">
              <div className="flex gap-6 px-6">
                <div>
                  <TabsTrigger value="availability ">Availability</TabsTrigger>
                </div>
                <div>
                  <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
                </div>
                <div>
                  <TabsTrigger value="change-password">
                    Change Password
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
            <TabsContent value="availability" className="w-full">
              <div className="bg-ugray-0 p-4 rounded-lg shadow-sm">
                <AvailabilityCard />
              </div>
              <div className="py-12">
                <div className="text-2xl font-medium pb-4">
                    Appointment Schedule
                </div>
                <div className="pb-10">
                  <DataTable columns={columns} data={data} />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="edit-profile"
              className="bg-ugray-0 p-4 rounded-lg shadow-sm"
            >
              <EditProfileCard />
            </TabsContent>
            <TabsContent
              value="change-password"
              className="bg-ugray-0 p-4 rounded-lg shadow-sm"
            >
              <ChangePasswordCard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
