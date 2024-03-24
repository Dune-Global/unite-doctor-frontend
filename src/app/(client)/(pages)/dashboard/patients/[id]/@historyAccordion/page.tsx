"use client";

import HistoryAccordion from "@/components/patient-details/HistoryAccordion";
import { getPatientHistory } from "@/data/mock/patient-history";
import { PatientHistoryList } from "@/types/patient-history";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [patientHistory, setPatientHistory] = useState<PatientHistoryList[]>(
    []
  );

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const historyData = await getPatientHistory();
        setPatientHistory(historyData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching patient history:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="my-16">
      {patientHistory.map((historyItem, index) => (
        <HistoryAccordion
          key={historyItem.id}
          {...historyItem}
          isLastItem={index === patientHistory.length - 1} // Pass true for the last item
        />
      ))}
    </div>
  );
}
