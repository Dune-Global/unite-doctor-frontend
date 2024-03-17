import AppoinmentList from "@/components/overview/appoinment-list/appoinment-list";
import Heading from "@/components/overview/appoinment-list/heading";

export default function AppoinmentsList() {
  return (
    <div className="p-2">
      <Heading />
      <AppoinmentList/>
    </div>
  );
}
