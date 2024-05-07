import React, { useState } from 'react';
import { useRegions } from "medusa-react";

const Regions = () => {
  const { regions, isLoading } = useRegions();
  const [selectedRegion, setSelectedRegion] = useState(""); // State to store selected region

  const handleRegionChange = (e) => {
    const selectedRegionId = e.target.value;
    const selectedRegionName = regions.find(region => region.id === selectedRegionId)?.name;
    console.log("Selected Region:", selectedRegionName);
    setSelectedRegion(selectedRegionId);
    console.log(regions)
  };

  return (
    <div className='py-14 '>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <select
          className="appearance-none border bg-[#1E1E1E] text-white border-white rounded-md  focus:outline-none focus:border-indigo-500 p-1"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Regions</option>
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Regions;
