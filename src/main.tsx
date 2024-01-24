import ReactDOM from 'react-dom/client'
import "@/styles/global.css"
import { ThemeProvider } from '@emotion/react';

import { AppRoutes } from '@/routes/app-routes.routes';
import theme from '@/themes/muiTheme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <AppRoutes />
  </ThemeProvider>
)
