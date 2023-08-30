import "./App.css";
import { NavBar } from "./components";
import { First } from "./containers";

function App() {
    return (
        <div className="App">
            <div className="header">
                <NavBar />
            </div>
            <div className="body">
                {/*<Routes>
                    <Route exact path="/" element={<Start />} />
                </Routes>*/}
                <First />
            </div>
        </div>
    );
}

export default App;
