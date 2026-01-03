import { createRoot } from 'react-dom/client'
import App from '@/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#0F0F0F',
    },
    secondary: {
      main: '#6B6B6B',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF4D4F',
    },
    warning: {
      main: '#FAAD14',
    },
    info: {
      main: '#8C8C8C',
    }, 
    success: {
      main: '#52C41A',
    }
  },
  colorSchemes: {
    dark: true,
    light: true
  }
})

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme} defaultMode="system">
    <CssBaseline />
    <App />
  </ThemeProvider>,
)