import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      <h1>Hello {isSubmitted ? name : null}</h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
          setSubmitted(false);
        }}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        type="submit"
        onClick={() => {
          setSubmitted(true);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
