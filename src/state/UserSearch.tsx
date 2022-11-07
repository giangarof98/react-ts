import { useState } from "react";

const users = [
    {name: 'Jhon', age:20},
    {name: 'Sarah', age:20},
    {name: 'Kyle', age:20},
]

const UserSearch:React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string, age:number | undefined}>()
    const onClick = () => {
        const found = users.find((user) => {
            return user.name === name;
        });

        setUser(found);

        if(user){
            console.log(user)
        } else {
            console.log('are u nuts??', null)
        }

    }

    return (
        <div>
            <div>User Search</div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Search</button>
        </div>
    )

}

export default UserSearch