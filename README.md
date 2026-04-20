# Nextblog

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variables

Create your local environment file from the example:

```bash
cp .env.example .env
```

Set these values in `.env`:

- `DATABASE_URL` (or `MONGODB_URI`)
- `JWT_SECRET`

## Run With Docker

Build and run the app container:

```bash
docker build -t nextblog .
docker run --rm -p 3000:3000 --env-file .env nextblog
```

Run the app and MongoDB together with Docker Compose:

```bash
docker compose up --build
```

This starts:

- App at `http://localhost:3000`
- MongoDB at `mongodb://localhost:27017`

## GitHub Workflows

The repository includes two workflows:

- `CI` (`.github/workflows/ci.yml`): runs `npm ci`, `npm run lint`, and `npm run build` on push/pull request.
- `Docker Image` (`.github/workflows/docker-image.yml`): builds the Docker image on push/pull request and publishes to GHCR on push.

Published image target:

- `ghcr.io/<your-github-owner>/nextblog`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
