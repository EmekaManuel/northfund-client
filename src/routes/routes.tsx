/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

import MyCampaignsPage from "@/pages/myCampaignsPage";
const NewCampaignPage = lazy(() => import("../pages/newCampaignPage"));

const HomePage = lazy(() => import("../pages/homePage"));
import AllCampaignsPage from "../pages/allCampaignsPage";
const CampaignDetailPage = lazy(() => import("../pages/campaignDetailPage"));
const DashboardPage = lazy(() => import("../pages/dashboardPage"));

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    layout: "home",
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    layout: "dashboard",
    children: [
      {
        path: "campaigns",
        element: <AllCampaignsPage />,
      },
      {
        path: "campaigns/new",
        element: <NewCampaignPage />,
      },
      {
        path: "campaigns/:pdaAddress",
        element: <MyCampaignsPage />,
      },
    ],
  },
  {
    path: "/campaigns",
    element: <AllCampaignsPage />,
    layout: "dashboard",
    children: [
      {
        path: "campaigns/:pdaAddress",
        element: <CampaignDetailPage />,
      },
    ],
  },
];
