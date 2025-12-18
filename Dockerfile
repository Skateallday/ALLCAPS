# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first (better caching)
COPY package*.json ./
# If you use pnpm or yarn, see notes below
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ---- Run stage (nginx) ----
FROM nginx:alpine

# Copy built assets to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: SPA fallback routing for React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
