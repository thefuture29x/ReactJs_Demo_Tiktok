import { useEffect, useState } from "react";

function Countdown() {
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(200);

  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       setCountdown((prev) => prev - 1);
  //     }, 1000);

  //     return () => clearInterval(timerId);
  //   }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [countdown]);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Stop" : "Start"}</button>
      {show && <h2>{countdown}</h2>}
    </div>
  );
}

export default Countdown;
