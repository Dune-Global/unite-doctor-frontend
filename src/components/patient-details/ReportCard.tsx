import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "react-medium-image-zoom/dist/styles.css";
import { viewReportActionHandler } from "@/actionLayer/patients/patientsAction";
import { Button } from "@/components/common/Button";
import ReportView from "./ReportVIew";
import React, { useState } from "react";

export default function ReportCard({
  reportId = "",
  reportName = "Report Name",
  date = "01/01/2021",
}: {
  reportId?: string;
  reportName?: string;
  date?: string;
}) {
  const style = {
    tableHeading: "w-4/5 text-ugray-900/70 font-medium",
  };

  const formatedDate = date ? new Date(date).toLocaleDateString("en-US") : "";
  const [reportUrl, setReportUrl] = useState("");

  const getImage = async () => {
    const res = await viewReportActionHandler(reportId);
    setReportUrl(res.data.report.reportUrl);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer" onClick={getImage}>
        <div className="bg-ugray-0  rounded-lg p-4 flex flex-row justify-between">
          <div className={`${style.tableHeading}`}>
            <h1>{reportName}</h1>
          </div>
          <div className={`${style.tableHeading} !w-1/4 text-right`}>
            <h1>{formatedDate}</h1>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{reportName}</DialogTitle>
          <DialogDescription>{formatedDate}</DialogDescription>
        </DialogHeader>

        <ReportView reportUrl={reportUrl} />

        <DialogClose asChild>
          <div className="max-w-5">
            <Button>Close</Button>
          </div>
        </DialogClose>

        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
