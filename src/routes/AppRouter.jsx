import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/home/Home";
import { Login } from "@/pages/login/Login";
import { Signup } from "@/pages/signup/Signup";

const AppRouter = () => {
  return (
    <Routes>
      {/* Set the App component as the wrapper route */}
      <Route path="/" element={<App />}>
        {/* Set the Home component inside the "/" path */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
