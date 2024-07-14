import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("mx-auto w-full px-10 sm:px-6 lg:px-8 relative")}>
      {children}
    </div>
  );
};

export default Wrapper;
