import { Wrapper } from "./styles/common";
import Canvas from "./components/Canvas";
import ToolBar from "./components/ToolBar";

const App = () => {
  return (
    <Wrapper>
      <ToolBar />
      <Canvas />
    </Wrapper>
  );
};

export default App;
