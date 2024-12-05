import { GAME } from "../constants";
import { Sudoku } from "./Sudoku/Sudoku";
import { MouseTracker } from "./MouseTracker/MouseTracker";

interface GameProps {
  game: GAME;
}

export const Game = ({ game }: GameProps): JSX.Element => {
  switch (game) {
    case GAME.Sudoku:
      return <Sudoku />;
    case GAME.MouseTracker:
      return <MouseTracker />;
  }
};
