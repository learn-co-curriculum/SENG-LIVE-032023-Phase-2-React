import HogCard from "./HogCard"

const HogCardBack = props => {

    return (
        <div className='minPigTile'>
            { props.renderHogDetails }
        </div>
    )
}

export default HogCardBack