"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function StatsCards() {
  const [ladderCount, setLadderCount] = useState(0);

  useEffect(() => {
    async function fetchLadderCount() {
      const { data, error } = await supabase
        .from("v_public_ladder")
        .select("*");

      if (error) {
        console.error("Error fetching ladder:", error);
        return;
      }

      if (data) {
        setLadderCount(data.length);
      }
    }

    fetchLadderCount();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <div className="rounded-xl bg-gray-100 p-4">
        <h3 className="text-sm text-gray-500">Total Entries</h3>
        <p className="text-xl font-semibold">{ladderCount}</p>
      </div>

      <div className="rounded-xl bg-gray-100 p-4">
        <h3 className="text-sm text-gray-500">Metric 2</h3>
        <p className="text-xl font-semibold">0</p>
      </div>

      <div className="rounded-xl bg-gray-100 p-4">
        <h3 className="text-sm text-gray-500">Metric 3</h3>
        <p className="text-xl font-semibold">0</p>
      </div>

      <div className="rounded-xl bg-gray-100 p-4">
        <h3 className="text-sm text-gray-500">Metric 4</h3>
        <p className="text-xl font-semibold">0</p>
      </div>
    </div>
  );
}
``