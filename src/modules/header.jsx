import { AppBar, Button, IconButton, Stack, Toolbar, Typography, useColorScheme } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Menu } from "@mui/icons-material";
import { dataSection } from "@/data/dataSection";
import Drawer from "@/modules/drawer/Drawer";
import { useState } from "react";

function Header() {
  const { mode, setMode, systemMode } = useColorScheme()

  const [isOpen, setIsOpen] = useState(false)

  const globalMode = (mode == 'system') ? systemMode : mode

  const toggleMode = () => setMode(globalMode === 'dark' ? 'light' : 'dark')

  const handleCloseDrawer = () => setIsOpen(false)

  const handleOpenDrawer = () => setIsOpen(true)

  return (
    <AppBar position="sticky">
      <Drawer open={isOpen} close={handleCloseDrawer} />
      <Toolbar sx={{ padding: 1, justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Portfolio Web
        </Typography>
        <Stack direction="row" spacing={2}
          sx={{
            display: { xs: "none", md: "flex" }
          }}
        >
          { Object.keys(dataSection).map(key => (
            <Button key={key}
              draggable={false}
              href={`#${dataSection[key].id}`}
              sx={{
                bgcolor: "black",
                textTransform: "capitalize"
              }}
            > 
              { dataSection[key].name } 
            </Button>
          )) }
        </Stack>
        <Stack direction="row">
          <IconButton onClick={toggleMode}>
            { globalMode === "dark" ? <LightModeIcon /> : <DarkModeIcon /> }
          </IconButton>
          <IconButton onClick={handleOpenDrawer}
            sx={{
              display: { xs: "inherit", md: "none" }
            }}
          >
            <Menu />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header