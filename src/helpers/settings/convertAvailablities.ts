import {
  ApiResponse,
  AvailableAppointmentsList,
} from "@/types/available-appointments";

export function transformApiResponse(
  response: ApiResponse
): AvailableAppointmentsList[] {
  const { doctor, availabilities } = response;
  const availableAppointments: AvailableAppointmentsList[] = [];

  availabilities.forEach((availability, index) => {
    const dateObject = new Date(availability.date);
    const date = dateObject.toISOString().split("T")[0];
    const time = dateObject.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    availableAppointments.push({
      id: (index + 1).toString(),
      date: date,
      time: time,
      duration: availability.sessionDuration,
      appointments: availability.numberOfAppointments,
      location: availability.location,
    });
  });

  return availableAppointments;
}
