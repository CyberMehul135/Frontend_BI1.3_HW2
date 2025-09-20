import { useState } from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;
    if (type === "checkbox") {
      setFormData((pre) => ({ ...pre, [name]: checked ? true : false }));
    } else {
      setFormData((pre) => ({ ...pre, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/hotels`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw "Failed to add hotel.";
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Hotel Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="category">Category: </label>
        <br />
        <select id="category" name="category" onChange={handleChange}>
          <option value="" selected disabled>
            Select any option
          </option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="location">Location: </label>
        <br />
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <br />
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="website">Website: </label>
        <br />
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number: </label>
        <br />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="checkInTime">CheckIn Time: </label>
        <br />
        <input
          type="text"
          id="checkInTime"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="checkOutTime">CheckOut Time: </label>
        <br />
        <input
          type="text"
          id="checkOutTime"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="amenities">Amenities: </label>
        <br />
        <input
          type="text"
          id="amenities"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="priceRange">Price Range: </label>
        <br />
        <select name="priceRange" id="priceRange" onChange={handleChange}>
          <option value="" selected disabled>
            Select Price-Range
          </option>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          id="reservationsNeeded"
          name="reservationsNeeded"
          checked={formData.reservationsNeeded}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="reservationsNeeded">Reservations Needed</label>
        <br />
        <br />
        <input
          type="checkbox"
          id="isParkingAvailable"
          name="isParkingAvailable"
          checked={formData.isParkingAvailable}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="isParkingAvailable">Is Parking Available </label>
        <br />
        <br />
        <input
          type="checkbox"
          id="isWifiAvailable"
          name="isWifiAvailable"
          checked={formData.isWifiAvailable}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="isWifiAvailable">Is Wifi Available </label>
        <br />
        <br />
        <input
          type="checkbox"
          id="isPoolAvailable"
          name="isPoolAvailable"
          checked={formData.isPoolAvailable}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="isPoolAvailable">Is Pool Available </label>
        <br />
        <br />
        <input
          type="checkbox"
          id="isSpaAvailable"
          name="isSpaAvailable"
          checked={formData.isSpaAvailable}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="isSpaAvailable">Is Spa Available </label>
        <br />
        <br />
        <input
          type="checkbox"
          id="isRestaurantAvailable"
          name="isRestaurantAvailable"
          checked={formData.isRestaurantAvailable}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="isRestaurantAvailable">Is Restaurant Available</label>
        <br />
        <br />
        <label htmlFor="photos">Photos </label>
        <br />
        <input
          type="text"
          id="photos"
          name="photos"
          value={formData.photos}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
