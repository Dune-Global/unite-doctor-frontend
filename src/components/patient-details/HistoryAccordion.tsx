"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Divide } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../common/Button";
import { Prescription, Stage } from "@/types/doctor-patient-details";
import Progress from "./PatientProgress";
import { UniteModal } from "../common/UniteModal";
import PrescriptionView from "./PrescriptionView";

interface HistoryAccordionProps {
  details: Prescription;
  isLastItem?: boolean;
}

const STAGE_MAP: Record<Stage, number> = {
  "Medicine Started": 1,
  "Maintenance Stage": 2,
  "Recovery Stage": 3,
  "Final Stage": 4,
};

const HistoryAccordion: React.FC<HistoryAccordionProps> = ({
  details,
  isLastItem = false,
}) => {
  console.log("\n\n\nHistoryAccordion props:", details);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentStage = STAGE_MAP[details.stage] || 1;

  const handlePrescriptionClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className={` relative pl-4 ${
        !isLastItem && "border-l-2 border-dashed border-ugray-200  pb-10 "
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full border-4 absolute border-uindigo-400 bg-ugray-0   ${
          !isLastItem ? "-left-2" : " -left-[6px] "
        } `}
      />
      <div className="mb-3 pl-4 ">
        {details.sessionDate
          ? new Date(details.sessionDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "N/A"}
      </div>
      <Accordion type="multiple" className="flex flex-col gap-4 mx-4">
        <AccordionItem
          value="item-1"
          className="bg-ugray-0 rounded-md px-6 py-2"
        >
          <AccordionTrigger className="flex">
            <div className="flex flex-col items-start gap-3 justify-between w-full">
              <span className="text-ugray-900 text-left text-lg font-semibold">
                {details.diseases}
              </span>
              <span className="text-ugray-200 font-normal sm:text-left text-justify text-sm sm:text-base">
                {details.sessionDescription}
              </span>
              <div className="md:mb-14 mt-6 max-w-[960px] w-full md:px-10 xl:px-16">
                <Progress currentStep={currentStage} />
              </div>
            </div>
            <ChevronDown className="h-6 w-6 shrink-0 text-ugray-400 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="border-b border-ugray-100 mb-6" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex flex-col py-3 sm:p-3 gap-2">
                <span className="text-ugray-200">Symptoms</span>
                <span className="text-justify sm:text-left">
                  {details.symptoms}
                </span>
              </div>
              <div className="flex flex-col py-3 sm:p-3 gap-2">
                <span className="text-ugray-200">Status</span>
                <span>{details.stage}</span>
              </div>
              <div className="mt-4 sm:ml-0 sm:mt-0">
                <Button
                  onClick={handlePrescriptionClick}
                  variant="default"
                  size="sm"
                >
                  View Prescription
                </Button>
                <UniteModal
                  onClose={() => setIsModalOpen(false)}
                  title="Prescription Details"
                  isOpen={isModalOpen}
                  content={
                    <div className="my-32 lg:my-52">
                      <PrescriptionView prescriptionDetails={details} />
                    </div>
                  }
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HistoryAccordion;


