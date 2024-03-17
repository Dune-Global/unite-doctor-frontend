import React from "react";

export default function Welcome() {
  const drName = "Wasath Theekshana";
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetingMessage = "";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "It's a beautiful morning and have a nice day at your work";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Keep going with your schedule, have a nice day";
  } else {
    greetingMessage = "It's time to relax, have a good night doctor";
  }

  return (
    <div className="mb-6 pl-2">
      <h1 className="text-3xl font-medium">
        Welcome Dr. <span>{drName}</span>,
      </h1>
      <h3 className="mt-1 text-ugray-400 text-sm font-medium">
        {greetingMessage}
      </h3>
    </div>
  );
}
