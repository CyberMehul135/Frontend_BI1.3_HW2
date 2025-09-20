import useFetch from "../useFetch";

const HotelByName = ({ name }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetch(`${API_URL}/hotels/${name}`);

  return (
    <div>
      {data ? (
        <>
          <h2>{data.name}</h2>
          <p>
            <strong>Phone Number : </strong>
            {data.phoneNumber}
          </p>
          <p>
            <strong>Cateory : </strong>
            {data.category.join(", ")}
          </p>
          <p>
            <strong>Price Range : </strong>
            {data.priceRange}
          </p>
          <p>
            <strong>Rating : </strong>
            {data.rating}
          </p>
          <p>
            <strong>Amenities : </strong>
            {data.amenities.join(", ")}
          </p>
          <p>
            <strong>Reservation Needed : </strong>
            {data.reservationsNeeded ? "Yes" : "No"}
          </p>
          <p>
            <strong>Pool Avilable : </strong>
            {data.isPoolAvailable ? "Yes" : "No"}
          </p>
        </>
      ) : (
        loading && <p>Loading...</p>
      )}
    </div>
  );
};

export default HotelByName;
