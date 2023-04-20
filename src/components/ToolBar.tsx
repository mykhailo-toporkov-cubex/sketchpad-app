import { useAppDispatch } from "../hooks/storeHooks";
import { changeBrushColor } from "../store/slices/settings";

const ToolBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <a></a>
      <button onClick={() => dispatch(changeBrushColor('red'))}>change</button>
    </div>
  );
};

export default ToolBar;
