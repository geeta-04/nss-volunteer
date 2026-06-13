import {
 BrowserRouter,
 Routes,
 Route
}
from "react-router-dom";

import Login from "./pages/Login";

import StudentDashboard from "./pages/StudentDashboard";

import Opportunities from "./pages/Opportunities";

import Profile from "./pages/Profile";

import Recommendations from "./pages/Recommendations";

import NGODashboard from "./pages/NGODashboard";

import ViewApplicants from "./pages/ViewApplicants";

import MyApplications from "./pages/MyApplications";

import Navbar from "./Component/Navbar";

import Footer from "./Component/Footer";

function App(){

 return(

 <BrowserRouter>

<Navbar />

   <Routes>

     <Route
       path="/"
       element={<Login />}
     />

     <Route
      path="/dashboard"
      element={<StudentDashboard />}
     />
     <Route
      path="/opportunities"
      element={<Opportunities />}
      />
      <Route
      path="/profile"
      element={<Profile />}
      />
      <Route
      path="/recommendations"
      element={
      <Recommendations />
      }
      />
      <Route
      path="/ngo-dashboard"
      element={<NGODashboard />}
      />
      <Route
      path="/applicants"
      element={<ViewApplicants />}
      />
      <Route
        path="/my-applications"
        element={<MyApplications />}
      />

   </Routes>
   <Footer />

 </BrowserRouter>

 );

}

export default App;