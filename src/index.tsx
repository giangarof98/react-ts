import ReactDOM from "react-dom/client";
//import Parent from "./props/Parent";
//import UserSearch from "./state/UserSearch";
import EvtComponent from "./events/EvtComponent";
//import GuestList from "./state/GuestList";
const App = () => {
    return (
    <h1>
        <EvtComponent/>
    </h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(<App/>)

