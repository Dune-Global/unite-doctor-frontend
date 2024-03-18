import GenderDonut from "@/components/overview/gender/gender-donut";
import Heading from "@/components/overview/gender/heading";

export default function Gender() {
    return (
        <div className="p-2">
            <Heading />
            <GenderDonut />
        </div>
    )
}