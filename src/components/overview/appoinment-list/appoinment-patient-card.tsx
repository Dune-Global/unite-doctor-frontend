import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, X } from "lucide-react";

export default function AppoinmentPatientCard({
  name,
  appoinmentNo,
  appoinmentDate,
  appoinmentStartTime,
  appoinmentEndTime,
  imageUrl,
  status,
  currentTime,
}: {
  name: string;
  appoinmentNo: string;
  appoinmentDate?: string;
  appoinmentStartTime?: string;
  appoinmentEndTime?: string;
  imageUrl: string;
  status?: string;
  currentTime: Date;
}) {
  const firstLetter = name.charAt(0).toUpperCase();
  const startTime = new Date(`${appoinmentDate} ${appoinmentStartTime}`);
  const endTime = new Date(`${appoinmentDate} ${appoinmentEndTime}`);

  let displayText;
  let displayTextColorClass;

  if (currentTime < startTime) {
    displayText = `Starts at ${appoinmentStartTime}`;
  } else {
    displayText = "Ongoing";
    displayTextColorClass = "bg-[#EBFAEF] rounded-md py-2 px-4 text-ugreen-600";
  }

  const handleCancel = () => {
    alert("Cancel");
  };

  const handleDone = () => {
    alert("Done");
  };

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row gap-3 items-center w-1/2">
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{firstLetter}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-sm font-medium line-clamp-1" title={name}>{name}</h3>
          <p className="text-xs text-ugray-400">
            Appoinment No: {appoinmentNo}
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <p className={`text-xs text-ugray-400 ${displayTextColorClass}`}>
          {displayText}
        </p>
      </div>
    </div>
  );
}
