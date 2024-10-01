import { web3 } from "@coral-xyz/anchor";

import { PublicKey } from "@solana/web3.js";

export const getProgramDerivedCampaign = async (
  programId: PublicKey,
  signerKey: PublicKey,
  campaignTitle: string
): Promise<{ campaign: web3.PublicKey; bump: number }> => {
  const seeds_campaign = [Buffer.from(campaignTitle), signerKey.toBytes()];
  const [campaign, bump] = await web3.PublicKey.findProgramAddressSync(
    seeds_campaign,
    programId
  );
  return { campaign, bump };
};

export const getProgramDerivedContribution = async (
  programId: PublicKey,
  signerKey: PublicKey,
  campaign: PublicKey
): Promise<{ contribution: web3.PublicKey; bump: number }> => {
  const seeds_contribution = [campaign.toBytes(), signerKey.toBytes()];
  const [contribution, bump] = await web3.PublicKey.findProgramAddressSync(
    seeds_contribution,
    programId
  );
  return { contribution, bump };
};
