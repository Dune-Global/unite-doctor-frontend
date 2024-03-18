import SummeryCard from "@/components/overview/summery/summery-card";
import { Calendar, User, MessageSquareMoreIcon, Clock } from "lucide-react";

export default function Summery() {
  return (
    <div className="mt-6 flex flex-row flex-wrap justify-between">
      <SummeryCard
        cardColor="bg-uindigo-400"
        description="Today's Appointments"
        Icon={Calendar}
        value="24.3K"
      />
      <SummeryCard
        cardColor="bg-upink-400"
        description="Total Patients"
        Icon={User}
        value="24.3K"
      />
      <SummeryCard
        cardColor="bg-uorange-600"
        description="Unread Messages"
        Icon={MessageSquareMoreIcon}
        value="24.3K"
      />
      <SummeryCard
        cardColor="bg-umint-600"
        description="Total Work Hours"
        Icon={Clock}
        value="24.3K"
      />
    </div>
  );
}
