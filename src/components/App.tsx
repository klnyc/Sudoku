import { ChangeEvent, useEffect, useState } from "react";

interface Grid {
  [row: number]: {
    [column: number]: number;
  };
}

const App = (): JSX.Element => {
  const [grid, setGrid] = useState<Grid>();
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
  }, []);

  const isValidNumber = (number: number): boolean => number >= 1 && number <= 9;

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
      const id = `${row}-${column}`;
      inputs.push(
        <input type="number" onChange={handleChange} name={id} key={id} />
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
      <div className="message">{message}</div>
      {renderGrid()}
    </div>
  );
};

export default App;
