import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./PagesInMain/Home";
import NewContact from "./PagesInMain/NewContact"; 
import UserProfile from "./PagesInMain/Profile"; 
import Navbar from './components/Navbar';
import "./App.css";

function App() {

  return (

        <Router>

              <div>

              <h3>Purple Chat-Space</h3>

             {/* Render the Navbar */}
        <Navbar />
        
        {/* Define the Routes */}
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/new-contact' element={<NewContact />} />
          <Route path='/profile' element={<UserProfile />} /> 

            </Routes>

        </div>

    </Router>
  );
}

export default App;



