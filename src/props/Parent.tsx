import {Child} from './Child'

const Parent = () => {
    return (
        <Child color='blue' onClick={() => {alert('clicked!')}}/>
    )
}

export default Parent;