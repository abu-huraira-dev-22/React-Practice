import React, { useState } from "react";

const ToggleMessage = () => {
  const [message, setMessage] = useState(false);
  const [count, setCount] = useState(0);
  const showMessage = () => {
    if (!message) {
      setCount(count+1);
    }
     else if(count>0) {
      setCount(count - 1)
    }

    setMessage(!message);
  };

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-7xl">{message ? "Hello React" : "No Message"}</h1>
        <h1 className="text-7xl">{count}</h1>
        <button className="btn btn-primary" onClick={showMessage}>
          Show Message
        </button>
      </div>
    </div>
  );
};

export default ToggleMessage;
