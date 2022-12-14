import { useState, useRef, useEffect } from "react";

const users = [
    {name: 'Jhon', age:20},
    {name: 'Sarah', age:20},
    {name: 'Kyle', age:20},
]

const UserSearch:React.FC = () => {

    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string, age:number}>()

    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus();
    }, []);

    const onClick = () => {
        const found = users.find((user) => {
            return user.name === name;
        });

        setUser(found);
        console.log(user)
        if(found){
            console.log(found)
        } else {
            console.log('are u nuts??', null)
        }

    }

    return (
        <div>
            <div>User Search</div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Search</button>
        </div>
    )

}

export default UserSearch