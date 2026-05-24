"use client";

import React from "react";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-4">
      {children}
    </div>
  );
}