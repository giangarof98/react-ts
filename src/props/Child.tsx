//Schema thats expect Child component to follow
interface ChildProps {
    color:string;
    onClick: () => void;

}

export const Child = (props: ChildProps) => {
    return (
        <div>
            <div>
                {props.color}
            </div>
            <button onClick={props.onClick}>Add</button>
        </div>
    )
}

//React function component with TS
//Not required, but good option
//FC stands for function component

export const ChildC:React.FC<ChildProps> = (props) => {
    return (
        <div>
            {props.color}
        </div>
    )
}
