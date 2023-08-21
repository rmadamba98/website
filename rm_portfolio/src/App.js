import "./App.css";
import { NavBar } from "./components";
import Start from "./components/start/Start";
import { First } from "./containers";
import { Route, Router, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="header">{/*<NavBar />*/}</div>
            <div className="body">
                {/*<Routes>
                    <Route exact path="/" element={<Start />} />
                </Routes>*/}
                <Start />
            </div>
        </div>
    );
}

export default App;
