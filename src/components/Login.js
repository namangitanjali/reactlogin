import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './login.css';

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });


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

    const getuserArr = localStorage.getItem("usernaam");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
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
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/details");
        }
      }
    }
  };

  return (
    <>

<div className="container" id="container">
        
        <div className="form-container sign-in">
            <form>
                <h1>Hello ! Welcome back</h1>
              
                <input type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"/>
              
                
               <input type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"/>
               
               
                
                <button onClick={addData} type="submit">Login</button>
                <div className="partition">or</div>
                
              
            <div className="social-icons">
              <Link to="#" className="icon">
              <img   src= './images/google.png' alt="img"/>
              </Link>
             
              <Link to="#" className="icon">
              <img src='./images/apple.png' alt="img"/>
              </Link>
              <Link to="#" className="icon">
              <img src='./images/fb.png' alt="img"/>
              </Link>
            </div>
                <div className="option"><span>Don't have an account ?<Link to="/"> Create Account.</Link></span></div>
                
              
            </form>
            
        </div>
        <div className="toggle-container">
            <div className="toggle">
              

            </div>
        </div>
        <ToastContainer/>
    </div>

   
    </>
  );
};

export default Login;
