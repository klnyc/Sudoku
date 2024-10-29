import { ChangeEvent, useEffect, useState } from "react";
import { isValidNumber, allUniqueValuesInArray } from "../utility";

interface Grid {
  [row: number]: {
    [column: number]: number;
  };
}

interface ValidCells {
  row: {
    [number: number]: boolean;
  };
  column: {
    [number: number]: boolean;
  };
}

const App = (): JSX.Element => {
  const [grid, setGrid] = useState<Grid>();
  const [validCells, setValidCells] = useState<ValidCells>();
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const defaultGrid: Grid = {};
    for (let row = 1; row <= 9; row++) {
      defaultGrid[row] = {};
      for (let column = 1; column <= 9; column++) {
        defaultGrid[row][column] = 0;
      }
    }
    setGrid(defaultGrid);

    const validCells: ValidCells = { row: {}, column: [] };
    for (let number = 1; number <= 9; number++) {
      validCells.row[number] = false;
      validCells.column[number] = false;
    }
    setValidCells(validCells);
  }, []);

  const isValidRow = (row: number): boolean => {
    if (!grid) return false;
    const cells = Object.values(grid[row]).filter((number) => number);
    return allUniqueValuesInArray(cells) && cells.length === 9;
  };

  const isValidColumn = (column: number): boolean => {
    if (!grid) return false;
    let cells: number[] = [];
    for (let row = 1; row <= 9; row++) {
      cells.push(grid[row][column]);
    }
    cells = cells.filter((number) => number);
    return allUniqueValuesInArray(cells) && cells.length === 9;
  };

  useEffect(() => {
    if (!validCells) return;
    for (let number = 1; number <= 9; number++) {
      const updatedValidCells = { ...validCells };

      if (isValidRow(number)) {
        updatedValidCells.row[number] = true;
      } else {
        updatedValidCells.row[number] = false;
      }

      if (isValidColumn(number)) {
        updatedValidCells.column[number] = true;
      } else {
        updatedValidCells.column[number] = false;
      }

      setValidCells(updatedValidCells);
    }
  }, [grid]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!grid) return;
    const { name, value } = event.target;
    const [row, column] = name.split("-");
    const rowKey = parseInt(row);
    const columnKey = parseInt(column);
    const input = parseInt(value);

    if (isValidNumber(input) || !value) {
      setMessage("");
      const updatedGrid = { ...grid };
      updatedGrid[rowKey][columnKey] = input;
      setGrid(updatedGrid);
    } else {
      setMessage("Please enter a number from 1 to 9.");
    }
  };

  const renderRow = (row: number): JSX.Element => {
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

  const renderGrid = (): JSX.Element[] => {
    const rows = [];
    for (let row = 1; row <= 9; row++) {
      rows.push(renderRow(row));
    }
    return rows;
  };

  return (
    <div className="app">
      {" "}
      <div className="title">SUDOKU</div>
      <div className="message">{message}</div>
      {renderGrid()}
    </div>
  );
};

export default App;
