import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const baseUrl = `http://localhost:6001/`
const listingsUrl = baseUrl + 'listings/'

function App() {

  const [ listings, setListings ] = useState( [] )

  const [ filteredListings, setFilteredListings ] = useState( [] )

  const [ listingSearch, setListingSearch ] = useState( '' )

  useEffect( fetchListings, [] )

  function fetchListings () {
    fetch( listingsUrl )
    .then( r => r.json() )
    .then( setListings )
  }

  function deleteListing ( id ) {
    
    const deleteRequest = {
      method: 'DELETE',
    }
    
    fetch( listingsUrl + id, deleteRequest )
    .then( () => {
      const updatedListings = listings.filter( listing => listing.id !== id )
      setListings( updatedListings )
    })
  }

  function changeListingSearch ( event ) {
    setListingSearch( event.target.value )
  }

  function listingSearchSubmit ( ) {
    // const filterListings = listings.filter( listing => listing.description.toLowerCase().includes( listingSearch.toLowerCase() ) )

    setFilteredListings( filterListings )
  }

  const filterListings = listings.filter( listing => listing.description.toLowerCase().includes( listingSearch.toLowerCase() ) )

  return (
    <div className="app">
      <Header
        listingSearch = { listingSearch }
        changeListingSearch = { changeListingSearch }
        listingSearchSubmit = { listingSearchSubmit }
      />
      <ListingsContainer
        // listings = { filteredListings.length === 0 || listingSearch === '' ? listings : filteredListings }
        listings = { filterListings }
        deleteListing = { deleteListing }
      />
    </div>
  );
}

export default App;
