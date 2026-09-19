import { useState } from "react";




function Register() {
    const [pname,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [address,setAddress] = useState("");

    const [message,setMessage] = useState("");
    const [error,setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        setMessage("");
        setError("");
        const userData = {
            pname,email,phone,password,address
        };

        try {
            const response = await fetch("http://localhost:8080/user/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(userData)
            });
            
            const data = await response.json();
            if(!response.ok) {
                throw new Error(data.message || "Registration failed!");
            }
            setMessage("Registration Success.");
            setError("");
        } catch(err) {
            setError(err.message || "Something went Wrong!!")
        }
        

    }

    return (
        <main>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    placeholder="Enter Full Name"
                    id="name"
                    value={pname}
                    onChange={(e)=>setName(e.target.value)}
                    required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                    placeholder="abc123@gmail.com"
                    id="email"
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                        <input
                        id="phone"
                        placeholder="ex:9912341234"
                        type="tel"
                        size={10}
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                        />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                    placeholder="Enter Password.."
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required />
                </div>

                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text"
                    placeholder="Enter Address.."
                    id="address"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    required />
                </div>

                <button type="submit">Register</button>
                {message && <p style={{ color: "green" }}>{message}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </main>
    );
}

export default Register;