import { useState } from "react"
import Child from "./Child"

function Parent() {
    const [value, setValue] = useState("I need to be updated from my child")
    return(
        <div>
            <h4>Задание 7. Передать из child в parent компонент Update state</h4>
            <h5>Проверяется передача props, передача состояения, понимание parent/child</h5>
            <p>Parent</p>
            <div> {value} </div>

            <Child setValue={setValue} />

        </div>

    )
}
export default Parent