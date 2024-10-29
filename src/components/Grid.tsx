import { ChangeEvent } from "react";
import { ValidCells } from "./App";
import { Row } from "./Row";

interface GridProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validCells?: ValidCells;
}

export const Grid = ({ handleChange, validCells }: GridProps): JSX.Element => {
  const rows = [];
  for (let row = 1; row <= 9; row++) {
    rows.push(
      <Row
        row={row}
        handleChange={handleChange}
        validCells={validCells}
        key={row}
      />
    );
  }
  return <div>{rows}</div>;
};
