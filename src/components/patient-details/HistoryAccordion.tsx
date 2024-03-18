import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

import React from "react";
import { Button } from "../common/Button";

const HistoryAccordion = () => {
  return (
    <Accordion type="multiple" className="flex flex-col gap-4 m-4">
      <AccordionItem value="item-1" className="bg-ugray-0 rounded-md px-6 py-2">
        <AccordionTrigger className="flex">
          <div className="flex flex-col items-start gap-3">
            <span className="text-ugray-900 text-left text-lg font-semibold">
              Disease Name
            </span>
            <span className="text-ugray-200 text-left">
              Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ratione, sapiente Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium quas hic animi earum? Exercitationem
              reiciendis dolor porro neque architecto! Explicabo.
            </span>
          </div>
          <ChevronDown className="h-6 w-6 shrink-0 text-ugray-400 transition-transform duration-200" />
        </AccordionTrigger>
        <AccordionContent>
          <div className="border-b border-ugray-200 mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex flex-col p-3 gap-2">
              <span className="text-ugray-200">Symptoms</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, odit!
              </span>
            </div>
            <div className="flex flex-col p-3 gap-2">
              <span className="text-ugray-200">Status</span>
              <span>Medicine Started</span>
            </div>
            <div>
              <Button variant="default" size="sm">
                View Prescription
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default HistoryAccordion;
