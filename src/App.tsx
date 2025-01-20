import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { createTheme, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

import '@mantine/core/styles.css';

import { Bounce, ToastContainer } from 'react-toastify';

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

  const mantineTheme = createTheme({
    /** Your theme override here */
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantineTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
