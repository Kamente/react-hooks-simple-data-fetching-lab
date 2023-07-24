// create your App component here
import React, { useState, useEffect } from "react";
const apiUrl = "https://dog.ceo/api/breeds/image/random"
const App = () => {
    const [dog, setDog] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setDog(data.message);
            })
            .catch((error) => {
                console.error("Error fetching dog:", error);
            });
    }, []);

    return (
        <div>
            {dog ? (
                <img src={dog} alt="Random dog" />
            ) : (
                <p>Loading ...</p>
            )}
        </div>
    )
}
export default App;

