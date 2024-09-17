import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { configDefaults } from 'vitest/config';  // Asegúrate de importar la configuración por defecto de Vitest

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,              // Habilita `test`, `expect`, `it` de manera global
    environment: 'jsdom',        // Usa jsdom para pruebas que involucren el DOM
  
    exclude: [...configDefaults.exclude],  // Opcional: puedes excluir directorios como node_modules
  },
});

