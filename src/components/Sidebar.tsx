import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Game } from "../constants";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  setGame: (game: Game) => void;
}

export const Sidebar = ({
  open,
  onClose,
  setGame,
}: SidebarProps): JSX.Element => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem onClick={() => setGame(Game.Sudoku)}>
          <ListItemText primary="Sudoku"></ListItemText>
        </ListItem>
        <ListItem onClick={() => setGame(Game.MouseTracker)}>
          <ListItemText primary="Mouse tracker"></ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
