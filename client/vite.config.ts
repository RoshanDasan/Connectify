import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Set to allow connections from all IPs
  },
  define: {
    'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
    'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
  },
});


dotenv.config();

