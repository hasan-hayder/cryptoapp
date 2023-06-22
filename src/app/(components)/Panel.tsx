import React from "react";

interface PanelProps {
  children: React.ReactNode;
}

function Panel({ children }: PanelProps) {
  return (
    <div className="flex items-center text-3xl border text-burgundy rounded p-3 shadow bg-logo w-full">
      {children}
    </div>
  );
}

export default Panel;
