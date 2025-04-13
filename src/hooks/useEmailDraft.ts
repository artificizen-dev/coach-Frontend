import { useMutation } from "@tanstack/react-query";
import { ApiResponse } from "../types/types";
import api from "../utils/api";

export const useEmailDraft = () => {
  const uploadFile = async (file: File): Promise<ApiResponse> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post<ApiResponse>(
      "/api/services/email-draft/",
      formData
    );

    return response.data;
  };

  return useMutation({
    mutationFn: uploadFile,
    onError: (error) => {
      console.error("Error uploading file:", error);
    },
  });
};
