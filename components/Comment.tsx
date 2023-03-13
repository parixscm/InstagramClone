import { DocumentData } from "firebase/firestore";
import Moment from "react-moment";

type IComment = {
  username: string;
  userImage: string;
  comment: string;
  timestamp: DocumentData[string];
};

function Comment({ username, userImage, comment, timestamp }: IComment) {
  return (
    <div className="mb-3 flex items-center space-x-2">
      <img src={userImage} alt="profile_image" className="h-7 rounded-full" />
      <p className="text-sm flex-1">
        <span className="mr-2 font-bold">{username}</span>
        {comment}
      </p>
      <Moment fromNow className="pr-5 text-xs">
        {timestamp?.toDate()}
      </Moment>
    </div>
  );
}

export default Comment;
