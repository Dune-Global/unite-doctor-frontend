"use client";

import { RootState } from "@/store";
import { Metadata } from "next";
import { useSelector } from "react-redux";

// export const metadata: Metadata = {
//   title: "Unite | Patient Details",
//   description: "Patient Details Page",
// };

export default function Layout({
  children,
  historyAccordion,
  medicalHistory,
  patientCard,
  progressBar,
  reportsCard,
}: {
  children: React.ReactNode;
  historyAccordion: React.ReactNode;
  medicalHistory: React.ReactNode;
  patientCard: React.ReactNode;
  progressBar: React.ReactNode;
  reportsCard: React.ReactNode;
}) {
  const medicalHistoryPage = useSelector(
    (state: RootState) => state.patientDetailState.medicalHistoryPage
  );

  return (
    <>
      {children}
      <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:mt-5 md:gap-3">
        <div className="space-y-36 md:col-span-2 lg:col-span-2">
          {medicalHistoryPage ? (
            <div className="md:px-6">{medicalHistory}</div>
          ) : (
            <>
              {/* <div className="md:px-6">{progressBar}</div> */}
              <div>{historyAccordion}</div>
            </>
          )}
        </div>
        <div className="mb-10 space-y-16 md:space-y-8 md:mt-20 md:col-span-1 lg:col-span-1 md:grid md:grid-rows-2">
          {patientCard}
          <div className="md:ml-3">{reportsCard}</div>
        </div>
      </div>
    </>
  );
}
