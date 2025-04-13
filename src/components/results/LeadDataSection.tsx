import React from "react";
import { LeadData } from "../../types/types";

interface LeadDataSectionProps {
  leadData: LeadData;
}

export const LeadDataSection: React.FC<LeadDataSectionProps> = ({
  leadData,
}) => {
  // Format the data for display
  const formattedData = [
    {
      label: "Name",
      value: `${leadData.first_name} ${leadData.last_name}`.trim() || "N/A",
    },
    { label: "Lead Type", value: leadData.lead_type || "N/A" },
    { label: "Industry", value: leadData.industry || "N/A" },
    { label: "Company", value: leadData.company_name || "N/A" },
    { label: "Job Title", value: leadData.job_title || "N/A" },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
        Lead Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {formattedData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {item.label}
            </span>
            <span className="text-gray-800 dark:text-gray-200 truncate">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {leadData.notes_event && (
        <div className="mt-3">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Event Notes
          </span>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
            {leadData.notes_event}
          </p>
        </div>
      )}
    </div>
  );
};
