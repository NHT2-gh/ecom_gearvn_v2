import React from "react";
import Header from "./header";
import Footer from "./footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="h-fit relative overflow-hidden w-screen min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
