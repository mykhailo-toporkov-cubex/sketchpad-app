import { useRef, useEffect } from "react";
import styled from "@emotion/styled";

const View = styled.canvas`
  border: 1px solid black;
`;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.height = 600;
    canvas.width = 800;
    let draw = false;

    const startPosition = () => {
      draw = true;
    };

    const endPosition = () => {
      draw = false;
      ctx.beginPath()
    };

    const move = (e: MouseEvent) => {
      if (!draw) return;
      ctx.lineWidth = 10; // var
      ctx.lineCap = "round"; // var
      ctx.strokeStyle = 'red' // var

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", move);

    return () => {
      canvas.removeEventListener("mousedown", startPosition);
      canvas.removeEventListener("mouseup", endPosition);
      canvas.removeEventListener("mousemove", move);
    };
  }, []);

  return <View ref={canvasRef} />;
};

export default Canvas;
