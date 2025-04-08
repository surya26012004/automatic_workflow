import React from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";
import { ThemeProvider } from "@/providers/theme-provider";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex overflow-hidden h-screen">
        <Sidebar />
        <div className="w-full">
          <InfoBar />
          {props.children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
