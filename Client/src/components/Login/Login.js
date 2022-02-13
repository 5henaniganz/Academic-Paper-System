import React from "react";

/**
 * Login form component, takes in relavant passed props.
 * 
 * @author Jordan Short
 */
class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-head-orange font-bold mb-5 mt-5">
            Login
          </h1>
          <input
            className=" p-1 border"
            type="text"
            placeholder="email"
            value={this.props.email}
            onChange={this.props.handleEmail}
          />
          <input
            className="mt-2 p-1 border"
            type="password"
            placeholder="password"
            value={this.props.password}
            onChange={this.props.handlePassword}
          />
          <button
            className="mt-2 bg-lime-green rounded p-1 text-text-dark font-semibold hover:text-head-orange"
            onClick={this.props.handleLoginClick}
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
