import { useState } from "react";
import { Game } from "./Game";
import { Sidebar } from "./Sidebar";
import { Button } from "@mui/material";
import { GAME } from "../constants";
import MenuIcon from "@mui/icons-material/Menu";

const App = (): JSX.Element => {
  const [openSidebar, setOpenSideBar] = useState<boolean>(false);
  const [game, setGame] = useState<GAME>(GAME.Sudoku);

  const toggleSidebar = (value: boolean): (() => void) => {
    return () => setOpenSideBar(value);
  };

  return (
    <div className="app">
      <Sidebar
        open={openSidebar}
        onClose={toggleSidebar(false)}
        setGame={setGame}
      />
      <div className="sidebar_icon">
        <Button onClick={toggleSidebar(true)}>
          <MenuIcon />
        </Button>
      </div>
      <Game game={game} />
    </div>
  );
};

export default App;
