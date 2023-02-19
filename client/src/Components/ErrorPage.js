import React from "react";
import "./Error.css";

const ErrorPage = () => {
  return (
    <>
      <div className="flex-center position-r full-height">
        <div className="code">404 </div>

        <div className="message">
          NOT FOUND{" "}
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
