import Nav from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const auth = localStorage.getItem("auth");
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Nav />
    </>
  );
}

export default App;
