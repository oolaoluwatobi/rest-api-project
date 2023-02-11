import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../context/context";

const EditSubscriber = ({ user: { firstName, lastName, email, password, _id } }) => {
  const { setUsers } = useContext(FormContext)
  const history = useNavigate()

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    _id: _id
  })
  
  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }
  
  const handleSubmit = () => {
    setUsers(prevData => {
      return [
        ...prevData,
        formData
      ]
    })
    history('/')
  }
  
  return (
    <div>
      <div>
        <Link to={'/'}>
          <h1 className="w-full text-4xl font-semibold my-5 px-5 pb-5 ">
            Subscribers
          </h1>
        </Link>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
          <input
            type="text"
            placeholder="last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
          <input
            type="email"
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-medium">
            Add Subscriber
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSubscriber;
