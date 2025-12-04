import { useEffect, useState } from "react";
import { FacilityCard } from "./FacilityCard";

export const FacilitiesInfo = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/facilities.json`)
      .then((res) => res.json())
      .then((data) => setFacilities(data))
      .catch((err) => console.error("Error loading facilities:", err));
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                 gap-10 pb-10 px-4">
      {facilities.map((facility: any, index: number) => (
        <FacilityCard
          key={index}
          title={facility.title}
          description={facility.description}
          image={facility.photo}
        />
      ))}
    </div>
  );
};
