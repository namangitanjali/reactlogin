import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";


const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
 

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("usernaam", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in">
          <form>
            <h1>Register Here </h1>

            <input
              type="text"
              name="name"
              onChange={getdata}
              placeholder="Enter Your Name"
            />

            <input
              type="email"
              name="email"
              onChange={getdata}
              placeholder="Enter email"
            />
            <input onChange={getdata} name="date" type="date" />

            <input
              type="password"
              name="password"
              onChange={getdata}
              placeholder="Password"
            />

            <button onClick={addData}>REGISTER</button>
            <div className="partition">or</div>

            <div className="social-icons">
              <Link to="#" className="icon">
              <img src= './images/google.png' alt="img"/>
              </Link>
             
              <Link to="#" className="icon">
              <img src='./images/apple.png' alt="img"/>
              </Link>
              <Link to="#" className="icon">
              <img src='./images/fb.png' alt="img"/>
              </Link>
            </div>
            <div className="option">
              <span>
                Already have an account ? <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
        </div>
        <ToastContainer />
      </div>

    </>
  );
};

export default Home;
