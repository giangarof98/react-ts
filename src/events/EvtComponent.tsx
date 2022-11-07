const EvtComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    const onDragStart = (e:React.DragEvent<HTMLDivElement>) => {
        console.log('x')
    }
    return <div>
        {/* <input onChange={e => console.log(e)} /> */}
        <input onChange={e => onChange(e)} />
        <div draggable onDragStart={onDragStart}>Drag me</div>
    </div>
}

export default EvtComponent;