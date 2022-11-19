import "./App.css";
import { useWindowSize } from "./Hooks/useMediaQuery ";
import { diviceType } from "./utilities/findDiviceType";

function App() {
  const windowSize = useWindowSize();
  const diviceTypeString = diviceType(windowSize?.width);

  return (
    <div className="container">
      <div className="center-items">
        <h1>
          Width x height: {windowSize?.width} x {windowSize?.height}
        </h1>
        <h2>Type: {diviceTypeString} </h2>
      </div>
    </div>
  );
}

export default App;
