import NavBar from "./nav";

interface LayoutProps {
  children: React.ReactNode;
  setSection: (section: number) => void;
}

const Layout = ({ children, setSection }: LayoutProps) => {
  return (
    <>
      <NavBar setSection={setSection} />
      {children}
    </>
  );
};

export default Layout;
