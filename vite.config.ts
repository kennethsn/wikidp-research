import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

// @ts-ignore
const inProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [
    EnvironmentPlugin({
      OPENAI_API_KEY: '',
      STORIES_SERVICES_API_BASE_URL: '',
      STORIES_SERVICES_DISABLED: '',
    }, { loadEnvFiles: !inProd }),
    react({ jsxImportSource: '@emotion/react' }),
  ],
});
