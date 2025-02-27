# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build frontend
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm install --production

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Copy server files
COPY server ./server
COPY shared ./shared

# Create certificates directory and copy SSL certificates
COPY certificates ./certificates

# Expose port
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "start"]