"use client";

import { useState, useEffect } from "react";
import SummeryCard from "@/components/overview/summery/summery-card";
import { Calendar, User, MessageSquareMoreIcon, Clock } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store";
import { getDashboardData } from "@/api/dashboard/dashboardapi";
import { setTodaysAppointments, setTotalPatients, setDashboardAppointments } from "@/store/reducers/dashboard-reducer";

export default function Summery() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const dispatch = useDispatch();

  const totalPatients = useSelector(
    (state: RootState) => state.dashBoardDataState.totalPatients
  )

  const todaysAppointments = useSelector(
    (state: RootState) => state.dashBoardDataState.todaysAppointments
  )

  useEffect(() => {
    console.log(totalPatients, "TOtal Patients")
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    const fetchData = async () => {
      getDashboardData()
        .then((res) => {
          console.log(res.data.data, "from summary")
          const { connectedPatientsCount, todayAppointmentsCount, todayAppointments
          } = res.data.data

          dispatch(setTotalPatients(connectedPatientsCount));
          dispatch(setTodaysAppointments(todayAppointmentsCount));
          dispatch(setDashboardAppointments(todayAppointments));
        })
        .catch((err) => {
          console.log(err)
        })
    };

    fetchData();

    return () => {
      clearInterval(timer);
    };


  }, []);

  return (
    <div className="mt-6 flex flex-row flex-wrap">
      <SummeryCard
        cardColor="bg-uindigo-400"
        description="Time"
        Icon={Clock}
        isNumber={false}
        value={currentTime}
      />
      <SummeryCard
        cardColor="bg-upink-400"
        description="Today's Appointments"
        Icon={Calendar}
        isNumber={true}
        value={todaysAppointments.toString()}
      />
      <SummeryCard
        cardColor="bg-uorange-600"
        description="Total Patients"
        Icon={User}
        isNumber={true}
        value={totalPatients.toString()}
      />
      <SummeryCard
        cardColor="bg-umint-600"
        description="Unread Messages"
        Icon={MessageSquareMoreIcon}
        isNumber={false}
        value="Coming soon"
      />
    </div>
  );
}