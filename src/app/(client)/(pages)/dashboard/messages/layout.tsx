import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Message",
  description: "Doctor Message Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
