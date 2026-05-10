# Twoonie

Turn everyday spending into long-term investing. Twoonie automatically rounds up your Canadian purchases to the nearest dollar and invests the spare change into a high-yield Solana portfolio.

Built for the Superteam Canada x IG Wealth Management Frontier Hackathon.

## Overview

Twoonie bridges traditional Canadian banking with decentralized finance. By connecting your existing bank accounts securely via Plaid, the platform monitors your everyday transactions, calculates the spare change, and sweeps it into a personalized Solana vault when a threshold is met. 

The funds are automatically distributed into a diversified portfolio consisting of USDC yields, SOL, and liquid staked tokens like jitoSOL, ensuring your idle change works harder than it would in a traditional bank account.

## Core Features

- Automated Round-ups: Seamlessly connects to Canadian bank accounts to track spending and calculate round-up amounts.
- Solana Vault Integration: Groups micro-transactions and sweeps them on-chain into a secure, non-custodial Solana wallet.
- Automated Yield Strategies: Automatically allocates deposited funds into predefined risk profiles (e.g., Safe, Balanced, Growth) across various Solana ecosystem assets.
- Premium Interface: Built with a high-fidelity, cinematic user interface that feels native, fast, and highly responsive.

## Technical Stack

- Frontend: Next.js (App Router), React, TypeScript
- Styling: Vanilla CSS, CSS Modules, Tailwind CSS
- Animation: Framer Motion, GSAP
- Workspace: Turborepo (Monorepo architecture)
- Web3 Integration: Solana Web3.js, Anchor (for Solana PDA interaction)
- Backend/API: Hono (Serverless API), BullMQ (Background job queue for sweeps)
- Banking API: Plaid

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository and navigate to the project directory:
```bash
git clone https://github.com/AlleyNawaz/twoonie.git
cd twoonie
```

2. Install the workspace dependencies:
```bash
pnpm install
```

3. Set up your environment variables. Copy the `.env.example` to `.env.local` and populate the required API keys (Plaid, Solana RPC, etc.):
```bash
cp apps/web/.env.example apps/web/.env.local
```

4. Start the development server:
```bash
pnpm run dev
```

The application will be available at `http://localhost:3001`.

## Project Structure

This project uses Turborepo to manage the monorepo architecture:
- `apps/web`: The main Next.js web application.
- `packages/config`: Shared configuration files (Tailwind, ESLint, TypeScript).
- `packages/ui`: Shared UI component library.

## License

This project is licensed under the MIT License.
