import ReactDOM from "react-dom/client";
//import Parent from "./props/Parent";

import GuestList from "./state/GuestList";
const App = () => {
    return (
    <h1>
        <GuestList/>
    </h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(<App/>)

