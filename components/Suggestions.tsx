import { useEffect, useState } from "react";
import { createRandomUser } from "../libs/createRandomUser";
import { User } from "../typings";

function Suggestions() {
  const [suggestions, setSuggestions] = useState<User[]>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map(() => ({
      ...createRandomUser(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-gray-400 text-sm font-bold">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map(profile => (
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            src={profile.avatar}
            alt="profile"
            className="p-[2px] w-10 h-10 border rounded-full"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="ml-3 text-blue-400 text-xs font-bold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
