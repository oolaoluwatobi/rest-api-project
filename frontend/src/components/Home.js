import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubscribersList from "./SubscribersList";

const Home = (props) => {

  return (
    <div className="flex items-center justify-center">
      <div className=" w-full flex flex-col justify-center ">

        <div className="max-w-4xl  bg-green-30">
          <Link to={'/'}>
            <h1 className="w-full text-4xl font-semibold my-5 px-5 pb-5 ">
              Subscribers
            </h1>
          </Link>
          <hr />
          <SubscribersList users={props.users} />
        </div>


      </div>
    </div>
  );
};

export default Home;
