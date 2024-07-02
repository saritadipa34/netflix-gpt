import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider>  
        <Body />
    </Provider>
  );
}

export default App;
