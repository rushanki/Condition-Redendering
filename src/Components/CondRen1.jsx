import React, { useState } from "react";

const CondRen1 = () => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div className="w-50 m-auto text-center">
        <button
          className="btn btn-warning"
          onClick={() => {
            if (flag === true) {
              setFlag(false);
            } else {
              setFlag(true);
            }
          }}
        >
          Show Message
        </button>
        {flag == true ? <p>Good Morning</p> : null}
      </div>
    </>
  );
};

export default CondRen1;
