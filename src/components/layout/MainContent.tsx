import React from "react";
import { ApiResponse, UploadStatus } from "../../types/types";
import { Instructions } from "../instructions/Instructions";
import { ResultsList } from "../results/ResultsList";

interface MainContentProps {
  uploadStatus: UploadStatus;
  results: ApiResponse | null;
}

export const MainContent: React.FC<MainContentProps> = ({
  uploadStatus,
  results,
}) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            📧 Email Drafting Tool
          </h1>
        </header>

        {uploadStatus === "uploading" && (
          <div className="flex items-center justify-center p-12">
            <div className="text-center">
              <div className="inline-block mb-4">
                <svg
                  className="w-12 h-12 text-purple-600 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                Processing your file...
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                This may take a few moments.
              </p>
            </div>
          </div>
        )}

        {uploadStatus === "idle" && !results && <Instructions />}

        {uploadStatus === "success" && results && (
          <ResultsList results={results} />
        )}

        {uploadStatus === "error" && (
          <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex space-x-3">
              <svg
                className="w-6 h-6 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-red-800 dark:text-white">
                  Error Processing File
                </h3>
                <p className="mt-2 text-sm text-red-700 dark:text-white">
                  There was an error processing your file. Please check that
                  your file is in the correct format and try again.
                </p>
                <p className="mt-3 text-sm text-red-700 dark:text-white">
                  If the problem persists, please contact support.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
