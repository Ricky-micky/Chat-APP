import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./PagesInMain/Home";
import NewContact from "./PagesInMain/NewContact"; 
import UserProfile from "./PagesInMain/Profile"; 
import Navbar from './components/Navbar';
import "./App.css";
import SignUpForm from './PagesInMain/signupform';

function App() {

  return (

        <Router>

              <div>

              <h3>Purple Chat-Space</h3>

             {/* Render the Navbar */}
        <Navbar />
        
        {/* Define the Routes */}
        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/new-contact' element={<NewContact />} />
          <Route path='/profile' element={<UserProfile />} /> 
          <Route path="/" element={<SignUpForm />} />
            </Routes>

        </div>

    </Router>
  );
}

export default App;



