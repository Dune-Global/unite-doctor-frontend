"use client";

import { useState, useEffect } from "react";
import { AppointmentsApprove } from "@/data/overview/appoinments-approve";
import AppoinmentPatientCard from "./appoinment-patient-card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function AppoinmentList() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const ongoingOrUpcomingAppointments = AppointmentsApprove.filter(
    (patient) => {
      const endTime = new Date(
        `${patient.appoinmentDate} ${patient.appoinmentEndTime}`
      );
      return currentTime < endTime;
    }
  );

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleClickPrev = (): void => {
    setCurrentDate(
      (prevDate) =>
        new Date(
          prevDate.getFullYear(),
          prevDate.getMonth(),
          prevDate.getDate() - 7
        )
    );
  };

  const handleClickNext = (): void => {
    setCurrentDate(
      (prevDate) =>
        new Date(
          prevDate.getFullYear(),
          prevDate.getMonth(),
          prevDate.getDate() + 7
        )
    );
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleDateClick = (date: Date): void => {
    setSelectedDate(date);
    console.log(date.toLocaleDateString("en-US"));
  };

  const renderDateButton = (date: Date, index: number): JSX.Element => {
    return (
      <button
        key={index}
        onClick={() => handleDateClick(date)}
        className={`flex flex-col items-center justify-items-center gap-2 rounded-md p-2${
          isToday(date)
            ? "rounded-md p-2 bg-[#FFEACC]"
            : selectedDate?.getTime() === date.getTime()
            ? "rounded-md p-2 bg-[#CEE6FF]"
            : ""
        }`}
      >
        <p>{date.toLocaleDateString("en-US", { weekday: "narrow" })}</p>
        <p>{date.getDate()}</p>
      </button>
    );
  };

  const renderWeek = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      days.push(renderDateButton(date, i));
    }

    return days;
  };

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
          <p className="text-center text-xl font-medium my-10">
            No appointments
          </p>
        )}
      </div>
      <div className="mt-8">
        <div className="flex flex-row gap-4 items-center">
          <h2 className="text-base font-medium">
            {currentDate.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h2>
          <div className="flex flex-row gap-1">
            <button
              onClick={handleClickPrev}
              className="bg-ublue-200 hover:bg-ublue-100 text-ugray-0 rounded-md"
            >
              <ChevronLeftIcon size={16} />
            </button>
            <button
              onClick={handleClickNext}
              className="bg-ublue-200 hover:bg-ublue-100 text-ugray-0 rounded-md"
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-1 mt-4 justify-between">
          {renderWeek()}
        </div>
      </div>
    </div>
  );
}
