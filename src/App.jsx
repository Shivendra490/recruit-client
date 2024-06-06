import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login-signup/Login";
import Signup from "./pages/login-signup/Signup";
import Home from "./pages/home/Home";
import AllJobs from "./pages/home/AllJobs";
import AddEditJob from "./pages/add-editjob/AddEditJob";
import JobDetails from "./pages/job-details/JobDetails";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<AllJobs/>}/>
            <Route path="/job-details/:id" element={<JobDetails/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-edit-job" element={<AddEditJob/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
