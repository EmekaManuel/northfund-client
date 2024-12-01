import { ColumnDef } from "@tanstack/react-table";
import { CampaignData } from "./type";

export const columns: ColumnDef<CampaignData>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "university_name",
    header: "University Name",
  },
  {
    accessorKey: "matric_number",
    header: "Matric Number",
  },
  {
    accessorKey: "course_of_study",
    header: "Course of Study",
  },
  {
    accessorKey: "year_of_entry",
    header: "Year of Entry",
  },
  {
    accessorKey: "funding_reason",
    header: "Funding Reason",
  },
  {
    accessorKey: "goal",
    header: "Goal",
  },
  {
    accessorKey: "start_at",
    header: "Start Date",
  },
  {
    accessorKey: "end_at",
    header: "End Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
  },
  {
    accessorKey: "authorized",
    header: "Authorized",
  },
];
