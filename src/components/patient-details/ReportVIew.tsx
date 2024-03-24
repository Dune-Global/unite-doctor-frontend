import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Skeleton } from "@/components/ui/skeleton";


import Image from "next/image";

export default function ReportView({
  reportUrl = "",
}: {
  reportUrl?: string;
}) {
  const style = {
    tableHeading: "w-4/5 text-ugray-900/70 font-medium",
  };


  return (
    <Zoom>
      {reportUrl === "" ? (
        <Skeleton className="w-[500px] h-[500px]" />
      ) : (
        <Image
          src={reportUrl}
          alt="Report"
          width={500}
          height={500}
          priority={false}
          unoptimized={false}
        />
      )}
    </Zoom>
  );
}
