export interface Campaign {
  donationCompleted: boolean;
  claimed: boolean;

  email: string;
  title: string;
  name: string;

  matricNumber: string;
  courseOfStudy: string;
  yearOfEntry: number;

  studentImageUrl: string;
  studentResultImageUrl: string;

  fundingReason: string;
  projectLink: string;

  goal: number;
  totalDonated: number;
  startTimestamp: number;
  endTimestamp: number;
}

export interface ContributionData {
  pdaAddress: string;
  contributor: string;
  amount: number;
}
