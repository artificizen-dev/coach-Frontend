import React from "react";
import { FileUploader } from "../fileUpload/FileUploader";
import { ProcessButton } from "../fileUpload/ProcessButton";
import { UploadStatus } from "../../types/types";

interface SidebarProps {
  onFileSelect: (file: File) => void;
  onProcessFile: () => void;
  selectedFile: File | null;
  uploadStatus: UploadStatus;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onFileSelect,
  onProcessFile,
  selectedFile,
  uploadStatus,
}) => {
  return (
    <div className="flex flex-col w-full p-6 bg-gray-900 text-white lg:w-80">
      <div className="flex items-center mb-8">
        <span className="text-2xl font-bold text-purple-400">
          🏢 Lead Processor
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Upload File</h2>
          <p className="text-gray-400 text-sm mb-4">
            Please upload an Excel file (.xlsx) containing lead data.
          </p>

          <FileUploader onFileSelect={onFileSelect} />

          {selectedFile && (
            <div className="mt-4 p-2 bg-gray-800 rounded-md">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-gray-300 truncate">
                  {selectedFile.name}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4">
          <ProcessButton
            onClick={onProcessFile}
            disabled={!selectedFile || uploadStatus === "uploading"}
            isLoading={uploadStatus === "uploading"}
          />
        </div>

        {uploadStatus === "error" && (
          <div className="p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-md">
            <p className="text-sm text-white">
              An error occurred while processing your file. Please try again.
            </p>
          </div>
        )}

        {!selectedFile && (
          <div className="p-4 bg-gray-800 rounded-md mt-4">
            <p className="text-gray-400 text-sm">
              Please upload an XLSX file to continue.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
