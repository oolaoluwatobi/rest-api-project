import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "../context/context";
import SubscriberDetails from "./SubscriberDetails";
// import users from "./usersdb";

const SubscribersList = () => {
  const { users } = useContext(FormContext)
  
  const subscribers = users?.map((user) => {
    return <SubscriberDetails key={user._id} user={user} />;
  });
  // console.log(users[0].firstName)

  return (
    <>
      <div className="max-w-4xl">
        <div className="flex justify-between px-5 my-5">
          <h3 className="text-2xl font-medium">Subscribers List</h3>
          <Link to={"/addsubscriber"}>
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-medium">
              Add Subscribers
            </button>
          </Link>
        </div>
      </div>
      <hr />
      {subscribers}

    </>
  );
};

export default SubscribersList;
