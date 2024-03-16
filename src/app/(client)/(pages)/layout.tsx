import SideMenu from "@/components/common/layout/side-menu";
import Container from "@/components/common/ui/container";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <section>
        <div className="flex  ">
          <SideMenu />
          {children}
        </div>
      </section>
    </Container>
  );
}
