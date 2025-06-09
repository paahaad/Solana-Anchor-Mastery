# 🧠 Solana Anchor Mastery – Practice Projects

Welcome to the ultimate collection of **Solana Anchor projects** designed to boost your knowledge of Solana's programming model and help you master Anchor framework. This roadmap is divided into **Beginner**, **Intermediate**, and **Advanced** sections.

---

## 📦 Beginner Projects (1–10)

These are ideal if you're new to Anchor and want to understand PDAs, basic token handling, and state management.

1. **Token Vault**
   - Deposit and withdraw SPL tokens.
   - Practice PDA-based account management.

2. **Voting DApp**
   - Create proposals and allow users to vote.
   - Prevent double voting using unique voter PDAs.

3. **NFT Mint with Metadata**
   - Mint NFTs using Metaplex token metadata program.
   - Learn CPI and metadata authority.

4. **Escrow Program**
   - Enable two users to escrow tokens and complete deals.
   - Implement conditional token release and cancellation.

5. **On-chain To-Do List**
   - Manage tasks tied to a user account.
   - Demonstrates PDA space management.

6. **Basic Auction**
   - Users place bids; highest wins after timer ends.
   - Learn time-based logic with the `Clock` sysvar.

7. **Tip Jar**
   - Accept SPL tokens or SOL tips.
   - Display a leaderboard based on tip volume.

8. **Subscription System**
   - Enforce monthly token payments.
   - Automate renewals based on timestamps.

9. **Click Counter Game**
   - Simple on-chain leaderboard based on user clicks.
   - Good intro to incrementing state.

10. **Mini AMM (Automated Market Maker)**
   - Swap SPL tokens using x*y=k logic.
   - LP token minting and pool rebalancing.

---

## ⚙️ Intermediate Projects (11–25)

Focus on more complex patterns such as CPIs, metadata handling, referral logic, and SPL token integrations.

11. **DAO with Token-Based Voting**
    - Create proposals and allow token-weighted voting.
    - Learn account indexing and CPI to token program.

12. **NFT Staking**
    - Stake NFTs to earn rewards.
    - Use token metadata + reward schedule.

13. **Decentralized File Registry**
    - Store file hashes and IPFS links on-chain.
    - Great for hybrid off-chain/on-chain applications.

14. **Multi-Sig Wallet**
    - Execute actions only after multiple signers approve.
    - Reinforces secure signer logic.

15. **Cross-Program Game Engine**
    - Game state evolves through calls to multiple Anchor programs.
    - Learn nested CPIs and modular architecture.

16. **Token Faucet**
    - Rate-limited token distribution.
    - Prevent abuse using time windows and PDAs.

17. **Time-locked Vesting**
    - Tokens released linearly over time.
    - Great for team tokenomics.

18. **Airdrop Eligibility Verifier**
    - Allow claim only if eligible (e.g., snapshot or whitelist).
    - Practice eligibility validation and PDA-based claims.

19. **Cross-Program Voting Result Trigger**
    - Voting outcome triggers action in another program.
    - Multi-program interaction with CPIs.

20. **Token-Gated Access**
    - Action allowed only if user holds a specific token or NFT.
    - Use SPL Token and metadata reading.

21. **On-chain Chatroom**
    - Users post short messages stored in PDAs.
    - Includes rate-limiting and indexing.

22. **Invoice System**
    - Generate and track payment invoices.
    - Set due dates and validate payments.

23. **Referral System**
    - Reward users for inviting others.
    - Learn reward tracking and abuse prevention.

24. **Reputation System**
    - Accumulate scores based on on-chain activity.
    - Track and update user-level data.

25. **Mini-Lottery**
    - Users enter a lottery and winner is selected at random.
    - Use slot hashes or oracles for randomness.

---

## 🚀 Advanced Projects (26–30)

Deep dive into advanced primitives like ZK proofs, complex financial contracts, and program composition.

26. **Decentralized Options Contract**
    - Write, buy, and exercise options on SPL tokens.
    - Includes strike price, expiration, and exercise logic.

27. **Lending and Borrowing Platform**
    - Borrow against SPL token collateral.
    - Implement liquidation and price oracle integration.

28. **Composable NFTs**
    - NFTs that own other NFTs or SPL tokens.
    - Practice PDA tree structures and metadata extension.

29. **ZK Proof-Based Identity Validator**
    - Validate zk-SNARK/STARK proofs on-chain.
    - Combine off-chain proof generation and on-chain verification.

30. **Multi-Tenant App Framework**
    - Isolate data per tenant or organization (like workspaces).
    - Learn dynamic seeds, multi-role access, and scalable data design.
