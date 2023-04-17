import React from 'react'
import HogCardFront from './HogCardFront'
import HogCardBack from './HogCardBack'

const HogCard = props => {

    const { hog } = props

    const { id, name, weight, specialty, image } = hog
    const medal = hog['highest medal achieved']

    let renderHogDetails = []

    for ( let key in hog ) {

        const doNotRenderKeys = [ 'id', 'name', 'image' ]
        
        if ( !doNotRenderKeys.includes( key ) && ! ( typeof( hog[key] ) === 'boolean' ) )
            renderHogDetails.push( <p>{ key }: { hog[ key ] }</p> )
        else 
            renderHogDetails.push( <p>{ key }: { hog[ key ] ? 'True' : 'False' }</p> )
    }
    
    return (
        <div 
            className = 'ui eight wide column pigTile'
            onClick = { () => props.flipHogCard( id ) }
        >
            { !props.flippedHogs.includes( id ) ? 
                <HogCardFront hog = { hog } />
                :
                <HogCardBack renderHogDetails = { renderHogDetails } />
            }
        </div>
    )
}

export default HogCard