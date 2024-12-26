import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./redux/slices/authSlice";

export const App = () => {
  const dispatcher = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (localStorage.getItem("auth") && !auth?.token) {
      dispatcher(
        loginSuccess({ data: JSON.parse(localStorage.getItem("auth")) })
      );
    }
  }, [dispatcher, auth?.token]);
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-382px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
