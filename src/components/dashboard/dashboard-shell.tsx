"use client";

import React from "react";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      
      {/* Sidebar spacer */}
      <div className="w-64 flex-shrink-0" />

      {/* Main content */}
      <div className="flex-1 p-6">
        {children}
      </div>

    </div>
  );
}
