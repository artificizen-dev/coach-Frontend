import React from "react";

interface ProcessButtonProps {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
}

export const ProcessButton: React.FC<ProcessButtonProps> = ({
  onClick,
  disabled,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        flex items-center justify-center px-4 py-2 space-x-2 
        font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
            : "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500"
        }
      `}
    >
      {isLoading ? (
        <>
          <svg
            className="w-5 h-5 animate-spin"
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
          <span>Processing...</span>
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span>Process File</span>
        </>
      )}
    </button>
  );
};
