function UsersArray(){
    const users = [
        {
            name: "Olga",
            id: 1,
            age: 32 
        },
        {
            name: "Vova",
            id: 1,
            age: 36 
        },
        {
            name: "Alice",
            id: 1,
            age: 6
        },
        {
            name: "Denis",
            id: 1,
            age: 25
        }
    ]
    return(
        <div >
            <h4>Задание 3. Отобрази массив пользователей.</h4>
            <h5>Проверяется знание объекта, массива, map()</h5>
            {users.map((user, id)=>{
                return(
                    <div key={id}>
                        <li>
                         {user.name}, {user.age}, {user.id}
                        </li>
                    </div>
                    )
            })}
        </div>
    )
}
export default UsersArray