"use client";

import React from "react";
import { Sidebar } from "./sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 border-r bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-10 py-6">
        {children}
      </div>

    </div>
  );
}