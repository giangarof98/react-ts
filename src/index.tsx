import ReactDOM from "react-dom/client";
//import Parent from "./props/Parent";
//import UserSearch from "./state/UserSearch";
//import EvtComponent from "./events/EvtComponent";
//import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";
const App = () => {
    return (
    <h1>
        <UserSearch/>
    </h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(<App/>)

