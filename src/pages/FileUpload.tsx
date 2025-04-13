import React, { useState } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { MainContent } from "../components/layout/MainContent";
import { useEmailDraft } from "../hooks/useEmailDraft";
import { ApiResponse, UploadStatus } from "../types/types";

export const FileUploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [results, setResults] = useState<ApiResponse | null>(null);

  const { mutate } = useEmailDraft();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    // Reset results when a new file is selected
    if (results) {
      setResults(null);
      setUploadStatus("idle");
    }
  };

  const handleProcessFile = () => {
    if (!selectedFile) return;

    setUploadStatus("uploading");

    mutate(selectedFile, {
      onSuccess: (data) => {
        setResults(data);
        setUploadStatus("success");
      },
      onError: () => {
        setUploadStatus("error");
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 lg:flex-row">
      <Sidebar
        onFileSelect={handleFileSelect}
        onProcessFile={handleProcessFile}
        selectedFile={selectedFile}
        uploadStatus={uploadStatus}
      />

      <MainContent uploadStatus={uploadStatus} results={results} />
    </div>
  );
};
