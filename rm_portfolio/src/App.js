import "./App.css";
import { NavBar } from "./components";
import Start from "./components/start/Start";
import { First } from "./containers";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="header">{/*<NavBar />*/}</div>
            <div className="body">
                <Start />
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
