
import './App.css';
import Student from './Components/Student';
import AddProduct from './Components/addProduct';
import StudentProfile from './Components/studentProfile';
import BusinessOwner from './Components/BusinessOwner';
import BusinessProfile from './Components/BusinessProfile';


function App() {
  return (
    <div className="App">
     <h1>
      home page
     </h1>
     {/* <Student/> */}
     {/* <StudentProfile /> */}
      {/* <AddProduct /> */}
      {/* <BusinessOwner/> */}
      <BusinessProfile/>
    </div>
  );
}

export default App;
