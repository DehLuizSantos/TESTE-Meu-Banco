import '@mantine/core/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

export default function App() {
  /*
   TODAS REQUISIÇÕES DO TANSTACK SÃO ARMAZENDAS NO LOCAL VIA QUERYCLIENT, O SCALETIME É A QUANTIDADE DE TEMPO QUE FICA ARMAZENDA (30 minutos)
   ASSIM VOCÊ PREVINE DE FAZER REQUISIÇÕES DESNECESSARIAS ATÉ SER PRECISO.
   */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
