"use client"

import { AppointmentList, TransformedAppointment } from "@/types/appointments";
import { useEffect, useState } from "react";
import { DataTable } from "./(table)/data-table";
import { columns } from "./(table)/columns";
import { getAllAppointmentsActionHandler } from "@/actionLayer/appointments/appointmentsAction";
import { calculateAge } from "@/helpers/calculateAge";

export default function Appointments() {
  const [data, setData] = useState<AppointmentList[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllAppointmentsActionHandler();
        const resData = response.data;

        const transformedData = transformAppointments(resData);

        setData(transformedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const transformAppointments = (resData: any[]): TransformedAppointment[] => {
    const transformedData: TransformedAppointment[] = [];

    resData.forEach((obj: any) => {
      transformObjectAppointments(obj, transformedData);
    });

    return transformedData;
  };

  const transformObjectAppointments = (obj: any, transformedData: TransformedAppointment[]) => {
    obj.appointments.forEach((appointment: any) => {
      const transformedAppointment: TransformedAppointment = {
        id: appointment._id,
        patientName: `${appointment.patient.firstName} ${appointment.patient.lastName}`,
        imgUrl: appointment.patient.imgUrl,
        appointmentId: appointment.appointmentNumber,
        gender: appointment.patient.gender,
        age: calculateAge(appointment.patient.dateOfBirth).toString(),
        location: obj.location,
        date: new Date(appointment.sessionTime).toLocaleDateString(),
        time: new Date(appointment.sessionTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: appointment.status,
      };

      transformedData.push(transformedAppointment);
    });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-medium">
          All Appointments
        </h1>
      </div>
      <div className="pb-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
