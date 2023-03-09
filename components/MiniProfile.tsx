function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        src="https://links.papareact.com/3ke"
        alt="profile"
        className="w-16 h-16 p-[2px] border rounded-full"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">jason</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
