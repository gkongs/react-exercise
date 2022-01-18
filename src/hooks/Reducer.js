import { useEffect, useState } from "react";

const Reducer = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(prev => prev + 5);
    console.log();
  }, []);

  const plusNumber = e => {
    setNumber(number + 1);
  };

  return (
    <div>
      <button onClick={plusNumber}>Increase</button>
    </div>
  );
};

export default Reducer;
