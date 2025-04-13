import React, { useState } from "react";
import { DraftedEmail } from "../../types/types";

interface DraftedEmailSectionProps {
  draftedEmail: DraftedEmail;
}

export const DraftedEmailSection: React.FC<DraftedEmailSectionProps> = ({
  draftedEmail,
}) => {
  const [copied, setCopied] = useState<"subject" | "body" | "all" | null>(null);

  const copyToClipboard = (text: string, type: "subject" | "body" | "all") => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const copyAll = () => {
    const fullEmail = `To: ${draftedEmail.To}\nSubject: ${draftedEmail.subject}\n\n${draftedEmail.body}`;
    copyToClipboard(fullEmail, "all");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
          Drafted Email
        </h3>

        <button
          onClick={copyAll}
          className="flex items-center px-3 py-1 space-x-1 text-sm transition-colors rounded-md text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20"
        >
          {copied === "all" ? (
            <>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy All</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              To
            </span>
          </div>
          <div className="p-2 bg-gray-50 rounded-md dark:bg-gray-800">
            <p className="text-gray-800 dark:text-gray-200">
              {draftedEmail.To}
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Subject
            </span>

            <button
              onClick={() => copyToClipboard(draftedEmail.subject, "subject")}
              className="flex items-center space-x-1 text-xs text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            >
              {copied === "subject" ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="p-2 bg-gray-50 rounded-md dark:bg-gray-800">
            <p className="text-gray-800 dark:text-gray-200">
              {draftedEmail.subject}
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Body
            </span>

            <button
              onClick={() => copyToClipboard(draftedEmail.body, "body")}
              className="flex items-center space-x-1 text-xs text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            >
              {copied === "body" ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="p-3 bg-gray-50 rounded-md dark:bg-gray-800 whitespace-pre-wrap">
            <p className="text-gray-800 dark:text-gray-200">
              {draftedEmail.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
