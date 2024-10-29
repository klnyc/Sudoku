import { ChangeEvent } from "react";
import { ValidCells } from "./App";

interface RowProps {
  row: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validCells?: ValidCells;
}

export const Row = ({
  row,
  handleChange,
  validCells,
}: RowProps): JSX.Element => {
  const inputs = [];
  for (let column = 1; column <= 9; column++) {
    const id: string = `${row}-${column}`;
    inputs.push(
      <input
        type="number"
        onChange={handleChange}
        className={
          validCells?.row[row] || validCells?.column[column] ? "valid" : ""
        }
        name={id}
        key={id}
      />
    );
  }
  return <div key={`row-${row}`}>{inputs}</div>;
};
