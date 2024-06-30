import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login-signup/Login";
import Signup from "./pages/login-signup/Signup";
import Home from "./pages/home/Home";
import AllJobs from "./pages/home/AllJobs";
import AddEditJob from "./pages/add-editjob/AddEditJob";
import JobDetails from "./pages/job-details/JobDetails";
import ProtectedRoute from "./ProtectedRoute";
import MyJobs from "./pages/home/MyJobs";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AllJobs />} />
            <Route
              path="/myjobs"
              element={
                <ProtectedRoute>
                  <MyJobs />
                </ProtectedRoute>
              }
            />
            <Route path="/job-details/:jobId" element={<JobDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/add-edit-job/:jobId"
            element={
              <ProtectedRoute>
                <AddEditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-edit-job"
            element={
              <ProtectedRoute>
                <AddEditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <h1>Page not found</h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
