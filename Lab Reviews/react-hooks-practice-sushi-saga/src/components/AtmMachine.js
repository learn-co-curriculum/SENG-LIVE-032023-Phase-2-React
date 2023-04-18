
const AtmMachine = props => {

    return (
        <>
            <center>
                <form onSubmit={ props.increaseMoney }>
                    <input type='number' name='amount' placeholder='Enter amount...' />
                    <button type='submit'>Withdraw! 💵</button>
                </form>
            </center>
        </>
    )
}

export default AtmMachine