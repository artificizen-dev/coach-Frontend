import React, { useState } from "react";
import { EmailDraftResponse } from "../../types/types";
import { LeadDataSection } from "./LeadDataSection";
import { DraftedEmailSection } from "./DraftEmailSection";

interface EmailCardProps {
  emailDraft: EmailDraftResponse;
  index: number;
}

export const EmailCard: React.FC<EmailCardProps> = ({ emailDraft, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  const getDisplayName = () => {
    const { first_name, last_name, company_name } = emailDraft.lead_data;

    if (first_name || last_name) {
      return `${first_name} ${last_name}`.trim();
    }

    return company_name || `Lead #${index + 1}`;
  };

  return (
    <div className="overflow-hidden transition-shadow border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 hover:shadow-md">
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 text-sm font-medium text-white bg-purple-600 rounded-full">
            {index + 1}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {getDisplayName()}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {emailDraft.lead_data.company_name ||
                emailDraft.lead_data.industry ||
                "No company info"}
            </p>
          </div>
        </div>

        <button className="p-1 text-gray-400 rounded-full hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none">
          <svg
            className={`w-5 h-5 transition-transform ${
              expanded ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {expanded && (
        <div className="p-4 border-t dark:border-gray-700">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <LeadDataSection leadData={emailDraft.lead_data} />
            <DraftedEmailSection draftedEmail={emailDraft.drafted_email} />
          </div>
        </div>
      )}
    </div>
  );
};
