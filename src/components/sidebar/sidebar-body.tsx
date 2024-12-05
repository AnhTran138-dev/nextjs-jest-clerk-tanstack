import React from "react";
import { motion } from "framer-motion";
import { DesktopSidebar } from "@/components/sidebar/desktop-sidebar";
import { MobileSidebar } from "@/components/sidebar/mobile-sidebar";

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};
