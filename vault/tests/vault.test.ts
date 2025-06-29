import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Vault } from "../target/types/vault";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  TransactionInstruction,
  SystemProgram,
} from "@solana/web3.js";
import { test, expect, describe } from "bun:test";
import { fromWorkspace, LiteSVMProvider } from "anchor-litesvm";
import IDL from "../target/idl/vault.json";
import { BN } from "bn.js";
const PROGRAM_ID = new PublicKey(
  "5EpnmfjXgSvEshE8M4vv53us8n3ZfGFHTAz1eELMQ8YL",
);

describe("vault", () => {

  // set anchor-lightsvm provider
  const provider = new LiteSVMProvider(fromWorkspace(""));
  const vaultProgram = new Program<Vault>(IDL, provider)
  const payer =  provider.wallet.payer;

  test("initialize", async () => {
    const tx = await vaultProgram.methods
      .init()
      .accounts({})
      .signers([payer])
      .rpc();
    console.log("Tx", tx)

    // Calculate PDA and BUMP
    let [vaultPDA, vaultBump] = PublicKey.findProgramAddressSync([
      Buffer.from("vault"),
      provider.wallet.payer.publicKey.toBuffer(),
    ], PROGRAM_ID);
    
    // Fetch the vault account from litesvm
    const vaultAccount = await vaultProgram.account.vault.fetch(vaultPDA);

    // CHECK OWENR
    expect(provider.wallet.payer.publicKey.toString()).toBe(vaultAccount.owner.toString());
    // CHECK INIT VALUE
    // console.log("=====>",vaultAccount.totalAmount.eq(new anchor.BN("0")));
    expect(vaultAccount.totalAmount.eq(new anchor.BN(0))).toBe(true);
    // CHECK BUMP
    expect(vaultBump).toBe(vaultAccount.bump);
  });
}); 