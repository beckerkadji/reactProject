import {useState} from "react";

function MyForm() {
    const [inputs, setInputs] : any = useState({})

    const handleChange = (e : any)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values : any) => ({...values, [name] : value}))
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        alert(`${inputs.username}, ${inputs.age} ${inputs.description} ${inputs.course}`)
    }
    return (
        <form>
            <label>Enter your name :
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={inputs.username || ""}
                />
            </label><br />
            <label>Enter your age :
                <input
                    type="number"
                    name="age"
                    onChange={handleChange}
                    value={inputs.age || ""}
                />
            </label><br />

            <textarea value={inputs.description || ""}  name="description" onChange={handleChange}/> <br />

            <select name="course" value={inputs.course || ""}  onChange={handleChange}>
                <option value="React">ReactJs</option>
                <option value="Next">NextJs</option>
                <option value="Node">NodeJs</option>
            </select>
            <input type='submit' onClick={handleSubmit}/>
        </form>
    )
}

export default MyForm
