import React from "react";
import { Link } from "react-router-dom";

/**
 * Responsive navigation bar that routes all pages. 
 * 
 * @author Jordan Short
 */
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isCross: false,
      logoutVisible: true,
    };
    this.settingsNav = this.settingsNav.bind(this);
  }

  settingsNav() {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  }

  handleLogoutClick = () => {
    this.setState({
      authenticated: false,
      token: null,
    });
    localStorage.clear();
  };

  render() {
    return (
      <div className="bg-lime-green font-mono">
        <div className="w-full h-16">
          <div className="flex flex-row justify-start absolute">
            <div className="m-4 text-text-dark text-xl font-bold">
              <Link to="/">DIS Research Papers</Link>
            </div>
          </div>
          <div className="flex justify-end">
            {!this.isCross ? (
              <svg
                onClick={this.settingsNav}
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 m-3 text-text-dark md:hidden cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            ) : null}

            {this.isCross ? (
              <svg
                v-if="isCross"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 m-3 text-text-dark md:hidden cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : null}

            <div className="hidden md:flex mt-2 mr-3 text-text-dark text-xl">
              <Link className="p-2 hover:text-head-orange" to="/">
                Home
              </Link>
              <Link className="p-2 hover:text-head-orange" to="/papers">
                Papers
              </Link>
              <Link className="p-2 hover:text-head-orange" to="/authors">
                Authors
              </Link>
              <Link className="p-2 hover:text-head-orange" to="/login">
                Reading List
              </Link>
              {localStorage.getItem("myViewingListToken") ? (
                <Link
                  onClick={() => this.handleLogoutClick()}
                  className="p-2"
                  to="/logout"
                >
                  Logout
                </Link>
              ) : null}
            </div>
          </div>
        </div>
        {this.state.isVisible ? (
          <div className="flex flex-col fade-in text-center z-10 text-text-dark text-2xl absolute w-full fade-in bg-lime-green">
            <Link onClick={this.settingsNav} className="mb-8" to="/">
              Home
            </Link>
            <Link onClick={this.settingsNav} className="mb-8" to="/papers">
              Papers
            </Link>
            <Link onClick={this.settingsNav} className="mb-8" to="/authors">
              Authors
            </Link>
            <Link onClick={this.settingsNav} className="mb-8" to="/login">
              Reading List
            </Link>
            {localStorage.getItem("myViewingListToken") ? (
              <Link
                onClick={() => {
                  this.handleLogoutClick();
                  this.settingsNav();
                }}
                className="mb-8"
                to="/logout"
              >
                Logout
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Navigation;