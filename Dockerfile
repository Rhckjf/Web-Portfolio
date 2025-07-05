# Gunakan image node resmi
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan install dependencies
COPY package.json package-lock.json* ./ 
RUN npm install

# Copy semua file
COPY . .

# Jalankan build (jika ingin produksi) atau dev server
CMD ["npm", "run", "dev"]

# Expose port (default Vite: 5173)
EXPOSE 5173
