import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Cambia el puerto si lo necesitas
    open: true, // Abre automáticamente el navegador al iniciar el servidor
    hmr: {
      protocol: 'ws', // Usa WebSocket para Hot Module Replacement (HMR)
      host: 'localhost',
      port: 3001, // Asegúrate de que el puerto de HMR coincida
    },
    watch: {
      usePolling: true, // Usa polling si los cambios no se detectan automáticamente
      interval: 1000, // Intervalo de polling en milisegundos
    },
  },
});