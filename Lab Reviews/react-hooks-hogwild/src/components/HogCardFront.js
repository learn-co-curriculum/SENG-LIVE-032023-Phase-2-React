
const HogCardFront = props => {

    const { name, image } = props.hog

    return (
        <div>
            <img className='minPigTile' src = { image } alt = { name } />
            <h5>{ name }</h5>
        </div>
    )
}

export default HogCardFront