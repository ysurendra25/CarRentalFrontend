import { useEffect, useState } from "react";

function Profile() {

    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        const token = localStorage.getItem("token");

        fetch("http://localhost:8080/user/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to load profile");
            }

            return response.json();
        })
        .then(data => {
            setUser(data);
        })
        .catch(error => {
            setError(error.message);
        });

    }, []);

    if (error) {
        return <p style={{ color: "red" }}>{error}</p>;
    }

    if (!user) {
        return <p>Loading profile...</p>;
    }

    return (
        <main>

            <h1>My Profile</h1>

            <p>
                <strong>ID:</strong> {user.userId}
            </p>

            <p>
                <strong>Name:</strong> {user.pname}
            </p>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Mobile:</strong> {user.phone}
            </p>

            <p>
                <strong>Role:</strong> {user.role}
            </p>

        </main>
    );
}

export default Profile;