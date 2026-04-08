import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    setLoading(true)
    console.log(username, password)
    try{
       const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
       localStorage.setItem('accessToken', response.data.access)
       localStorage.setItem('refreshToken', response.data.refresh)
       console.log('Login Successful')
       setIsLoggedIn(true)
       
    } catch(error){
      console.log('invalid credentials')
      setError('Invalid credentials')
    }finally{
      setLoading(false)
    }
     
  };
  return (
    <>
      <div className="container  ">
        <div className="row justify-content-center">
          <div className="col-md-6  bg-light-dark p-5 rounded">
            <h3 className="text-light text-center">Login to our Portal</h3>
            <form action="" onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
               
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Set Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                 {error && <div className="text-danger"> {error} </div> }
              </div>

              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto"
                  disabled
                >
                  <span className="spinner-border spinner-border-sm me-2"></span>{" "}
                  Loggin in....
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
