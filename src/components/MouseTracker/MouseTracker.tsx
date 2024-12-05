import { useEffect, useState } from "react";

export const MouseTracker = (): JSX.Element => {
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const [x, y] = coordinates;

  useEffect(() => {
    const getMouseCoordinates = (event: MouseEvent): void => {
      const x = event.clientX;
      const y = event.clientY;
      setCoordinates([x, y]);
    };

    document.addEventListener("mousemove", getMouseCoordinates);

    return () => document.removeEventListener("mousemove", getMouseCoordinates);
  }, []);

  return (
    <>
      <div className="title">Mouse coordinates</div>
      <div>
        {x}, {y}
      </div>
    </>
  );
};
