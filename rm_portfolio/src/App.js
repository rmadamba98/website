import "./App.css";
import { NavBar } from "./components";
import Start from "./components/start/Start";
import { First } from "./containers";

function App() {
    return (
        <div className="App">
            <div className="header">{/*<NavBar />*/}</div>
            <div className="body">
                <Start />
            </div>
        </div>
    );
}

export default App;
