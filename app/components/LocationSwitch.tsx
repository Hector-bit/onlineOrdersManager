'use client'
import { useContext } from "react";
// import { CartContext } from "@/context/orderContext";
// import { locations, locationsTest, location_address, MerchantLocationsType } from "@utils/merchantConstants";

const LocationSwitch = () => {

  // const { location, handleLocation } = useContext(CartContext)

  // const locationOptions = process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true' ? locations : locationsTest

  return (
    <div className="text-2xl font-bold">
      <label className='mr-2'>Location:</label>
      {/* <select 
        id="locations"
        name="locations" 
        className="p-2 font-medium" 
        value={location} 
        onChange={(e) => handleLocation(e.target.value as MerchantLocationsType)}
      >
        {locationOptions.map((location, index) => {
          return (
            <option
              key={`${index}-${location}`} 
              className="p-2 font-medium font"
              value={location}
            >
              {location}
            </option>
          )
        })}
      </select>
      <div className=" mb-8">{`Pick up location: ${location_address[location]}`}</div> */}
    </div>
  )
}

export default LocationSwitch;