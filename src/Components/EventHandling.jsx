import { useState } from "react";

const EventHandling = () => {
  const [count, setCount] = useState(0);

  function incrementVal() {
    setCount(count + 1);
  }

  function resetVal() {
    setCount(0);
  }

  const _element = (
    <div>
      <h2>Event Handling</h2>
      <p>Count: {count}</p>
      <button onClick={incrementVal}>Increment</button>
      <button onClick={resetVal}>Reset</button>
    </div>
  );

  return _element;
};

export default EventHandling;
