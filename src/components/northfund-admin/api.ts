/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { toast } from "react-toastify";
import { CampaignData } from "./type";
interface AuthorizeCampaignResponse {
  message: string;
  campaign: any;
}

export async function storeDataToBackend(campaignData: CampaignData) {
  try {
    const apiUrl = "http://localhost:3000";

    const response = await axios.post(
      `${apiUrl}/api/campaign/create-campaign`,
      campaignData
    );

    if (response.status === 201) {
      console.log(response.data);
      toast.success("Campaign created successfully in the backend!");
      return response.data;
    } else {
      throw new Error("Failed to create campaign in backend.");
    }
  } catch (error) {
    toast.error(`Error sending campaign data to backend: ${error.message}`);
    throw error;
  }
}

export async function getCampaignDataFromBackend() {
  try {
    const apiUrl = "http://localhost:3000";

    const response = await axios.get(`${apiUrl}/api/admin/campaigns`);
    if (response.status === 200) {
      console.log(response.data);
      return response.data.campaigns;
    } else {
      throw new Error("Failed to fetch campaigns from backend.");
    }
  } catch (error) {
    toast.error(
      `Error fetching campaign data from the backend: ${error.message}`
    );
    throw error;
  }
}

export const authorizeCampaign = async (
  startDate: string,
  email: string,
  title: string,
  status: "approved" | "rejected"
): Promise<AuthorizeCampaignResponse> => {
  try {
    const apiUrl = "http://localhost:3000";

    const response = await axios.put(
      `${apiUrl}/api/admin/campaigns/authorize`,
      {
        startDate,
        email,
        title,
        status,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "An error occurred");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const checkCampaignApproval = async (
  name: any,
  email: any,
  title: any
) => {
  try {
    console.log(name, email, title);
    const apiUrl = "http://localhost:3000";

    const response = await axios.post(
      `${apiUrl}/api/campaign/authorize-campaign`,
      {
        name,
        email,
        title,
      }
    );

    if (response.status === 200) {
      console.log(response.data.message);
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      console.error(
        "Error:",
        error.response.data.message || error.response.data.error
      );
      throw new Error(error.response.data.message || error.response.data.error);
    } else {
      console.error("Network error:", error.message);
      throw new Error(
        "An error occurred while checking the campaign approval."
      );
    }
  }
};
