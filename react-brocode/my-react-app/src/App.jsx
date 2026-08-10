import { useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h1>{title}</h1>
      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const Header = () => {
  return <h1>Movies</h1>;
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
    </div>
  );
};

export default App;
