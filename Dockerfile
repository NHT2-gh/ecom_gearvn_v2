FROM node:22-alpine AS base

ARG NEXT_PUBLIC_DOMAIN='https://storefront.webdev.gearvn.xyz'
# ARG NEXT_PUBLIC_API_DOMAIN='https://api.staging....'
ARG NEXT_PUBLIC_HOST_API_DOMAIN='https://gearvn.com'
ARG NEXT_PUBLIC_WEB_API_DOMAIN='https://webapi.gearvn.com'
ARG NEXT_PUBLIC_NEXTJS_SERVER="https://storefront.webdev.gearvn.xyz"
ARG NEXT_PUBLIC_BUILDPC_API_DOMAIN="https://buildpc-api.gearvn.com"
ARG NEXT_PUBLIC_GEARVN_DOMAIN="https://gearvn.com"

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy only package files for better layer caching
COPY package*.json yarn.lock* pnpm-lock.yaml* .npmrc* ./

# Clean install dependencies
# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile --production; \
#   elif [ -f package-lock.json ]; then npm ci --only=production; \
#   elif [ -f pnpm-lock.yaml ]; then npm i -g corepack@latest && corepack enable pnpm && pnpm i --frozen-lockfile --prod; \
#   else echo "Lockfile not found." && exit 1; \
#   fi

# RUN npm i -g corepack@latest && corepack enable pnpm && pnpm i --frozen-lockfile
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

ARG NEXT_PUBLIC_DOMAIN
#ARG NEXT_PUBLIC_API_DOMAIN
ARG NEXT_PUBLIC_HOST_API_DOMAIN
ARG NEXT_PUBLIC_WEB_API_DOMAIN
ARG NEXT_PUBLIC_NEXTJS_SERVER
ARG NEXT_PUBLIC_BUILDPC_API_DOMAIN
ARG NEXT_PUBLIC_GEARVN_DOMAIN

ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
#ENV NEXT_PUBLIC_API_DOMAIN=${NEXT_PUBLIC_API_DOMAIN}
ENV NEXT_PUBLIC_HOST_API_DOMAIN=${NEXT_PUBLIC_HOST_API_DOMAIN}
ENV NEXT_PUBLIC_WEB_API_DOMAIN=${NEXT_PUBLIC_WEB_API_DOMAIN}
ENV NEXT_PUBLIC_NEXTJS_SERVER=${NEXT_PUBLIC_NEXTJS_SERVER}
ENV NEXT_PUBLIC_BUILDPC_API_DOMAIN=${NEXT_PUBLIC_BUILDPC_API_DOMAIN}
ENV NEXT_PUBLIC_GEARVN_DOMAIN=${NEXT_PUBLIC_GEARVN_DOMAIN}

# Build application
# RUN \
#   if [ -f yarn.lock ]; then yarn run build; \
#   elif [ -f package-lock.json ]; then npm run build; \
#   elif [ -f pnpm-lock.yaml ]; then npm i -g corepack@latest && corepack enable pnpm && pnpm run build; \
#   else echo "Lockfile not found." && exit 1; \
#   fi

# RUN npm i -g corepack@latest && corepack enable pnpm && pnpm run build
RUN corepack enable pnpm && pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=4445
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 4445

CMD ["node", "server.js"]

