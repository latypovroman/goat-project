import {render} from "react-dom";
import Counter from "./components/Counter";

console.log(document)

render (
    <Counter />,
    document.getElementById("root")
)