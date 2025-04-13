export interface LeadData {
  first_name: string;
  last_name: string;
  lead_type: string;
  notes_event: string;
  industry: string;
  company_name: string;
  job_title: string;
}

export interface DraftedEmail {
  To: string;
  subject: string;
  body: string;
}

export interface EmailDraftResponse {
  lead_data: LeadData;
  drafted_email: DraftedEmail;
}

export interface ApiResponse {
  Response: EmailDraftResponse[];
}

export interface FileUploadState {
  file: File | null;
  isUploading: boolean;
  error: string | null;
}

export type UploadStatus = "idle" | "uploading" | "success" | "error";
