import { Drawer, List, ListItem, ListItemText } from "@mui/material";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar = ({ open, onClose }: SidebarProps): JSX.Element => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem>
          <ListItemText primary="Sudoku"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Home"></ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
