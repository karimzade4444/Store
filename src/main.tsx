import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "@mantine/core/styles.css";
import "mantine-datatable/styles.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeProvider from './components/ThemeProvTable/ThemeProvider.tsx';
const client = new QueryClient()


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
