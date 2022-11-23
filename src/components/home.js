import Employees from './employees'
import Add from './add'
import { useState } from 'react'

function Home() {
    const [employee, setEmployee] = useState(Employees)

    return (
        <div>
            <Add setEmployee={setEmployee}></Add>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employee && employee.length > 0 
                        ? employee.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>                
                                        <button onClick={() => alert(item.id)}>Edit</button>
                                        &nbsp;        
                                        <button onClick={() => alert(item.id)}>DELETE</button>
                                    </td>
                                </tr>
                            )
                        }) 
                        : "No data available"
                    }
                </tbody>
            </table>

            <br></br>
           
            <button>CREATE</button>          
        </div>
    )
}

export default Home