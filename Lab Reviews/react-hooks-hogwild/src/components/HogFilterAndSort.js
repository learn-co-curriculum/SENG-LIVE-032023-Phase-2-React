
const HogFilterAndSort = props => {

    return (
        <center>
            <div>
                <label>Filter By: </label>
                <select onChange = { props.changeFilter } >
                    <option value = 'All' >All</option>
                    <option value = 'Greased' >Greased</option>
                    <option value = 'Non-Greased' >Non-Greased</option>
                </select>
                <br/>
                <label>Sort By: </label>
                <select onChange = { props.changeSort } >
                    <option value = 'None' >None</option>
                    <option value = 'Weight' >Weight</option>
                    <option value = 'Name' >Name</option>
                </select>
            </div>
        </center>
    )
}

export default HogFilterAndSort