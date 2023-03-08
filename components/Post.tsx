type IPost = {
  id: string;
  username: string;
  userImg: string;
  postImg: string;
  caption: string;
};

function Post({ id, username, userImg, postImg, caption }: IPost) {
  return <div>This is a Post</div>;
}

export default Post;
