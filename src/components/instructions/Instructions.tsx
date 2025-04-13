import React from "react";

export const Instructions: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
          Upload your leads file to generate personalized email drafts
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This tool helps you quickly create professional, personalized emails
          based on your lead data.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          Welcome to the Email Drafting Tool
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This application helps you generate personalized email drafts based on
          your lead data.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Instructions:
        </h3>

        <ol className="space-y-2 list-decimal list-inside">
          <li className="text-gray-700 dark:text-gray-300">
            Upload your Excel (.xlsx) file using the sidebar
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            Click the "Process File" button
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            View and copy your personalized email drafts
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            It will only process the 4 rows of excel file because of testing
            purpose
          </li>
        </ol>
      </div>

      <p className="text-gray-700 dark:text-gray-300">
        The tool will analyze your lead data and generate relevant email content
        for each lead.
      </p>
    </div>
  );
};
