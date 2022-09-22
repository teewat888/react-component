import { render } from 'react-dom'
import { StrictMode } from "react";
import { DelayButton } from './Components/DelayButton/DelayButton';


const App = () => {
  return (
    <StrictMode>
      <div>
        <DelayButton buttonText="Test" second={10} />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
