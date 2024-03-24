import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Patients",
  description: "Doctor Patients Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
