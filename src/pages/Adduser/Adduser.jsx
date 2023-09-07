import React, { useState } from 'react'
import Style from "./adduser.module.css"

const Adduser = () => {
    // Add user Detail intialvalue
const [user , setadduser] = useState({
 usertitle:"", 
 title:"",  
 username:"",
 email:"",
 phone:"",
})
// update user 
const [userupdate , setuserupdate] = useState({
    updatename:"", 
    updatetitle:"",  
    updateusername:"",
    updateemail:"",
    updatephone:"",
   })
   



// Adduser  from API
const handlechange = (e) => {
    setadduser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

const handlesubmit = async(e)=>{
    e.preventDefault()
 try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json',
        },
      })
      if(!res.ok){
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
 } catch (error) {
    console.error('An error occurred:', error.message);
 }

}

// update user 

const handlechangeupdate = (e) => {
    setuserupdate((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    try {
      const updateres = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(userupdate),
        headers: {
          'Content-type': 'application/json',
        },
      });
  
      if (!updateres.ok) {
        // If the response status is not in the range 200-299 (HTTP success), handle the error.
        throw new Error(`HTTP error! Status: ${updateres.status}`);
      }
  
      const updateresult = await updateres.json();
      console.log(updateresult);
    } catch (error) {
      // Handle the error here, for example, by logging it to the console.
      console.error('An error occurred:', error.message);
    }
  };



  return (
    <div className={Style.maincontainor}>
    <section className={Style.addusercontainor}>
        <h2>Add users</h2>
      <form className={Style.userdetail} onClick={handlesubmit} >
        <label>Name</label>
        <input type="text" name='usertitle' placeholder='enter your name' value={user.usertitle} onChange={handlechange} />
        <label>Title</label>
        <input type="text" name='title' placeholder='enter title' value={user.title}onChange={handlechange} />
        <label>Username</label>
        <input type="text" name='username' placeholder='enter your username' value={user.username} onChange={handlechange} />
        <label>Email</label>
        <input type="email" name='email' value={user.email} placeholder='enter your email'onChange={handlechange} />
        <label>Phone</label>
        <input type="text" name='phone' placeholder='enter your phone' value={user.phone}onChange={handlechange} /> 
        <button className={Style.submitbtn} type='submit'>Submit Now</button>       
        </form>  
          </section> 

          <section className={Style.addusercontainor}>
        <h2>Update users</h2>
      <form className={Style.userdetail} onClick={handlesubmit} >
        <label>Name</label>
        <input type="text" name='updatename' placeholder='enter your name' value={userupdate.updatename} onChange={handlechangeupdate} />
        <label>Title</label>
        <input type="text" name='updatetitle' placeholder='enter title' value={userupdate.updatetitle}onChange={handlechangeupdate} />
        <label>Username</label>
        <input type="text" name='updateusername' placeholder='enter your username' value={userupdate.updateusername} onChange={handlechangeupdate} />
        <label>Email</label>
        <input type="email" name='updateemail' value={userupdate.updateemail} placeholder='enter your email'onChange={handlechangeupdate} />
        <label>Phone</label>
        <input type="text" name='updatephone' placeholder='enter your phone' value={userupdate.updatephone}onChange={handlechangeupdate} /> 
        <button className={`${Style.updatetbtn} ${Style.submitbtn} `} type='submit' onClick={handleUpdate}>Update Now</button>       
        </form>  
          </section> 

       
        </div>
  )
}

export default Adduser