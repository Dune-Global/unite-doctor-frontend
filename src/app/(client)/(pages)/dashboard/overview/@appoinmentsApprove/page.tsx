import Heading from "@/components/overview/appoinment-approve/heading";
import PatientApproveList from "@/components/overview/appoinment-approve/patient-approve-list";

export default function AppoinmentsApprove() {
    return (
        <div className="p-2">
            <Heading />
            <PatientApproveList />
        </div>
    )
}