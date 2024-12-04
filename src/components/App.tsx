import { useState } from "react";
import { Game } from "./Game";
import { Sidebar } from "./Sidebar";
import { Button } from "@mui/material";
import { GAME } from "../constants";

const App = (): JSX.Element => {
  const [openSidebar, setOpenSideBar] = useState<boolean>(true);
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
      <Button onClick={toggleSidebar(true)}>Open</Button>
      <Game game={game} />
    </div>
  );
};

export default App;
