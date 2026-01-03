import { AppBar, IconButton, Toolbar, Typography, useColorScheme } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Header() {
  const { mode, setMode, systemMode } = useColorScheme()
  const globalMode = (mode == 'system') ? systemMode : mode

  const toggleMode = () => setMode(globalMode === 'dark' ? 'light' : 'dark')

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ padding: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          Portfolio Web
        </Typography>
        <IconButton onClick={toggleMode}>
          { globalMode === "dark" ? <LightModeIcon /> : <DarkModeIcon /> }
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header