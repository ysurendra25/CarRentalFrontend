import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";



function LogIn() {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const [message,setMessage] = useState("");
    const [error,setError] = useState("");

    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        setMessage("");
        setError("");

        const userData = {email,password};

        try {
            const response = await fetch("http://localhost:8080/user/login",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(userData)
            });

            const data = await response.json();
            if(!response.ok) {
                throw new Error(data || "LogIn Failed");
            }
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            localStorage.setItem("role", data.role);
            setMessage("Login Success");
            setError("");
            navigate("/")

        } catch(err) {
            setError(err.message || "Something went wrong!");
        }
        
    }

    return(
        <main>
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" 
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required />
            </div>

            <div>
                <button type="submit">LOGIN</button>
            </div>

            <p>
                New User?{" "}
                <Link to={"/register"}>Register</Link>
            </p>
            <p style={{color:"green"}}>{message}</p>
            <p style={{color:"red"}}>{error}</p>
            </form>
        </main>
        
    );
}
export default LogIn;



