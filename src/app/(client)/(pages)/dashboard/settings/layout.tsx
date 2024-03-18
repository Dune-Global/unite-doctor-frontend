import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Settings",
  description: "Doctor Settings Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
