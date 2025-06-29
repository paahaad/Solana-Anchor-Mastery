#![allow(unexpected_cfgs)]

use anchor_lang::prelude::*;

declare_id!("5EpnmfjXgSvEshE8M4vv53us8n3ZfGFHTAz1eELMQ8YL");

#[program]
pub mod vault{
    use super::*;

    pub fn init(ctx: Context<Initialize>) -> Result<()> {
        let vault = &mut ctx.accounts.vault;
        vault.owner = ctx.accounts.owner.key();
        vault.total_amount = 0;
        vault.bump = ctx.bumps.vault; 
        Ok(())
    }

    // pub fn deposit(ctx: Context<_>) -> Result<()> {
    //     Ok(())
    // }

    // pub fn withdraw(ctx: Context<_>) -> Result<()> {
    //     Ok(())
    // }

}
#[derive(Accounts)]
pub struct Initialize<'info> {

    #[account(mut)]
    pub owner: Signer<'info>,

    #[account(
        init,
        payer = owner,
        space = 8 + Vault::INIT_SPACE,
        seeds = [b"vault", owner.key().as_ref()],
        bump
    )]
    pub vault: Account<'info, Vault>, 
    
    pub system_program: Program<'info, System>
}

// State 
#[account]
#[derive(InitSpace)]
pub  struct Vault{
    pub owner: Pubkey,
    pub total_amount: u64,
    pub bump: u8, 
}