import { IPost } from "../typings";
import Post from "./Post";

const posts: IPost[] = [
  {
    id: "1",
    username: "jassss_on",
    userImg: "https://links.papareact.com/3ke",
    postImg: "https://links.papareact.com/3ke",
    caption: "Dope!",
  },
  {
    id: "2",
    username: "yikeee_s_",
    userImg: "https://links.papareact.com/3ke",
    postImg: "https://links.papareact.com/3ke",
    caption: "it's pouring outside!",
  },
];

function Posts() {
  return (
    <div>
      {posts.map(({ id, username, userImg, postImg, caption }: IPost) => (
        <Post
          key={id}
          id={id}
          username={username}
          userImg={userImg}
          postImg={postImg}
          caption={caption}
        />
      ))}
    </div>
  );
}

export default Posts;
