"use client";

import { accountActivation } from "@/api/auth/authAPI";
import { LucideLoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActivateAccount({
  params,
}: {
  params: { name: string };
}) {
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();
  const activationToken = searchParams.get("at");

  useEffect(() => {
    const accActivate = async () => {
      try {
        const res = await accountActivation(activationToken);
        console.log(res);

        if (res.status === 200) {
          sessionStorage.clear();
          localStorage.clear();
          setTimeout(() => {
            window.close();
          }, 2000);
        } else {
          setError("Account activation failed!");
          setErrorMessage(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    accActivate();
  }, []);

  return (
    <div className="h-screen w-full grid place-content-center">
      <div className="p-10 shadow-md rounded-lg">
        <h1 className="text-center text-4xl font-medium">
          Activating your account!
        </h1>
        <p className="text-center text-xl font-medium mt-4">
          Dr. {params.name}
        </p>
        <LucideLoaderCircle className="my-4 w-16 h-20 mx-auto animate-spin" />
        <p className="text-center text-xs">Do not clone this window</p>
        <p className="text-center text-xs">
          This window will close after activating your account!
        </p>
        {error && (
          <p className="text-ured-400 bg-[#FDE9E9] mt-3 p-2 rounded-md text-center text-xs text-red-500">
            {error}
            <br />
            <span>{errorMessage}</span>
          </p>
        )}
      </div>
    </div>
  );
}
