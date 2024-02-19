interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen w-screen max-w-screen-sm flex-col justify-center items-center">
      {children}
    </main>
  );
};

export default Layout;
