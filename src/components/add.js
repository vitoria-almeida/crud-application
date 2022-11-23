import {useState, useRef} from 'react'

function Add({setEmployee}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const nameRef = useRef()
    const ageRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()    
        const newEmployee = {
            id: 5,
            name,
            age          
        }
        setEmployee((prevEmployee) => {
            return prevEmployee.concat(newEmployee)
        })

        nameRef.current.value = ''
        ageRef.current.value = ''
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Enter Name' onChange={(event) => setName(event.target.value)} ref={nameRef}/>
                <input type='text' name='age' placeholder='Enter Age' onChange={(event) => setAge(event.target.value)} ref={ageRef}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Add