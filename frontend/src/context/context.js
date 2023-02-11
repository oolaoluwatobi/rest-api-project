import React, { useState, createContext, useEffect } from 'react';
import api from '../api/users'

// import usersdb from "../components/usersdb";

const FormContext = createContext()

const FormContextPovider = (props) => {
  const [users, setUsers] = useState([])

  const handleDelete = (id) => {
    const newArray = users.filter((user) => user._id !== id)
    setUsers(newArray)
    console.log(id)
  }

  const retrieveSubscribers = async () => {
    const response = await api.get("/users");
    return response.data;
  }

  // console.log(users[1]._id)
  useEffect(() => {
    const getAllSubscribers = async () => {
      const allSubscribers = await retrieveSubscribers();
      if (allSubscribers) setUsers(allSubscribers)
    }

    getAllSubscribers()
  }, [])

  return (
    <FormContext.Provider value={{ users, setUsers, handleDelete }}>
      {props.children}
    </FormContext.Provider>
  )
}

export { FormContextPovider, FormContext }