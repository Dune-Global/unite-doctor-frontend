"use client";

import DoctorCard from "@/components/profile/DoctorCard";
import { ProfileInfo } from "@/data/mock/profile-info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="text-2xl font-medium">Profile Settings</div>
      </div>
      <div className="my-8 flex gap-4">
        <div>
          {ProfileInfo.map((profile) => (
            <div key={profile.id}>
              <DoctorCard
                image={profile.image}
                name={profile.name}
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
        <div>
          <Tabs defaultValue="availability" className="w-[400px]">
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
            <TabsContent value="availability">
              hi
            </TabsContent>
            <TabsContent value="edit-profile">
              Change your password here.
            </TabsContent>
            <TabsContent value="change-password">
              Change your password.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
