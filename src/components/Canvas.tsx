import { useState } from "react";
import styled from "@emotion/styled";
import { useAppSelector } from "../hooks/storeHooks";
import useDraw from "../hooks/useDraw";

const View = styled.canvas`
  border: 1px solid black;
  cursor: crosshair;
`;

const Canvas = () => {
  const { canvasRef, context } = useDraw();
  const { brush_color } = useAppSelector((state) => state.settings);
  const [draw, setDraw] = useState(false);

  const startPosition = () => setDraw(true);

  const endPosition = () => {
    setDraw(false);
    context?.beginPath();
  };

  const move = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const ctx = context;

    if (!draw || !ctx) return;
    ctx.lineWidth = 1; // var
    ctx.lineCap = "round"; // var
    ctx.strokeStyle = brush_color; // var

    ctx.lineTo(e.clientX, e.clientY - 20);
    ctx.stroke();
  };

  return (
    <>
      <View
        ref={canvasRef}
        onMouseMove={move}
        onMouseDown={startPosition}
        onMouseUp={endPosition}
      />
    </>
  );
};

export default Canvas;
