import React from "react";
import Header from "./Header";

const ErrorPage = () => {
  return (
    <div className="text-center">
        <Header/>
      <h2 className="font-bold text-5xl my-10">Oops! Page Not Found</h2>
      <p className="text-2xl my-10">The page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorPage;
