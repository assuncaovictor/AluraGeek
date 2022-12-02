import { BrowserRouter } from "react-router-dom";
import Routes from "./config/router/Routes";

function App() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

export default App;
