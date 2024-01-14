import { useState } from "react";
import { emailAuth, users } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginBtn = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    if (password != confirmPassword) {
      toast.error("Passwords does not match");
    } else {
      const addd = users.add({
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      emailAuth.createUserWithEmailAndPassword(email, password);
      localStorage.setItem("auth", true);
      toast.success("Logged in sucessfully!");
      setTimeout(() => {
        localStorage.setItem("auth", true);
        navigate("/");
      }, 3000);
    }
  };
  return (
    <>
      <section className="py-5">
        <div className="container py-5">
          <div className="row mb-4 mb-lg-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold mb-2" style={{ color: "#007df8" }}>
                Sign up
              </p>
              <h2 className="fw-bold">Welcome</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-6">
              <div className="card" style={{ background: "#06151c" }}>
                <div className="card-styling card-body text-center d-flex flex-column align-items-center">
                  <div
                    className=" bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"
                    style={{ background: "#007df8" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-person"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                    </svg>
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      onChange={(event) => {
                        setConfirmPassword(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      onClick={handleRegister}
                      className="custom-btn btn shadow-none d-block w-100"
                    >
                      Sign up
                    </button>
                  </div>
                  <p
                    onClick={handleLoginBtn}
                    style={{ color: "rgb(0,125,248)" }}
                  >
                    Already have an account? Login
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
        theme="dark"
      />
    </>
  );
}

export default Register;
