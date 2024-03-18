import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import SideMenu from "@/components/common/layout/side-menu";
import TopBar from "@/components/common/layout/top-bar";
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unite",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-ugray-0">
            <div className="w-full flex-none md:w-64 shadow-xl">
              <SideMenu />
            </div>
            <div className="flex-grow p-4 md:overflow-y-auto md:p-5 bg-ugray-50">
              <div className="hidden md:flex">
                <TopBar />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
