import React, { useEffect, useState } from "react";
import { CouncilCard } from "./CouncilCard";
import { PersonCard } from "./PersonCard";

interface Person {
  name: string;
  designation: string;
  email: string;
  linkedin: string;
  image_path: string;
  council: string;
}

type CouncilKey =
  | "warden"
  | "main council"
  | "sports council"
  | "mess council"
  | "technical council"
  | "maintenance council"
  | "cultural council"
  | "alumni council"
  | "design council";

export const CouncilInfo = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/council.json`)
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.error("Error loading contact info:", err));
  }, []);

  // Correctly typed councils object
  const councils: Record<CouncilKey, Person[]> = {
    "warden": [],
    "main council": [],
    "sports council": [],
    "mess council": [],
    "technical council": [],
    "maintenance council": [],
    "design council": [],
    "cultural council": [],
    "alumni council": [],
  };

  // Distribute people into their councils
  people.forEach((p) => {
    const key = p.council.toLowerCase() as CouncilKey;
    if (councils[key]) {
      councils[key].push(p);
    }
  });

  // Helper filters
  const isCouncillor = (p: Person) =>
    p.designation.toLowerCase().endsWith("councillor");

  const isNominee = (p: Person) =>
    p.designation.toLowerCase().endsWith("nominee");

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-12">
      {/* WARDEN COUNCIL - 4 cards */}
      <CouncilCard title="Warden Council">
        <div className="flex justify-center gap-6 flex-wrap">
          {councils["warden"].slice(0, 4).map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </CouncilCard>

      {/* MAIN COUNCIL - 3 cards */}
      <CouncilCard title="Main Council">
        <div className="flex justify-center gap-6 flex-wrap">
          {councils["main council"].slice(0, 3).map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </CouncilCard>

      {/* MAINTENANCE COUNCIL - only 1 */}
      <CouncilCard title="Maintenance Council">
        <div className="flex justify-center gap-6">
          {councils["maintenance council"].slice(0, 1).map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </CouncilCard>

      {/* MESS COUNCIL */}
      <CouncilCard title="Mess Council">
        <div className="flex justify-center gap-6 flex-wrap">
          {/* First row = councillor */}
          {councils["mess council"].filter(isCouncillor).map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Second row = remaining (4 people) */}
          {councils["mess council"]
            .filter((p) => !isCouncillor(p))
            .slice(0, 4)
            .map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
        </div>
      </CouncilCard>

      {/* SPORTS COUNCIL */}
      <CouncilCard title="Sports Council">
        <div className="flex justify-center gap-6 flex-wrap">
          {councils["sports council"].filter(isCouncillor).map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {councils["sports council"]
            .filter((p) => !isCouncillor(p))
            .slice(0, 4)
            .map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
        </div>
      </CouncilCard>

      {/* TECHNICAL COUNCIL */}
      <CouncilCard title="Technical Council">
        <div className="flex justify-center gap-6">
          {councils["technical council"]
            .filter(isCouncillor)
            .slice(0, 1)
            .map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {councils["technical council"]
            .filter((p) => !isCouncillor(p))
            .slice(0, 2)
            .map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
        </div>
      </CouncilCard>

      <CouncilCard title="Cultural Council">
        <div className="flex justify-center gap-6 flex-wrap">
          {councils["cultural council"].map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </CouncilCard>

      {/* DESIGN COUNCIL */}
      <CouncilCard title="Design Council">
        <div className="flex justify-center gap-6 flex-wrap">
          {councils["design council"].filter(isNominee).map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {councils["design council"]
            .filter((p) => !isNominee(p))
            .slice(0, 2)
            .map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
        </div>
      </CouncilCard>

      <CouncilCard title="Alumni Council">
        <div className="flex justify-center gap-6 flex-wrap">
          {councils["alumni council"].map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </CouncilCard>
    </div>
  );
};
