import React from "react";

/**
 * Child component that produces checkbox's that when clicked add or remove a
 * paper from the database.
 * 
 * Uses the fetch API to send requests to the "readinglist" endpoint to either add
 * or remove a paper from the database for the logged in user.
 * 
 * @author Jordan Short
 */
class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  componentDidMount() {
    let filteredList = this.props.viewinglist.filter((item) =>
      this.isOnList(item)
    );
    if (filteredList.length > 0) {
      this.setState({ checked: true });
    }
  }

  addToViewingList = () => {
    let url =
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist";

    let formData = new FormData();
    formData.append("token", localStorage.getItem("myViewingListToken"));
    formData.append("add", this.props.paper_id);

    fetch(url, { method: "POST", headers: new Headers(), body: formData })
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          this.setState({ checked: !this.state.checked });
        } else {
          localStorage.clear();
          throw Error(response.statusText);
        }
      })
      .catch((err) => {
        console.log("something went wrong ", err);
      });
  };

  removeFromViewingList = () => {
    let url =
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist";

    let formData = new FormData();
    formData.append("token", localStorage.getItem("myViewingListToken"));
    formData.append("remove", this.props.paper_id);

    fetch(url, { method: "POST", headers: new Headers(), body: formData })
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          this.setState({ checked: !this.state.checked });
        } else {
          throw Error(response.statusText);
        }
      })
      .catch((err) => {
        console.log("something went wrong ", err);
      });
  };

  isOnList = (item) => {
    return item.paper_id === this.props.paper_id;
  };

  handleOnChange = () => {
    if (this.state.checked) {
      this.removeFromViewingList();
    } else {
      this.addToViewingList();
    }
  };

  render() {
    return (
      <input
        type="checkbox"
        id="viewlist"
        name="viewlist"
        value="paper"
        checked={this.state.checked}
        onChange={this.handleOnChange}
      />
    );
  }
}

export default CheckBox;
