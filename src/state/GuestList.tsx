import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name])
    }

    return (
        <div>
            <h2> Guest List </h2>

            <ul>
                {guests.map(e => <li key={e}>{e}</li>)}
            </ul>

            <div>
                <input value={name} onChange={(e) => setName(e.target.value)}/> <br />
                <button onClick={onClick} >Add Guest</button>
            </div>
        </div>
    )
}

export default GuestList;