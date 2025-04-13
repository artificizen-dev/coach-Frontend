import React from "react";
import { ApiResponse } from "../../types/types";
import { EmailCard } from "./EmailCard";

interface ResultsListProps {
  results: ApiResponse | null;
}

export const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  if (!results || !results.Response || results.Response.length === 0) {
    return null;
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
        Email Drafts ({results.Response.length})
      </h2>

      <div className="space-y-4">
        {results.Response.map((emailDraft, index) => (
          <EmailCard key={index} emailDraft={emailDraft} index={index} />
        ))}
      </div>
    </div>
  );
};
