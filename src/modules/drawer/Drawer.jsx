import { dataSection } from "@/data/dataSection"
import { Box, IconButton, List, ListItemButton, Stack, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/CloseOutlined"
import DrawerLayout from "@mui/material/Drawer"

const Drawer = ({ open, close }) => {
  return (
    <DrawerLayout
      open={open}
      onClose={close}
      anchor="right"
      slotProps={{
        paper: {
          sx: {
            width: { xs: "85vw", sm: 340 },
            bgcolor: "background.default",
            borderLeft: "1px solid",
            borderColor: "divider",
            backgroundImage: "none"
          }
        }
      }}
    >
      <Stack
        spacing={4}
        sx={{
          paddingInline: 3,
          paddingBlock: 3,
          height: "100%"
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "secondary.main"
              }}
            />
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              Navegación
            </Typography>
          </Stack>
          <IconButton
            size="small"
            onClick={close}
            aria-label="Cerrar"
            sx={{
              width: 36,
              height: 36,
              border: "1px solid",
              borderColor: "divider",
              color: "text.primary"
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <List sx={{ padding: 0 }}>
          {Object.keys(dataSection).map((key, idx) => (
            <ListItemButton
              key={key}
              draggable={false}
              href={`#${dataSection[key].id}`}
              onClick={close}
              disableRipple
              sx={{
                paddingInline: 0,
                paddingBlock: 2,
                borderBottom: "1px solid",
                borderColor: "divider",
                transition: "padding-left 0.25s ease, color 0.25s ease",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "secondary.main",
                  paddingLeft: 1
                }
              }}
            >
              <Stack direction="row" spacing={2} alignItems="baseline" sx={{ width: "100%" }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem"
                  }}
                >
                  0{idx + 1}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    letterSpacing: "-0.02em"
                  }}
                >
                  {dataSection[key].name}
                </Typography>
              </Stack>
            </ListItemButton>
          ))}
        </List>
      </Stack>
    </DrawerLayout>
  )
}

export default Drawer
