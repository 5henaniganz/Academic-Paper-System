import React from "react";
import { Link } from "react-router-dom";

/**
 * Logout page to inform users they are being logged out.
 * 
 * @author Jordan Short
 */
class Logout extends React.Component {
  render() {
    return (
      <div className="font-mono mt-8 flex flex-col justify-center items-center">
        <div className="text-center w-screen">
          <h1 className="text-2xl text-head-orange font-bold">
            Logged Out
          </h1>
        </div>
        <div>
          <Link to="/login">
            <button
            className="mt-2 bg-lime-green rounded p-1 text-text-dark font-semibold hover:text-head-orange">
            Back to Login
          </button>
          </Link>
          </div>
      </div>
    );
  }
}
export default Logout;
