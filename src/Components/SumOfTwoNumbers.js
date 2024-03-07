import { useState } from "react";

function SumOfTwoNumbers(){

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [total, setTotal] = useState(0);

    function sumResult(){
        setTotal(number1+number2)
    }
    /*
    useEffect(() => {
        // При изменении number1 или number2, обновляем total
        setTotal(number1 + number2);
    }, [number1, number2]);
    */
    
    return(
        <div>
            <input placeholder="type first number"
            type="text"
            value={number1}
            onChange={(e)=>setNumber1(+e.target.value) }
            />

            <input placeholder="type second number"
            type="text"
            value={number2}
            onChange={(e)=>setNumber2(+e.target.value)}
            />

            <button onClick={sumResult} >ADD TWO NUMBERS</button>

            <p>TOTAL {total } </p>

        </div>
    )
}
export default SumOfTwoNumbers;