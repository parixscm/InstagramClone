import { StoryProps } from "../typings";

function Story({ username, img }: StoryProps) {
  return (
    <div>
      <img
        src={img}
        alt="profile"
        className="p-[1.5px] w-14 h-14 border-2 border-red-500 rounded-full object-contain cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
      />
      <p className="w-14 text-xs text-center truncate">{username}</p>
    </div>
  );
}

export default Story;
