import { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    // likes = 0
    // setLikes (0 + 1)
    // likes = 1
    setLikes(likes + 1);
  };

  return (
    <div className="justify-center flex flex-col items-center">
      <button
        onClick={handleClick}
        className="border border-black text-lg p-2 mx-10"
      >
        click
      </button>
      <input
        onChange={(e) => setName(e.target.value)}
        className="border border-black"
      />
      <div>LIKES: {likes}</div>
      <div>NAME: {name}</div>
    </div>
  );
}
