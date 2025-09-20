import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetch(`${API_URL}/hotels`);

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(`${API_URL}/hotels/${movieId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete hotel.";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Movie deleted successfully.");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>All Hotels</h2>
      {data ? (
        <ul>
          {data.map((hotel) => (
            <li key={hotel._id}>
              {hotel.name}{" "}
              <button onClick={() => handleDelete(hotel._id)}>Delete</button>{" "}
            </li>
          ))}
        </ul>
      ) : (
        loading && <p>Loading...</p>
      )}
      <p>{successMessage}</p>
    </div>
  );
};

export default Hotels;
