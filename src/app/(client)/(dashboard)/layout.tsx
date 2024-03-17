import Container from "@/components/common/container";
import SideMenu from "@/components/common/layout/side-menu";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-ugray-50 h-[100%]">
      <Container>
        <div className="flex flex-col lg:flex-row ">
          <SideMenu />
          {children}
        </div>
      </Container>
    </div>
  );
}
