export interface CampaignData {
  id: string;
  email: string;
  title: string;
  name: string;
  admission_proof_url: string;
  university_name: string;
  matric_number: string;
  course_of_study: string;
  year_of_entry: number;
  student_image_url: string;
  student_result_image_url: string;
  funding_reason: string;
  project_link: string;
  goal: number;
  start_at: Date;
  end_at: Date;
  status: "pending" | "approved" | "rejected";
  created_at: Date;
  updated_at?: Date;
  authorized: boolean;
}
