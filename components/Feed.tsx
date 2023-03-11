import { useSession } from "next-auth/react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`mx-auto grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>

      {session && (
        <section className="hidden md:grid-cols-1 xl:inline-grid">
          <div className="fixed top-20">
            {/* Mini Profile */}
            <MiniProfile />

            {/* Suggestions */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
