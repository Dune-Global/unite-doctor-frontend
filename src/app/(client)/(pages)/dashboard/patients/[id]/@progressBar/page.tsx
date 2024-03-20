"use client";

import Progress from "@/components/patient-details/PatientProgress";

export default function Page() {
  return (
    <div className="">
      <h1 className="md:mt-8 font-semibold text-2xl text-ugray-600 self-center lg:self-start ">
        Patient Details
      </h1>
      <div className="mb-14 mt-6 max-w-[960px] w-full px-10 xl:px-2">
        <Progress currentStep={2} />
      </div>
    </div>
  );
}
