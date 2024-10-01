import { NetworkName } from "@/types";
import { PublicKey } from "@solana/web3.js";

const MAINNET_PROGRAM_ID = import.meta.env.VITE_MAINNET_PROGRAM_ID as string;
const DEVNET_PROGRAM_ID = import.meta.env.VITE_DEVNET_PROGRAM_ID as string;

export const getProgramId = (network: NetworkName) => {
  const programId = new PublicKey(
    network === NetworkName.Mainnet ? MAINNET_PROGRAM_ID : DEVNET_PROGRAM_ID
  );
  return programId;
};
