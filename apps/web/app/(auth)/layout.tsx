const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen min-w-screen flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default Layout;
