function Child( {setValue} ) {
    return(
        <div>
            <p>Child</p>
            <button onClick={ () => setValue("Thank you, I am updated")} >Click me to update parent component</button>
        </div>
    )
}
export default Child