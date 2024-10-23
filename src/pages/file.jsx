import React, { useState } from 'react'
import { apiSignup } from '../services/auth'
import { useNavigate } from 'react-router-dom'

const VendorRegisterForm =() => {
    const [loading, setLoading] =useState(false)
    const navigate = useNavigate
    const handleSummit = async (event) =>{
        event.preventDefault()  //prevent the page from reloading
    try {
        setLoading(true)
        //prepare data to the sent backend
        const formData = new FormData(event.target)
        //populating the empty object for the payload variable
        const firstName = formData.get("firstname")
        const lastName = formData.get("lasttname")
        const email = formData.get("email")
        const password1 = formData.get("password1")
        const password2 = formData.get("password2") 

        //check if password match thats if two passwords
        if(password1 !== password2){
            return
        }
        //putting the object we are sending to the backend into the payload
        const payload = {firstName:firstName, lastName:lastName, email:email, password1:password1, password2:password2, role: "vendor"}

        //storing the response fron the backend after the payload is sent and its stored in the response variable
        const response = await apiSignup(payload)
        console.log(response.data)


        navigate("/login") //to redirect the vendor to the login page
    } catch (error) {
        
    }finally{
        setLoading(true)
    }
    }
  return (
    <div>
        <form action=""></form>
    </div>
  )
}

export default file