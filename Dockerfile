FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production && \
    npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* vars must be available at build time to be inlined in client JS
# Coolify passes these as build-time env vars
ARG NEXT_PUBLIC_GHOST_URL
ARG NEXT_PUBLIC_GHOST_CONTENT_API_KEY
ARG NEXT_PUBLIC_SITE_URL

ENV NEXT_PUBLIC_GHOST_URL=${NEXT_PUBLIC_GHOST_URL}
ENV NEXT_PUBLIC_GHOST_CONTENT_API_KEY=${NEXT_PUBLIC_GHOST_CONTENT_API_KEY}
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]