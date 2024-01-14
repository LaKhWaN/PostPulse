import { useState } from "react";
import {
  Gauth,
  emailAuth,
  provider,
  signInWithPopup,
  users,
} from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  if (localStorage.getItem("auth")) navigate("/");

  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleGoogleLoginBtn = async () => {
    try {
      const result = await signInWithPopup(Gauth, provider);
      const data = result.user;

      const usersData = await users.where("email", "==", data.email).get();

      if (!usersData.empty) {
        const isGoogleLogin = usersData.docs[0].data().GAuth || false;

        if (isGoogleLogin) {
          toast.success("Logged in successfully with Google!");
          localStorage.setItem("auth", true);
          navigate("/");
        } else {
          toast.error(
            "This account is registered with Google, please use Google Login to continue"
          );
        }
      } else {
        const generatedUsername = data.displayName
          .replace(/\s/g, "")
          .toLowerCase();

        await users.add({
          firstname: data.displayName,
          lastname: "",
          email: data.email,
          username: generatedUsername,
          GAuth: true, // Set GAuth to true for Google login
        });

        toast.success("New user registered successfully with Google!");
      }
    } catch (error) {
      toast.error("Error signing in with Google:", error);
    }
  };

  const handleLoginBtn = async () => {
    try {
      // Check if the user account is registered with Google login
      const userDoc = await users.where("email", "==", email).get();

      if (!userDoc.empty) {
        const isGoogleLogin = userDoc.docs[0].data().GAuth || false;

        if (isGoogleLogin) {
          // If registered with Google login, inform the user
          toast.info(
            "This email is registered with Google login. Please use Google login."
          );
          // You can also redirect to the Google login page or handle it as needed
          return;
        }
      }
      const { user } = await emailAuth.signInWithEmailAndPassword(
        email,
        password
      );
      // Continue with regular login
      toast.success("Logged in successfully!");

      setTimeout(() => {
        localStorage.setItem("auth", true);
        navigate("/");
      }, 3000);
    } catch (error) {
      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === "auth/invalid-password") {
        toast.error("Wrong password.");
      } else if (errorCode === "auth/invalid-credential") {
        toast.error("Invalid Credentials");
      } else if (errorCode === "auth/invalid-email") {
        toast.error("Invalid email");
      } else {
        console.log(errorMessage);
      }
    }
  };

  const handleResetPassword = async () => {
    if (email === "") {
      console.log("Enter email first");
    } else {
      const userData = await users.where("email", "==", email).get();
      if (userData.empty) console.log("No user with that email");
      emailAuth.sendPasswordResetEmail(email);
      console.log("Email with password reset sent successfully to", email);
    }
  };

  return (
    <>
      <section className="py-5">
        <div className="container py-5">
          <div className="row mb-4 mb-lg-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold mb-2" style={{ color: "#007df8" }}>
                Login
              </p>
              <h2 className="fw-bold">Welcome back</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
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
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      className="custom-btn btn shadow-none d-block w-100"
                      type="submit"
                      onClick={handleLoginBtn}
                    >
                      Log in
                    </button>
                  </div>
                  <p
                    onClick={handleResetPassword}
                    style={{ color: "rgb(0,125,248)", fontSize: "0.8rem" }}
                  >
                    Reset Your Password{" "}
                  </p>
                  <hr />
                  <button
                    onClick={handleGoogleLoginBtn}
                    className="custom-btn btn"
                    style={{ marginBottom: "1rem" }}
                  >
                    <i style={{ marginRight: "0.5rem" }}>{<GoogleIcon />}</i>
                    Log in with Google
                  </button>
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

export default Login;
