import "./App.css";
import Start from "./components/start/Start";

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
