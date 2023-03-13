import { useEffect, useState } from "react";
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
import { useSession } from "next-auth/react";
import {
  addDoc,
  serverTimestamp,
  onSnapshot,
  collection,
  query,
  orderBy,
  QuerySnapshot,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

function Post({ id, username, userImg, postImg, caption }: IPost) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] =
    useState<QueryDocumentSnapshot<DocumentData>[]>();

  const sendComment = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user.username,
      userImage: session?.user.image,
      timestamp: serverTimestamp(),
    });
  };

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot: QuerySnapshot<DocumentData>) => {
        setComments(snapshot.docs);
      }
    );
  }, [db]);

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
      {session && (
        <div className="px-4 pt-4 flex justify-between">
          <div className="flex space-x-4">
            <HeartIcon className="postBtn" />
            <ChatBubbleLeftEllipsisIcon className="postBtn" />
            <PaperAirplaneIcon className="postBtn" />
          </div>
          <BookmarkIcon className="postBtn" />
        </div>
      )}

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>

      {/* Comments (Later on) */}

      {/* Input Box */}
      {session && (
        <div>
          <form className="p-4 flex items-center">
            <FaceSmileIcon className="h-7" />
            <input
              type="text"
              value={comment}
              placeholder="Add a comment..."
              onChange={event => setComment(event.target.value)}
              className="flex-1 border-none focus:ring-0 outline-none"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              onClick={sendComment}
              className="font-semibo text-blue-400"
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Post;
