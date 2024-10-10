import React from "react";
import { Link } from "react-router-dom";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CampaignDetails } from "@/components/admin-panel/campaign-detail";
import { truncateAddress } from "@/utils";

type PageProps = {
  params: { pda: string };
};

const CampaignDetailPage = ({ params: { pda } }: PageProps) => {
  return (
    <ContentLayout title={`Campaign: ${truncateAddress(pda)}`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/dashboard/campaigns">Campaigns</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{truncateAddress(pda)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <CampaignDetails pda={pda} />
    </ContentLayout>
  );
};

export default CampaignDetailPage;
