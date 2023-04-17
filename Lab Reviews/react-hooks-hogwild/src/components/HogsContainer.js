import React, { useState } from 'react'
import HogsList from './HogsList';
import HogFilterAndSort from './HogFilterAndSort';

import hogs from "../porkers_data";

const HogsContainer = ( ) => {

    const addIdsToHogs = hogs.map( ( hog, index ) => {
        return {...hog, id: index + 1 }
    })

    const [ flippedHogs, setFlippedHogs ] = useState( [] )

    const [ allHogs, setAllHogs ] = useState( addIdsToHogs )

    const [ filterHogsBy, setFilterHogsBy ] = useState( 'All' )

    const [ sortHogsBy, setSortHogsBy ] = useState( 'None' )

    const changeFilter = event => setFilterHogsBy( event.target.value )

    const changeSort = event => setSortHogsBy( event.target.value )

    const flipHogCard = id => {
        if ( !flippedHogs.includes( id ) )
            setFlippedHogs( [...flippedHogs, id ] )
        else {
            const removeHogId = flippedHogs.filter( hogId => hogId !== id )
            setFlippedHogs( removeHogId )
        }
    }

    const filterByGreased = allHogs.filter( hog => {
        if ( filterHogsBy === 'Greased' && hog.greased )
            return true
        else if ( filterHogsBy === 'Non-Greased' && !hog.greased )
            return true
        else if ( filterHogsBy === 'All' )
            return true
    })

    if ( sortHogsBy === 'Weight' )
        filterByGreased.sort( ( hog1, hog2 ) => hog1.weight - hog2.weight )
    else if ( sortHogsBy === 'Name' )
        filterByGreased.sort( ( hog1, hog2 ) => hog1.name.toLowerCase().localeCompare( hog2.name.toLowerCase() ) )

    return (
        <div className = 'ui grid container'>
            <HogFilterAndSort 
                changeFilter = { changeFilter }
                changeSort = { changeSort }
            />
            <HogsList 
                hogs = { filterByGreased }
                flipHogCard = { flipHogCard }
                flippedHogs = { flippedHogs }
            />
        </div>
    )
}

export default HogsContainer