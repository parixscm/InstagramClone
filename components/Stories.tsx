import { useEffect, useState } from "react";
import { User } from "../typings";
import { createRandomUser } from "../libs/createRandomUser";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState<User[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map(() => ({
      ...createRandomUser(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-8 p-6 flex space-x-2 bg-white border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          username={session?.user?.username!}
          img={session?.user?.image!}
        />
      )}

      {suggestions.map(({ id, username, avatar }) => (
        <Story key={id} username={username} img={avatar} />
      ))}
    </div>
  );
}

export default Stories;
