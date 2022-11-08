import {Component} from 'react';

interface User{
    name: string,
    age:number
}

interface UserSearchProps{
    users: User[];
}

interface UserSearchState{
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps>{
    // constructor(props)
    // super(props)
    state: UserSearchState = {
        name: '',
        user: undefined,
    };

    onClick = () => {
        const found = this.props.users.find((user) => {
            return user.name === this.state.name;
        })
        this.setState({user:found})
    }

    render(){
        return(
            <div>
                <div>User Search</div>
                <input value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                <button onClick={this.onClick}>Search</button>
            </div>
        )

    }
}

export default UserSearch
