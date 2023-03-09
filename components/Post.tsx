import { IPost } from "../typings";
import {
  HeartIcon,
  BookmarkIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";

function Post({ id, username, userImg, postImg, caption }: IPost) {
  return (
    <div className="my-7 bg-white border rounded-sm">
      {/* Header */}
      <div className="p-5 flex items-center">
        <img
          src={userImg}
          alt="profile"
          className="mr-3 p-1 w-12 h-12 object-contain border rounded-full"
        />
        <p className="flex-1 font-bold">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img src={postImg} className="w-full object-cover" />

      {/* Buttons */}
      <div className="px-4 pt-4 flex justify-between">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatBubbleLeftEllipsisIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>

      {/* Comments (Later on) */}

      {/* Input Box */}
      <div>
        <form className="p-4 flex items-center">
          <FaceSmileIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border-none focus:ring-0 outline-none"
          />
          <button className="font-semibo text-blue-400">Post</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
