import { useState } from "react"

function Counter(){
    //важно, что initialCounter - это ЗНАЧЕНИЕ. 
    //setCounter - это встроенная ФУНКЦИЯ для обновления значения
    // useState(0). (0) - это первоначальное ЗНАЧЕНИЕ. То, что видим при загрузке.

    const [initialCounter, setCounter] = useState(0)

    function letMeCount() {
        const result = initialCounter +1;
        setCounter(result)
    }

    return(
        <div>
            <h4>Задание 2. Счетчик, кнопка, увеличивающая значение на 1. </h4>
            <h5>Проверяется useState, onClick, function declaration</h5>
            <p>Это твой счетчик</p>
            <p>{initialCounter} </p>
            <button onClick={letMeCount} > Click ME + 1 </button>
        </div>

    )
}
export default Counter;