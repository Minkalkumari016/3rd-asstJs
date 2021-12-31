import React, {useState} from "react";

const Employee = () => {
    const [userDetail, setUserDetail] = useState({
        name:"",
        department:"",
        rating:""
    })

    const[header, setHeader] = useState("EMPLOYEE FEEDBACK FORM")
    const [record, setRecord] = useState([])
    const [btns, setbtns] = useState(false)
    
    const handleInputData = (data) => {
        const name = data.target.name
        const value = data.target.value
        setUserDetail({...userDetail, [name]:value})
    }

    const handleSubmit = (data) => {
        data.preventDefault()
        const storeRecord = {...userDetail, id:new Date().getTime().toString()}
        setRecord([...record, storeRecord])
        setbtns(true)
        setHeader("EMPLOYEE FEEDBACK DATA")
    
    }

    const gobackbtn= ()=>{
        setHeader("EMPLOYEE FEEDBACK FORM ") 
        setUserDetail({
            name:"",
            department:"",
            rating:""}) 
        setbtns(false)
    }
       
    return(
    <div>
        <div> <h1> {header} </h1> </div>
        { btns ? <>
        <div className="box-display">
            {
            record.map((crntElement)=>{
                return(
                <div className="box">
                    Name : {crntElement.name} | Department : {crntElement.department} | Rating : {crntElement.rating}
                </div>
                )
            })
            }
        </div>
        <button className="btn" onClick={gobackbtn} type="button" >Go Back</button></> :        
            <form action ="" onSubmit={handleSubmit}>
                <div>
                    <label> Name : </label>
                    <input required type="text" name="name" className="input" value={userDetail.name} onChange={handleInputData}/>
                </div>
                <div>
                    <label> Department : </label>
                    <input required type="text" name="department" className="input" value={userDetail.department} onChange={handleInputData}/>
                </div>
                <div>
                    <label > Rating : </label>
                    <input  required type="number" name="rating" className="input" value={userDetail.rating} onChange={handleInputData}/>
                </div>
                <button type="submit" className="btn" >Submit Here</button><br/><br/>
            </form>
        } 
    </div>    
    )
}
export default Employee;