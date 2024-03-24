import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Appoinments",
  description: "Doctor Appoinments Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
