import React from 'react';
import { AcquisitionOverview, LatestTransactions, ExportPipeline } from '../components/Logistics';
import { useSearchParams } from "react-router-dom";

export default function LogisticsExportPage() {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("search")?.toLowerCase() || "";

  return (
    <div className="p-4 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {query && (
        <div className="bg-blue-100 p-3 rounded-lg text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          Showing results for: <strong>{query}</strong>
        </div>
      )}

      {/* 1. Local Transport (Domestic) */}
      <AcquisitionOverview />
      
      {/* 2. Global Transport (Export) */}
      <ExportPipeline />
      
      {/* 3. Financial Milestones */}
      <LatestTransactions />
    </div>
  );
}