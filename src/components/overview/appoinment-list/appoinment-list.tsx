'use client';

import { useState, useEffect } from 'react';
import { AppointmentsApprove } from "@/data/overview/appoinments-approve";
import AppoinmentPatientCard from "./appoinment-patient-card";

export default function AppoinmentList() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const ongoingOrUpcomingAppointments = AppointmentsApprove.filter((patient) => {
    const endTime = new Date(`${patient.appoinmentDate} ${patient.appoinmentEndTime}`);
    return currentTime < endTime;
  });

  return (
    <div className="bg-ugray-0 mt-6 rounded-lg p-4">
      <div className="flex flex-col gap-7">
        {ongoingOrUpcomingAppointments.length > 0 ? (
          ongoingOrUpcomingAppointments.map((patient) => (
            <AppoinmentPatientCard
              key={patient.id}
              name={patient.name}
              appoinmentNo={patient.appoinmentNo}
              imageUrl={patient.imageUrl}
              status={patient.status}
              appoinmentDate={patient.appoinmentDate}
              appoinmentEndTime={patient.appoinmentEndTime}
              appoinmentStartTime={patient.appoinmentStartTime}
              currentTime={currentTime}
            />
          ))
        ) : (
          <p className='text-center text-xl font-medium'>No appointments</p>
        )}
      </div>
      <div>
          
      </div>
    </div>
  );
}
