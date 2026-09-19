import  { useState, useEffect } from "react";
import CarCard from "./CarCard";

function Home() {

    const [cars, setCars] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {

        const token = localStorage.getItem("token");

        fetch("http://localhost:8080/cars/available", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {

            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            setCars(data);
        })
        .catch(error => {
            console.error("Cars API Error:", error);
            setError(error.message);
        });

    }, []);

    const lowBudget = [...cars]
        .sort((a, b) => a.pricePerDay - b.pricePerDay)
        .slice(0, 5);

    const highBudget = [...cars]
        .sort((a, b) => b.pricePerDay - a.pricePerDay)
        .slice(0, 5);

    return (
        <main>

            <h1 style={{ color: "goldenrod" }}>
                🚙 Experience Available Cars...
            </h1>

            <p>
                Rent your favorite car easily and securely.
            </p>

            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>
            )}

            <h1>Top Budget Cars</h1>

            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>

                {lowBudget.map(car => (
                    <CarCard
                        key={car.carId}
                        image_url={car.imageUrl}
                        brand={car.brand}
                        model={car.model}
                        price={car.pricePerDay}
                    />
                ))}

            </div>

            <h1>Top Premium Cars</h1>

            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>

                {highBudget.map(car => (
                    <CarCard
                        key={car.carId}
                        image_url={car.imageUrl}
                        brand={car.brand}
                        model={car.model}
                        price={car.pricePerDay}
                    />
                ))}

            </div>

        </main>
    );
}

export default Home;