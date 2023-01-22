import { useState } from "react";

export const Likes = () => {
  const [likes, setLikes] = useState(0);

  // setLikes();
  return (
    <div>
      Likes
      <Button onClick={() => setLikes(likes + 1)}>{likes} Likes</Button>
    </div>
  );
};

const Button = ({ onClick, children }) => {
  console.log("Render Button");
  return <button onClick={onClick}>{children}</button>;
};
