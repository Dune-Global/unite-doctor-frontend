"use client";

import DoctorCard from "@/components/profile/DoctorCard";
import { ProfileInfo } from "@/data/mock/profile-info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import AvailabilityCard from "@/components/profile/AvailabilityCard";
import EditProfileCard from "@/components/profile/EditProfileCard";
import ChangePasswordCard from "@/components/profile/ChangePasswordCard";

export default function Settings() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="text-2xl font-medium">Profile Settings</div>
      </div>
      <div className="my-8 flex flex-col lg:flex-row gap-4">
        <div>
          {ProfileInfo.map((profile) => (
            <div key={profile.id}>
              <DoctorCard
                image={profile.image}
                name={profile.fName + " " + profile.lName}
                gender={profile.gender}
                email={profile.email}
                contactNumber={profile.contactNumber}
                designation={profile.designation}
                slmcNumber={profile.slmcNumber}
                nicNumber={profile.nicNumber}
                dateOfBirth={profile.dateOfBirth}
                currentHospital={profile.currentHospital}
                currentUniversity={profile.currentUniversity}
                isPersonalClinic={profile.isPersonalClinic}
                clinicName={profile.clinicName}
                clinicAddress={profile.clinicAddress}
              />
            </div>
          ))}
        </div>
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
            <TabsContent
              value="availability"
              className="bg-ugray-0 p-4 rounded-lg shadow-sm w-full"
            >
             <AvailabilityCard /> 
            </TabsContent>
            <TabsContent value="edit-profile" className="bg-ugray-0 p-4 rounded-lg shadow-sm">
             <EditProfileCard /> 
            </TabsContent>
            <TabsContent value="change-password" className="bg-ugray-0 p-4 rounded-lg shadow-sm">
              <ChangePasswordCard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
