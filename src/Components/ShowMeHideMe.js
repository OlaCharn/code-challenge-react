import You from "../Assets/You.jpg"
import { useState } from "react"


function ShowMeHideMe(){

    const [showMePicture, setShowMePicture] = useState(true);

    return(
        <div>
            <h4>ЗЗадание 4. Покажи/спрячь элемент на экране </h4>
            <h4>Проверяется img, conditional rendering, onClick </h4>

            <button onClick={ ()=> setShowMePicture(!showMePicture)}> {showMePicture ? "HIDE ME" : "SHOW ME"} </button>
            {showMePicture && <img src={You} alt="youpic" width="120px" /> }  
            
        </div>
    )
}
export default ShowMeHideMe;

//&& - логическое условие
// компонент после && будет отрисован только если условие, указанное после && истинно (true)

//<button onClick={ ()=> setShowMePicture(!showMePicture)}> {showMePicture ? "HIDE ME" : "SHOW ME"} </button>
// onClick setShowMePicture устанавливает новое значение не равное изначальному true

// {showMePicture ? "HIDE ME" : "SHOW ME"} 
// значение showMePicture в позиции true? , т.е. картинка видна ? да - напиши "HIDE" : нет - напиши "SHOW"
