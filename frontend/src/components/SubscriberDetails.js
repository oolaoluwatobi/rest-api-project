import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import user from "../images/user.png";
import { FormContext } from "../context/context";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const SubscriberDetails = ({ user: { firstName, lastName, email, _id } }) => {
  const { setUsers, handleDelete } = useContext(FormContext)

  
  const handleEdit = (id) => {
    
  } 
  // console.log(_id)
  // console.log(props.user.firstName)

  return (
    <div className='hover:bg-slate-200'>
      <div className="pt-5 ">
          <div className="max-w-4xl flex items-center justify-between px-5 mb-5">
            <div className="flex">
              <img
                src={user}
                alt="userimage"
                className="w-12 h-12 aspect-square mr-2"
              />
              <div className="flex-col items-center justify-center">
                <div className="flex">
                  <p className="font-bold text-gray-700 mr-3">{firstName}</p>
                  <p className="font-bold text-gray-700">{lastName}</p>
                </div>
                <p className="text-blue-700">{email}</p>
              </div>
            </div>

            <div>
              <Link to={'/editsubscriber'} >
                <button className="mr-4 hover:scale-110 duration-500 text-blue-600" onClick={() => handleEdit(_id)}>
                  <AiOutlineEdit size={25} />
                </button>
              </Link>
              <button className="text-red-600 hover:scale-110 duration-500" onClick={() => handleDelete(_id)}>
                <AiOutlineDelete size={25} />
              </button>
            </div>
          </div>
          <hr />
        </div>
    </div>
  )
}

export default SubscriberDetails