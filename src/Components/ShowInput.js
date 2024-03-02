import { useState } from "react"

function ShowInput(){

    const [value, setValue] = useState("");

    return(
        <div>
            <h4>Задание 5. Input-получить то, что пишет пользователь</h4>
            <h5>(Data Binding Exercise)</h5>
            <input
                type="text"
                placeholder="type your value"
                value = {value}
                onChange={ (e)=>setValue(e.target.value) } />
            <p> {value} </p>


        </div>
    )
}
export default ShowInput