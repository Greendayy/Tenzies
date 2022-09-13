
export default function Die(props) {
    const styles={
        backgroundColor:props.isHeld?"#59E391":"white"
    }

    return (
        <div className='tenzies-die' style={styles} onClick={props.diceHold}>
            <h2 className="tenzies-num">{props.value}</h2>
        </div>
    )
}
