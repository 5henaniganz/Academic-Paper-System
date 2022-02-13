import React from "react";
import Login from "../Login/Login";
import Reading from "../ReadingList/Reading";

/**
 * All functional logic tied to the login form.
 * 
 * Uses the authenticate endpoint to generate a javascript web token (JWT)
 * then saves it to local storage. If authenticated loads the "Reading" component.
 * 
 * @author Jordan Short
 */
class LoginMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      email: "",
      password: "",
      token: null,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("myViewingListToken")) {
      this.setState({
        authenticated: true,
        token: localStorage.getItem("myViewingListToken"),
      });
    }
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleLogoutClick = () => {
    this.setState({ authenticated: false, token: null });
    localStorage.removeItem("myViewingListToken");
  };

  handleLoginClick = () => {
    let url =
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/authenticate";

    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    fetch(url, { method: "POST", headers: new Headers(), body: formData })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        if ("token" in data.results) {
          this.setState({ authenticated: true, token: data.results.token });

          localStorage.setItem("myViewingListToken", data.results.token);
        }
      })
      .catch((err) => {
        console.log("something went wrong ", err);
      });
  };

  render() {
    let page = (
      <Login
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleLoginClick={this.handleLoginClick}
      />
    );
    if (this.state.authenticated) {
      page = (
        <div>
          <Reading token={this.state.token} logout={this.handleLogoutClick}/>
        </div>
      );
    }

    return <div>{page}</div>;
  }
}

export default LoginMain;
