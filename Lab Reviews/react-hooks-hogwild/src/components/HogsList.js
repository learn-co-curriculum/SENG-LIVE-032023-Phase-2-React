import React from 'react'
import HogCard from './HogCard'

const HogsList = ( props ) => {

    const { hogs } = props
    // const hogs = props.hogs

    const renderHogs = hogs.map( hog =>
        <HogCard 
            key = { hog.id }
            hog = { hog }
            flipHogCard = { props.flipHogCard }
            flippedHogs = { props.flippedHogs }
        />
    )

    return (
        <div>
            { renderHogs }
        </div>
    )
}


export default HogsList