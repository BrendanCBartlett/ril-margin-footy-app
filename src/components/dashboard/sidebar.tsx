"use client";

import React from "react";

export function Sidebar() {
  return (
    <div className="w-full h-full bg-green-900 text-white p-4">
      <h2 className="text-lg font-semibold mb-6">Dashboard</h2>

      <ul className="space-y-3 text-sm">
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>CRM</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}