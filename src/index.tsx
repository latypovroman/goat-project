import {render} from "react-dom";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";

console.log(document)

render (
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)