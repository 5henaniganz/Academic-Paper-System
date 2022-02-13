import React from "react";
import CheckBox from "./CheckBox";
import CurrentReadingList from "./CurrentReadingList";
import _ from "lodash";

/**
 * Parent component that gets the current users reading list.
 * 
 * Gets current users reading list and instantiates all other used components
 * "CheckBox" & "CurrentReadingList".
 * 
 * @author Jordan Short
 */
class Reading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      viewinglist: [],
    };
  }

  componentDidMount() {
    let url =
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers";

    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        this.setState({ results: data.results });
      })
      .catch((err) => {
        console.log("something went wrong ", err);
      });

    let formData = new FormData();
    formData.append("token", this.props.token);
    fetch(
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist",
      { method: "POST", headers: new Headers(), body: formData }
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        if(data.error){
          window.location.replace("/kf6012/coursework/part2/logout");
          localStorage.clear();
        }
        this.setState({ viewinglist: data.results });
      })
      .catch((err) => {
        console.log("something went wrong ", err);
      });

    const reloadCount = sessionStorage.getItem("reloadCount");
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }

  render() {
    let titleResults = _.uniqBy(this.state.results, "title");
    return (
      <div className="text-center">
        <h1 className="text-2xl text-head-orange font-bold mb-5 mt-5">
          Reading List
        </h1>
        {this.state.viewinglist &&
          this.state.viewinglist.map((paperIds, i) => (
            <li className="inline">
              <CurrentReadingList key={i} curPaperId={paperIds.paper_id} />{" "}
            </li>
          ))}
        <h1 className="text-2xl text-head-orange font-bold mb-5 mt-5">
          Add Book to Reading List
        </h1>
        <ul>
          {titleResults &&
            titleResults.map((papers, x) => (
              <div key={x}>
                <li className="text-center mt-2">
                  {papers.title}{" "}
                  <CheckBox
                    viewinglist={this.state.viewinglist}
                    paper_id={papers.paper_id}
                  />
                </li>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

export default Reading;
