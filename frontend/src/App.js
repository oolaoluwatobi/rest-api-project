import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import AddSubscriber from './components/AddSubscriber';
import EditSubscriber from './components/EditSubscriber';
import { FormContext } from "./context/context";

function App() {
  const { users } = useContext(FormContext)
  
  return (
    <div className="">
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/editsubscriber" element={<EditSubscriber users={users}  />} />
          <Route exact path="/addsubscriber" element={<AddSubscriber />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
