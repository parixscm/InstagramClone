import { useEffect, useState } from "react";
import { User } from "../typings";
import { createRandomUser } from "../libs/createRandomUser";

function Stories() {
  const [suggestions, setSuggestions] = useState<User[]>([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map(() => ({
      ...createRandomUser(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div>
      {/* {suggestions.map(({ id, username, avatar }) => (
        <Story key={id} username={username} img={avatar} />
      ))} */}
    </div>
  );
}

export default Stories;
