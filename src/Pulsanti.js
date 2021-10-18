export default function Pulsanti(props) {
    return (
        <div className="pulsanti" onClick = {() => props.click(props.value)}>
            {props.value}
        </div>
    );
}

