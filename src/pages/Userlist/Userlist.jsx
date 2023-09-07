import React, { useEffect, useState } from 'react'
import Style from "./user.module.css"
import { Link } from 'react-router-dom';

const Userlist = () => {
const [data, setdata] = useState([])
const url = "https://jsonplaceholder.typicode.com/users";
// get userlist here..

useEffect(()=>{
const getuser = async()=>{
try {
  const  response = await fetch(url)
  if(!response.ok){
    throw new Error("api failed not response ");
  }
  const  result = await response.json()
  setdata(result)
} catch (error) {
  console.log(error)
}}
getuser()
},[])

// delete the user 
const handledelte = (id)=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
}

  return (
    <div className={Style.maincontainor}>
        
<h2 className={Style.title}>Users</h2>
<table>
<thead>
<tr>
<th> id</th>
<th>Username</th>
<th>Email</th>
<th className={Style.phone}>Phone </th>
<th>Add  </th>
<th>Update </th>
<th>Delete</th>
</tr>
</thead>
<tbody>
  {data.map((item,index)=>{
    return(
      <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td className={Style.phone}>{item.phone}</td>
      <td> <Link to="/Adduser"><button className={`${Style.btn} ${Style.addbtn}`}>Add</button> </Link></td>
  <td> <Link to="/Adduser"><button className={`${Style.btn} ${Style.updatebutton}`}> Update</button> </Link></td>
  <td><button className={`${Style.btn} ${Style.deletebutton}`}onClick={()=>handledelte(item.id)}> Delete</button></td>
  </tr>
 )
  })
 }
</tbody>
</table>


        
        </div>
  )
}

export default Userlist