import { useState } from "react"
function InputSubmit() {

    const [value, setValue] = useState("")
    return(
        <div>
            <h4>Задание 6. Input + Button Submit.</h4>
            <h5> Сделать так, чтобы кнопка submit срабатывала только тогда, когда в строке есть хоть 1 символ</h5> 
            <input
                type="text"
                placeholder="type min.1 symbol"
                value={value}
                onChange={ (e)=>setValue(e.target.value) }
            />
            <button disabled={value.length< 1} >SUBMIT</button>
            <p> {value} </p>
        </div>
    )
}
export default InputSubmit