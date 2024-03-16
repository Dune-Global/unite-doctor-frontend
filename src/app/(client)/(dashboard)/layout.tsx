import SideMenu from "@/components/common/layout/side-menu";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className=" ">
        <SideMenu />
      </div>

      {children}
    </section>
  );
}
