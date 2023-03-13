import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { IPost } from "../typings";
import { db } from "../firebase";
import {
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
  onSnapshot,
  collection,
  query,
  orderBy,
  DocumentData,
  QuerySnapshot,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import {
  HeartIcon,
  BookmarkIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";
import Moment from "react-moment";

function Post({ id, username, userImg, postImg, caption }: IPost) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData>[]>();
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

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user.uid!));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user.uid!), {
        username: session?.user.username,
      });
    }
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot: QuerySnapshot<DocumentData>) => {
          setComments(snapshot.docs);
        }
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts", id, "likes"),
        (snapshot: QuerySnapshot<DocumentData>) => {
          setLikes(snapshot.docs);
        }
      ),
    [db, id]
  );

  useEffect(() => {
    setHasLiked(
      likes?.findIndex(like => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  console.log(`${id} - ${hasLiked}`);

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
            {hasLiked ? (
              <FilledHeartIcon
                onClick={likePost}
                className="postBtn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="postBtn" />
            )}
            <ChatBubbleLeftEllipsisIcon className="postBtn" />
            <PaperAirplaneIcon className="postBtn" />
          </div>
          <BookmarkIcon className="postBtn" />
        </div>
      )}

      {/* Caption */}
      <p className="p-5 truncate">
        {likes?.length! > 0 && (
          <p className="mb-1 font-bold">{likes?.length!} likes</p>
        )}
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>

      {/* Comments */}
      {comments?.length! > 0 && (
        <div className="h-20 ml-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {comments?.map(comment => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                src={comment.data().userImage}
                alt="profile_image"
                className="h-7 rounded-full"
              />
              <p className="text-sm flex-1">
                <span className="mr-2 font-bold">
                  {comment.data().username}
                </span>
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

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
