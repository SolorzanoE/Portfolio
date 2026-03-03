import { dataSection } from "@/data/dataSection"
import { List, ListItemButton } from "@mui/material"
import DrawerLayout from "@mui/material/Drawer"

const Drawer = ({ open, close }) => {
  return (
    <DrawerLayout open={open}
      onClose={close}
      anchor="right"
    >
      <List
        sx={{ 
          paddingInline: 2,
          gap: 100
        }}
      >
        { Object.keys(dataSection).map(key => (
            <ListItemButton key={key}
              draggable={false}
              href={`#${dataSection[key].id}`}
              onClick={close}
              sx={{
                borderRadius: 3
              }}
            >
              { dataSection[key].name }
            </ListItemButton>
        )) }
      </List>
    </DrawerLayout>
  )
}

export default Drawer