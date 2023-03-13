import {
  onSnapshot,
  collection,
  query,
  orderBy,
  QuerySnapshot,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData>[]>();

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot: QuerySnapshot<DocumentData>) => {
          // snapshot is real time
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts?.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          postImg={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
